import { createContext, ReactNode, useState } from 'react'

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

export const SearchContext = createContext({
    number: 0,
})

export const SearchContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [number, setNumber] = useState({ number: 0 })

    return (
        <SearchContext.Provider value={number}>
            {children}
        </SearchContext.Provider>
    )
}
