import React from 'react';

const Card = ({ id, name, username, email }) => {

    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='photo' src={`https://robohash.org/${id}`} />
            <h2>{name} {username}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;