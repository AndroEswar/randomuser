import React from 'react';

const RefreshCTA = ({ onClick }) => {

    const handleOnClick = () => {
        onClick?.()
    }

    return (
        <div>
            <button onClick={handleOnClick}>
                Refresh
            </button>
        </div>
    )
}

export default RefreshCTA;