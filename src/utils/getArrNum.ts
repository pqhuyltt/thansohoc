export const getArrNum = (value: string) => {
    let rs: number[] = []

    for (let i = 0; i < value.length; i++) {
        value[i] != '0' && rs.push(Number(value[i]))
    }
    return rs
}
