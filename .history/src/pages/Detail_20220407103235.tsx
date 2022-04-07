import React, {
    Fragment,
    useContext,
    useEffect,
    useLayoutEffect,
    useMemo,
    useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import Chart from '../components/Chart'
import Layout from '../components/Layout'
import So from '../components/So'
import { SearchContext } from '../contexts/SearchContext'
import { InputChange } from '../utils/interfaces'

export const CHI_SO_DUONG_DOI = [
    {
        type: '',
        content: ``,
    },
    {
        type: '',
        relationship: '',
        content: '',
    },
    {
        type: '',
        relationship: '',
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
        content: `• ĐIỂM MẠNH CỦA BẠN:
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
            Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.
        `,
    },
    {
        type: 'SỐ 5 - NGƯỜI TỰ DO, LINH HOẠT',
        relationship: `• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:
        Tương thích nhất với bạn:
         - Một số 5 khác là sự kết hợp tuyệt vời cho bạn. Mối quan hệ hợp tác này dựa trên niềm đam mê, cảm giác mạnh và phiêu lưu. Không bao giờ có một khoảnh khắc buồn tẻ khi hai người làm việc cùng nhau, nhưng đó cũng không hẳn là một điều tốt. Sự mạo hiểm và hành vi thiếu trách nhiệm có thể khiến cả hai gặp rắc rối, và tất nhiên, có nguy cơ bạn quá ham mê các hoạt động nguy hiểm (và bất hợp pháp), bao gồm những trò tiêu khiển, rượu hoặc cờ bạc. Mộ thách thức nữa đối với hai người là không có khả năng tập trung và xử lý công việc hàng ngày tẻ nhạt.
        - Số 10 cũng tạo nên một mối quan hệ đối tác tốt với bạn. Họ là những người chấp nhận rủi ro và thích sống hết mình. Họ coi trọng sự độc lập của mình, nhưng khi bạn ở bên họ, đó là thời gian chất lượng để bạn làm những điều thú vị. Cả hai con số đều cần một lượng tự do hợp lý, và miễn là không trở nên quá chặt chẽ, thì cả hai người luôn có những cuộc chinh chiến như trên thiên đường.
        - Đường đời số 3 cũng là một sự kết hợp tuyệt vời với bạn. Hai người chia sẻ những sở thích giống nhau và sẽ luôn có vô số điều để nói đến. Hai người có chung niềm đam mê du lịch, sáng tạo và say mê. Tuy nhiên, như trường hợp của hai người cùng số 5, việc chi tiêu thiếu sáng suốt và không quan tâm đến những an toàn cơ bản của cuộc sống có thể trở thành một vấn đề.
        - Số 7 nội tâm cũng rất phù hợp với bạn. Cả hai đều tận hưởng không gian riêng của mình và không làm phiền nhau về tình cảm hay thể chất. Mặc dù số 7 có phần nghiêm túc sẽ phải chịu một lối sống hơi thiếu kỷ luật của bạn, nhưng cả hai cân bằng lẫn nhau và bổ sung cho nhau một cách hoàn hảo.
        
        Ít tương thích nhất với bạn:
        - Con số ít tương thích nhất với bạn là đường đời 4 (hoặc 22/4). Và rất dễ hiểu bởi vì người có đường đời số 4 là người thực tế và thích kiểm soát còn bạn thì không. Số 4 ghét thay đổi và cần sự ổn định còn bạn thì không. Để mối quan hệ này có hiệu quả, cần phải có nhiều thỏa hiệp và chịu đựng của hai người.
        - Mối quan hệ với số 8 - tập trung và định hướng mục tiêu, cũng không phải là một sự kết hợp tốt.
        - Mối quan hệ với số 9 có thể có thành công, nhưng nó sẽ dựa trên tiền bạc mà số 9 mang đến cho bạn nhiều hơn. Điều này là do cả hai số đều có lịch trình cực kỳ bận rộn và luôn di chuyển. Và trong khi số 9 cũng phát triển mạnh nhờ sự thay đổi, họ không có quá nhiều ý thích với một người như số 5.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
        
• TÌNH DUYÊN:
        - Ngất ngây với sự quyến rũ và lối sống đáng ghen tị, bạn được những người khác giới yêu thích, nhưng nhìn chung, bạn này có xu hướng tránh xa những mối quan hệ mà có sự trói buộc.
        - Nhưng bạn sẵn sàng để đối phương chia sẻ tình yêu tự do và phiêu lưu, cũng như cách tiếp cận tự phát của bạn đối với mọi thứ. Đối với bạn, một số 5 khác là đối tác hoàn hảo của bạn, hoặc cũng như số 3 là một lựa chọn tuyệt vời.
        - Những tiềm năng khác trên biểu đồ thần số hợp với bạn là số 10 và số 7. Họ có cùng một lượng năng lượng nhưng bổ sung cho bạn theo những cách khác nhau. Ví dụ, một người có đường đời số 10 là người có tham vọng với lòng quyết tâm cao độ và sẽ giúp bạn tập trung và làm việc hướng tới mục tiêu của mình. Còn số 7 với cách tiếp cận triết học về cuộc sống, có thể giúp bạn đạt được sự thỏa mãn trong chính mình, thay vì cố gắng tìm kiếm nó từ mọi người, mọi địa điểm và mọi thứ.
        - Các số 4, 8 và 9 có giá trị và cần sự ổn định, nhưng đó chỉ là lựa chọn cuối cùng của bạn. Sẽ không mất nhiều thời gian trước khi số 4, 8 và 9 để bạn nản lòng vì bạn không thể cam kết với một vị trí, một công việc. Và đối với bạn, ở bên họ sẽ đơn điệu như cục sơn khô. Nếu bạn chọn theo đuổi một mối quan hệ lãng mạn với một người coi trọng sự an toàn, bạn sẽ cần phải có một mức độ thỏa hiệp hợp lý. Điều này có thể được, nhưng có lẽ chỉ sau tuổi 30 của bạn.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `Bạn là người sáng tạo , tràn đầy năng lượng và hành vi rất tự phát.
        Đối với một số người, hành vi của bạn thường có thể được mô tả là buông thả bản thân, nhưng thực sự đó là đặc điểm của bạn. Chấp nhận rủi ro là trò chơi của bạn, bạn luôn sẵn sàng đối mặt với thử thách và phát triển mạnh mẽ trong những tình huống có thể đoán trước được.
        
        Bạn là một người giao tiếp xuất sắc và có sở trường thúc đẩy những người xung quanh bạn. Món quà này của bạn có thể được sử dụng vì những điều tốt đẹp hơn, để tập hợp mọi người lại với nhau và thúc đẩy sự thay đổi. Nhưng khi nó bị lạm dụng, kết quả có thể rất thảm khốc.
        
        Với tư cách là người có số đường đời 5, bạn không muốn làm việc theo quy trình, bạn cũng có thể bốc đồng, nóng nảy và thiếu kiên nhẫn, nhưng một trong những thách thức lớn nhất của bạn là nhu cầu được thỏa mãn ngay lập tức, điều này có thể dẫn đến nghiện một thú vui tiêu khiển hoặc lạm dụng chất kích thích.
        
• ĐIỂM MẠNH CỦA BẠN:
        - Bạn là người năng động, sôi nổi, cá tính, thông minh, sắc sảo. 
        - Bạn khá ham vui và thường thuộc nhóm đầu tiên có mặt trong các cuộc vui, cuộc chơi, cuộc đi. Bạn thích khám phá mọi nơi, trải nghiệm mọi thứ. 
        - Những gì mới mẻ, kỳ thú hay bí hiểm đều có tính kích thích mạnh mẽ với bạn. Đó có thể là các địa điểm, tác phẩm văn học, âm nhạc, v.v.. Vì thế, trong mọi việc bạn làm, dường như bạn có xu hướng tạo ra những cách làm mới, thêm những yếu tố mới, làm cho công việc được thú vị hơn. Vì thế, bạn có thể có những sáng tạo rất độc đáo, nhưng đôi khi cũng khá buồn cười. 
        - Bạn thích vui vẻ, thích bạn bè. Bạn rất sợ sự nhàm chán, đơn điệu và ràng buộc. 
        - Trong các mối quan hệ, bạn phóng khoáng, tự do và thoải mái. Bạn có thể rất nhanh làm quen với môi trường mới và những người bạn mới. Ai tiếp xúc với bạn cũng sẽ bị bạn thu hút, đặc biệt là những người khác giới. 
        - Cái nhìn của bạn về cuộc sống là cái nhìn đầy màu sắc, phiêu lưu và khám phá. Bạn thích thưởng thức tất cả những gì tươi đẹp của cuộc sống. 
        
• ĐIỂM YẾU CỦA BẠN:
        - Bạn cũng thuộc tuýp người dễ đam mê, do đó hãy thận trọng với những thú vui tiêu cực. Đôi khi bạn cũng đanh đá, gắt gỏng, nóng nảy, bồn chồn, bất an. 
        - Bạn có thể hòa nhập được với bất kỳ môi trường nào và với bất kỳ ai. Nhưng điều này nhiều khi sẽ đem lại cho bạn rủi ro. Vì vậy, hãy thật thận trọng.
        - Nếu bạn không sống một cách phiêu lưu, cuộc đời của bạn có thể sẽ trở nên rất bi kịch.
        - Bạn có một khoảng thời gian khó khăn trong việc ổn định cuộc sống, sợ bị mắc kẹt hoặc chết ngạt trong một mối quan hệ.
        - Mặc dù bạn cực kỳ giàu tình thương thế nhưng sự tập trung vào việc phiêu lưu và tính tò mò có thể đánh lạc hướng và khiến bạn không nhận thức được cảm xúc của những người xung quanh. Hơn nữa, vì bạn luôn tìm kiếm chuyến phiêu lưu tiếp theo, cuộc sống của bạn có thể thiếu định hướng, và điều này có thể khiến bạn không hài lòng và mất kiên nhẫn.
        - Bất kỳ nghề nghiệp nào yêu cầu việc di chuyển cũng đều rất phù hợp với những người thuộc đường đời số 5. Vì nó sẽ giúp bạn tránh xa lịch trình đều đặn của rất nhiều công việc khác. Nếu không thì bạn có thể cảm thấy bồn chồn vì bị mắc kẹt trong một môi trường làm việc nhàm chán và lặp đi lặp lại. 
        - Một người với nhiều phần của số 5 trong biểu đồ sẽ muốn được tự mình làm chủ. Bạn sẽ không thích thú với một công việc theo giờ hành chính mà bạn phải báo cáo cho người khác mỗi ngày.
        
• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 5:
        - Mark Zuckerberb – Chủ tịch tập đoàn Facebook
        - Trấn Thành – MC, diễn viên
        - Quang Masan – Chủ tịch tập đoàn Masan
        - Một vài người khác như: Abraham Lincoln, Mick Jagger, Ryan Gosling, Malcolm X, Isaac Newton, Beyoncé, Angelina Jolie
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 6 – HẬU PHƯƠNG',
        relationship: `• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:
        Tương thích nhất với bạn:
        - Số 2 (hoặc 11/2) và bạn đều có một ngôn ngữ đặc biệt, nơi cả 2 được hướng dẫn bởi trái tim của mình nhiều hơn là bởi lý trí. Hai người bổ sung tốt cho nhau, số 6 rất hướng về gia đình trong khi mục đích duy nhất của số 2 là yêu thương và quan tâm đến những người xung quanh. Vấn đề với mối quan hệ dường như hoàn hảo này là nhu cầu chấp thuận liên tục trong bạn, điều này có thể làm mất đi bản chất quan tâm của cả 2. Để nó hoạt động, cả hai bên sẽ cần quan tâm hơn đến cảm xúc của đối tác.
        - Số 4, 8, 9, 10 cũng là một lựa chọn tốt cho mối quan hệ của bạn.
        
        Ít tương thích nhất với bạn:
        - Trong tất cả các con số trên biểu đồ số, số 6 kém tương thích nhất với với các số 3, 5 và 7. Đây cũng là ba là con số ít có khả năng hình thành bất kỳ loại mối quan hệ nào nhất:
         + Số 5 và bạn có thể là một cặp đôi, nhưng sẽ cần rất nhiều sự thỏa hiệp từ cả hai bạn. Và đối với một số người, khi một mối quan hệ cảm thấy như nó là một công việc khó khăn, nó có lẽ không đáng giá.
         + Còn sự kết hợp giữa bạn và số 7 lại chứa đầy những vấn đề xung quanh mọi ngóc ngách. Trong khi bạn muốn một mối quan hệ nghiêm túc, thì số 7 lại không đạt được những gì bạn muốn. Ngoài ra, đường đời số 6 quá kiểm soát đối với số 7 - những người sống cô độc và hướng nội. Với một sự thúc đẩy mạnh mẽ, mối quan hệ này có thể thành công, nhưng thành thật mà nói, nó sẽ chỉ là sự thỏa hiệp quá nhiều từ cả hai người.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
• TÌNH DUYÊN:
        - Bởi vì bạn có thể mang lại những điều tốt nhất cho những người khác, không có quá nhiều con số mà không tương thích với bạn. Là một người nuôi dưỡng và chăm sóc, bạn mang lại cho gia đình cùng đối tác của mình cảm giác an toàn thực sự. Và bạn có trực giác biết họ muốn gì và cần gì mà không cần họ phải yêu cầu.
        - Tuy nhiên, một lời cảnh báo, bởi vì bạn thích được quan tâm, bạn có thể thấy mình đang thu hút những người cần được giải cứu liên tục. Một mối quan hệ như vậy sẽ mang lại cho bạn mục đích nhưng nó không thể duy trì được, đặc biệt nếu người đó không thể giúp được, hoặc họ không muốn được giúp, bạn có thể cảm thấy kiệt sức và bực bội.
        - Bạn có thể hòa hợp tốt với hầu hết các con số, nhưng có một số sẽ dễ duy trì hơn. Các số 1, 2 và 9 là những số rất phù hợp với bạn. Khi nói đến chuyện tình cảm, số 1 và số 9 là đối tượng hoàn hảo của bạn. Cả hai đều có quyết tâm và động lực để thành công, và bạn rất vui khi giúp họ đạt được mục tiêu. Họ yêu mến bạn và kết quả là bạn có thể cảm thấy cần tích cực và thỏa mãn. Đường đời của những người số 2 là những người giàu lòng trắc ẩn và quan tâm, vì thế cả hai đều có thể nói chuyện thấu tình đạt lý nên rất ít khả năng xảy ra bất đồng hoặc tranh cãi giữa hai bạn. Giống như bạn, số 2 là người giàu tình cảm và thực sự lãng mạn trong trái tim. Trong khi bạn khiến họ cảm thấy được yêu thương với vô số tình cảm, họ sẽ đáo lại bạn bằng những bữa tối dưới ánh nến, hoa và những nơi nghỉ ngơi tuyệt vời.
        - Một điều bạn cần lưu ý trong một mối quan hệ lãng mạn là nhu cầu thường xuyên của bạn giống như một người phụ huynh. Mặc dù một số người bạn đời sẽ đánh giá cao sự quan tâm này, nhưng nó có thể trở thành một vấn đề khi việc quan tâm của bạn bắt đầu trở nên nhàm chán và đôi khi giống như kiểm soát.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `• ĐIỂM MẠNH CỦA BẠN:
        - Bạn thường dễ rung động trước cái đẹp, dù đó là vẻ đẹp của phong cảnh, đồ vật hay vẻ đẹp của con người. Bạn dễ xúc động trước những hoàn cảnh đáng thương, éo le; bạn cũng dễ xúc động trước những sự yêu thương, chăm sóc, khen ngợi dành cho bạn. 
        - Bạn sẵn lòng giúp đỡ người khác một cách chân thành. Thường thì chỉ cần mọi người mở lời xin sự giúp đỡ là bạn sẽ đồng ý, nhất là những người gần gũi hoặc thân thiết với bạn. Hãy cẩn thận với điều đó, vì bạn có thể quên mất những việc cần làm của bản thân và trở nên bao đồng, bao bọc, thậm chí làm hư những người gần gũi với bạn. 
        - Bạn là những phụ huynh bẩm sinh, người luôn quan tâm đến người khác dưới cái nhìn của bậc làm cha làm mẹ. Dù có giận người ta đến đâu, chỉ cần họ thể hiện sự biết lỗi hoặc hòa giải, bạn sẵn lòng bỏ qua. Bạn còn có thể rất áy náy nếu thấy có lỗi với ai đó. Bạn yêu quý thú cưng, trẻ nhỏ, người trẻ tuổi và những thứ mang tính “trẻ”. 
        - Bạn là người có khiếu thẩm mỹ hoặc nghệ thuật. Bạn có thể vẽ đẹp, viết tốt, sáng tác hay; bạn có thể có đôi tai biết thưởng thức và khứu giác rất tinh nhạy. Bạn thích làm cho mọi người và mọi vật đẹp lên.  
        - Bạn cũng là người không thích làm việc dưới trướng người khác, nhất là khi năng lực của bạn đã phát triển đến tầm nhất định. Bạn không thích bị người khác sai khiến, chỉ trích. Bạn rất coi trọng “thể diện”. Bạn cũng thường là người thẳng thắn và  có chính kiến. 
        - Là những người yêu thương con người, bạn rất ghét sự bất công, với mọi hình thức.
        
• ĐIỂM YẾU CỦA BẠN:
        - Bạn là những người đầy lòng yêu thương, không ích kỷ, và dễ bao dung, nhưng phải hết sức để ý để không bị lợi dụng lòng tốt của mình.
        - Là người tình cảm và giàu lòng yêu thương, nhưng nếu ai đó phản bội, hoặc bạn thấy mình trở thành gánh nặng với người khác, bạn sẽ rất lạnh lùng và rút lui. Đôi khi bạn cũng hay sốt ruột, và có thể nói ra những điều không đúng thời điểm.
        - Đôi khi bạn có thể lâm vào thói buôn chuyện nếu rảnh rỗi; bạn cũng cần cẩn thận với việc bàn luận, phán xét về người khác.
        - Bạn thường giỏi giao tiếp với trẻ em và động vật thông qua năng lượng dịu dàng và chở che. Nhưng không phải cái gì cũng cần được chăm nom, vì vậy đôi khi năng lượng bảo vệ của bạn có thể trở nên độc đoán và thích kiểm soát. Để tránh gánh cả thế giới trên vai, bạn phải học cách xây dựng niềm tin và sự cảm thông.
        - Nói một cách đơn giản, bạn hãy nhớ rằng: Ai cũng phải tự bước đi trên con đường đời của mình.
        
• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 6:
        - Chủ tịch Hồ Chí Minh
        - Vũ Đức Đam – Phó Thủ tướng Chính phủ Việt Nam
        - Jeff Beros – Chủ tịch tập đoàn Amazon
        - Warren Buffet – Nhà đầu tư tài ba
        - Một vài người khác như: Albert Einstein, John Lennon, Michael Jackson, Bruce Willis, Robert De Niro, Stevie Wonder, Richard Nixon, Ben Affleck
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 7 - NGƯỜI TRẢI NGHIỆM',
        relationship: `• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:
        Những số đường đời tương thích nhất với bạn:
        - Người có số 10: Họ có thể thúc đẩy bạn và bạn có thể khai sáng cho số 10. Các năng lượng khác nhau của cả hai phối hợp tốt với nhau, miễn là cả hai không quá kiểm soát nhau, và để đối phương trong thế giới riêng của họ.
        - Người có số 3: Họ lạc quan có thể cung cấp liều thuốc giúp bạn vượt khỏi sự nghiêm túc quá đà, và đổi lại bạn sẽ mang lại chiều sâu cho họ. Đây là sự kết hợp hiếm hoi giữa các con số hòa hợp và thúc đẩy sự phát triển lẫn nhau.
        - Người có số 4 (hoặc 22/4): Ảnh hưởng từ sự thực tế của họ là rất tốt với bạn. Sự kết hợp đáng ngạc nhiên này có thể chỉ hoạt động khi họ có ấn tượng đối với khả năng hiểu biết của bạn. 
        - Người có số 5: Họ tò mò và thích phiêu lưu nhưng khá tương thích với bạn vì cả hai đều là những người tìm kiếm. Cả hai giống như tồn tại trên các mặt khác nhau của cùng một đồng xu và có tính kích thích cao đối với nhau. 
        - Người có số 7: Sự kết hợp của hai số 7 có thể là một sự kết hợp được thực hiện trong thiên đường trí tuệ và siêu hình. Đáng buồn thay, nếu cả hai đều không thể mở lòng về tình cảm, thì điều này không có vẻ gì là tốt.
        
        Những số đường đời ít tương thích hơn với bạn:
        - Người có số 2 (hoặc 11/2): Họ nhạy cảm vì còn bạn có xu hướng hướng nội, điều này có thể sẽ làm cho họ cảm thấy xa cách.
        - Người có số 6: Họ hài hòa và thường có thể thúc đẩy một mối quan hệ lâu dài với bất kỳ con đường đời nào khác, nhưng đối với bạn thì có thể là ngoại lệ. Sự quan tâm của họ có thể không phải lúc nào cũng được đón nhận bởi bạn là người hướng nội và thích một mình.
        - Người có số 8: Động cơ vật chất của họ đối lập sâu sắc với sự tìm kiếm tâm linh, triết học và khoa học của bạn.
        - Người có số 9: Họ cũng có bản chất hướng nội, vì vậy hai người hướng nội có thể khiến mối quan hệ ngày càng trở nên xa cách.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
• TÌNH DUYÊN:
        - Về mặt số học, bạn ít có khả năng thiết lập một cuộc hôn nhân thành công. Điều này liên quan nhiều đến các tiêu chuẩn cao của bạn hơn là thiếu các sự lựa chọn. Điều này không nhất thiết phải là một điều xấu. So với những con số khác trên đường đời, số 7 không cần mối quan hệ lâu dài ổn định để tận hưởng cuộc sống của mình. Bạn có thể ít cảm thấy thiếu thốn, vì vậy bạn sẽ không phụ thuộc vào đối phương của bạn. 
        - Nhưng nếu bạn tìm thấy một người thực sự hiểu và trân trọng mình, bạn có thể cảm thấy rằng mình đã tìm thấy một viên ngọc quý hiếm và muốn nắm giữ lấy.
        - Nếu bạn tìm đúng người, bạn sẽ rất trung thành. Điều này có thể xảy ra vào thời điểm hơi muộn của bạn, vì vậy bạn cũng có xu hướng kết hôn muộn.
        - Bạn cần một người khá trưởng thành, người sẽ thách thức bạn về mặt trí tuệ và cho bạn tự do chiêm nghiệm.
        - Sự thân mật về tình cảm không phải là điểm mạnh của bạn, vì vậy bạn có thể mất nhiều thời gian hơn để mở lòng mình đối với những người khác. Nhưng một khi mối quan hệ đã được thiết lập, nó có thể là một phần không thể thiếu trong cuộc sống của bạn. Tuy nhiên, bạn có thể thấy việc mở lòng đối với người khác sẽ dễ dàng hơn nếu bạn có số tương thích trong các chỉ số khác, chẳng hạn như số 2 hoặc số 6 ở chỉ số Linh Hồn, Sứ mệnh hoặc Thái độ. Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `Với chỉ số ngày sinh 7, bạn sẽ để lại ấn tượng là người thông thái, hiểu biết và đôi khi khó hiểu, kỳ dị. Bạn có tư tưởng, triết lý và thường nhìn cuộc sống qua lăng kính đó, vì vậy dễ có xu hướng dạy dỗ, giúp đỡ người khác thông qua triết lý.

• ĐIỂM MẠNH CỦA BẠN:
        - Đặc điểm nổi bật của bạn là khả năng học hỏi vô hạn thông qua những điều đích thân tự trải nghiệm, qua đó lĩnh hội được những giá trị tốt đẹp và sau đó có thể đem ra chỉ dạy hoặc chia sẻ kinh nghiệm lại cho nhiều người khác. Những trải nghiệm thực tế này còn mang đến cho bạn những triết lý sống sâu sắc, ghi khắc dài lâu.
        - Đặc trưng của bạn là luôn tìm kiếm bản chất của vấn đề, sự vật, hiện tượng. Trong đầu của bạn thường trực câu hỏi: Tại sao? Tại sao con người lại được sinh ra? Nguồn gốc con người bắt đầu từ đâu? Sau cái chết là gì? Tại sao có ngày và đêm? Tại sao lại có các mùa? Tại sao con người lại giận dữ, đau buồn? 
        - Để có thể trả lời những câu hỏi đó, bạn thường tìm đến huyền học, triết học, khoa học vũ trụ, khoa học trái đất, những lĩnh vực nghiên cứu quy luật phổ quát, tâm lý, tư tưởng, v.v.. 
        - Khi bạn có được câu trả lời thì cũng là lúc bạn hoàn thiện cho mình tư tưởng và triết lý riêng. Và từ đó, bạn sẽ luôn nhìn cuộc đời qua lăng kính triết lý ấy, giải thích mọi điều qua đó. Tư tưởng và triết lý của bản thân sẽ là điểm tựa cho trí tuệ và tinh thần, và đó chính là đức tin của bạn.
        - Bạn thường sẽ sẵn sàng bỏ hàng giờ đồng hồ để chia sẻ kiến thức cho những ai cầu thị. Sự chia sẻ kiến thức của bạn có tính thuyết phục rất cao, vì chứa đựng không chỉ hiểu biết mà còn cả sự logic, chân lý. Nhưng bạn sẽ không muốn tốn dù chỉ một phút nếu thấy người khác không muốn nghe, không cầu thị hoặc có ý áp đặt lên bạn. 
        - Sâu trong thâm tâm, bạn có nhu cầu trao kiến thức của mình cho người khác một cách có giá trị, có ý nghĩa. 
        - Ngoài ra, bạn có một nhu cầu nữa là được hơn người về kiến thức và trí tuệ. Tùy vào mỗi người mang số 7, những nhu cầu tâm lý này có thể bộc lộ rõ ràng hoặc vi tế. 
        - Bạn không chỉ có sự hiểu biết và thông thái mà còn có được năng lực trực giác rất tốt. Trực giác ở mỗi người có thể biểu hiện khác nhau. Đó có thể là sự linh cảm. Bạn có thể cảm giác được điều gì đó sắp xảy ra. Đó có thể là sự thấu cảm, thấu hiểu sâu sắc với người khác. Đó có thể là sự thấu thị, nhìn được những điều mà người khác không thấy. Hoặc cũng có thể là một dạng kết nối tâm linh nào đó. 
        - Mặt khác, bạn cũng có năng lực đúc kết rất tốt. Bạn có thể đúc kết ra các bài học, chiêm nghiệm được các quy luật chỉ từ những sự việc đơn giản như nhìn lá rơi, ngắm sao, nhìn nước chảy, v.v.. Từ điểm này mà bạn ngày càng trở nên thông thái.
        - Nhìn chung bạn thuộc nhóm những người năng động nhất trong cuộc sống. Mặc dù có thể không ý thức được điều này, nhưng bạn thường có khát khao được tự đem bản thân mình ra trải nghiệm.
        
• ĐIỂM YẾU CỦA BẠN:
        - Là con người của “bản chất”, của sự thông thái và trí tuệ, bạn sẽ chỉ ngưỡng mộ những ai hơn mình về trí tuệ. Bạn thường chỉ thích quan điểm của bản thân mà thôi, và cũng rất ghét ai áp đặt quan điểm lên bạn. Nói cách khác, bạn sẽ cảm thấy khó sống theo quy củ mà người khác đưa ra, trong khi bạn lại thường hay thích áp quy củ của bạn lên cho người khác.
        - Thường thì mọi người sẽ thấy bạn khá khó hiểu. Bạn hay chia sẻ như không hết những gì trong lòng cho người khác nghe. Hoặc là bạn nghĩ họ sẽ không thể hiểu được, hoặc là bạn không muốn người khác hiểu hết về mình. 
        - Có nhiều lúc bạn thờ ơ, lãnh đạm. Những lúc ấy, đầu bạn hoặc là đang chìm trong suy tưởng về một điều gì đó, hoặc là trống rỗng, chẳng có gì. Nhưng người khác nhìn vào thì bạn có vẻ “rất suy ngẫm”. 
        - Bạn khá thất thường. Khi làm việc thì cực kỳ nghiêm túc, thậm chí là cầu toàn. Khi không có hứng thì bạn không muốn làm gì, cứ ì ra và khó chịu khi ai đó thúc giục. Khi bạn trầm ngâm thì vẻ mặt rất lạnh lùng, khó gần. Nhưng khi bạn vui vẻ thì chẳng khác gì một đứa trẻ. Dù sao, bạn chắc chắn là một người thật thà, thẳng thắn và tốt bụng. 
        - Một điểm đáng lưu ý là bạn dễ bị căng thẳng hoặc ức chế thần kinh. Đặc biệt là khi phải nghe những âm thanh “dội vào đầu”, hoặc khi nghe ai đó chì chiết, phán xét. Sự căng thằng này chỉ có tính trạng thái, nghĩa là có thể hết sau một lúc. Nhưng nếu những sự việc tương tự cứ tiếp diễn, bạn có thể bị stress và mất kiểm soát.
        - Chính vì thích tự trải nghiệm, bạn sẽ thường hay chịu trả giá ở ít nhất là một trong ba khía cạnh của cuộc sống: sức khỏe, tình yêu, tiền tài.
        - Đường đời của không ít người Số 7 thoạt nhìn có vẻ khá buồn, đặc biệt là khi bạn chưa nhận ra những mất mát trở ngại trên đường đời mà bạn đang phải trải qua rốt cục là những bài học đời mà bạn phải học cho trôi, mà nếu không chịu nhìn ra những kinh nghiệm trước là những bài học, cuộc đời sẽ tái đi tái lại những vấn đề tương tự như vậy, với mức độ tổn thất mất mát ngày càng trầm trọng hơn… cho đến khi nào bạn chịu nhìn ra, và chịu học kinh nghiệm từ bài này, thì thử thách đó mới dừng lại.
        
• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 7:
        - Putin – Tổng thống Nga
        - Elon Musk – Giám đốc điều hành tập đoàn Tesla
        - Một vài người khác: Andy Warhol, Nữ hoàng Elizabeth, Công nương Diana, George Bush Sr, Julia Roberts, Johnny Depp, Marilyn Monroe, Leonardo DiCaprio
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 8 - NGƯỜI ĐIỀU HÀNH',
        relationship: `• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:
        Những số đường đời tương thích nhất với bạn:
        - Số 2 (hoặc 11/2): Người số số 2 và bạn có thể là một trong những mối quan hệ tương thích nhất trong thần số học. Họ có thể sẽ sẵn sàng được hướng dẫn và thậm chí kiểm soát bởi bạn. 
        - Số 4 (hoặc 22/4): Số 4 có thể là sự lựa chọn rất tốt cho bạn. Trong khi bạn nhìn thấy bức tranh lớn và tổng quát thì số 4 sẽ bổ trợ cho bạn bằng việc đi vào vấn đề chi tiết và một kế hoạch bài bản. Điều này có thể hoạt động như một quan hệ đối tác trong kinh doanh hoặc trong tình yêu.
        - Số 6: Số 6 yêu thương và hy sinh là sự kết hợp hài hòa với số 8 đầy uy quyền, và đây có thể là một sự kết hợp lâu dài.
        - Số 8 khác: Giống như với số 4, sự kết hợp hai số 8 là nền tảng vững chắc cho một mối quan hệ lâu dài vì họ hiểu nhau. Miễn là bạn và đối phương có thể tập trung vào tình yêu cũng như công việc, đây có thể là một mối quan hệ hợp tác thịnh vượng.
        - Số 10: Đây có thể sẽ là một mối quan hệ tạo ra quyền lực nhất trong kinh doanh. Tuy nhiên trong tình cảm, hai người phải cố gắng nhiều vì cả hai đều có thể lấn át nhu cầu kiểm soát và sự độc đoán của nhau.
        
        Những số đường đời ít tương thích với bạn:
        - Số 3: Số 3 vui vẻ và có xu hướng vô tổ chức luôn nằm ở đầu đối diện của với bạn, vì vậy phải cần rất nhiều nỗ lực để tạo nên mối quan hệ tốt.
        - Số 5: Bạn là người định hướng mục tiêu, trong khi số 5 yêu tự do dễ bị bồn chồn và thay đổi. Mặc dù họ có ​​thể trở thành người bạn đồng hành trung thành, nhưng họ ít có khả năng thu hút bạn.
        - Số 7: Nhìn bề ngoài, họ nghiêng về tinh thần và tri thức sẽ trái ngược với chủ nghĩa vật chất (tập trung vào vật chất) của bạn. Nhưng cả hai thực sự khá bổ sung cho nhau, miễn là cả hai có thể mở ra cảm xúc của mình với đối phương.
        - Số 9: Những người số 9 có tham vọng và sự quyết tâm giống bạn. Nhưng họ được thúc đẩy bởi ý thức xã hội, trong khi bạn tập trung vào chủ nghĩa vật chất nên có thể sinh ra mâu thuẫn.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
• TÌNH DUYÊN:
        - Kinh doanh và tình yêu là những lĩnh vực rất khác nhau, tính cách của bạn có thể khiến bạn gặp một số khó khăn trong chuyện tình cảm. Bạn biết cách 'chơi trò chơi' trong việc nỗ lực để vươn lên ở lĩnh vực kinh doanh, nhưng bạn có thể phải học các quy tắc khi nói đến hẹn hò và các mối quan hệ. 
        - Bạn thường tạo ra sự an toàn về tài chính và có được cơ hội trải nghiệm những điều tốt đẹp hơn trong cuộc sống. Điều này có thể sẽ hấp dẫn đối với người bạn đời của bạn. 
        - Người có thẩm quyền thực sự là những người hạnh phúc nhưng bạn thực sự không giỏi về tình yêu và tình cảm. Sự trung thực và thẳng thắn của bạn là một công cụ hữu ích trong kinh doanh, nhưng nó có thể cần được giảm bớt một chút trong tình yêu và hôn nhân. Bạn giữ sự trung thực của mình, nhưng hãy cố gắng truyền tải thông điệp của sự thật một cách tế nhị. Đôi khi bạn có thể phải lùi lại một bước và nhớ rằng bạn đang giao tiếp trong một mối quan hệ lãng mạn chứ không cần phải là mối quan hệ kinh doanh.
        - Bạn gần như chắc chắn sẽ mặc quần tây một cách lịch sự trong những lần đầu hẹn họ! Nếu đối phương cũng muốn kiểm soát, bạn sẽ phải rất vật lộn với việc nhận lệnh và để người khác sai bảo. Bạn muốn có một người sẵn sàng phục tùng, tôn trọng sự độc lập của bạn hoặc ít nhất là một người luôn vui vẻ để bạn được làm chủ và quyết định.
        - Tính cạnh tranh tự nhiên, bạn có thể cần phải học rằng các mối quan hệ dựa trên sự công bằng. Đối phương của bạn cũng có nguyện vọng và ý tưởng cần được tôn trọng.
        - Sự khuyến khích hoặc hỗ trợ từ đối phương có thể làm bạn cảm thấy xa lạ, hoặc thậm chí khiến bạn cảm thấy dễ bị tổn thương.
        - Mặc dù cam kết của bạn đối với mục tiêu của bạn vô cùng đáng ngưỡng mộ, nhưng điều này đôi khi có thể phải trả giá bằng mối quan hệ của chính bạn. Bạn có thể không suy nghĩ kỹ về việc hủy bỏ một buổi hẹn hò vào buổi tối để làm việc muộn và hoàn thành công việc cho kịp thời hạn. Nếu bạn áp dụng kỹ năng giải quyết vấn đề của mình để khắc phục điều này, bạn có thể làm cho một mối quan hệ được cải thiện.
        
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `Năng lượng của số 8 có tính dương và rất mạnh, đây là con số biểu tượng của tiền bạc, quyền lực, vật chất, thế sự. Do đó, một khi đã làm gì, bạn sẽ thường làm lớn. 

• ĐIỂM MẠNH CỦA BẠN:
        - Bạn thường thể hiện năng lực điều hành và bao quát tốt. Bạn sẽ quan tâm tới kết quả nhiều hơn là chi tiết. 
        - Bạn có cái nhìn thực tiễn trong cuộc sống, nghiêm túc, kỷ luật trong công việc. 
        - Bạn quan tâm nhiều tới tiền bạc, quyền lực và vật chất. Với bạn, nhất định phải có sự đảm bảo về tài chính, và khi có được thu nhập tài chính tốt, bạn mới thấy an toàn.
        - Về mặt gia đình, bạn là người coi trọng sự chung thủy.
        - Đường đời 8 có thể thành công lớn, nhưng không bằng phẳng. Bạn cần sự kiên trì, và chú ý về sức khỏe. Bạn cũng nên tránh việc tiêu tiền hoang phí. 
        - Bạn được sinh ra với khả năng lãnh đạo bẩm sinh. Bạn là người rất tham vọng và luôn hướng tới mục tiêu của mình. Bạn có thể rất vững chắc về kỹ năng tổ chức và có tầm nhìn rộng lớn, điều này sẽ giúp bạn thành công trong kinh doanh, vì vậy bạn có thể trở thành một nhà quản lý doanh nghiệp và lãnh đạo giỏi.
        - Bạn phát triển bằng cách làm việc chăm chỉ, và dễ trở thành một người nghiện công việc hơn bất kì con số nào khác.
        - Bạn thường rất giỏi quản lý tiền bạc và có một tinh thần làm việc có thể giúp bạn trở nên giàu có.
        
• ĐIỂM YẾU CỦA BẠN:
        - Lý do để bạn thất bại có thể là sự hay đấu tranh, cãi vã, thiếu thấu hiểu và quan tâm tới nhu cầu và cảm xúc của người khác nên thường vô tình làm tổn thương người khác.
        - Bạn có một nỗi sợ nào đó đối với sự túng thiếu, nghèo đói. Điều đó có thể tạo cho bạn áp lực về việc kiếm tiền. 
        - Bạn có thể ít quan tâm tới gia đình, bởi vì bạn dành nhiều thời gian cho công việc hơn. Điều này có thể tạo ra sự mất cân bằng và làm phát sinh những vấn đề trục trặc. 
        - Là người thẳng thắn, trực tính, bạn có thể hay tranh cãi, lạm quyền và ít để ý đến cảm xúc của người khác. Nhưng mặt khác, bạn cũng là người dễ bị tổn thương.
        - Thêm nữa, bạn dễ rơi vào tình trạng không thực sự quan tâm nhiều đến sức khỏe của mình.
        - Việc theo đuổi lợi ích vật chất này có thể chứa đựng một số cạm bẫy, bao gồm cả khuynh hướng trở nên vô đạo đức, coi thường hoặc vi phạm pháp luật trong khi nỗ lực kiếm tiền, hoặc bỏ bê gia đình và những người thân yêu trong khi làm việc để được trả tiền.
        
        • NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 8:
        - Sơn Tùng MTP – Chủ tịch tập đoàn MTP Entertainment
        - Một vài người khác: Naomi Campbell, Elizabeth Taylor, Sandra Bullock, Pablo Picasso, Michelangelo, Nelson Mandela
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 9 – NGƯỜI CHO ĐI',
        relationship: `• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:
        Những số đường đời tương thích nhất với bạn:
        - Số 10: Đường đời số 9 và số 10 là hai cực đối lập nhau - cả về số học và tính cách. Sự kết hợp này có thể không hiệu quả trong kinh doanh, nhưng thành ngữ 'đối lập thu hút' có thể đúng khi nói về mối quan hệ cá nhân của cả hai.
        - Số 2 (hoặc số 11/2): Trực quan và nhạy cảm (giống như bạn), số 2 có thể nhìn thấu con người của bạn đến thế giới cảm xúc bên trong mà bạn thường giữ kín với người khác.
        - Số 3: Sáng tạo, giàu trí tưởng tượng và nghệ thuật, số 9 có rất nhiều điểm chung với số 3. Tính hài hước của họ có thể mang lại sự cân bằng cho bạn.
        - Số 6: Là một người đam mê tất cả mọi thứ vì cộng đồng và nhân đạo, cả hai có nhiều điểm chung không thể tách rời. Bạn cũng sẽ được hưởng lợi từ sự bảo vệ và yêu thương của những người có đường đời là số 6.
        
        Những số đường đời ít tương thích với bạn:
        - Số 4 (hoặc số 22/4): Số 4 coi trọng thói quen và sự ổn định của một mối quan hệ vững chắc hơn bất kỳ chỉ số đường đời nào. Như vậy, chủ nghĩa thực dụng của số 4 trái ngược với chủ nghĩa lý tưởng của bạn.
        - Số 5: Số 5 thường có thể được lựa chọn khi nói đến các đối tác, nhưng kết hợp với số 9 không chắc là một cặp tốt. Sự khó đoán của số 5 không hoàn toàn phù hợp với triển vọng và sự trách nhiệm của bạn.
        - Số 7: Trong khi khả năng phân tích của số 7 có phần hướng nội với nhu cầu không gian và yên tĩnh, họ mong muốn có được sự kết nối sâu sắc hơn. Nhưng cách mà bạn thường hay cư xử có lẽ quá khác biệt để họ đạt được sự hài lòng.
        - Số 8: Đường đời số 9 luôn giữ khoảng cách và cần tự do để theo đuổi lợi ích nhân đạo của mình. Điều này có nghĩa là kết hợp với sự kiểm soát của số 8 có thể không phải là một kết hợp tốt.
        - Số 9: Số 9 là người giàu cảm xúc và gắn liền với nhiều trách nhiệm. Vì vậy những người số 9 đã phải vật lộn với chuyện tình cảm, nên việc hai người có mối quan hệ với nhau có thể khiến mọi thứ trở nên khó khăn.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
• TÌNH DUYÊN:
        - Tình yêu lớn nhất của bạn là ước mơ của mình. Theo đuổi sự nhân đạo có thể quan trọng đối với bạn hơn mối quan hệ cá nhân với người khác. Điều này có thể khiến chuyện tình cảm trở nên rắc rối hơn đối bạn. Nhưng nếu người bạn đời thực sự hiểu bạn, điều đó có thể tạo nên một mối quan hệ thực sự viên mãn.
        - Trong khi bạn dễ dàng thu hút người khác, bạn đôi khi có thể tỏ ra xa cách khi nói đến các mối quan hệ thân thiết. Rốt cuộc, những cảm xúc tự nhiên nảy sinh trong các mối quan hệ thân thiết lại rất phù hợp với bạn. Điều đó nói rằng, nếu được chọn đúng bạn đời, bạn rất lãng mạn, và thậm chí là ngây thơ trong tình yêu. Một mặt, bạn sẽ thường đòi hỏi nhiều tự do để theo đuổi những sở thích bên ngoài mối quan hệ và rất khó thay đổi điều đó. Mặt khác, bạn có thể có xu hướng 'giải cứu' bạn đời của mình và trong quá trình này, bạn phải hy sinh bản thân.
        - Bạn có thể cần học cách sắp xếp các mối quan hệ và trách nhiệm của bạn mà không đánh mất bản thân.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `• ĐIỂM MẠNH CỦA BẠN:
        - Bạn là một nhà lãnh đạo bẩm sinh. Điểm đặc biệt nhất ở bạn là tạo dựng được lòng tin từ người khác một cách tự nhiên. Khi tiếp xúc với bạn, nhất là nếu bạn có tư duy tích cực, bạn sẽ cực kỳ tỏa sáng. Điều đó có thể làm cho mọi người chú ý đến bạn, tin tưởng bạn hoặc thậm chí là đi theo bạn. 
        - Bạn cũng là người có tinh thần nhân đạo cao độ. Bạn thường nghĩ cho người khác, cho công chúng và cho cộng đồng lớn. Bạn nghĩ cho nhân loại. Bạn có thể thấu hiểu được nỗi đau, khó khăn của những người nghèo  khó, khuyết tật, neo đơn, những người yếu thế. Bạn thường có xu hướng giúp đỡ mọi người, cộng đồng. 
        - Bạn cũng là người có nghị lực và ý chí mạnh mẽ. Bạn rất dũng cảm. Miễn là có ích lợi cho mọi người thì bạn không e sợ bất cứ việc gì. Thậm chí, bạn có thể hy sinh lợi ích của bản thân để làm những việc như vậy. 
        - Trong công việc, bạn chăm chỉ và yêu cầu cao với bản thân. Bạn như một tấm gương cho người khác noi theo vậy. 
        - Bạn có khí chất cao hơn người khác. Bạn thu hút được nhiều người. Và nhiều khi, trong cuộc sống, bạn gặp phải sự ghen ghét, đố kị, gặp phải những người mà họ thường ngầm không ưa bạn. Có người có thể cho rằng bạn là người kiêu ngạo hoặc trịch thượng. Nhưng bạn có thể không để tâm. Bạn không muốn đối đầu với bất cứ ai. 
        - Khi gặp vấn đề, bạn thường có xu hướng tự giải quyết. Bạn không thích người khác can thiệp hoặc xử lý giúp bạn. 
        - Bạn đầy hoài bão và ước vọng, tuy nhiên thường có khuynh hướng đi vào tổng thể chứ ít khi nào tập trung vào chi tiết.
        - Bạn rất thân thiện và mọi người thích bạn. Sự hào phóng của bạn là không có giới hạn, và bạn cho đi tiền bạc, thời gian và năng lượng một cách không tính toán. Mục tiêu cuối cùng của bạn là hướng tới một thế giới tốt đẹp hơn.
        
• ĐIỂM YẾU CỦA BẠN:
        - Bạn có thể dễ bị những vấn đề tiêu cực trong quá khứ đeo bám và ảnh hưởng. Nếu có những vấn đề như vậy, bạn hãy bước qua bằng cách tập trung vào hiện tại, làm cho tốt. Bạn cũng nên tập những môn vận động, tập thiền, yoga để thư giãn tinh thần và nâng cao trí tuệ. Bước qua quá khứ và có tinh thần tích cực sẽ giúp bạn tạo ra sự thay đổi lớn đối với thế giới xung quanh. 
        - Vì bạn khá hào phóng nên bạn có thể thấy rằng tài chính của bạn không ở trong tình trạng tốt nhất. Bạn dễ mang tiền tặng cho những người cần đến, hơn là ý thức tiết kiệm để dành lại cho chính mình, và điều này cũng dễ làm cho người thân (đặc biệt là bạn đời) của bạn nổi giận. 
        - Nếu bạn không theo đuổi con đường của bạn mà thay vào đó là theo đuổi lợi ích vật chất, bạn có thể cảm thấy cực kì không hài lòng với chính mình.
        - Thật thà là một đức tính tự nhiên của bạn, đến mức bạn dễ tưởng rằng ai cũng sẽ thật thà như mình. Điều này thường dẫn đến cảm giác thất vọng trầm trọng ở một số người Số 9, thậm chí có một số trường hợp trở nên hoài nghi về tình người, nghi ngờ không biết mình thật thà như vậy có bị… ngu quá không.
        
• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 9:
        - Đại Tướng Võ Nguyên Giáp
        - Phan Thị Bích Hằng – Nhà ngoại cảm
        - Mỹ Tâm – Ca sĩ
        - Một vài người khác: Mẹ Teresa, Mahatma Gandhi, Jim Carrey, Morgan Freeman, Kurt Cobain, Elvis Presley
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 10 - THỦ LĨNH',
        relationship: `• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:
        Tìm được một người tương thích với số 10 không dễ nhưng chắc chắn không phải là không thể.
        
        Những số đường đời tương thích nhất với bạn:
        - Số 10 khác: Như bạn có thể tưởng tượng, đường đời số 10 hợp tác với số 10 khác tạo nên một cặp đôi khá tốt. Họ có chung động lực và hiểu rõ quyết tâm thành công của nhau. Sự kết hợp này là một sự kết hợp mạnh mẽ, nhưng các vấn đề có thể nảy sinh nếu không có sự cho và nhận.
        - Số 2 hoặc số 11/2: Về sự tương hợp, đường đời số 10 và đường đời số 2 rất phù hợp. Bộ đôi này hoạt động tốt khi số 10 là người của sự nghiệp, còn số 2 là người của gia đình.
        - Số 3: Số 3 là một tâm hồn sáng tạo, đó là điều thu hút 2 người lại với nhau. Bạn có thể tận dụng sự sáng tạo của số 3 và biến tầm nhìn thành hiện thực. Là một cặp, hai số này bổ sung cho nhau rất tốt.
        - Số 5: Đối với cả hai con số, cảm giác tự do và độc lập là điều cần thiết. Cả 2 làm tốt như một cặp đôi nhưng lại không cần người kia hoàn thành việc của người còn lại.
        - Số 7: Về mặt số học, số 7 rất tò mò và rất thông minh. Trong một mối quan hệ, bạn sẽ giúp số 7 nhận ra tiềm năng của mình và đạt được thành công.
        - Số 9: Trong tình yêu, số 9 có thể vượt qua và chịu được vẻ ngoài cứng rắn của số 10. Điều này cho phép bạn bỏ qua sự phòng thủ và trở nên lãng mạn hơn.
        - Số 8: Đối với các đối tác kinh doanh, bạn và số 8 là bộ đôi hoàn hảo, nhưng thường chỉ trong lĩnh vực kinh doanh. Tính cách giống nhau của cả hai quá mãnh liệt, vì thế sẽ khó khăn nếu duy trì một mối quan hệ tình cảm.
        
        Những số đường đời ít tương thích nhất với bạn:
        - Số 4 hoặc số 22/4: Bạn và số 4 có cá tính mạnh mẽ và có cách làm việc riêng. Về lý thuyết, đó là một sự đối nghịch. Bạn muốn hoàn thành công việc càng sớm càng tốt, trong khi số 4 thích lập kế hoạch và dành thời gian của mình để làm mọi việc một cách chắc chắn.
        - Số 6: Số 6 có một bản chất nuôi dưỡng rất tốt, thường là một đặc tính tích cực. Nhưng đối với bạn, điều này có thể khiến bạn cảm thấy phụ thuộc và không an toàn.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
• TÌNH DUYÊN:
        - Bạn thường có những đặc điểm lãng mạn rất riêng biệt, điều đó có nghĩa là bạn sẽ bỏ bất cứ điều gì bạn đang làm để giúp bạn đời của mình, giống như một hiệp sĩ thời hiện đại trong bộ áo giáp sáng chói. Nó không hẳn là tràn đầy cảm xúc, mà nó mang tính kiểm soát, phục tùng, thích chiếm ưu thế hơn. 
        - Quyết tâm và sức mạnh ý chí là hai tài sản lớn nhất của bạn khi nói đến các mối quan hệ. Khi bạn đã xác định được đối phương của mình, bạn sẽ làm mọi thứ trong khả năng của mình để làm cho mối quan hệ thành công.
        - Bạn thường là kiểu khó lòng mà phù hợp với một đối tượng nhất định, phần lớn là vì tính cách này trái ngược với tính chất lãng mạn trong tình cảm.
        - Đôi khi bạn là người không thiên về cảm xúc, và mang tính cá nhân nhiều hơn. Nếu tìm được một người chịu nhường nhịn thì đó sẽ là người cực kỳ phù hợp với bạn. Ngoài ra người nào thích được kiểm soát, phục tùng người khác thì cũng sẽ dễ thu hút với bạn.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ của bạn. Chỉ số Linh hồn, chỉ số Nhân Cách và Chỉ số Sứ mệnh của bạn sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `Những người có đường đời số 10 là những người đi trước, lãnh đạo và tiên phong, mạnh dạn đi đến những nơi mà những con số khác không dám.
        Bạn quyết tâm và đầy tham vọng, không cho phép điều gì cản đường bạn. Được mô tả với tính cách mạnh mẽ, bạn là người cầu toàn, tham công tiếc việc, dám chấp nhận rủi ro và cực kỳ yêu thích cạnh tranh.
        Bạn cũng là người có tư duy sáng tạo và đam mê công nghệ tuyệt đối. Khả năng tư duy tự nhiên của bạn cho phép bạn đưa ra các ý tưởng và giải pháp một cách nhanh chóng và dễ dàng kể cả trước sự dè bỉu của những người xung quanh.
        Bạn giống như một doanh nhân và làm việc tốt hơn khi tự xây dựng công việc kinh doanh của riêng bạn hoặc trong một vai trò tự do hoặc làm việc theo hợp đồng. 
        Bạn thích điều hành mọi thứ theo nhịp trống của riêng mình, chọn đi theo con đường ít người đi hơn.
        Thật không may, một vài những đặc điểm, nếu không được luyện tập, sẽ trở thành những thuộc tính tiêu cực nhất của bạn như: tự cao tự đại, kiêu ngạo, hung hăng và coi mình là trung tâm.
        
• ĐIỂM MẠNH CỦA BẠN:
        - Mang năng lượng đường đời 10, bạn có tố chất lãnh đạo, quyết đoán và tiên phong.
        - Bạn có thể trở thành người thủ lĩnh, dẫn đầu đội nhóm, công ty hoặc tổ chức với tinh thần hành động, sáng tạo và sẵn sàng cải cách.
        - Bạn sẽ không ngừng tìm kiếm những giải pháp, hướng đi mới để đưa tổ chức, đội nhóm của bạn vươn lên dẫn đầu và về đích. Nếu là nhà sản xuất, bạn sẽ có xu hướng cải tiến sản phẩm sao cho có những tính năng mới, mang tính đột phá mà trên thị trường chưa bao giờ xuất hiện. Mong muốn cải cách, đột phá luôn nằm trong tâm trí bạn.
        - Bạn có một lòng can đảm trời cho đưa bạn vào những cuộc dấn thân đầy tính tiên phong mà có thể nhiều người khác hầu như không bao giờ nghĩ dám thực hiện.
        - Bạn luôn tập trung vào sự nghiệp và những thành tích cá nhân, nó gần như gắn liền với cuộc sống của bạn, và xem nó là trên hết tất cả các lĩnh vực khác.
        - Bạn là người kiên định. Bạn kiên định từ trong quan điểm cho tới mục tiêu. Nếu điều gì đã xác định là đúng, bạn sẽ bảo vệ đến cùng. Nếu đã chọn một mục tiêu nào đó, bạn sẽ như mũi tên, bay thằng tới đích. 
        - Với bạn, mục tiêu là quan trọng nhất, là tối thượng. Trong hành trình chinh phục mục tiêu, bạn luôn có tư duy tích cực và phát triển. 
        - Bạn sẽ tìm kiểm các giải pháp để đạt được mục tiêu, và không ngừng cho đến khi hoàn thành. 
        - Bạn ghét bàn lùi, ghét những người hay chậm chạp, lo lắng, ghét những người có phong cách tạo thêm vấn đề. 
        - Quan điểm của bạn là: hãy tập trung vào giải pháp chứ không tập trung vào vấn đề.
        - Bạn là người năng động, tự lập. Bạn không thích nhờ sự trợ giúp, bởi bạn luôn muốn tự mình thực hiện công việc. Khi bạn đã quyết định thì rất khó có thể làm bạn thay đổi.
        - Bạn là người quảng đại, thích làm việc lớn, không chấp những việc nhỏ. Trong công việc, nếu vì công việc mà ai đó mắc phải lỗi lầm, bạn sẵn sàng bỏ qua. Nhưng bạn sẽ không chấp nhận những việc gây chậm tiến độ, không hướng tới mục tiêu hoặc cản trở người khác. 
        - Bạn sẵn sàng giúp đỡ, đầu tư cho những ý tưởng, giải pháp mang tính xây dựng và hướng tới đích. Bạn hào phóng cho những điều như thế.
        - Là người thích được chiến thắng, và với tinh thần cạnh tranh mạnh mẽ, bạn thích các cuộc ganh đua và thi tài. Việc giành chiến thắng sẽ đem lại cho bạn sự thỏa mãn. 
        - Với cá tính và cái tôi lớn, bạn thích trở thành người giỏi nhất, người chiến thắng. Bạn cũng sẽ thường kể về thành tích của mình, hoặc thể hiện ra bằng cách nào đó. Điều này giúp bạn tận hưởng cảm giác chiến thắng.
        - Trong công việc, bạn là người độc lập, tự chủ và không thích người khác can thiệp. 
        - Bạn có tính trách nhiệm cao, năng động, biết khai thác các nguồn lực để làm việc. Do đó, trong công việc, nếu đã nhận nhiệm vụ, bạn thường hoàn thành tốt. Hoặc khi đã hứa điều gi, bạn cũng hiếm khi sai lời. 
        - Nếu có khó khăn, bạn cũng muốn mình là người tự giải quyết. Nếu phải để người khác xử lý hộ vấn đề, bạn sẽ cảm thấy đó như một sự yếu đuối, thất bại. Bạn không thích như vậy. Mặt khác, bạn là người yêu cầu cao trong công việc, nghiêm khắc với bản thân.
        
• ĐIỂM YẾU CỦA BẠN:
        - Người khác cảm thấy khó làm việc với bạn, nhưng nếu làm việc được, họ sẽ nhanh chóng trưởng thành nhờ bạn. 
        - Thường điều gì bạn yêu cầu người khác làm, bạn sẽ luôn là người làm trước nên đôi khi ôm đồm nhiều việc. 
        - Nếu trong công việc mà không đạt được mục tiêu, bạn thường đổ lỗi cho bản thân. Ngay cả khi kết quả công việc được mọi người đánh giá là tốt, bạn vẫn có thể cảm thấy chưa thỏa mãn, vì chưa được như mục tiêu ban đầu đề ra.
        - Với năng lượng đặc biệt, có những khi bạn trở nên độc đoán, ích kỷ và lấn át người khác. 
        - Bạn cũng có thể trở nên cáu kỉnh, giận dữ hoặc nổi loạn nếu bị ai đó công kích chỉ trích, chê bai. 
        - Bạn có thể tha thứ cho ai đó làm việc mà mắc lỗi, nhưng sẽ không tha thứ cho người phản bội. Khi đó, bạn có thể trở nên rất khắc nghiệt.
        
• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 10:
        - Phạm Nhật Vượng – Chủ tịch tập đoàn Vin Group
        - Nguyễn Xuân Phúc – Chủ tịch nước Việt Nam
        - Messi – Cầu thủ bóng đá nổi tiếng
        - Steve Jobs – Cố Chủ tịch tập đoàn Apple
        - Louis Nguyễn - Sáng lập tracuuthansohoc.com
        - Một vài người khác như: Miley Cyrus, Lady Gaga, Scarlett Johansson, Shakira Steve Jobs, Tom Cruise, Nikola Tesla, Martin Luther King, Jr., Vua hề Chaplin, Hoàng tử Harry
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 11 - TRỰC GIÁC CAO',
        relationship: `• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:
        Số đường đời tương thích nhất với bạn:
        - Số 2: Số 11 và 2 với nhau là sự kết hợp hoàn hảo vì cả hai có mối liên hệ chặt chẽ với nhau. Cả hai này có cùng một ngôn ngữ, giao tiếp ngoại giao và mong muốn một mối quan hệ hài hòa.
        - Số 6: Người bảo vệ số 6 có thể cung cấp cho bạn một mối quan hệ tốt và bạn sẵn sàng chấp nhận để họ cởi mở về tình cảm.
        - Số 8: Sự kết hợp này là một ví dụ về thu hút sự đối lập. Trực giác cao của bạn sẽ bổ sung cho số 8 một cách mạnh mẽ để ra quyết định.
        
        Số đường đời ít tương thích với bạn:
        - Số 10: Trực giác cùng sự quan tâm của bạn sẽ gây những tác động tiêu cực đến số 10.
        - Số 3: Số 3 đôi khi kém kỷ luật có thể khiến bạn thường xuyên phải nhắc nhở sự chểnh mảng của họ. Tuy nhiên, sự lạc quan của số 3 có thể mang lại chút nhẹ nhõm cho bạn.
        - Số 4 (hoặc 22/4): Số 4 mang tính ổn định nên ban đầu có vẻ phù hợp với bạn, nhưng việc thiếu biểu hiện cảm xúc của số 4 sẽ không kết nối với bạn theo đúng cách.
        - Số 5: Những người số 5 mạo hiểm chắc chắn sẽ không ngại có những mối quan hệ với những người số 11 như bạn, nhưng bản tính thiếu trách nhiệm của họ có thể vô tình làm tổn thương nếu bạn là người nhạy cảm cao.
        - Số 7: Trí tuệ tri thức của số 7 thường không hoạt động tốt với trí tuệ cảm xúc của bạn (khía cạnh số 2 của bạn), nhưng sự rung động tinh thần mạnh mẽ của bạn (khía cạnh số 11 của bạn) có thể thu hút số 7 để cùng tìm kiếm sự thật.
        - Số 9: Ghép nối bạn với số 9 có thể hiệu quả vì cả hai đều tìm kiếm sự thỏa mãn từ lòng vị tha, nhưng bản chất xa cách của số 9 có thể quá lạnh lùng đối với bạn.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
• TÌNH DUYÊN:
        - Số 11 là một phiên bản tăng cường của số 2, có nghĩa là bạn đồng cảm và nhạy cảm với những người trong cuộc sống của bạn giống như những người có đường đời số 2. Bạn là những người giao tiếp, lắng nghe tốt và luôn phấn đấu để có được sự hòa hợp trong mọi môi trường. Điều bất lợi là năng lực tâm linh làm bạn có thể bận tâm đến các cõi khác và quên đi mối quan hệ với những người ở đây trên trái đất.
        - Bạn là một người hòa bình và sẵn sàng thỏa hiệp trong một mối quan hệ, và bạn coi trọng sự đồng hành. Điều này khiến bạn trở thành một người bạn đồng hành tuyệt vời với bạn đời.
        - Vì đường đời số 11 nhạy cảm tâm linh và trực giác cao nhất trong tất cả các số đường đời, nên việc đáp ứng nhu cầu của bạn đời là điều đương nhiên. Bạn cũng vô cùng chung thủy. Sự cam kết và lòng trung thành rất quan trọng đối với bạn, và các mối quan hệ của bạn thể hiện nhiều yếu tố tinh thần.
        - Bạn là người giàu cảm xúc và đôi khi dễ bị lo lắng và trầm cảm. Bạn có thể được hưởng lợi từ một người bạn đời tính tình ổn định có thể khơi dậy ngọn lửa tình cảm bằng một chút đồng cảm. 
        - Bạn là người yêu thương và tốt bụng, nhưng cũng cần không gian riêng và có tính cách độc lập mạnh mẽ, vì vậy những người bạn đời "nhạt" quá sẽ khiến bạn kiệt sức. Nhưng khi bạn đời làm tổn thương bạn (cố ý hoặc vô tình), bạn có thể phản ứng bằng một sức mạnh cảm xúc sâu sắc.
        
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `• ĐIỂM MẠNH CỦA BẠN:
        - Bạn là người có trực giác rất mạnh. Trên thực tế, bạn có trực giác nhạy bén nhất trong tất cả các số. Bạn rất nhạy cảm và có một khả năng thấu hiểu người khác tuyệt vời, và có thể cảm nhận rất nhiều về những gì đang xảy ra đằng sau hậu trường. Ví dụ, bạn sẽ nhận biết về mối quan hệ và sức khỏe của mọi người dù không được nói cho biết bất cứ điều gì. Bạn ở đây để sử dụng món quà trực giác và sự nhạy cảm để giúp đỡ người khác.
        - Con số đường đời số 11 có những phẩm chất của số 2 được khuếch đại. 
        - Bạn là con người của tình yêu, sự khoan dung, đồng cảm, lắng nghe, hòa bình, kết nối. 
        - Bạn sẵn lòng tha thứ cho người khác nếu họ biết lỗi. Bạn không những thấu hiểu mà còn đồng cảm được với niềm vui hoặc nỗi buồn của người khác khi họ tâm sự với bạn, làm cho họ được vơi đi. 
        - Bạn có thể dành hàng giờ chỉ để ngồi nghe họ tâm sự. Bạn còn có thể kết nối bạn bè của bạn với những người khác để giúp mọi người. Bạn là chuyên gia kết nối. 
        - Bạn là người sinh ra để yêu và được yêu; coi trọng tình cảm, gia đình, tình bạn. Bạn khát khao tình yêu. Bạn muốn được mọi người đối xử bằng tình yêu thương, sự dịu dàng trong lời nói và hành động. 
        - Bạn cũng luôn trao đi tình yêu thương, tình cảm tới mọi người và luôn mong cho mọi người được bình an, hòa thuận và hạnh phúc. 
        - Bạn thực sự là người bạn chân thành, tâm lý và vô cùng an toàn. Đối với bạn, tình yêu, gia đình và bạn bè là những điều không thể thiếu trong cuộc sống. 
        - Là người hòa giải, bạn có nhiều giải pháp và luôn hành động để hóa giải xung đột, đối đầu. Bạn thường là người có những hành động, việc làm để hòa giải những người đang có vấn đề xung đột với nhau. Bạn không bao giờ đành lòng nhìn thấy bạn bè mình có sự mâu thuẫn, cãi vã. Bạn không thích, thậm chí là sợ bất kỳ hình thức đổ vỡ nào.
        - Bạn có năng lực tâm linh, trực giác tốt. Cảm nhận của bạn về một điều gì đó thường là chính xác. Bạn có thể có những giấc mơ biến thành sự thật, có tham vọng lớn; bạn có thể cảm nhận được năng lượng, v.v.. 
        - Nếu bạn có con số này bạn là người có nhận thức về tâm linh, có tầm nhìn xa, đầy cảm hứng, lôi cuốn, sáng tạo, một người mơ mộng, lý tưởng, và suy nghĩ sâu sắc. Và bạn dựa vào đức tin chứ không phải logic để đối phó với cuộc sống và tất cả những gì nó đem lại.
        
• ĐIỂM YẾU CỦA BẠN:
        - Thách thức đối với bạn là không để bản thân bị áp đảo bởi chính những món quà của bạn. Nỗi sợ hãi và ám ảnh sẽ là nhược điểm của con số này. Đôi khi bạn cũng có thể trông như thiếu quyết đoán, không thực tế, thần kinh và thất thường.
        - Quá yêu thương sẽ làm cho bạn dễ bị kiệt sức, bởi bạn thường xuyên phải giải quyết, tư vấn, níu kéo để tránh sự đổ vỡ nào đó. Bạn sợ bị từ chối, bởi với bạn, đó là biểu hiện của sự rạn nứt. 
        - Quá cảm xúc nên bạn có thể sẽ không kiểm soát được tâm trạng, nhất là khi bị khủng hoảng.
        - Bạn làm việc và đối xử tốt với người khác. Bạn có khả năng kết hôn sớm, cam kết và trung thành cho cả cuộc đời. Tuy vậy, thật không may là bạn thường bị quyến rũ bởi những hấp lực mang nặng tính đời trần (hỉ nộ ái ố, yêu yêu hận hận…) để rồi xa lìa mục đích cao cả của mình.
        - Bạn cũng dễ suy sụp và mất phương hướng nếu không tự hiểu được chính mình. Bạn có nhiều tham vọng hướng tới những điều lớn lao và khả năng để đạt được chúng, nhưng nếu không thể tự tin thì những mong muốn đó sẽ thất bại.
        - Có những sự khác biệt cực kỳ to lớn giữa cách sống của những người Số 11 nào biết sống tích cực và vận dụng được sức mạnh tâm linh vượt trội của mình vào giúp ích cuộc sống, và những người Số 11 đầy tiêu cực với đời sống có vẻ đầy khó khăn và nhạt nhòa.
        
• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 11/2:
        - Wolfgang Amadeus Mozart, Harry Houdini, Michelle Obama, David Beckham
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
]

const TEXT = [
    { content: '' },
    { content: '' },
    { content: '' },
    {
        content: `
    Khi biết Số 3 nằm ở vị trí đầu của Trục ngang Trí não, chúng ta có thể hiểu vì sao điểm nhấn của những người Số 3 nằm ở phần tư duy và lý luận. Những người có ngày sinh cộng lại bằng 12, 21, 30, 39, 48 sẽ có Con số chủ đạo là 3.
    MỤC ĐÍCH SỐNG
    Người Số 3 sẽ có mục đích sống liên quan tới các khả năng tư duy. Đối với họ, sự thấu hiếu cuộc sống và sự phát triển cả tính của riêng họ có liên quan mật thiết đến các vấn đề tư duy mang tính trực giác (intuitiveness) hoặc vận dụng thực tế (practical involvement). Chính vì vậy, những đóng góp của họ trong cuộc sống được thể hiện thông qua việc tư duy, lên kế hoạch, phân tích, ghi nhớ, vv...
    ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU
    Người Số 3 một khi đã tập trung suy nghĩ thì người khác khó mà theo kịp tốc độ tư duy của họ. 
    Bên cạnh đó, tư duy nhạy bén của họ đôi khi còn được thể hiện thành tính hài hước, một kiểu sức hút bẩm sinh khiến họ có khả năng trở thành những người bạn đồng hành thông minh và hoạt bát. Họ thể hiện bản thân thông qua kênh tư duy một cách thuận lợi hơn nhiều so với qua cảm xúc hoặc hành động cụ thể.
    ĐẶC ĐIỂM NỔI BẬT
    Đối với những người Số 3, đầu óc nhanh nhạy, tính hài hước và tư duy linh hoạt nói chung giúp họ dễ dàng thành công trong công việc. 
    Họ có thể trở thành linh hồn của buổi tiệc hoặc là người sáng giá trong công ty, nhưng ưu điểm này không phải lúc nào cùng được thể hiện khi họ ở nhà. 
    Họ có thể rất thoải mái và thu hút trong các tương tác xã hội, nhưng với những người có sự gắn bó lâu dài thì họ thường phê bình gay gắt.
    Điều này có thể khiến những người thân thiết với họ cảm thấy mệt mỏi, đặc biệt là người bạn đời. Người Số 3 thường thích giúp đỡ người khác, miễn là những người đó có khả năng tư duy tương đồng và sẵn sàng hợp tác với họ.
    KHUYNH HƯỚNG CẦN KHẮC PHỤC
    Khi sống kém tích cực, người Số 3 dễ để lại ấn tượng là người trịch thượng, gia trưởng hoặc thích chỉ đạo người khác.
    Điều này có thể gây ra khá nhiều hiểu lầm và sự bất mãn. Bởi sở hữu khả năng tư duy nhạy bén nên nhiều người Số 3 dễ thiếu kiên nhẫn và kém bao dung với những người kém nhanh nhạy hơn, cũng như thường phê bình "khả năng tư duy hạn chế" của những người này. 
    Nếu không ý thức kiểm soát tốt, bản tính hay xét nét, bình phẩm của những người Số 3 sẽ dễ bị đem ra áp dụng trong gia dình, dẫn đến những cuộc hôn nhân tan vỡ. 
    Trong vài trường hợp, những lời chỉ trích thường xuyên này có thể gây áp lực nặng nề cho người bạn đời của họ đến mức khiến những người này... bị tổn thọ.
    Người Số 3 nên học cách phát triển khả năng cảm nhận cảm xúc của người khác.
    Khi nhận ra rằng những trải nghiệm trong cuộc sống luôn mang đến những bài học quý giá, họ sẽ có sự tiến bộ đáng kể trong hành trình phát triển bản thân.
    HƯỚNG PHÁT TRIỂN
    Việc học được cách chung sống hòa hợp với người khác cũng giúp họ có được những bước tiến dài. 
    Từ đó, cuộc sống của họ sẽ tích cực hơn nhiều. Họ rất cần hạn chế phê bình hoặc chỉ trích người khác, thay vào đó là vận dụng sự kiên cường vốn có của bản thân để mang lại nguồn năng lượng tươi mới, nhìn nhận những trải nghiệm kém vui như cơ hội phát triển. 
    Người Số 3 cũng nhận được lợi ích tuyệt vời nếu mở rộng phương thức biểu đạt của mình bằng cách vận dụng trực giác và trở nên thực tế hơn trong các hoạt động hàng ngày, đặc biệt là tại nhà.
    NGHỀ NGHIỆP PHÙ HỢP
    Người Số 3 rất thích hợp với những công việc liên quan đến trí não, bao gồm các lĩnh vực học thuật, đặc biệt là khoa học, kế toán, quản trị kinh doanh, lập trình, phân tích hệ thống, v.v... 
    Họ cũng có thể là những nhà nghiên cứu khoa học giỏi giang, cũng như có năng khiếu trong các ngành nghệ thuật như viết lách, diễn xuất hoặc trở thành chuyên gia phê bình các bộ môn nghệ thuật.
    TÓM LẠI
    Người Số 3 có đầu óc nhanh nhạy, giỏi đánh giá, suy nghĩ và lên kế hoạch. Họ cũng có óc hài hước khá thông minh, nhưng dễ gặp các vấn đề trong cuộc sống hôn nhân nếu không kiểm soát tốt các mặt tiêu cực của bản thân.
    `,
    },
    {
        content: `
        Trong thế giới hiện đại, khía cạnh vật chất rất được chú trọng. Vì vậy, các biểu hiện cơ bản của người Số 4 ở khía cạnh này sẽ dễ dàng được thỏa mãn.
        Tuy nhiên, người Số 4 vẫn có nhiều mối quan tâm khác, chứ không chỉ hướng về chủ nghĩa vật chất, dù phần lớn sự quan tâm của họ nằm ở mặt này, bởi số 4 nằm ở trung tâm Trục ngang Thể chất. Có nhiều số ngày sinh cộng lại để cho ra Con số chủ đạo là số 4. Tuy nhiên, lưu ý rằng số 22/4 (số 4 được tạo thành từ số tổng 22) không nằm trong nhóm này và sẽ được đề cập sau.
        Chúng ta sống trên cõi đời này trong một cơ thể vật chất, vì vậy không có gì ngạc nhiên khi rất nhiều trải nghiệm của chúng ta có liên quan đến khía cạnh vật chất của đời sống. 
        Người Số 4 đặc biệt chú trọng những trải nghiệm và biểu hiện về thể chất, yếu tố then chốt cho sự phát triển giai đoạn đầu của họ.
        Nhưng khi trưởng thành, họ sẽ có khuynh hướng tự nhiên nắm bắt được khả năng tổ chức của Trục ngang thể chất, từ đó phát triển thêm về tình yêu thương, ý thức và trí tuệ.
        Người Số 4 Có phạm vi biểu đạt rộng bao trùm hầu hết các công việc tay chân hoặc công việc đòi hỏi óc tổ chức.
        Phạm vi hoạt động này có thể trải dài từ niềm vui kiếm sống hoặc thử thách bản thân với những cơ hội làm ăn lớn, cho đến những hoạt động văn hóa nghệ thuật hoặc thể dục thể thao. Cho dù làm gì thì người Số 4 cũng thường thích cách tiếp cận kiểu “ chính thống hơn kiểu trải nghiệm, thích nguyên tắc hơn là mạo hiểm.
        Người Số 4 có thiên hướng về “thực tế” hoặc “thực hành” - họ thích bắt tay vào việc hơn là ngồi bàn luận về các giá trị việc đó mang lại.
        Chính sự thực tế này giúp những người Số 4 luôn tiến về phía trước. Họ ít khi ngồi yên nhìn người khác bận rộn và thường tiến tới đề nghị hỗ trợ một tay. Họ thuộc nhóm những người nguyên tắc và đáng tin cậy nhất. Điều này đặc biệt thể hiện rõ trong những việc cần sự tỉ mỉ, khi sự chính xác và khả năng thực tế của họ được phát huy và mang lại lợi ích tối đa đến trong các hoạt động thực tế, người Số 4 Có thể vô cùng kiên nhẫn, nhưng khi gặp phải các vấn đề liên quan khía cạnh tinh thần hay tâm linh thì họ thường rất thiếu kiên nhẫn.
        Người Số 4 thường đắm chìm trong công việc và xao lãng những việc mang đến sự cân bằng cho cuộc sống của họ, đặc biệt là cuộc sống gia đình.
        Nếu không có khả năng cân bằng cảm xúc, họ sẽ dễ đánh mất bản thân vì những tham vọng bất thành, gây ra các vấn đề về tâm lý hoặc chứng bệnh liên quan đến stress. 
        Điều này có thể gây ra cảm giác bất an và không hạnh phúc kéo dài, ảnh hưởng tiêu cực đến mục đích sống của họ ở đời này.
        Người Số 4 cần phát triển ba yếu tố quan trọng sau: thư giãn, vận dụng năng lực trí não và phát triển trực giác.
        Thư giãn là một cách quan trọng để buông bỏ những mối bận tâm về vật chất và đời sống thực tế khi chúng trở nên quá mệt mỏi. Thư giãn cũng là nền tảng quan trọng giúp phát triển tâm thức, vốn đạt được hiệu quả nhất thông qua hoạt động hành thiền. Bên cạnh đó, họ có thể tập vận dụng năng lực trí não thông qua các bài tập luyện trí nhớ và tìm hiểu các nguyên tắc quan trọng, chẳng hạn như những nguyên tắc thường được dạy trong các chuyên ngành triết học, kỹ sư, kiến trúc,... Những ứng dụng đó sẽ giúp người Số 4 phát triển nhận thức về trực giác, mở rộng cánh cổng dẫn đến nhận thức về tình thần hay tâm linh. Còn trong mọi chuyện mình làm, người Số 4 nên cố gắng cân bằng phần thực tế của họ với phần tâm trí (óc phân tích, tính sáng tạo, tỉnh lý tưởng hóa) và phần tinh thần (trực giác, tình yêu thương và sự khôn ngoan).
        Người Số 4 phù hợp làm việc ở những lĩnh vực đòi hỏi kỹ năng cao.
        Tùy thuộc vào trình độ giáo dục họ nhận được, công việc phù hợp với họ có thể rất đa dạng, từ người làm ăn buôn bán, kỹ thuật viên, nghệ nhân, kỹ thuật viên vận hành máy móc..., cho đến nhà quản lý doanh nghiệp, vận động viên thể thao chuyên nghiệp, chuyên gia kinh tế, bác sĩ, chuyên viên vật lý trị liệu, người làm vườn. Rất nhiều giảng viên các chuyên ngành mỹ thuật, điêu khắc, các huấn luyện viên thể thao hoặc thể hình, cũng như các tác giả sách hay tạp chí chuyên ngành kỹ thuật đều thuộc nhóm người Số 4.
        Trong các lĩnh vực có liên quan tới tài chính, người Số 4 cần ý thức giữ tính chính trực cao độ để không bị lôi kéo bởi tư lợi, một yếu tố bắt nguồn từ xu hướng “vật chất” của Số 4.
        Người Số 4 rất thực tế và chuộng tính chuẩn mực, rất thích hướng về vật chất.
        `,
    },
    {
        content: `
    Trên thực tế, người có Con số chủ đạo là 5 thường có khuynh hướng cố gắng thoát khỏi sự trói buộc. 
    Đó cũng là biểu hiện tự nhiên của bản chất vô cùng nhạy cảm và nhu cầu được bày tỏ cảm xúc của nhóm này. Điều này không quá bất ngờ vì trong biểu đồ số theo trường phái Pythagoras, Số 5 nằm ở giữa Trục ngang Tinh thần và Mũi tên Ý chí. Những ngày sinh có số tổng 14, 23, 32, 41 sẽ có Con số chủ đạo là 5.
    MỤC ĐÍCH SỐNG
    Diễn đạt cảm xúc một cách trọn vẹn nhất (thông qua các hình thức như viết, vẽ, điêu khắc, ... ) là một trong những điều mà con người muốn đạt tới. 
    Tuy nhiên, điều này chỉ có thể đạt được khi con người có đủ tự do để thể hiện. Đó chính là mục tiêu mà người Số 5 tìm kiếm để phát triển, như một cách để thấu hiểu các tầng cảm xúc của họ. Tuy vậy, rất ít người Số 5 nhận ra điều này. Thường thì họ chỉ cảm nhận được khát vọng tự do mà không hề nhìn ra nguyên nhân thật sự ẩn đằng sau, đó là định hướng một cách tích cực cuộc đời của họ bằng những phương tiện biểu đạt này.
    ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU
    Phần lớn những người Số 5 cảm thấy khó làm việc theo giờ giấc quy định nghiêm ngặt. Vì vậy, họ thường oán trách cấp trên của mình và dễ mắc những căn bệnh liên đến áp lực công việc. 
    Người Số 5 nên tìm kiếm những công việc cho phép họ không cần phải chịu sự chỉ đạo trực tiếp từ ai, chẳng hạn như công việc nhân viên bán hàng lưu động, nhà văn hoặc họa sĩ làm việc tự do. Bằng cách này, họ sẽ có được sự tự do mà họ cần để phát triển phương thức biểu đạt bản thân phù hợp nhất. Nhiều người trong nhóm này rất say mê các cuộc phiêu lưu, thường đi du lịch hoặc thường xuyên thay đổi công việc. Việc du lịch đây đó hay những trải nghiệm công việc khác nhau này cũng trở thành phương tiện quý giá giúp họ nâng cao trí tuệ hay ý thức. Một khía cạnh khác mà những người Số 5 rất dễ thành công là lĩnh vực giải trí, nơi họ được tự do thể hiện cảm xúc của mình, và nhiều người đã cực kỳ thành công như những diễn viên hay nghệ sĩ chuyên nghiệp. 
    Nhưng bất kể họ làm công việc gì thì tình yêu con người của họ vẫn là động lực cơ bản nhất.
    ĐẶC ĐIỂM NỔI BẬT
    Người Số 5 thường có trực giác rất tốt, với cảm xúc sâu sắc và tư duy nghệ thuật mạnh mẽ. 
    Họ hạnh phúc nhất khi được tự do thể hiện bản thân. Khi có được sự tự do đó, họ sống động và tràn đầy năng lượng, nhưng một khi bị gò bó, họ trở nên ủ dột và tâm trạng lên xuống thất thường, thậm chí là lãnh đạm. Tuy vậy, họ là những người tâm tính tốt, luôn quyết tâm sống một cuộc sống vui vẻ và giúp người khác cũng có được cuộc sống như vậy, đây là bản tính giàu lòng trắc ẩn của người Số 5.
    KHUYNH HƯỚNG CẦN KHẮC PHỤC
    Vì rất yêu thích tự do, đôi khi người Số 5 có thể chấp nhận những việc làm không "chính thống” để không phải làm việc theo giờ giấc gò bó. 
    Vì thế họ không nhận ra ý nghĩa của sự gò bó đó là để rèn luyện tính kiên nhẫn, tinh thần hợp tác và khả năng tự kiềm chế. 
    Nhiều bạn trẻ Số 5 khi mới đi làm đã không chịu nổi việc phải báo cáo với sếp và lựa chọn... bỏ việc. Khi không tập trung chú ý vào chi tiết, người Số 5 dễ mắc sai lầm trong công việc, và vấn đề có thể trở nên trầm trọng hơn bởi những lo âu và băn khoăn khi họ bị trói buộc trong môi trường làm việc chính thống. Hậu quả là họ sẽ dễ bị stress hay trầm cảm nếu không kiểm soát cảm xúc tốt. 
    Dành thời gian tiếp xúc với thiên nhiên có thể giúp họ lấy lại sự bình tĩnh trong những lúc như thế này.
    HƯỚNG PHÁT TRIỂN
    Người tìm kiếm tự do thường muốn được quay về những ngày tháng vô lo hồn nhiên thuở ban sơ. Nhưng chắc chắn là chúng ta không thể sống mãi trong quá khứ, mà phải học hỏi từ những trải nghiệm đã qua để phát triển bản thân. 
    Vì thế, khi hoàn cảnh hiện tại có vẻ đang trói buộc chúng ta, thay vì cảm thấy bức bối, hãy tập trung suy nghĩ về những bài học ta sẽ thu được qua trải nghiệm này. 
    Như vậy chúng ta sẽ có thể vượt qua cảm giác khó chịu vì sự trói buộc đó và tiến lên phía trước. Để làm được điều này, người Số 5 cần tăng cường sự chú ý vào các chi tiết, trở nên thực tế hơn, nhìn cuộc đời với lăng kính rộng mở hơn. Họ sớm cũng sẽ nhận ra rằng các cơ hội đi đó đi đây sẽ giúp họ phát triển khả năng quan sát, và là phương tiện thiết yếu để họ thêm hiểu biết về cuộc sống và phát triển trí tuệ. Khi người Số 5 trưởng thành hơn, họ sẽ tự biết điều chỉnh bản thân để thích ứng với các nguyên tắc của tập thể, qua đó củng cố cảm giác an toàn cho bản thân mình, đặc biệt là trong các mối quan hệ. 
    Trên hết, hãy nhớ rằng người Số 5 lấy tình yêu thương làm động lực cho mọi hành động, dù họ có thể hiện điều đó bằng cách nào đi nữa.
    NGHỀ NGHIỆP PHÙ HỢP
    Người Số 5 có ba đặc trưng: yêu tự do, thích diễn xuất và có khiếu nghệ thuật. 
    Vì thế nghề nghiệp nào có yếu tố diễn xuất hoặc khả năng diễn đạt chuyên nghiệp sẽ rất hợp với người Số 5, bất kể đó là diễn viên chuyên nghiệp hay các ngành nghề nào khác cần kỹ năng này, như bán hàng, chính trị... Họ cũng có thể làm việc trong ngành du lịch, khách sạn, hoặc làm nhà văn, họa sĩ, nhà thiết kế, chủ doanh nghiệp, nhà phát minh sáng chế, nhân viên xã hội ...
    TÓM LẠI
    Bản chất của người Số 5 là đầy yêu thương và yêu tự do
    , có óc nghệ thuật, máu phiêu lưu và cảm xúc lên xuống thất thường dao động từ tâm trạng rất vui vẻ khi được tự do sang ủ dột ra mặt khi cảm thấy bị “đè nén ”. 
    Về cơ bản, họ là những người thuộc nhóm “cảm nhận”.
    `,
    },
    {
        content: `
    Số này là con số chủ đạo của sự Cực đoan hoặc quá mức. Khi chọn lối sống tích cực người Số 6 có khả năng sáng tạo mạnh mẽ, nhưng nếu chọn lối sống tiêu cực thì họ lại dễ trở thành những người lo lắng triền miên. 
    Số 6 nằm giữa trục ngang trí não và ở đầu Mũi tên Ý chí, điều này khiến người Số 6 có tiềm năng phi thường trong việc cảm nhận và sáng tạo một cách xuất sắc, đáng tiếc là họ thường hiếm khi đạt được thành công bền vững trong cuộc sống vì khuynh hướng lo lắng luôn hiện hữu và tự biến bản thân mất năng lượng. Ngày sinh có số tổng là 15, 24, 33, 42 sẽ tạo thành Con số chủ đạo 6.
    MỤC ĐÍCH SỐNG
    Chúng ta sẽ thấy nhiều người Số 6 ưu tú trong rất nhiều lĩnh vực sáng tạo, từ ở nhà cho đến đấu trường quốc tế. 
    Họ mang một trọng trách lớn trong cuộc sống, thứ đòi hỏi ở họ sự tận tâm sâu sắc. Tất cả những người Số 6 đều có khả năng thiên phú này nhưng họ thường bị gánh nặng trách nhiệm làm cho bất an và lo lắng, từ đó mắc kẹt trong áp lực căng thẳng. Họ cần học cách làm chủ những tình huống mà óc sáng tạo và thiên hướng quan tâm đưa họ đến, chứ không nên để tình huống kiểm soát mình. 
    Nói cách khác họ cần học cách bảo vệ bản thân để có thể thể hiện được tính sáng tạo tuyệt vời của mình mà không bị thao túng bởi hoạt cảnh.
    ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU
    Người Số 6 rất xuất sắc trong các lĩnh vực cần đến lòng tin, sự sáng tạo cũng như tính tận tụy của họ. 
    Một số người chọn thể hiện tài năng của mình trước công chúng, tỏa sáng trên sân khấu hay màn ảnh bằng khả năng diễn xuất hoặc ca hát. Một số khác thì chọn thể hiện bản chất đầy yêu thương của họ một cách riêng tư hơn ở nhà, với gia đình của mình. 
    Sâu trong bản chất của người Số 6 luôn là tình yêu sâu sắc dành cho con người và một bản tính lương thiện mà họ luôn muốn thể hiện cũng như vui vẻ duy trì.
    ĐẶC ĐIỂM NỔI BẬT
    Khả năng sáng tạo xuất chúng của người Số 6 thường tìm mọi cơ hội để được thể hiện, dù là ở Công sở, nơi vui chơi hay trong gia đình. 
    Với những người Số 6, nhà thường là nơi quan trọng nhất, họ dành rất nhiều thời gian cho mái ấm của mình, và nơi này luôn có tầm quan trọng thứ hai - chỉ xếp sau những người thân yêu đang sống cùng họ dưới mái nhà đó. Vì là những người yêu thương con người, Số 6 rất ghét sự bất công. 
    Họ là những người giàu lòng trắc ấn, vị tha và bao dung - những người phải học cách bảo vệ bản thân để lòng tốt của mình không bị lợi dụng.
    KHUYNH HƯỚNG CẦN KHẮC PHỤC
    Nếu khả năng sáng tạo của người Số 6 bị giới hạn trong phạm vì gia đình, bị đề cao thái quá thì nó có thể gây ra những nỗi lo lắng tiêu cực và mong muốn sở hữu lệch lạc. 
    Trong hoàn cảnh này, người Số 6 có thể thường xuyên có những nội bất an và sợ hãi, thứ khiến cho sự phát triển cá nhân của họ bị giới hạn và cuộc sống của họ sẽ bị trì trệ. Về lâu dài, nhưng nỗi lo lắng thường trực này trở thành những chướng ngại tâm lý nhẹ, đi kèm với nỗi cô độc buồn bã và mâu thuẫn hoàn toàn với tất cả những gì mà người Số 6 đang khao khát tạo ra. Và khi nỗi lo lắng hay tính tiêu cực bủa vây cuộc sống của người số 6, họ có xu hướng than vãn và đổ lỗi.
    HƯỚNG PHÁT TRIỂN
    Người Số 6 cần nhận thức được rằng cái nhìn tích cực về cuộc sống là yếu tố quan trọng hàng đầu để họ phát triển tính sáng tạo, cho dù hoàn cảnh thực tế có giới hạn đến mức nào đi nữa. 
    Họ cũng cần hiểu rằng sự quan tâm luôn đồng hành với sự tự do biểu đạt chứ không nên đè nén. Vì vậy, họ nên tránh tâm lý sở hữu, mà nên truyền tải sự quan tâm đã đến với mọi người xung quanh, đặc biệt là những người thân thương của mình, bằng nhiều cách sáng tạo hơn. Đa số người Số 6 đều khao khát sự bình yên và mong muốn có được nó bằng mọi gia, nhưng điều này đôi khi được thể hiện như sự cam chịu và do đó trở thành nhược điểm của họ, khiến họ có xu hướng tự hủy hoại bản thân và không tìm được niềm vui sống. Nếu học được cách trở nên Kiên quyết, biết lúc nào nên nhượng bộ, lúc nào không người số 6 sẽ cảm thấy hạnh phúc hơn và có thể tự bảo vệ bản thân khỏi sự lợi dụng của những người vô tâm (trong đó đôi khi có cả người thân trong gia đình )
    Bên cạnh đó, việc phát triển khả năng phân biệt cái gì quan trọng và cái gì không, nắm rõ sự chừng mực và thể hiện lòng trắc ẩn một cách khôn ngoan sẽ giúp họ nâng cao năng lực sáng tạo, giúp họ có thể tạo ra những điều không ai ngờ tới.
    NGHỀ NGHIỆP PHÙ HỢP
    Cho dù người Số 6 lựa chọn ngành nghề nào, công việc của họ phải có yếu tố sáng tạo trực tiếp tác động và làm cho cuộc sống con người trở nên tốt đẹp hơn.
    Họ có thể là thành viên ưu tú trong các tổ chức nhân đạo, hoặc là những người chữa lành, họa sĩ, nhà thiết kế tài ba. Họ có tài năng đáng ghi nhận trong lĩnh vực diễn xuất hay ca hát mang màu sắc kịch tính - thậm chí một số người còn đi quá xa đến mức khiến cuộc sống của mình trở nên kịch tính một cách khoa trương.
    TÓM LẠI
    Người Số 6 là những người có đầu óc sáng tạo, thích quan tâm, công bằng, không ích kỷ, bao dung và yêu gia đình, 
    nhưng hay có khuynh hướng bị lo lắng và bất an thái quá.
    `,
    },
    {
        content: `
    Dưới ảnh hưởng của Số 7 trong vai trò Con số chủ đạo, người mang số này sẽ triệt để trải nghiệm các bài học mà cuộc đời mang lại, thông qua quá trình khổ học và hoạt động giảng dạy hoặc chia sẻ với người khác. 
    Cả hai phương diện này đều thể hiện ở khía cạnh trải nghiệm thể chất, vì số 7 nằm ở điểm giao nhau giữa Mũi tên Thực tế và Mũi tên Hoạt động. Những người có ngày sinh cộng lại thành số tổng 16, 25, 34, 43 sẽ Có Con số chủ đạo là số 7.
    MỤC ĐÍCH SỐNG
    Có vẻ những ai sinh ra dưới con số chủ đạo 7 chắc chắn sẽ được “ rèn giũa ” qua vòng đời này để có được một bước tiến dài về phía trước. 
    Đặc điểm nổi bật của Số 7 là khả năng học hỏi gần như vô hạn từ những trải nghiệm thực tế của bản thân, qua đó lĩnh hội được những giá trị tốt đẹp để sau đó có thể đem ra chỉ dạy hoặc chia sẻ cho nhiều người khác. Những trải nghiệm thực tế này còn mang đến cho họ những triết lý sâu sắc về cuộc đời.
    ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU
    Một trong những đặc điểm độc đáo ở những người Số 7 là họ thường học hỏi " theo cách riêng của mình ". 
    Không dùng lại ở việc tiếp nhận các chỉ dẫn tối thiểu từ người khác, người Số 7 khát khao được học bằng cách tự trải nghiệm. 
    Chính vì điều này, người Số 7 thường phải hy sinh ít nhất một trong ba khía cạnh của cuộc sống: sức khỏe, tình yêu, tiền tài.
    Thông qua những bài học này, họ trở thành những người có vốn sống và trải nghiệm sâu sắc để truyền tải lại cho người khác và giúp ích cho đời. 
    ĐẶC ĐIỂM NỔI BẬT
    Người Số 7 thuộc nhóm những người năng động nhất trong cuộc sống.
    Tuy không phải lúc nào họ cũng ý thức được điều này, nhưng người Số 7 thường có khát khao tự trải nghiệm, và những trải nghiệm này sẽ trở thành những kinh nghiệm nhớ đời khi (thật không may) chúng đòi hỏi họ phải hy sinh điều gì đó trong cuộc sống của mình. Đường đời của không ít người Số 7 thoạt nhìn có vẻ khá buồn, đặc biệt là khi họ chưa nhận ra những khó khăn thử thách hoặc tổn thất mà mình gặp phải là những bài học, 
    và những bài học này sẽ lặp đi lặp lại với mức độ mất mát ngày càng trầm trọng hơn cho đến khi họ nhận ra.
    Tuy vậy, thông qua sự tổn thất về sức khỏe, tình yêu hay tiền tài này, người Số 7 sẽ học được một triết lý sống sâu xa, và chính sự thấu hiểu quý giá ấy sẽ giúp họ tránh được những bài học nặng nề hơn khi ý thức của họ ngày càng phát triển. 
    Người Số 7 Có một loại nghị lực đặc biệt giúp họ bẩm sinh đã tự tin vào bản thân, mà chính sự tự tin này sẽ giúp họ ứng phó với các trải nghiệm sống của mình mà không hề than vãn, 
    Họ hiểu rằng " mọi chuyện xảy ra đều có lý do của nó ".
    KHUYNH HƯỚNG CẦN KHẮC PHỤC
    Sự Cố chấp của họ trong việc tự trải nghiệm, đến mức có thể từ chối nhận những lời chỉ dạy hay khuyên nhủ từ người khác, khiến người Số 7 thường có khuynh hướng nổi loạn. Khi từ chối nhận lời khuyên, họ dễ có thái độ thích dạy người khác chứ không thích được người khác chỉ dạy. 
    Điều này khiến họ phải trả giá nhiều trong cuộc sống. 
    Vì họ không học được những bài học kinh nghiệm mà người khác từng trải qua và khuyên họ nên tránh. Thế nhưng họ lại thích người khác nghe theo lời khuyên của mình, và khá bực mình khi nhận được lời khuyên y như vậy từ người khác.  ***  khi họ trưởng thành và hành động khôn ngoan hơn, cuộc sống cá nhân và sự nghiệp của họ mới trở nên tốt đẹp hơn ***
    HƯỚNG PHÁT TRIỂN
    Người Số 7 thường không giỏi nhìn người và cũng không am hiểu kinh doanh, nên họ cần cực kỳ thận trọng trong hoạt động kinh doanh và đầu tư. 
    Nhưng những nhược điểm này có thể được khắc phục nếu họ có tinh thần kỷ luật hơn - nếu họ có thể kỷ luật bản thân tốt như những gì họ đòi hỏi nơi người khác. 
    Việc chịu khó nghe lời khuyên và sống có kỷ luật cũng sẽ giúp họ phát triển trực giác và giúp cải thiện chất lượng cuộc sống của bản thân họ, cũng như của những người mà họ thương yêu. 
    Thông thường, người Số 7 học khá chậm, vì họ có nhu cầu tự trải nghiệm mọi thứ. Với những gia đình có con mang Số 7, các cha mẹ cần lưu ý đặc biệt đến đặc điểm này và cho phép trẻ học theo tốc độ tiếp thu tự nhiên của chúng. Vì không ít bậc phụ huynh coi thành tích học tập của con ở trường là “ thể diện của gia đình ”, chứ không nhận ra giá trị lớn nhất của việc học là mang lại lợi ích cho bản thân con. Nghiên cứu trên nhiều trẻ em Số 7 cho thấy các em có thể tiếp thu việc học một cách nhanh chóng cho đến khoảng năm lên bảy tuổi. Giai đoạn bảy năm sau đó, tốc độ học tập của các em chậm hơn đáng kể, nhưng vào khoảng mười bốn tuổi trở đi, tốc độ tiếp thu của các em lại được tăng lên nếu các em có ý thức tự kỷ luật bản thân. Trẻ em Số 7 hiếm khi trở thành những học giả xuất sắc.
    NGHỀ NGHIỆP PHÙ HỢP
    Với tính đáng tin cậy, và mong mỏi có được sự tin tưởng từ người khác, người Số 7 rất thích hợp với các hoạt động có liên quan đến ngành luật. 
    Người Số 7 cũng thường tìm thấy trong đội ngũ những người làm công tác giảng dạy và trong các lĩnh vực nhân văn, như giáo viên, thành viên các đoàn thể, nhà khoa học, nhà triết học... Bên cạnh đó, họ cũng là những người có khả năng thiên phú trong việc sử dụng các công cụ sắc bén, từ đó thôi thúc họ lựa chọn các ngành nghề như bác sĩ phẫu thuật, thợ mộc, thợ tiện ...
    TÓM LẠI
    Người Số 7 có nhu cầu học hỏi thông qua các trải nghiệm của bản thân, nhưng không thích tuân thủ các nguyên tắc bên ngoài. 
    Họ rất tự tin, nhân văn và sâu sắc. Cuộc đời của họ thường trải qua nhiều tổn thất và hy sinh mà qua đó, họ sẽ học được nhiều bài học để đời.
    `,
    },
    {
        content: `
        Những người mang con số chủ đạo 8 là những người coi sự độc lập là một trong những yếu tố quan trọng hàng đầu trong cuộc sống. 
        Họ có thể là những người khá phức tạp, sở hữu cá tính mạnh, sức mạnh và trí tuệ hơn người. Sức mạnh của họ đến từ vị trí số 8, Con số của trí tuệ ở Trục ngang Tinh thần, đồng thời là con số nằm trung tâm Mũi tên Hoạt động. Con số chủ đạo 8 thuộc về những người có số tổng ngày sinh là 17, 26, 35, 44.
        MỤC ĐÍCH SỐNG
        Một trong những khía cạnh rất quan trọng của tình yêu thương là khả năng bày tỏ. 
        Một trong những thành tố thiết yếu để xây dựng mối quan hệ tốt đẹp giữa người và người chính là khả năng biểu đạt lòng biết ơn và sự trân trọng đến nhau. Nhưng đây chính là hai phương diện mà những người Số 8 cảm thấy khó thể hiện nhất. 
        Do đó, mục đích Sống quan trọng mà họ cần đạt được trong đời chính là vượt qua những giới hạn này. Khi phát triển theo hướng đó, họ sẽ nhận ra việc cải thiện chất lượng các mối quan hệ sẽ giúp họ củng cố sự tin tưởng mà người khác dành cho họ, chứ không hề cản trở tính độc lập của họ. Điều này lại tiếp tục tạo nên cảm giác an toàn cho cá nhân họ, nâng cao chất lượng cuộc sống cùng với sự phát triển về trí tuệ, một phần cực kỳ cần thiết đối với những người Số 8 .
        ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU
        Tuy có vẻ không khớp với bản tính tự nhiên của mình, nhưng người Số 8 thường có lòng trắc ẩn và sự cảm thông vô hạn đối với những người kém may mắn trong cuộc sống. Nhưng thái độ này không phải lúc nào cũng được duy trì lâu, vì họ thường mất kiên nhẫn với những ai trở nên phụ thuộc vào họ - họ cảm thấy điều này làm ảnh hưởng tới sự độc lập của mình. 
        Họ có khả năng thành công rực rỡ trong kinh doanh, đặc biệt là khi họ không để cảm xúc làm lạc hướng các quyết định làm ăn của mình. 
        Người Số 8 là những người rất chú trọng chuyện ăn mặc và tự hào về ngoại hình - không chỉ của bản thân mình mà cả những người họ yêu thương. 
        Họ là con người của cảm xúc, nhưng thường che giấu sự nhạy cảm của mình cho đến khi họ đủ trưởng thành để bày tỏ.
        ĐẶC ĐIỂM NỔI BẬT
        Người Số 8 thường toát ra vẻ độc lập, tự tin và là chỗ dựa đáng tin cậy cho người khác.
        Những tố chất này kết hợp hài hòa với nhau, trang bị cho người Số 8 khả năng gánh vác các vị trí quản lý cấp cao và những trọng trách mà đa số họ có thể hoàn thành xuất sắc. Nhưng ưu điểm độc lập quá mạnh mẽ của họ có thể được biểu đạt thành một thái độ tương đối lạnh nhạt, đôi khi trở thành thờ ơ, khi họ ở nhà. Họ không cố tình như vậy, mà điều này bắt nguồn từ đặc điểm “khó mở lời, khó bày tỏ” của họ, một đặc điểm thường sẽ biến mất khi họ trưởng thành. 
        Lòng trắc ẩn của họ dành cho những tạo vật yếu ớt - như người già, người bệnh, trẻ em và động vật... chính là một biểu hiện của việc tìm kiếm cách bày tỏ tình cảm, cảm xúc của mình, và nó sẽ sớm chuyển vẻ lạnh nhạt của họ thành biểu hiện ấm áp của tình yêu thương. 
        Người Số 8 cũng sở hữu sự khôn ngoan bẩm sinh mà từ đó họ sẽ học cách hoàn thiện bản thân khi họ trưởng thành.
        KHUYNH HƯỚNG CẦN KHẮC PHỤC
        Tính độc lập mạnh mẽ của họ quá rõ nét đến mức người Số 8 thường cảm thấy khó chịu khi có ai đó (mà họ cho là) muốn can thiệp vào các kế hoạch của họ. 
        Vì thế, để hướng dẫn những người này, cần phải có sự tinh tế và khéo léo vô cùng. Trên thực tế, người Số 8 cần rất nhiều sự hướng dẫn, đặc biệt là trong vấn đề nuôi dạy con trẻ - vì họ dễ rơi vào một trong hai thái cực: hoặc quá nuông chìu, hoặc quá nghiêm khắc với con cái. Họ thường gặp trở ngại trong các mối quan hệ tình cảm, có xu hướng tự dựng lên các rào cản và thu cảm xúc mình lại đằng sau bức tường rào đó. 
        khi trưởng thành hơn, họ sẽ nhận ra họ có thể hạnh phúc hơn nhiều nếu có thể bày tỏ tình cảm của mình cho đối phương biết.
        HƯỚNG PHÁT TRIỂN
        Người Số 8 cần nỗ lực khắc phục điểm yếu trong vấn đề bày tỏ tình cảm với những người mà họ quan tâm. 
        Quan trọng nhất chính là họ cần nhận ra điểm yếu này, vì đa số những người Số 8 không thấy rằng mình không biết cách biểu lộ tình cảm. Khi họ học được cách bày tỏ cảm xúc, mức độ hạnh phúc và cảm giác an toàn của họ cũng được cải thiện nhiều. 
        Bày tỏ lòng biết ơn cũng là một cách để họ tập biểu đạt các tầng cảm xúc sâu hơn.
        Sự phát triển này kéo theo sự phát triển của trí tuệ, điều mà từ trước đến nay họ chỉ có khuynh hướng biểu đạt trong Công việc hoặc khi cần cho người khác lời khuyên mà thôi. 
        Sự khôn ngoan và mức độ trưởng thành của họ sẽ được nâng lên thông qua việc du lịch đó đây, một hoạt động mà họ rất thích .
        Người Số 8 thường được tìm thấy ở các vị trí lãnh đạo của các doanh nghiệp lớn, với khả năng điều hành xuất sắc. 
        Họ có khả năng am hiểu các vấn đề về tài chính và thường có hứng thú với ngành ngân hàng, chứng khoán... Họ cũng có thể trở thành chuyên gia lữ hành, thuyền trưởng hoặc phi công giáo viên và y tá phục vụ người lớn tuổi hoặc trẻ em, làm việc với các loài động vật hoặc trong các tổ chức nhân đạo. Bên cạnh đó, nhờ khả năng che giấu cảm xúc tự nhiên của mình, họ có thể rất thành công trong nghề diễn xuất chuyên nghiệp.
        TÓM LẠI
        Người Số 8 thường rất độc lập, cực kỳ đáng tin cậy, tự tin, ít chịu bày tỏ tình cảm, hợp với các hoạt động thương mại, kinh doanh và rất quan tâm đến người bệnh và người kém may mắn.
        `,
    },
    {
        content: `
        So với những nhóm khác, người mang con số chủ đạo 9 sẽ nhân gấp ba lần ba yếu tố: hoài bão, trách nhiệm và lý tưởng. 
        Họ luôn đặt yếu tố con người lên hàng đầu. Người Số 9 có số tổng của ngày sinh là 18, 27, 36 hoặc 45 
        MỤC ĐÍCH SỐNG
        Người Số 9 luôn tự cảm thấy mình đầy trách nhiệm. 
        Họ phù hợp với nghệ thuật và các lĩnh vực nhân văn hơn là với khoa học hay thương mại. Rất nhiều người đi đầu trong lĩnh vực văn hóa hoặc xuất sắc trong ngành diễn xuất có Con số chủ đạo là Số 9 - họ đều có lý tưởng cống hiến cháy bỏng cho sự nghiệp và cho cuộc sống, mặc dù các ý tưởng của họ không phải lúc nào cũng ứng dụng được. 
        Vì thế, một điều quan trọng trong mục đích sống của họ chính là học cách biến lý tưởng thành thực tế.
        ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU
        Người Số 9 có mong muốn được phục vụ và nâng cao đời sống con người. 
        Họ đầy hoài bão nhưng thường có khuynh hướng quan tâm tổng thể hơn là tập trung vào chi tiết. Do đó, họ phù hợp với những lĩnh vực không liên đến thương mại, vì họ thường kém về tính toán hay quản lý tài chính, đặc biệt là quản lý tài chính cá nhân. Họ rất có máu nghệ sĩ, và nếu có theo nghề diễn xuất thì họ thường chọn hướng nghiêm túc của chính kịch chứ ít khi đi theo hướng hài kịch hay các trường phái biểu diễn thoải mái khác.
        ĐẶC ĐIỂM NỔI BẬT
        Có hoài bão, có trách nhiệm, có lý tưởng là ba giá trị nổi bật trong con đường tiến hóa của người Số 9. 
        Nhưng trên hết, trách nhiệm với bản thân mới là điểm nhấn đặc biệt của họ. Trung thực là phẩm chất tự nhiên của họ, đến mức họ mặc định rằng ai cũng sở hữu đức tính này như mình. Điều đó thường gây ra sự thất vọng nặng nề cho một số người Số 9, thậm chí có một số trường hợp trở nên hoài nghi con người và nghi ngờ cả giá trị của bản chất trung thực mà mình sở hữu. 
        Người Số 9 có xu hướng hỗ trợ tiền bạc cho những người đang gặp khó khăn hơn là dành dụm cho chính mình, và điều này thường khiến người thân (đặc biệt là người bạn đời) của họ nổi giận. Họ có những suy nghĩ tuyệt đối tốt đẹp cuộc sống, về lý tưởng, về con người và động lực sống. Mặc dù những ý tưởng này không phải lúc nào cũng thực tế, nhưng những người Số 9 sẽ luôn nỗ lực thực hiện chúng - đây là một phần bản chất của họ.
        KHUYNH HƯỚNG CẦN KHẮC PHỤC
        Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. 
        Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thời đạo đức giả. 
        Khi hoài bão của họ biến thành tham vọng, chúng có thể đàn áp và hủy hoại những lý tưởng tốt đẹp họ từng nuôi dưỡng từ đó phát triển thái độ tự xem mình là trung tâm. Điều này sẽ sớm tạo thành tính cách thô lỗ và thái độ ưa chỉ trích - thứ mà những người xung quanh họ sẽ cảm thấy khó chấp nhận được cũng là thứ có thể khiến họ suy đồi khi mãi chạy theo vật chất.
        HƯỚNG PHÁT TRIỂN
        Tính lý tưởng hóa của người Số 9 khiến họ không giỏi nhìn người. 
        Nhưng một khi nhận ra mặt hạn chế này, người Số 9 hoàn toàn có thể học và sử dụng các công cụ hỗ trợ để giúp họ hiểu về con người hơn. Điều này sẽ giúp họ tìm hiểu về con người ở nhiều phương diện trước khi kết luận, chứ không chỉ dựa trên phần tích chủ quan của bản thân. Việc tìm hiểu các công cụ đánh giá con người cũng sẽ giúp người Số 9 phát triển trục giác và trí tuệ. 
        Hai yếu tố quan trọng khác mà người Số 9 cần tập trung phát triển là tính kiên nhẫn và sự kiên định. 
        Bên cạnh đó, người Số 9 thường hay tỏ ra nghiêm túc quá mức họ cần học cách vui cười và thưởng thức những trò dí dỏm nhiều hơn để mang lại sự cân bằng cho cuộc sống của mình.
        NGHỀ NGHIỆP PHÙ HỢP
        Người Số 9 thường vui vẻ nhất khi được làm việc trong các môi trường tôn giáo, tổ chức an sinh xã hội, viện giáo dục (trong vai trò quản lý hành chính hơn là giáo viên) , cơ quan nghiên cứu (bao gồm nghiên cứu công nghệ thông tin) , giải quyết các vấn đề tội phạm, trị liệu và tư vấn ...
        TÓM LẠI
        Người Số 9 là những người đặc biệt có trách nhiệm, cực kỳ trung thực, có lý tưởng, đầy hoài bão, luôn hướng về yếu tố nhân văn và rất nghiêm túc trong cuộc sống. Họ không giỏi quản lý tiền bạc, cũng khó tiết kiệm được tiền.
        `,
    },
    {
        content: `
        Từ số 2 đến số 9, chúng ta đã làm quen với những cách thể hiện đa dạng của từng con số chủ đạo ở mỗi cá nhân, phụ thuộc vào mức độ nhận thức của mỗi người. 
        Tuy nhiên, chưa Có Con số chủ đạo nào có biên độ dao động lớn và rộng trong cách biểu đạt như Số 10.
        Khi sống tích cực, có thể họ là một người rất quảng giao, được yêu thích trong xã hội, nhưng khi sống tiêu cực, họ có thể là những cá nhân lạc lối, bất an và lao đao trên đường đời. 
        Họ là những người dễ thích nghi nhất. Họ có tiềm năng để thành công rực rỡ hoặc cũng có thể sống mòn trong sự tầm thường. Những người có số tổng ngày sinh là 19, 28, 37, 46 sẽ Có Con số chủ đạo là 10.
        MỤC ĐÍCH SỐNG
        Cuộc sống của những người Số 10 có hai đặc điểm nổi trội: khả năng thích nghi và khả năng thay đổi.
        Tính linh hoạt bẩm sinh của họ có thể hỗ trợ người khác rất nhiều trong việc thích ứng với các thay đổi trong cuộc sống. Khi cuộc sống trở nên phức tạp hơn, khả năng thích nghi càng có vai trò thiết yếu hơn, và chúng ta sẽ thấy người Số 10 có mặt trong rất nhiều ngành nghề hoặc tình huống khác nhau. Họ có sự can đảm bẩm sinh, thứ thường đưa họ đến với các lĩnh vực tiên phong mà nhiều người không bao giờ dám nghĩ đến.
        ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU
        Nếu chúng ta tìm kiếm một người có thể cùng ta tận hưởng những thú vui nhẹ nhàng trong cuộc sống, không ai phù hợp hơn những người Số 10. 
        Họ phát huy tốt nhất khi được tự do trải nghiệm sự hứng khởi tức thời. Nhưng khi bị áp lực hoặc phải kìm nén cảm xúc, họ thường chán nản mà không rõ nguyên nhân. Điều này khiến họ khó chịu và thường biểu đạt qua thái độ tức giận hoặc dễ nổi nóng. Một bộ phận người Số 10 sẽ rất thẳng thắn và tự tin - tinh thần lạc quan vô hạn giúp họ đạt được những bước tiến đáng kể trong cuộc sống. 
        Đây là biểu đạt tự nhiên của Số 10, vì họ có sự kết hợp đầy quyền lực của “ cái tôi ” (số 1) và chiều sâu tinh thần vô hạn của số 0.
        ĐẶC ĐIỂM NỔI BẬT
        Số 10 là một số mang tính thực tế, mang theo sức mạnh của sự linh hoạt và tính thích ứng rất được yêu thích, 
        (do đó người Số 10 có được cá tính linh hoạt và thích nghi tốt) . Sự vui vẻ của họ nhìn chung rất dễ lan tỏa, nhưng vì không muốn can dự quá sâu vào các vấn đề của người khác nên họ thường thấy khó hiểu vì sao người khác lại không vui vẻ và thích nghi giống họ. Phần lớn những người Số 10 ít dấn thân vào cuộc sống mà thường hài lòng với những niềm vui nhất thời, đặc biệt là trong thể thao - hoặc là họ chủ động tham gia, hoặc chỉ làm người xem. Ngược lại, một số ít những người Số 10 có nhận thức về các giá trị sâu sắc hơn sẽ thành công và dẫn đầu trong lĩnh vực của mình, vì họ có được sự kiên cường vượt khó. Nhìn chung, người Sổ 10 thường toát ra sự tự tin vào bản thân, thể hiện qua phong thái hòa nhã và lịch thiệp của mình, bất kể họ ăn mặc thế nào. 
        Họ không mấy thành công trong việc giải quyết các vấn đề về tâm lý của bản thân hay của những người khác, không phải là những nhà tư vấn giỏi hay người bạn sâu sắc. 
        Nhìn chung, họ có máu nghệ thuật - sự tinh tế tuyệt vời của họ có thể khiến họ trở thành những nghệ sĩ biểu diễn nhạc cụ tài hoa hay các chuyên gia thẩm định chất lượng.
        KHUYNH HƯỚNG CẦN KHẮC PHỤC
        Sự tự tin ở những người Số 10 đôi khi có thể khiến họ muốn áp chế người khác, nhưng họ thường làm vậy một cách thiếu khôn ngoan và dẫn đến sự bất hòa nghiêm trọng.
        Khuynh hướng này có thể tránh được thông qua ý thức kiểm soát “ cái tôi ” , hướng đến chiều sâu tâm hồn và tránh lối sống hời hợt. Việc chủ động tham gia các hoạt động mang tính xây dựng và sáng tạo cũng sẽ giúp người Số 10 tiếp nhận thêm những quan điểm sâu sắc hơn và biết rằng nếu một cánh cửa đóng lại thì họ chỉ cần tìm những cánh cửa mở khác. 
        Họ cũng cần tránh trở nên biếng nhác và kỳ vọng cuộc sống sẽ dễ dàng, đồng thời họ phải nhận ra tầm quan trọng của việc phát triển tinh thần kỷ luật bản thân để vượt qua sự u sầu và cảm giác bất an.
        HƯỚNG PHÁT TRIỂN
        Người Số 10 có xu hướng dễ lạc lối trong sự thoải mái và chấp nhận cuộc sống tầm thường. 
        Để trở nên vượt trội, họ cần nhìn ra tiềm năng của mình - tính linh hoạt và khả năng thích nghi cực kỳ mạnh mẽ. Trong cuộc sống, người Số 10 cần các hoạt động như hành thiền để giữ cân bằng cho bản thân và kết nối với nguồn sức mạnh bên trong. Họ cũng học cách tiết chế trong cuộc sống (sự cân bằng) và phát triển nhận thức về thế giới xung quanh (sự uyên bác) , thái độ hài hòa, lòng trắc ẩn và tôn trọng cuộc sống. 
        Bên cạnh đó, họ cần học cách phân biệt cái gì quan trọng và cái gì không quan trọng, nếu không họ có thể lãng phí thời gian để theo đuổi những điều không đáng.
        NGHỀ NGHIỆP PHÙ HỢP
        Người Số 10 sẽ hợp với lĩnh vực thể thao hoặc giải trí, thiết kế và trang trí nội thất, ngành dệt may và thực phẩm. 
        Họ cũng có thể là những chuyên gia bán hàng tài năng (vì thường được yêu mến) , chính trị gia, nhà gây quỹ từ thiện, nhà điều hành doanh nghiệp, giám đốc kinh doanh, chuyên gia quy hoạch đô thị, kiến trúc sư, chuyên gia địa ốc ...
        TÓM LẠI
        Người Số 10 rất tự tin, hòa nhã, thông minh và vui vẻ, với sự tinh tế đặc biệt và khả năng bán hàng xuất sắc.
        `,
    },
    {
        content: `
        Con số chủ đạo 11 có một trường năng lượng tâm linh đặc biệt mạnh mẽ,  giúp những người mang con số chủ đạo này có tiềm năng phi thường để phát triển nhận thức ở Thể Siêu thức. Đáng tiếc là phần lớn những người Số 11 lại không đủ khả năng phát huy tiềm năng đó, nhưng điều này sẽ sớm được khắc phục cùng với sự phát triển của thời đại mới - thời đại phát triển nhận thức (thế kỷ 21) . Mặc dù Số 11 không phổ biến như các con số chủ đạo khác, nhưng nhiều người Số 11 lại được tìm thấy ở các lĩnh vực có liên quan mật thiết đến sự phát triển tâm linh và nâng cao nhận thức. Trên thực tế, chỉ có ba con số tổng của ngày sinh cho ra Con số chủ đạo 11, đó là 11, 29 và 38, và hy hữu lắm ta mới bắt gặp số tổng 47.
        Người Số 11 nằm trong số ít ỏi những người được trang bị “ vốn tấm linh ” tiềm tàng tốt đẹp nhất để đưa con người tiến vào thời đại nhận thức. 
        Nói về mặt tâm linh, việc họ có mặt ở cõi đời này trong kiếp sống này là một lựa chọn đầy trách nhiệm. 
        Tuy nhiên, thật không may là rất nhiều người trong số họ lại bị quyến rũ bởi những cám dỗ của đời sống vật chất để rời xa rời mục đích cao cả của mình.
        Nhưng tình thế đang thay đổi, và hy vọng càng ngày càng có thêm nhiều người Số 11 nhận ra giá trị thật của mình để quay về với những lý tưởng mà họ đã nhận lãnh.
        ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU
        Vì yêu thích sự tinh tế, vẻ đẹp và giá trị văn hóa của cuộc sống, người Số 11 hướng đến những môi trường chứa đựng những giá trị đó, vì nó cho họ được tự do thể hiện nét đẹp vốn có của tâm hồn và đời sống tâm linh. Đời sống vật chất, với nhiều người trong số họ, là quá nhiều đòi hỏi và không thú vị. 
        Nhưng người Số 11 cần học cách cân bằng đời sống vật chất với những lý tưởng mà họ tìm kiếm bên trong để nhận ra rằng những giá trị tinh thần cao quý nhất cũng không có bao nhiêu giá trị nếu chúng không được vận dụng để cải thiện chất lượng cuộc sống. 
        Chẳng có biểu đạt nào đẹp đẽ hơn việc dốc mình phụng sự cho cuộc sống theo khả năng của mỗi người.
        Có những sự khác biệt cực kỳ to lớn giữa lối sống của những người Số 11 biết sống tích cực và phát huy sức mạnh tâm linh vượt trội của họ, và những người Số 11 đầy tiêu cực với cuộc sống lao đao và nhạt nhòa.
        Khi theo đuổi các vấn đề và mục tiêu về tinh thần hay tâm linh, người Số 11 thể hiện họ có nguyên tắc đạo đức vững vàng, trực giác chính xác và động lực rất rõ ràng. Trong cuộc sống hằng ngày, họ thường là những người nhạy cảm, đáng tin cậy, trung thực và công tâm, với tình yêu sâu đậm đối với gia đình và bạn bè, cũng như lòng trắc ẩn đối với cuộc sống.
        KHUYNH HƯỚNG CẦN KHẮC PHỤC
        Khi đời sống vật chất ngày càng phát triển và nhiều “ hoa thơm cỏ lạ " xuất hiện dọc đường, khả năng người ta bị cám dỗ và từ bỏ lối sống chính trực là rất dễ xảy ra. Cuộc sống vốn dĩ đơn giản và hài hòa hơn những gì người ta đang cảm thấy. Sự phức tạp mà người ta cảm nhận trong đời sống hằng ngày khiến họ hoang mang và lệch khỏi con đường của mình, để lại cho họ cảm giác cay đắng và hằn học, biểu hiện qua thái độ thờ ơ lạnh nhạt với những người khác và với công việc. Khi chuyện này xảy ra với người Số 11 họ trở nên lạc lối và lãnh đạm, tìm kiếm sự khuây khỏa trong thế giới vật chất mà họ đã sa vào. 
        Họ phải giữ ý thức và sự tỉnh thức cao độ để quyết tâm đi trên con đường của mình, mà điều này sẽ không quá khó khăn nếu họ chịu lưu tâm đến trực giác nhạy bén của mình.
        HƯỚNG PHÁT TRIỂN
        Đối với người Số 11, các lĩnh vực tinh thần không thể bị trộn lẫn với các giá trị thương mại. 
        Do đó, môi trường thích hợp nhất cho họ chính là những ngành nghề có thể tạo điều kiện cho họ phát triển nhận thức về tâm linh và vận dụng sự nhạy bén của mình. Đồng thời, với bản tính hào phóng và mong muốn có thể đáp ứng nhu cầu của những người xung quanh, người Số 11 thường có nhu cầu tài chính cao hơn những người khác. 
        Họ không chỉ cần học biểu đạt những giá trị tinh thần hay tâm linh của mình một cách thực tế nhất, mà còn phải học cách lắng nghe trực giác (vốn rất trung thực, sáng suốt) chứ không bị thúc đẩy bởi những thèm muốn đơn thuần (ví dụ như mong muốn được thừa nhận, được tưởng thưởng, được trả ơn... ).  
        Bên cạnh đó, họ cũng cần nâng cao khả năng phán đoán, cân bằng cuộc sống và nghị lực bản thân. Họ có xu hướng từ chối sự hỗ trợ của người khác, nhưng để phát triển tốt nhất, họ cần học cách đón nhận nhiều hơn và nhận ra những lợi ích mà mình có được từ sự giúp đỡ lẫn nhau.
        NGHỀ NGHIỆP PHÙ HỢP
        Những nghề nghiệp mà người Số 11 thường thấy phù hợp bao gồm nhà giáo dục, nhà hoạt động xã hội, các thủ lĩnh tôn giáo và huấn luyện viên phát triển cá nhân. 
        Hoặc họ cũng có thể tham gia giảng dạy các bộ môn văn hóa và biểu diễn chuyên nghiệp. Trực giác nhạy bén cũng có thể giúp họ trở thành các nhà thiết kế hay nhà phát minh tài ba.
        TÓM LẠI
        Người Số 11 là những người nhạy cảm, đầy cảm xúc và quan tâm người khác. 
        Họ yêu thích sự tinh tế, vẻ đẹp và những gì gắn liền với giá trị văn hóa sâu sắc. Họ cũng vô cùng trung thực và giàu lòng trắc ẩn, thường tránh các hoạt động kinh doanh và bản thân họ không phải là những người quản lý tiền bạc giỏi.
        `,
    },
]

const SLH = [
    'Nội dung chưa cập nhập',
    `Những người có Con số linh hồn là 1 thường có nhu cầu được tự do biểu đạt bản thân. Phương tiện biểu đạt sẽ do con số chủ đạo của họ quyết định. Nhìn chung, người sở hữu Con số linh hồn này thường có khát khao tự do mãnh liệt, muốn dành nhiều thời gian cho bản thân để thư giãn hoặc để biểu đạt bản thân qua một hình thức nghệ thuật nào đó.`,
    `Người thuộc nhóm này thường có thôi thúc hướng đến sự cân bằng, nên mọi việc họ làm thường tỏa ra năng lượng của sự hài hòa. Nhìn chung thì đây là những người có trực giác khá tốt, thích những gì tự nhiên hơn nhân tạo. Trong các mối quan hệ hoặc sự tương tác với người khác, họ rất công bằng và mong đợi điều tương tự từ đối phương.`,
    `Với trọng tâm luôn đặt ở phần trí não, Con số linh hồn 3 kết hợp cảm giác với suy nghĩ và đánh giá. Kết quả là những người thuộc nhóm này có khả năng đánh giá con người và tình huống khá tốt. Điều đó có thể rất có ích trong kinh doanh và các hoạt động có tính chuyên môn cao.`,
    `Số 4 là con số của thực tế, thế nên khi có con số linh hồn 4, những người này thường có những quan điểm khá truyền thống và bảo thủ trong các chủ đề thuộc về tinh thần, tâm linh và cảm xúc, chẳng hạn như tôn giáo, tình yêu, hôn nhân và cuộc sống nói chung. Họ thường rất tôn trọng các nguyên tắc truyền thống và không để cho cảm xúc của mình bộc phát.`,
    `Sức mạnh của con số này đến từ vị trí của số 5 trên Trục ngang Tinh thần, cho thấy người sở hữu nó có những cảm xúc rất sâu sắc, cũng như có nhu cầu được tự do và được chấp nhận - tốt nhất là những cảm xúc này được bộc lộ. Họ sẽ có cảm xúc mãnh liệt trong bất kỳ phương diện cuộc sống nào mà họ đang đối mặt và không ngại biểu đạt điều đó, trừ khi Biểu đồ ngày sinh của họ có yếu tố cản trở, như Mũi tên Nhạy cảm chẳng hạn.`,
    `Nhóm này được thôi thúc hướng về tình yêu thương và sự sáng tạo. Họ sẽ tận dụng mọi cơ hội để thể hiện bản thân mình một cách đầy sáng tạo, cho dù đó là trong công việc, gia đình hay một sở thích nào đó. Tuy nhiên, do đặc tính nhạy cảm của số 6, họ phải giữ vững tinh thần, nếu họ lo lắng quá mức thì sức mạnh này sẽ nhanh chóng chuyển thành cảm giác tuyệt vọng và chán nản.`,
    `Những người có con số linh hồn này thường cảm nhận một sự thôi thúc muốn hướng dẫn và hỗ trợ người khác.  Tuy nhiên, bản thân họ lại muốn tự trải nghiệm cuộc sống chứ không nhiệt tình đón nhận sự dẫn dắt của người khác. Họ thường phải trả giá khá đắt cho mong muốn này của mình, cho đến khi họ nhận thức được rằng mối quan hệ giữa con người với nhau là mối quan hệ tương hỗ, cùng hỗ trợ lẫn nhau.`,
    `Con số này tập trung vào tính thích độc lập. Người sở hữu Con số linh hồn 8 thường tự động từ chối làm theo những thói quen mà họ thấy là vô lý. Họ có suy nghĩ và cách hành xử riêng, nhưng cần cẩn thận để tránh trở thành người xa cách cộng đồng. Một bài học quan trọng cuộc sống dạy chúng ta là nhu cầu hòa nhập cùng Cộng đồng mà không bị lệ thuộc vào đó.`,
]

const SBD = [
    'Nội dung chưa cập nhập',
    `Những người Có Con số biểu đạt 1 thường rất thích những môn thể thao cá nhân hoặc làm việc một mình.  Họ rất thích được tự do làm mọi việc theo nhịp độ riêng, để có thể đạt được sự hài lòng cao nhất và xây dựng sự tự tin của họ trong các hoạt động thể chất.`,
    `Những người thuộc nhóm này thích làm việc theo nhóm trong những môi trường vui vẻ. Họ là người hoạt bát, thích niềm vui và những hoạt động thoải mái. Điều này không có nghĩa họ là người nông cạn, mà đúng hơn, họ có khả năng tận hưởng niềm vui mà những hoạt động có tổ chức mang lại.`,
    `Trong khi nhóm có con số biểu đạt 2 thích thưởng thức những hoạt động vui vẻ, người có con số biểu đạt 3 lại thích đem đến niềm vui, tiếng cười cho những người xung quanh. Họ rất biết cách tạo niềm vui trong cuộc sống và lan tỏa nó đến mọi người bằng cách trở thành linh hồn của những buổi tiệc, vì họ có vẻ ngoài thông minh, nhanh nhẹn và hoạt bát.`,
    `Con số mang đậm tinh thần thực tế, và những người sở hữu nó thường rất khéo tay, thích những hoạt động thể chất, vận dụng độ khéo léo của đôi tay và đôi chân. Họ đặc biệt yêu thích thể thao, hoạt động xây dựng, lắp ráp hoặc sửa chữa đồ đạc.`,
    `Một trong những điều thường thấy ở những người sở hữu con số biểu đạt này là nhu cầu được tự do biểu đạt, thoát khỏi ràng buộc của thế giới vật chất.Nhưng đôi khi họ để cho sự hiểu lầm hoặc vẻ ngại ngùng cản trở mình biểu đạt một cách trọn vẹn nhất. Để tránh điều này, họ nên tìm những Công việc không gò bó và những người bạn mà họ cảm thấy dễ chịu khi tương tác. Nói một cách đơn giản, họ cần những người bạn đồng hành chịu tương tác, thoải mái và linh hoạt.`,
    `Nhóm này có xu hướng tập trung năng lượng và tâm trí cho mái ấm của mình. Hiển nhiên điều đó rất có lợi cho các thành viên trong gia đình, nhưng nó cũng có thể khiến họ “được nuông chiều quá nên sinh hư”. Do đó, những người có Con số biểu đạt 6 cần tránh thể hiện đặc điểm này quá đà, bằng cách cân bằng giữa sự chiều chuộng và việc quan tâm đến những nhu cầu thật sự của người thân.`,
    `Đặc điểm của người có Con số biểu đạt 7 là sự thôi thúc được làm việc độc lập, tự trải nghiệm và học hỏi theo kiểu riêng của họ. Họ thích tận hưởng thành tựu cá nhân và cảm giác thỏa mãn khi được tự mình khám phá, hơn là học hỏi từ người khác.`,
    `Người thuộc nhóm này có một khao khát mãnh liệt được thể hiện sự độc lập của bản thân, thích làm mọi chuyện một mình và không ngại tỏ ra khác biệt nếu cần. Bằng cách này, họ bộc lộ một cá tính mạnh mẽ, vì họ ý thức được con người không bao giờ có thể đạt đến mức độ phát triển bản thân cao hơn nếu cứ chấp nhận “tư duy bầy đàn”.`,
    `Cuộc sống luôn tồn tại hai khía cạnh: nghiêm túc và hài hước. Người có cuộc sống cân bằng là người mà hai khía cạnh này hòa hợp với nhau một cách tốt đẹp nhất trong đời sống cá nhân họ. Tuy nhiên, người có Con số biểu đạt 9 Có xu hướng quá tập trung vào sự nghiêm túc, và bằng cách này, họ thường thu hút nỗi buồn, và đôi khi là cả sự cô độc, vì họ cho rằng khía cạnh hài hước nhẹ nhàng của cuộc sống là không quan trọng. Họ có khả năng suy ngẫm, tư duy phân tích sắc bén và chuẩn mực sống tốt đẹp - để phục vụ cho lý tưởng cao đẹp của mình. Nhưng nhóm này cũng cần học cách cân bằng cuộc sống bằng những niềm vui nhẹ nhàng để phục hồi năng lượng cho tâm trí và cơ thể mình.`,
    `Đặc điểm của Con số biểu đạt 10 gần như trái ngược với Con số biểu đạt 9. Những người sở hữu con số này thường quá tập trung vào khía cạnh nhẹ nhàng, vui vẻ của cuộc sống, và có phần xem nhẹ tính nghiêm túc. Họ cần tránh trở nên khiếm nhã và nông cạn, thay vào đó, hãy tập trung vào khả năng thật sự của con số 10, đó là năng lực thích nghi với nhiều hoàn cảnh và tình huống khác nhau. Người mang Con số biểu đạt này quyết tâm mạnh mẽ hơn để hoàn thành vai trò của mình trong cuộc sống, vì chỉ khi cân bằng được tính nghiêm túc và thoải mái thì họ mới gặt hải được thành công.`,
    `Nhu cầu nổi bật của người có Con số biểu đạt 11 là sự hài hòa. Cảm xúc và tinh thần cân bằng là đặc điểm của con số này. Mục đích đặc biệt của nhóm này là lan tỏa mong muốn về sự hài hòa với môi trường xung quanh, kiểm soát cảm xúc, cũng như phát triển và chia sẻ những hiểu biết sâu sắc về cuộc sống. Chỉ khi đi theo con đường này thì họ mới có thể đến được bến bờ hạnh phúc.`,
]

const NAM = [
    {
        heading: '',
        content: '',
    },
    {
        heading: 'NĂM THỨ NHẤT (PYN 1) - NĂM CỦA SỰ ĐIỀU CHỈNH QUYẾT LIỆT',
        content: `
        Đây là một năm của những hành động phát triển cá nhân mạnh mẽ, sau khi chúng ta đã điều chỉnh để thích ứng với những thay đổi trong Năm thứ chín của chu kỳ trước.
        Sức mạnh của năm này thúc đẩy chúng ta dám trở nên khác biệt và phát triển lòng tự tin. Đây cũng là một năm đặc biệt phù hợp để chúng ta phá bỏ những thói quen cũ.
        Bên cạnh đó, việc hình thành lối sống mới chắc chắn đòi hỏi chúng ta có sự kiên trì cao độ. Năm này sẽ đặc biệt tác động đến những người có Con số chủ đạo 10. 
        Mọi việc diễn ra quá thuận lợi với họ đến mức họ có thể dễ dàng rơi vào tình trạng chủ quan hoặc thiếu cảnh giác, đặc biệt là trong vấn đề tài chính. Những người này cần lưu ý tránh ngủ quên trên chiến thắng mà sinh lòng kiêu ngạo.
        Với ý thức tự chủ hợp lý, những người mang Con số chủ đạo 10 sẽ thấy Năm thứ nhất là một năm có sự phát triển vượt bậc về đời sống vật chất và nhận được sự ủng hộ từ những người xung quanh.
        `,
    },
    {
        heading:
            'NĂM THỨ HAI (PYN 2) - NĂM CỦA SỰ PHÁT TRIỂN TÂM LINH - TINH THẦN VÀ CHIA SẺ',
        content: `
        Mặc dù không có sức mạnh của một năm thay đổi định điểm, đây vẫn là một năm có bản chất mạnh mẽ đủ để khiến một tâm hồn rối rắm trở về được với sự bình yên tĩnh tại. Sự phát triển tâm linh là yếu tố rõ nét nhất của năm này, khi người ta cảm thụ cuộc sống ở mức độ tinh tế hơn. 
        Đây không phải là một năm của thay đổi to lớn, mà là một năm phát triển khả năng kiểm soát cảm xúc, nâng cao nhận thức về tâm linh và củng cố trực giác. 
        Trọng tâm phát triển dưới sóng rung của năm này là nhu cầu chủ động phát triển sức mạnh của việc thiền định.
        Điều này có nghĩa là cơ thể sẽ tự điều chỉnh ở mức độ tế bào để đạt được sức mạnh nội tại mà tất cả chúng ta đều muốn sử dụng để làm nguồn năng lượng dự trữ vô hạn và là sức thu hút mạnh mẽ của mỗi người. 
        Để đạt được điều này, chúng ta học cách kiểm soát tốt cảm xúc của mình, để chủ động hành động thay vì chỉ biết phản ứng với hoàn cảnh, để thay sự hoang mang và nghi ngờ bằng sự tự tin và vững vàng, và đủ khôn ngoan để phân biệt những gì quan trọng và ít quan trọng hơn để ưu tiên thực hiện hay theo đuổi.
        Sau hai năm phát triển trước đó, một số người có khuynh hướng ngủ quên trên chiến thắng, hoặc sa vào cảm giác tự thỏa mãn và không muốn tiếp tục nỗ lực hơn nữa. 
        Đây cũng chính là lúc luật âm - dương (trong âm có dương, trong dương có âm) vận hành: phần tiêu cực chớp lấy cơ hội để làm dấy lên những cảm xúc thụ động như nỗi sợ, sự lo lắng, thói tranh cãi và sự bất an.
        Những điều này có thể thể hiện theo những cách thức bất ngờ, khiến một người đáng mến trở nên khá khó ưa hoặc hống hách đến mức không chịu nổi. 
        Hãy nhận thức rằng đây là một năm của sự hợp tác, cùng làm việc với nhau tại nhiều môi trường khác nhau (tại nhà, tại nơi làm việc, trong các trận đấu thể thao, ... ).
        Để đạt được điều này, chúng ta cần sống yêu thương và biết chấp nhận nhiều hơn, từ đó đẩy mạnh khía cạnh phát triển của Năm thứ hai. Năm thứ hai này càng đặc biệt có ảnh hưởng mạnh đối với những người có Con số chủ đạo là 2 và 11. Không có gì ngạc nhiên nếu nhận thức tâm linh của họ tăng lên đáng kể, đến mức gần như phòng chiếu nhận thức của họ vào một chiều không gian - thời gian khác. Họ nên tạo điều kiện cho sự phát triển này diễn ra thuận lợi bằng cách dành thời gian để thiền định và tìm hiểu các vấn đề tâm linh. Khi làm vậy, họ không chỉ gia tăng sức mạnh của bản thân, mà còn giúp ích cho vai trò của họ trong việc dẫn dắt người khác. 
        `,
    },
    {
        heading: 'NĂM THỨ BA (PYN 3) - NĂM CỦA SỰ MỞ MANG TÂM TRÍ',
        content: `
        Giữa năm đỉnh điểm của sự thay đổi (Năm thứ chín của chu kỳ cũ) và năm cực thoái đầu tiên (Năm thứ tư) là Năm thứ ba - năm tập trung một cách đáng ngạc nhiên vào sức mạnh trí não, góp phần mang lại sự phát triển trọn vẹn cho giai đoạn này trong chu kỳ 9 năm của con người. Dưới tác động của sóng rung này, khả năng tư duy và quan sát của chúng ta được mài giũa để trở nên nhạy bén. 
        Đây cũng là năm của sự khao khát kiến thức và sự thể hiện.
        Một số người sẽ chọn theo đuổi một môn học thuật nào đó. Những người khác có thể khám phá cuộc sống và những triết lý sống, một số người khác nữa thì đi tìm sự khai sáng trong tiến trình phát triển cá nhân của mình. Có hai cách phổ biến để lĩnh hội sự mở mang trí tuệ trong Năm thứ ba này: hoặc thông qua một khóa học, hoặc thông qua việc du ngoạn đó đây . Cho dù bạn chọn hình thức nào, điều quan trọng là hãy nhận thức được rằng đây là năm mà sự phát triển trí nhớ trở thành thiết yếu, vì sóng rung của số 3 là cánh cổng dẫn vào tâm trí thông qua trí nhớ. Chúng ta cần nhận thức được rằng trí nhớ là nền tảng của lòng tự tôn và sự tự tin, đồng thời là chiếc cầu nối giữa Ý thức và vô thức. 
        Quá trình không ngừng mở rộng khả năng và sự nhạy bén của trí nhớ sẽ tạo ra sự khác biệt rõ y ràng giữa những người đang lão hóa và những người “ trẻ mãi không già ".
        Ở khía cạnh nhẹ nhàng hơn của Năm thứ ba, chúng ta nên nhận ra nhu cầu cân bằng cuộc sống bằng cách dành thời gian cho niềm vui, những buổi tụ tập bạn bè và những câu chuyện dí dỏm. Những người Có Con số chủ đạo 3 sẽ đặc biệt “ ăn rơ ” với sóng rung của Năm thứ ba này, nhưng họ cần học cách kiểm soát lý trí cao độ của mình để đảm bảo nó không lấn át cảm xúc. Quá trình nâng cao mức độ nhạy bén của tư duy mà những người này sẽ trải nghiệm trong Năm thứ ba cần được hướng vào những nhận thức mang tính xây dựng, để có thể mang lại sự thỏa mãn cho bản thân họ và sự bình yên cho những người xung quanh họ - nhưng những người này sẽ trở nên mệt mỏi với tính lý trí thái quá và trở thành nạn nhân của thói chỉ trích của họ.
        `,
    },
    {
        heading: 'NĂM THỨ TƯ (PYN 4) - NĂM CỦA SỰ CỦNG CỐ NỘI LỰC',
        content: `
        Các yếu tố về thể chất và vật chất sẽ chiếm thế thượng phong trong năm “ chạm đáy ” này. Sự nghỉ ngơi và ổn định là điều kiện thiết yếu để tái tạo năng lượng và củng cố nội lực sau 5 năm phát triển trước đó. Đây là một năm “ vuông vức ” khi mọi thứ đều được đem ra cân đong đo đếm và những khía cạnh không được mong muốn sẽ bị loại bỏ, như dây leo được cắt tỉa trong mùa đông để có chỗ đâm chồi nảy lộc vào mùa xuân kế tiếp. Đây là một năm lý tưởng để hòa hợp Thể Cơ bản (bao gồm cơ thể và cảm xúc) , Thể Ý thức (bao gồm tư duy và ý tưởng) với Thể Siêu thức (phần linh hồn vĩnh cửu).
        Những người không lắng nghe nhu cầu nghỉ ngơi và điều chỉnh sẽ thấy bản thân rơi vào trạng thái không hài hòa - ví dụ như cảm thấy mọi thứ đều bế tắc, không có sự hòa hợp trong nội tâm - từ đó dẫn đến sự uất giận, rối rắm và sợ hãi. Trong năm này, những nỗ lực thay đổi nào lớn trong Công việc hoặc lối sống đều hiếm khi thành công, mà thường gây ra những tổn thất về tài chính, sức khỏe, hoặc cả hai. Đối với những người vốn đã nhạy cảm và dễ bị căng thẳng thần kinh, trong Năm thứ tư họ cần đặc biệt cần trọng để tránh bất hòa với những người xung quanh. Một kỳ nghỉ thư giãn sẽ có ích nhất cho những người này. Người có con số chủ đạo 4 thường chịu tác động mạnh nhất trong Năm thứ tư, do đó họ sẽ tỏ ra khó chịu trước ảnh hưởng của sóng rung này. Họ thường không thể nhận ra đây là một năm củng cố nội lực, mà thay vào đó thường ra sức thúc đẩy những tiến triển mà họ đã có được trong bốn năm trước. Hậu quả là hệ thần kinh của họ rơi vào tình trạng cực kỳ căng thẳng.
        Những người này cần nghỉ ngơi và giảm thiểu những tác động làm nhiều cảm xúc, chẳng hạn như tránh xem ti - vi quá nhiều, tránh xem các bộ phim trinh thám kịch tính, tránh tranh cãi tại nơi làm việc và tại nhà, đồng thời kết hợp với một chế độ dinh dưỡng phù hợp.
        `,
    },
    {
        heading: 'NĂM THỨ NĂM (PYN 5) - NĂM CỦA TỰ DO',
        content: `
        Đây là một năm mà các yếu tố cảm xúc, tinh thần và tâm linh thể hiện rất rõ.
        Sóng rung của năm này sẽ kết nối cực trùng của năm trước đó với đỉnh sáng tạo của năm sau, kích hoạt năng lượng của sự tự do, thứ được tạo thành bởi nhận thức tâm linh và khả năng biểu đạt cá nhân được nâng tầm. Điều này dẫn đến sự phát triển năng lực của chúng ta, để thoát khỏi sự ràng buộc về vật chất và sự gò bó của xã hội, thay vào đó là sự tập trung vào biểu đạt nghệ thuật, một cách chuyên nghiệp hoặc như một sở thích. Một số người sẽ bắt đầu xây dựng nền tảng cho con đường sự nghiệp mới dưới tác động của sóng rung này.
        Một số người khác thì khám phá sự tự do trong việc chuyển nhà, dọn về quê và thoát khỏi sự bó buộc của đời sống đô thị. Những người có Con số chủ đạo 5 thường trở nên ám ảnh với khát khao tự do trong Năm thứ năm này. Tuy nhiên, họ cần nhận ra rằng họ không phải lúc nào cũng cần sự tự do về mặt thể chất - dù đôi khi hoàn cảnh khiến họ rất dễ tin như vậy, từ đó sử dụng lý trí để bao biện và che giấu sự trống rỗng trong phương diện thấu hiểu bản thân. Điều mà họ cần nhất là sự tự do biểu đạt, thứ có thể đạt được qua nhiều hình thức nghệ thuật khác nhau, như âm nhạc, hội họa, thủ công mỹ nghệ... hoặc bất kỳ hình thức nào tương tự để nuôi dưỡng sự cân bằng trong tâm hồn, từ đó giúp họ đạt được sự an tĩnh, bình yên.
        `,
    },
    {
        heading: 'NĂM THỨ SÁU (PYN 6) NĂM CỦA SỰ SÁNG TẠO',
        content: `
        Đây có thể được gọi là một năm đỉnh cao “ mini ” , tập trung vào những năng lượng được tích lũy thông qua các hoạt động sáng tạo. 
        Những dự án sáng tạo mới được thực hiện trong năm này sẽ có nhiều khả năng thành công nhất, đặc biệt là nếu chúng hướng đến mục đích nâng cao chất lượng cuộc sống con người. 
        Đây là một năm mà sự hình thành của bất kỳ một doanh nghiệp nào Có đầu tư nghiêm túc đều sẽ có lợi. Đây cũng là một năm của gia đình và các mối quan hệ cá nhân.
        Các hoạt động sáng tạo có liên quan đến gia đình sẽ được thúc đẩy bởi sóng rung của Năm thứ sáu. 
        Trong các mối quan hệ, nhiều người sẽ cảm thấy an tâm, hoặc sẽ giải tỏa những hiểu lầm và vướng mắc.
        Nếu người ta cứ ngoan cố bám víu các năng lượng tiêu cực thì Năm thứ sáu sẽ là năm khó khăn nhất, gây ra sự lo lắng tột độ, các cuộc tranh cãi và sự oán giận. Rất rõ ràng, bài học của năm này là đối mặt với bản chất của sự việc như nó vốn có. Bên cạnh đó, hãy hiểu rằng để có một cuộc sống dễ chịu thì sự chân thành phẩm giá và thái độ tích cực là rất quan trọng. Nếu chúng ta làm được như vậy thì đây sẽ là một năm đáng thỏa mãn, tràn đầy hạnh phúc, những thành quả sáng tạo và thành công tài chính.
        Người có Con số chủ đạo 6 sẽ chịu nhiều thử thách trong Năm thứ sáu, vì dưới sự tác động của sóng rung số 6, tính sáng tạo và chính trực của họ sẽ được nhấn mạnh và kết hợp với nhau, tạo ra một giai đoạn tràn đầy sức mạnh nhưng cũng có tính thanh lọc. Những người quyết tâm theo đuổi tính tích cực của số 6 sẽ thấy tính sáng tạo của mình được kích hoạt mạnh mẽ, và chắc chắn họ sẽ chạm đến hạnh phúc ở một tầm cao mới. Tuy nhiên, nhiều người có Con số chủ đạo 6 vẫn chưa nhìn thấy ánh sáng, vẫn lựa chọn vùi mình trong hố sâu tiêu cực, để cho sự lo lắng và bất an thường xuyên xâm chiếm cuộc sống của họ. Họ đang bệnh và sẽ chỉ càng bệnh nặng hơn, vì cơ thể họ ngày càng bị rút hết năng lượng và thái độ sống của họ càng khiến họ Cô độc hơn. Cách chữa trị duy nhất là họ phải đón nhận thái độ tích cực và sáng tạo trong cuộc sống. 
        `,
    },
    {
        heading: 'NĂM THỨ BẢY (PYN 7) - NĂM CỦA SỰ TẬP TRUNG VƯỢT CHƯỚNG NGẠI',
        content: `
        Tương tự như Năm thứ tư, đây là một năm trũng để tập trung củng cố nội lực và không nên có những bước thay đổi nào quá lớn. 
        Tuy nhiên, Năm thứ bảy vô cùng có ý nghĩa, vì đây là giai đoạn mà chúng ta học cách tập trung cao độ vào việc xem xét sự phát triển của những năm trước để hiểu cuộc đời của mình hơn. 
        Theo cách đó, đây là năm thiết yếu để học hỏi từ các trải nghiệm cá nhân.
        Đối với nhiều người, điều này đồng nghĩa với sự mất mát vì một thất bại nào đó, để qua đó họ nhận ra và áp dụng Sự hướng dẫn đến từ những nguồn năng lượng cao hơn, được truyền tải qua sự dẫn dắt của các bậc cha mẹ, các bậc thấy... và từ sự thông thái vốn có của họ. Khi chỉ biết phản ứng một cách thiếu suy nghĩ trong cuộc sống, chúng ta tự khiến bản thân phải đón nhận những phương pháp chỉnh đốn nghiêm khắc - thứ mà chúng ta hay gọi là “ báo ứng nhãn tiền ” , để từ đó điều chỉnh lại lối sống của mình. Và sự chỉnh đốn này thường sẽ gây ra tổn thất về tiền bạc, sức khỏe hoặc tình cảm. 
        Những tổn thương này đều có lý do của chúng chứ không phải xuất hiện ngẫu nhiên, vì chúng được tạo ra để đánh thức và đưa chúng ta quay về Con đường tiến hóa của mình.
        Những người khôn ngoan sẽ tránh mọi sự thay đổi lớn về tài chính hoặc công việc trong Năm thứ bảy, vì đây là giai đoạn của sự ổn định chứ không phải mở rộng, của quá trình cắt bỏ những cành cây khô để lấy chỗ cho sự phát triển mới trong những năm kế tiếp. Đây cũng là một năm rất phù hợp để chia sẻ hoặc hướng dẫn người khác, vì nhiều cơ hội sẽ xuất hiện để chúng ta có dịp dẫn dắt người khác hướng đến mức độ hiểu biết cao hơn. Người có Con số chủ đạo 7 thường chịu những thử thách hay tổn thất khắc nghiệt nhất dưới tác động của sóng rung Năm thứ bảy, nhưng những trải nghiệm của họ còn có vẻ tồi tệ hơn nữa dưới con mắt của người ngoài.
        Họ không lạ gì việc gặp phải những mất mát, hy sinh, vì đó là cách họ học được những bài học cuộc sống. Và mọi chuyện sẽ tiếp tục như vậy cho đến khi họ có được sự khôn ngoan và một mức độ nhận thức cá nhân nào đó. 
        Một khi đạt được kết quả này, họ có thể trở thành những người thầy, những triết gia thực tế và những người hỗ trợ nhân loại, từ đó hoàn thành mục tiêu mà Con số chủ đạo của họ đề ra. 
        `,
    },
    {
        heading: 'NĂM THỨ TÁM (PYN 8) - NĂM CỦA SỰ ĐỘC LẬP VÀ TRÍ TUỆ',
        content: `
        Đây là một năm của những thay đổi nhanh chóng, khi chúng ta trỗi dậy sau một năm âm thầm củng cố nội lực và chuẩn bị bước lên con dốc để đến với đỉnh cao kế tiếp, cũng như đến với sự khởi đầu một chu kỳ phát triển mới và thịnh vượng hơn. 
        Rất nhiều cơ hội được tạo ra dưới tác động của sóng rung này, khi chúng ta khẳng định sự độc lập của mình với sự khôn ngoan ngày càng được nâng cao.
        Đối với một số người, đó sẽ là sự cải thiện đáng kể trong các vấn đề tài chính. Đa số mọi người sẽ có sự trưởng thành và độc lập về mặt tinh thần, khi mà họ nhận ra mình đã tiến bộ đến mức nào trong việc thấu hiểu và kiểm soát cảm xúc, cũng như biết rằng giờ đây họ đã tập trung nhiều hơn vào việc “ sống ” (chủ động hành động) thay vì chỉ “ tồn tại ” (thụ động phản ứng).
        Những người có Con số chủ đạo 8 đã có được sự độc lập và sự khôn ngoan ở một mức độ thích hợp nào đó, đủ để cuộc sống của họ trở nên tích cực. Nếu không, họ Sẽ xây lên bức tường cách ly xung quanh mình, hiểu lầm Sự tách biệt thành độc lập và gặp khó khăn trong việc giao tiếp với những người thân thiết xung quanh mình, những người mà họ vẫn thường đón nhận như lẽ đương nhiên chứ không hề trân trọng. 
        `,
    },
    {
        heading: 'NĂM THỨ CHÍN ( PYN 9 ) - NĂM ĐỈNH ĐIỂM THAY ĐỔI',
        content: `
        Vì nó là thời điểm khép lại chu kỳ cũ và mở ra chu kỳ mới, trước đỉnh cao của chu kỳ 9 năm của mỗi cá nhân chính là một năm khởi động mọi sự thay đổi. Tuy nhiên, nhiều sự thay đổi diễn ra âm thầm đến mức chúng ta sẽ không nhận ra mãi cho đến cuối năm hoặc trong năm kế tiếp .
        Những thay đổi này rất đa dạng và khác nhau trong suốt cuộc đời của mỗi người, và chúng trở nên đặc biệt rõ nét trong quảng thời gian 27 năm phát triển và trưởng thành theo mô hình Kim tự tháp (tức Bốn đỉnh cao của đời người).
        Các khía cạnh chủ yếu của Năm thứ chín bao gồm việc di chuyển đó đây, đổi nhà, đổi công việc xây dựng mối quan hệ bạn bè mới, thường đi kèm với sự kết thúc một vài mối quan hệ hay tình bạn cũ, không còn phù hợp với hành trình mới.
        Đây cũng là năm tuyệt vời để tất toán những món nợ cũ, cũng như xoa dịu những mối quan hệ đang bất hòa. 
        Ở năm này, người ta thường cảm nhận mạnh mẽ về trách nhiệm con người, cũng như sự bao dung và thấu hiểu . Năm thứ chín thường đặc biệt quan trọng đối với những người có Con số chủ đạo là số 9 , vì họ sẽ cảm nhận được năng lượng mạnh mẽ của nó trong mỗi hành động. Đây dự kiến sẽ là năm của sự thành công đáng kể đối với những người này.
        Năm thứ chín là đỉnh cao trong chu kỳ phát triển 9 năm, do đó, trách nhiệm và lý tưởng của người có Con số chủ đạo 9 sẽ càng được nâng cao trong bất kỳ lĩnh vực nhân văn nào mà họ tham gia. 
        Tuy nhiên, nếu họ vốn đã nhiều tham vọng, năm thứ chín sẽ càng củng cố lòng tham của họ đối với những thành công mang tính tư lợi, khiến họ kích động đến mức trở nên bất cẩn, và điều này có thể dẫn họ đến với những bài học cực kỳ đau thương.
        Bên cạnh đó, sự cuồng nhiệt quá độ, tính kiêu ngạo và tính nghiêm túc quá mức là ba thứ có thể tước mất cơ hội tận hưởng một năm đầy thú vị của những thay đổi ngoạn mục trong cuộc đời họ. 
        `,
    },
]

const secret = 'thansohoc'

const Detail = () => {
    const { info } = useContext(SearchContext)
    const navigate = useNavigate()
    const chiSoDuongDoi = useMemo(
        () => CHI_SO_DUONG_DOI[info.number1 as number],
        [],
    )
    const [code, setCode] = useState<string>('')
    const [err, setErr] = useState<string>('')
    const data = useMemo(
        () => [
            { label: 'Số chủ đạo', color: '#F3A51D', so: info.number1 },
            { label: 'Số ngày sinh', color: '#292f6f', so: info.songaysinh },
            { label: 'Năm cá nhân', color: '#f15f64', so: info.namcanhan },
            { label: 'Số tên riêng', color: '#8883BE', so: info.sotenrieng },
            { label: 'Số linh hồn', color: '#3CA0B8', so: info.solinhhon },
            { label: 'Số biểu đạt', color: '#5560AB', so: info.sobieudat },
        ],
        [info],
    )
    const [isVerify, setIsVerify] = useState<boolean>(false)
    useLayoutEffect(() => {
        if (!info.number1) navigate('/')
    }, [])

    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center md:text-3xl text-2xl font-bold select-none cursor-default text-white">
                <p className="text-center">BÁO CÁO THẦN SỐ HỌC</p>
                <h2 className="mt-3">
                    Họ và tên:{' '}
                    <span className="text-[#F7D51A]">{info.fullname}</span>
                </h2>
                <h2 className="mt-3">
                    Ngày sinh:{' '}
                    <span className="text-[#F7D51A]">{`${info.day}/${info.month}/${info.year}`}</span>
                </h2>
            </div>
            <div className="mt-10 grid lg:grid-cols-6 gap-y-7 grid-cols-2 md:grid-cols-3">
                {data.map((item, index) => (
                    <Fragment key={index}>
                        <So
                            label={item.label}
                            color={item.color}
                            so={item.so as number}
                        />
                    </Fragment>
                ))}
            </div>
            <div className="rp-box mt-10">
                <h2 className="text-xl text-center font-bold ">
                    Con số chủ đạo của bạn là:{' '}
                    <span className="text-shadow-pink">{info.number1}</span>
                </h2>
                <p className="rp-text">
                    {TEXT[info.number1 as number].content}
                </p>
                {!isVerify && (
                    <div>
                        <h1 className="mt-5 text-2xl font-bold text-[#F7D51A] text-center">
                            Để đọc tiếp vui lòng làm theo hướng dẫn
                        </h1>
                        <p className="rp-text mt-3">
                            - <strong>Bước 1</strong>: Truy cập vào Google và gõ
                            "Tra cứu thần số học".
                        </p>
                        <p className="rp-text">
                            - <strong>Bước 2</strong>: Cuộn đến cuối trang để
                            lấy mã.
                        </p>
                        <p className="rp-text">
                            - <strong>Bước 3</strong>: Nhập mã vào ô input bên
                            dưới.
                        </p>
                        <div className="flex items-center mt-3">
                            <input
                                className="w-[240px] h-6 rounded-md bg-white text-[#333] text-[15px] border-none outline-none px-2"
                                type="password"
                                placeholder="Nhập mã..."
                                value={code}
                                onChange={(e: InputChange) =>
                                    setCode(e.target.value)
                                }
                            />
                            <button
                                onClick={() => {
                                    if (code === secret) {
                                        setIsVerify(true)
                                    } else {
                                        setErr('Mã không đúng')
                                    }
                                }}
                                className="h-6 ml-2 px-1 rounded-md bg-[#007BFF] text-xs block"
                            >
                                Xác nhận
                            </button>
                        </div>
                        {err && (
                            <span className="text-sm mt-2 text-red-400">
                                {err}
                            </span>
                        )}
                    </div>
                )}
                {isVerify && (
                    <div>
                        <h2 className="text-xl text-center font-bold mt-5">
                            Số tên riêng của bạn là:{' '}
                            <span className="text-shadow-pink">
                                {info.sotenrieng}
                            </span>
                        </h2>
                        <p className="rp-text mt-4">
                            - Số tên riêng của bạn khác với số chủ đạo.
                        </p>
                        <p className="rp-text">
                            {' '}
                            - Nếu con số tên riêng và con số chủ đạo cùng nằm
                            trên một trục ngang (Trục thể chất 4-7-10, trục tinh
                            thần 2-5-8, trục trí não 3-6-9): nó sẽ làm cân bằng
                            sức mạnh đặc trưng của trục ngang đó.
                        </p>
                        <p className="rp-text">
                            - Nếu con số tên riêng và con số chủ đạo không cùng
                            nằm trên một trục ngang: người sở hữu sẽ ảnh hưởng
                            sóng rung đa dạng, từ đó mở rộng phạm vi của các đặc
                            điểm tính cách.
                        </p>
                        <h2 className="text-xl text-center font-bold mt-5">
                            Số linh hồn của bạn là:{' '}
                            <span className="text-shadow-pink">
                                {info.solinhhon}
                            </span>
                        </h2>
                        <p className="rp-text mt-4">
                            {SLH[info.solinhhon as number]}
                        </p>
                        <h2 className="text-xl text-center font-bold mt-5">
                            Số biểu đạt của bạn là:{' '}
                            <span className="text-shadow-pink">
                                {info.sobieudat}
                            </span>
                        </h2>
                        <p className="rp-text mt-4">
                            {SBD[info.sobieudat as number] ||
                                'Nội dung chưa cập nhật'}
                        </p>
                        <h2 className="text-xl text-center font-bold mt-5">
                            Năm cá nhân của bạn là:{' '}
                            <span className="text-shadow-pink">
                                {info.namcanhan}
                            </span>
                        </h2>
                        <div className="mt-4">
                            <Chart
                                day={Number(info.day)}
                                month={Number(info.month)}
                            />
                            <h3 className="mt-4 text-[#FFAC13] font-bold text-base text-center">
                                {NAM[info.namcanhan as number]?.heading ||
                                    'Nội dung chưa cập nhật'}
                            </h3>
                            <p className="rp-text">
                                {NAM[info.namcanhan as number]?.content ||
                                    'Nội dung chưa cập nhật'}
                            </p>
                        </div>
                    </div>
                )}
            </div>
            {/* <div className="rp-box">
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
            </div> */}
            {isVerify && (
                <div className="rp-box mt-5">
                    <h3 className="rp-heading">
                        CHỈ SỐ ĐƯỜNG ĐỜI (SỐ CHỦ ĐẠO) CỦA BẠN LÀ:{' '}
                        <span className="text-[#F7D51A]">
                            {chiSoDuongDoi?.type}
                        </span>
                    </h3>
                    <p className="rp-text mb-5">
                        Chỉ số này hé lộ con đường mà bạn sẽ trải qua trong cuộc
                        đời này. Nó cho bạn thấy bạn sẽ gặp phải những trải
                        nghiệm như thế nào, và bạn học được gì sau những trải
                        nghiệm đó. Nó cung cấp nhiều thông tin về con người bạn
                        và cuộc đời mà bạn sẽ sống.
                    </p>
                    <p className="rp-text">
                        {chiSoDuongDoi.content || 'Nội dung chưa cập nhật'}
                    </p>
                    <p className="font-bold mb-2">Mối quan hệ tương thích</p>
                    <p className="rp-text">
                        {chiSoDuongDoi.relationship || 'Nội dung chưa cập nhật'}
                    </p>
                </div>
            )}
        </Layout>
    )
}

export default Detail
