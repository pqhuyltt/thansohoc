export const calc = (value: number, deep?: boolean): number => {
    if (value < 12 && !deep) return value
    const str = value.toString()
    let num = 0
    for (let i = 0; i < str.length; i++) {
        num += Number(str[i])
    }
    if (num < 12) return num
    return calc(num)
}
