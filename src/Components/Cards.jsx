import { useFetchImages } from '../Hooks/useFetchImages'
import Card from './Card'
import FormImg from './FormImg'
import Loading from './Loading'

const Cards = () => {
    const [images, loading, handleSubmit] = useFetchImages()

    return (
        <div className="text-center">
            
            <FormImg handleSubmit={handleSubmit} />
            <hr />

            { loading && <Loading /> }

            <div className="row">
                {
                    images.map((image) => {
                        return <div key={image.id} className="col">
                            <Card img={image.urls.regular} />
                        </div>
                    })
                }
            </div>

            
        </div>
    )
}

export default Cards
