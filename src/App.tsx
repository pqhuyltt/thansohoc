import { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SearchContext, SearchContextProvider } from './contexts/SearchContext'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Love from './pages/Love'
import Result from './pages/Result'

function App() {
    const { setInfo } = useContext(SearchContext)

    return (
        <SearchContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ket-qua" element={<Result />} />
                    <Route path="/bao-cao" element={<Detail />} />
                    <Route path="/tinh-duyen" element={<Love />} />
                </Routes>
            </BrowserRouter>
        </SearchContextProvider>
    )
}

export default App
