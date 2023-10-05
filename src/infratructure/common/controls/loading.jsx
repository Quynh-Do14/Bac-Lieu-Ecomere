import React from 'react'

const LoadingFullPage = (loading = false) => {
    if (loading) {
        return (

            <div id="preloader">
                <div id="status"></div>
            </div>
        )
    }
    else {
        return
    }

}

export default LoadingFullPage