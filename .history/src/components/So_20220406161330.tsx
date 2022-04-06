import React from 'react'

interface ISoProps {
    color: string
    label: string
    so: number
}

const So: React.FC<ISoProps> = ({ color, label, so }) => {
    return (
        <div className="flex flex-col items-center text-white relative before-ang">
            <div className="mb-2 font-bold text-[18px]">{label}</div>
            <div
                style={{ background: color }}
                className="w-[80px] h-[34px] rounded-md text-white flex justify-center items-center"
            >
                {so}
            </div>
        </div>
    )
}

export default So
