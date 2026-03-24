 
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Layout/Layout'
import { Home } from '../Pages/Home'
import { Sign } from '../Pages/Sign'
import AccountPage from '../Pages/AccountPage'
import Notfound from '../Pages/Notfound';
import SingleProduct from '../Pages/SingleProduct';
import Wishlist from '../Pages/Wishlist';
import AllProducts from '../Pages/AllProducts';

export const Router = createBrowserRouter ([
 {
   path:"",
   element:<Layout/>,
   children:[
    { element:<Sign/> , index:true },
    { path:"home", element:<Home/> },
    { path:"account", element:<AccountPage/> },
    { path:"*", element:<Notfound/> },
    { path:"singleproduct", element:<SingleProduct/> },
    { path:"wishlist", element:<Wishlist/> },
    { path:"allproducts", element:<AllProducts/> }
   ]
 }
])

 

 