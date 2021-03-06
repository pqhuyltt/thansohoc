import React, { useContext, useEffect, useMemo, useRef } from 'react'
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
    const btnRef = useRef<HTMLButtonElement>(null)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

    const handleCoppy = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        navigator.clipboard.writeText(`${window.location.href}`)
        btnRef.current && (btnRef.current.textContent = 'Coppied')
        timeoutRef.current = setTimeout(() => {
            btnRef.current && (btnRef.current.textContent = 'Coppy')
        }, 2000)
    }

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
                    <div className="flex-1 flex font-semibold flex-col items-center text-base">
                        <p className="uppercase ">
                            {info.fullname?.split(' ')[1]}
                        </p>
                        <p>(S??? ch??? ?????o: {info.number1})</p>
                    </div>
                    <div className="flex-1 flex flex-col font-semibold items-center text-base">
                        <p className="uppercase">
                            {info.fullname2?.split(' ')[1]}
                        </p>
                        <p>(S??? ch??? ?????o: {info.number2})</p>
                    </div>
                </div>
                <h3 className="text-center text-base font-bold mt-2">
                    T??NH C??CH B???N NG?? C???A 2 B???N
                </h3>
                <p className="mt-2">
                    B???n c?? th??? chia s??? k???t qu??? n??y b???ng link sau:{' '}
                </p>
                <div className="flex items-center mt-2">
                    <input
                        className="w-[240px] h-6 rounded-md bg-white text-[#333] text-[15px] border-none outline-none px-2"
                        type="text"
                        value={window.location.href}
                    />
                    <button
                        onClick={handleCoppy}
                        ref={btnRef}
                        className="h-6 ml-2 px-1 rounded-md bg-[#007BFF] text-xs block"
                    >
                        Coppy
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Love
