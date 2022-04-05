import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { SearchContext } from '../contexts/SearchContext'
import bg from '../assets/images/mandala-object-1.png'

const Result = () => {
    const { info } = useContext(SearchContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!info.number) navigate('/')
    }, [])

    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center text-3xl font-bold select-none cursor-default text-white">
                <h2>
                    Họ và tên:{' '}
                    <span className="text-[#F7D51A]">{info.fullname}</span>
                </h2>
                <h2 className="mt-4">
                    Ngày sinh:{' '}
                    <span className="text-[#F7D51A]">{`${info.day}/${info.month}/${info.year}`}</span>
                </h2>
                <h3 className="mt-8 uppercase text-2xl">Số chủ đạo</h3>
            </div>
            <div className="flex justify-center mt-4">
                <div
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                    }}
                    className="w-[350px] h-[350px]"
                ></div>
            </div>
        </Layout>
    )
}

export default Result
