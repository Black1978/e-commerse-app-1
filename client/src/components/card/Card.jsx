import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className='linkCard'>
            <div className='card' key={product.id}>
                <div className='image'>
                    {product?.attributes.isNew && <span>New Season</span>}
                    <img src={process.env.REACT_APP_UPLOAD_URL + product?.attributes?.img?.data?.attributes?.url} alt='' className='mainImage' />
                    <img src={process.env.REACT_APP_UPLOAD_URL + product?.attributes?.img2?.data?.attributes?.url} alt='' className='secondImage' />
                </div>
                <span className='title'>{product?.attributes.title}</span>
                <div className='prices'>
                    <span className='olDprice'>${product?.oldPrice || product?.attributes.price + 20}</span>
                    <span className='price'>${product?.attributes.price}</span>
                </div>
            </div>
        </Link>
    )
}

export default Card
