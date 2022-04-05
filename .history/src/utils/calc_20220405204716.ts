export const calc = (value: number): number => {
    const str = value.toString()
    let num = 0
    for (let i = 0; i < str.length; i++) {
        num += Number(str[i])
    }
    console.log({ str, num })
    if (num < 12) return num
    return calc(num)
}
