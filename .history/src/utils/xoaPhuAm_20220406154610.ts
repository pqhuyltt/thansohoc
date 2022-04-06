export function xoaPhuAm(string: string, khongnguyeam: string) {
    for (let i = 0; i < string.length; i++) {
        khongnguyeam.includes(string[i]) &&
            (string = string.split(string[i]).join(''))
    }
    return string
}
