import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-3">
        {Array(9).fill().map((_, i) => (
            <div key={i} className="p-15 flex flex-wrap items-center justify-center">
              <ItemListContainer />
            </div>
        ))}
      </div>
    </>
  )
}

export default App
