import { useCallback, useEffect, useState } from 'react'

export const useFetchImages = () => {
    const [images, setImages] = useState([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(true)

    const peticion = useCallback( async () => {

        const key = 'client_id=wVIYvGz5wGTyMb5IqE4IboObycDMlDF_1lYU33GnTIs'
        let route = `https://api.unsplash.com/photos/?${key}`

        if (input !== "") {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`
        }

        setLoading(true)

        const res = await fetch(route)
        const data = await res.json()

        data.results ? setImages(data.results) : setImages(data)

        setLoading(false)
    }, [input])

    useEffect(() => { 
        peticion()
    }, [peticion])

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value

        setInput(text)
    }

    return [images, loading, handleSubmit]
}
