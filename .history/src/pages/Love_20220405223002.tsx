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
                        <p>(S??? ch??? ?????o: {info.number1})</p>
                    </div>
                    <div className="flex-1 flex flex-col font-semibold items-center text-base">
                        <p className="uppercase">{name2}</p>
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
                <h3 className="font-bold mt-5">
                    T??nh c??ch n???i tr???i c???a {name1}
                </h3>
                <p className="leading-[1.6]">
                    - ??i???m m???nh: {genitive[info.number1 as number].strong}
                </p>
                <p className="leading-[1.6]">
                    - ??i???m y???u: {genitive[info.number1 as number].weak}
                </p>
                <h3 className="font-bold mt-5">
                    T??nh c??ch n???i tr???i c???a {name2}
                </h3>
                <p className="leading-[1.6]">
                    - ??i???m m???nh: {genitive[info.number2 as number].strong}
                </p>
                <p className="leading-[1.6]">
                    - ??i???m y???u: {genitive[info.number2 as number].weak}
                </p>
                <div className="mt-10 text-[#f7d51a]">
                    <p className="mt-1">
                        - T??? l??? th???p ngh??a l?? c??ch ti???p c???n cu???c s???ng c???a 2
                        ng?????i c?? nhi???u ??i???m kh??c nhau. V?? v???y, sau m???t th???i
                        gian, t??? l??? th???p c?? th??? d???n ?????n hi???u bi???t ng??y c??ng s??u
                        s???c h??n v??? nhau.
                    </p>
                    <p className="mt-1">
                        - T??? l??? cao c?? ngh??a l?? c??c c??ch ti???p c???n cu???c s???ng c???a
                        2 ng?????i ??t kh??c bi???t v?? gi???ng nhau nhi???u h??n. V?? v???y, ??t
                        s??? kh??c bi???t h??n ????? c??? 2 c???n ph???i c??? g???ng. M???i quan c??
                        th??? tho???i m??i v?? h???nh ph??c ngay t??? ?????u.
                    </p>
                    <p className="mt-1">
                        - Tuy nhi??n t???t c??? ?????u c???n s??? th???u hi???u ????? b???t ?????u ?????n
                        v???i nhau v?? x??y d???ng m???i quan h??? g???n k???t l??u d??i.
                    </p>
                    <p className="mt-1">
                        - Th???n s??? h???c l?? 1 c??ng c??? gi??p b???n c?? th??? th???u hi???u v??
                        chinh ph???c ?????i ph????ng d???a v??o ??i???m m???nh, ??i???m y??u, s???
                        th??ch, mong mu???n linh h???n,.... B??o c??o th???n s??? h???c v???i
                        26 ch??? s??? v?? 5 bi???u ????? (d???ng file m???m) c??ng c?? th??? l??
                        m???t m??n qu?? ?? ngh??a v?? b???t ng??? ????? b???n d??nh t???ng cho ?????i
                        ph????ng.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Love
