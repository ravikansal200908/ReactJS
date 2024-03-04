import Greeting from "./component/Greeting"
import ListRendering_1 from "./component/ListRendering_1"
import ListRendering_2 from "./component/ListRendering_2"
import ListRendering_3 from "./component/ListRendering_3"


function App() {

    return (
        <div>
            <Greeting isLoggedIn={true} />
            {/* Output: Welcome back, User! */}

            <Greeting isLoggedIn={false} />
            {/* Output: Please sign up. */}

            {/* List Rendering */}
            <ListRendering_1 />
            <ListRendering_2 />
            <ListRendering_3 />
        </div>
    )
}

export default App
