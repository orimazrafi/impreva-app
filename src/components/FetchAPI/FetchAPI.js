import React from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

export const FetchAPI = props => {
    const [loading, setLoading] = React.useState(false);
    const [price, setPrice] = React.useState("")
    const handlePrice = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo")
            setPrice(data["Global Quote"]["05. price"])
            setLoading(false)
        } catch (ex) {
            setLoading(false)
            setPrice("")
            throw (ex.message)
        }


    }
    return (<Container>
        {loading && <h1>Loading...</h1>}
        {price && <h1>{price}</h1>}
        <button onClick={handlePrice}>getPrice</button>
    </Container>)
}
