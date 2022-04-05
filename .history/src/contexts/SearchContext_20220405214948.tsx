import { createContext, ReactNode, useState } from 'react'
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
    const [info, setInfo] = useState<ISearchInput>({
        day: '',
        month: '',
        year: '',
        fullname: '',
        number1: 0,
        number2: 0,
    })

    return (
        <SearchContext.Provider value={{ info, setInfo }}>
            {children}
        </SearchContext.Provider>
    )
}
