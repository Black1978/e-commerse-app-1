import useFetch from '../../hooks/useFetch'
import Card from '../card/Card'
import './featuredProducts.scss'

const FeaturedProducts = ({ type }) => {
  
const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

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
                {error
                    ? 'Something was wrong'
                    : loading
                    ? 'Loading'
                    : data.map((item) => {
                          return <Card product={item} key={item.id} />
                      })}
            </div>
        </div>
    )
}

export default FeaturedProducts
