export const calc = (value: number): number => {
    if (value < 10) return value

    const str = value.toString()
    let num = 0
    for (let i = 0; i < str.length; i++) {
        num += Number(str[i])
    }

    if (num < 10) return num
    return calc(num)
}
