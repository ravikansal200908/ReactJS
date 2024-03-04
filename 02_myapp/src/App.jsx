import ParentOne from "./component/ParentOne"
import ParentTwo from "./component/ParentTwo"

function App() {

  return (
    <>
      {/* pass props from parent to child */}
      <ParentOne />

      {/* control parent to child and vice versa */}
      <ParentTwo />
    </>
  )
}

export default App
