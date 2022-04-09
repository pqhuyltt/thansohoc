export const arrows = (arr: number[]) => {
    return {
        thucte: {
            show: arr.includes(1) && arr.includes(4) && arr.includes(7),
            name: 'Mũi tên thực tế (đủ 1-4-7)',
        },
        thieutrattu: {
            show: arr.every((item) => item !== 1 && item !== 4 && item !== 7),
            name: 'Mũi tên thiếu trật tự (thiếu 1-4-7)',
        },
        canbangcamxuc: {
            show: arr.includes(2) && arr.includes(5) && arr.includes(8),
            name: 'Mũi tên cân bằng cảm xúc (đủ 2-5-8)',
        },
        nhaycam: {
            show: arr.every((item) => item !== 2 && item !== 5 && item !== 8),
            name: 'Mũi nhạy cảm (thiếu 2-5-8)',
        },
        tritue: {
            show: arr.includes(3) && arr.includes(6) && arr.includes(9),
            name: 'Mũi tên trí tuệ (đủ 3-6-9)',
        },
        trinhonganhan: {
            show: arr.every((item) => item !== 3 && item !== 6 && item !== 9),
            name: 'Mũi tên trí nhớ ngắn hạn (thiếu 3-6-9)',
        },
        hoatdong: {
            show: arr.includes(7) && arr.includes(8) && arr.includes(9),
            name: 'Mũi tên hoạt động (đủ 7-8-9)',
        },
        thudong: {
            show: arr.every((item) => item !== 7 && item !== 8 && item !== 9),
            name: 'Mũi tên thụ động (thiếu 7-8-9)',
        },
        ychi: {
            show: arr.includes(4) && arr.includes(5) && arr.includes(6),
            name: 'Mũi tên ý chí (đủ 4-5-6)',
        },
        uathan: {
            show: arr.every((item) => item !== 4 && item !== 5 && item !== 6),
            name: 'Mũi tên uất giận (thiếu 4-5-6)',
        },
        kehoach: {
            show: arr.includes(1) && arr.includes(2) && arr.includes(3),
            name: 'Mũi tên kế hoạch (đủ 1-2-3)',
        },
        quyettam: {
            show: arr.includes(1) && arr.includes(5) && arr.includes(9),
            name: 'Mũi tên quyết tâm (đủ 1-5-9)',
        },
        trihoan: {
            show: arr.every((item) => item !== 1 && item !== 5 && item !== 9),
            name: 'Mũi tên trì hoãn (thiếu 1-5-9)',
        },
        tamlinh: {
            show: arr.includes(3) && arr.includes(5) && arr.includes(7),
            name: 'Mũi tên tâm linh (đủ 3-5-7)',
        },
        hoainghi: {
            show: arr.every((item) => item !== 3 && item !== 5 && item !== 7),
            name: 'Mũi tên hoài nghi (thiếu 3-5-7)',
        },
    }
}
