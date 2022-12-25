import './slider.scss'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import { useState } from 'react'

const data = [
    'https://www.ocwr.gov/wp-content/uploads/2010/03/Exposed-Energized-Wiring-and-Electrical-Components-Featured-Image-troy-bridges-maXnRLszYY0-unsplash.png',
    'https://media.istockphoto.com/id/1295002392/photo/electrical-cabinet-with-best-power-fuseboard-equipment.jpg?s=612x612&w=0&k=20&c=buYOxvOpuFRbX74ZTdYxfjarhD-1KJ-k4LNleyNHYg8=',
    'https://electriccitycorp.com/wp-content/uploads/2021/03/what-is-a-neutral-wire-scaled.jpeg',
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        return setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        return setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1)
    }
    return (
        <div className='slider'>
            <div
                className='container'
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                <img src={data[0]} alt='' />
                <img src={data[1]} alt='' />
                <img src={data[2]} alt='' />
            </div>
            <div className='icons'>
                <div className='icon' onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className='icon' onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider
