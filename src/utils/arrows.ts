export const arrows = (arr: number[]) => {
    return {
        thucte: arr.includes(1) && arr.includes(4) && arr.includes(7),
        thieutrattu: arr.every(
            (item) => item !== 1 && item !== 4 && item !== 7,
        ),
        canbangcamxuc: arr.includes(2) && arr.includes(5) && arr.includes(8),
        nhaycam: arr.every((item) => item !== 2 && item !== 5 && item !== 8),
        tritue: arr.includes(3) && arr.includes(6) && arr.includes(9),
        trinhonganhan: arr.every(
            (item) => item !== 3 && item !== 6 && item !== 9,
        ),
        hoatdong: arr.includes(7) && arr.includes(8) && arr.includes(9),
        thudong: arr.every((item) => item !== 7 && item !== 8 && item !== 9),
        ychi: arr.includes(4) && arr.includes(5) && arr.includes(6),
        uathan: arr.every((item) => item !== 4 && item !== 5 && item !== 6),
        kehoach: arr.includes(1) && arr.includes(2) && arr.includes(3),
        quyettam: arr.includes(1) && arr.includes(5) && arr.includes(9),
        trihoan: arr.every((item) => item !== 1 && item !== 5 && item !== 9),
        tamlinh: arr.includes(3) && arr.includes(5) && arr.includes(7),
        hoainghi: arr.every((item) => item !== 3 && item !== 5 && item !== 7),
    }
}
