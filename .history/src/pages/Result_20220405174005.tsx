import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { SearchContext } from '../contexts/SearchContext'
import bg from '../assets/images/mandala-object-1.png'
import border from '../assets/images/mandala-bg.png'
import Chart from '../components/Chart'

const genitive = [
    {
        strong: '',
        weak: '',
    },
    {
        strong: '',
        weak: '',
    },
    {
        strong: '',
        weak: '',
    },
    {
        strong: 'Bạn thường là người vui vẻ, quảng giao, hoạt ngôn, hoạt bát, có óc tưởng tượng, óc thẩm mỹ rất tốt. Bạn cũng khôn khéo, tháo vát, thân thiện; nhiệt tình và trung thành.',
        weak: 'Bạn thường nông nổi, dễ nói dối, dễ cường điệu mọi chuyện, hoang phí. Bạn cũng dễ bộc trực, nóng giận, và hay thay đổi.',
    },
    {
        strong: 'Bạn thường là người cẩn thận, chắc chắn, thực tế, cầu toàn, logic, trung thành, chung thủy.',
        weak: 'Bạn thường là con người nhàm chán, đôi khi hơi chậm hiểu ý của người khác. Bạn cũng hay ép người khác vào khuôn nên dễ bị không thích. Cẩn thận, kỹ tính quá nên bạn thường đánh mất thời cơ.',
    },
    {
        strong: 'Bạn thường là người linh hoạt, xoay sở tốt, giàu cảm xúc và tình thương, tò mò, khó ngồi yên, thích trải nghiệm mới. Bạn là người có năng lượng, thích mới lạ, mạo hiểm, giàu nghị lực.',
        weak: 'Bạn liều lĩnh, đôi khi vô tâm, không thích kỷ luật, dễ thay đổi, chóng chán, dễ phân tán sự tập trung nên thường làm việc không tới nơi tới chốn.',
    },
    {
        strong: 'Bạn là người tình cảm, yêu thương, quan tâm, bao dung, sáng tạo. Bạn thường giỏi chăm sóc gia đình, khách hàng và đội nhóm.',
        weak: 'Vì thương người nên có thể bị lừa hoặc lợi dụng. Dễ trở nên khó tính và muốn kiểm soát người xung quanh. Bạn cũng thường ôm đồm việc về mình.',
    },
    {
        strong: 'Bạn thường là người thông thái, thích học qua tự trải nghiệm, thích khuyên và truyền đạt kiến thức cho người khác, khả năng truyền đạt của bạn cũng tốt.',
        weak: 'Đôi khi nhìn bề ngoài hơi lạnh nhạt khó gần, không thích được khuyên, dễ gặp mất mát vì muốn tự trải nghiệm.',
    },
    {
        strong: 'Bạn thường là người độc lập và hướng mục tiêu. Giỏi cân đo lợi ích, rất công bằng, rõ ràng. Tập trung vào kết quả, không rườm rà, không đi vào chi tiết.',
        weak: 'Bạn hay ôm việc làm một mình, ngại nhờ vả. Bạn cũng có thể hơi kiêu ngạo, nhẫn tâm và hay tranh luận thẳng thắn - điều này đôi khi làm tổn thương người khác.',
    },
    {
        strong: 'Bạn thường là người uy tín, dũng cảm, nhân đạo, tốt bụng, thích cho đi, thích giúp đỡ người khác. Có những trách nhiệm, lý tưởng, mục tiêu lớn lao. Bạn cũng thường hay gánh vác, có trách nhiệm, có đức hy sinh và vì cộng đồng.',
        weak: 'Bạn có thể dễ bị những ký ức tiêu cực đeo bám, bạn có thể thường nông nổi, bồng bột, tự cao. Nếu không thể giúp đỡ được việc gì thường cảm thấy bị hụt hẫng, tiêu cực, cảm thấy trở thành người thiếu trách nhiệm.',
    },
    {
        strong: 'Thường là người khá chủ động, quyết đoán, tiên phong, độc lập và có chính kiến, kiên định, tập trung, luôn hướng đến mục tiêu, đầy tài năng, tự tin và tiềm năng lãnh đạo.',
        weak: 'Đôi khi sẽ bảo thủ, ương bướng, chuyên quyền, dễ áp đặt, dễ chê trách và chỉ trích người khác, cái tôi lớn và tự cho mình là trung tâm.',
    },
    {
        strong: 'Bạn thường là người nhạy cảm, đáng tin cậy, trung thực và công tâm, giàu lòng trắc ẩn.',
        weak: 'Hay mơ tưởng, dị ứng nhiều hoàn cảnh, dễ bị kích động quá mức.',
    },
]

const Result = () => {
    const { info } = useContext(SearchContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!info.number) navigate('/')
    }, [])

    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center text-3xl font-bold select-none cursor-default text-white">
                <h2>
                    Họ và tên:{' '}
                    <span className="text-[#F7D51A]">{info.fullname}</span>
                </h2>
                <h2 className="mt-4">
                    Ngày sinh:{' '}
                    <span className="text-[#F7D51A]">{`${info.day}/${info.month}/${info.year}`}</span>
                </h2>
                <h3 className="mt-8 uppercase text-2xl">Số chủ đạo</h3>
            </div>
            <div className="flex justify-center mt-4 relative">
                <div className="w-[350px] h-[350px]">
                    <div
                        style={{
                            backgroundImage: `url(${border})`,
                            backgroundSize: 'cover',
                        }}
                        className="h-full w-full animate-spin2"
                    >
                        <div
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: 'cover',
                            }}
                            className="h-full w-full relative"
                        ></div>
                    </div>
                    <div className="text-9xl text-shadow-pink text-white leading-none pb-4 font-semibold flex juftify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {info.number}
                    </div>
                </div>
            </div>
            <div className="mt-5 rounded-lg bg-[rgba(0,0,0,.4)] p-4">
                <Chart day={Number(info.day)} month={Number(info.month)} />
                <div className="mt-5 text-sm  text-white">
                    <p className="uppercase font-bold">
                        Tính cách nổi trội của bạn
                    </p>
                    <p className="leading-[1.6]">
                        - Điểm mạnh: {genitive[info.number as number].strong}
                    </p>
                    <p className="leading-[1.6]">
                        - Điểm yếu: {genitive[info.number as number].weak}
                    </p>
                </div>
                <Link
                    to="/detail"
                    style={{
                        backgroundImage:
                            'linear-gradient(-45deg, #6a5af9, #d66efd)',
                    }}
                    className="rounded-lg mt-4 w-full text-white text-base font-bold select-none p-2"
                >
                    Xem chi tiết luận giải
                </Link>
            </div>
        </Layout>
    )
}

export default Result
