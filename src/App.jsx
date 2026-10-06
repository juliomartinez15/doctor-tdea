import Footer from "./components/Footer"
import Menu from "./components/Menu"
import Consultation from "./pages/Consultation"

function App() {
  return (
    <>
      <Menu />
      <main className="container">
        <Consultation />
      </main>
      <Footer />
    </>
  )
}

export default App
