import React from 'react';

const UserDetails = ({ userData }) => {

    return (
        <>
            <div>
                <b>Full Name: </b>
                {!userData || !Object.keys(userData).length ? (
                    <span>Loading...</span>
                ) : (
                    <span>{`${userData?.name?.title} ${userData?.name?.last} ${userData?.name?.first}`}</span>
                )}
            </div>
            <div>
                <b>Email Address: </b>
                {!userData || !Object.keys(userData).length ? (
                    <span>Loading...</span>
                ) : (
                    <span>{`${userData?.email}`}</span>
                )}
            </div>
        </>
    )
}

export default UserDetails;