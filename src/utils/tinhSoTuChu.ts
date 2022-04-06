import { calc } from './calc'

const so = [
    [],
    ['a', 'j', 's'],
    ['b', 'k', 't'],
    ['c', 'l', 'u'],
    ['d', 'm', 'v'],
    ['e', 'n', 'x'],
    ['f', 'o', 'y'],
    ['g', 'p', 'z'],
    ['h', 'q'],
    ['i', 'r'],
]

export const tinhSoTuChu = (string: string) => {
    let num = 0
    for (let i = 0; i < string.length; i++) {
        so.forEach((item, index) => {
            if (item.includes(string[i])) num += index
        })
    }

    return calc(num)
}
