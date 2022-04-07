import React, { MouseEvent } from 'react'
import { IoMdClose } from 'react-icons/io'
import gg from '../assets/images/gg.png'
import lp from '../assets/images/lp.png'

interface IPopupProps {
    setShow: (value: boolean) => void
}

const Popup: React.FC<IPopupProps> = ({ setShow }) => {
    return (
        <div
            onClick={setShow.bind(this, false)}
            className="fixed bg-[rgba(0,0,0,.5)] z-[9999] top-0 left-0 right-0 bottom-0 flex flex-col"
        >
            <div
                onClick={(e: MouseEvent) => e.stopPropagation()}
                className="mx-auto relative mt-3 max-w-[783px] w-full flex-1 min-h-[1px] bg-white "
            >
                <div
                    onClick={setShow.bind(this, false)}
                    className="bg-[#CC3539] text-white py-1 px-2 rounded-md absolute top-0 right-0 flex items-center cursor-pointer"
                >
                    <span className="mr-2">Tắt để nhập mã</span>
                    <IoMdClose className="text-[#F4FF00] text-xl" />
                </div>
                <div className="h-full overflow-auto text-[#333] px-4">
                    <h2 className="text-xl font-bold text-center mt-[40px] mb-6">
                        Các bạn vui lòng làm theo hướng dẫn
                    </h2>
                    <div className="flex flex-wrap gap-y-2">
                        <strong className="mr-2">Bước 1:</strong> Copy nhanh{' '}
                        <div
                            onClick={() => {
                                navigator.clipboard.writeText(`Đăng ký binance`)
                            }}
                            className="ml-2 bg-red-600 inline-block cursor-pointer font-medium text-white px-1"
                        >
                            Đăng ký binance
                        </div>
                    </div>
                    <div className="mt-6">
                        <strong className="mr-2">Bước 2:</strong> Click{' '}
                        <a
                            className="bg-red-600 mx-1 cursor-pointer font-medium text-white px-1"
                            target="_blank"
                            href="https://google.com.vn"
                        >
                            vào đây
                        </a>{' '}
                        để tới google
                    </div>
                    <p className="mt-6">Vào đúng trang web như hình</p>
                    <p className="mt-3">
                        <img
                            className="w-full object-contain"
                            src={gg}
                            alt="img"
                        />
                    </p>
                    <div className="">
                        <strong className="mr-2">Bước 3:</strong> Lướt xuống
                        cuối bài viết và nhấn vào nút{' '}
                        <strong className="ml-1">Lấy Pass</strong>
                    </div>
                    <p className="mt-3">
                        <img className="w-[103px]" src={lp} alt="lay pass" />
                    </p>
                    <div className="mt-6">
                        <strong className="mr-2">Bước 4:</strong> Nhập lại
                        password vào ô để tiếp tục xem luận giải về con số chủ
                        đạo
                    </div>
                    <p className="mt-6">Chúc các bạn thành công</p>
                </div>
            </div>
        </div>
    )
}

export default Popup
