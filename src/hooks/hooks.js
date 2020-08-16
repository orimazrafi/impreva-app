import { useState } from 'react';
import axios from "axios"
export const useFetch = (url, firstKey, secondKey) => {
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState("")
    const handlePrice = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(url);
            setPrice(data[firstKey][secondKey])
            setLoading(false)
        } catch (ex) {
            setLoading(false)
            setPrice("")
            throw (ex.message)
        }
    }
    return [handlePrice, price, loading]
}