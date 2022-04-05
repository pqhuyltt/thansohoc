import React, { useContext, useEffect, useMemo } from 'react'
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

    useEffect(() => {
        if (!info.number1 || !info.number2) navigate('/')
    }, [])

    return (
        <Layout>
            <div className="mt-10 flex items-center justify-center">
                <div>
                    <p>{info.fullname}</p>
                    <p className="">{`${info.day}/${info.month}/${info.year}`}</p>
                </div>
                <FaHeart />
                <div>
                    <p>{info.fullname2}</p>
                    <p className="">{`${info.day2}/${info.month2}/${info.year2}`}</p>
                </div>
            </div>
        </Layout>
    )
}

export default Love
