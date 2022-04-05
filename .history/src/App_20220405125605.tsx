import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import { SearchContextProvider } from './contexts/SearchContext'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
    const [count, setCount] = useState(0)

    return (
        <SearchContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ket-qua" element={<Result />} />
                </Routes>
            </BrowserRouter>
        </SearchContextProvider>
    )
}

export default App
