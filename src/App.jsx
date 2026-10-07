import Footer from "./components/Footer"
import Menu from "./components/Menu"
import RouterPublic from "./routers/RouterPublic"

function App() {
  return (
    <>
      <Menu />
      <main className="container">
        <RouterPublic />
      </main>
      <Footer />
    </>
  )
}

export default App
