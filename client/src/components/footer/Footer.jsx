import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='wrapper'>
                <div className='top'>
                    <div className='item'>
                        <h2>Categories</h2>
                        <span>Women</span>
                        <span>Men</span>
                        <span>Shoes</span>
                        <span>Accessories</span>
                        <span>New Arrivals</span>
                    </div>
                    <div className='item'>
                        <h2>Links</h2>
                        <span>FAQ</span>
                        <span>Pages</span>
                        <span>Compare</span>
                        <span>Cookies</span>
                    </div>
                    <div className='item'>
                        <h2>About</h2>
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur id
                            temporibus fuga quas eveniet modi nam incidunt quia officia animi?
                        </span>
                    </div>
                    <div className='item'>
                        <h2>Contact</h2>
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur id
                            temporibus fuga quas eveniet modi nam incidunt quia officia animi?
                        </span>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <span className='logo'>Comenergycompany</span>
                        <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
                    </div>
                    <div className='right'>
                        <img src='/img/payment.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
