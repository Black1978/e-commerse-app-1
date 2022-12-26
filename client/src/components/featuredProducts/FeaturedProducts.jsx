import Card from '../card/Card'
import './featuredProducts.scss'

const FeaturedProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
            img2: 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
            title: 'Long T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
            img2: 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
            img2: 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
            title: 'Graphic T-shirt',
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
            img2: 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
            title: 'Long S',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]
    return (
        <div className='featuredProducts'>
            <div className='top'>
                <h2>{type} products</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sit
                    dignissimos consequuntur dolore quidem perferendis natus dolores ad amet eaque?
                </p>
            </div>
            <div className='bottom'>
                {data.map((product) => {
                    return <Card product={product} />
                })}
            </div>
        </div>
    )
}

export default FeaturedProducts
