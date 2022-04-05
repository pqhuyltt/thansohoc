import { createContext, ReactNode, useState } from 'react'

interface ISearch {
    fullname?: string
    day?: string
    month?: string
    year?: string
    number?: number
}

export const SearchContext = createContext<{
    info: ISearch
    setInfo: (value: ISearch) => void
}>({
    setInfo: (value) => {},
    info: {},
})

export const SearchContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [info, setInfo] = useState<ISearch>({
        day: '',
        month: '',
        year: '',
        fullname: '',
        number: 0,
    })

    return (
        <SearchContext.Provider value={{ info, setInfo }}>
            {children}
        </SearchContext.Provider>
    )
}
