import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Intro from "./components/Intro"

function App() {
    return (
        <>
            <Header />
            <Intro />
            <Main />
            <div>This is react project</div>
            <Footer />
        </>
    )
}

export default App
