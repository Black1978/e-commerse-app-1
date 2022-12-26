import './home.scss'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'

const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <FeaturedProducts type='featured' />
            {/* <FeaturedProducts type='training' /> */}
        </div>
    )
}

export default Home
