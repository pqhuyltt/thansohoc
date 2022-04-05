import React, { useEffect, useMemo, useState } from 'react'
import Layout from '../components/Layout'
import s1 from '../assets/images/s1.png'
import s2 from '../assets/images/s2.png'
import s3 from '../assets/images/s3.png'
import s4 from '../assets/images/s4.png'
import s5 from '../assets/images/s5.png'
import s6 from '../assets/images/s6.png'
import s7 from '../assets/images/s7.png'
import spinbg from '../assets/images/sign-mandala-bg.png'

const Home = () => {
    const images = useMemo(() => [s1, s2, s3, s4, s5, s6, s7], [])
    const [activeIndex, setActiveIndex] = useState<number>(0)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setActiveIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1,
            )
        }, 3000)

        return () => {
            clearTimeout(timeOut)
        }
    }, [activeIndex])

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
                        className="absolute bg-center bg-no-repeat bg-cover top-0 left-0 right-0 bottom-0 animate-spin"
                        style={{
                            backgroundImage: `url(${spinbg})`,
                        }}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Home
