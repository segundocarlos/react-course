import { GifItem } from './GifItem';
import { useFetchGift } from '../hooks/useFetchGift';


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGift ( category )


return (
    <>
        <h3>{category}</h3>

        {
            isLoading && (<h2>Cargando...</h2>)
        }

        <div className='card-grid'>
            {
                images.map( image => (
                   <GifItem  key={image.id} title = {image.title} url={image.url}/>
                ))
            }
        </div>
    </>
  )
}



