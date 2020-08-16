import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';

export const Counter = (props) => {
    const [count, setCount] = useState(1);
    const [running, setRunning] = useState(false);
    const runningRef = useRef(null)
    const runTimmer = () =>
        setCount(pre => pre + 1)

    const handlePlay = () => {
        if (!running) {
            runningRef.current = setInterval(() => {
                runTimmer()
            }, 1000);
            setRunning(true)
        } else {
            clearInterval(runningRef.current);
            setRunning(false)
        }
    }

    return (
        <Container>
            <div>{count}</div>
            <button onClick={handlePlay}> {running ? "pause" : "play"}</button>
        </Container>)
}