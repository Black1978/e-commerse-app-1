import './products.scss'
import List from './../../components/list/List'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const Products = () => {
    const catId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    return (
        <div className='products'>
            <div className='left'>
                <div className='filterItem'>
                    <h2>Product Categories</h2>
                    <div className='inputItem'>
                        <input type='checkbox' id='1' value={1} />
                        <label htmlFor='1'>Shoes</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id='2' value={1} />
                        <label htmlFor='2'>Skirts</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id='3' value={1} />
                        <label htmlFor='3'>Coats</label>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Filter by price</h2>
                    <div className='inputItem'>
                        <span>0</span>
                        <input
                            type='range'
                            min={0}
                            max={1000}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Sort by</h2>
                    <div className='inputItem'>
                        <input
                            type='radio'
                            name='price'
                            id='asc'
                            value='asc'
                            onChange={() => setSort('asc')}
                        />
                        <label htmlFor='asc'>Price (Lowest first)</label>
                    </div>
                    <div className='inputItem'>
                        <input
                            type='radio'
                            name='price'
                            id='desc'
                            value='desc'
                            onChange={() => setSort('desc')}
                        />
                        <label htmlFor='desc'>Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img
                    src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
                    alt='' className='catImg'
                />
                <List catId={catId} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    )
}

export default Products
