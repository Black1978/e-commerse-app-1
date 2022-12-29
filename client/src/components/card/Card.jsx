import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className='linkCard'>
            <div className='card' key={product.id}>
                <div className='image'>
                    {product.isNew && <span>New Season</span>}
                    <img src={product.img} alt='' className='mainImage' />
                    <img src={product.img2} alt='' className='secondImage' />
                </div>
                <span className='title'>{product.title}</span>
                <div className='prices'>
                    <span className='olDprice'>${product.oldPrice}</span>
                    <span className='price'>${product.price}</span>
                </div>
            </div>
        </Link>
    )
}

export default Card
