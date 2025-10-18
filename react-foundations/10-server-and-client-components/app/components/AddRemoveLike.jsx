// Indicate that this is a client component
'use client';

// Import useState from React
import { useState } from 'react';

// AddRemoveLike component with like functionality
export default function AddRemoveLike() {

    // State to manage likes
    const [likes, setLikes] = useState(0);

    // Function to add or remove likes
    function addRemoveLike(likeAction = 'add') {

        // Add a like
        if (likeAction === 'add') setLikes(likes + 1);

        // Remove a like if greater than 0
        if (likeAction === 'remove') {
            if (likes > 0) setLikes(likes - 1);
        };

    };

    // Render the component
    return (

        // Buttons and likes display
        <>
            <button onClick={addRemoveLike.bind(null, 'remove')}>Unlike</button>
            <button onClick={addRemoveLike.bind(null, 'add')}>Like</button>
            <p>Likes: {likes}</p>
        </>

    );

}