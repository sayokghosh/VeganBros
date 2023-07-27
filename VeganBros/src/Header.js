import React from 'react'
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function Header() {
  return (
    
    <nav className='header'>
        <Link to="/">
        <img className='header_logo' src='https://companieslogo.com/img/orig/CRWD-442a5e7d.png?t=1648651763' />
        
        </Link>
        <div className='header_Nav'>
            <Link to="/name" className='header_link'>
            <Link to="" className='header_link'>
                <div className='header_basket'>
                    <FmdGoodIcon />
                    <span className='header_opt2 basket_count'>INDIA (IN)</span>
                </div>

            </Link>
            </Link></div>

        <div className='hh_Search'>

        <input type='Text' className='search_hh' />
        <SearchIcon className='search_Logoo'/>

        </div>

        <div className='header_Nav'>
            <Link to="/Login" className='header_link'>
                <div className='header_option'>
                    <span className='header_op1'>Sayok Ghosh</span>
                    <span className='header_opt2'>Sign In</span>
                </div>
            </Link>

            <Link to="/name" className='header_link'>
                <div className='header_option'>
                    <span className='header_op1'>Returns</span>
                    <span className='header_opt2'>& Orders</span>
                </div>
            </Link>

            <Link to="/name" className='header_link'>
                <div className='header_option'>
                    <span className='header_op1'>Your</span>
                    <span className='header_opt2'>Prime</span>
                </div>
            </Link>
                
            <Link to="" className='header_link'>
                <div className='header_basket'>
                    <ShoppingBasketIcon />
                    <span className='header_opt2 basket_count'>0</span>
                </div>

            </Link>
            
        </div>
        
    </nav>

    
  )
}

export default Header