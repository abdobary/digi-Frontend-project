import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ProfileForm from '../components/ProfileForm'
import './AccountPage.css'
import { useAuth } from '../Context/AuthContext';

function Placeholder({ title }) {
  return (
    <div className="placeholder">
      <p>{title}</p>
    </div>
  )
}

export default function AccountPage() {
  const [active, setActive] = useState('profile')
  const { MyEmail } = useAuth();

  const content = {
    profile:       <ProfileForm />,
    address:       <Placeholder title="Address Book" />,
    payment:       <Placeholder title="My Payment Options" />,
    returns:       <Placeholder title="My Returns" />,
    cancellations: <Placeholder title="My Cancellations" />,
    wishlist:      <Placeholder title="My WishList" />,
  }

  return (
    <div className="ap">
      <div className="ap-topbar">
        <nav className="ap-breadcrumb">
          <Link to="/home">Home</Link>
          <span>/</span>
          <span>My Account</span>
        </nav>
        <p className="ap-welcome">Welcome! <span>{MyEmail?.user_username || 'User'}</span></p>
      </div>

      <div className="ap-layout">
        <Sidebar active={active} onSelect={setActive} />
        <main className="ap-content">
          {content[active]}
        </main>
      </div>
    </div>
  )
}