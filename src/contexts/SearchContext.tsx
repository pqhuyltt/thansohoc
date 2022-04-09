import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ISearchInput } from '../utils/interfaces'

// interface ISearch {
//     fullname?: string
//     day?: string
//     month?: string
//     year?: string
//     number?: number
// }

export const SearchContext = createContext<{
    info: ISearchInput
    setInfo: (value: ISearchInput) => void
}>({
    setInfo: (value) => {},
    info: {},
})

export const SearchContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [info, setInfo] = useState<ISearchInput>(
        JSON.parse(localStorage.getItem('state') ?? `{}`) ?? {},
    )

    return (
        <SearchContext.Provider value={{ info, setInfo }}>
            {children}
        </SearchContext.Provider>
    )
}
