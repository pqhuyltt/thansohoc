import { createContext } from 'react'

interface ISearchInput {
    fullname: string
    name: string
    gender: number
    day: number
    month: number
    year: number
    day2: number
    month2: number
    year2: number
    fullname2: string
}

export const searchContext = createContext({
    number: 0,
})
