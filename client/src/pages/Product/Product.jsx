import { useState } from 'react'
import './product.scss'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ScaleIcon from '@mui/icons-material/Scale'

const Product = () => {
    const images = [
        'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
        'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
    ]
    const [mainImg, setMainImg] = useState(images[1])
    const [quantity, setQuantity] = useState(1)

    return (
        <div className='product'>
            <div className='left'>
                <div className='images'>
                    <img src={images[0]} alt='' onClick={() => setMainImg(images[0])} />
                    <img src={images[1]} alt='' onClick={() => setMainImg(images[1])} />
                </div>
                <div className='mainImg'>
                    <img src={mainImg} alt='' />
                </div>
            </div>
            <div className='right'>
                <h1>Long Sleeve Graphic T-shirt</h1>
                <span className='price'>$19</span>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nisi
                    eveniet illum tempore debitis eligendi mollitia libero explicabo asperiores
                    maiores. Officia aut, quaerat expedita quo, quod accusamus culpa officiis
                    consequatur, aperiam atque est ratione delectus quidem ducimus dolor iste
                    possimus.
                </p>
                <div className='quantity'>
                    <span onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
                        -
                    </span>
                    <span>{quantity}</span>
                    <span onClick={() => setQuantity((prev) => prev + 1)}>+</span>
                </div>
                <button>
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
        </div>
    )
}

export default Product
