export function xoaNguyenAm(string: string) {
    const vowels = /[aeiouy]+/g
    return string.replace(vowels, '')
}
