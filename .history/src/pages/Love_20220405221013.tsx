import React, { useContext, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { SearchContext } from '../contexts/SearchContext'
import { CHI_SO_DUONG_DOI } from './Detail'
import { FaHeart } from 'react-icons/fa'

const Love = () => {
    const { info } = useContext(SearchContext)
    const navigate = useNavigate()
    const chiSo1 = useMemo(() => CHI_SO_DUONG_DOI[info.number1 as number], [])
    const chiSo2 = useMemo(() => CHI_SO_DUONG_DOI[info.number2 as number], [])

    useEffect(() => {
        if (!info.number1 || !info.number2) navigate('/')
    }, [])

    return (
        <Layout>
            <div className="mt-10 flex items-center justify-center text-white">
                <div
                    style={{ textShadow: '0px 0px 20px #ff008e' }}
                    className=" text-[#6ab2ff] text-3xl font-bold "
                >
                    <p>{info.fullname}</p>
                    <p className="">{`${info.day}/${info.month}/${info.year}`}</p>
                </div>
                <div className="mx-5 text-[#fd6a78] animate-scale">
                    <FaHeart className="text-3xl" />
                </div>
                <div
                    style={{ textShadow: '0px 0px 20px #ff008e' }}
                    className="text-[#fd6a78] text-3xl font-bold "
                >
                    <p>{info.fullname2}</p>
                    <p className="">{`${info.day2}/${info.month2}/${info.year2}`}</p>
                </div>
            </div>
            <div className="rp-box">
                <div className="flex">
                    <div className="flex-1 flex flex-col items-center text-base">
                        <p className="uppercase font-semibold">
                            {info.fullname?.split(' ')[1]}
                        </p>
                        <p>(Số chủ đạo: {info.number1})</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center text-base">
                        <p className="uppercase font-semibold">
                            {info.fullname2?.split(' ')[1]}
                        </p>
                        <p>(Số chủ đạo: {info.number2})</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Love
