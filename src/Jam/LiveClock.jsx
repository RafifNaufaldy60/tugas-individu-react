import React from 'react'
import { useState, useEffect } from 'react'

export default function LiveClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}
