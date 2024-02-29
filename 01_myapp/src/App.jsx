import Hello from "./component/Hello"
import Welcome from "./component/Welcome"

function App() {
  return (
    <div>
      {/* basic function */}
      <Hello />
      <Hello></Hello>
      {/* arrow function */}
      <Welcome />
    </div>
  )
}

export default App
