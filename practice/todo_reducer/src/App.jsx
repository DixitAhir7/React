import Displaytodo from "./components/Displaytodo"
import Todoinput from "./components/Todoinput"
import Provider from "./Provider"

function App() {
  return (
    <>
      <Provider>
        <Todoinput />
        <Displaytodo />
      </Provider>
    </>
  )
}

export default App
