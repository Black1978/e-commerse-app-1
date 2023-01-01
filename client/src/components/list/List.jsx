import './list.scss'
import Card from './../card/Card'
import useFetch from '../../hooks/useFetch'

const List = ({ subCats, maxPrice, sort, catId }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    )

    return (
        <div className='list'>
            {error
                ? 'Something was wrong'
                : loading
                ? 'Loading'
                : data.map((item) => {
                      return <Card product={item} key={item.id} />
                  })}
        </div>
    )
}

export default List
