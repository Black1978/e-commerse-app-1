import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

function Header() {
    const handlerIconOnclick = () => {
        document.querySelector('.header__menu').classList.toggle('active')
        document.querySelector('.header__icon').classList.toggle('active')
        document.querySelector('body').classList.toggle('lock')
    }
    return (
        <header className='header'>
            <div className='header__row'>
                <nav className='header__menu menu'>
                    <div className='menu__body'>
                        <div className='navbar'>
                            <div className='wrapper'>
                                <div className='left'>
                                    <div className='item'>
                                        <img src='/img/en.png' alt='' />
                                        <KeyboardArrowDownIcon />
                                    </div>
                                    <div className='item'>
                                        <span>USD</span>
                                        <KeyboardArrowDownIcon />
                                    </div>
                                    <div className='item'>
                                        <Link className='link' to='/products/1'>
                                            Men
                                        </Link>
                                    </div>
                                    <div className='item'>
                                        <Link className='link' to='/products/2'>
                                            Women
                                        </Link>
                                    </div>
                                    <div className='item'>
                                        <Link className='link' to='/products/3'>
                                            Children
                                        </Link>
                                    </div>
                                </div>
                                <div className='center'>
                                    <Link className='link' to='/'>
                                        ComEnergyCompany
                                    </Link>
                                </div>
                                <div className='right'>
                                    <div className='item'>
                                        <Link className='link' to='/'>
                                            Homepage
                                        </Link>
                                    </div>
                                    <div className='item'>
                                        <Link className='link' to='/'>
                                            About
                                        </Link>
                                    </div>
                                    <div className='item'>
                                        <Link className='link' to='/'>
                                            Contact
                                        </Link>
                                    </div>
                                    <div className='item'>
                                        <Link className='link' to='/'>
                                            Stores
                                        </Link>
                                    </div>
                                    <div className='icons'>
                                        <SearchIcon />
                                        <PersonOutlineOutlinedIcon />
                                        <FavoriteBorderOutlinedIcon />
                                        <div className='cartIcon'>
                                            <ShoppingCartOutlinedIcon />
                                            <span>0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='header__icon-wrapper'>
                    <div className='header__icon' onClick={handlerIconOnclick}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
