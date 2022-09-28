import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../Screens/Home/Home";
import Login from "../Screens/Login";
import Post from "../Screens/Posts/Post/Post";
import Register from "../Screens/Register";

export default function Unlogged() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/post/:id" element={<Post/>}></Route>
            </Routes>
        </Router>
    )
}