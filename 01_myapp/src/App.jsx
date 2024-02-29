import Hello from "./component/Hello"
import Welcome from "./component/Welcome"
import { WelcomeOther } from "./component/WelcomeOther"
import Greet from "./component/Greet"

function App() {
  return (
    <div>
      {/* basic function */}
      <Hello />
      <Hello></Hello>

      {/* arrow function */}
      <Welcome />
      <WelcomeOther />

      {/* Managing props */}
      <Greet name='Mohan' heroname='Thor' />
      <Greet name='Sumit' heroname='X-Men' />
      <Greet name='Ravi' heroname='Hulk'>
        <p>This is child.</p>
      </Greet>
      
    </div>
  )
}

export default App
