import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { ShoppingContext } from './ContextProvider';
import { signOut, auth } from './firebase';

function Header(){
    const { state } = useContext(ShoppingContext);
    const { user } = state;

    function logout(){
      signOut(auth);
    }

    return <nav className="header">
        <Link to="/">
         <img className="header__logo" 
         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
         alt="" />
        </Link>
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
        <Link to={user ? "" : "/login"} className="header__link">
          <div onClick={logout} className="header__option">
            <span className="header__optionLineOne">Hello {user ? user : 'user'}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to={user ? "/checkout" : "/login"} className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">{state.basket.length}</span>
            </div>
        </Link>
        </div>
    </nav>
}

export default Header;