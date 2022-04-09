const so = [
    [],
    ['a', 'j', 's'],
    ['b', 'k', 't'],
    ['c', 'l', 'u'],
    ['d', 'm', 'v'],
    ['e', 'n', 'w'],
    ['f', 'o', 'x'],
    ['g', 'p', 'y'],
    ['h', 'q', 'z'],
    ['i', 'r'],
]

export const getArrNumFromString = (data: string) => {
    const str = data.replace(/\s/g, '')
    let rs: number[] = []

    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < so.length; j++) {
            if (so[j].includes(str[i])) {
                rs.push(j)
                break
            }
        }
    }

    return rs
}
