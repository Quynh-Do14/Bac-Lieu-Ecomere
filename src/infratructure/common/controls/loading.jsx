import React from 'react'

const LoadingFullPage = ({ loading = true }) => {
    if (loading) {
        return (

            <div id="preloader">
                <div id="status"></div>
            </div>
        )
    }
    else {
        return null
    }

}

export default LoadingFullPage