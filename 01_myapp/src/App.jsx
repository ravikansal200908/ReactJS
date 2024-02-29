import Hello from "./component/Hello"
import Welcome from "./component/Welcome"
import { WelcomeOther } from "./component/WelcomeOther"

function App() {
  return (
    <div>
      {/* basic function */}
      <Hello />
      <Hello></Hello>
      {/* arrow function */}
      <Welcome />
      <WelcomeOther />
    </div>
  )
}

export default App
