import { useState } from 'react';

// Header component with a title prop
function Header({ title }) {
    return <h1>{title ? title : "Default title"}</h1>
};

// HomePage component with state management
export default function HomePage() {

    // List of names to display
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

    //
    const [likes, setLikes] = React.useState(0)

    // Function to add or remove likes
    function addRemoveLike(likeAction = 'add') {
        if (likeAction === 'add') setLikes(likes + 1);
        if (likeAction === 'remove') {
            if (likes > 0) setLikes(likes - 1);
        };
    };

    // Render the component
    return (

        // Main app container
        <div>

            {/* Use the Header component */}
            <Header title="Develop. Preview. Ship." />

            {/* List of names */}
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            {/* Like and Unlike buttons */}
            <button onClick={addRemoveLike.bind(null, 'remove')}>Unlike</button>
            <button onClick={addRemoveLike.bind(null, 'add')}>Like</button>

            {/* Display the number of likes */}
            <p>Likes: {likes}</p>

        </div>

    )
};
 