import { Link } from 'react-router-dom'
import './categories.scss'

function Categories() {
    return (
        <div className='categories'>
            <div className='col'>
                <div className='row'>
                    <Link to='/products/1' className='link'>
                        <button className='button'>Cabinetes</button>
                        <img src='/img/categories/cabinetes.jpg' alt='' />
                    </Link>
                </div>
                <div className='row'>
                    <Link to='/products/2' className='link'>
                        <button className='button'>Wires</button>
                        <img src='/img/categories/electrical-wires.jpg' alt='' />
                    </Link>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <Link to='/products/3' className='link'>
                        <button className='button'>Equipment</button>
                        <img src='/img/categories/electrical-equipment.jpg' alt='' />
                    </Link>
                </div>
            </div>
            <div className='col col-l'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <Link to='/products/4' className='link'>
                                <button className='button'>Lamps</button>
                                <img src='/img/categories/lamps.jpg' alt='' />
                            </Link>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <Link to='/products/5' className='link'>
                                <button className='button'>Transformers</button>
                                <img
                                    src='/img/categories/heavy-electrical-power-transformer.webp'
                                    alt=''
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <Link to='/products/6' className='link'>
                        <button className='button'>Switchers</button>
                        <img src='/img/categories/switchers.jpg' alt='' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories
