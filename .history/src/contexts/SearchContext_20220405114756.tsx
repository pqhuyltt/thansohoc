import { createContext, ReactNode, useState } from 'react'

export const SearchContext = createContext<{
    setNumber: (value: number) => void
    number: number
}>({
    setNumber: (value) => {},
    number: 0,
})

export const SearchContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [number, setNumber] = useState(0)

    return (
        <SearchContext.Provider value={{ number, setNumber }}>
            {children}
        </SearchContext.Provider>
    )
}
