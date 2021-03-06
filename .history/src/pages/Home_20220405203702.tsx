import React, { useContext, useEffect, useMemo, useState } from 'react'
import Layout from '../components/Layout'
import s1 from '../assets/images/s1.png'
import s2 from '../assets/images/s2.png'
import s3 from '../assets/images/s3.png'
import s4 from '../assets/images/s4.png'
import s5 from '../assets/images/s5.png'
import s6 from '../assets/images/s6.png'
import s7 from '../assets/images/s7.png'
import spinbg from '../assets/images/sign-mandala-bg.png'
import { InputChange, ISearchInput } from '../utils/interfaces'
import { validate } from '../utils/validate'
import { calc } from '../utils/calc'
import { SearchContext } from '../contexts/SearchContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const images = useMemo(() => [s1, s2, s3, s4, s5, s6, s7], [])
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [err, setErr] = useState('')
    const [input, setInput] = useState<ISearchInput>({
        fullname: '',
        name: '',
        gender: '',
        day: '1',
        month: '1',
        year: '0',
        day2: '1',
        month2: '1',
        year2: '0',
        fullname2: '',
        withLove: false,
    })
    const { setInfo } = useContext(SearchContext)
    const navigate = useNavigate()
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setActiveIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1,
            )
        }, 4000)

        return () => {
            clearTimeout(timeOut)
        }
    }, [activeIndex])

    const handleChange = (e: InputChange) =>
        setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
    const handleSearch = () => {
        const error = validate(input)
        if (error) return setErr(error)
        const day = Number(input.day)
        const month = Number(input.month)
        const year = input.year
        const dayNum = calc(day)
        const monthNum = calc(month)
        const yearNum =
            Number(year[0]) +
            Number(year[1]) +
            Number(year[2]) +
            Number(year[3])

        const rs = calc(
            dayNum + monthNum + yearNum < 21 ? calc(yearNum) : yearNum,
        )

        setInfo({
            day: input.day,
            month: input.month,
            year: input.year,
            fullname: input.fullname,
            number: rs,
        })
        navigate('/ket-qua')
    }

    return (
        <Layout>
            <div className="mt-5 flex justify-center">
                <div className="w-[200px] h-[200px] relative">
                    <div className="absolute z-10 w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
                        <img
                            className="w-full h-full rounded-full animate-scale"
                            src={images[activeIndex]}
                            alt="img"
                        />
                    </div>
                    <div
                        className="absolute bg-center bg-no-repeat bg-cover top-0 left-0 right-0 bottom-0 animate-spin2"
                        style={{
                            backgroundImage: `url(${spinbg})`,
                        }}
                    />
                </div>
            </div>
            <h3 className="text-[#FFED00] text-xl font-semibold text-center mt-6">
                LU???N GI???I CH??NH X??C
            </h3>
            <h4 className="text-[#FFED00] text-lg font-semibold text-center mt-1">
                ????????ng ??????i, ??i???m m???nh y???u, v????n m????nh, s???? nghi????p, n??m th??nh c??ng,
                t????ng h???p t??nh duy??n, h??n nh??n,...
            </h4>

            <div className="mt-4">
                {err && (
                    <p className="text-[#ff5656] text-base font-bold text-center mb-2">
                        {err}
                    </p>
                )}
                <div className="rounded-lg bg-[rgba(0,0,0,.4)] p-4">
                    <p className="form-label">
                        Nh???p h??? t??n khai sinh (n??n nh???p kh??ng d???u)
                    </p>
                    <input
                        value={input.fullname}
                        type="text"
                        className="form-input w-full mt-1"
                        name="fullname"
                        placeholder="Nh???p ?????y ????? h??? t??n khai sinh"
                        onChange={handleChange}
                    />
                    <p className="form-label mt-3">
                        T??n th?????ng d??ng n???u c?? (VD: Ng???c Anna, Nh??m,...)
                    </p>
                    <div className="flex gap-x-2 mt-1">
                        <input
                            value={input.name}
                            type="text"
                            className="form-input w-8/12"
                            name="name"
                            placeholder="Nh???p t??n th?????ng d??ng n???u c??"
                            onChange={handleChange}
                        />
                        <select
                            value={input.gender}
                            onChange={handleChange}
                            className="w-4/12 form-input "
                            name="gender"
                        >
                            <option value="0">Gi???i t??nh</option>
                            <option value="1">Nam</option>
                            <option value="2">N???</option>
                            <option value="3">Kh??c</option>
                        </select>
                    </div>
                    <p className="form-label mt-3">
                        Ng??y/th??ng/n??m sinh d????ng l???ch
                    </p>
                    <div className="flex gap-x-2 mt-1">
                        <select
                            value={input.day}
                            onChange={handleChange}
                            className=" form-input w-4/12"
                            name="day"
                        >
                            {Array(31)
                                .fill(0)
                                .map((_, index) => (
                                    <option key={index} value={index + 1}>
                                        {`Ng??y ${
                                            index + 1 < 10
                                                ? `0${index + 1}`
                                                : index + 1
                                        }`}
                                    </option>
                                ))}
                        </select>
                        <select
                            value={input.month}
                            onChange={handleChange}
                            className=" form-input w-4/12"
                            name="month"
                        >
                            {Array(12)
                                .fill(0)
                                .map((_, index) => (
                                    <option key={index} value={index + 1}>
                                        {`Th??ng ${
                                            index + 1 < 10
                                                ? `0${index + 1}`
                                                : index + 1
                                        }`}
                                    </option>
                                ))}
                        </select>
                        <input
                            value={input.year}
                            type="number"
                            onChange={handleChange}
                            className="form-input w-4/12"
                            name="year"
                            placeholder="N??m sinh"
                        />
                    </div>
                    <div className=" rounded-lg border txt-gradient border-white text-white text-sm font-bold  p-2 w-1/2 mt-4">
                        <span
                            className="cursor-pointer block"
                            onClick={setInput.bind(this, {
                                ...input,
                                withLove: !input.withLove,
                            })}
                        >
                            Tra c???u t??nh duy??n
                        </span>
                        <div>
                            {input.withLove && (
                                <div className="grid gap-2 grid-cols-3 mt-2">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        className="form-input col-span-3"
                                        name="fullname2"
                                        placeholder="Nh???p h??? t??n c???a ng?????i y??u/v???/ch???ng"
                                        value={input.fullname2}
                                    />
                                    <select
                                        onChange={handleChange}
                                        className=" form-input"
                                        name="day2"
                                        value={input.day2}
                                    >
                                        {Array(31)
                                            .fill(0)
                                            .map((_, index) => (
                                                <option
                                                    key={index}
                                                    value={index + 1}
                                                >
                                                    {`Ng??y ${
                                                        index + 1 < 10
                                                            ? `0${index + 1}`
                                                            : index + 1
                                                    }`}
                                                </option>
                                            ))}
                                    </select>
                                    <select
                                        onChange={handleChange}
                                        className=" form-input"
                                        name="month2"
                                        value={input.month2}
                                    >
                                        {Array(12)
                                            .fill(0)
                                            .map((_, index) => (
                                                <option
                                                    key={index}
                                                    value={index + 1}
                                                >
                                                    {`Th??ng ${
                                                        index + 1 < 10
                                                            ? `0${index + 1}`
                                                            : index + 1
                                                    }`}
                                                </option>
                                            ))}
                                    </select>
                                    <input
                                        onChange={handleChange}
                                        type="number"
                                        className="form-input"
                                        name="year2"
                                        placeholder="N??m sinh"
                                        value={input.year2}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={handleSearch}
                        style={{
                            backgroundImage:
                                'linear-gradient(-45deg, #6a5af9, #d66efd)',
                        }}
                        className="rounded-lg mt-4 w-full text-white text-base font-bold select-none p-2"
                    >
                        Tra c???u
                    </button>
                    <div className="mt-4 text-white text-sm">
                        <h4 className="font-semibold text-base">CH?? TH??CH:</h4>
                        <p>
                            - N???u ng??y sinh tr??n gi???y t??? (ch???ng minh th??, b???ng
                            l??i, khai sinh,...) v?? ng??y sinh d????ng l???ch th???t c???a
                            b???n kh??c nhau th?? cu???c ?????i b???n s??? c?? x??o tr???n c???a c???
                            2 ng??y sinh n??y. B???n n??n tra c???u c??? hai ????? bi???t
                            th??m, tuy nhi??n k???t qu??? s??? thi??n v??? ng??y sinh d????ng
                            l???ch!
                        </p>
                        <p>
                            - T??n th?????ng d??ng l?? t??n m???i ng?????i th?????ng d??ng ?????
                            g???i b???n ho???c m???t danh x??ng m?? b???n th?????ng d??ng, t??n
                            n??y s??? b?? tr??? v??o bi???u ????? ng??y sinh c???a b???n. N???u b???n
                            kh??ng c?? t??n th?????ng g???i, h??? th???ng s??? t??? l???y t??n t???
                            h??? t??n khai sinh c???a b???n ????? t??nh b?? tr??? trong bi???u
                            ????? t???ng h???p.
                        </p>
                        <p>
                            - S??? ch??? ?????o tuy r???t quan tr???ng nh??ng kh??ng th??? hi???n
                            h???t to??n b??? th??ng tin th???n s??? c???a b???n. ????? xem k???t
                            qu??? tra c???u ch??nh x??c nh???t, h??y k???t h???p t???t c??? c??c
                            ch??? s??? m?? ch??ng t??i t??nh to??n cho b???n! T??m hi???u th??m{' '}
                            <a
                                href="https://tracuuthansohoc.com/than-so-hoc-la-gi/#quan-trong-doi-voi-nguoi-moi-xem-than-so-hoc-tai-tracuuthansohoc-sao-cho-dung"
                                target="_blank"
                                className="text-[#e44ebf] hover:underline"
                            >
                                t???i ????y
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
