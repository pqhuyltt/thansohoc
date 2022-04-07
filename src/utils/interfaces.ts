import { ChangeEvent } from 'react'

export type InputChange = ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>

export interface ISearchInput {
    fullname?: string
    name?: string
    gender?: string
    day?: string
    month?: string
    year?: string
    day2?: string
    month2?: string
    year2?: string
    fullname2?: string
    withLove?: boolean
    songaysinh?: number
    namcanhan?: number
    sotenrieng?: number
    solinhhon?: number
    sobieudat?: number
    number2?: number
    number1?: number
    dinh?: {
        dinh1: number
        dinh2: number
        dinh3: number
        dinh4: number
    }
    dayNum?: number
    monthNum?: number
    yearNum?: number
}
