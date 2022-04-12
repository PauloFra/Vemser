import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function Routers() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        <Footer /> 
    </BrowserRouter>
  )
}

export default Routers