import React from 'react'
import { Container } from 'react-bootstrap'
import { useFetch } from './../../hooks/hooks';
import { url, firstKey, secondKey } from '../../helpers';

export const FetchAPI = props => {
    const [handlePrice, price, loading] = useFetch(url, firstKey, secondKey)
    return (<Container>
        {loading && <h1>Loading...</h1>}
        {price && <h1>{price}</h1>}
        <button onClick={handlePrice}>getPrice</button>
    </Container>)
}
