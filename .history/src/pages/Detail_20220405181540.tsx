import React, { useContext, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Chart from '../components/Chart'
import Layout from '../components/Layout'
import { SearchContext } from '../contexts/SearchContext'

const CHI_SO_DUONG_DOI = [
    {
        type: '',
        content: ``,
    },
    {
        type: '',
        content: '',
    },
    {
        type: '',
        content: '',
    },
    {
        type: 'SỐ 3 – NGƯỜI VUI VẺ, SÁNG TẠO',
        relationship: `• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:
        Các số đường đời khác tương thích nhất với bạn:
        - May mắn cho bạn, kỹ năng giao tiếp và khả năng dễ gần của bạn có nghĩa là bạn có thể tương thích với nhiều các con số khác. Về mặt số học, bạn hợp nhất với những người có đường đời số 10, số 5 và số 7: 
         + Khi đường đời số 10 và số 3 kết hợp với nhau, rất khó để tìm ra quá nhiều điểm tiêu cực. Bạn làm rất tốt công việc ghi nhận người khác và tất cả những thành tích của họ. Còn số 10 làm tốt nhiệm vụ thúc đẩy bạn một cách chuyên nghiệp. Nhưng không phải cuộc đời nào cũng thuận buồm xuôi gió đối với cặp đôi quyền lực này. Một người có đường đời số 10 có xu hướng chỉ trích một chút về khả năng tập trung của bạn, nhưng vì họ hòa nhập rất tốt nên nó thường không phải là một sự phá vỡ.
         + Mặc dù đó không phải là một mối quan hệ được đảm bảo an toàn, nhưng khi bạn và người số 5 bên nhau sẽ có rất nhiều sự phấn khích. Trong mối quan hệ hợp tác này, mỗi người thúc đẩy người kia thành công cả về mặt tình cảm và công việc. Nhưng rất có thể nó sẽ không kéo dài quá lâu bởi bản chất của cả 2. Mặc dù vậy thời gian cùng nhau của 2 người chắc chắn sẽ rất đáng nhớ.
         + Một người số 7 ban đầu sẽ bị thu hút bởi trí tuệ của bạn, nhưng trừ khi hai người có chung sở thích hoặc mục tiêu thì đó mới là điểm tốt. Số 7 có thể rất thần bí, điều này sẽ khiến bạn quan tâm tới mức gắn bó, nhưng khi họ trở nên sống nội tâm, rất có thể bạn sẽ không biết phải xử lý như thế nào.
        - Người có số 3 khác cũng tạo nên một mối quan hệ tuyệt vời với bạn, nhưng cần phải nói rằng sẽ có rất nhiều sự hợp tan của mối quan hệ này. Mặc dù nó tồn tại trong thời gian ngắn, nhưng hai người số 3 cùng nhau sẽ thỏa sức sáng tạo cho nhau.
        
        Các số đường đời khác ít tương thích nhất với bạn:
        - Đối với bạn, mối quan hệ với người có số 4 hoặc 22/4 có thể coi là một vùng cấm. Về mặt số học, bản chất cứng đầu của số 4 và sự dễ gần của bạn với hầu hết mọi thứ sẽ khiến cả 2 phát điên. Tại một thời điểm nào đó trong cuộc đời, hai người có thể có một mối quan hệ chuyên nghiệp, nhưng bạn nên nhớ, đó phải là là một sự thúc đẩy cực lớn hoặc một mục tiêu chung vì đại cục.
        - Những người có đường 8 hoặc sẽ thu hút sự chú ý của bạn, vì ngoại hình và phong thái uy quyền của họ. Tuy nhiên, những lời chỉ trích liên tục từ họ sẽ khiến bạn rơi vào mất ổn định.
        - Bạn cũng có thể nghĩ rằng bạn và số 6 sẽ tương thích với nhau, vì 6 là con số hài hòa nhất. Đó có thể là do bạn thiếu tập trung, thiếu kỷ luật hoặc không có khả năng cam kết, nhưng bất kể lý do gì, đây là một mối quan hệ sẽ dễ kết thúc ngay từ đầu.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
        • TÌNH DUYÊN:
        - Trong tình yêu, bạn cần tìm một người có cùng quan điểm với mình. Họ không cần phải sáng tạo, nhưng chắc chắn sẽ hữu ích nếu họ đánh giá cao nghệ thuật. Mặc dù bạn tự nhiên bị thu hút bởi một số người có cùng tinh thần tự phát như bạn, nhưng việc thiếu trách nhiệm có thể trở thành một vấn đề lớn trong mối quan hệ của 2 người.
        - Về mặt tình duyên, bạn thích hợp với những người có đường đời số 5. Điều này là do họ cũng thích phiêu lưu như bạn và có cùng quan điểm tích cực. Những ý tưởng của 2 người luôn tự phát, và bạn có thể yên tâm rằng sẽ không bao giờ có một khoảnh khắc buồn tẻ khi hai bạn ở bên nhau. Tuy nhiên, điều tiêu cực duy nhất giữa bạn và số 5 là bạn có thể thấy mình gặp rắc rối khi cả hai đều bỏ qua sự cẩn trọng cần thiết trong các tình huống của cuộc sống.
        - Một kết hợp tốt khác cho bạn là những người có đường đời số 7. Số 7 cực kỳ trực quan và chu đáo nên có thể phát huy khả năng sáng tạo của bạn. Mối quan hệ này hoạt động tốt vì cả hai bạn đều giải quyết cảm xúc tương tự nhau, và rất ít khả năng hai bạn rời xa nhau hoặc tranh cãi. Điều quan trọng là số 7 sẽ không khao khát cảm giác phiêu lưu và phấn khích như bạn, đó không nhất thiết là một điều xấu vì chúng có thể giúp bạn tìm thấy sự cân bằng mà bạn cần.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `
        • ĐIỂM MẠNH CỦA BẠN:
        - Bạn thích sự sáng tạo, giao thiệp, và kết nối mọi người. Điều đó làm cho bạn có được năng lực truyền đạt tuyệt vời.
        - Bạn lạc quan, vô cùng rộng lượng. Bạn là tuýp người đặc biệt hài hước. Bạn thường là “cây hài” trong các nhóm, mang tới không khí tươi vui, rộn ràng cho mọi người với bộ sưu tập các câu chuyện hài hước phong phú. 
        - Thêm vào đó, bạn thường cực kỳ tinh tế trong việc nắm bắt tâm lý người khác. 
        - Bạn yêu thích môi trường mà ở đó con người được tạo điều kiện để trao đổi, phối hợp, tương tác với nhau. Khi gặp được môi trường như vậy, bạn sẽ phát huy được những thế mạnh và làm việc hiệu quả hơn, ngẫu hứng hơn. 
        - Trong các mối quan hệ cá nhân, bạn thuộc tuýp người lãng mạn, rất chung thủy và khó lòng quên được những hình bóng cũ. Thậm chí khi mọi chuyện đã kết thúc, bạn vẫn không thể từ bỏ.
        
        • ĐIỂM YẾU CỦA BẠN:
        - Bởi do thích thú việc sống hết mình, bạn dường như chỉ sống cho hôm nay và không nghĩ đến ngày mai. Bạn có khoảng thời gian khó khăn để trở thành một người biết nhận trách nhiệm một cách nghiêm túc. Việc quản lý tiền bạc dường như không tốt cho lắm bởi một phần bạn cảm thấy rất tích cực về cuộc sống và nghĩ rằng mọi thứ rồi cũng sẽ tốt đẹp. Thỉnh thoảng, điều này có thể khiến bạn sống hời hợt, trì hoãn và thiếu định hướng trong cuộc sống.
        - Khi cao hứng, bạn thường có thể bị cảm xúc cuốn đi quá xa. Hãy cẩn thận khi nhận thấy mình ở trạng thái đó, bởi vì khi đó những điều bạn nói ra có thể không hoàn toàn đúng sự thật. Chủ yếu là do bạn muốn làm cho điều gì đó nổi bật lên, hấp dẫn hơn. 
        - Bạn cũng có thể dễ dàng bị rơi vào trạng thái mất hứng, chán nản và thay đổi. 
        - Đôi khi bạn có thể bị sự tùy hứng làm ảnh hưởng đến hiệu quả công việc. Vì vậy hãy tạo cho mình thói quen lên kế hoạch, mục tiêu chặt chẽ và thường xuyên kiểm tra lại để không đi chệch hướng. 
        - Bạn sẽ không phù hợp với những môi trường làm việc nhàm chán, đơn điệu hoặc gò bó. Bạn thích những môi trường làm việc có sự tương tác, giao tiếp, có cảm hứng và sự vui vẻ. Bạn cũng có thể trở nên khó tính, sốt ruột nếu làm việc với ai đó chậm chạp, ù lì. Những điều này có thể khiến bạn dễ chán công việc, dẫn tới tình trạng thay đổi công việc khá nhiều.
        
        • NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 3:
        - Jackma – Chủ tịch tập đoàn Alibaba
        - Đặng Lê Nguyên Vũ – Chủ tịch tập đoàn Trung Nguyên
        - Một vài người khác như: Christina Aguilera, David Bowie, Hillary Clinton, Jimmy Buffett, Jodie Foster, John Travolta, Pierce Brosnan, Shania Twain, Snoop Dogg
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 4 – NGƯỜI LOGIC, THỰC TẾ',
        relationship: `• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:
        Tương thích nhất với bạn:
        - Đối với bạn, số 10 thể hiện sự quyết tâm và tập trung, nếu có chung đạo đức làm việc, số 10 sẽ cùng bạn hướng tới mục tiêu một cách mạnh mẽ.
        - Số 8 cũng là một kết hợp tốt với bạn. Kỷ luật và cực kỳ có tổ chức, cả hai số đều tin rằng thành công đến từ sự chăm chỉ. Nhưng không giống số 4 thực tế, số 8 có một tầm nhìn xa, vì vậy họ bổ sung tốt cho bạn, cho dù đó là kinh doanh hay đối tác.
        - Số 7 cũng là một sự kết hợp tuyệt vời với bạn, mối quan hệ mà hai người hình thành rất năng động và kiên định. Số 4 được thu hút bởi bản chất và tri thức thực sự của số 7, còn số 7 ngưỡng mộ sự vững vàng của bạn.
        
        Ít tương thích nhất với bạn:
        - Phần lớn trong thần số học, số 4 và số 10 tương hợp với nhau, nhưng đôi khi những tính cách này có thể xung đột với nhau. Những người có đường đời số 10 thường thích hoàn thành công việc sớm hơn, trong khi số 4 thích lên kế hoạch mọi thứ đến từng chi tiết cuối cùng. Những đặc điểm tính cách đối lập này có thể gây ra vấn đề trong mối quan hệ.
        - Mối quan hệ hợp tác tồi tệ nhất có thể xảy ra với bạn là với số 5. Số 5 có nhu cầu được tự do, còn bạn cần được cảm thấy an toàn và ổn định. Theo mọi nghĩa thì hai người hoàn toàn đối lập nhau.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
        • TÌNH DUYÊN:
        - Khi nói đến tình yêu, bạn tiếp cận nó theo cách tương tự như cách bạn tiếp cận mọi thứ khác - một cách thực tế và hợp lý. Nhu cầu an toàn của bạn có nghĩa là bạn không thích những cuộc tình chóng vánh mà muốn những mối quan hệ ổn định, tồn tại lâu dài.
        - Bạn không ý tưởng về những người bạn tâm giao và cũng ít khi tìm kiếm một người bạn đời. Thay vào đó, bạn tin rằng các mối quan hệ thành công cần sự chăm chỉ kiên trì, và tất nhiên, bạn rất vui khi làm được điều đó.
        - Bạn rất kém trong việc thể hiện sự lãng mạn, và có thể đếm số lần 'tán tỉnh ngớ ngẩn' mà bạn đã từng có. Nhưng không thể phủ nhận sự trung thành của bạn, hoặc quyết tâm để đảm bảo mối quan hệ có hiệu quả.
        - Những mối tình tồi tệ nhất của bạn là với người có đường đời số 3 và số 5 hoặc con người đôi khi có lý tưởng trên mây là số 9. Ban đầu, những mối quan hệ này sẽ mang lại một yếu tố thú vị cho cuộc sống có phần bình lặng của bạn, nhưng sẽ không tồn tại được lâu trước khi bạn chán ngấy với những cách làm lung tung, thiếu quyết tâm và không có khả năng tập trung của họ.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `
        • ĐIỂM MẠNH CỦA BẠN:
        - Với chỉ số ngày sinh 4 trong thần số học, bạn là người thích mọi thứ thật rõ ràng, minh bạch và có khả năng tra cứu thông tin, tìm hiểu cặn kẽ vấn đề, nếu bạn quan tâm. Bạn thường phân tích mọi thứ theo nhiều khía cạnh, đến tận gốc rễ, chân lý, ngọn ngành mới thôi. 
        - Bạn cũng là người giỏi quản trị. Bạn có nguyên tắc và tuân thủ rất tốt. Cùng với năng lực tổ chức, bạn thường sắp xếp công việc, nhân sự và lên kế hoạch chi tiết, rõ ràng và có tính khả thi cao. Thường thì mọi người sẽ tin tưởng khả năng quản trị và tổ chức của bạn. 
        - Bạn là người logic, thực tế, rõ ràng. Với bạn, mọi thông tin cần phải được mô tả cụ thể, rành mạch, không màu mè, lòng vòng. Và bạn sẽ không thích nếu ai đó nói chuyện với bạn theo kiểu hoa mỹ. Tốt nhất là họ nên đi thẳng vào nội dung chính, bởi vì bạn muốn nghe thông tin.
        - Bạn sẽ dễ tin tưởng một ai đó hơn nếu họ trình bày một cách có logic, có dẫn chứng. 
        - Bạn thuộc kiểu người muốn thấy kết quả và thường chỉ tin khi thấy được kết quả. 
        - Bạn có một ý thức mạnh mẽ về đúng và sai, rất trung thực, và đánh giá cao sự trung thực ở những người khác. Những giấc mơ của bạn đều dựa trên thực tế và bạn không bao giờ nghi ngờ về chuyện cần phải làm việc chăm chỉ để biến chúng trở thành sự thật.
        - Cho dù làm gì thì người bạn cũng thường thích cách tiếp cận kiểu “chính thống” hơn kiểu trải nghiệm, thích nguyên tắc hơn là mạo hiểm.
        
        • ĐIỂM YẾU CỦA BẠN:
        - Mang trong mình chỉ số đường đời 4 trong thần số học, bạn cũng có thể có một số điểm yếu của con số này như sự nghiêm khắc, khó tính, bảo thủ. Khi đó, bạn thường chỉ chấp nhận những gì hợp với logic trong đầu mình. Bạn cho rằng, những gì mình nghĩ, mình đã trải qua là đúng đắn. Mặt khác, sự thẳng thắn, chia sẻ kiến thức, sự góp ý hay tính kỷ luật cao của bạn đôi khi có thể tạo ra mâu thuẫn, xung đột. 
        - Bởi vì tính logic, thực chứng và muốn hiểu sự việc một cách rõ ràng nên bạn thường đặt câu hỏi và hỏi đến khi nào hiểu rõ mới thôi. Điều này giúp bạn làm việc gì cũng chắc chắn, nhưng nhiều khi cũng gây khó chịu cho người khác. 
        - Bạn có thể ổn định đến mức bạn thể hiện như một kẻ bướng bỉnh, cứng nhắc hoặc quá nghiêm túc. 
        - Bạn cũng có xu hướng bỏ qua sự khéo léo và để cho cảm xúc thật của bạn được tất cả những người xung quanh biết đến, điều này đôi khi có thể đẩy người khác ra xa. 
        - Mặc dù là những người thực tế và lên kế hoạch tốt, bạn cực kỳ thận trọng, và không đi chệch nhiều khỏi kế hoạch tổng thể. Do đó đôi khi cũng có thể bỏ lỡ cơ hội phát sinh bởi vì bạn không hành động đủ nhanh.
        - Bạn cũng là người suy nghĩ nhiều, phân tích nhiều nên lắm lúc bị căng thẳng đầu óc.
        - Sự phân tích quá kỹ lưỡng cũng khiến bạn khó ra quyết định và có thể bị lỡ mất cơ hội.
        
        • NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 4:
        - Bill Gates – Chủ tịch tập đoàn Microsoft
        - Trump – cựu Tổng thống Mỹ
        - Một vài người khác như: Oprah Winfrey, Nicki Minaj, Drake, Jimmy Fallon, Brad Pitt, Usher, Bill Gates, Elton John, Keanu Reeves
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
]

const Detail = () => {
    const { info } = useContext(SearchContext)
    const navigate = useNavigate()
    const chiSoDuongDoi = useMemo(
        () => CHI_SO_DUONG_DOI[info.number as number],
        [],
    )

    useEffect(() => {
        if (!info.number) navigate('/')
    }, [])

    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center text-3xl font-bold select-none cursor-default text-white">
                <p>BÁO CÁO THẦN SỐ HỌC</p>
                <h2 className="mt-3">
                    Họ và tên:{' '}
                    <span className="text-[#F7D51A]">{info.fullname}</span>
                </h2>
                <h2 className="mt-3">
                    Ngày sinh:{' '}
                    <span className="text-[#F7D51A]">{`${info.day}/${info.month}/${info.year}`}</span>
                </h2>
            </div>
            <div className="rp-box">
                <h3 className="rp-heading">1. CHU KỲ VẬN SỐ CỦA BẠN</h3>
                <p className="rp-text">
                    Biểu đồ này cho biết bạn đang ở đâu trong chu kỳ vận số của
                    mình. Theo thần số học, chu kỳ phát triển của đời người sẽ
                    lặp lại mỗi 9 năm. Với mỗi năm có số cá nhân là 1, cuộc đời
                    lại bắt đầu một chu kỳ mới với xuất phát cao hơn chu kỳ
                    trước. Ảnh hưởng của biểu đồ này sẽ thể hiện mạnh nhất trong
                    giai đoạn từ mốc đỉnh cao đầu tiên đến mốc đỉnh cao cuối
                    cùng.
                </p>
                <div className="mt-10">
                    <Chart day={Number(info.day)} month={Number(info.month)} />
                </div>
            </div>
            <div className="rp-box mt-5">
                <h3 className="rp-heading">
                    3. CHỈ SỐ ĐƯỜNG ĐỜI (SỐ CHỦ ĐẠO) CỦA BẠN LÀ:{' '}
                    <span className="text-[#F7D51A]">
                        {chiSoDuongDoi?.type}
                    </span>
                </h3>
                <p className="rp-text mb-6">
                    Chỉ số này hé lộ con đường mà bạn sẽ trải qua trong cuộc đời
                    này. Nó cho bạn thấy bạn sẽ gặp phải những trải nghiệm như
                    thế nào, và bạn học được gì sau những trải nghiệm đó. Nó
                    cung cấp nhiều thông tin về con người bạn và cuộc đời mà bạn
                    sẽ sống.
                </p>
                <p className="rp-text">{chiSoDuongDoi.content}</p>
            </div>
        </Layout>
    )
}

export default Detail
