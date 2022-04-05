import React, { useContext, useEffect, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { SearchContext } from '../contexts/SearchContext'
import { CHI_SO_DUONG_DOI } from './Detail'
import { FaHeart } from 'react-icons/fa'
import { genitive } from '../pages/Result'

const Love = () => {
    const { info } = useContext(SearchContext)
    const navigate = useNavigate()
    const chiSo1 = useMemo(() => CHI_SO_DUONG_DOI[info.number1 as number], [])
    const chiSo2 = useMemo(() => CHI_SO_DUONG_DOI[info.number2 as number], [])
    const btnRef = useRef<HTMLButtonElement>(null)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
    const name1 = info.fullname?.split(' ')[1]
    const name2 = info.fullname2?.split(' ')[1]

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
                        <p className="uppercase ">{name1}</p>
                        <p>(Số chủ đạo: {info.number1})</p>
                    </div>
                    <div className="flex-1 flex flex-col font-semibold items-center text-base">
                        <p className="uppercase">{name2}</p>
                        <p>(Số chủ đạo: {info.number2})</p>
                    </div>
                </div>
                <h3 className="text-center text-base font-bold mt-2">
                    TÍNH CÁCH BẢN NGÃ CỦA 2 BẠN
                </h3>
                <p className="mt-2">
                    Bạn có thể chia sẻ kết quả này bằng link sau:{' '}
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
                <h3 className="font-bold mt-5">
                    Tính cách nổi trội của {name1}
                </h3>
                <p className="leading-[1.6]">
                    - Điểm mạnh: {genitive[info.number1 as number].strong}
                </p>
                <p className="leading-[1.6]">
                    - Điểm yếu: {genitive[info.number1 as number].weak}
                </p>
            </div>
        </Layout>
    )
}

export default Love
