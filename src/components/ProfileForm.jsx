import { useState, useEffect } from 'react'
import './ProfileForm.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const EMPTY = { username: '', email: '', address: '' }

export default function ProfileForm() {
  const navigate = useNavigate();
  const { MyEmail, SetTheEmail} = useAuth();

  const [form, setForm] = useState(EMPTY)
  const [passwords, setPasswords] = useState({ current: '', next: '', confirm: '' })
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Initialize form with user data
  useEffect(() => {
    if (MyEmail) {
      setForm({
        username: MyEmail.user_username || '',
        email: MyEmail.user_email || '',
        address: MyEmail.user_address || ''
      });
    }
  }, [MyEmail]);

  const handleField = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setSuccess(''); setError('')
  }

  const handlePass = (e) => {
    setPasswords(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setSuccess(''); setError('')
  }

  const handleCancel = () => {
    navigate('/home');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      // FIRST: Verify current password if user wants to make ANY changes
      const verifyData = {
        email: MyEmail.user_email,
        password: passwords.current
      };
      
      // Verify current password
      const verifyResponse = await fetch('https://digi-backend-project.vercel.app/api/verify-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(verifyData)
      });
      
      const verifyResult = await verifyResponse.json();
      
      if (!verifyResponse.ok) {
        throw new Error('Current password is incorrect');
      }
      
      // If password is correct, proceed with updates
      const updateData = {
        username: form.username,
        address: form.address
      };
      
      // If user wants to change password, send new password
      if (passwords.next) {
        if (passwords.next !== passwords.confirm) { 
          setError("New passwords don't match."); 
          setLoading(false);
          return 
        }
        if (passwords.next.length < 6) { 
          setError('Password must be at least 6 characters.'); 
          setLoading(false);
          return 
        }
        updateData.password = passwords.next;
      }
      
      // Check if any changes were made
      const hasChanges = (updateData.username !== form.username) || 
                         (updateData.address !== form.address) || 
                         updateData.password;
      
      if (!hasChanges) {
        setError('No changes detected');
        setLoading(false);
        return;
      }
      
      // Send update request
      const response = await fetch(`https://digi-backend-project.vercel.app/api/edit-user/${encodeURIComponent(MyEmail.user_email)}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(updateData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update profile');
      }
      
      setSuccess('Profile updated successfully!');
      setPasswords({ current: '', next: '', confirm: '' });
      
      SetTheEmail({ user_email: MyEmail.user_email, user_username: updateData.username, user_address: updateData.address, user_pass: updateData.password});

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pf">
      <h2 className="pf-title">Edit Your Profile</h2>

      {error && <div className="pf-alert pf-alert--error">{error}</div>}
      {success && <div className="pf-alert pf-alert--success">{success}</div>}

      <form onSubmit={handleSubmit} noValidate>

        <div className="pf-group" style={{ marginBottom: '16px' }}>
          <label>Username</label>
          <input 
            name="username" 
            value={form.username} 
            onChange={handleField} 
            placeholder={MyEmail?.user_username || "Enter username"} 
          />
        </div>

        <div className="pf-row">
          <div className="pf-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              placeholder={MyEmail?.user_email || "Enter email"}
              readOnly
            />
          </div>
          <div className="pf-group">
            <label>Address</label>
            <input 
              name="address" 
              value={form.address} 
              onChange={handleField} 
              placeholder={MyEmail?.user_address || "Enter address"} 
            />
          </div>
        </div>

        <div className="pf-passwords">
          <p className="pf-pass-title">Password Changes</p>
          <input 
            name="current" 
            type="password" 
            value={passwords.current} 
            onChange={handlePass} 
            placeholder="Current Password" 
            required
          />
          <input 
            name="next" 
            type="password" 
            value={passwords.next} 
            onChange={handlePass} 
            placeholder="New Password (optional)" 
          />
          <input 
            name="confirm" 
            type="password" 
            value={passwords.confirm} 
            onChange={handlePass} 
            placeholder="Confirm New Password" 
          />
        </div>

        <div className="pf-actions">
          <button type="button" className="pf-btn-cancel" onClick={handleCancel} disabled={loading}>Cancel</button>
          <button type="submit" className="pf-btn-save" disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>

      </form>
    </div>
  )
}