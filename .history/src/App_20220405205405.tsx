import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SearchContextProvider } from './contexts/SearchContext'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
    return (
        <SearchContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ket-qua" element={<Result />} />
                    <Route path="/bao-cao" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </SearchContextProvider>
    )
}

export default App
