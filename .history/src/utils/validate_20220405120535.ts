import { ISearchInput } from './interfaces'

export const validate = (value: ISearchInput) => {
    const {
        fullname,
        name,
        day,
        day2,
        fullname2,
        gender,
        month,
        month2,
        year,
        year2,
        withLove,
    } = value

    if (!fullname) return 'Vui lòng nhập đúng họ tên.'
    else if (fullname.split(' ').length < 2) return 'Vui lòng nhập đúng họ tên.'
    else if (!day || !month || !year)
        return 'Bạn chưa nhập đúng ngày tháng năm sinh!'
    else if (Number(year) < 1940 || Number(year) > new Date().getFullYear())
        return 'Năm sinh bạn nhập không đúng'
    else if (withLove) {
        if (!fullname2) return 'Vui lòng nhập họ tên người yêu của bạn'
        else if (!day || !month || !year)
            return 'Bạn chưa nhập đúng ngày tháng năm sinh người yêu!'
        else if (Number(year) < 1940 || Number(year) > new Date().getFullYear())
            return 'Năm sinh người yêu bạn nhập không đúng'
    }
}
