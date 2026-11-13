import { useState, useEffect } from 'react'
import './LiveClock.css'

export default function LiveClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="live-clock">
            <p className="live-clock__label">Waktu sekarang</p>
            <h1 className="live-clock__time">{time}</h1>
            <p className="live-clock__caption">Waktu lokal perangkat Anda</p>
        </div>
    )
}
