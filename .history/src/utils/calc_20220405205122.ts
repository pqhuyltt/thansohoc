export const calc = (value: number): number => {
    if (num < 12) return num
    const str = value.toString()
    let num = 0
    for (let i = 0; i < str.length; i++) {
        num += Number(str[i])
    }

    return calc(num)
}
