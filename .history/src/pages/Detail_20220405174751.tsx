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

    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center text-3xl font-bold select-none cursor-default text-white">
                <p>BÁO CÁO THẦN SỐ HỌC</p>
                <h2 className="mt-3">
                    Họ và tên:{' '}
                    <span className="text-[#F7D51A]">{info.fullname}</span>
                </h2>
                <h2 className="mt-3">
                    Ngày sinh:{' '}
                    <span className="text-[#F7D51A]">{`${info.day}/${info.month}/${info.year}`}</span>
                </h2>
            </div>
            <div className="mt-5 rounded-lg bg-[rgba(0,0,0,.4)] p-4 text-white">
                <h3 className="rp-heading">1. CHU KỲ VẬN SỐ CỦA BẠN</h3>
            </div>
        </Layout>
    )
}

export default Detail
