import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { SearchContext } from '../contexts/SearchContext'

const Result = () => {
    const { info } = useContext(SearchContext)
    console.log(info)
    return (
        <Layout>
            <h1 className="text-white">{info.number}</h1>
        </Layout>
    )
}

export default Result
