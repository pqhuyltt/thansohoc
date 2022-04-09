export const calc = (
    value: number,
    deep?: boolean,
    maxVal: number = 11,
): number => {
    if (value < 12 && !deep) return value
    const str = value.toString()
    let num = 0
    for (let i = 0; i < str.length; i++) {
        num += Number(str[i])
    }
    if (num <= maxVal) return num
    return calc(num, deep, maxVal)
}
