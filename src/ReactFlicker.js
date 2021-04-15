import * as React from "react"
import PropTypes from 'prop-types'

const {useState, useEffect} = React;

const FlickerElement = ({
                            children,
                            flickerMaxDuration = 100,
                            flickerMinDuration = 30,
                            flickerIntervalMax = 1000,
                            flickerIntervalMin = 500,
                            persistentClassName = "",
                            flickerClassName = "",
                        }) => {
    const [isFlickering, setFlickering] = useState(false)
    useEffect(() => {
        testForValidity()
        flicker()
    }, [])

    const flicker = () => {
        setFlickering(true)
        setTimeout(() => {
            setFlickering(false)
        }, generateRandomInteger(flickerMinDuration, flickerMaxDuration))
        setTimeout(() => {
            flicker()
        }, generateRandomInteger(flickerIntervalMin, flickerIntervalMax))
    }
    const testForValidity = () => {
        testCount()
    }

    const testCount = () => {
        if (React.Children.count(children) > 1)
            throw new Error(
                "Illegal Number Of Children. You may only pass 1 HTML element to this component."
            )
    }

    const generateRandomInteger = (floor, ceiling) => {
        const range = ceiling - floor
        return Math.floor(range * Math.random()) + floor
    }

    return React.cloneElement(children, {
        className: `${persistentClassName} ${isFlickering ? flickerClassName : ""}`,
    })
}

FlickerElement.propTypes = {
    children: PropTypes.element,
    flickerMaxDuration: PropTypes.number,
    flickerMinDuration: PropTypes.number,
    flickerIntervalMax: PropTypes.number,
    flickerIntervalMin: PropTypes.number,
    persistentClassName: PropTypes.string,
    flickerClassName: PropTypes.string,
}


export default FlickerElement
