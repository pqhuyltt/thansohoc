import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { SearchContext } from '../contexts/SearchContext'

const Result = () => {
    const { info } = useContext(SearchContext)
    return <Layout>{info.number}</Layout>
}

export default Result
