import React from 'react'
import { useSpring, animated } from 'react-spring'
export default function Ripple(x) {
    const styles = useSpring({
        from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
        to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
        config: { duration: 3000 },
    })
    return <animated.div style={styles}>{x}</animated.div>
}