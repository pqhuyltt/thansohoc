export function xoaPhuAm(string: string, khongnguyeam: string) {
    let rs: string = string
    for (let i = 0; i < string.length; i++) {
        khongnguyeam.includes(string[i]) && (rs = rs.split(string[i]).join(''))
    }
    return rs
}
