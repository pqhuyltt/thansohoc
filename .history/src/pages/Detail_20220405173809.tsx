import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { SearchContext } from '../contexts/SearchContext'

const Detail = () => {
    const { info } = useContext(SearchContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!info.number) navigate('/')
    }, [])

    return <Layout>df</Layout>
}

export default Detail
