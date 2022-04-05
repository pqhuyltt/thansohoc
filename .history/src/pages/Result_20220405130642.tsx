import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { SearchContext } from '../contexts/SearchContext'

const Result = () => {
    const { info } = useContext(SearchContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!info.number) navigate('/')
    }, [])

    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center text-2xl font-bold select-none cursor-default text-white">
                <h2>
                    Họ và tên: <span>{info.fullname}</span>
                </h2>
                <h2>
                    Ngày sinh:{' '}
                    <span>{`${info.day}/${info.month}/${info.year}`}</span>
                </h2>
                <h3>Số chủ đạo</h3>
            </div>
        </Layout>
    )
}

export default Result
