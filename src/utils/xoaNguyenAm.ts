export function xoaNguyenAm(string: string) {
    const vowels = /[aeiou]+/g
    return string.replace(vowels, '')
}
