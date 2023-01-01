import { useState } from 'react'
import './product.scss'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ScaleIcon from '@mui/icons-material/Scale'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'

const Product = () => {
    const productId = parseInt(useParams().id)
    const { data, loading, error } = useFetch(`/products/${productId}?populate=*`)
    const [mainImg, setMainImg] = useState('img')
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    return (
        <div className='product'>
            {loading ? (
                'Loading'
            ) : (
                <>
                    <div className='left'>
                        <div className='images'>
                            <img
                                src={
                                    process.env.REACT_APP_UPLOAD_URL +
                                    data?.attributes?.img?.data?.attributes?.url
                                }
                                alt=''
                                onClick={() => setMainImg('img')}
                            />
                            <img
                                src={
                                    process.env.REACT_APP_UPLOAD_URL +
                                    data?.attributes?.img2?.data?.attributes?.url
                                }
                                alt=''
                                onClick={() => setMainImg('img2')}
                            />
                        </div>
                        <div className='mainImg'>
                            <img
                                src={
                                    process.env.REACT_APP_UPLOAD_URL +
                                    data?.attributes?.[mainImg]?.data?.attributes?.url
                                }
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='right'>
                        <h1>{data?.attributes?.title}</h1>
                        <span className='price'>$ {data?.attributes?.price}</span>
                        <p>{data?.attributes?.desc}</p>
                        <div className='quantity'>
                            <span
                                onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
                            >
                                -
                            </span>
                            <span>{quantity}</span>
                            <span onClick={() => setQuantity((prev) => prev + 1)}>+</span>
                        </div>
                        <button
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        id: data.id,
                                        quantity: quantity,
                                        title: data.attributes.title,
                                        desc: data.attributes.desc,
                                        price: data.attributes.price,
                                        img: data.attributes.img.data.attributes.url
                                    })
                                )
                            }
                        >
                            <ShoppingCartOutlinedIcon />
                            <span>ADD TO CART</span>
                        </button>
                        <div className='addTo'>
                            <div className='item'>
                                <FavoriteBorderOutlinedIcon />
                                <span>ADD TO WISH LIST</span>
                            </div>
                            <div className='item'>
                                <ScaleIcon />
                                <span>ADD TO COMPARE</span>
                            </div>
                        </div>
                        <div className='description'>
                            <span>Vendor: Polo</span>
                            <span>Product Type: T-shirt</span>
                            <span>Tag: women, top, T-shirt</span>
                            <hr />
                        </div>
                        <div className='details'>
                            <span>DESCRIPTION</span>
                            <hr />
                            <span>ADDITIONAL INFORMATION</span>
                            <hr />
                            <span>FAQ</span>
                            <hr />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Product
