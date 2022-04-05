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
}
