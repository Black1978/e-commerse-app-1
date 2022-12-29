import './cart.scss'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Cart() {
    const data = [
        {
            id: 1,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
            img2: 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
            title: 'Short T-shirt',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis at a voluptatum explicabo quaerat ab deleniti, sapiente, est placeat neque ut, consequatur voluptatem harum. Cupiditate harum voluptas exercitationem eum quis commodi pariatur autem at dolor ipsa ullam eius et omnis, atque magni fugiat obcaecati a minus vero laudantium quidem quo.',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
            img2: 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
            title: 'Long T-shirt',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis at a voluptatum explicabo quaerat ab deleniti, sapiente, est placeat neque ut, consequatur voluptatem harum. Cupiditate harum voluptas exercitationem eum quis commodi pariatur autem at dolor ipsa ullam eius et omnis, atque magni fugiat obcaecati a minus vero laudantium quidem quo.',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data.map((item) => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h2>{item.title}</h2>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price"> 1 ⨯ ${item.price}</div>
                    </div>
                    <DeleteOutlineOutlinedIcon className='delete'/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart
