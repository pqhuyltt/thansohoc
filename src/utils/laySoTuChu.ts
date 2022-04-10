import { so } from './tinhSoTuChu'

export const laySoTuChu = (str: string) => {
    for (let i = 0; i < so.length; i++) {
        if (so[i].includes(str)) return i
    }

    return ''
}
