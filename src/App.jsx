import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import './App.css'
import Search from "./Search";

function App() {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Search />} />

                <Route path="movie/:id" element={<SingleMovie />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;