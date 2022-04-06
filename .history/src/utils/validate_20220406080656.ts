import { ISearchInput } from './interfaces'

export const validate = (value: ISearchInput) => {
    const {
        fullname,
        day,
        day2,
        fullname2,
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
    else if (Number(year) < 1700 || Number(year) > new Date().getFullYear())
        return 'Năm sinh bạn nhập không đúng'
    else if (withLove) {
        if (!fullname2) return 'Vui lòng nhập họ tên người yêu'
        else if (fullname.split(' ').length < 2)
            return 'Vui lòng nhập đúng họ tên người yêu.'
        else if (!day2 || !month2 || !year2)
            return 'Bạn chưa nhập đúng ngày tháng năm sinh người yêu!'
        else if (
            Number(year2) < 1700 ||
            Number(year2) > new Date().getFullYear()
        )
            return 'Năm sinh người yêu bạn nhập không đúng'
    }
}
