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
        day: '',
        month: '',
        year: '',
        day2: '',
        month2: '',
        year2: '',
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
        const year = Number(input.year)
        const dayNum = calc(day)
        const monthNum = calc(month)
        const yearNum = calc(year)

        const rs = calc(dayNum + monthNum + yearNum)

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
                LUẬN GIẢI CHÍNH XÁC
            </h3>
            <h4 className="text-[#FFED00] text-lg font-semibold text-center mt-1">
                Đường đời, điểm mạnh yếu, vận mệnh, sự nghiệp, năm thành công,
                tương hợp tình duyên, hôn nhân,...
            </h4>

            <div className="mt-4">
                {err && (
                    <p className="text-[#ff5656] text-base font-bold text-center mb-2">
                        {err}
                    </p>
                )}
                <div className="rounded-lg bg-[rgba(0,0,0,.4)] p-4">
                    <p className="form-label">
                        Nhập họ tên khai sinh (nên nhập không dấu)
                    </p>
                    <input
                        value={input.fullname}
                        type="text"
                        className="form-input w-full mt-1"
                        name="fullname"
                        placeholder="Nhập đầy đủ họ tên khai sinh"
                        onChange={handleChange}
                    />
                    <p className="form-label mt-3">
                        Tên thường dùng nếu có (VD: Ngọc Anna, Nhím,...)
                    </p>
                    <div className="flex gap-x-2 mt-1">
                        <input
                            value={input.name}
                            type="text"
                            className="form-input w-8/12"
                            name="name"
                            placeholder="Nhập tên thường dùng nếu có"
                            onChange={handleChange}
                        />
                        <select
                            value={input.gender}
                            onChange={handleChange}
                            className="w-4/12 form-input "
                            name="gender"
                        >
                            <option value="0">Giới tính</option>
                            <option value="1">Nam</option>
                            <option value="2">Nữ</option>
                            <option value="3">Khác</option>
                        </select>
                    </div>
                    <p className="form-label mt-3">
                        Ngày/tháng/năm sinh dương lịch
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
                                        {`Ngày ${
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
                                        {`Tháng ${
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
                            placeholder="Năm sinh"
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
                            Tra cứu tình duyên
                        </span>
                        <div>
                            {input.withLove && (
                                <div className="grid gap-2 grid-cols-3 mt-2">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        className="form-input col-span-3"
                                        name="fullname2"
                                        placeholder="Nhập họ tên của người yêu/vợ/chồng"
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
                                                    {`Ngày ${
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
                                                    {`Tháng ${
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
                                        placeholder="Năm sinh"
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
                        Tra cứu
                    </button>
                    <div className="mt-4 text-white text-sm">
                        <h4 className="font-semibold text-base">CHÚ THÍCH:</h4>
                        <p>
                            - Nếu ngày sinh trên giấy tờ (chứng minh thư, bằng
                            lái, khai sinh,...) và ngày sinh dương lịch thật của
                            bạn khác nhau thì cuộc đời bạn sẽ có xáo trộn của cả
                            2 ngày sinh này. Bạn nên tra cứu cả hai để biết
                            thêm, tuy nhiên kết quả sẽ thiên về ngày sinh dương
                            lịch!
                        </p>
                        <p>
                            - Tên thường dùng là tên mọi người thường dùng để
                            gọi bạn hoặc một danh xưng mà bạn thường dùng, tên
                            này sẽ bù trừ vào biểu đồ ngày sinh của bạn. Nếu bạn
                            không có tên thường gọi, hệ thống sẽ tự lấy tên từ
                            họ tên khai sinh của bạn để tính bù trừ trong biểu
                            đồ tổng hợp.
                        </p>
                        <p>
                            - Số chủ đạo tuy rất quan trọng nhưng không thể hiện
                            hết toàn bộ thông tin thần số của bạn. Để xem kết
                            quả tra cứu chính xác nhất, hãy kết hợp tất cả các
                            chỉ số mà chúng tôi tính toán cho bạn! Tìm hiểu thêm{' '}
                            <a
                                href="https://tracuuthansohoc.com/than-so-hoc-la-gi/#quan-trong-doi-voi-nguoi-moi-xem-than-so-hoc-tai-tracuuthansohoc-sao-cho-dung"
                                target="_blank"
                                className="text-[#e44ebf] hover:underline"
                            >
                                tại đây
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
