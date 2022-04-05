import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/ket-qua" element={Result} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
