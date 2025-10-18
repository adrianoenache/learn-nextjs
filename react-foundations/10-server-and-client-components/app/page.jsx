// HomePage component file
import AddRemoveLike from "./components/AddRemoveLike";
import Text from "./components/Text";

// HomePage component with state management
export default function HomePage() {

    // List of names to display
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

    // Render the component
    return (

        // Main app container
        <div>

            <Text
                tag="h1"
                className="title"
                id="main-title"
                data-test="main-title"
                title="Main Title"
            >
                Server and Client Components
            </Text>
            <Text tag="p">
                This is a simple Next.js app demonstrating server and client components.
            </Text>

            {/* List of names */}
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            {/* AddRemoveLike component for interactivity */}
            <AddRemoveLike />

        </div>

    )
};
