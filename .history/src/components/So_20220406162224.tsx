import React from 'react'

interface ISoProps {
    color: string
    label: string
    so: number
}

const So: React.FC<ISoProps> = ({ color, label, so }) => {
    return (
        <div className="flex flex-col items-center  ">
            <div className="mb-2 font-bold text-[18px] text-white">{label}</div>
            <div
                style={{ background: color, color }}
                className="w-[80px] h-[34px] rounded-md  relative before-ang flex justify-center items-center"
            >
                <span className="text-white">{so}</span>
            </div>
        </div>
    )
}

export default So
