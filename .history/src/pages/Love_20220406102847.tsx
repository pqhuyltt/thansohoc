import React, { useContext, useEffect, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { SearchContext } from '../contexts/SearchContext'
import { CHI_SO_DUONG_DOI } from './Detail'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { genitive } from '../pages/Result'
import angle from '../assets/images/angle-1-min.png'

const Love = () => {
    const { info } = useContext(SearchContext)
    const navigate = useNavigate()

    const btnRef = useRef<HTMLButtonElement>(null)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
    const name1 = info.fullname?.split(' ')[1]
    const name2 = info.fullname2?.split(' ')[1]
    const percent = Math.ceil(Math.random() * 30) + 70

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
                    className=" text-[#6ab2ff] md:text-3xl text-2xl font-bold flex flex-col items-center"
                >
                    <p>{info.fullname}</p>
                    <p className="mt-1">{`${info.day}/${info.month}/${info.year}`}</p>
                </div>
                <div className="mx-6 text-[#fd6a78] animate-scale">
                    <FaHeart className="text-3xl" />
                </div>
                <div
                    style={{ textShadow: '0px 0px 20px #ff008e' }}
                    className="text-[#fd6a78] md:text-3xl text-2xl font-bold flex flex-col items-center"
                >
                    <p>{info.fullname2}</p>
                    <p className="mt-1">{`${info.day2}/${info.month2}/${info.year2}`}</p>
                </div>
            </div>
            <p className="text-base font-bold text-white text-center mt-3">
                Tỉ lệ hợp của 2 bạn
            </p>
            <div className="w-[280px] h-[280px] m-auto flex justify-center items-center mt-8 text-white">
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin2">
                        <div
                            className="w-[50px] h-[50px]"
                            style={{
                                backgroundImage: `url(${angle})`,
                                backgroundSize: 'cover',
                            }}
                        />
                        <div
                            className="w-[50px] h-[50px]"
                            style={{
                                backgroundImage: `url(${angle})`,
                                backgroundSize: 'cover',
                            }}
                        />
                    </div>
                    <div className="absolute flex flex-col items-center text-white text-2xl font-bold left-[calc(50%+4px)] top-[43%] -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-baseline">
                            <span
                                style={{ textShadow: '0px 0px 20px #ff008e' }}
                                className="text-[#6ab2ff]"
                            >
                                {name1}
                            </span>
                            <span className="mx-7 text-xl">&</span>
                            <span
                                style={{ textShadow: '0px 0px 20px #ff008e' }}
                                className="text-[#fd6a78]"
                            >
                                {name2}
                            </span>
                        </div>
                        <span>{percent}%</span>
                    </div>
                    <FaRegHeart className="text-[180px] text-[#FD6A78] animate-scale-heart " />
                </div>
            </div>
            <div className="rp-box mt-10">
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
                <h3 className="font-bold mt-5 text-[#007BFF]">
                    Tính cách nổi trội của {name1}
                </h3>
                <p className="leading-[1.6]">
                    - Điểm mạnh: {genitive[info.number1 as number].strong}
                </p>
                <p className="leading-[1.6]">
                    - Điểm yếu: {genitive[info.number1 as number].weak}
                </p>
                <h3 className="font-bold mt-5 text-[#FD6A78]">
                    Tính cách nổi trội của {name2}
                </h3>
                <p className="leading-[1.6]">
                    - Điểm mạnh: {genitive[info.number2 as number].strong}
                </p>
                <p className="leading-[1.6]">
                    - Điểm yếu: {genitive[info.number2 as number].weak}
                </p>
                <div className="mt-10 text-[#f7d51a]">
                    <p className="mt-2">
                        - Tỷ lệ thấp nghĩa là cách tiếp cận cuộc sống của 2
                        người có nhiều điểm khác nhau. Vì vậy, sau một thời
                        gian, tỷ lệ thấp có thể dẫn đến hiểu biết ngày càng sâu
                        sắc hơn về nhau.
                    </p>
                    <p className="mt-2">
                        - Tỷ lệ cao có nghĩa là các cách tiếp cận cuộc sống của
                        2 người ít khác biệt và giống nhau nhiều hơn. Vì vậy, ít
                        sự khác biệt hơn để cả 2 cần phải cố gắng. Mối quan có
                        thể thoải mái và hạnh phúc ngay từ đầu.
                    </p>
                    <p className="mt-2">
                        - Tuy nhiên tất cả đều cần sự thấu hiểu để bắt đầu đến
                        với nhau và xây dựng mối quan hệ gắn kết lâu dài.
                    </p>
                    <p className="mt-2">
                        - Thần số học là 1 công cụ giúp bạn có thể thấu hiểu và
                        chinh phục đối phương dựa vào điểm mạnh, điểm yêu, sở
                        thích, mong muốn linh hồn,.... Báo cáo thần số học với
                        26 chỉ số và 5 biểu đồ (dạng file mềm) cũng có thể là
                        một món quà ý nghĩa và bất ngờ để bạn dành tặng cho đối
                        phương.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Love
