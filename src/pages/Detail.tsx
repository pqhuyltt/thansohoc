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
import parse from 'html-react-parser'
import dinh from '../assets/images/Bieu-do-dinh.png'
import Popup from '../components/Popup'
import { getArrNum } from '../utils/getArrNum'
import arr1 from '../assets/images/arr1.png'
import arr2 from '../assets/images/arr2.png'
import arr3 from '../assets/images/arr3.png'
import arr4 from '../assets/images/arr4.png'
import { arrows } from '../utils/arrows'
import { solanlap } from '../utils/solanlap'
import { getArrNumFromString } from '../utils/getArrNumFromString'

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
        relationship: `
<strong>• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG</strong>:
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
        
<strong>• TÌNH DUYÊN:</strong>
        - Trong tình yêu, bạn cần tìm một người có cùng quan điểm với mình. Họ không cần phải sáng tạo, nhưng chắc chắn sẽ hữu ích nếu họ đánh giá cao nghệ thuật. Mặc dù bạn tự nhiên bị thu hút bởi một số người có cùng tinh thần tự phát như bạn, nhưng việc thiếu trách nhiệm có thể trở thành một vấn đề lớn trong mối quan hệ của 2 người.
        - Về mặt tình duyên, bạn thích hợp với những người có đường đời số 5. Điều này là do họ cũng thích phiêu lưu như bạn và có cùng quan điểm tích cực. Những ý tưởng của 2 người luôn tự phát, và bạn có thể yên tâm rằng sẽ không bao giờ có một khoảnh khắc buồn tẻ khi hai bạn ở bên nhau. Tuy nhiên, điều tiêu cực duy nhất giữa bạn và số 5 là bạn có thể thấy mình gặp rắc rối khi cả hai đều bỏ qua sự cẩn trọng cần thiết trong các tình huống của cuộc sống.
        - Một kết hợp tốt khác cho bạn là những người có đường đời số 7. Số 7 cực kỳ trực quan và chu đáo nên có thể phát huy khả năng sáng tạo của bạn. Mối quan hệ này hoạt động tốt vì cả hai bạn đều giải quyết cảm xúc tương tự nhau, và rất ít khả năng hai bạn rời xa nhau hoặc tranh cãi. Điều quan trọng là số 7 sẽ không khao khát cảm giác phiêu lưu và phấn khích như bạn, đó không nhất thiết là một điều xấu vì chúng có thể giúp bạn tìm thấy sự cân bằng mà bạn cần.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `
<strong>• ĐIỂM MẠNH CỦA BẠN:</strong>
        - Bạn thích sự sáng tạo, giao thiệp, và kết nối mọi người. Điều đó làm cho bạn có được năng lực truyền đạt tuyệt vời.
        - Bạn lạc quan, vô cùng rộng lượng. Bạn là tuýp người đặc biệt hài hước. Bạn thường là “cây hài” trong các nhóm, mang tới không khí tươi vui, rộn ràng cho mọi người với bộ sưu tập các câu chuyện hài hước phong phú. 
        - Thêm vào đó, bạn thường cực kỳ tinh tế trong việc nắm bắt tâm lý người khác. 
        - Bạn yêu thích môi trường mà ở đó con người được tạo điều kiện để trao đổi, phối hợp, tương tác với nhau. Khi gặp được môi trường như vậy, bạn sẽ phát huy được những thế mạnh và làm việc hiệu quả hơn, ngẫu hứng hơn. 
        - Trong các mối quan hệ cá nhân, bạn thuộc tuýp người lãng mạn, rất chung thủy và khó lòng quên được những hình bóng cũ. Thậm chí khi mọi chuyện đã kết thúc, bạn vẫn không thể từ bỏ.
        
<strong>• ĐIỂM YẾU CỦA BẠN:</strong>
        - Bởi do thích thú việc sống hết mình, bạn dường như chỉ sống cho hôm nay và không nghĩ đến ngày mai. Bạn có khoảng thời gian khó khăn để trở thành một người biết nhận trách nhiệm một cách nghiêm túc. Việc quản lý tiền bạc dường như không tốt cho lắm bởi một phần bạn cảm thấy rất tích cực về cuộc sống và nghĩ rằng mọi thứ rồi cũng sẽ tốt đẹp. Thỉnh thoảng, điều này có thể khiến bạn sống hời hợt, trì hoãn và thiếu định hướng trong cuộc sống.
        - Khi cao hứng, bạn thường có thể bị cảm xúc cuốn đi quá xa. Hãy cẩn thận khi nhận thấy mình ở trạng thái đó, bởi vì khi đó những điều bạn nói ra có thể không hoàn toàn đúng sự thật. Chủ yếu là do bạn muốn làm cho điều gì đó nổi bật lên, hấp dẫn hơn. 
        - Bạn cũng có thể dễ dàng bị rơi vào trạng thái mất hứng, chán nản và thay đổi. 
        - Đôi khi bạn có thể bị sự tùy hứng làm ảnh hưởng đến hiệu quả công việc. Vì vậy hãy tạo cho mình thói quen lên kế hoạch, mục tiêu chặt chẽ và thường xuyên kiểm tra lại để không đi chệch hướng. 
        - Bạn sẽ không phù hợp với những môi trường làm việc nhàm chán, đơn điệu hoặc gò bó. Bạn thích những môi trường làm việc có sự tương tác, giao tiếp, có cảm hứng và sự vui vẻ. Bạn cũng có thể trở nên khó tính, sốt ruột nếu làm việc với ai đó chậm chạp, ù lì. Những điều này có thể khiến bạn dễ chán công việc, dẫn tới tình trạng thay đổi công việc khá nhiều.
        
<strong>• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 3:</strong>
        - Jackma – Chủ tịch tập đoàn Alibaba
        - Đặng Lê Nguyên Vũ – Chủ tịch tập đoàn Trung Nguyên
        - Một vài người khác như: Christina Aguilera, David Bowie, Hillary Clinton, Jimmy Buffett, Jodie Foster, John Travolta, Pierce Brosnan, Shania Twain, Snoop Dogg
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 4 – NGƯỜI LOGIC, THỰC TẾ',
        relationship: `
<strong>• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:</strong>
        Tương thích nhất với bạn:
        - Đối với bạn, số 10 thể hiện sự quyết tâm và tập trung, nếu có chung đạo đức làm việc, số 10 sẽ cùng bạn hướng tới mục tiêu một cách mạnh mẽ.
        - Số 8 cũng là một kết hợp tốt với bạn. Kỷ luật và cực kỳ có tổ chức, cả hai số đều tin rằng thành công đến từ sự chăm chỉ. Nhưng không giống số 4 thực tế, số 8 có một tầm nhìn xa, vì vậy họ bổ sung tốt cho bạn, cho dù đó là kinh doanh hay đối tác.
        - Số 7 cũng là một sự kết hợp tuyệt vời với bạn, mối quan hệ mà hai người hình thành rất năng động và kiên định. Số 4 được thu hút bởi bản chất và tri thức thực sự của số 7, còn số 7 ngưỡng mộ sự vững vàng của bạn.
        
        Ít tương thích nhất với bạn:
        - Phần lớn trong thần số học, số 4 và số 10 tương hợp với nhau, nhưng đôi khi những tính cách này có thể xung đột với nhau. Những người có đường đời số 10 thường thích hoàn thành công việc sớm hơn, trong khi số 4 thích lên kế hoạch mọi thứ đến từng chi tiết cuối cùng. Những đặc điểm tính cách đối lập này có thể gây ra vấn đề trong mối quan hệ.
        - Mối quan hệ hợp tác tồi tệ nhất có thể xảy ra với bạn là với số 5. Số 5 có nhu cầu được tự do, còn bạn cần được cảm thấy an toàn và ổn định. Theo mọi nghĩa thì hai người hoàn toàn đối lập nhau.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
<strong>• TÌNH DUYÊN:</strong>
        - Khi nói đến tình yêu, bạn tiếp cận nó theo cách tương tự như cách bạn tiếp cận mọi thứ khác - một cách thực tế và hợp lý. Nhu cầu an toàn của bạn có nghĩa là bạn không thích những cuộc tình chóng vánh mà muốn những mối quan hệ ổn định, tồn tại lâu dài.
        - Bạn không ý tưởng về những người bạn tâm giao và cũng ít khi tìm kiếm một người bạn đời. Thay vào đó, bạn tin rằng các mối quan hệ thành công cần sự chăm chỉ kiên trì, và tất nhiên, bạn rất vui khi làm được điều đó.
        - Bạn rất kém trong việc thể hiện sự lãng mạn, và có thể đếm số lần 'tán tỉnh ngớ ngẩn' mà bạn đã từng có. Nhưng không thể phủ nhận sự trung thành của bạn, hoặc quyết tâm để đảm bảo mối quan hệ có hiệu quả.
        - Những mối tình tồi tệ nhất của bạn là với người có đường đời số 3 và số 5 hoặc con người đôi khi có lý tưởng trên mây là số 9. Ban đầu, những mối quan hệ này sẽ mang lại một yếu tố thú vị cho cuộc sống có phần bình lặng của bạn, nhưng sẽ không tồn tại được lâu trước khi bạn chán ngấy với những cách làm lung tung, thiếu quyết tâm và không có khả năng tập trung của họ.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `<strong>• ĐIỂM MẠNH CỦA BẠN</strong>:
            - Với chỉ số ngày sinh 4 trong thần số học, bạn là người thích mọi thứ thật rõ ràng, minh bạch và có khả năng tra cứu thông tin, tìm hiểu cặn kẽ vấn đề, nếu bạn quan tâm. Bạn thường phân tích mọi thứ theo nhiều khía cạnh, đến tận gốc rễ, chân lý, ngọn ngành mới thôi. 
            - Bạn cũng là người giỏi quản trị. Bạn có nguyên tắc và tuân thủ rất tốt. Cùng với năng lực tổ chức, bạn thường sắp xếp công việc, nhân sự và lên kế hoạch chi tiết, rõ ràng và có tính khả thi cao. Thường thì mọi người sẽ tin tưởng khả năng quản trị và tổ chức của bạn. 
            - Bạn là người logic, thực tế, rõ ràng. Với bạn, mọi thông tin cần phải được mô tả cụ thể, rành mạch, không màu mè, lòng vòng. Và bạn sẽ không thích nếu ai đó nói chuyện với bạn theo kiểu hoa mỹ. Tốt nhất là họ nên đi thẳng vào nội dung chính, bởi vì bạn muốn nghe thông tin.
            - Bạn sẽ dễ tin tưởng một ai đó hơn nếu họ trình bày một cách có logic, có dẫn chứng. 
            - Bạn thuộc kiểu người muốn thấy kết quả và thường chỉ tin khi thấy được kết quả. 
            - Bạn có một ý thức mạnh mẽ về đúng và sai, rất trung thực, và đánh giá cao sự trung thực ở những người khác. Những giấc mơ của bạn đều dựa trên thực tế và bạn không bao giờ nghi ngờ về chuyện cần phải làm việc chăm chỉ để biến chúng trở thành sự thật.
            - Cho dù làm gì thì người bạn cũng thường thích cách tiếp cận kiểu “chính thống” hơn kiểu trải nghiệm, thích nguyên tắc hơn là mạo hiểm.
<strong>• ĐIỂM YẾU CỦA BẠN:</strong>
            - Mang trong mình chỉ số đường đời 4 trong thần số học, bạn cũng có thể có một số điểm yếu của con số này như sự nghiêm khắc, khó tính, bảo thủ. Khi đó, bạn thường chỉ chấp nhận những gì hợp với logic trong đầu mình. Bạn cho rằng, những gì mình nghĩ, mình đã trải qua là đúng đắn. Mặt khác, sự thẳng thắn, chia sẻ kiến thức, sự góp ý hay tính kỷ luật cao của bạn đôi khi có thể tạo ra mâu thuẫn, xung đột. 
            - Bởi vì tính logic, thực chứng và muốn hiểu sự việc một cách rõ ràng nên bạn thường đặt câu hỏi và hỏi đến khi nào hiểu rõ mới thôi. Điều này giúp bạn làm việc gì cũng chắc chắn, nhưng nhiều khi cũng gây khó chịu cho người khác. 
            - Bạn có thể ổn định đến mức bạn thể hiện như một kẻ bướng bỉnh, cứng nhắc hoặc quá nghiêm túc. 
            - Bạn cũng có xu hướng bỏ qua sự khéo léo và để cho cảm xúc thật của bạn được tất cả những người xung quanh biết đến, điều này đôi khi có thể đẩy người khác ra xa. 
            - Mặc dù là những người thực tế và lên kế hoạch tốt, bạn cực kỳ thận trọng, và không đi chệch nhiều khỏi kế hoạch tổng thể. Do đó đôi khi cũng có thể bỏ lỡ cơ hội phát sinh bởi vì bạn không hành động đủ nhanh.
            - Bạn cũng là người suy nghĩ nhiều, phân tích nhiều nên lắm lúc bị căng thẳng đầu óc.
            - Sự phân tích quá kỹ lưỡng cũng khiến bạn khó ra quyết định và có thể bị lỡ mất cơ hội.
        
<strong>• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 4:</strong>
            - Bill Gates – Chủ tịch tập đoàn Microsoft
            - Trump – cựu Tổng thống Mỹ
            - Một vài người khác như: Oprah Winfrey, Nicki Minaj, Drake, Jimmy Fallon, Brad Pitt, Usher, Bill Gates, Elton John, Keanu Reeves
            Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.
        `,
    },
    {
        type: 'SỐ 5 - NGƯỜI TỰ DO, LINH HOẠT',
        relationship: `
<strong>• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:</strong>
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
        
        
<strong>• TÌNH DUYÊN:</strong>
        - Ngất ngây với sự quyến rũ và lối sống đáng ghen tị, bạn được những người khác giới yêu thích, nhưng nhìn chung, bạn này có xu hướng tránh xa những mối quan hệ mà có sự trói buộc.
        - Nhưng bạn sẵn sàng để đối phương chia sẻ tình yêu tự do và phiêu lưu, cũng như cách tiếp cận tự phát của bạn đối với mọi thứ. Đối với bạn, một số 5 khác là đối tác hoàn hảo của bạn, hoặc cũng như số 3 là một lựa chọn tuyệt vời.
        - Những tiềm năng khác trên biểu đồ thần số hợp với bạn là số 10 và số 7. Họ có cùng một lượng năng lượng nhưng bổ sung cho bạn theo những cách khác nhau. Ví dụ, một người có đường đời số 10 là người có tham vọng với lòng quyết tâm cao độ và sẽ giúp bạn tập trung và làm việc hướng tới mục tiêu của mình. Còn số 7 với cách tiếp cận triết học về cuộc sống, có thể giúp bạn đạt được sự thỏa mãn trong chính mình, thay vì cố gắng tìm kiếm nó từ mọi người, mọi địa điểm và mọi thứ.
        - Các số 4, 8 và 9 có giá trị và cần sự ổn định, nhưng đó chỉ là lựa chọn cuối cùng của bạn. Sẽ không mất nhiều thời gian trước khi số 4, 8 và 9 để bạn nản lòng vì bạn không thể cam kết với một vị trí, một công việc. Và đối với bạn, ở bên họ sẽ đơn điệu như cục sơn khô. Nếu bạn chọn theo đuổi một mối quan hệ lãng mạn với một người coi trọng sự an toàn, bạn sẽ cần phải có một mức độ thỏa hiệp hợp lý. Điều này có thể được, nhưng có lẽ chỉ sau tuổi 30 của bạn.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `Bạn là người sáng tạo , tràn đầy năng lượng và hành vi rất tự phát.
        Đối với một số người, hành vi của bạn thường có thể được mô tả là buông thả bản thân, nhưng thực sự đó là đặc điểm của bạn. Chấp nhận rủi ro là trò chơi của bạn, bạn luôn sẵn sàng đối mặt với thử thách và phát triển mạnh mẽ trong những tình huống có thể đoán trước được.
        
        Bạn là một người giao tiếp xuất sắc và có sở trường thúc đẩy những người xung quanh bạn. Món quà này của bạn có thể được sử dụng vì những điều tốt đẹp hơn, để tập hợp mọi người lại với nhau và thúc đẩy sự thay đổi. Nhưng khi nó bị lạm dụng, kết quả có thể rất thảm khốc.
        
        Với tư cách là người có số đường đời 5, bạn không muốn làm việc theo quy trình, bạn cũng có thể bốc đồng, nóng nảy và thiếu kiên nhẫn, nhưng một trong những thách thức lớn nhất của bạn là nhu cầu được thỏa mãn ngay lập tức, điều này có thể dẫn đến nghiện một thú vui tiêu khiển hoặc lạm dụng chất kích thích.
        
<strong>• ĐIỂM MẠNH CỦA BẠN:</strong>
        - Bạn là người năng động, sôi nổi, cá tính, thông minh, sắc sảo. 
        - Bạn khá ham vui và thường thuộc nhóm đầu tiên có mặt trong các cuộc vui, cuộc chơi, cuộc đi. Bạn thích khám phá mọi nơi, trải nghiệm mọi thứ. 
        - Những gì mới mẻ, kỳ thú hay bí hiểm đều có tính kích thích mạnh mẽ với bạn. Đó có thể là các địa điểm, tác phẩm văn học, âm nhạc, v.v.. Vì thế, trong mọi việc bạn làm, dường như bạn có xu hướng tạo ra những cách làm mới, thêm những yếu tố mới, làm cho công việc được thú vị hơn. Vì thế, bạn có thể có những sáng tạo rất độc đáo, nhưng đôi khi cũng khá buồn cười. 
        - Bạn thích vui vẻ, thích bạn bè. Bạn rất sợ sự nhàm chán, đơn điệu và ràng buộc. 
        - Trong các mối quan hệ, bạn phóng khoáng, tự do và thoải mái. Bạn có thể rất nhanh làm quen với môi trường mới và những người bạn mới. Ai tiếp xúc với bạn cũng sẽ bị bạn thu hút, đặc biệt là những người khác giới. 
        - Cái nhìn của bạn về cuộc sống là cái nhìn đầy màu sắc, phiêu lưu và khám phá. Bạn thích thưởng thức tất cả những gì tươi đẹp của cuộc sống. 
        
<strong>• ĐIỂM YẾU CỦA BẠN:</strong>
        - Bạn cũng thuộc tuýp người dễ đam mê, do đó hãy thận trọng với những thú vui tiêu cực. Đôi khi bạn cũng đanh đá, gắt gỏng, nóng nảy, bồn chồn, bất an. 
        - Bạn có thể hòa nhập được với bất kỳ môi trường nào và với bất kỳ ai. Nhưng điều này nhiều khi sẽ đem lại cho bạn rủi ro. Vì vậy, hãy thật thận trọng.
        - Nếu bạn không sống một cách phiêu lưu, cuộc đời của bạn có thể sẽ trở nên rất bi kịch.
        - Bạn có một khoảng thời gian khó khăn trong việc ổn định cuộc sống, sợ bị mắc kẹt hoặc chết ngạt trong một mối quan hệ.
        - Mặc dù bạn cực kỳ giàu tình thương thế nhưng sự tập trung vào việc phiêu lưu và tính tò mò có thể đánh lạc hướng và khiến bạn không nhận thức được cảm xúc của những người xung quanh. Hơn nữa, vì bạn luôn tìm kiếm chuyến phiêu lưu tiếp theo, cuộc sống của bạn có thể thiếu định hướng, và điều này có thể khiến bạn không hài lòng và mất kiên nhẫn.
        - Bất kỳ nghề nghiệp nào yêu cầu việc di chuyển cũng đều rất phù hợp với những người thuộc đường đời số 5. Vì nó sẽ giúp bạn tránh xa lịch trình đều đặn của rất nhiều công việc khác. Nếu không thì bạn có thể cảm thấy bồn chồn vì bị mắc kẹt trong một môi trường làm việc nhàm chán và lặp đi lặp lại. 
        - Một người với nhiều phần của số 5 trong biểu đồ sẽ muốn được tự mình làm chủ. Bạn sẽ không thích thú với một công việc theo giờ hành chính mà bạn phải báo cáo cho người khác mỗi ngày.
        
<strong>• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 5:</strong>
        - Mark Zuckerberb – Chủ tịch tập đoàn Facebook
        - Trấn Thành – MC, diễn viên
        - Quang Masan – Chủ tịch tập đoàn Masan
        - Một vài người khác như: Abraham Lincoln, Mick Jagger, Ryan Gosling, Malcolm X, Isaac Newton, Beyoncé, Angelina Jolie
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 6 – HẬU PHƯƠNG',
        relationship: `
<strong>• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:</strong>
        Tương thích nhất với bạn:
        - Số 2 (hoặc 11/2) và bạn đều có một ngôn ngữ đặc biệt, nơi cả 2 được hướng dẫn bởi trái tim của mình nhiều hơn là bởi lý trí. Hai người bổ sung tốt cho nhau, số 6 rất hướng về gia đình trong khi mục đích duy nhất của số 2 là yêu thương và quan tâm đến những người xung quanh. Vấn đề với mối quan hệ dường như hoàn hảo này là nhu cầu chấp thuận liên tục trong bạn, điều này có thể làm mất đi bản chất quan tâm của cả 2. Để nó hoạt động, cả hai bên sẽ cần quan tâm hơn đến cảm xúc của đối tác.
        - Số 4, 8, 9, 10 cũng là một lựa chọn tốt cho mối quan hệ của bạn.
        
        Ít tương thích nhất với bạn:
        - Trong tất cả các con số trên biểu đồ số, số 6 kém tương thích nhất với với các số 3, 5 và 7. Đây cũng là ba là con số ít có khả năng hình thành bất kỳ loại mối quan hệ nào nhất:
         + Số 5 và bạn có thể là một cặp đôi, nhưng sẽ cần rất nhiều sự thỏa hiệp từ cả hai bạn. Và đối với một số người, khi một mối quan hệ cảm thấy như nó là một công việc khó khăn, nó có lẽ không đáng giá.
         + Còn sự kết hợp giữa bạn và số 7 lại chứa đầy những vấn đề xung quanh mọi ngóc ngách. Trong khi bạn muốn một mối quan hệ nghiêm túc, thì số 7 lại không đạt được những gì bạn muốn. Ngoài ra, đường đời số 6 quá kiểm soát đối với số 7 - những người sống cô độc và hướng nội. Với một sự thúc đẩy mạnh mẽ, mối quan hệ này có thể thành công, nhưng thành thật mà nói, nó sẽ chỉ là sự thỏa hiệp quá nhiều từ cả hai người.
        
        Hãy nhớ rằng khả năng tương thích trong các mối quan hệ của bạn còn sâu sắc hơn những gì thể hiện ở con số đường đời. Để biết cách tạo ra sự hài hòa, bạn sẽ cần xem xét các con số khác trong thần số học của mình. Chỉ số Linh hồn, Sứ mệnh, Nhân cách và Thái độ của bạn cũng sẽ ảnh hưởng đến mức độ tương thích của bạn trong các mối quan hệ. Đọc thêm các luận giải về các chỉ số này để tạo ra một bức tranh tổng quát cho bạn.
        
<strong>• TÌNH DUYÊN:</strong>
        - Bởi vì bạn có thể mang lại những điều tốt nhất cho những người khác, không có quá nhiều con số mà không tương thích với bạn. Là một người nuôi dưỡng và chăm sóc, bạn mang lại cho gia đình cùng đối tác của mình cảm giác an toàn thực sự. Và bạn có trực giác biết họ muốn gì và cần gì mà không cần họ phải yêu cầu.
        - Tuy nhiên, một lời cảnh báo, bởi vì bạn thích được quan tâm, bạn có thể thấy mình đang thu hút những người cần được giải cứu liên tục. Một mối quan hệ như vậy sẽ mang lại cho bạn mục đích nhưng nó không thể duy trì được, đặc biệt nếu người đó không thể giúp được, hoặc họ không muốn được giúp, bạn có thể cảm thấy kiệt sức và bực bội.
        - Bạn có thể hòa hợp tốt với hầu hết các con số, nhưng có một số sẽ dễ duy trì hơn. Các số 1, 2 và 9 là những số rất phù hợp với bạn. Khi nói đến chuyện tình cảm, số 1 và số 9 là đối tượng hoàn hảo của bạn. Cả hai đều có quyết tâm và động lực để thành công, và bạn rất vui khi giúp họ đạt được mục tiêu. Họ yêu mến bạn và kết quả là bạn có thể cảm thấy cần tích cực và thỏa mãn. Đường đời của những người số 2 là những người giàu lòng trắc ẩn và quan tâm, vì thế cả hai đều có thể nói chuyện thấu tình đạt lý nên rất ít khả năng xảy ra bất đồng hoặc tranh cãi giữa hai bạn. Giống như bạn, số 2 là người giàu tình cảm và thực sự lãng mạn trong trái tim. Trong khi bạn khiến họ cảm thấy được yêu thương với vô số tình cảm, họ sẽ đáo lại bạn bằng những bữa tối dưới ánh nến, hoa và những nơi nghỉ ngơi tuyệt vời.
        - Một điều bạn cần lưu ý trong một mối quan hệ lãng mạn là nhu cầu thường xuyên của bạn giống như một người phụ huynh. Mặc dù một số người bạn đời sẽ đánh giá cao sự quan tâm này, nhưng nó có thể trở thành một vấn đề khi việc quan tâm của bạn bắt đầu trở nên nhàm chán và đôi khi giống như kiểm soát.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `<strong>• ĐIỂM MẠNH CỦA BẠN:</strong>
        - Bạn thường dễ rung động trước cái đẹp, dù đó là vẻ đẹp của phong cảnh, đồ vật hay vẻ đẹp của con người. Bạn dễ xúc động trước những hoàn cảnh đáng thương, éo le; bạn cũng dễ xúc động trước những sự yêu thương, chăm sóc, khen ngợi dành cho bạn. 
        - Bạn sẵn lòng giúp đỡ người khác một cách chân thành. Thường thì chỉ cần mọi người mở lời xin sự giúp đỡ là bạn sẽ đồng ý, nhất là những người gần gũi hoặc thân thiết với bạn. Hãy cẩn thận với điều đó, vì bạn có thể quên mất những việc cần làm của bản thân và trở nên bao đồng, bao bọc, thậm chí làm hư những người gần gũi với bạn. 
        - Bạn là những phụ huynh bẩm sinh, người luôn quan tâm đến người khác dưới cái nhìn của bậc làm cha làm mẹ. Dù có giận người ta đến đâu, chỉ cần họ thể hiện sự biết lỗi hoặc hòa giải, bạn sẵn lòng bỏ qua. Bạn còn có thể rất áy náy nếu thấy có lỗi với ai đó. Bạn yêu quý thú cưng, trẻ nhỏ, người trẻ tuổi và những thứ mang tính “trẻ”. 
        - Bạn là người có khiếu thẩm mỹ hoặc nghệ thuật. Bạn có thể vẽ đẹp, viết tốt, sáng tác hay; bạn có thể có đôi tai biết thưởng thức và khứu giác rất tinh nhạy. Bạn thích làm cho mọi người và mọi vật đẹp lên.  
        - Bạn cũng là người không thích làm việc dưới trướng người khác, nhất là khi năng lực của bạn đã phát triển đến tầm nhất định. Bạn không thích bị người khác sai khiến, chỉ trích. Bạn rất coi trọng “thể diện”. Bạn cũng thường là người thẳng thắn và  có chính kiến. 
        - Là những người yêu thương con người, bạn rất ghét sự bất công, với mọi hình thức.
        
<strong>• ĐIỂM YẾU CỦA BẠN:</strong>
        - Bạn là những người đầy lòng yêu thương, không ích kỷ, và dễ bao dung, nhưng phải hết sức để ý để không bị lợi dụng lòng tốt của mình.
        - Là người tình cảm và giàu lòng yêu thương, nhưng nếu ai đó phản bội, hoặc bạn thấy mình trở thành gánh nặng với người khác, bạn sẽ rất lạnh lùng và rút lui. Đôi khi bạn cũng hay sốt ruột, và có thể nói ra những điều không đúng thời điểm.
        - Đôi khi bạn có thể lâm vào thói buôn chuyện nếu rảnh rỗi; bạn cũng cần cẩn thận với việc bàn luận, phán xét về người khác.
        - Bạn thường giỏi giao tiếp với trẻ em và động vật thông qua năng lượng dịu dàng và chở che. Nhưng không phải cái gì cũng cần được chăm nom, vì vậy đôi khi năng lượng bảo vệ của bạn có thể trở nên độc đoán và thích kiểm soát. Để tránh gánh cả thế giới trên vai, bạn phải học cách xây dựng niềm tin và sự cảm thông.
        - Nói một cách đơn giản, bạn hãy nhớ rằng: Ai cũng phải tự bước đi trên con đường đời của mình.
        
<strong>• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 6:</strong>
        - Chủ tịch Hồ Chí Minh
        - Vũ Đức Đam – Phó Thủ tướng Chính phủ Việt Nam
        - Jeff Beros – Chủ tịch tập đoàn Amazon
        - Warren Buffet – Nhà đầu tư tài ba
        - Một vài người khác như: Albert Einstein, John Lennon, Michael Jackson, Bruce Willis, Robert De Niro, Stevie Wonder, Richard Nixon, Ben Affleck
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 7 - NGƯỜI TRẢI NGHIỆM',
        relationship: `
<strong>• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:</strong>
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
        
<strong>• TÌNH DUYÊN:</strong>
        - Về mặt số học, bạn ít có khả năng thiết lập một cuộc hôn nhân thành công. Điều này liên quan nhiều đến các tiêu chuẩn cao của bạn hơn là thiếu các sự lựa chọn. Điều này không nhất thiết phải là một điều xấu. So với những con số khác trên đường đời, số 7 không cần mối quan hệ lâu dài ổn định để tận hưởng cuộc sống của mình. Bạn có thể ít cảm thấy thiếu thốn, vì vậy bạn sẽ không phụ thuộc vào đối phương của bạn. 
        - Nhưng nếu bạn tìm thấy một người thực sự hiểu và trân trọng mình, bạn có thể cảm thấy rằng mình đã tìm thấy một viên ngọc quý hiếm và muốn nắm giữ lấy.
        - Nếu bạn tìm đúng người, bạn sẽ rất trung thành. Điều này có thể xảy ra vào thời điểm hơi muộn của bạn, vì vậy bạn cũng có xu hướng kết hôn muộn.
        - Bạn cần một người khá trưởng thành, người sẽ thách thức bạn về mặt trí tuệ và cho bạn tự do chiêm nghiệm.
        - Sự thân mật về tình cảm không phải là điểm mạnh của bạn, vì vậy bạn có thể mất nhiều thời gian hơn để mở lòng mình đối với những người khác. Nhưng một khi mối quan hệ đã được thiết lập, nó có thể là một phần không thể thiếu trong cuộc sống của bạn. Tuy nhiên, bạn có thể thấy việc mở lòng đối với người khác sẽ dễ dàng hơn nếu bạn có số tương thích trong các chỉ số khác, chẳng hạn như số 2 hoặc số 6 ở chỉ số Linh Hồn, Sứ mệnh hoặc Thái độ. Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `Với chỉ số ngày sinh 7, bạn sẽ để lại ấn tượng là người thông thái, hiểu biết và đôi khi khó hiểu, kỳ dị. Bạn có tư tưởng, triết lý và thường nhìn cuộc sống qua lăng kính đó, vì vậy dễ có xu hướng dạy dỗ, giúp đỡ người khác thông qua triết lý.

<strong>• ĐIỂM MẠNH CỦA BẠN:</strong>
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
        
<strong>• ĐIỂM YẾU CỦA BẠN:</strong>
        - Là con người của “bản chất”, của sự thông thái và trí tuệ, bạn sẽ chỉ ngưỡng mộ những ai hơn mình về trí tuệ. Bạn thường chỉ thích quan điểm của bản thân mà thôi, và cũng rất ghét ai áp đặt quan điểm lên bạn. Nói cách khác, bạn sẽ cảm thấy khó sống theo quy củ mà người khác đưa ra, trong khi bạn lại thường hay thích áp quy củ của bạn lên cho người khác.
        - Thường thì mọi người sẽ thấy bạn khá khó hiểu. Bạn hay chia sẻ như không hết những gì trong lòng cho người khác nghe. Hoặc là bạn nghĩ họ sẽ không thể hiểu được, hoặc là bạn không muốn người khác hiểu hết về mình. 
        - Có nhiều lúc bạn thờ ơ, lãnh đạm. Những lúc ấy, đầu bạn hoặc là đang chìm trong suy tưởng về một điều gì đó, hoặc là trống rỗng, chẳng có gì. Nhưng người khác nhìn vào thì bạn có vẻ “rất suy ngẫm”. 
        - Bạn khá thất thường. Khi làm việc thì cực kỳ nghiêm túc, thậm chí là cầu toàn. Khi không có hứng thì bạn không muốn làm gì, cứ ì ra và khó chịu khi ai đó thúc giục. Khi bạn trầm ngâm thì vẻ mặt rất lạnh lùng, khó gần. Nhưng khi bạn vui vẻ thì chẳng khác gì một đứa trẻ. Dù sao, bạn chắc chắn là một người thật thà, thẳng thắn và tốt bụng. 
        - Một điểm đáng lưu ý là bạn dễ bị căng thẳng hoặc ức chế thần kinh. Đặc biệt là khi phải nghe những âm thanh “dội vào đầu”, hoặc khi nghe ai đó chì chiết, phán xét. Sự căng thằng này chỉ có tính trạng thái, nghĩa là có thể hết sau một lúc. Nhưng nếu những sự việc tương tự cứ tiếp diễn, bạn có thể bị stress và mất kiểm soát.
        - Chính vì thích tự trải nghiệm, bạn sẽ thường hay chịu trả giá ở ít nhất là một trong ba khía cạnh của cuộc sống: sức khỏe, tình yêu, tiền tài.
        - Đường đời của không ít người Số 7 thoạt nhìn có vẻ khá buồn, đặc biệt là khi bạn chưa nhận ra những mất mát trở ngại trên đường đời mà bạn đang phải trải qua rốt cục là những bài học đời mà bạn phải học cho trôi, mà nếu không chịu nhìn ra những kinh nghiệm trước là những bài học, cuộc đời sẽ tái đi tái lại những vấn đề tương tự như vậy, với mức độ tổn thất mất mát ngày càng trầm trọng hơn… cho đến khi nào bạn chịu nhìn ra, và chịu học kinh nghiệm từ bài này, thì thử thách đó mới dừng lại.
        
<strong>• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 7:</strong>
        - Putin – Tổng thống Nga
        - Elon Musk – Giám đốc điều hành tập đoàn Tesla
        - Một vài người khác: Andy Warhol, Nữ hoàng Elizabeth, Công nương Diana, George Bush Sr, Julia Roberts, Johnny Depp, Marilyn Monroe, Leonardo DiCaprio
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 8 - NGƯỜI ĐIỀU HÀNH',
        relationship: `
<strong>• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:</strong>
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
        
<strong>• TÌNH DUYÊN:</strong>
        - Kinh doanh và tình yêu là những lĩnh vực rất khác nhau, tính cách của bạn có thể khiến bạn gặp một số khó khăn trong chuyện tình cảm. Bạn biết cách 'chơi trò chơi' trong việc nỗ lực để vươn lên ở lĩnh vực kinh doanh, nhưng bạn có thể phải học các quy tắc khi nói đến hẹn hò và các mối quan hệ. 
        - Bạn thường tạo ra sự an toàn về tài chính và có được cơ hội trải nghiệm những điều tốt đẹp hơn trong cuộc sống. Điều này có thể sẽ hấp dẫn đối với người bạn đời của bạn. 
        - Người có thẩm quyền thực sự là những người hạnh phúc nhưng bạn thực sự không giỏi về tình yêu và tình cảm. Sự trung thực và thẳng thắn của bạn là một công cụ hữu ích trong kinh doanh, nhưng nó có thể cần được giảm bớt một chút trong tình yêu và hôn nhân. Bạn giữ sự trung thực của mình, nhưng hãy cố gắng truyền tải thông điệp của sự thật một cách tế nhị. Đôi khi bạn có thể phải lùi lại một bước và nhớ rằng bạn đang giao tiếp trong một mối quan hệ lãng mạn chứ không cần phải là mối quan hệ kinh doanh.
        - Bạn gần như chắc chắn sẽ mặc quần tây một cách lịch sự trong những lần đầu hẹn họ! Nếu đối phương cũng muốn kiểm soát, bạn sẽ phải rất vật lộn với việc nhận lệnh và để người khác sai bảo. Bạn muốn có một người sẵn sàng phục tùng, tôn trọng sự độc lập của bạn hoặc ít nhất là một người luôn vui vẻ để bạn được làm chủ và quyết định.
        - Tính cạnh tranh tự nhiên, bạn có thể cần phải học rằng các mối quan hệ dựa trên sự công bằng. Đối phương của bạn cũng có nguyện vọng và ý tưởng cần được tôn trọng.
        - Sự khuyến khích hoặc hỗ trợ từ đối phương có thể làm bạn cảm thấy xa lạ, hoặc thậm chí khiến bạn cảm thấy dễ bị tổn thương.
        - Mặc dù cam kết của bạn đối với mục tiêu của bạn vô cùng đáng ngưỡng mộ, nhưng điều này đôi khi có thể phải trả giá bằng mối quan hệ của chính bạn. Bạn có thể không suy nghĩ kỹ về việc hủy bỏ một buổi hẹn hò vào buổi tối để làm việc muộn và hoàn thành công việc cho kịp thời hạn. Nếu bạn áp dụng kỹ năng giải quyết vấn đề của mình để khắc phục điều này, bạn có thể làm cho một mối quan hệ được cải thiện.
        
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `Năng lượng của số 8 có tính dương và rất mạnh, đây là con số biểu tượng của tiền bạc, quyền lực, vật chất, thế sự. Do đó, một khi đã làm gì, bạn sẽ thường làm lớn. 

<strong>• ĐIỂM MẠNH CỦA BẠN:</strong>
        - Bạn thường thể hiện năng lực điều hành và bao quát tốt. Bạn sẽ quan tâm tới kết quả nhiều hơn là chi tiết. 
        - Bạn có cái nhìn thực tiễn trong cuộc sống, nghiêm túc, kỷ luật trong công việc. 
        - Bạn quan tâm nhiều tới tiền bạc, quyền lực và vật chất. Với bạn, nhất định phải có sự đảm bảo về tài chính, và khi có được thu nhập tài chính tốt, bạn mới thấy an toàn.
        - Về mặt gia đình, bạn là người coi trọng sự chung thủy.
        - Đường đời 8 có thể thành công lớn, nhưng không bằng phẳng. Bạn cần sự kiên trì, và chú ý về sức khỏe. Bạn cũng nên tránh việc tiêu tiền hoang phí. 
        - Bạn được sinh ra với khả năng lãnh đạo bẩm sinh. Bạn là người rất tham vọng và luôn hướng tới mục tiêu của mình. Bạn có thể rất vững chắc về kỹ năng tổ chức và có tầm nhìn rộng lớn, điều này sẽ giúp bạn thành công trong kinh doanh, vì vậy bạn có thể trở thành một nhà quản lý doanh nghiệp và lãnh đạo giỏi.
        - Bạn phát triển bằng cách làm việc chăm chỉ, và dễ trở thành một người nghiện công việc hơn bất kì con số nào khác.
        - Bạn thường rất giỏi quản lý tiền bạc và có một tinh thần làm việc có thể giúp bạn trở nên giàu có.
        
<strong>• ĐIỂM YẾU CỦA BẠN:</strong>
        - Lý do để bạn thất bại có thể là sự hay đấu tranh, cãi vã, thiếu thấu hiểu và quan tâm tới nhu cầu và cảm xúc của người khác nên thường vô tình làm tổn thương người khác.
        - Bạn có một nỗi sợ nào đó đối với sự túng thiếu, nghèo đói. Điều đó có thể tạo cho bạn áp lực về việc kiếm tiền. 
        - Bạn có thể ít quan tâm tới gia đình, bởi vì bạn dành nhiều thời gian cho công việc hơn. Điều này có thể tạo ra sự mất cân bằng và làm phát sinh những vấn đề trục trặc. 
        - Là người thẳng thắn, trực tính, bạn có thể hay tranh cãi, lạm quyền và ít để ý đến cảm xúc của người khác. Nhưng mặt khác, bạn cũng là người dễ bị tổn thương.
        - Thêm nữa, bạn dễ rơi vào tình trạng không thực sự quan tâm nhiều đến sức khỏe của mình.
        - Việc theo đuổi lợi ích vật chất này có thể chứa đựng một số cạm bẫy, bao gồm cả khuynh hướng trở nên vô đạo đức, coi thường hoặc vi phạm pháp luật trong khi nỗ lực kiếm tiền, hoặc bỏ bê gia đình và những người thân yêu trong khi làm việc để được trả tiền.
        
        <strong>• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 8:</strong>
        - Sơn Tùng MTP – Chủ tịch tập đoàn MTP Entertainment
        - Một vài người khác: Naomi Campbell, Elizabeth Taylor, Sandra Bullock, Pablo Picasso, Michelangelo, Nelson Mandela
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 9 – NGƯỜI CHO ĐI',
        relationship: `
<strong>• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:</strong>
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
        
<strong>• TÌNH DUYÊN:</strong>
        - Tình yêu lớn nhất của bạn là ước mơ của mình. Theo đuổi sự nhân đạo có thể quan trọng đối với bạn hơn mối quan hệ cá nhân với người khác. Điều này có thể khiến chuyện tình cảm trở nên rắc rối hơn đối bạn. Nhưng nếu người bạn đời thực sự hiểu bạn, điều đó có thể tạo nên một mối quan hệ thực sự viên mãn.
        - Trong khi bạn dễ dàng thu hút người khác, bạn đôi khi có thể tỏ ra xa cách khi nói đến các mối quan hệ thân thiết. Rốt cuộc, những cảm xúc tự nhiên nảy sinh trong các mối quan hệ thân thiết lại rất phù hợp với bạn. Điều đó nói rằng, nếu được chọn đúng bạn đời, bạn rất lãng mạn, và thậm chí là ngây thơ trong tình yêu. Một mặt, bạn sẽ thường đòi hỏi nhiều tự do để theo đuổi những sở thích bên ngoài mối quan hệ và rất khó thay đổi điều đó. Mặt khác, bạn có thể có xu hướng 'giải cứu' bạn đời của mình và trong quá trình này, bạn phải hy sinh bản thân.
        - Bạn có thể cần học cách sắp xếp các mối quan hệ và trách nhiệm của bạn mà không đánh mất bản thân.
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `<strong>• ĐIỂM MẠNH CỦA BẠN:</strong>
        - Bạn là một nhà lãnh đạo bẩm sinh. Điểm đặc biệt nhất ở bạn là tạo dựng được lòng tin từ người khác một cách tự nhiên. Khi tiếp xúc với bạn, nhất là nếu bạn có tư duy tích cực, bạn sẽ cực kỳ tỏa sáng. Điều đó có thể làm cho mọi người chú ý đến bạn, tin tưởng bạn hoặc thậm chí là đi theo bạn. 
        - Bạn cũng là người có tinh thần nhân đạo cao độ. Bạn thường nghĩ cho người khác, cho công chúng và cho cộng đồng lớn. Bạn nghĩ cho nhân loại. Bạn có thể thấu hiểu được nỗi đau, khó khăn của những người nghèo  khó, khuyết tật, neo đơn, những người yếu thế. Bạn thường có xu hướng giúp đỡ mọi người, cộng đồng. 
        - Bạn cũng là người có nghị lực và ý chí mạnh mẽ. Bạn rất dũng cảm. Miễn là có ích lợi cho mọi người thì bạn không e sợ bất cứ việc gì. Thậm chí, bạn có thể hy sinh lợi ích của bản thân để làm những việc như vậy. 
        - Trong công việc, bạn chăm chỉ và yêu cầu cao với bản thân. Bạn như một tấm gương cho người khác noi theo vậy. 
        - Bạn có khí chất cao hơn người khác. Bạn thu hút được nhiều người. Và nhiều khi, trong cuộc sống, bạn gặp phải sự ghen ghét, đố kị, gặp phải những người mà họ thường ngầm không ưa bạn. Có người có thể cho rằng bạn là người kiêu ngạo hoặc trịch thượng. Nhưng bạn có thể không để tâm. Bạn không muốn đối đầu với bất cứ ai. 
        - Khi gặp vấn đề, bạn thường có xu hướng tự giải quyết. Bạn không thích người khác can thiệp hoặc xử lý giúp bạn. 
        - Bạn đầy hoài bão và ước vọng, tuy nhiên thường có khuynh hướng đi vào tổng thể chứ ít khi nào tập trung vào chi tiết.
        - Bạn rất thân thiện và mọi người thích bạn. Sự hào phóng của bạn là không có giới hạn, và bạn cho đi tiền bạc, thời gian và năng lượng một cách không tính toán. Mục tiêu cuối cùng của bạn là hướng tới một thế giới tốt đẹp hơn.
        
<strong>• ĐIỂM YẾU CỦA BẠN:</strong>
        - Bạn có thể dễ bị những vấn đề tiêu cực trong quá khứ đeo bám và ảnh hưởng. Nếu có những vấn đề như vậy, bạn hãy bước qua bằng cách tập trung vào hiện tại, làm cho tốt. Bạn cũng nên tập những môn vận động, tập thiền, yoga để thư giãn tinh thần và nâng cao trí tuệ. Bước qua quá khứ và có tinh thần tích cực sẽ giúp bạn tạo ra sự thay đổi lớn đối với thế giới xung quanh. 
        - Vì bạn khá hào phóng nên bạn có thể thấy rằng tài chính của bạn không ở trong tình trạng tốt nhất. Bạn dễ mang tiền tặng cho những người cần đến, hơn là ý thức tiết kiệm để dành lại cho chính mình, và điều này cũng dễ làm cho người thân (đặc biệt là bạn đời) của bạn nổi giận. 
        - Nếu bạn không theo đuổi con đường của bạn mà thay vào đó là theo đuổi lợi ích vật chất, bạn có thể cảm thấy cực kì không hài lòng với chính mình.
        - Thật thà là một đức tính tự nhiên của bạn, đến mức bạn dễ tưởng rằng ai cũng sẽ thật thà như mình. Điều này thường dẫn đến cảm giác thất vọng trầm trọng ở một số người Số 9, thậm chí có một số trường hợp trở nên hoài nghi về tình người, nghi ngờ không biết mình thật thà như vậy có bị… ngu quá không.
        
<strong>• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 9:</strong>
        - Đại Tướng Võ Nguyên Giáp
        - Phan Thị Bích Hằng – Nhà ngoại cảm
        - Mỹ Tâm – Ca sĩ
        - Một vài người khác: Mẹ Teresa, Mahatma Gandhi, Jim Carrey, Morgan Freeman, Kurt Cobain, Elvis Presley
        
        Bên cạnh số đường đời, sẽ còn hơn 20 chỉ số quan trọng khác phân tích chi tiết về bạn, đặc biệt bạn xem kĩ các chỉ số ở biểu đồ kim tự tháp để xem các năm đỉnh cao trong cuộc đời và biểu đồ sức mạnh để xem các giá trị năng lực mà bạn có cùng với các chỉ số khác kèm lời khuyên tương ứng để kích hoạt được các điểm mạnh của bạn giúp bạn phát triển, gặp nhiều thuận lợi trong cuộc sống.`,
    },
    {
        type: 'SỐ 10 - THỦ LĨNH',
        relationship: `
<strong>• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:</strong>
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
        
<strong>• TÌNH DUYÊN:</strong>
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
        
<strong>• ĐIỂM MẠNH CỦA BẠN:</strong>
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
        
<strong>• ĐIỂM YẾU CỦA BẠN:</strong>
        - Người khác cảm thấy khó làm việc với bạn, nhưng nếu làm việc được, họ sẽ nhanh chóng trưởng thành nhờ bạn. 
        - Thường điều gì bạn yêu cầu người khác làm, bạn sẽ luôn là người làm trước nên đôi khi ôm đồm nhiều việc. 
        - Nếu trong công việc mà không đạt được mục tiêu, bạn thường đổ lỗi cho bản thân. Ngay cả khi kết quả công việc được mọi người đánh giá là tốt, bạn vẫn có thể cảm thấy chưa thỏa mãn, vì chưa được như mục tiêu ban đầu đề ra.
        - Với năng lượng đặc biệt, có những khi bạn trở nên độc đoán, ích kỷ và lấn át người khác. 
        - Bạn cũng có thể trở nên cáu kỉnh, giận dữ hoặc nổi loạn nếu bị ai đó công kích chỉ trích, chê bai. 
        - Bạn có thể tha thứ cho ai đó làm việc mà mắc lỗi, nhưng sẽ không tha thứ cho người phản bội. Khi đó, bạn có thể trở nên rất khắc nghiệt.
        
<strong>• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 10:</strong>
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
        relationship: `
<strong>• MỐI QUAN HỆ NÓI CHUNG TRONG CUỘC SỐNG:</strong>
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
        
<strong>• TÌNH DUYÊN:</strong>
        - Số 11 là một phiên bản tăng cường của số 2, có nghĩa là bạn đồng cảm và nhạy cảm với những người trong cuộc sống của bạn giống như những người có đường đời số 2. Bạn là những người giao tiếp, lắng nghe tốt và luôn phấn đấu để có được sự hòa hợp trong mọi môi trường. Điều bất lợi là năng lực tâm linh làm bạn có thể bận tâm đến các cõi khác và quên đi mối quan hệ với những người ở đây trên trái đất.
        - Bạn là một người hòa bình và sẵn sàng thỏa hiệp trong một mối quan hệ, và bạn coi trọng sự đồng hành. Điều này khiến bạn trở thành một người bạn đồng hành tuyệt vời với bạn đời.
        - Vì đường đời số 11 nhạy cảm tâm linh và trực giác cao nhất trong tất cả các số đường đời, nên việc đáp ứng nhu cầu của bạn đời là điều đương nhiên. Bạn cũng vô cùng chung thủy. Sự cam kết và lòng trung thành rất quan trọng đối với bạn, và các mối quan hệ của bạn thể hiện nhiều yếu tố tinh thần.
        - Bạn là người giàu cảm xúc và đôi khi dễ bị lo lắng và trầm cảm. Bạn có thể được hưởng lợi từ một người bạn đời tính tình ổn định có thể khơi dậy ngọn lửa tình cảm bằng một chút đồng cảm. 
        - Bạn là người yêu thương và tốt bụng, nhưng cũng cần không gian riêng và có tính cách độc lập mạnh mẽ, vì vậy những người bạn đời "nhạt" quá sẽ khiến bạn kiệt sức. Nhưng khi bạn đời làm tổn thương bạn (cố ý hoặc vô tình), bạn có thể phản ứng bằng một sức mạnh cảm xúc sâu sắc.
        
        Cách tiếp cận tình cảm của bạn cũng sẽ bị ảnh hưởng bởi các con số khác trong biểu đồ. Chỉ số Linh hồn, chỉ số Nhân Cách, chỉ số Thái độ và Chỉ số Sứ mệnh sẽ thay đổi cách cuộc sống tình cảm của bạn diễn ra. Hãy đọc tiếp tới các chỉ số này.`,
        content: `<strong>• ĐIỂM MẠNH CỦA BẠN:</strong>
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
        
<strong>• ĐIỂM YẾU CỦA BẠN:</strong>
        - Thách thức đối với bạn là không để bản thân bị áp đảo bởi chính những món quà của bạn. Nỗi sợ hãi và ám ảnh sẽ là nhược điểm của con số này. Đôi khi bạn cũng có thể trông như thiếu quyết đoán, không thực tế, thần kinh và thất thường.
        - Quá yêu thương sẽ làm cho bạn dễ bị kiệt sức, bởi bạn thường xuyên phải giải quyết, tư vấn, níu kéo để tránh sự đổ vỡ nào đó. Bạn sợ bị từ chối, bởi với bạn, đó là biểu hiện của sự rạn nứt. 
        - Quá cảm xúc nên bạn có thể sẽ không kiểm soát được tâm trạng, nhất là khi bị khủng hoảng.
        - Bạn làm việc và đối xử tốt với người khác. Bạn có khả năng kết hôn sớm, cam kết và trung thành cho cả cuộc đời. Tuy vậy, thật không may là bạn thường bị quyến rũ bởi những hấp lực mang nặng tính đời trần (hỉ nộ ái ố, yêu yêu hận hận…) để rồi xa lìa mục đích cao cả của mình.
        - Bạn cũng dễ suy sụp và mất phương hướng nếu không tự hiểu được chính mình. Bạn có nhiều tham vọng hướng tới những điều lớn lao và khả năng để đạt được chúng, nhưng nếu không thể tự tin thì những mong muốn đó sẽ thất bại.
        - Có những sự khác biệt cực kỳ to lớn giữa cách sống của những người Số 11 nào biết sống tích cực và vận dụng được sức mạnh tâm linh vượt trội của mình vào giúp ích cuộc sống, và những người Số 11 đầy tiêu cực với đời sống có vẻ đầy khó khăn và nhạt nhòa.
        
<strong>• NHỮNG NGƯỜI NỔI TIẾNG CÓ SỐ 11/2:</strong>
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
<strong>MỤC ĐÍCH SỐNG</strong>
Người Số 3 sẽ có mục đích sống liên quan tới các khả năng tư duy. Đối với họ, sự thấu hiếu cuộc sống và sự phát triển cả tính của riêng họ có liên quan mật thiết đến các vấn đề tư duy mang tính trực giác (intuitiveness) hoặc vận dụng thực tế (practical involvement). Chính vì vậy, những đóng góp của họ trong cuộc sống được thể hiện thông qua việc tư duy, lên kế hoạch, phân tích, ghi nhớ, vv...
<strong>ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU</strong>
Người Số 3 một khi đã tập trung suy nghĩ thì người khác khó mà theo kịp tốc độ tư duy của họ. 
Bên cạnh đó, tư duy nhạy bén của họ đôi khi còn được thể hiện thành tính hài hước, một kiểu sức hút bẩm sinh khiến họ có khả năng trở thành những người bạn đồng hành thông minh và hoạt bát. Họ thể hiện bản thân thông qua kênh tư duy một cách thuận lợi hơn nhiều so với qua cảm xúc hoặc hành động cụ thể.
<strong>ĐẶC ĐIỂM NỔI BẬT</strong>
Đối với những người Số 3, đầu óc nhanh nhạy, tính hài hước và tư duy linh hoạt nói chung giúp họ dễ dàng thành công trong công việc. 
Họ có thể trở thành linh hồn của buổi tiệc hoặc là người sáng giá trong công ty, nhưng ưu điểm này không phải lúc nào cùng được thể hiện khi họ ở nhà. 
Họ có thể rất thoải mái và thu hút trong các tương tác xã hội, nhưng với những người có sự gắn bó lâu dài thì họ thường phê bình gay gắt.
Điều này có thể khiến những người thân thiết với họ cảm thấy mệt mỏi, đặc biệt là người bạn đời. Người Số 3 thường thích giúp đỡ người khác, miễn là những người đó có khả năng tư duy tương đồng và sẵn sàng hợp tác với họ.
<strong>KHUYNH HƯỚNG CẦN KHẮC PHỤC</strong>
Khi sống kém tích cực, người Số 3 dễ để lại ấn tượng là người trịch thượng, gia trưởng hoặc thích chỉ đạo người khác.
Điều này có thể gây ra khá nhiều hiểu lầm và sự bất mãn. Bởi sở hữu khả năng tư duy nhạy bén nên nhiều người Số 3 dễ thiếu kiên nhẫn và kém bao dung với những người kém nhanh nhạy hơn, cũng như thường phê bình "khả năng tư duy hạn chế" của những người này. 
Nếu không ý thức kiểm soát tốt, bản tính hay xét nét, bình phẩm của những người Số 3 sẽ dễ bị đem ra áp dụng trong gia dình, dẫn đến những cuộc hôn nhân tan vỡ. 
Trong vài trường hợp, những lời chỉ trích thường xuyên này có thể gây áp lực nặng nề cho người bạn đời của họ đến mức khiến những người này... bị tổn thọ.
Người Số 3 nên học cách phát triển khả năng cảm nhận cảm xúc của người khác.
Khi nhận ra rằng những trải nghiệm trong cuộc sống luôn mang đến những bài học quý giá, họ sẽ có sự tiến bộ đáng kể trong hành trình phát triển bản thân.
<strong>HƯỚNG PHÁT TRIỂN</strong>
Việc học được cách chung sống hòa hợp với người khác cũng giúp họ có được những bước tiến dài. 
Từ đó, cuộc sống của họ sẽ tích cực hơn nhiều. Họ rất cần hạn chế phê bình hoặc chỉ trích người khác, thay vào đó là vận dụng sự kiên cường vốn có của bản thân để mang lại nguồn năng lượng tươi mới, nhìn nhận những trải nghiệm kém vui như cơ hội phát triển. 
Người Số 3 cũng nhận được lợi ích tuyệt vời nếu mở rộng phương thức biểu đạt của mình bằng cách vận dụng trực giác và trở nên thực tế hơn trong các hoạt động hàng ngày, đặc biệt là tại nhà.
<strong>NGHỀ NGHIỆP PHÙ HỢP</strong>
Người Số 3 rất thích hợp với những công việc liên quan đến trí não, bao gồm các lĩnh vực học thuật, đặc biệt là khoa học, kế toán, quản trị kinh doanh, lập trình, phân tích hệ thống, v.v... 
Họ cũng có thể là những nhà nghiên cứu khoa học giỏi giang, cũng như có năng khiếu trong các ngành nghệ thuật như viết lách, diễn xuất hoặc trở thành chuyên gia phê bình các bộ môn nghệ thuật.
<strong>TÓM LẠI</strong>
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
<strong>MỤC ĐÍCH SỐNG</strong>
Diễn đạt cảm xúc một cách trọn vẹn nhất (thông qua các hình thức như viết, vẽ, điêu khắc, ... ) là một trong những điều mà con người muốn đạt tới. 
Tuy nhiên, điều này chỉ có thể đạt được khi con người có đủ tự do để thể hiện. Đó chính là mục tiêu mà người Số 5 tìm kiếm để phát triển, như một cách để thấu hiểu các tầng cảm xúc của họ. Tuy vậy, rất ít người Số 5 nhận ra điều này. Thường thì họ chỉ cảm nhận được khát vọng tự do mà không hề nhìn ra nguyên nhân thật sự ẩn đằng sau, đó là định hướng một cách tích cực cuộc đời của họ bằng những phương tiện biểu đạt này.
<strong>ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU</strong>
Phần lớn những người Số 5 cảm thấy khó làm việc theo giờ giấc quy định nghiêm ngặt. Vì vậy, họ thường oán trách cấp trên của mình và dễ mắc những căn bệnh liên đến áp lực công việc. 
Người Số 5 nên tìm kiếm những công việc cho phép họ không cần phải chịu sự chỉ đạo trực tiếp từ ai, chẳng hạn như công việc nhân viên bán hàng lưu động, nhà văn hoặc họa sĩ làm việc tự do. Bằng cách này, họ sẽ có được sự tự do mà họ cần để phát triển phương thức biểu đạt bản thân phù hợp nhất. Nhiều người trong nhóm này rất say mê các cuộc phiêu lưu, thường đi du lịch hoặc thường xuyên thay đổi công việc. Việc du lịch đây đó hay những trải nghiệm công việc khác nhau này cũng trở thành phương tiện quý giá giúp họ nâng cao trí tuệ hay ý thức. Một khía cạnh khác mà những người Số 5 rất dễ thành công là lĩnh vực giải trí, nơi họ được tự do thể hiện cảm xúc của mình, và nhiều người đã cực kỳ thành công như những diễn viên hay nghệ sĩ chuyên nghiệp. 
Nhưng bất kể họ làm công việc gì thì tình yêu con người của họ vẫn là động lực cơ bản nhất.
<strong>ĐẶC ĐIỂM NỔI BẬT</strong>
Người Số 5 thường có trực giác rất tốt, với cảm xúc sâu sắc và tư duy nghệ thuật mạnh mẽ. 
Họ hạnh phúc nhất khi được tự do thể hiện bản thân. Khi có được sự tự do đó, họ sống động và tràn đầy năng lượng, nhưng một khi bị gò bó, họ trở nên ủ dột và tâm trạng lên xuống thất thường, thậm chí là lãnh đạm. Tuy vậy, họ là những người tâm tính tốt, luôn quyết tâm sống một cuộc sống vui vẻ và giúp người khác cũng có được cuộc sống như vậy, đây là bản tính giàu lòng trắc ẩn của người Số 5.
<strong>KHUYNH HƯỚNG CẦN KHẮC PHỤC</strong>
Vì rất yêu thích tự do, đôi khi người Số 5 có thể chấp nhận những việc làm không "chính thống” để không phải làm việc theo giờ giấc gò bó. 
Vì thế họ không nhận ra ý nghĩa của sự gò bó đó là để rèn luyện tính kiên nhẫn, tinh thần hợp tác và khả năng tự kiềm chế. 
Nhiều bạn trẻ Số 5 khi mới đi làm đã không chịu nổi việc phải báo cáo với sếp và lựa chọn... bỏ việc. Khi không tập trung chú ý vào chi tiết, người Số 5 dễ mắc sai lầm trong công việc, và vấn đề có thể trở nên trầm trọng hơn bởi những lo âu và băn khoăn khi họ bị trói buộc trong môi trường làm việc chính thống. Hậu quả là họ sẽ dễ bị stress hay trầm cảm nếu không kiểm soát cảm xúc tốt. 
Dành thời gian tiếp xúc với thiên nhiên có thể giúp họ lấy lại sự bình tĩnh trong những lúc như thế này.
<strong>HƯỚNG PHÁT TRIỂN</strong>
Người tìm kiếm tự do thường muốn được quay về những ngày tháng vô lo hồn nhiên thuở ban sơ. Nhưng chắc chắn là chúng ta không thể sống mãi trong quá khứ, mà phải học hỏi từ những trải nghiệm đã qua để phát triển bản thân. 
Vì thế, khi hoàn cảnh hiện tại có vẻ đang trói buộc chúng ta, thay vì cảm thấy bức bối, hãy tập trung suy nghĩ về những bài học ta sẽ thu được qua trải nghiệm này. 
Như vậy chúng ta sẽ có thể vượt qua cảm giác khó chịu vì sự trói buộc đó và tiến lên phía trước. Để làm được điều này, người Số 5 cần tăng cường sự chú ý vào các chi tiết, trở nên thực tế hơn, nhìn cuộc đời với lăng kính rộng mở hơn. Họ sớm cũng sẽ nhận ra rằng các cơ hội đi đó đi đây sẽ giúp họ phát triển khả năng quan sát, và là phương tiện thiết yếu để họ thêm hiểu biết về cuộc sống và phát triển trí tuệ. Khi người Số 5 trưởng thành hơn, họ sẽ tự biết điều chỉnh bản thân để thích ứng với các nguyên tắc của tập thể, qua đó củng cố cảm giác an toàn cho bản thân mình, đặc biệt là trong các mối quan hệ. 
Trên hết, hãy nhớ rằng người Số 5 lấy tình yêu thương làm động lực cho mọi hành động, dù họ có thể hiện điều đó bằng cách nào đi nữa.
<strong>NGHỀ NGHIỆP PHÙ HỢP</strong>
Người Số 5 có ba đặc trưng: yêu tự do, thích diễn xuất và có khiếu nghệ thuật. 
Vì thế nghề nghiệp nào có yếu tố diễn xuất hoặc khả năng diễn đạt chuyên nghiệp sẽ rất hợp với người Số 5, bất kể đó là diễn viên chuyên nghiệp hay các ngành nghề nào khác cần kỹ năng này, như bán hàng, chính trị... Họ cũng có thể làm việc trong ngành du lịch, khách sạn, hoặc làm nhà văn, họa sĩ, nhà thiết kế, chủ doanh nghiệp, nhà phát minh sáng chế, nhân viên xã hội ...
<strong>TÓM LẠI</strong>
Bản chất của người Số 5 là đầy yêu thương và yêu tự do
, có óc nghệ thuật, máu phiêu lưu và cảm xúc lên xuống thất thường dao động từ tâm trạng rất vui vẻ khi được tự do sang ủ dột ra mặt khi cảm thấy bị “đè nén ”. 
Về cơ bản, họ là những người thuộc nhóm “cảm nhận”.
    `,
    },
    {
        content: `
Số này là con số chủ đạo của sự Cực đoan hoặc quá mức. Khi chọn lối sống tích cực người Số 6 có khả năng sáng tạo mạnh mẽ, nhưng nếu chọn lối sống tiêu cực thì họ lại dễ trở thành những người lo lắng triền miên. 
Số 6 nằm giữa trục ngang trí não và ở đầu Mũi tên Ý chí, điều này khiến người Số 6 có tiềm năng phi thường trong việc cảm nhận và sáng tạo một cách xuất sắc, đáng tiếc là họ thường hiếm khi đạt được thành công bền vững trong cuộc sống vì khuynh hướng lo lắng luôn hiện hữu và tự biến bản thân mất năng lượng. Ngày sinh có số tổng là 15, 24, 33, 42 sẽ tạo thành Con số chủ đạo 6.
<strong>MỤC ĐÍCH SỐNG</strong>
Chúng ta sẽ thấy nhiều người Số 6 ưu tú trong rất nhiều lĩnh vực sáng tạo, từ ở nhà cho đến đấu trường quốc tế. 
Họ mang một trọng trách lớn trong cuộc sống, thứ đòi hỏi ở họ sự tận tâm sâu sắc. Tất cả những người Số 6 đều có khả năng thiên phú này nhưng họ thường bị gánh nặng trách nhiệm làm cho bất an và lo lắng, từ đó mắc kẹt trong áp lực căng thẳng. Họ cần học cách làm chủ những tình huống mà óc sáng tạo và thiên hướng quan tâm đưa họ đến, chứ không nên để tình huống kiểm soát mình. 
Nói cách khác họ cần học cách bảo vệ bản thân để có thể thể hiện được tính sáng tạo tuyệt vời của mình mà không bị thao túng bởi hoạt cảnh.
<strong>ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU</strong>
Người Số 6 rất xuất sắc trong các lĩnh vực cần đến lòng tin, sự sáng tạo cũng như tính tận tụy của họ. 
Một số người chọn thể hiện tài năng của mình trước công chúng, tỏa sáng trên sân khấu hay màn ảnh bằng khả năng diễn xuất hoặc ca hát. Một số khác thì chọn thể hiện bản chất đầy yêu thương của họ một cách riêng tư hơn ở nhà, với gia đình của mình. 
Sâu trong bản chất của người Số 6 luôn là tình yêu sâu sắc dành cho con người và một bản tính lương thiện mà họ luôn muốn thể hiện cũng như vui vẻ duy trì.
<strong>ĐẶC ĐIỂM NỔI BẬT</strong>
Khả năng sáng tạo xuất chúng của người Số 6 thường tìm mọi cơ hội để được thể hiện, dù là ở Công sở, nơi vui chơi hay trong gia đình. 
Với những người Số 6, nhà thường là nơi quan trọng nhất, họ dành rất nhiều thời gian cho mái ấm của mình, và nơi này luôn có tầm quan trọng thứ hai - chỉ xếp sau những người thân yêu đang sống cùng họ dưới mái nhà đó. Vì là những người yêu thương con người, Số 6 rất ghét sự bất công. 
Họ là những người giàu lòng trắc ấn, vị tha và bao dung - những người phải học cách bảo vệ bản thân để lòng tốt của mình không bị lợi dụng.
<strong>KHUYNH HƯỚNG CẦN KHẮC PHỤC</strong>
Nếu khả năng sáng tạo của người Số 6 bị giới hạn trong phạm vì gia đình, bị đề cao thái quá thì nó có thể gây ra những nỗi lo lắng tiêu cực và mong muốn sở hữu lệch lạc. 
Trong hoàn cảnh này, người Số 6 có thể thường xuyên có những nội bất an và sợ hãi, thứ khiến cho sự phát triển cá nhân của họ bị giới hạn và cuộc sống của họ sẽ bị trì trệ. Về lâu dài, nhưng nỗi lo lắng thường trực này trở thành những chướng ngại tâm lý nhẹ, đi kèm với nỗi cô độc buồn bã và mâu thuẫn hoàn toàn với tất cả những gì mà người Số 6 đang khao khát tạo ra. Và khi nỗi lo lắng hay tính tiêu cực bủa vây cuộc sống của người số 6, họ có xu hướng than vãn và đổ lỗi.
<strong>HƯỚNG PHÁT TRIỂN</strong>
Người Số 6 cần nhận thức được rằng cái nhìn tích cực về cuộc sống là yếu tố quan trọng hàng đầu để họ phát triển tính sáng tạo, cho dù hoàn cảnh thực tế có giới hạn đến mức nào đi nữa. 
Họ cũng cần hiểu rằng sự quan tâm luôn đồng hành với sự tự do biểu đạt chứ không nên đè nén. Vì vậy, họ nên tránh tâm lý sở hữu, mà nên truyền tải sự quan tâm đã đến với mọi người xung quanh, đặc biệt là những người thân thương của mình, bằng nhiều cách sáng tạo hơn. Đa số người Số 6 đều khao khát sự bình yên và mong muốn có được nó bằng mọi gia, nhưng điều này đôi khi được thể hiện như sự cam chịu và do đó trở thành nhược điểm của họ, khiến họ có xu hướng tự hủy hoại bản thân và không tìm được niềm vui sống. Nếu học được cách trở nên Kiên quyết, biết lúc nào nên nhượng bộ, lúc nào không người số 6 sẽ cảm thấy hạnh phúc hơn và có thể tự bảo vệ bản thân khỏi sự lợi dụng của những người vô tâm (trong đó đôi khi có cả người thân trong gia đình )
Bên cạnh đó, việc phát triển khả năng phân biệt cái gì quan trọng và cái gì không, nắm rõ sự chừng mực và thể hiện lòng trắc ẩn một cách khôn ngoan sẽ giúp họ nâng cao năng lực sáng tạo, giúp họ có thể tạo ra những điều không ai ngờ tới.
<strong>NGHỀ NGHIỆP PHÙ HỢP</strong>
Cho dù người Số 6 lựa chọn ngành nghề nào, công việc của họ phải có yếu tố sáng tạo trực tiếp tác động và làm cho cuộc sống con người trở nên tốt đẹp hơn.
Họ có thể là thành viên ưu tú trong các tổ chức nhân đạo, hoặc là những người chữa lành, họa sĩ, nhà thiết kế tài ba. Họ có tài năng đáng ghi nhận trong lĩnh vực diễn xuất hay ca hát mang màu sắc kịch tính - thậm chí một số người còn đi quá xa đến mức khiến cuộc sống của mình trở nên kịch tính một cách khoa trương.
<strong>TÓM LẠI</strong>
Người Số 6 là những người có đầu óc sáng tạo, thích quan tâm, công bằng, không ích kỷ, bao dung và yêu gia đình, 
nhưng hay có khuynh hướng bị lo lắng và bất an thái quá.
    `,
    },
    {
        content: `
Dưới ảnh hưởng của Số 7 trong vai trò Con số chủ đạo, người mang số này sẽ triệt để trải nghiệm các bài học mà cuộc đời mang lại, thông qua quá trình khổ học và hoạt động giảng dạy hoặc chia sẻ với người khác. 
Cả hai phương diện này đều thể hiện ở khía cạnh trải nghiệm thể chất, vì số 7 nằm ở điểm giao nhau giữa Mũi tên Thực tế và Mũi tên Hoạt động. Những người có ngày sinh cộng lại thành số tổng 16, 25, 34, 43 sẽ Có Con số chủ đạo là số 7.
<strong>MỤC ĐÍCH SỐNG</strong>
Có vẻ những ai sinh ra dưới con số chủ đạo 7 chắc chắn sẽ được “ rèn giũa ” qua vòng đời này để có được một bước tiến dài về phía trước. 
Đặc điểm nổi bật của Số 7 là khả năng học hỏi gần như vô hạn từ những trải nghiệm thực tế của bản thân, qua đó lĩnh hội được những giá trị tốt đẹp để sau đó có thể đem ra chỉ dạy hoặc chia sẻ cho nhiều người khác. Những trải nghiệm thực tế này còn mang đến cho họ những triết lý sâu sắc về cuộc đời.
<strong>ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU</strong>
Một trong những đặc điểm độc đáo ở những người Số 7 là họ thường học hỏi " theo cách riêng của mình ". 
Không dùng lại ở việc tiếp nhận các chỉ dẫn tối thiểu từ người khác, người Số 7 khát khao được học bằng cách tự trải nghiệm. 
Chính vì điều này, người Số 7 thường phải hy sinh ít nhất một trong ba khía cạnh của cuộc sống: sức khỏe, tình yêu, tiền tài.
Thông qua những bài học này, họ trở thành những người có vốn sống và trải nghiệm sâu sắc để truyền tải lại cho người khác và giúp ích cho đời. 
<strong>ĐẶC ĐIỂM NỔI BẬT</strong>
Người Số 7 thuộc nhóm những người năng động nhất trong cuộc sống.
Tuy không phải lúc nào họ cũng ý thức được điều này, nhưng người Số 7 thường có khát khao tự trải nghiệm, và những trải nghiệm này sẽ trở thành những kinh nghiệm nhớ đời khi (thật không may) chúng đòi hỏi họ phải hy sinh điều gì đó trong cuộc sống của mình. Đường đời của không ít người Số 7 thoạt nhìn có vẻ khá buồn, đặc biệt là khi họ chưa nhận ra những khó khăn thử thách hoặc tổn thất mà mình gặp phải là những bài học, 
và những bài học này sẽ lặp đi lặp lại với mức độ mất mát ngày càng trầm trọng hơn cho đến khi họ nhận ra.
Tuy vậy, thông qua sự tổn thất về sức khỏe, tình yêu hay tiền tài này, người Số 7 sẽ học được một triết lý sống sâu xa, và chính sự thấu hiểu quý giá ấy sẽ giúp họ tránh được những bài học nặng nề hơn khi ý thức của họ ngày càng phát triển. 
Người Số 7 Có một loại nghị lực đặc biệt giúp họ bẩm sinh đã tự tin vào bản thân, mà chính sự tự tin này sẽ giúp họ ứng phó với các trải nghiệm sống của mình mà không hề than vãn, 
Họ hiểu rằng " mọi chuyện xảy ra đều có lý do của nó ".
<strong>KHUYNH HƯỚNG CẦN KHẮC PHỤC</strong>
Sự Cố chấp của họ trong việc tự trải nghiệm, đến mức có thể từ chối nhận những lời chỉ dạy hay khuyên nhủ từ người khác, khiến người Số 7 thường có khuynh hướng nổi loạn. Khi từ chối nhận lời khuyên, họ dễ có thái độ thích dạy người khác chứ không thích được người khác chỉ dạy. 
Điều này khiến họ phải trả giá nhiều trong cuộc sống. 
Vì họ không học được những bài học kinh nghiệm mà người khác từng trải qua và khuyên họ nên tránh. Thế nhưng họ lại thích người khác nghe theo lời khuyên của mình, và khá bực mình khi nhận được lời khuyên y như vậy từ người khác.  ***  khi họ trưởng thành và hành động khôn ngoan hơn, cuộc sống cá nhân và sự nghiệp của họ mới trở nên tốt đẹp hơn ***
<strong>HƯỚNG PHÁT TRIỂN</strong>
Người Số 7 thường không giỏi nhìn người và cũng không am hiểu kinh doanh, nên họ cần cực kỳ thận trọng trong hoạt động kinh doanh và đầu tư. 
Nhưng những nhược điểm này có thể được khắc phục nếu họ có tinh thần kỷ luật hơn - nếu họ có thể kỷ luật bản thân tốt như những gì họ đòi hỏi nơi người khác. 
Việc chịu khó nghe lời khuyên và sống có kỷ luật cũng sẽ giúp họ phát triển trực giác và giúp cải thiện chất lượng cuộc sống của bản thân họ, cũng như của những người mà họ thương yêu. 
Thông thường, người Số 7 học khá chậm, vì họ có nhu cầu tự trải nghiệm mọi thứ. Với những gia đình có con mang Số 7, các cha mẹ cần lưu ý đặc biệt đến đặc điểm này và cho phép trẻ học theo tốc độ tiếp thu tự nhiên của chúng. Vì không ít bậc phụ huynh coi thành tích học tập của con ở trường là “ thể diện của gia đình ”, chứ không nhận ra giá trị lớn nhất của việc học là mang lại lợi ích cho bản thân con. Nghiên cứu trên nhiều trẻ em Số 7 cho thấy các em có thể tiếp thu việc học một cách nhanh chóng cho đến khoảng năm lên bảy tuổi. Giai đoạn bảy năm sau đó, tốc độ học tập của các em chậm hơn đáng kể, nhưng vào khoảng mười bốn tuổi trở đi, tốc độ tiếp thu của các em lại được tăng lên nếu các em có ý thức tự kỷ luật bản thân. Trẻ em Số 7 hiếm khi trở thành những học giả xuất sắc.
<strong>NGHỀ NGHIỆP PHÙ HỢP</strong>
Với tính đáng tin cậy, và mong mỏi có được sự tin tưởng từ người khác, người Số 7 rất thích hợp với các hoạt động có liên quan đến ngành luật. 
Người Số 7 cũng thường tìm thấy trong đội ngũ những người làm công tác giảng dạy và trong các lĩnh vực nhân văn, như giáo viên, thành viên các đoàn thể, nhà khoa học, nhà triết học... Bên cạnh đó, họ cũng là những người có khả năng thiên phú trong việc sử dụng các công cụ sắc bén, từ đó thôi thúc họ lựa chọn các ngành nghề như bác sĩ phẫu thuật, thợ mộc, thợ tiện ...
<strong>TÓM LẠI</strong>
Người Số 7 có nhu cầu học hỏi thông qua các trải nghiệm của bản thân, nhưng không thích tuân thủ các nguyên tắc bên ngoài. 
Họ rất tự tin, nhân văn và sâu sắc. Cuộc đời của họ thường trải qua nhiều tổn thất và hy sinh mà qua đó, họ sẽ học được nhiều bài học để đời.
    `,
    },
    {
        content: `
Những người mang con số chủ đạo 8 là những người coi sự độc lập là một trong những yếu tố quan trọng hàng đầu trong cuộc sống. 
Họ có thể là những người khá phức tạp, sở hữu cá tính mạnh, sức mạnh và trí tuệ hơn người. Sức mạnh của họ đến từ vị trí số 8, Con số của trí tuệ ở Trục ngang Tinh thần, đồng thời là con số nằm trung tâm Mũi tên Hoạt động. Con số chủ đạo 8 thuộc về những người có số tổng ngày sinh là 17, 26, 35, 44.
<strong>MỤC ĐÍCH SỐNG</strong>
Một trong những khía cạnh rất quan trọng của tình yêu thương là khả năng bày tỏ. 
Một trong những thành tố thiết yếu để xây dựng mối quan hệ tốt đẹp giữa người và người chính là khả năng biểu đạt lòng biết ơn và sự trân trọng đến nhau. Nhưng đây chính là hai phương diện mà những người Số 8 cảm thấy khó thể hiện nhất. 
Do đó, mục đích Sống quan trọng mà họ cần đạt được trong đời chính là vượt qua những giới hạn này. Khi phát triển theo hướng đó, họ sẽ nhận ra việc cải thiện chất lượng các mối quan hệ sẽ giúp họ củng cố sự tin tưởng mà người khác dành cho họ, chứ không hề cản trở tính độc lập của họ. Điều này lại tiếp tục tạo nên cảm giác an toàn cho cá nhân họ, nâng cao chất lượng cuộc sống cùng với sự phát triển về trí tuệ, một phần cực kỳ cần thiết đối với những người Số 8 .
<strong>ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU</strong>
Tuy có vẻ không khớp với bản tính tự nhiên của mình, nhưng người Số 8 thường có lòng trắc ẩn và sự cảm thông vô hạn đối với những người kém may mắn trong cuộc sống. Nhưng thái độ này không phải lúc nào cũng được duy trì lâu, vì họ thường mất kiên nhẫn với những ai trở nên phụ thuộc vào họ - họ cảm thấy điều này làm ảnh hưởng tới sự độc lập của mình. 
Họ có khả năng thành công rực rỡ trong kinh doanh, đặc biệt là khi họ không để cảm xúc làm lạc hướng các quyết định làm ăn của mình. 
Người Số 8 là những người rất chú trọng chuyện ăn mặc và tự hào về ngoại hình - không chỉ của bản thân mình mà cả những người họ yêu thương. 
Họ là con người của cảm xúc, nhưng thường che giấu sự nhạy cảm của mình cho đến khi họ đủ trưởng thành để bày tỏ.
<strong>ĐẶC ĐIỂM NỔI BẬT</strong>
Người Số 8 thường toát ra vẻ độc lập, tự tin và là chỗ dựa đáng tin cậy cho người khác.
Những tố chất này kết hợp hài hòa với nhau, trang bị cho người Số 8 khả năng gánh vác các vị trí quản lý cấp cao và những trọng trách mà đa số họ có thể hoàn thành xuất sắc. Nhưng ưu điểm độc lập quá mạnh mẽ của họ có thể được biểu đạt thành một thái độ tương đối lạnh nhạt, đôi khi trở thành thờ ơ, khi họ ở nhà. Họ không cố tình như vậy, mà điều này bắt nguồn từ đặc điểm “khó mở lời, khó bày tỏ” của họ, một đặc điểm thường sẽ biến mất khi họ trưởng thành. 
Lòng trắc ẩn của họ dành cho những tạo vật yếu ớt - như người già, người bệnh, trẻ em và động vật... chính là một biểu hiện của việc tìm kiếm cách bày tỏ tình cảm, cảm xúc của mình, và nó sẽ sớm chuyển vẻ lạnh nhạt của họ thành biểu hiện ấm áp của tình yêu thương. 
Người Số 8 cũng sở hữu sự khôn ngoan bẩm sinh mà từ đó họ sẽ học cách hoàn thiện bản thân khi họ trưởng thành.
<strong>KHUYNH HƯỚNG CẦN KHẮC PHỤC</strong>
Tính độc lập mạnh mẽ của họ quá rõ nét đến mức người Số 8 thường cảm thấy khó chịu khi có ai đó (mà họ cho là) muốn can thiệp vào các kế hoạch của họ. 
Vì thế, để hướng dẫn những người này, cần phải có sự tinh tế và khéo léo vô cùng. Trên thực tế, người Số 8 cần rất nhiều sự hướng dẫn, đặc biệt là trong vấn đề nuôi dạy con trẻ - vì họ dễ rơi vào một trong hai thái cực: hoặc quá nuông chìu, hoặc quá nghiêm khắc với con cái. Họ thường gặp trở ngại trong các mối quan hệ tình cảm, có xu hướng tự dựng lên các rào cản và thu cảm xúc mình lại đằng sau bức tường rào đó. 
khi trưởng thành hơn, họ sẽ nhận ra họ có thể hạnh phúc hơn nhiều nếu có thể bày tỏ tình cảm của mình cho đối phương biết.
<strong>HƯỚNG PHÁT TRIỂN</strong>
Người Số 8 cần nỗ lực khắc phục điểm yếu trong vấn đề bày tỏ tình cảm với những người mà họ quan tâm. 
Quan trọng nhất chính là họ cần nhận ra điểm yếu này, vì đa số những người Số 8 không thấy rằng mình không biết cách biểu lộ tình cảm. Khi họ học được cách bày tỏ cảm xúc, mức độ hạnh phúc và cảm giác an toàn của họ cũng được cải thiện nhiều. 
Bày tỏ lòng biết ơn cũng là một cách để họ tập biểu đạt các tầng cảm xúc sâu hơn.
Sự phát triển này kéo theo sự phát triển của trí tuệ, điều mà từ trước đến nay họ chỉ có khuynh hướng biểu đạt trong Công việc hoặc khi cần cho người khác lời khuyên mà thôi. 
Sự khôn ngoan và mức độ trưởng thành của họ sẽ được nâng lên thông qua việc du lịch đó đây, một hoạt động mà họ rất thích .
Người Số 8 thường được tìm thấy ở các vị trí lãnh đạo của các doanh nghiệp lớn, với khả năng điều hành xuất sắc. 
Họ có khả năng am hiểu các vấn đề về tài chính và thường có hứng thú với ngành ngân hàng, chứng khoán... Họ cũng có thể trở thành chuyên gia lữ hành, thuyền trưởng hoặc phi công giáo viên và y tá phục vụ người lớn tuổi hoặc trẻ em, làm việc với các loài động vật hoặc trong các tổ chức nhân đạo. Bên cạnh đó, nhờ khả năng che giấu cảm xúc tự nhiên của mình, họ có thể rất thành công trong nghề diễn xuất chuyên nghiệp.
<strong>TÓM LẠI</strong>
Người Số 8 thường rất độc lập, cực kỳ đáng tin cậy, tự tin, ít chịu bày tỏ tình cảm, hợp với các hoạt động thương mại, kinh doanh và rất quan tâm đến người bệnh và người kém may mắn.
        `,
    },
    {
        content: `
So với những nhóm khác, người mang con số chủ đạo 9 sẽ nhân gấp ba lần ba yếu tố: hoài bão, trách nhiệm và lý tưởng. 
Họ luôn đặt yếu tố con người lên hàng đầu. Người Số 9 có số tổng của ngày sinh là 18, 27, 36 hoặc 45 
<strong>MỤC ĐÍCH SỐNG</strong>
Người Số 9 luôn tự cảm thấy mình đầy trách nhiệm. 
Họ phù hợp với nghệ thuật và các lĩnh vực nhân văn hơn là với khoa học hay thương mại. Rất nhiều người đi đầu trong lĩnh vực văn hóa hoặc xuất sắc trong ngành diễn xuất có Con số chủ đạo là Số 9 - họ đều có lý tưởng cống hiến cháy bỏng cho sự nghiệp và cho cuộc sống, mặc dù các ý tưởng của họ không phải lúc nào cũng ứng dụng được. 
Vì thế, một điều quan trọng trong mục đích sống của họ chính là học cách biến lý tưởng thành thực tế.
<strong>ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU</strong>
Người Số 9 có mong muốn được phục vụ và nâng cao đời sống con người. 
Họ đầy hoài bão nhưng thường có khuynh hướng quan tâm tổng thể hơn là tập trung vào chi tiết. Do đó, họ phù hợp với những lĩnh vực không liên đến thương mại, vì họ thường kém về tính toán hay quản lý tài chính, đặc biệt là quản lý tài chính cá nhân. Họ rất có máu nghệ sĩ, và nếu có theo nghề diễn xuất thì họ thường chọn hướng nghiêm túc của chính kịch chứ ít khi đi theo hướng hài kịch hay các trường phái biểu diễn thoải mái khác.
<strong>ĐẶC ĐIỂM NỔI BẬT</strong>
Có hoài bão, có trách nhiệm, có lý tưởng là ba giá trị nổi bật trong con đường tiến hóa của người Số 9. 
Nhưng trên hết, trách nhiệm với bản thân mới là điểm nhấn đặc biệt của họ. Trung thực là phẩm chất tự nhiên của họ, đến mức họ mặc định rằng ai cũng sở hữu đức tính này như mình. Điều đó thường gây ra sự thất vọng nặng nề cho một số người Số 9, thậm chí có một số trường hợp trở nên hoài nghi con người và nghi ngờ cả giá trị của bản chất trung thực mà mình sở hữu. 
Người Số 9 có xu hướng hỗ trợ tiền bạc cho những người đang gặp khó khăn hơn là dành dụm cho chính mình, và điều này thường khiến người thân (đặc biệt là người bạn đời) của họ nổi giận. Họ có những suy nghĩ tuyệt đối tốt đẹp cuộc sống, về lý tưởng, về con người và động lực sống. Mặc dù những ý tưởng này không phải lúc nào cũng thực tế, nhưng những người Số 9 sẽ luôn nỗ lực thực hiện chúng - đây là một phần bản chất của họ.
<strong>KHUYNH HƯỚNG CẦN KHẮC PHỤC</strong>
Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. 
Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thời đạo đức giả. 
Khi hoài bão của họ biến thành tham vọng, chúng có thể đàn áp và hủy hoại những lý tưởng tốt đẹp họ từng nuôi dưỡng từ đó phát triển thái độ tự xem mình là trung tâm. Điều này sẽ sớm tạo thành tính cách thô lỗ và thái độ ưa chỉ trích - thứ mà những người xung quanh họ sẽ cảm thấy khó chấp nhận được cũng là thứ có thể khiến họ suy đồi khi mãi chạy theo vật chất.
<strong>HƯỚNG PHÁT TRIỂN</strong>
Tính lý tưởng hóa của người Số 9 khiến họ không giỏi nhìn người. 
Nhưng một khi nhận ra mặt hạn chế này, người Số 9 hoàn toàn có thể học và sử dụng các công cụ hỗ trợ để giúp họ hiểu về con người hơn. Điều này sẽ giúp họ tìm hiểu về con người ở nhiều phương diện trước khi kết luận, chứ không chỉ dựa trên phần tích chủ quan của bản thân. Việc tìm hiểu các công cụ đánh giá con người cũng sẽ giúp người Số 9 phát triển trục giác và trí tuệ. 
Hai yếu tố quan trọng khác mà người Số 9 cần tập trung phát triển là tính kiên nhẫn và sự kiên định. 
Bên cạnh đó, người Số 9 thường hay tỏ ra nghiêm túc quá mức họ cần học cách vui cười và thưởng thức những trò dí dỏm nhiều hơn để mang lại sự cân bằng cho cuộc sống của mình.
<strong>NGHỀ NGHIỆP PHÙ HỢP</strong>
Người Số 9 thường vui vẻ nhất khi được làm việc trong các môi trường tôn giáo, tổ chức an sinh xã hội, viện giáo dục (trong vai trò quản lý hành chính hơn là giáo viên) , cơ quan nghiên cứu (bao gồm nghiên cứu công nghệ thông tin) , giải quyết các vấn đề tội phạm, trị liệu và tư vấn ...
<strong>TÓM LẠI</strong>
Người Số 9 là những người đặc biệt có trách nhiệm, cực kỳ trung thực, có lý tưởng, đầy hoài bão, luôn hướng về yếu tố nhân văn và rất nghiêm túc trong cuộc sống. Họ không giỏi quản lý tiền bạc, cũng khó tiết kiệm được tiền.
        `,
    },
    {
        content: `
Từ số 2 đến số 9, chúng ta đã làm quen với những cách thể hiện đa dạng của từng con số chủ đạo ở mỗi cá nhân, phụ thuộc vào mức độ nhận thức của mỗi người. 
Tuy nhiên, chưa Có Con số chủ đạo nào có biên độ dao động lớn và rộng trong cách biểu đạt như Số 10.
Khi sống tích cực, có thể họ là một người rất quảng giao, được yêu thích trong xã hội, nhưng khi sống tiêu cực, họ có thể là những cá nhân lạc lối, bất an và lao đao trên đường đời. 
Họ là những người dễ thích nghi nhất. Họ có tiềm năng để thành công rực rỡ hoặc cũng có thể sống mòn trong sự tầm thường. Những người có số tổng ngày sinh là 19, 28, 37, 46 sẽ Có Con số chủ đạo là 10.
<strong>MỤC ĐÍCH SỐNG</strong>
Cuộc sống của những người Số 10 có hai đặc điểm nổi trội: khả năng thích nghi và khả năng thay đổi.
Tính linh hoạt bẩm sinh của họ có thể hỗ trợ người khác rất nhiều trong việc thích ứng với các thay đổi trong cuộc sống. Khi cuộc sống trở nên phức tạp hơn, khả năng thích nghi càng có vai trò thiết yếu hơn, và chúng ta sẽ thấy người Số 10 có mặt trong rất nhiều ngành nghề hoặc tình huống khác nhau. Họ có sự can đảm bẩm sinh, thứ thường đưa họ đến với các lĩnh vực tiên phong mà nhiều người không bao giờ dám nghĩ đến.
<strong>ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU</strong>
Nếu chúng ta tìm kiếm một người có thể cùng ta tận hưởng những thú vui nhẹ nhàng trong cuộc sống, không ai phù hợp hơn những người Số 10. 
Họ phát huy tốt nhất khi được tự do trải nghiệm sự hứng khởi tức thời. Nhưng khi bị áp lực hoặc phải kìm nén cảm xúc, họ thường chán nản mà không rõ nguyên nhân. Điều này khiến họ khó chịu và thường biểu đạt qua thái độ tức giận hoặc dễ nổi nóng. Một bộ phận người Số 10 sẽ rất thẳng thắn và tự tin - tinh thần lạc quan vô hạn giúp họ đạt được những bước tiến đáng kể trong cuộc sống. 
Đây là biểu đạt tự nhiên của Số 10, vì họ có sự kết hợp đầy quyền lực của “ cái tôi ” (số 1) và chiều sâu tinh thần vô hạn của số 0.
<strong>ĐẶC ĐIỂM NỔI BẬT</strong>
Số 10 là một số mang tính thực tế, mang theo sức mạnh của sự linh hoạt và tính thích ứng rất được yêu thích, 
(do đó người Số 10 có được cá tính linh hoạt và thích nghi tốt) . Sự vui vẻ của họ nhìn chung rất dễ lan tỏa, nhưng vì không muốn can dự quá sâu vào các vấn đề của người khác nên họ thường thấy khó hiểu vì sao người khác lại không vui vẻ và thích nghi giống họ. Phần lớn những người Số 10 ít dấn thân vào cuộc sống mà thường hài lòng với những niềm vui nhất thời, đặc biệt là trong thể thao - hoặc là họ chủ động tham gia, hoặc chỉ làm người xem. Ngược lại, một số ít những người Số 10 có nhận thức về các giá trị sâu sắc hơn sẽ thành công và dẫn đầu trong lĩnh vực của mình, vì họ có được sự kiên cường vượt khó. Nhìn chung, người Sổ 10 thường toát ra sự tự tin vào bản thân, thể hiện qua phong thái hòa nhã và lịch thiệp của mình, bất kể họ ăn mặc thế nào. 
Họ không mấy thành công trong việc giải quyết các vấn đề về tâm lý của bản thân hay của những người khác, không phải là những nhà tư vấn giỏi hay người bạn sâu sắc. 
Nhìn chung, họ có máu nghệ thuật - sự tinh tế tuyệt vời của họ có thể khiến họ trở thành những nghệ sĩ biểu diễn nhạc cụ tài hoa hay các chuyên gia thẩm định chất lượng.
<strong>KHUYNH HƯỚNG CẦN KHẮC PHỤC</strong>
Sự tự tin ở những người Số 10 đôi khi có thể khiến họ muốn áp chế người khác, nhưng họ thường làm vậy một cách thiếu khôn ngoan và dẫn đến sự bất hòa nghiêm trọng.
Khuynh hướng này có thể tránh được thông qua ý thức kiểm soát “ cái tôi ” , hướng đến chiều sâu tâm hồn và tránh lối sống hời hợt. Việc chủ động tham gia các hoạt động mang tính xây dựng và sáng tạo cũng sẽ giúp người Số 10 tiếp nhận thêm những quan điểm sâu sắc hơn và biết rằng nếu một cánh cửa đóng lại thì họ chỉ cần tìm những cánh cửa mở khác. 
Họ cũng cần tránh trở nên biếng nhác và kỳ vọng cuộc sống sẽ dễ dàng, đồng thời họ phải nhận ra tầm quan trọng của việc phát triển tinh thần kỷ luật bản thân để vượt qua sự u sầu và cảm giác bất an.
<strong>HƯỚNG PHÁT TRIỂN</strong>
Người Số 10 có xu hướng dễ lạc lối trong sự thoải mái và chấp nhận cuộc sống tầm thường. 
Để trở nên vượt trội, họ cần nhìn ra tiềm năng của mình - tính linh hoạt và khả năng thích nghi cực kỳ mạnh mẽ. Trong cuộc sống, người Số 10 cần các hoạt động như hành thiền để giữ cân bằng cho bản thân và kết nối với nguồn sức mạnh bên trong. Họ cũng học cách tiết chế trong cuộc sống (sự cân bằng) và phát triển nhận thức về thế giới xung quanh (sự uyên bác) , thái độ hài hòa, lòng trắc ẩn và tôn trọng cuộc sống. 
Bên cạnh đó, họ cần học cách phân biệt cái gì quan trọng và cái gì không quan trọng, nếu không họ có thể lãng phí thời gian để theo đuổi những điều không đáng.
<strong>NGHỀ NGHIỆP PHÙ HỢP</strong>
Người Số 10 sẽ hợp với lĩnh vực thể thao hoặc giải trí, thiết kế và trang trí nội thất, ngành dệt may và thực phẩm. 
Họ cũng có thể là những chuyên gia bán hàng tài năng (vì thường được yêu mến) , chính trị gia, nhà gây quỹ từ thiện, nhà điều hành doanh nghiệp, giám đốc kinh doanh, chuyên gia quy hoạch đô thị, kiến trúc sư, chuyên gia địa ốc ...
<strong>TÓM LẠI</strong>
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
<strong>ĐIỀU KIỆN PHÁT TRIỂN TỐI ƯU</strong>
Vì yêu thích sự tinh tế, vẻ đẹp và giá trị văn hóa của cuộc sống, người Số 11 hướng đến những môi trường chứa đựng những giá trị đó, vì nó cho họ được tự do thể hiện nét đẹp vốn có của tâm hồn và đời sống tâm linh. Đời sống vật chất, với nhiều người trong số họ, là quá nhiều đòi hỏi và không thú vị. 
Nhưng người Số 11 cần học cách cân bằng đời sống vật chất với những lý tưởng mà họ tìm kiếm bên trong để nhận ra rằng những giá trị tinh thần cao quý nhất cũng không có bao nhiêu giá trị nếu chúng không được vận dụng để cải thiện chất lượng cuộc sống. 
Chẳng có biểu đạt nào đẹp đẽ hơn việc dốc mình phụng sự cho cuộc sống theo khả năng của mỗi người.
Có những sự khác biệt cực kỳ to lớn giữa lối sống của những người Số 11 biết sống tích cực và phát huy sức mạnh tâm linh vượt trội của họ, và những người Số 11 đầy tiêu cực với cuộc sống lao đao và nhạt nhòa.
Khi theo đuổi các vấn đề và mục tiêu về tinh thần hay tâm linh, người Số 11 thể hiện họ có nguyên tắc đạo đức vững vàng, trực giác chính xác và động lực rất rõ ràng. Trong cuộc sống hằng ngày, họ thường là những người nhạy cảm, đáng tin cậy, trung thực và công tâm, với tình yêu sâu đậm đối với gia đình và bạn bè, cũng như lòng trắc ẩn đối với cuộc sống.
<strong>KHUYNH HƯỚNG CẦN KHẮC PHỤC</strong>
Khi đời sống vật chất ngày càng phát triển và nhiều “ hoa thơm cỏ lạ " xuất hiện dọc đường, khả năng người ta bị cám dỗ và từ bỏ lối sống chính trực là rất dễ xảy ra. Cuộc sống vốn dĩ đơn giản và hài hòa hơn những gì người ta đang cảm thấy. Sự phức tạp mà người ta cảm nhận trong đời sống hằng ngày khiến họ hoang mang và lệch khỏi con đường của mình, để lại cho họ cảm giác cay đắng và hằn học, biểu hiện qua thái độ thờ ơ lạnh nhạt với những người khác và với công việc. Khi chuyện này xảy ra với người Số 11 họ trở nên lạc lối và lãnh đạm, tìm kiếm sự khuây khỏa trong thế giới vật chất mà họ đã sa vào. 
Họ phải giữ ý thức và sự tỉnh thức cao độ để quyết tâm đi trên con đường của mình, mà điều này sẽ không quá khó khăn nếu họ chịu lưu tâm đến trực giác nhạy bén của mình.
<strong>HƯỚNG PHÁT TRIỂN</strong>
Đối với người Số 11, các lĩnh vực tinh thần không thể bị trộn lẫn với các giá trị thương mại. 
Do đó, môi trường thích hợp nhất cho họ chính là những ngành nghề có thể tạo điều kiện cho họ phát triển nhận thức về tâm linh và vận dụng sự nhạy bén của mình. Đồng thời, với bản tính hào phóng và mong muốn có thể đáp ứng nhu cầu của những người xung quanh, người Số 11 thường có nhu cầu tài chính cao hơn những người khác. 
Họ không chỉ cần học biểu đạt những giá trị tinh thần hay tâm linh của mình một cách thực tế nhất, mà còn phải học cách lắng nghe trực giác (vốn rất trung thực, sáng suốt) chứ không bị thúc đẩy bởi những thèm muốn đơn thuần (ví dụ như mong muốn được thừa nhận, được tưởng thưởng, được trả ơn... ).  
Bên cạnh đó, họ cũng cần nâng cao khả năng phán đoán, cân bằng cuộc sống và nghị lực bản thân. Họ có xu hướng từ chối sự hỗ trợ của người khác, nhưng để phát triển tốt nhất, họ cần học cách đón nhận nhiều hơn và nhận ra những lợi ích mà mình có được từ sự giúp đỡ lẫn nhau.
<strong>NGHỀ NGHIỆP PHÙ HỢP</strong>
Những nghề nghiệp mà người Số 11 thường thấy phù hợp bao gồm nhà giáo dục, nhà hoạt động xã hội, các thủ lĩnh tôn giáo và huấn luyện viên phát triển cá nhân. 
Hoặc họ cũng có thể tham gia giảng dạy các bộ môn văn hóa và biểu diễn chuyên nghiệp. Trực giác nhạy bén cũng có thể giúp họ trở thành các nhà thiết kế hay nhà phát minh tài ba.
<strong>TÓM LẠI</strong>
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

const NGAYSINH = [
    ``,
    `
Dành cho những người chào đời vào ngày 1 của tháng. Theo tác phẩm The Complete Book of Numerology, những người sinh vào ngày đầu tiên của tháng sẽ có các khuynh hướng sau đây:
    <strong>- Luôn cố gắng hết sức khi được làm việc một mình.</strong>
    <strong>- Cần rất nhiều tự do để có thể phát triển một cách trọn vẹn nhất, cũng như để biểu đạt hết bản chất độc đáo của họ.</strong>
Con số chủ đạo sẽ là kim chỉ nam cho thấy bản chất này hướng vào điều gì. Mặt khác, đôi khi họ có khả năng bị cuốn ra khỏi con đường của con số chủ đạo vì mong muốn được làm mọi thứ theo ý mình. Do thích tự nỗ lực và có xu hướng tập trung vào cá nhân, những người này có vẻ tách rời tập thể trong một số thời điểm nào đó. Điều này càng trở nên dễ nhận ra ở những đứa trẻ được sinh ra vào ngày đầu tiên của tháng. Nhưng các bậc cha mẹ không cần quá lo lắng vì điều này không có ảnh hưởng xấu, bọn trẻ chỉ đơn giản là tận hưởng sự riêng tư của chúng mà thôi.
    `,
    `
Dành cho những người chào đời vào ngày 2 và ngày 20 của tháng. Những người sinh vào ngày 2 hay 20 của tháng (không tính ngày 11, vì 11 tự nó đã có sổ riêng) sẽ có thêm những xu hướng và đặc điểm sau:
    <strong>- Được tăng cường độ nhạy của trực giác, nhờ vậy sẽ có được lợi thế lớn trong việc đưa ra các quyết định.</strong>
    <strong>- Rất thích được làm việc, hợp tác với những người vững vàng, vui vẻ, có sự bình yên trong tâm hồn.</strong>
    <strong>- Rất thích những hình thức giải trí nhẹ nhàng, đặc biệt là những thể loại hài hước, thích làm khán giả hơn là người biểu diễn.</strong>
    <strong>- Là người đáng tin cậy, hữu dụng nhiệt tình giúp đỡ người khác.</strong>
Nhìn chung, họ là những người sống nhẹ nhàng, chuộng những gì tự nhiên, không “ tâm kế ” thâm sâu.
    `,
    `
Những người chào đời vào ngày 3, 12, 21 hoặc 30 của tháng sẽ có Con số ngày sinh là 3 và thường có thêm các khuynh hướng sau đây:
    <strong>- Những người Có Con số ngày sinh 3 thường thích chủ động đem lại sự giải trí vui vẻ cho người khác, dù là trong gia đình, ở chỗ làm hay trên sân khấu. Đa số đều thích làm việc theo dự án, theo chế độ làm việc bán thời gian, vì họ thường có thêm nhiều thú vui hay chí hướng lớn cần theo đuổi (chí hướng lớn hay thú vui đó là gì thì còn tùy vào Con số chủ đạo).</strong>
    <strong>- Rất yêu thích sự hài hước, đặc biệt là hài châm biếm.</strong>
    <strong>- Là những người hướng ngoại rất rõ ràng, thông minh, năng động, lúc nào cũng có sẵn câu trả lời cho các vấn để có thể được hỏi.</strong>
Tuy nhiên, những người này cần lưu ý rằng bản thân có thể có xu hướng chỉ trích những người có vẻ ù lì hơn mình, thay vì cố gắng hiểu rằng mỗi cá nhân có những xu hướng khác nhau. Họ cần nhớ rõ điểm này để kiềm chế thỏi hay chê bai, thứ dễ gây ra tranh cãi hoặc làm tổn thương cả hai bên. Thay vào đó, hãy tận dụng óc hài hước nhẹ nhàng để “ chỉ điểm ” cho người khác biết những gì cần điều chỉnh, nếu bạn thật sự nghi người ta cần sự giúp đỡ này.
    `,
    `
Những người có ngày sinh là ngày 4, 13 hoặc 31 của tháng sẽ có Con số ngày sinh là 4 và có các khuynh hướng sau đây:
    <strong>- Có tính thực tế và năng lực để diễn đạt bản thân qua sự khéo léo của tay chân, như hoạt động nhảy múa chẳng hạn.</strong>
    <strong>- Nếu họ có Con số chủ đạo là số lẻ, thì Con số ngày sinh 4 sẽ giúp họ tạo ra sự cân bằng khi họ chịu tiếp nhận thêm những khía cạnh nghệ thuật hay mang tính triết lý vào cuộc sống.</strong>
    <strong>- Nếu có Con số chủ đạo là số chẵn, họ nên lưu ý để tránh bị thu hút quá mức bởi vật chất, và hãy biết rằng chỉ cần phát huy được tính kiên nhẫn khi thực hiện, tổ chức bất cứ việc gì, họ sẽ đạt được kết quả tốt nhất, bởi vì sự kiên nhẫn gần như đã trở thành một phần bản chất của những người có con số ngày sinh là số 4 (vốn dĩ những việc họ thích và hay làm đều rất cần sự kiên nhẫn, chỉ cần họ ý thức được điều đó thì sự kiên nhẫn cũng dần dần trở thành bản năng trong cuộc sống hằng ngày của họ).</strong>
    `,
    `
Người được sinh vào ngày 5 , 14 hoặc 23 của tháng sẽ có Con số ngày sinh là 5 và có thêm các khuynh hướng sau đây:
    <strong>- Là những người giỏi quan tâm, chăm sóc người khác, giàu tình cảm, giàu lòng trắc ẩn và rất cần được tự do biểu đạt những cảm xúc này ra ngoài.</strong>
    <strong>- Là những người nhạy cảm, nhưng cần sở hữu được sự cân bằng để có thể đạt được thành công và hạnh phúc, miễn là họ đừng sợ bị hiểu lầm. Chính nỗi sợ bị hiểu lầm này có thể dẫn đến sự nhút nhát, ngại ngần, làm cản trở khả năng tự biểu đạt của họ, gây ra xu hướng tự thu mình vào trong để đè nén những xúc cảm tự nhiên.</strong>
Vì vậy, những người này cần tham gia vào càng nhiều hoạt động hay các bài tập ngoài trời càng tốt và cần chọn những người bạn có tính tình vui vẻ, hoạt bát mà chơi (để thêm cho mình năng lượng tích cực), để có thể tự do cười đùa và tận hưởng những niềm vui của cuộc sống.
    `,
    `
Người được sinh ra vào ngày 6 , 15 hoặc 24 của tháng sẽ mang Con số ngày sinh 6 và thường có các khuynh hướng sau đây :
    <strong>- Tuy Con số 6 mang ý nghĩa của sự sáng tạo, nhưng người có Con số ngày sinh là 6 lại thường bị giới hạn trong khuôn khổ gia đình. Điều này đặc biệt đúng với phải nữ, mặc dù nam giới có Con số ngày sinh 6 cũng thích nhà hơn đi ra ngoài, thích làm những việc nho nhỏ có liên đến óc sáng tạo hơn là đi la cà bên ngoài cùng bạn bè. </strong>
    <strong>- Mặt tích cực của Con số ngày sinh 6 là tình yêu thương và chuộng cái đẹp. Người sinh vào những ngày này thường có khả năng làm bừng sáng cả căn nhà hoặc nơi làm việc của họ.</strong>
    <strong>- Tuy nhiên, nếu sống thiếu tích cực, những người này thường dễ lo lắng, có khuynh hướng chuyện bé xé ra to, miễn là họ đừng sợ bị hiểu lầm. Chính nỗi sợ bị hiểu lầm này có thể dẫn đến sự nhút nhát, ngại ngần, làm cản trở khả năng tự biểu đạt của họ, gây ra xu hướng tự thu mình vào trong để đè nén những xúc cảm tự nhiên. Vì vậy, những người này cần tham gia vào càng nhiều hoạt động hay các bài tập ngoài trời càng tốt và cần chọn những người bạn có tính tình vui vẻ, hoạt bát mà chơi (để thêm cho mình năng lượng tích cực) , để có thể tự do cười đùa và tận hưởng những niềm vui của cuộc sống.</strong>
Đối với những người không tự thoát khỏi những tư tưởng hay lối sống tiêu cực, Thầy David đề xuất một phương án: hãy thử “ tìm quên ” những năng lượng tiêu cực này bằng cách tự tìm cho mình những thú vui, sở thích sáng tạo phù hợp, vì hoạt động này sẽ làm con số 6 phát triển mạnh. Một số hoạt động mà những người này có thể cân nhắc: vẽ, làm đồ gốm, thêu thùa, may vá, đan móc, học chơi nhạc cụ...
    `,
    `
Người chào đời vào ngày 7 , 16 hoặc 25 của tháng sẽ có Con số ngày sinh là 7 và thường sẽ có các khuynh hướng sau đây:
    <strong>- Thấu hiểu sâu sắc những bài học cuộc sống thông qua việc tự trải nghiệm, mà trong đó, phần lớn là những bài học về tổn thất, hy sinh. Các tổn thất chủ yếu ảnh hưởng tới túi tiền hơn là sức khỏe hay tình yêu, mặc dù nếu sau bài học tổn thất tiền bạc này mà người có Con số ngày sinh là 7 vẫn không tự rút ra bài học thì sẽ dẫn tới tổn thất ở hai lĩnh vực còn lại .</strong>
    <strong>- Khi trưởng thành hơn về mặt trí tuệ, những người này sẽ cảm thấy thôi thúc muốn chia sẻ những trải nghiệm cuộc sống của mình thông qua việc hướng dẫn người khác theo những cách thiết thực nhất. Nếu làm được điều này, bề dày kinh nghiệm của người có Con số ngày sinh 7 sẽ làm giàu thêm cho chính tâm hồn của họ.</strong>
    `,
    `
Người có ngày sinh rơi vào ngày 8 , 17 hoặc 26 của tháng sẽ có Con số ngày sinh là 8 và có các khuynh hướng sau đây:
    <strong>- Không thích làm việc theo nhóm, cũng không thích thuộc về nhóm nào. Con người thường làm việc theo nhóm để họ có thể được tổ chức, phân công, định hướng. Nhưng điều này đi ngược với sự phát triển cá nhân, vốn là mục đích chính của những người có con số ngày sinh là 8.</strong>
    <strong>- Khi trưởng thành và phát triển ý thức cá nhân, họ sẽ nhận ra một nhu cầu ngày càng tăng, đó là nhu cầu được diễn đạt độc lập cảm xúc, cảm giác và cả trực giác của mình. Sự độc lập cần thiết này là nền tảng cho mọi biểu đạt khác của họ.</strong>
Tuy nhiên, theo Thầy David, những người này hay nhầm sự độc lập này với độc lập về tài chính và một mực hướng tới mục tiêu này. Thay vào đó, họ cần hiểu rằng độc lập tài chính chỉ là một trong những biểu hiện cho sự độc lập của bản thân, vốn bao gồm nhiều giá trị lớn hơn nữa. Nếu họ không hiểu đúng điều này, không có sự thấu hiểu cuộc sống một cách vững vàng thì những thành công tài chính của họ thường rất ngắn ngủi.
    `,
    `
Những người chào đời vào ngày 9 , 18 hoặc 27 của tháng sẽ có Con số ngày sinh là 9 và có các khuynh hướng sau đây:
    <strong>- Là những người đầy trách nhiệm với bản thân và với người khác, được thúc đẩy bởi lý tưởng và ước mơ. Đôi khi họ trở nên nghiêm túc thái quá, nên cần tìm bạn bè là người vui vẻ, thoải mái, tích cực để được hưởng ” tinh thần vui vẻ này.</strong>
    <strong>- Những người này cũng cần học cách tận hưởng niềm vui, tập cười nhiều hơn để có được sự cân bằng thiết yếu cho tinh thần.</strong>
    <strong>- Một số người sẽ bị tham vọng quá mức, đặc biệt nếu Con số chủ đạo của họ cũng là 9. Nếu tham vọng này không được định hướng tốt, nó sẽ dẫn đến sự thất vọng và kéo theo nhiều bất ổn trong đời sống.</strong>
Người có Con số ngày sinh là số 9 nên cẩn thận tránh những cuộc cãi vã nghiêm trọng, bởi tính nghiêm túc quá mức dễ khiến họ trở nên quá quyết liệt và mất khả năng thấu hiểu lý lẽ. Họ nên học diễn đạt các quan điểm khác nhau một cách bình đẳng thay vì áp chế người khác. Những người có Con số ngày sinh 9 còn có thêm chiều sâu của những linh hồn già tức là những người có thể đã trải qua nhiều kiếp sống để học hỏi, tiến bộ.
    `,
]

const DINH1 = [
    ``,
    `
Con số này chỉ được nhìn thấy ở đỉnh của hai Kim tự tháp đầu tiên. Khi sang Kim tự tháp thứ ba và thứ tư, nó sẽ trở thành số 10. Số 1 là con số vô cùng thực tế, báo hiệu giai đoạn của những nỗ lực cá nhân cũng như sự biểu đạt cá nhân. Trong hầu hết các trường hợp, nó cho thấy sự tách rời khỏi những mối quan hệ mà trong đó có sự thiếu hòa hợp, cản trở quá trình phát triển cá nhân của chúng ta, chẳng hạn như một cuộc hôn nhân kém hạnh phúc, quan hệ làm ăn buôn bán không hiệu quả, hoặc những mối dây tình cảm rối rắm đã làm vướng chân chúng ta nhiều năm.
Một số người sẽ chọn cách cố gắng hết sức để tránh các cuộc chia ly này, cố gắng giữ nguyên hiện trạng bằng mọi giá. Mặc dù vậy, họ cũng sẽ nhận ra một vài thay đổi trong bản chất mối quan hệ, bởi vì đến thời điểm này họ đã bắt đầu thể hiện cá tính của mình một cách mạnh mẽ hơn, cũng trở nên rõ ràng hơn trong quan điểm, trong cách biểu đạt ý kiến của mình. Điều đó có nghĩa là từ giai đoạn này trở đi, những mối quan hệ khiến bạn tổn thương mà bạn muốn dứt mãi không được sẽ dứt, còn những mối quan hệ không đứt gãy trong giai đoạn này sẽ chuyển sang một trạng thái mới, dễ chịu hơn.
    `,
    `
Con số này cho thấy một giai đoạn mà trong đó những giá trị tinh thần hoặc tâm linh mạnh hơn bắt đầu hé mở.
Lối sống và những thói quen trong cuộc sống sẽ từ mang màu sắc của trực giác hoặc trở nên giàu cảm xúc hơn. Tuy nhiên, cần lưu ý rằng giá trị tinh thần hoặc tâm linh này sẽ thể hiện dưới dạng tích cực (tức hình thức tăng cường nhận thức một cách tốt đẹp hơn) hay dưới dạng tiêu cực (kiểu phản ứng không tốt, hoặc gây hấn), tùy vào mức độ trưởng thành mà con người đã đạt được đến thời điểm này.
Hiển nhiên khả năng trực giác của một người không thể phát triển nếu họ bị cột chặt vào những phản ứng cảm xúc mang tính bản năng. Đây cũng là giai đoạn chúng ta làm việc rất chăm chỉ và tiến triển khá chậm về mặt vật chất, vì chúng ta không thể có cả hai thứ cùng lúc được. Hãy nhớ rằng mọi việc đều có thời điểm thích hợp của nó, và một trong những ứng dụng quan trọng nhất của Nhân số học là tìm hiểu nhu cầu của bản thân, cũng như cách thức và thời điểm thích hợp để chúng ta xử lý những nhu cầu này. Nếu khăng khăng đi tìm thành tựu vật chất trong giai đoạn ảnh hưởng của Đỉnh cao mang số 2, bạn sẽ chỉ tạo ra sự uất giận, mâu thuẫn và sự tuột dốc năng lượng mà thôi. Hãy kiên nhẫn. Khi cuộc đời gieo cho bạn con số 2 ở một trong những đỉnh Kim tự tháp, bạn cần hiểu rằng thời gian đó nên được tập trung vào việc phát triển tinh thần. Sau đó, ở những đỉnh cao tiếp theo, bạn có thể sẽ được đền bù xứng đáng.
    `,
    `
Con số này cho thấy đây là thời điểm bạn nên chú trọng học hỏi để mở mang trí tuệ. Đây là giai đoạn quan trọng để học hỏi, đánh giá và phân tích. Một số người sẽ cảm thấy thôi thúc muốn đi đó đi đây dưới sóng rung của con số này. Ở giai đoạn này của cuộc đời họ, việc đi đó đi đây không chỉ là du lịch đơn thuần, mà còn là một cách để họ học hỏi và mở mang tầm mắt, mở mang kiến thức . Trong giai đoạn này, hãy để trí não được mở mang theo chiều hướng tích cực. Nếu không, bạn sẽ có nguy cơ trở thành kẻ hay chỉ trích người khác, đòi hỏi, yêu sách, và không có gì ngạc nhiên khi hậu quả là bạn sẽ không được người khác chào đón.
    `,
    `
Con số này báo hiệu sự gia tăng sức mạnh của việc "gieo nhân nào gặt quả nấy" Điều đó có thể được thể hiện theo nhiều cách khác nhau, tùy vào mức độ trưởng thành, Con số chủ đạo và các yếu tố trong Biểu đồ ngày sinh. Đối với những người sẵn sàng làm việc siêng năng chăm chỉ, đây là giai đoạn họ gặt hái thành công nhờ ảnh hưởng của sóng rung của số 4.
Đối với những người cần có thêm kiến thức về việc sử dụng tốt hơn các giác quan của mình để trở nên trưởng thành, và những ai sẵn sàng dấn thân vào những công việc thực tế, thì đây cũng là giai đoạn mà những nỗ lực của họ được tưởng thưởng.
Nhưng đối với những người quá Tham Vọng, hám danh lợi và tham lam thì đây là giai đoạn họ mất nhiều hơn được. Cho dù có nỗ lực nhiều hơn thì họ cũng không có được tiến triển đáng kể, nếu động cơ của họ quá vị kỷ và tư lợi. Điều này có thể gây áp lực nặng nề lên hệ thống thần kinh cũng như tình trạng sức khỏe của họ nói chung, và nó chỉ được cải thiện khi họ nhìn ra và điều chỉnh lại động cơ của mình.
Nên nhớ rõ ràng "gieo nhân nào gặt quả nấy" bao gồm tất cả các khía cạnh trong cuộc sống: Vật chất, Sức khỏe, Tình cảm
Nếu bạn siêng năng chăm chỉ làm việc thì bạn sẽ nhận được thành quả tốt nhất.
Nếu bạn bỏ bê sức khỏe không quan tâm đến mặt thể chất và tinh thần thì đây cũng là lúc mọi thứ tồi tệ, và mặt tình cảm cũng vậy.
    `,
    `
Con số này thường cho thấy giai đoạn đỉnh cao này chủ yếu liên quan tới trạng thái cảm xúc. Nếu đi đúng quỹ đạo phát triển thì tới giai đoạn này, người ta sẽ bắt đầu có sự phát triển tâm linh và thấu hiểu cuộc sống sâu sắc hơn, từ đó mang lại sự tự do cá nhân mạnh mẽ hơn. Trong giai đoạn này, đời sống tinh thần của chúng ta gặp phải nhiều áp lực vượt mức chịu đựng, để tạo điều kiện cho chúng ta mài giũa khả năng kiểm soát cảm xúc cao hơn. Điều này giúp chúng ta giảm các phản ứng mang tính bản năng đối với những con người và tình huống xung quanh.
Kết quả là sự tự do cá nhân của chúng ta được nâng cao, dọn đường cho một tầng nhận thức tâm linh cao hơn. Những người từng lo lắng về sự vững vàng tài chính trong những năm trước đó, giờ đây sẽ có thể bớt âu lo nhờ có cái nhìn cân bằng hơn về nhu cầu thực sự của mình và những tác động từ môi trường.
    `,
    `
Con số này mang đến sự phát triển mạnh mẽ về lực sáng tạo.
Đây là giai đoạn mà các yếu tố cao nhất về mặt tinh thần và trí não hợp lại để hé lộ cho chúng ta thấy vai trò thiết yếu của chúng ta trong kế hoạch vô hạn của tạo hóa. Không phải ai cũng có được nhận thức này, mà chỉ những người trưởng thành hơn, có mức độ tiến hóa cao hơn mới cảm nhận rõ.
Đối với đa số mọi người, những người coi trọng giá trị của đời sống vật chất, đây sẽ là giai đoạn gắn bó mật thiết với gia đình, hoặc nếu họ còn độc thân thì đây là lúc họ khao khát một mái ấm bình yên. Các khuynh hướng lo lắng về mái ấm gia đình hoặc vội vã kết hôn sẽ khiến người ta dễ phạm sai lầm vào lúc này, gây ra nhiều bài học tổn thương khi con người để cho cảm xúc thống trị các mối quan hệ của mình. Sự khôn ngoan và kiên nhẫn sẽ giúp chúng ta tránh được những sai lầm này.
    `,
    `
Con số này có thể đem đến rất nhiều sự thay đổi đáng kinh ngạc trong cuộc sống con người. Đây là giai đoạn mà chúng ta được thôi thúc chia sẻ tất cả những gì chúng ta đã học được từ trước đến giờ. Khi làm vậy, chúng ta sẽ có được sự tiến bộ vô cùng to lớn trong việc tự khám phá những giá trị tiềm ẩn của bản thân, vì không có cách học nào tốt hơn cách học thông qua việc truyền đạt, hướng dẫn người khác. Giai đoạn này mang đậm tính trải nghiệm thực tế, đòi hỏi bạn trải qua khá nhiều bài học đầy thử thách.
Nếu thành công, bạn đương nhiên sẽ đủ vững vàng và có đủ “chất liệu” để hướng dẫn người khác; Còn nếu không đủ trưởng thành để vượt qua được những “bài thi” này, chúng ta sẽ phải mất thời gian ôn lại bài và “thi lại” nhiều lần cho đến khi hiểu rõ và rút ra được bài học từ các thử thách này.
Hầu hết những người đang chịu ảnh hưởng của sóng rung số 7 ở giai đoạn này sẽ có thôi thúc hay cơ duyên để giảng dạy hay truyền đạt một điều gì đó, nhưng không nhất thiết phải là một lĩnh vực học thuật. Thông thường, sự giảng dạy này sẽ liên quan đến sự tiến hóa của con người, như Yoga, các phương pháp trị liệu tự nhiên, các hướng phát triển khả năng nghệ thuật, hoặc nhận thức tâm linh.
    `,
    `
Con số này cho thấy đây là giai đoạn rất có sức bật, với nguồn lực chủ đạo là sức mạnh của sự "độc lập".  Tùy theo Con số chủ đạo của mỗi người mà sức mạnh độc lập này sẽ được phát triển thông qua lĩnh vực nghệ thuật hoặc thương mại. Nếu Có Con số chủ đạo là số chẵn (2, 4, 6, 8, 10, 22/4), bạn có khuynh hướng thành công về mặt tài chính khi hoạt động độc lập. Nếu Có Con số chủ đạo là số lẻ (3, 5, 7, 9, 11), bạn sẽ có khả năng thành công về mặt nghệ thuật hay nhân văn trong khi hoạt động độc lập.
Tuy nhiên, hãy có ý thức sử dụng sức mạnh của sóng rung số 8 một cách tích cực, đừng để sự đấu đá cá nhân hoặc quan điểm hạn hẹp cản trở sự lan tỏa của sóng rung này. Nếu để cho các tác nhân ấy ảnh hưởng, bạn sẽ rơi vào tình trạng xa cách với môi trường xung quanh, một nỗ lực “giãy giụa” để tỏ ra độc lập.
    `,
    `
Con số này mở ra một giai đoạn với những hoạt động mang đậm tính nhân văn. Sóng rung này đem lại những cơ hội đặc biệt để phục vụ nhân loại. Đây cũng là giai đoạn cần vận dụng năng lực trí não để đạt được thành công to lớn nhất, bao gồm năng lực phân tích và đánh giá nhu cầu của người khác, lên kế hoạch cho những bước ngoặt trên con đường sự nghiệp, đánh giá lại những mối quan hệ lâu dài và môi trường xung quanh. Nhiều người sẽ đòi hỏi bạn dành thời gian và năng lượng cho họ trong giai đoạn này.
Một số người trong số đó thực sự cần bạn và đem lại cho bạn cơ hội để thực hiện được sứ mệnh “phục vụ”; trong khi một số khác chỉ đang giả vờ để thu hút sự chú ý của bạn mà thôi. Bạn cần tỉnh táo để phân biệt ai chân thật, ai giả vờ. Những người giả vờ nên được đối xử theo kiểu “nice and ice” - tử tế mà vẫn lạnh lùng khi cần - để có thể thức tỉnh, khả năng phân tích và phân biệt thật - giả của bạn sẽ được kiểm tra và củng cố qua những trải nghiệm này. Và dưới ảnh hưởng của sóng rung giai đoạn này, một số người sẽ cần ở nhà để làm tốt phần việc phục vụ của mình, một số khác sẽ được “điều” đi nơi khác để trải qua những bài học quan trọng cho hành trình phát triển bản thân.
Trong suốt năm thứ nhất của giai đoạn đỉnh cao mang ảnh hưởng của số 9, nhiều thay đổi quan trọng sẽ diễn ra trong cuộc sống của những người đang trải qua giai đoạn này. Nếu sự thay đổi này không liên quan tới những chuyến đi, họ sẽ có khả năng chuyển nhà, đổi công việc hoặc có những mối quan hệ mới. Không chỉ một, mà có thể nhiều thay đổi lớn sẽ cùng lúc xuất hiện, tùy thuộc vào bản chất của những trách nhiệm mà mỗi người cần thực hiện trong quá trình phát triển và trưởng thành của mình.
    `,
]

const DINH2 = [
    ``,
    `
Con số này chỉ được nhìn thấy ở đỉnh của hai Kim tự tháp đầu tiên. Khi sang Kim tự tháp thứ ba và thứ tư, nó sẽ trở thành số 10. Số 1 là con số vô cùng thực tế, báo hiệu giai đoạn của những nỗ lực cá nhân cũng như sự biểu đạt cá nhân. Trong hầu hết các trường hợp, nó cho thấy sự tách rời khỏi những mối quan hệ mà trong đó có sự thiếu hòa hợp, cản trở quá trình phát triển cá nhân của chúng ta, chẳng hạn như một cuộc hôn nhân kém hạnh phúc, quan hệ làm ăn buôn bán không hiệu quả, hoặc những mối dây tình cảm rối rắm đã làm vướng chân chúng ta nhiều năm.
Một số người sẽ chọn cách cố gắng hết sức để tránh các cuộc chia ly này, cố gắng giữ nguyên hiện trạng bằng mọi giá. Mặc dù vậy, họ cũng sẽ nhận ra một vài thay đổi trong bản chất mối quan hệ, bởi vì đến thời điểm này họ đã bắt đầu thể hiện cá tính của mình một cách mạnh mẽ hơn, cũng trở nên rõ ràng hơn trong quan điểm, trong cách biểu đạt ý kiến của mình. Điều đó có nghĩa là từ giai đoạn này trở đi, những mối quan hệ khiến bạn tổn thương mà bạn muốn dứt mãi không được sẽ dứt, còn những mối quan hệ không đứt gãy trong giai đoạn này sẽ chuyển sang một trạng thái mới, dễ chịu hơn.
    `,
    `
Con số này cho thấy một giai đoạn mà trong đó những giá trị tinh thần hoặc tâm linh mạnh hơn bắt đầu hé mở.
Lối sống và những thói quen trong cuộc sống sẽ từ mang màu sắc của trực giác hoặc trở nên giàu cảm xúc hơn. Tuy nhiên, cần lưu ý rằng giá trị tinh thần hoặc tâm linh này sẽ thể hiện dưới dạng tích cực (tức hình thức tăng cường nhận thức một cách tốt đẹp hơn) hay dưới dạng tiêu cực (kiểu phản ứng không tốt, hoặc gây hấn), tùy vào mức độ trưởng thành mà con người đã đạt được đến thời điểm này.
Hiển nhiên khả năng trực giác của một người không thể phát triển nếu họ bị cột chặt vào những phản ứng cảm xúc mang tính bản năng. Đây cũng là giai đoạn chúng ta làm việc rất chăm chỉ và tiến triển khá chậm về mặt vật chất, vì chúng ta không thể có cả hai thứ cùng lúc được. Hãy nhớ rằng mọi việc đều có thời điểm thích hợp của nó, và một trong những ứng dụng quan trọng nhất của Nhân số học là tìm hiểu nhu cầu của bản thân, cũng như cách thức và thời điểm thích hợp để chúng ta xử lý những nhu cầu này. Nếu khăng khăng đi tìm thành tựu vật chất trong giai đoạn ảnh hưởng của Đỉnh cao mang số 2, bạn sẽ chỉ tạo ra sự uất giận, mâu thuẫn và sự tuột dốc năng lượng mà thôi. Hãy kiên nhẫn. Khi cuộc đời gieo cho bạn con số 2 ở một trong những đỉnh Kim tự tháp, bạn cần hiểu rằng thời gian đó nên được tập trung vào việc phát triển tinh thần. Sau đó, ở những đỉnh cao tiếp theo, bạn có thể sẽ được đền bù xứng đáng.
    `,
    `
Con số này cho thấy đây là thời điểm bạn nên chú trọng học hỏi để mở mang trí tuệ. Đây là giai đoạn quan trọng để học hỏi, đánh giá và phân tích. Một số người sẽ cảm thấy thôi thúc muốn đi đó đi đây dưới sóng rung của con số này. Ở giai đoạn này của cuộc đời họ, việc đi đó đi đây không chỉ là du lịch đơn thuần, mà còn là một cách để họ học hỏi và mở mang tầm mắt, mở mang kiến thức . Trong giai đoạn này, hãy để trí não được mở mang theo chiều hướng tích cực. Nếu không, bạn sẽ có nguy cơ trở thành kẻ hay chỉ trích người khác, đòi hỏi, yêu sách, và không có gì ngạc nhiên khi hậu quả là bạn sẽ không được người khác chào đón.
    `,
    `
Con số này báo hiệu sự gia tăng sức mạnh của việc "gieo nhân nào gặt quả nấy" Điều đó có thể được thể hiện theo nhiều cách khác nhau, tùy vào mức độ trưởng thành, Con số chủ đạo và các yếu tố trong Biểu đồ ngày sinh. Đối với những người sẵn sàng làm việc siêng năng chăm chỉ, đây là giai đoạn họ gặt hái thành công nhờ ảnh hưởng của sóng rung của số 4.
Đối với những người cần có thêm kiến thức về việc sử dụng tốt hơn các giác quan của mình để trở nên trưởng thành, và những ai sẵn sàng dấn thân vào những công việc thực tế, thì đây cũng là giai đoạn mà những nỗ lực của họ được tưởng thưởng.
Nhưng đối với những người quá Tham Vọng, hám danh lợi và tham lam thì đây là giai đoạn họ mất nhiều hơn được. Cho dù có nỗ lực nhiều hơn thì họ cũng không có được tiến triển đáng kể, nếu động cơ của họ quá vị kỷ và tư lợi. Điều này có thể gây áp lực nặng nề lên hệ thống thần kinh cũng như tình trạng sức khỏe của họ nói chung, và nó chỉ được cải thiện khi họ nhìn ra và điều chỉnh lại động cơ của mình.
Nên nhớ rõ ràng "gieo nhân nào gặt quả nấy" bao gồm tất cả các khía cạnh trong cuộc sống: Vật chất, Sức khỏe, Tình cảm
Nếu bạn siêng năng chăm chỉ làm việc thì bạn sẽ nhận được thành quả tốt nhất.
Nếu bạn bỏ bê sức khỏe không quan tâm đến mặt thể chất và tinh thần thì đây cũng là lúc mọi thứ tồi tệ, và mặt tình cảm cũng vậy.
    `,
    `
Con số này thường cho thấy giai đoạn đỉnh cao này chủ yếu liên quan tới trạng thái cảm xúc. Nếu đi đúng quỹ đạo phát triển thì tới giai đoạn này, người ta sẽ bắt đầu có sự phát triển tâm linh và thấu hiểu cuộc sống sâu sắc hơn, từ đó mang lại sự tự do cá nhân mạnh mẽ hơn. Trong giai đoạn này, đời sống tinh thần của chúng ta gặp phải nhiều áp lực vượt mức chịu đựng, để tạo điều kiện cho chúng ta mài giũa khả năng kiểm soát cảm xúc cao hơn. Điều này giúp chúng ta giảm các phản ứng mang tính bản năng đối với những con người và tình huống xung quanh.
Kết quả là sự tự do cá nhân của chúng ta được nâng cao, dọn đường cho một tầng nhận thức tâm linh cao hơn. Những người từng lo lắng về sự vững vàng tài chính trong những năm trước đó, giờ đây sẽ có thể bớt âu lo nhờ có cái nhìn cân bằng hơn về nhu cầu thực sự của mình và những tác động từ môi trường.
    `,
    `
Con số này mang đến sự phát triển mạnh mẽ về lực sáng tạo.
Đây là giai đoạn mà các yếu tố cao nhất về mặt tinh thần và trí não hợp lại để hé lộ cho chúng ta thấy vai trò thiết yếu của chúng ta trong kế hoạch vô hạn của tạo hóa. Không phải ai cũng có được nhận thức này, mà chỉ những người trưởng thành hơn, có mức độ tiến hóa cao hơn mới cảm nhận rõ.
Đối với đa số mọi người, những người coi trọng giá trị của đời sống vật chất, đây sẽ là giai đoạn gắn bó mật thiết với gia đình, hoặc nếu họ còn độc thân thì đây là lúc họ khao khát một mái ấm bình yên. Các khuynh hướng lo lắng về mái ấm gia đình hoặc vội vã kết hôn sẽ khiến người ta dễ phạm sai lầm vào lúc này, gây ra nhiều bài học tổn thương khi con người để cho cảm xúc thống trị các mối quan hệ của mình. Sự khôn ngoan và kiên nhẫn sẽ giúp chúng ta tránh được những sai lầm này.
    `,
    `
Con số này có thể đem đến rất nhiều sự thay đổi đáng kinh ngạc trong cuộc sống con người. Đây là giai đoạn mà chúng ta được thôi thúc chia sẻ tất cả những gì chúng ta đã học được từ trước đến giờ. Khi làm vậy, chúng ta sẽ có được sự tiến bộ vô cùng to lớn trong việc tự khám phá những giá trị tiềm ẩn của bản thân, vì không có cách học nào tốt hơn cách học thông qua việc truyền đạt, hướng dẫn người khác. Giai đoạn này mang đậm tính trải nghiệm thực tế, đòi hỏi bạn trải qua khá nhiều bài học đầy thử thách.
Nếu thành công, bạn đương nhiên sẽ đủ vững vàng và có đủ “chất liệu” để hướng dẫn người khác; Còn nếu không đủ trưởng thành để vượt qua được những “bài thi” này, chúng ta sẽ phải mất thời gian ôn lại bài và “thi lại” nhiều lần cho đến khi hiểu rõ và rút ra được bài học từ các thử thách này.
Hầu hết những người đang chịu ảnh hưởng của sóng rung số 7 ở giai đoạn này sẽ có thôi thúc hay cơ duyên để giảng dạy hay truyền đạt một điều gì đó, nhưng không nhất thiết phải là một lĩnh vực học thuật. Thông thường, sự giảng dạy này sẽ liên quan đến sự tiến hóa của con người, như Yoga, các phương pháp trị liệu tự nhiên, các hướng phát triển khả năng nghệ thuật, hoặc nhận thức tâm linh.
    `,
    `
Con số này cho thấy đây là giai đoạn rất có sức bật, với nguồn lực chủ đạo là sức mạnh của sự "độc lập".  Tùy theo Con số chủ đạo của mỗi người mà sức mạnh độc lập này sẽ được phát triển thông qua lĩnh vực nghệ thuật hoặc thương mại. Nếu Có Con số chủ đạo là số chẵn (2, 4, 6, 8, 10, 22/4), bạn có khuynh hướng thành công về mặt tài chính khi hoạt động độc lập. Nếu Có Con số chủ đạo là số lẻ (3, 5, 7, 9, 11), bạn sẽ có khả năng thành công về mặt nghệ thuật hay nhân văn trong khi hoạt động độc lập.
Tuy nhiên, hãy có ý thức sử dụng sức mạnh của sóng rung số 8 một cách tích cực, đừng để sự đấu đá cá nhân hoặc quan điểm hạn hẹp cản trở sự lan tỏa của sóng rung này. Nếu để cho các tác nhân ấy ảnh hưởng, bạn sẽ rơi vào tình trạng xa cách với môi trường xung quanh, một nỗ lực “giãy giụa” để tỏ ra độc lập.
    `,
    `
Con số này mở ra một giai đoạn với những hoạt động mang đậm tính nhân văn. Sóng rung này đem lại những cơ hội đặc biệt để phục vụ nhân loại. Đây cũng là giai đoạn cần vận dụng năng lực trí não để đạt được thành công to lớn nhất, bao gồm năng lực phân tích và đánh giá nhu cầu của người khác, lên kế hoạch cho những bước ngoặt trên con đường sự nghiệp, đánh giá lại những mối quan hệ lâu dài và môi trường xung quanh. Nhiều người sẽ đòi hỏi bạn dành thời gian và năng lượng cho họ trong giai đoạn này.
Một số người trong số đó thực sự cần bạn và đem lại cho bạn cơ hội để thực hiện được sứ mệnh “phục vụ”; trong khi một số khác chỉ đang giả vờ để thu hút sự chú ý của bạn mà thôi. Bạn cần tỉnh táo để phân biệt ai chân thật, ai giả vờ. Những người giả vờ nên được đối xử theo kiểu “nice and ice” - tử tế mà vẫn lạnh lùng khi cần - để có thể thức tỉnh, khả năng phân tích và phân biệt thật - giả của bạn sẽ được kiểm tra và củng cố qua những trải nghiệm này. Và dưới ảnh hưởng của sóng rung giai đoạn này, một số người sẽ cần ở nhà để làm tốt phần việc phục vụ của mình, một số khác sẽ được “điều” đi nơi khác để trải qua những bài học quan trọng cho hành trình phát triển bản thân.
Trong suốt năm thứ nhất của giai đoạn đỉnh cao mang ảnh hưởng của số 9, nhiều thay đổi quan trọng sẽ diễn ra trong cuộc sống của những người đang trải qua giai đoạn này. Nếu sự thay đổi này không liên quan tới những chuyến đi, họ sẽ có khả năng chuyển nhà, đổi công việc hoặc có những mối quan hệ mới. Không chỉ một, mà có thể nhiều thay đổi lớn sẽ cùng lúc xuất hiện, tùy thuộc vào bản chất của những trách nhiệm mà mỗi người cần thực hiện trong quá trình phát triển và trưởng thành của mình.
    `,
]

const DINH3 = [
    ``,
    ``,
    `
Con số này cho thấy một giai đoạn mà trong đó những giá trị tinh thần hoặc tâm linh mạnh hơn bắt đầu hé mở.
Lối sống và những thói quen trong cuộc sống sẽ từ mang màu sắc của trực giác hoặc trở nên giàu cảm xúc hơn. Tuy nhiên, cần lưu ý rằng giá trị tinh thần hoặc tâm linh này sẽ thể hiện dưới dạng tích cực (tức hình thức tăng cường nhận thức một cách tốt đẹp hơn) hay dưới dạng tiêu cực (kiểu phản ứng không tốt, hoặc gây hấn), tùy vào mức độ trưởng thành mà con người đã đạt được đến thời điểm này.
Hiển nhiên khả năng trực giác của một người không thể phát triển nếu họ bị cột chặt vào những phản ứng cảm xúc mang tính bản năng. Đây cũng là giai đoạn chúng ta làm việc rất chăm chỉ và tiến triển khá chậm về mặt vật chất, vì chúng ta không thể có cả hai thứ cùng lúc được. Hãy nhớ rằng mọi việc đều có thời điểm thích hợp của nó, và một trong những ứng dụng quan trọng nhất của Nhân số học là tìm hiểu nhu cầu của bản thân, cũng như cách thức và thời điểm thích hợp để chúng ta xử lý những nhu cầu này. Nếu khăng khăng đi tìm thành tựu vật chất trong giai đoạn ảnh hưởng của Đỉnh cao mang số 2, bạn sẽ chỉ tạo ra sự uất giận, mâu thuẫn và sự tuột dốc năng lượng mà thôi. Hãy kiên nhẫn. Khi cuộc đời gieo cho bạn con số 2 ở một trong những đỉnh Kim tự tháp, bạn cần hiểu rằng thời gian đó nên được tập trung vào việc phát triển tinh thần. Sau đó, ở những đỉnh cao tiếp theo, bạn có thể sẽ được đền bù xứng đáng.
    `,
    `
Con số này cho thấy một giai đoạn mà trong đó những giá trị tinh thần hoặc tâm linh mạnh hơn bắt đầu hé mở.
Lối sống và những thói quen trong cuộc sống sẽ từ mang màu sắc của trực giác hoặc trở nên giàu cảm xúc hơn. Tuy nhiên, cần lưu ý rằng giá trị tinh thần hoặc tâm linh này sẽ thể hiện dưới dạng tích cực (tức hình thức tăng cường nhận thức một cách tốt đẹp hơn) hay dưới dạng tiêu cực (kiểu phản ứng không tốt, hoặc gây hấn), tùy vào mức độ trưởng thành mà con người đã đạt được đến thời điểm này.
Hiển nhiên khả năng trực giác của một người không thể phát triển nếu họ bị cột chặt vào những phản ứng cảm xúc mang tính bản năng. Đây cũng là giai đoạn chúng ta làm việc rất chăm chỉ và tiến triển khá chậm về mặt vật chất, vì chúng ta không thể có cả hai thứ cùng lúc được. Hãy nhớ rằng mọi việc đều có thời điểm thích hợp của nó, và một trong những ứng dụng quan trọng nhất của Nhân số học là tìm hiểu nhu cầu của bản thân, cũng như cách thức và thời điểm thích hợp để chúng ta xử lý những nhu cầu này. Nếu khăng khăng đi tìm thành tựu vật chất trong giai đoạn ảnh hưởng của Đỉnh cao mang số 2, bạn sẽ chỉ tạo ra sự uất giận, mâu thuẫn và sự tuột dốc năng lượng mà thôi. Hãy kiên nhẫn. Khi cuộc đời gieo cho bạn con số 2 ở một trong những đỉnh Kim tự tháp, bạn cần hiểu rằng thời gian đó nên được tập trung vào việc phát triển tinh thần. Sau đó, ở những đỉnh cao tiếp theo, bạn có thể sẽ được đền bù xứng đáng.
    `,
    `
Con số này báo hiệu sự gia tăng sức mạnh của việc "gieo nhân nào gặt quả nấy" Điều đó có thể được thể hiện theo nhiều cách khác nhau, tùy vào mức độ trưởng thành, Con số chủ đạo và các yếu tố trong Biểu đồ ngày sinh. Đối với những người sẵn sàng làm việc siêng năng chăm chỉ, đây là giai đoạn họ gặt hái thành công nhờ ảnh hưởng của sóng rung của số 4.
Đối với những người cần có thêm kiến thức về việc sử dụng tốt hơn các giác quan của mình để trở nên trưởng thành, và những ai sẵn sàng dấn thân vào những công việc thực tế, thì đây cũng là giai đoạn mà những nỗ lực của họ được tưởng thưởng.
Nhưng đối với những người quá Tham Vọng, hám danh lợi và tham lam thì đây là giai đoạn họ mất nhiều hơn được. Cho dù có nỗ lực nhiều hơn thì họ cũng không có được tiến triển đáng kể, nếu động cơ của họ quá vị kỷ và tư lợi. Điều này có thể gây áp lực nặng nề lên hệ thống thần kinh cũng như tình trạng sức khỏe của họ nói chung, và nó chỉ được cải thiện khi họ nhìn ra và điều chỉnh lại động cơ của mình.
Nên nhớ rõ ràng "gieo nhân nào gặt quả nấy" bao gồm tất cả các khía cạnh trong cuộc sống: Vật chất, Sức khỏe, Tình cảm
Nếu bạn siêng năng chăm chỉ làm việc thì bạn sẽ nhận được thành quả tốt nhất.
Nếu bạn bỏ bê sức khỏe không quan tâm đến mặt thể chất và tinh thần thì đây cũng là lúc mọi thứ tồi tệ, và mặt tình cảm cũng vậy.
    `,
    `
Con số này thường cho thấy giai đoạn đỉnh cao này chủ yếu liên quan tới trạng thái cảm xúc. Nếu đi đúng quỹ đạo phát triển thì tới giai đoạn này, người ta sẽ bắt đầu có sự phát triển tâm linh và thấu hiểu cuộc sống sâu sắc hơn, từ đó mang lại sự tự do cá nhân mạnh mẽ hơn. Trong giai đoạn này, đời sống tinh thần của chúng ta gặp phải nhiều áp lực vượt mức chịu đựng, để tạo điều kiện cho chúng ta mài giũa khả năng kiểm soát cảm xúc cao hơn. Điều này giúp chúng ta giảm các phản ứng mang tính bản năng đối với những con người và tình huống xung quanh.
Kết quả là sự tự do cá nhân của chúng ta được nâng cao, dọn đường cho một tầng nhận thức tâm linh cao hơn. Những người từng lo lắng về sự vững vàng tài chính trong những năm trước đó, giờ đây sẽ có thể bớt âu lo nhờ có cái nhìn cân bằng hơn về nhu cầu thực sự của mình và những tác động từ môi trường.
    `,
    `
Con số này mang đến sự phát triển mạnh mẽ về lực sáng tạo.
Đây là giai đoạn mà các yếu tố cao nhất về mặt tinh thần và trí não hợp lại để hé lộ cho chúng ta thấy vai trò thiết yếu của chúng ta trong kế hoạch vô hạn của tạo hóa. Không phải ai cũng có được nhận thức này, mà chỉ những người trưởng thành hơn, có mức độ tiến hóa cao hơn mới cảm nhận rõ.
Đối với đa số mọi người, những người coi trọng giá trị của đời sống vật chất, đây sẽ là giai đoạn gắn bó mật thiết với gia đình, hoặc nếu họ còn độc thân thì đây là lúc họ khao khát một mái ấm bình yên. Các khuynh hướng lo lắng về mái ấm gia đình hoặc vội vã kết hôn sẽ khiến người ta dễ phạm sai lầm vào lúc này, gây ra nhiều bài học tổn thương khi con người để cho cảm xúc thống trị các mối quan hệ của mình. 
Sự khôn ngoan và kiên nhẫn sẽ giúp chúng ta tránh được những sai lầm này.
    `,
    `
Con số này có thể đem đến rất nhiều sự thay đổi đáng kinh ngạc trong cuộc sống con người. Đây là giai đoạn mà chúng ta được thôi thúc chia sẻ tất cả những gì chúng ta đã học được từ trước đến giờ. Khi làm vậy, chúng ta sẽ có được sự tiến bộ vô cùng to lớn trong việc tự khám phá những giá trị tiềm ẩn của bản thân, vì không có cách học nào tốt hơn cách học thông qua việc truyền đạt, hướng dẫn người khác. Giai đoạn này mang đậm tính trải nghiệm thực tế, đòi hỏi bạn trải qua khá nhiều bài học đầy thử thách.
Nếu thành công, bạn đương nhiên sẽ đủ vững vàng và có đủ “chất liệu” để hướng dẫn người khác; Còn nếu không đủ trưởng thành để vượt qua được những “bài thi” này, chúng ta sẽ phải mất thời gian ôn lại bài và “thi lại” nhiều lần cho đến khi hiểu rõ và rút ra được bài học từ các thử thách này.
Hầu hết những người đang chịu ảnh hưởng của sóng rung số 7 ở giai đoạn này sẽ có thôi thúc hay cơ duyên để giảng dạy hay truyền đạt một điều gì đó, nhưng không nhất thiết phải là một lĩnh vực học thuật. Thông thường, sự giảng dạy này sẽ liên quan đến sự tiến hóa của con người, như Yoga, các phương pháp trị liệu tự nhiên, các hướng phát triển khả năng nghệ thuật, hoặc nhận thức tâm linh.
    `,
    `
Con số này cho thấy đây là giai đoạn rất có sức bật, với nguồn lực chủ đạo là sức mạnh của sự "độc lập".  Tùy theo Con số chủ đạo của mỗi người mà sức mạnh độc lập này sẽ được phát triển thông qua lĩnh vực nghệ thuật hoặc thương mại. Nếu Có Con số chủ đạo là số chẵn (2, 4, 6, 8, 10, 22/4), bạn có khuynh hướng thành công về mặt tài chính khi hoạt động độc lập. Nếu Có Con số chủ đạo là số lẻ (3, 5, 7, 9, 11), bạn sẽ có khả năng thành công về mặt nghệ thuật hay nhân văn trong khi hoạt động độc lập.
Tuy nhiên, hãy có ý thức sử dụng sức mạnh của sóng rung số 8 một cách tích cực, đừng để sự đấu đá cá nhân hoặc quan điểm hạn hẹp cản trở sự lan tỏa của sóng rung này. Nếu để cho các tác nhân ấy ảnh hưởng, bạn sẽ rơi vào tình trạng xa cách với môi trường xung quanh, một nỗ lực “giãy giụa” để tỏ ra độc lập.
    `,
    `
Con số này mở ra một giai đoạn với những hoạt động mang đậm tính nhân văn. Sóng rung này đem lại những cơ hội đặc biệt để phục vụ nhân loại. Đây cũng là giai đoạn cần vận dụng năng lực trí não để đạt được thành công to lớn nhất, bao gồm năng lực phân tích và đánh giá nhu cầu của người khác, lên kế hoạch cho những bước ngoặt trên con đường sự nghiệp, đánh giá lại những mối quan hệ lâu dài và môi trường xung quanh. Nhiều người sẽ đòi hỏi bạn dành thời gian và năng lượng cho họ trong giai đoạn này.
Một số người trong số đó thực sự cần bạn và đem lại cho bạn cơ hội để thực hiện được sứ mệnh “phục vụ”; trong khi một số khác chỉ đang giả vờ để thu hút sự chú ý của bạn mà thôi. Bạn cần tỉnh táo để phân biệt ai chân thật, ai giả vờ. Những người giả vờ nên được đối xử theo kiểu “nice and ice” - tử tế mà vẫn lạnh lùng khi cần - để có thể thức tỉnh, khả năng phân tích và phân biệt thật - giả của bạn sẽ được kiểm tra và củng cố qua những trải nghiệm này. Và dưới ảnh hưởng của sóng rung giai đoạn này, một số người sẽ cần ở nhà để làm tốt phần việc phục vụ của mình, một số khác sẽ được “điều” đi nơi khác để trải qua những bài học quan trọng cho hành trình phát triển bản thân.
Trong suốt năm thứ nhất của giai đoạn đỉnh cao mang ảnh hưởng của số 9, nhiều thay đổi quan trọng sẽ diễn ra trong cuộc sống của những người đang trải qua giai đoạn này. Nếu sự thay đổi này không liên quan tới những chuyến đi, họ sẽ có khả năng chuyển nhà, đổi công việc hoặc có những mối quan hệ mới. Không chỉ một, mà có thể nhiều thay đổi lớn sẽ cùng lúc xuất hiện, tùy thuộc vào bản chất của những trách nhiệm mà mỗi người cần thực hiện trong quá trình phát triển và trưởng thành của mình.
    `,
    `
Có hai con số chỉ xuất hiện ở đỉnh Kim tự tháp thứ ba hay thứ tư, khi độ trưởng thành của một người chạm đến cực điểm, đó là số 10 và 11.
Số 10 mang đến nguồn sức mạnh đặc biệt, một năng lực độc đáo trong việc hiểu được nhu cầu của người khác trong những giai đoạn điều chỉnh quan trọng của cuộc đời họ. Khả năng này là kết quả của quá trình tự trải nghiệm cuộc sống và những bài học kinh nghiệm mà chúng ta thu được qua các trải nghiệm này. Gần như tất cả những người được sinh ra vào thế kỷ 20 đều có một số 9 trong biểu đồ, cho thấy sức mạnh tập trung ở năng lực trí não, và họ rất cần sự điều chỉnh tư duy để xây dựng lại tầm nhìn và lối sống khi con người tiến vào kỷ nguyên mới.Những linh hồn già mang số 10 trong giai đoạn đỉnh cao này có trọng trách cực kỳ quan trọng trong việc hướng dẫn và khuyến khích những người đang gặp khó khăn thử thách. Đây là một trách nhiệm đầy ý nghĩa, không chỉ mang lại lợi ích cho “người được phục vụ”, mà còn có ích cho “người phục vụ”.
    `,
]

const DINH4 = [
    ``,
    `
    Con số này cho thấy một giai đoạn mà trong đó những giá trị tinh thần hoặc tâm linh mạnh hơn bắt đầu hé mở. Lối sống và những thói quen trong cuộc sống sẽ từ mang màu sắc của trực giác hoặc trở nên giàu cảm xúc hơn. Tuy nhiên, cần lưu ý rằng giá trị tinh thần hoặc tâm linh này sẽ thể hiện dưới dạng tích cực (tức hình thức tăng cường nhận thức một cách tốt đẹp hơn) hay dưới dạng tiêu cực (kiểu phản ứng không tốt, hoặc gây hấn), tùy vào mức độ trưởng thành mà con người đã đạt được đến thời điểm này.
    Hiển nhiên khả năng trực giác của một người không thể phát triển nếu họ bị cột chặt vào những phản ứng cảm xúc mang tính bản năng. Đây cũng là giai đoạn chúng ta làm việc rất chăm chỉ và tiến triển khá chậm về mặt vật chất, vì chúng ta không thể có cả hai thứ cùng lúc được. Hãy nhớ rằng mọi việc đều có thời điểm thích hợp của nó, và một trong những ứng dụng quan trọng nhất của Nhân số học là tìm hiểu nhu cầu của bản thân, cũng như cách thức và thời điểm thích hợp để chúng ta xử lý những nhu cầu này. Nếu khăng khăng đi tìm thành tựu vật chất trong giai đoạn ảnh hưởng của Đỉnh cao mang số 2, bạn sẽ chỉ tạo ra sự uất giận, mâu thuẫn và sự tuột dốc năng lượng mà thôi. Hãy kiên nhẫn. Khi cuộc đời gieo cho bạn con số 2 ở một trong những đỉnh Kim tự tháp, bạn cần hiểu rằng thời gian đó nên được tập trung vào việc phát triển tinh thần. Sau đó, ở những đỉnh cao tiếp theo, bạn có thể sẽ được đền bù xứng đáng.
    `,
    `
Con số này cho thấy một giai đoạn mà trong đó những giá trị tinh thần hoặc tâm linh mạnh hơn bắt đầu hé mở. Lối sống và những thói quen trong cuộc sống sẽ từ mang màu sắc của trực giác hoặc trở nên giàu cảm xúc hơn. Tuy nhiên, cần lưu ý rằng giá trị tinh thần hoặc tâm linh này sẽ thể hiện dưới dạng tích cực (tức hình thức tăng cường nhận thức một cách tốt đẹp hơn) hay dưới dạng tiêu cực (kiểu phản ứng không tốt, hoặc gây hấn), tùy vào mức độ trưởng thành mà con người đã đạt được đến thời điểm này.
Hiển nhiên khả năng trực giác của một người không thể phát triển nếu họ bị cột chặt vào những phản ứng cảm xúc mang tính bản năng. Đây cũng là giai đoạn chúng ta làm việc rất chăm chỉ và tiến triển khá chậm về mặt vật chất, vì chúng ta không thể có cả hai thứ cùng lúc được. Hãy nhớ rằng mọi việc đều có thời điểm thích hợp của nó, và một trong những ứng dụng quan trọng nhất của Nhân số học là tìm hiểu nhu cầu của bản thân, cũng như cách thức và thời điểm thích hợp để chúng ta xử lý những nhu cầu này. Nếu khăng khăng đi tìm thành tựu vật chất trong giai đoạn ảnh hưởng của Đỉnh cao mang số 2, bạn sẽ chỉ tạo ra sự uất giận, mâu thuẫn và sự tuột dốc năng lượng mà thôi. Hãy kiên nhẫn. Khi cuộc đời gieo cho bạn con số 2 ở một trong những đỉnh Kim tự tháp, bạn cần hiểu rằng thời gian đó nên được tập trung vào việc phát triển tinh thần. Sau đó, ở những đỉnh cao tiếp theo, bạn có thể sẽ được đền bù xứng đáng.
    `,
    `
Con số này cho thấy một giai đoạn mà trong đó những giá trị tinh thần hoặc tâm linh mạnh hơn bắt đầu hé mở. Lối sống và những thói quen trong cuộc sống sẽ từ mang màu sắc của trực giác hoặc trở nên giàu cảm xúc hơn. Tuy nhiên, cần lưu ý rằng giá trị tinh thần hoặc tâm linh này sẽ thể hiện dưới dạng tích cực (tức hình thức tăng cường nhận thức một cách tốt đẹp hơn) hay dưới dạng tiêu cực (kiểu phản ứng không tốt, hoặc gây hấn), tùy vào mức độ trưởng thành mà con người đã đạt được đến thời điểm này.
Hiển nhiên khả năng trực giác của một người không thể phát triển nếu họ bị cột chặt vào những phản ứng cảm xúc mang tính bản năng. Đây cũng là giai đoạn chúng ta làm việc rất chăm chỉ và tiến triển khá chậm về mặt vật chất, vì chúng ta không thể có cả hai thứ cùng lúc được. Hãy nhớ rằng mọi việc đều có thời điểm thích hợp của nó, và một trong những ứng dụng quan trọng nhất của Nhân số học là tìm hiểu nhu cầu của bản thân, cũng như cách thức và thời điểm thích hợp để chúng ta xử lý những nhu cầu này. Nếu khăng khăng đi tìm thành tựu vật chất trong giai đoạn ảnh hưởng của Đỉnh cao mang số 2, bạn sẽ chỉ tạo ra sự uất giận, mâu thuẫn và sự tuột dốc năng lượng mà thôi. Hãy kiên nhẫn. Khi cuộc đời gieo cho bạn con số 2 ở một trong những đỉnh Kim tự tháp, bạn cần hiểu rằng thời gian đó nên được tập trung vào việc phát triển tinh thần. Sau đó, ở những đỉnh cao tiếp theo, bạn có thể sẽ được đền bù xứng đáng.
    `,
    `
Con số này cho thấy đây là thời điểm bạn nên chú trọng học hỏi để mở mang trí tuệ. Đây là giai đoạn quan trọng để học hỏi, đánh giá và phân tích. Một số người sẽ cảm thấy thôi thúc muốn đi đó đi đây dưới sóng rung của con số này. Ở giai đoạn này của cuộc đời họ, việc đi đó đi đây không chỉ là du lịch đơn thuần, mà còn là một cách để họ học hỏi và mở mang tầm mắt, mở mang kiến thức . Trong giai đoạn này, hãy để trí não được mở mang theo chiều hướng tích cực. Nếu không, bạn sẽ có nguy cơ trở thành kẻ hay chỉ trích người khác, đòi hỏi, yêu sách, và không có gì ngạc nhiên khi hậu quả là bạn sẽ không được người khác chào đón.
    `,
    `
Con số này báo hiệu sự gia tăng sức mạnh của việc "gieo nhân nào gặt quả nấy" Điều đó có thể được thể hiện theo nhiều cách khác nhau, tùy vào mức độ trưởng thành, Con số chủ đạo và các yếu tố trong Biểu đồ ngày sinh. Đối với những người sẵn sàng làm việc siêng năng chăm chỉ, đây là giai đoạn họ gặt hái thành công nhờ ảnh hưởng của sóng rung của số 4.
Đối với những người cần có thêm kiến thức về việc sử dụng tốt hơn các giác quan của mình để trở nên trưởng thành, và những ai sẵn sàng dấn thân vào những công việc thực tế, thì đây cũng là giai đoạn mà những nỗ lực của họ được tưởng thưởng.
Nhưng đối với những người quá Tham Vọng, hám danh lợi và tham lam thì đây là giai đoạn họ mất nhiều hơn được. Cho dù có nỗ lực nhiều hơn thì họ cũng không có được tiến triển đáng kể, nếu động cơ của họ quá vị kỷ và tư lợi. Điều này có thể gây áp lực nặng nề lên hệ thống thần kinh cũng như tình trạng sức khỏe của họ nói chung, và nó chỉ được cải thiện khi họ nhìn ra và điều chỉnh lại động cơ của mình.
Nên nhớ rõ ràng "gieo nhân nào gặt quả nấy" bao gồm tất cả các khía cạnh trong cuộc sống: Vật chất, Sức khỏe, Tình cảm
Nếu bạn siêng năng chăm chỉ làm việc thì bạn sẽ nhận được thành quả tốt nhất.
Nếu bạn bỏ bê sức khỏe không quan tâm đến mặt thể chất và tinh thần thì đây cũng là lúc mọi thứ tồi tệ, và mặt tình cảm cũng vậy.
    `,
    `
Con số này thường cho thấy giai đoạn đỉnh cao này chủ yếu liên quan tới trạng thái cảm xúc. Nếu đi đúng quỹ đạo phát triển thì tới giai đoạn này, người ta sẽ bắt đầu có sự phát triển tâm linh và thấu hiểu cuộc sống sâu sắc hơn, từ đó mang lại sự tự do cá nhân mạnh mẽ hơn. Trong giai đoạn này, đời sống tinh thần của chúng ta gặp phải nhiều áp lực vượt mức chịu đựng, để tạo điều kiện cho chúng ta mài giũa khả năng kiểm soát cảm xúc cao hơn. Điều này giúp chúng ta giảm các phản ứng mang tính bản năng đối với những con người và tình huống xung quanh.
Kết quả là sự tự do cá nhân của chúng ta được nâng cao, dọn đường cho một tầng nhận thức tâm linh cao hơn. Những người từng lo lắng về sự vững vàng tài chính trong những năm trước đó, giờ đây sẽ có thể bớt âu lo nhờ có cái nhìn cân bằng hơn về nhu cầu thực sự của mình và những tác động từ môi trường.
    `,
    `
Con số này mang đến sự phát triển mạnh mẽ về lực sáng tạo. Đây là giai đoạn mà các yếu tố cao nhất về mặt tinh thần và trí não hợp lại để hé lộ cho chúng ta thấy vai trò thiết yếu của chúng ta trong kế hoạch vô hạn của tạo hóa. Không phải ai cũng có được nhận thức này, mà chỉ những người trưởng thành hơn, có mức độ tiến hóa cao hơn mới cảm nhận rõ.
Đối với đa số mọi người, những người coi trọng giá trị của đời sống vật chất, đây sẽ là giai đoạn gắn bó mật thiết với gia đình, hoặc nếu họ còn độc thân thì đây là lúc họ khao khát một mái ấm bình yên. Các khuynh hướng lo lắng về mái ấm gia đình hoặc vội vã kết hôn sẽ khiến người ta dễ phạm sai lầm vào lúc này, gây ra nhiều bài học tổn thương khi con người để cho cảm xúc thống trị các mối quan hệ của mình. Sự khôn ngoan và kiên nhẫn sẽ giúp chúng ta tránh được những sai lầm này.
    `,
    `
Con số này chỉ được nhìn thấy ở đỉnh của hai Kim tự tháp đầu tiên. Khi sang Kim tự tháp thứ ba và thứ tư, nó sẽ trở thành số 10. Số 1 là con số vô cùng thực tế, báo hiệu giai đoạn của những nỗ lực cá nhân cũng như sự biểu đạt cá nhân. Trong hầu hết các trường hợp, nó cho thấy sự tách rời khỏi những mối quan hệ mà trong đó có sự thiếu hòa hợp, cản trở quá trình phát triển cá nhân của chúng ta, chẳng hạn như một cuộc hôn nhân kém hạnh phúc, quan hệ làm ăn buôn bán không hiệu quả, hoặc những mối dây tình cảm rối rắm đã làm vướng chân chúng ta nhiều năm.
Một số người sẽ chọn cách cố gắng hết sức để tránh các cuộc chia ly này, cố gắng giữ nguyên hiện trạng bằng mọi giá. Mặc dù vậy, họ cũng sẽ nhận ra một vài thay đổi trong bản chất mối quan hệ, bởi vì đến thời điểm này họ đã bắt đầu thể hiện cá tính của mình một cách mạnh mẽ hơn, cũng trở nên rõ ràng hơn trong quan điểm, trong cách biểu đạt ý kiến của mình. Điều đó có nghĩa là từ giai đoạn này trở đi, những mối quan hệ khiến bạn tổn thương mà bạn muốn dứt mãi không được sẽ dứt, còn những mối quan hệ không đứt gãy trong giai đoạn này sẽ chuyển sang một trạng thái mới, dễ chịu hơn.
    `,

    `
Con số này cho thấy đây là thời điểm bạn nên chú trọng học hỏi để mở mang trí tuệ. Đây là giai đoạn quan trọng để học hỏi, đánh giá và phân tích. Một số người sẽ cảm thấy thôi thúc muốn đi đó đi đây dưới sóng rung của con số này. Ở giai đoạn này của cuộc đời họ, việc đi đó đi đây không chỉ là du lịch đơn thuần, mà còn là một cách để họ học hỏi và mở mang tầm mắt, mở mang kiến thức . Trong giai đoạn này, hãy để trí não được mở mang theo chiều hướng tích cực. Nếu không, bạn sẽ có nguy cơ trở thành kẻ hay chỉ trích người khác, đòi hỏi, yêu sách, và không có gì ngạc nhiên khi hậu quả là bạn sẽ không được người khác chào đón.
    `,
    `
Con số này cho thấy một giai đoạn mà trong đó những giá trị tinh thần hoặc tâm linh mạnh hơn bắt đầu hé mở. Lối sống và những thói quen trong cuộc sống sẽ từ mang màu sắc của trực giác hoặc trở nên giàu cảm xúc hơn. Tuy nhiên, cần lưu ý rằng giá trị tinh thần hoặc tâm linh này sẽ thể hiện dưới dạng tích cực (tức hình thức tăng cường nhận thức một cách tốt đẹp hơn) hay dưới dạng tiêu cực (kiểu phản ứng không tốt, hoặc gây hấn), tùy vào mức độ trưởng thành mà con người đã đạt được đến thời điểm này.
Hiển nhiên khả năng trực giác của một người không thể phát triển nếu họ bị cột chặt vào những phản ứng cảm xúc mang tính bản năng. Đây cũng là giai đoạn chúng ta làm việc rất chăm chỉ và tiến triển khá chậm về mặt vật chất, vì chúng ta không thể có cả hai thứ cùng lúc được. Hãy nhớ rằng mọi việc đều có thời điểm thích hợp của nó, và một trong những ứng dụng quan trọng nhất của Nhân số học là tìm hiểu nhu cầu của bản thân, cũng như cách thức và thời điểm thích hợp để chúng ta xử lý những nhu cầu này. Nếu khăng khăng đi tìm thành tựu vật chất trong giai đoạn ảnh hưởng của Đỉnh cao mang số 2, bạn sẽ chỉ tạo ra sự uất giận, mâu thuẫn và sự tuột dốc năng lượng mà thôi. Hãy kiên nhẫn. Khi cuộc đời gieo cho bạn con số 2 ở một trong những đỉnh Kim tự tháp, bạn cần hiểu rằng thời gian đó nên được tập trung vào việc phát triển tinh thần. Sau đó, ở những đỉnh cao tiếp theo, bạn có thể sẽ được đền bù xứng đáng.
    `,
    `
Con số này thường cho thấy giai đoạn đỉnh cao này chủ yếu liên quan tới trạng thái cảm xúc. Nếu đi đúng quỹ đạo phát triển thì tới giai đoạn này, người ta sẽ bắt đầu có sự phát triển tâm linh và thấu hiểu cuộc sống sâu sắc hơn, từ đó mang lại sự tự do cá nhân mạnh mẽ hơn. Trong giai đoạn này, đời sống tinh thần của chúng ta gặp phải nhiều áp lực vượt mức chịu đựng, để tạo điều kiện cho chúng ta mài giũa khả năng kiểm soát cảm xúc cao hơn. Điều này giúp chúng ta giảm các phản ứng mang tính bản năng đối với những con người và tình huống xung quanh.
Kết quả là sự tự do cá nhân của chúng ta được nâng cao, dọn đường cho một tầng nhận thức tâm linh cao hơn. Những người từng lo lắng về sự vững vàng tài chính trong những năm trước đó, giờ đây sẽ có thể bớt âu lo nhờ có cái nhìn cân bằng hơn về nhu cầu thực sự của mình và những tác động từ môi trường.
    `,
]

const SO1 = [
    {
        heading: '',
        content: '',
    },
    {
        heading: 'MỘT SỐ 1 TRONG BIỂU ĐỒ (2)',
        content: `Những người có Biểu đồ ngày sinh có một số 1 thường gặp một chút khó khăn trong việc thể hiện bản thân qua ngôn ngữ. Điều này không có nghĩa là họ không thể nói chuyện một cách suôn sẻ, mà là họ khó diễn đạt được cảm xúc nội tâm của mình.
Họ có thể nói rất lưu loát và đầy thuyết phục về các đề tài không liên quan đến diễn đạt cảm xúc cá nhân, nhưng thường không biết cách biểu đạt bản thân hoặc diễn tả những gì mình đang cảm thấy. Chỉ khi nào họ học được cách làm chủ bản thân - kết quả của quá trình trưởng thành và thấu hiểu - thì điều này mới được cải thiện. Đôi khi họ sẽ cố ý nói ra những lời hoàn toàn trái ngược với suy nghĩ thật sự của mình như một kiểu phản ứng tự vệ - tức là họ Cố ý làm tổn thương hoặc xúc phạm người khác để tự bảo vệ bản thân mình. Điều này khiến vấn đề ban đầu trở nên nghiêm trọng hơn và gây ra những cuộc tranh cãi gay gắt. Họ cần tập suy nghĩ cẩn trọng trước khi phát biểu, và họ có thể làm được điều ấy bằng cách học kiểm soát phản ứng của bản thân trước các ý kiến, lời phê bình, vì những lời nói đã nói ra thì không thể thu hồi và cảm giác tổn thương rất khó được chữa lành. Để cải thiện hạn chế này, hãy lấy một quyển số trắng và ghi ngày tháng hiện tại. Sau đó, vào buổi tối, trước khi đi ngủ, hãy dành vài phút viết ra những suy nghĩ và cảm nhận của bạn về ngày hôm nay. Nhớ ghi rõ cả những việc bạn vốn dĩ muốn làm, những lời bạn vốn dĩ muốn nói, nhưng rốt cuộc đã không thực hiện được và những điều bạn đã nói hay lỡ làm mà bạn ước gì bạn đã không làm hay nói. Buổi sáng hôm sau, bạn hãy đọc to toàn bộ nội dung đó trước một tấm gương lớn và quan sát ngôn ngữ cơ thể bạn.
Hãy làm điều này thường xuyên và bạn sẽ nhìn thấy sự tự tin trong việc diễn đạt bản thân được cải thiện thấy rõ, về cuộc sống, những người có một số 1 thường cảm thấy thiếu một điều gì đó trong cuộc sống, mặc dù thoạt nhìn họ rất đủ đầy ở một số mặt.
`,
    },
    {
        heading: 'HAI SỐ 1 TRONG BIỂU ĐỒ (11)',
        content: `
Người có hai số 1 (11) trong Biểu đồ ngày sinh là người may mắn nhất trong cả nhóm, bởi sự cân bằng trời cho trong việc diễn đạt nội tâm. Đây là một đặc điểm nên được sử dụng một cách khôn ngoan - không bao giờ lạm dụng nó cho mục đích thao túng người khác. (Đồng thời hãy nhớ đừng mất kiên nhẫn với những người không may mắn không có hai số 1 giống bạn, đặc biệt nếu đó là người yêu hoặc người bạn đời của bạn.) Người có hai số 1 thường có khả năng nhìn nhận các vấn đề hay các cuộc tranh luận theo cả hai mặt, và vì vậy họ hoàn toàn có khả năng chuyển sang hướng đối lập trong một cuộc thảo luận nếu quan điểm của bên đó có vẻ có giá trị hơn. Điều này giúp họ không bị sa vào tư duy bảo thủ, thứ khiến tầm hiểu biết bị giới hạn một chiều, và vì thế bản thân họ cũng thường ít khi bắt bẻ những “ lỗi sai ” của người khác. Có thể nói người có hai số 1 trong biểu đồ thường dễ có cuộc sống cân bằng, an vui, bất kể cuộc sống có diễn ra thế nào. Về nhận định này, tôi có hai điều muốn chia sẻ kỹ hơn : Một Biểu đồ ngày sinh sẽ bao gồm rất nhiều yếu tố chi tiết bên trong, yếu tố này hòa quyện với yếu tố kia, hay yếu tố này mâu thuẫn với yếu tố kia, làm giảm giá trị của yếu tố kia.
Ví dụ, nếu một người có được hai số 1 nhưng lại trống hoàn toàn cột giữa (4-5-6 - mang ý nghĩa Mũi tên uất giận, vì họ mãi không đạt được điều mình khát khao muốn có) , và đặc biệt nếu có thêm số 7 (hay 77, hay 777) thì người đó rất dễ gặp phải một trong những điều bất ý lớn trong các khía cạnh: sức khỏe, tiền tài, tình yêu, sự nghiệp ... Nhưng nhờ sức mạnh của hai số 1, người đó vẫn hay dùng lòng tin để tiếp thu cái mới, từ đó khiến bản thân gặp nhiều thiệt thòi. Tuy nhiên, nhờ trong Biểu đồ ngày sinh của tôi có hai số 1 (11) nên tôi có được một đặc điểm (như đã đề cập ở trên) : dễ dàng nhìn được hai mặt của một vấn đề, chịu thay đổi quan điểm một khi thấy các quan điểm khác cũng đúng hoặc có giá trị. Điều này đặc biệt ý nghĩa với các vấn đề mang tính trực giác, đòi hỏi sự hiểu biết sâu xa hơn những gì mắt thường nhìn thấy. Cho nên hiện giờ tôi đã thôi không còn dùng khái niệm “ thấy mới tin ” nữa, mà bắt đầu lắng tâm mình hơn, mỗi ngày một phát huy trực giác (còn gọi là “ con mắt ” bên trong) để cảm mọi việc, nhờ vậy tôi có thể tiếp thu nhiều cái mới mẻ hơn, rộng lớn hơn. Như vậy, hai số 1 (11) đã giúp tôi hóa giải bớt tính “ cứng đầu ” của Mũi tên 1-4-7 đó.
Trở lại với những đặc điểm nổi bật của hai số 1 (11) :
Chính nhờ những yếu tố tích cực, dung hòa và cân bằng này mà người có hai số 1 trong biểu đồ dễ trở thành các chính trị gia thành công hoặc người của công chúng, người nổi tiếng. Yếu tố hai số 1 làm nổi bật nhận thức về con người, cũng như cách biểu đạt bản thân và khả năng nhìn nhận vấn đề một cách đa chiều, không phiến diện, giúp giảm thiểu khả năng bị hiểu lầm.
        `,
    },
    {
        heading: 'BA SỐ 1 TRONG BIỂU ĐÔ (111)',
        content: `
Với những người có ba số 1 trong Biểu đồ ngày sinh, có hai khả năng khá đối lập xảy ra trong thực tế. Khả năng thường gặp nhất là những người này thuộc dạng nói rất nhiều, thường có mặt trong rất nhiều cuộc trò chuyện sôi nổi mà trong đó họ trở nên nổi bật và thú vị. Nhìn chung họ thấy cuộc sống dễ chịu và thường cố gắng chia sẻ điều đó với những người xung quanh, Nhóm thứ hai là những người cũng có ba số 1 nhưng lại không có số nào ở Trục ngang Tinh thần (tức là không có các số 2-5-8) . Những người này khá im lặng, hướng nội, bẽn lẽn, đặc biệt là với người lạ. Tuy nhiên, họ có thể hoạt bát và nói nhiều khi trò chuyện với bạn bè thân thiết hoặc người thân trong nhà - đó là những lúc họ cảm thấy thoải mái. Những người này thường dễ diễn đạt cảm xúc hay nội tâm của mình bằng cách viết, vì khi đó dòng suy nghĩ của họ liền mạch hơn, không bị cản trở bởi sự nhạy cảm quá mức của họ. Nếu bạn thuộc nhóm này mà chưa biết sức mạnh khả năng viết lách của mình, hãy thử xem sao. Hãy xem viết lách là một cách để tập diễn đạt bản thân cho trôi chảy, khơi thông những cảm xúc rối rắm tắc nghẽn trong lòng, cũng như là một cách để tự chữa lành. Ngoài ra, còn một khả năng nữa ở những người có ba số 1 mà bản thân tôi quan sát thấy, đó là tâm trạng lúc vui lúc buồn. Tùy theo những yếu tố khác trong Biểu đồ ngày sinh mà tỷ lệ vui buồn sẽ gia giảm khác nhau, tốt nhất thì được 5/5, còn không thì 4/6, không nữa thì 3/7, lúc vui họ có xu hướng nói rất nhiều, lúc buồn thì ngồi im, không quan tâm tới ai.
        `,
    },
    {
        heading: `BỐN SỐ 1 TRONG BIỂU ĐỒ (1111)`,
        content: `
Người có bốn số 1 trong ngày sinh thường gặp trục trặc với vấn đề diễn đạt bằng lời, và vì vậy, rất dễ bị người khác hiểu lầm. Nhưng cuộc sống nhanh chóng dạy họ giấu đi những cảm xúc rối rắm bằng một nụ cười, cho dù họ có khuynh hướng dẫn tiếp tục chịu đựng bên trong cho đến khi tự có ý thức giải tỏa những cảm xúc đó và sống lẹ làng hơn. Nói một cách dễ hiểu, những người có bốn số 1 thường tự làm mình khổ tâm. Số 1 mang đặc tính về “ cái tôi ” của mỗi người, vậy nên hãy tưởng tượng một người có đến bốn lần “ cái tôi ” như vậy sẽ như thế nào. Họ có “ cái tôi rất mạnh, nhưng rất khó diễn đạt những cảm giác sâu đậm như vậy về bản thân mình. Vì vậy, Thầy David khuyên: vì hạnh phúc của chính mình và của những người thân, những người có bốn số 1 phải học cách kiểm soát cảm xúc của mình. Khi họ thả lỏng hơn, bớt căng thẳng, bớt thiếu tự tin (đôi khi họ không nhận ra điều này, mà trái lại, họ có thể cảm thấy mình quá tự tin là đằng khác), họ sẽ cảm thấy ít bị cản trở hơn và diễn đạt cảm xúc của mình một cách thoải mái hơn, thay vì cứ đè nén những sầu muộn, rối rắm trong nội tâm của mình.
        `,
    },
    {
        heading: `NĂM SỐ 1 TRONG BIỂU ĐỒ (11111) HOẶC NHIỀU HƠN`,
        content: `
Với năm hay sáu số 1 trên Biểu đồ ngày sinh, “ cái tôi ” thường bị đè nén để giảm bớt các khó khăn trong việc diễn đạt cảm xúc cá nhân. Những người trẻ tuổi thuộc nhóm này thường cảm thấy buồn vì bị mọi người xung quanh hiểu lầm. Điều này dẫn đến sự tách rời, từ đó gây gia sự cô độc. Họ có thể phát triển theo hướng bị ám ảnh với ngoại hình và hành động của mình, cũng như thường gắn rất nhiều gương trong nhà nhưng lại có xu hướng giấu chúng đi để tránh người khác nghĩ họ quá tự tôn. Nhưng họ vẫn bí mật ngắm mình trong gương mỗi khi có dịp. Tính vị kỷ và “ tự lừa mình ” này có thể gây ra sự mất cân bằng về tâm thần, chúng ta có thể giúp trẻ thuộc nhóm có quá nhiều số 1 gia tăng nhận thức bằng cách cho chúng tham gia nhiều hoạt động nghệ thuật khác nhau, như viết lách, làm thơ, vẽ, làm đồ gốm,... Điều này có thể áp dụng được cho trẻ mọi lứa tuổi.
        `,
    },
]

const SO2 = [
    {
        heading: '',
        content: '',
    },
    {
        heading: `MỘT SỐ 2 TRONG BIỂU ĐỒ (2)`,
        content: `
Biểu đồ có một số 2 cho thấy mức độ trực giác Cơ bản, nhưng không phải lúc nào cũng đủ trong thế giới đầy tính cạnh tranh này, đặc biệt là đối với đàn ông. Với các giá trị “ nhân tạo ” trong muôn mặt của xã hội, mỗi cá nhân cần phải tự điều chỉnh, tự khớp mình vào guồng quay chung để có thể cạnh tranh thành công. Và điều này không thể đạt được nếu không có sự nhạy cảm ở mức cân bằng cao độ. Nếu thiếu sự cân bằng này, những người mang bản tính nhạy cảm sẽ dễ bị tổn thương, dẫn đến những phản ứng thiếu khôn ngoan. Nam giới thường bị tình trạng này nhiều hơn nữ giới. Một số 2 trong ngày sinh có thể cung cấp nền tảng giá trị cho việc phát triển tính nhạy cảm cân bằng nhưng lý tưởng nhất vẫn là cặp đôi “ cân bằng ” 22 (Có hai số 2 trong biểu đồ). Phái nữ có một số 2 thì vẫn ổn, bởi trời sinh họ đã... đủ nhạy cảm rồi. Nhìn chung, người có một số 2 trong Biểu đồ ngày sinh thường cảm thấy cần nhiều thời gian để thư giãn, ở ngoài thiên nhiên và tránh xa môi trường cạnh tranh căng thẳng. Con số chủ đạo sẽ là chỉ dẫn đáng tin cậy để giúp bạn đạt được điều này.
        `,
    },
    {
        heading: `HAI SỐ 2 TRONG BIỂU ĐỒ (22)`,
        content: `
Cặp số 22 trong Biểu đồ ngày sinh là một lợi thế to lớn để một người phát triển trực giác và độ nhạy cảm. Nhưng người sở hữu cặp số 22 cần có ý thức sử dụng lợi thế này, nếu không nó sẽ bị mai một. Trực giác và độ nhạy cảm lý tưởng này giúp người có cặp số 22 đạt được trí thông minh trên mức trung bình, dựa trên khả năng thấu hiểu trời cho đối với con người và sự việc. Khi nói đến việc đánh giá người khác qua ấn tượng đầu tiên, trực giác của những người này cực đáng tin cậy, với độ chính xác và nhanh chóng đáng kinh ngạc. Họ gần như lập tức nhận ra người khác đối với họ có chân thành hay không, miễn là họ không để “ cái tôi ” hay trí tưởng tượng của mình nhảy vào và làm biến màu trực giác nguyên thủy mà họ có. Nếu được biểu đạt theo cách tích cực, trực giác nhạy bén và cân bằng này sẽ thu hút họ vào nhiều khía cạnh của đời sống con người. Thông thường họ sẽ xử lý những việc này rất suôn sẻ và thành công, nhưng họ cũng cần chú ý để tránh bị lôi kéo vào quá nhiều vụ việc. Điều đó có thể làm tổn hại hạnh phúc gia đình của họ. Cần nhớ rằng cân bằng mới là chìa khóa mở cửa thành công.
        `,
    },
    {
        heading: `BA SỐ 2 TRONG BIỂU ĐỒ (222)`,
        content: `
Một khi “ vượt ngưỡng cân bằng ”, chúng ta sẽ bị quá đà. Người có ba số 2 trong Biểu đồ ngày sinh thường có sự nhạy cảm quá mức, đến mức có thể phát triển thành một dạng gánh nặng tâm lý khó. Những người này rất dễ bị tác động bởi cảm xúc của người khác, từ đó rất dễ bị lún sâu vào vấn đề của người khác.
Để bảo vệ sự nhạy cảm của bản thân, những người này thường dành phần lớn thời gian chìm đắm trong thế giới riêng, do đó có thái độ cách biệt với xã hội và có thể phát triển thành sự cô độc. Nhiều người trong nhóm ba số 2 làm việc trong ngành giải trí sẽ có được thành công vượt trội vì họ có khả năng khắc họa một cách tinh tế tính cách của nhiều nhân vật khác nhau. Tuy nhiên, đôi khi quá nhập tâm nên họ khó thoát ra khỏi vai diễn và khiến bản thân tổn thương. Họ cũng gặp khó khăn trong việc biểu đạt những cảm xúc sâu sắc mà chỉ những người vô cùng nhạy cảm như họ mới có, và dễ tổn thương vì điều này. Do đó, họ thường có phản ứng tự vệ thái quá hoặc cố tình nói những lời làm tổn thương người khác như một cách để bảo vệ bản thân. Trẻ có ba số 2 trong ngày sinh thường rất giỏi bắt chước, và chúng luôn có bản năng muốn chia sẻ những cảm giác của người khác. Tuy nhiên, việc cảm xúc trồi sụt theo những vui buồn của người khác khiến chúng mệt mỏi và mất cân bằng, nên các bậc cha mẹ cần quan sát và hướng dẫn những đứa trẻ này cẩn thận. Nhiệm vụ quan trọng của các bậc cha mẹ là giúp con có được nền tảng vững chắc về sự tự tin, cùng với định hướng đường đời theo Con số chủ đạo của con.
        `,
    },
    {
        heading: `BỐN SỐ 2 TRONG BIỂU ĐỒ (2222)`,
        content: `
Sự nhạy cảm cao độ đến nhường này cần được theo dõi và kiểm soát cẩn thận, nếu không nó rất dễ biến thành những suy diễn sai lầm, đi kèm theo tính nóng giận, thói hay mỉa mai và sân si. Những người này thường vô cùng thiếu kiên nhẫn. Trực giác của họ trở nên kém tin cậy vì họ suy diễn quá nhiều, và họ có khuynh hướng đặt lòng tin nhầm người. 
Theo nghiên cứu và quan sát trong hơn bốn mươi năm của mình, Thầy David cho rằng mặc dù người có bốn số 2 chiếm tỷ lệ rất nhỏ trong tổng dân số, nhưng họ lại thường xuyên góp mặt trong nhóm những người có hôn nhân tan vỡ, phá sản hoặc phải lưu trú trong các viện tâm thần tại Mỹ. Họ hiếm khi leo lên được vị trí cao nơi công sở, nhưng khi đạt được vị thế đó thì họ thường cảm thấy rất khó khăn trong việc khiến người khác tin tưởng. Do đó, khi lên chậm bao nhiêu thì họ lại tụt xuống đáy nhanh bấy nhiêu, trừ khi họ có “ gia đình quyền lực ” với những mối quan hệ đặc dụng. Cuộc sống của những người có bốn số 2 thường rất cô đơn, và nhiều người mượn rượu chè, chất kích thích hoặc các thói gây nghiện khác để khỏa lấp sự trống trải trong tâm hồn. Họ có thể tránh được sự xa cách về mặt cảm xúc này nếu chịu mở lòng đón nhận những lời khuyên phù hợp và khôn ngoan. Họ cần phải học cách tự kiểm soát bản thân thật chặt chẽ khi có điều gì liên quan đến bày tỏ cảm xúc, học cách thư giãn và thiền mỗi khi có thể, cũng như xuôi theo dòng chảy của cuộc sống thay vì cứ đi ngược lại nó.
        `,
    },
    {
        heading: `NĂM SỐ 2 TRONG BIỂU ĐỒ (22222) HOẶC NHIỀU HƠN`,
        content: `
Đây là trường hợp cực kỳ hiếm. Những người có ngày sinh mang năm số 2 rất dễ phản ứng với sự nhạy cảm đặc biệt của mình. Họ rất cần sự quan tâm và hướng dẫn cực kỳ tập trung, tận tâm từ cha mẹ, thầy cô, đặc biệt khi họ còn rất nhỏ, và họ thường thử thách lòng kiên nhẫn của những người khác tới tận cùng.
Lưu ý: Trong những thập niên tới đây, chúng ta sẽ có dịp nhìn thấy những biểu đồ ngày sinh có sáu số 2, như trong ngày sinh của người sinh ra vào 22/2/2022; hoặc thậm chí là bảy số 2, như trong ngày sinh 22/2/2222 và 22/12/2222. Các bậc phụ huynh có con sinh vào những ngày này cần đặc biệt lưu ý để dìu dắt và kiên nhẫn với con ngay từ khi rất nhỏ, để hỗ trợ Con trong việc bày tỏ cảm xúc. Nhiều số 2 được lặp lại đồng nghĩa với việc Biểu đồ ngày sinh bị trống nhiều con số ở những vị trí khác. Điều này tạo thành những Mũi tên trống, cho thấy một số đặc điểm tương đối bất lợi cho người mang nhiều số 2. Tuy nhiên, hãy nhớ rằng những gì được thể hiện trên Biểu đồ ngày sinh chỉ mới là “ số vốn ban đầu ” của mỗi người khi vào đời. Khi nhận thức rõ điều này, chúng ta sẽ có cơ hội và khả năng điều chỉnh bản thân, từ đó tác động đến cuộc đời mình, bằng cách phát triển một số kỹ năng, tham gia các hoạt động mang tính chất của những con số không có mặt trên biểu đồ, đặc biệt là con số nằm ở vị trí trung tâm như số 5, hay các số nằm giữa các trục ngang, trục dọc khác.
        `,
    },
]

const SO3 = [
    {
        heading: '',
        content: '',
    },
    {
        heading: 'MỘT SỐ 3 TRONG BIỂU ĐỒ (3)',
        content: `
Được ví như mỏ neo của trí nhớ, số 3 duy nhất trên Biểu đồ ngày sinh cho thấy người sở hữu nó có trí nhớ rất tốt và lâu dài, miễn là nó được sử dụng thường xuyên (bất kỳ khả năng nào không được mài giũa thường xuyên sẽ dần dần mất đi độ sắc bén). Người có một số 3 trong ngày sinh thường giữ được sự nhanh nhạy trong hoạt động trí não. Những bạn trẻ có một số 3 sẽ rất có lợi thế trong việc học tập, cả trong trường học lẫn trường đời. Họ sẽ chủ động quan tâm tới cuộc sống và môi trường xung quanh. Người có một số 3 cũng rất linh hoạt và thường sống khá tích cực. Họ mang năng lượng tích cực này vào hầu hết những công việc mà họ làm. Họ cũng có sự tự tin trên mức trung bình, thứ góp phần không nhỏ vào thành công của họ trong cuộc sống.
        `,
    },
    {
        heading: 'HAI SỐ 3 TRONG BIỂU ĐỒ (33)',
        content: `
Nhân đôi độ nhạy về phần trí não, người có hai số 3 trong Biểu đồ ngày sinh thường giàu trí tưởng tượng và có khả năng văn chương. Tuy nhiên, những thế mạnh này cần được theo dõi chặt chẽ để có thể phát triển theo hướng tích cực và cân bằng nhất, tránh khả năng đi theo hướng tiêu cực vì sẽ dễ phát sinh những hành vi phản xã hội (có hành vì phản kháng xã hội hoặc từ chối giao lưu / giao tiếp) . Để hỗ trợ rèn luyện tinh thần kỷ luật bản thân, người có hai số 3 nên thực hành thiền tĩnh tâm mỗi khi có thể cùng với những bài tập luyện trí nhớ và phát triển trực giác. Những hoạt động này có thể giúp “kéo” họ về với thực tế, với những ý tưởng mang tính xây dựng và tích cực hơn. Nếu không, trí tưởng tượng quá phong phú của họ sẽ làm hỏng cái nhìn khách quan hay sự hiểu biết toàn diện. Khi nuông chiều trí tưởng tượng và suy diễn của mình, họ có thể từ từ mất luôn tính thực tế. Người có hai hay ba số 3 trong Biểu đồ ngày sinh thường có khả năng viết lách đáng nể. Nếu được khích lệ, họ có khả năng viết rất mạch lạc, khai thác được nhiều nguồn cảm hứng dồi dào và hoàn toàn có khả năng biến kỹ năng này thành một công việc có thu nhập đáng kể.
        `,
    },
    {
        heading: 'BA SỐ 3 TRONG BIỂU ĐỒ (333)',
        content: `
Ba số 3 đưa mức độ nhạy của tâm trí chạy quá xa về phía tưởng tượng, khiến những người sở hữu chúng thường mất liên kết với thực tế, từ đó gây ra sự cách biệt, thứ có nguy cơ kéo theo sự cô đơn. Họ tự tạo ra một “ thực tế ” của riêng mình, nhưng thật đáng tiếc là không ai khác có thể nhìn thực tế theo cách họ nhìn, vì vậy đơn độc lại càng thêm đơn độc. Trí tưởng tượng phong phú của họ thường tập trung vào những sự kiện chưa xảy ra và tạo ra những cảnh tượng lạ lùng đến mức họ thường khó tập trung vào hiện tại và kết nối với những người xung quanh. Với sự mất cân bằng như vậy, những người này thường cảm thấy khó tin tưởng người khác, hiếm khi được thư giãn và có thể nghiện một số loại thuốc chống căng thẳng.
Họ khó có bạn thân và hầu như không cảm thấy hạnh phúc. Đôi khi họ quá đắm chìm trong những cuộc viễn du trong tâm tưởng đến nỗi quên mất hiện tại, xao lãng luôn người đang nói chuyện với mình. Sự tập trung mất cân bằng như vậy không giúp ích gì cho họ trong việc nhìn nhận sự việc một cách chân thực. Càng như vậy, họ càng thu mình vào trong vỏ ốc nội tâm, và điều này lại khiến họ càng thêm mất lòng tin nơi người khác, gây ra nhiều sự mâu thuẫn và tranh cãi. Nếu Có người thân thuộc nhóm này, bạn cần hết sức kiên nhẫn, thấu hiểu và quan tâm, yêu thương, định hướng thận trọng. Cách tốt nhất để hỗ trợ họ là hãy khuyến khích họ chú ý vào thực tại. Họ cần được dạy tính thực tế thông qua những hoạt động sử dụng sự khéo léo của đôi tay và nhận diện cảm xúc từ trái tim, thường là qua các hoạt động hay hình thức mang tính nghệ thuật. Sự kiên nhẫn và cảm thông từ người hướng dẫn là cực kỳ quan trọng.
        `,
    },
    {
        heading: 'BỐN SỐ 3 TRONG BIỂU ĐỒ (3333) hoặc nhiều hơn',
        content: `
Trường hợp hiếm này chỉ có thể xảy ra vào một tháng duy nhất ở mỗi thế kỷ. Ở thế kỷ 20, trường hợp cuối cùng là vào ngày 31/3/1933, nghĩa là người này nếu còn sống thì cũng khá lớn tuổi rồi. Còn ở thế kỷ 21, mãi tới ngày 3/3/2033 mới có Biểu đồ ngày sinh gồm bốn số 3. Vậy nên tôi sẽ không bàn nhiều về trường hợp này. Chúng ta chỉ cần hiểu rằng càng nhiều số 3 trong biểu đồ thì mức độ tưởng tượng càng đậm, vì vậy, khó khăn càng dày.
        `,
    },
]

const SO4 = [
    {
        heading: '',
        content: '',
    },
    {
        heading: 'MỘT SỐ 4 TRONG BIỂU ĐỒ (4)',
        content: `
Người có một số 4 trong Biểu đồ ngày sinh là những người rất chủ động, làm việc gì cũng hăng hái và thực tế, bao gồm các hoạt động liên quan đến lĩnh vực tổ chức, kỹ thuật, tài chính hoặc hoạt động thể chất như làm vườn, các hình thức nghệ thuật tạo hình từ đôi tay, xây dựng,... Hoạt động mà họ lựa chọn theo đuổi và có khả năng thành thạo nhất thường được thể hiện qua con số chủ đạo. Ví dụ, tôi có Con số chủ đạo là 9, trong đó có định hướng ngành nghề phù hợp là “ không giỏi tính toán, đừng làm ăn kinh doanh vì không giỏi tài chính ”. Đồng thời tôi cũng có một số 4 trong Biểu đồ ngày sinh, trong đó có yếu tố khá tài chính.  So sánh sức ảnh hưởng của hai bên thì con số chủ đạo có ảnh hưởng lớn hơn, nên yếu tố “ không giỏi tài chính ” vẫn trội hơn, nhưng nhờ có được một số 4 nên vẫn có thể lên ý tưởng, làm nội dung, định hướng cho kinh doanh, miễn là đừng tham gia vào các hoạt động sổ sách, kế toán là được.
Những người có một số 4 sẽ thích bắt tay vào việc thực tế hơn là ngồi nghiền ngẫm lý thuyết suông, và đặc biệt, họ thường hoài nghi, không tin vào những điều có vẻ quá mơ hồ, trừu tượng. Họ thích thực tế hơn lý thuyết và dễ mất kiên nhẫn với những ai hẹn lần hẹn lữa hay cứ dời hạn đã hẹn. Họ thích xúc tiến công việc ngay lập tức, và điều này gần như trở thành quy tắc “ bất di bất dịch ” đối với họ, đặc biệt là khi họ có thêm một số 7 nữa trong ngày sinh. Nếu quan tâm quá nhiều đến khía cạnh vật chất, những người có một số 4 thường có xu hướng thực dụng. Điều này có thể là một khía cạnh tiêu cực của số 4 nói chung, mục đích là để dạy cho những người sở hữu Con số này biết vận dụng lòng kiên nhẫn vốn có của mình để tránh chạy theo chủ nghĩa vật chất. Cách tốt nhất để làm được điều đó là học cách nhẫn nại và quan tâm đến những người xung quanh nhiều hơn. Nói cách khác, càng quan tâm và thương yêu người khác nhiều thì từ từ bạn sẽ càng không còn màng đến những giá trị vật chất quanh mình nữa. Và bằng cách này, bạn sẽ đạt được tình bạn và hạnh phúc lâu dài.
        `,
    },
    {
        heading: 'HAI SỐ 4 TRONG BIỂU ĐỒ (44)',
        content: `
Nhân đôi số 4 có thể dẫn tới cái nhìn không cân bằng về cuộc sống, mà trong đó mọi thứ đều được quy về giá trị thực tế và vật chất. Vậy điều mà người có hai số 4 cần học là cách cân bằng giữa ba khía cạnh: thể chất / vật chất, tinh thần và trí não. Như vậy họ sẽ sống thoải mái, hài hòa hơn với cảm xúc và tư duy của chính mình.
Nếu những người này có con số chủ đạo thuộc Trục ngang Tinh thần (số 2 , 5 , 8) hoặc Trục ngang Trí não (số 3 , 6 , 9) , thì họ có khả năng bẩm sinh trong lĩnh vực tinh thần hay trí não cao hơn những người cũng thuộc nhóm này nhưng có con số chủ đạo thuộc Trục ngang Thể chất (các số 4,7). Nói chung, càng có nhiều số 4 trong Biểu đồ ngày sinh thì chúng ta càng cần phải học cách cân đối ba lĩnh vực nói trên, và khi chọn bạn bè, cần phải lưu ý tránh xa những người có khả năng tác động tiêu cực đến mình. Ngược lại, nếu chọn được những người bạn biết trân trọng giá trị thẩm mỹ, văn hóa, đạo đức, thì cuộc đời chúng ta cũng sẽ cân bằng theo hướng tốt đẹp.
        `,
    },
    {
        heading: 'BA SỐ 4 TRONG BIỂU ĐỒ (444) hoặc nhiều hơn',
        content: `
Tất cả những đặc điểm của hai số 4 đều được thể hiện trong Biểu đồ ba số 4, nhưng với cấp độ mãnh liệt hơn, vì những người sở hữu biểu đồ này bị cột chặt vào những giá trị vật chất, đến mức mỗi khi họ có ý thức muốn thoát ra để hướng tới những giá trị cao hơn thì họ lại dễ bị các giá trị vật chất lôi kéo trở lại. Những người nhận thức được sức hút này của chủ nghĩa vật chất phải có ý chí mạnh mẽ và thái độ sẵn sàng tiếp nhận sự chỉ dẫn tận tình thì mới có thể phát triển thêm về mặt trí não, tinh thần hoặc tâm linh. Nhiều người có ba số 4 thường lao vào kiếm tiền đến mức kiệt quệ mà không nhận ra bài học của họ là kiểm soát công việc để hiểu những giá trị mà công việc đó mang đến, chứ không phải vùi đầu làm tôi tớ cho nó. Khi nhận ra điều này và có ý thức thoát khỏi nó, họ sẽ có khả năng cân bằng hơn ở ba khía cạnh thể chất - tinh thần - trí não. Bên cạnh đó, Thầy David, còn thấy rằng những người có ba số 4 có khuynh hướng bị yếu hai chân, do họ thường đặt quá nhiều trọng tâm lên phần chi dưới. Họ cần quan tâm đặc biệt đến đầu gối, cổ chân và bàn chân.
        `,
    },
]

const SO5 = [
    {
        heading: '',
        content: '',
    },
    {
        heading: 'MỘT SỐ 5 TRONG BIỂU ĐỒ (5)',
        content: `
Người có một số 5 trong Biểu đồ ngày sinh sẽ có cơ hội tốt nhất để đạt được tính cách cân bằng. Đây cũng là con số duy nhất đảm bảo tất cả các con số nằm ở bốn góc biểu đồ (1,3,7,9) không bị rơi vào thế “ Con số bị cô lập ”. Đặc biệt, một số 5 sẽ hỗ trợ rất tốt cho việc kiểm soát cảm xúc, vì nó đảm bảo sự nhạy cảm với cuộc sống được phát triển thành một chỉ dẫn trực giác đáng tin cậy. Điều này giúp những người sở hữu một số 5 xuất sắc trong việc chọn lựa những hành động phù hợp với tình huống chứ không phản ứng một cách thiếu suy nghĩ. Có vai trò như một hàng rào bảo vệ đầy giá trị cho sự nhạy cảm của con người, một số 5 trong biểu đồ sẽ củng có tính can trường và lòng trắc ẩn, qua đó tạo nên một người đầy nghị lực. Nó cũng mang lại sức mạnh của lòng trắc ẩn và sự tự do để thúc đẩy các giá trị của tất cả những hình thức biểu đạt khác. Số 5 duy nhất trong biểu đồ cũng hỗ trợ người sở hữu nó thấu hiểu những cảm xúc của bản thân, và từ đó giúp họ có khả năng tôn trọng cảm nhận của người khác.
        `,
    },
    {
        heading: 'HAI SỐ 5 TRONG BIỂU ĐỒ (55)',
        content: `
Người có hai số 5 trong Biểu đồ ngày sinh thường có lòng quyết tâm mãnh liệt, được thể hiện qua ánh mắt mạnh mẽ và đôi lông mày hay nhíu lại. Quyết tâm sắt đá này mang đến cho họ dáng vẻ rất tự tin và kiên định, mà đôi khi chỉ là bề ngoài hơn là thực tế. Khi họ trưởng thành, sự tự tin này thường chỉ còn là thứ mà chúng ta hay gọi là “ làm oai ”, chứ không phải là sự tự tin thật sự. Đồng thời họ cũng gặp phải nhiều khó khăn trong việc xử lý những vấn đề quá nặng về tình cảm, cảm xúc trong gia đình hoặc nơi công sở. Họ cần chú ý để không nghiêm trọng hóa các vấn đề này và giữ cho mọi việc nhẹ nhàng như nó vốn dĩ như vậy.
Đôi khi sự mãnh liệt và nhiệt tình ở những người có hai số 5 trở nên thái quá đến mức không thể chịu đựng được và gây ra những sự hiểu lầm khiến những người thân cận với họ cảm thấy phiền hà và điên tiết. Sự nghiêm trọng quá mức trong thái độ hay lời nói của họ có thể lên đến mức tạo ra những hỗn loạn về cảm xúc trong môi trường họ sống, từ đó gây ra các vấn đề sức khỏe có liên quan đến vùng bụng và dạ dày, như chứng khó tiêu hoặc loét dạ dày. Những người có hai số 5 cần chú ý kiểm soát cảm xúc, nếu không họ dễ sa đà vào các chất hay thói quen gây nghiện để giải tỏa năng lượng cảm xúc bị dồn nén của mình.
        `,
    },
    {
        heading: 'BA SỐ 5 TRONG BIỂU ĐỒ (555)',
        content: `
Những đặc điểm của hai số 5 sẽ thể hiện mạnh mẽ hơn khi một người có đến ba số 5 trong Biểu đồ ngày sinh. Những cảm xúc mãnh liệt đến mức gây căng thẳng như vậy rất khó để dung hòa. May mà rất hiếm người có ngày sinh rơi vào trường hợp này. Các bậc cha mẹ cần dạy con từ rất sớm để trang bị cho con khả năng tự kỷ luật. Đây là trách nhiệm rất quan trọng của những bậc phụ huynh này, những người hiếm khi được chuẩn bị tinh thần cho trọng trách này và thường cảm thấy không thể hiểu nổi đứa con “ phức tạp ” của mình. Các bậc cha mẹ cũng đừng tuyệt vọng, vì tình yêu thương và sự thấu hiểu của họ sẽ đem lại giá trị lớn lao và giúp các con phát triển đúng mực.
Với trường hợp này, cả cha mẹ và con cái đều phải cẩn trọng suy nghĩ trước khi nói hoặc hành động, để tạo điều kiện cho sức mạnh trí tuệ được phát huy và giảm thiểu nguy cơ vô tình làm tổn thương sự nhạy cảm của một người “ mãnh liệt ” như vậy. Nếu làm được điều này thì các con của họ sẽ không cần dựng lên một “ hàng rào ” bảo vệ sự nhạy cảm của chính mình. Điều này sẽ giúp bảo đảm đời sống xã hội và hạnh phúc của con trẻ.
        `,
    },
    {
        heading: 'BỐN SỐ 5 TRONG BIỂU ĐỒ (5555) hoặc nhiều hơn',
        content: `
Con số này rất hiếm gặp. Người sở hữu cụm số này thường bị căng thẳng dữ dội, khiến cho họ dễ gặp các vấn đề về sức khỏe có liên quan đến vùng bụng và dạ dày. Những người này cũng dễ gặp tai nạn và thường ở trong trạng thái căng thẳng cao độ. Cuộc sống thường tạo ra các “ tai nạn ” để khiến chúng ta chậm bước lại hoặc quay đầu, nếu chúng ta có lỡ lạc khỏi con đường tiến hóa của mình. Nhưng nếu không biết tự xem xét tình huống của mình, chúng ta sẽ có nguy cơ gặp thêm nhiều “ tai nạn ” khác trên hành trình của mình. Đây là điều rất dễ xảy ra với người có bốn số 5 trong Biểu đồ. Những người này cũng thường cảm thấy cuộc sống rất khó hiểu, nếu họ không chịu tiếp nhận những sự hướng dẫn khôn ngoan để giúp định hướng cho bản thân mình.
        `,
    },
]

const SO6 = [
    {
        heading: '',
        content: '',
    },
    {
        heading: 'MỘT SỐ 6 TRONG BIỂU ĐỒ (6)',
        content: `
Số 6 chỉ óc sáng tạo, và biểu hiện phổ biến nhất của những người mang đặc tính này của số 6 chính là tình yêu sâu đậm với mái ấm của mình. Tuy nhiên, khi thể hiện ở mức độ cá nhân, họ thường chọn những lĩnh vực nghệ thuật, như sáng tác, biểu diễn, vẽ tranh, làm gốm... Người có một số 6 rất tập trung vào trách nhiệm với gia đình. Nhưng khi trưởng thành hơn, những người này cảm thấy chỉ trách nhiệm với gia đình thôi là chưa đủ để thể hiện tính sáng tạo của mình, do đó họ sẽ tham gia vào nhiều lĩnh vực khác để thỏa mãn bản thân - hoặc họ sẽ tiếp tục thắc mắc tại sao mình vẫn chưa có được cảm giác mãn nguyện trong những việc mình làm. Khi họ “ phát hiện ” ra các thể loại nghệ thuật phù hợp, đặc biệt là sức mạnh sáng tạo của âm nhạc, cuộc sống của họ sẽ thăng hoa một cách đáng kinh ngạc.
        `,
    },
    {
        heading: 'HAI SỐ 6 TRONG BIỂU ĐỒ (66)',
        content: `
Có hai số 6 trong Biểu đồ ngày sinh có thể trở thành một thử thách vĩ đại hoặc một gánh nặng vô cùng to lớn. Mỗi cá nhân sẽ có cách ứng phó khác nhau với tình trạng này, tùy vào con số chủ đạo và nhiều yếu tố khác như môi trường sống, đặc biệt là ảnh hưởng của cha mẹ trong giai đoạn đầu đời. Mặt tiêu cực của hai số 6 thể hiện khá rõ nét và kéo dài đối với những người có nhận thức kém hơn. Điều này gây ra sự lo lắng, bồn chồn, căng thẳng và dễ nóng giận, đặc biệt là ở nhà và nơi công sở. Những người thân cận với họ sẽ cảm nhận sự tiêu cực này rõ nhất; và đối với tất cả những người có liên quan, sự tiêu cực này có thể gây ra tình trạng rối loạn vì căng thẳng, thậm chí có thể dẫn đến bệnh tật.
Cách hóa giải tốt nhất là mở rộng mối quan tâm của họ ra ngoài phạm vi gia đình để vươn tới những lĩnh vực sáng tạo đa dạng hơn. Nghề nghiệp của những người có hai số 6 trong ngày sinh nên hướng về những ngành chú trọng tính sáng tạo, được truyền cảm hứng bởi sự tự tin và thấu hiểu sâu sắc về một vấn đề nào đó. Họ cần được hướng dẫn nhẹ nhàng - đừng bao giờ hối thúc hay đe dọa họ. Đối với những người này, tình yêu và sự tôn trọng là vô cùng quan trọng, có chức năng như “ dầu cù là giúp xoa dịu hệ thống thần kinh nhạy cảm của họ. Những người này cần thư giãn nhiều hơn những nhóm khác, bởi họ tiêu hao rất nhiều năng lượng trí não vào những hoạt động sáng tạo hoặc hoạt động thường ngày. Họ cần tập tĩnh tâm, hoặc thiền càng tốt, trước khi đi ngủ để đảm bảo sự thư giãn hoàn toàn. Họ cũng cần những giấc ngủ trưa mỗi khi có thể.
        `,
    },
    {
        heading: 'BA SỐ 6 TRONG BIỂU ĐỒ (666)',
        content: `
Người có ba số 6 trong Biểu đồ ngày sinh càng nhân thêm sự căng thẳng thần kinh trong mọi việc, đặc biệt là trong chuyện gia đình. Phụ nữ chịu tác động bởi điều này nhiều hơn, vì mối quan tâm hàng đầu của những người phụ nữ có ba số 6 thường là vấn đề gia đình. Một trong những hậu quả của điều này chính là họ thường bảo vệ các con quá mức, có thái độ sở hữu đối với những người mà họ yêu thương.
Vấn đề thường gặp đối với những người thuộc nhóm này chính là họ hiếm khi nhận ra tiềm năng sáng tạo rất tích cực trong cuộc sống gia đình. Thay vào đó, họ thường tự làm khổ mình bởi các mối bận tâm, và điều này trở thành những cơn lốc cảm xúc lệch lạc. Bảo vệ con cái quá mức chính là biểu hiện của tình trạng này. Họ thường cảm thấy sợ hãi viễn cảnh con cái lớn khôn và rời khỏi vòng tay mình, do đó họ bắt đầu có những hành động sở hữu kém lành mạnh mà cuối cùng sẽ khiến các con của họ cảm thấy bị trói buộc, để rồi chúng sẽ muốn rời xa họ sớm hơn.
Những người này cần chú trọng quan tâm bản thân để có được sự cân bằng trong cuộc sống. Nghỉ ngơi, thư giãn đúng mực, tìm sự giải khuây và thú vui trong các hoạt động sáng tạo ở bất kỳ hình thức nào cũng là những giải pháp tốt để đạt được điều này.
        `,
    },
    {
        heading: 'BỐN SỐ 6 TRONG BIỂU ĐỒ (6666)',
        content: `
Người có bốn số 6 cực kỳ hiếm, xuất hiện chỉ ba lần trong một thế kỷ. Trong thế kỷ 20, ngày sinh cuối cùng có bốn số 6 là ngày 26/6/1966, và may mắn ngày sinh này có các số 1 , 2 và 9 giúp giảm bớt sự căng thẳng của nhiều số 6 lặp lại. Bốn số 6 thể hiện tiềm năng sáng tạo vượt trội. Mặt khác, các khía cạnh tiêu cực, vốn bị chi phối nặng nề bởi cảm xúc, cũng luôn chực chờ để thao túng những người có bốn số 6 trong biểu đồ. Chính vì vậy, những người này dễ bị lo âu sầu khổ, làm tổn hại đến sức khỏe của họ và các mối quan hệ bạn bè và những lời phàn nàn không ngớt. Nếu cha mẹ nhìn ra đặc điểm này của đứa trẻ có bốn số 6 ngay từ nhỏ và kiên nhẫn hướng dẫn trẻ phát huy tiềm năng sáng tạo, thì trẻ sẽ không bị chi phối bởi những đặc điểm tiêu cực của bốn số 6. Khi được đối xử bằng tình yêu thương vô điều kiện, những người sở hữu bốn số 6 sẽ dễ dàng tìm được cách tích cực để thể hiện tài năng của mình ở các hoạt động sáng tạo.
Tóm lại, những người có số 6 trong ngày sinh sẽ luôn có thiên hướng sáng tạo. Chúng ta càng sớm ý thức được điều này và tập trung mài giũa nó thì càng dễ tránh được những khía cạnh tiêu cực như đã đề cập ở trên. Khi đó, năng lượng của bốn số 6 được giải phóng một cách tích cực và sẽ thăng hoa, giúp người sở hữu nó gặt hái được nhiều thành quả tốt đẹp.
        `,
    },
]

const SO7 = [
    {
        heading: '',
        content: '',
    },
    {
        heading: 'MỘT SỐ 7 TRONG BIỂU ĐỒ (7)',
        content: `
Sự hy sinh của bạn sẽ thuộc một trong ba lĩnh vực sau đây : sức khỏe, tiền tài hoặc tình yêu. Sự hy sinh này đã hoặc sẽ xuất hiện trong cuộc đời bạn như một phần thiết yếu trong tiến trình học hỏi ở vòng đời này. Những đau thương, hy sinh này là một phần để tâm hồn bạn chịu “ hé mở ” . Nhưng thông thường, những người chịu tổn thất, hy sinh này lại than vãn mà không nhận ra bản chất của bài học này chính là “ buông bỏ để đạt được ”.
Khi không đánh đồng bản thân với giá trị của những của cải vật chất mà mình sở hữu, chúng ta học được sự khác biệt giữa “ sở thích ” và “ nỗi ám ảnh sở hữu ”. Về mặt sức khỏe và tình yêu, bất kỳ sự mất mát nào về mặt này đều giúp chúng ta trui rèn và thanh lọc thái độ cũng như các thói quen trong cuộc sống. Nếu muốn hoàn thành mục đích sống của mình khi đến với Trái đất này, chúng ta phải đảm bảo chăm sóc tốt sức khỏe của mình. Trong tình yêu, ta thường hay nhầm lẫn sự thèm muốn (có được tình yêu) với tình yêu vô điều kiện. Hãy nhớ rằng, nếu thực hành yêu thương vô điều kiện, chúng ta không bao giờ mất mát gì cả, bởi vốn dĩ ta không có mong cầu gì. Tuy nhiên, thực tế là nhiều người trong chúng ta hiếm khi duy trì được tình yêu dài lâu vì cứ gắn kèm “ tình yêu ” với biết bao đòi hỏi và kỳ vọng về cảm xúc.
        `,
    },
    {
        heading: 'HAI SỐ 7 TRONG BIỂU ĐỒ (77)',
        content: `
Hai số 7 trong Biểu đồ ngày sinh nhấn mạnh gấp đôi mức độ của “ bài học ” trong cuộc đời. Những người có hai số 7 sẽ thấy những bài học thương đau trong cuộc đời họ xuất hiện ở hai trong số ba khía cạnh cơ bản của đời sống: sức khỏe, tình cảm, hoặc tiền tài. Trải nghiệm này có mục đích nhắc nhở họ thấu hiểu ý nghĩa mang tính triết lý của cuộc đời ở mức độ sâu sắc hơn. Điều này thường kích thích sự quan tâm của họ đối với các vấn đề thuộc phạm trù siêu hình học, từ đó khơi dậy năng lực chữa lành, khả năng hướng dẫn và lòng trắc ẩn trong họ.
Nếu không nhận ra những giá trị sâu xa này, người có hai số 7 sẽ dễ rơi vào trạng thái sống tiêu cực và không ngừng than vãn về những mất mát đau thương mà họ gặp phải, trách móc mọi người về các vấn đề của họ và lên án cuộc đời bất công. Họ sẽ trở thành những người cọc cằn, xấu tính mà hầu như ai cũng muốn tránh tiếp xúc.
        `,
    },
    {
        heading: 'BA SỐ 7 TRONG BIỂU ĐỒ (777)',
        content: `
Người có ba số 7 trong Biểu đồ ngày sinh có vẻ là những người có số phận đáng buồn vì gặp phải những mất mát nặng nề trong cả ba khía cạnh của đời sống: sức khỏe, tình cảm hoặc tiền tài. Nhưng đó lại thường là cảm nhận của những người thân thiết với họ, chứ không phải là cảm nhận của bản thân họ - người gánh chịu những tổn thất này - vì sau khi trải qua quá nhiều bài học thương đau, họ đã có sự thấu hiểu sâu sắc và nhận ra mục đích mà “ đời ” đang kiên trì “ dạy họ. Những mất mát này chính là bài kiểm tra tính can trường và lòng trắc ẩn, mà những ai vượt qua được sẽ trở nên vô cùng mạnh mẽ. Những người này có giá trị và quan điểm về cuộc sống phát triển vượt qua giới hạn trí tuệ thông thường. Họ là vốn quý của gia đình và xã hội, là chỗ dựa đáng tin cậy để mọi người có thể tìm đến nương tựa hoặc xin chỉ dẫn. Nhưng đó là với những ai vượt qua được những thử thách ngặt nghèo của cuộc sống. Còn đối với những người có ba số 7 không thể lội qua vùng lầy này, họ sẽ cảm thấy mất tất cả, héo hon trong vũng bùn cuộc đời và dựa vào lòng thương cảm của người khác để níu kéo sự tồn tại của mình. Họ rất dễ trầm cảm và có những hành vi phản xã hội khiến bạn bè rời xa, gia đình né tránh.
        `,
    },
    {
        heading: 'BỐN SỐ 7 TRONG BIỂU ĐỒ (7777)',
        content: `
Với cả bản thân đứa trẻ lẫn cha mẹ của những đứa trẻ có bốn số 7, sự hỗ trợ tận tình trong đời sống thực tế và tinh thần là thiết yếu, vì nếu không, cả cha mẹ lẫn đứa trẻ đều sẽ gục ngã dưới gánh nặng mà những tổ hợp những mất mát mang lại. Nhưng một lần nữa , cần phải nhấn mạnh rằng những tổn thất này có thể là những trải nghiệm đáng giá mà qua đó chúng ta sẽ học được những bài học để đời. Lộ trình đầy cam go này là không thể tránh được, do đó, tốt nhất là gia đình và bản thân người mang bốn số 7 cần thay đổi quan điểm về cuộc sống, từ “ ly nước đã vơi một nửa ” sang “ ly nước còn đầy một nửa ” , để có thể vượt qua chặng đường gập ghềnh này.
        `,
    },
]

const SO8 = [
    {
        heading: '',
        content: '',
    },
    {
        heading: 'MỘT SỐ 8 TRONG BIỂU ĐỒ (8)',
        content: `
Khi sống tích cực, người có một số 8 trong Biểu đồ sinh vô cùng tỉ mỉ và làm việc có hệ thống. Còn nếu sống tiêu cực, họ sẽ lãnh đạm và không ổn định. Sự ngăn nắp, tỉ mỉ, có sự chú ý hợp lý đến các chi tiết và quan tâm đến hiệu quả công việc là bản chất tự nhiên của những người này. Đây là những đặc điểm đến từ “ kho trí thức ” thực tế của họ, vốn là nền tảng cho sự phát triển tính độc lập ở nhóm người này.
Tuy nhiên, nếu chọn hướng tiêu cực, họ sẽ không ổn định về mặt cảm xúc, dễ bực bội và bồn chồn, mà hậu quả là họ thường thay đổi công việc, nhà ở và cả những mối quan hệ.
        `,
    },
    {
        heading: 'HAI SỐ 8 TRONG BIỂU ĐỒ (88)',
        content: `
Khả năng đánh giá của hai số 8 trên Biểu đồ ngày sinh có thể cực kỳ có lợi cho người sở hữu nó, hoặc sẽ khiến họ trở nên vô cùng không ổn định, tùy thuộc vào mức độ tích cực của họ. Nếu nói về sự quan tâm đến chi tiết, những người này xuất sắc đến mức khó ai bì kịp. Nhưng họ cần ý thức để khả năng quan sát này không khiến họ tự tin thái quá đến mức trở nên độc tài. Vì điều này sẽ gây ra sự mâu thuẫn về cảm xúc trong chính bản thân họ, dẫn tới hậu quả là sự bất an cao độ và tính bất ổn định về cảm xúc.
Nhu cầu đi tìm chân lý và sự thông thái cũng có thể khiến họ đứng ngồi không yên, nhưng theo hướng tích cực. Nó tạo cảm hứng cho họ du lịch đó đây, mà qua đó họ sẽ lượm lặt được nhiều kinh nghiệm, kiến thức và tri thức. Nếu lúc trẻ họ không du lịch nhiều, sự thất vọng trong lòng họ có thể phát triển và ngày càng khiến họ khó chịu hơn. Điều này có thể gây ra cảm giác bị trói buộc, và chỉ khi nào có cơ hội đi đó đây thì họ mới có thể tìm lại được cảm giác bình yên trong tâm trí.
        `,
    },
    {
        heading: 'BA SỐ 8 TRONG BIỂU ĐỒ (888)',
        content: `
Ở người có ba số 8 trong Biểu đồ ngày sinh, cảm giác bồn chồn khó chịu thường đến từ khía cạnh tiêu cực hơn là từ khía cạnh tích cực. Họ cảm thấy cuộc sống vô nghĩa và thật đáng chán, và do đó, họ trở thành nạn nhân của sự bi quan cùng cực. Những người này cần rất nhiều tình yêu thương và sự hướng dẫn để khuyến khích họ có cái nhìn rộng mở và lạc quan hơn về cuộc đời. Suy cho cùng, họ cần hiểu rằng cuộc sống này vẫn tiếp diễn, cho dù họ có tích cực tận hưởng nó hay không.
Tất cả những gì họ cần làm là thay đổi thái độ và nhảy xuống nước để tham gia cuộc bơi đua, thay vì đứng trên bờ than thở về nhiệt độ của dòng nước mà họ thậm chí còn chưa nhúng chân xuống thử. Đối với người có ba số 8 biết hướng về sự tích cực, cuộc sống của họ là chuỗi ngày tỏa sáng của trí tuệ và cảm giác độc lập đáng tự hào.
Ngay cả khi họ luôn thích xê dịch, sự bình yên trong tâm hồn và năng lượng của niềm vui sống luôn giúp họ có rất nhiều bạn bè. Thật không may là chỉ có một số rất ít người có ba số 8 có thể sống theo hướng này, nhưng hy vọng sẽ có những người đọc được những lời này và chuyển tiêu cực thành tích cực, từ đó thay đổi cuộc đời mình theo chiều hướng tốt hơn.
        `,
    },
    {
        heading: 'BỐN SỐ 8 TRONG BIỂU ĐỒ (8888)',
        content: `
Những người có bốn số 8 trong ngày sinh thường cực kỳ năng động, đôi khi trở thành “ tăng động ” . Những đứa trẻ có bốn số 8 không bao giờ chịu ngồi yên, vì đối với chúng thì đây là hành động “ bất thường ”, khiến cảm xúc của chúng bị dồn nén và cuối cùng sẽ “ bùng nổ ” thành cảnh gà bay chó sủa. Người thuộc nhóm này cần được dạy để phát triển khả năng định hướng chính xác từ khi còn nhỏ, và nên được đưa đi đó đi đây thường xuyên cho đến khi họ đủ trưởng thành để có thể tự đi một mình.
        `,
    },
]

const SO9 = [
    {
        heading: '',
        content: '',
    },
    {
        heading: 'MỘT SỐ 9 TRONG BIỂU ĐỒ (9)',
        content: `
Số 9 mang ba giá trị lớn là tham vọng / hoài bão, trách nhiệm và lý tưởng. Đây là sức mạnh nền tảng cho sự phát triển của xã hội thế kỷ trước, thúc đẩy chúng ta tìm hiểu cuộc sống nhiều hơn và kiểm soát nó tốt hơn. Thầy David nhắc nhớ rằng đừng nghĩ có được ba giá trị lớn này thì chúng ta đã thành công. Mặc dù so với đầu thế kỷ 20, giờ đây chúng ta hiểu biết hơn về môi trường sống và giá trị của con người, nhưng chúng ta cũng khiến môi trường xuống cấp hơn, bệnh tật xuất hiện nhiều hơn, sự đói nghèo cũng gia tăng hơn bất kỳ giai đoạn nào trong hai thế kỷ vừa qua. Chúng ta đã sai ở đâu? Có phải chúng ta đã tập trung vào tham vọng và không đủ chú trọng yếu tố trách nhiệm và lý tưởng?
Để phát huy sức mạnh của một số 9 một cách hiệu quả nhất, chúng ta cần học cách cân bằng ba giá trị này, tạo thành thế hài hòa, vững chãi như kiềng ba chân. Bất kỳ sự bù đắp quá mức nào cũng chỉ làm sự mất cân bằng thêm trầm trọng và dẫn đến những điều tệ hại khác mà thôi . Hãy nhớ rằng sự cân bằng mới là quan trọng nhất.
        `,
    },
    {
        heading: 'HAI SỐ 9 TRONG BIỂU ĐỒ (99)',
        content: `
Tính lý tưởng và sự nhiệt tình được tăng cao, kèm theo những suy nghĩ cực kỳ nghiêm túc chính là đặc điểm của những người có hai số 9 trong Biểu đồ ngày sinh. Họ thường thể hiện tính lý tưởng một cách thái quá đến mức những lý tưởng đó gần như phi thực tế. Do đó, họ cần nỗ lực duy trì sự cân bằng giữa tính thực tế và lý tưởng. Nếu muốn có cuộc sống hạnh phúc, những người này cần kiềm chế khuynh hướng phê bình những người mà họ cho là có mức độ lý tưởng thấp hơn mình.
Mặt khác, nhóm người có hai số 9 thường có tư duy sâu sắc, và đằng sau tất cả những gì họ làm chính là mong muốn được trở thành người hữu ích. Họ chỉ cần tập thể hiện mong muốn này cho rõ ràng và tránh để nó bị lợi dụng.
        `,
    },
    {
        heading: 'BA SỐ 9 TRONG BIỂU ĐỒ (999)',
        content: `
Với ba số 9 trong Biểu đồ ngày sinh, sức mạnh của tính lý tưởng và tham vọng trở nên vượt trội đến mức khó kiểm soát. Sức mạnh này đôi khi còn gây ra mất cân bằng về mặt tâm trí đối với những ai không nhận ra nó. Vấn đề này có thể được khắc phục bằng cách sớm xác định những đứa trẻ có ba số 9 trong biểu đồ và dạy trẻ cách biểu đạt đồng đều trên cả ba phương diện chứ không chỉ tập trung vào phương diện trí não.
Thêm vào đó, khi sống tiêu cực thì những người thuộc nhóm này còn hay có xu hướng phóng đại mọi thứ. Điều này thường gây ra những cơn giận bộc phát, mất kiểm soát cảm xúc, thậm chí còn có nguy cơ làm tổn hại đến sự cân bằng về mặt tâm trí. Bài học thiết yếu cho những người có ba số 9 là nhìn nhận mọi sự một cách khách quan và đúng với giá trị thực của chúng. 
Điều này sẽ giúp họ bớt phán xét và có thể chấp nhận những sự “ lệch pha ” nho nhỏ so với hệ thống lý tưởng cứng nhắc của mình.
        `,
    },
    {
        heading: 'BỐN SỐ 9 TRONG BIỂU ĐỒ (9999)',
        content: `
Thi thoảng chúng ta gặp một số người có bốn số 9 trong Biểu đồ ngày sinh. Mặc dù chỉ chiếm tỷ lệ rất nhỏ trong dân số, họ thật sự cần được hỗ trợ. Thầy David chia những người này thành hai nhóm riêng biệt: Phổ biến nhất là nhóm những người sống mơ màng trong một thế giới kém thực tế. Họ thường rơi ra khỏi guồng quay của xã hội vì không thể nắm bắt được những yếu tố thực tế trong cuộc sống, thứ không thể đẹp và hoàn hảo như trong lý tưởng của họ. Một số khác thì không đến mức như thế. Họ có vẻ “ bình thường và ngoan ngoãn cho đến khi chịu hết nổi - khi đó họ sẽ tự tách mình ra khỏi xã hội hoặc tự khóa mình trong nhà suốt nhiều ngày hoặc nhiều tháng trời.
Đây là những người không gây hại gì, nhưng cũng không cho rằng mình có bất cứ điều gì bất thường và không chịu đón nhận sự hỗ trợ hoặc dẫn dắt. Nhóm thứ hai là những người có thái độ quá khích, thù hằn và có vẻ tìm sự thỏa mãn qua việc miệt thị những người mà theo quan điểm của họ là quá kém so với lý tưởng của họ. Đây là những người có thể trở nên nguy hiểm và cần được dẫn dắt cẩn thận, nếu không họ vô cùng cô đơn hoặc làm hại bản thân và người khác trong cơn nóng giận khó có thể kiềm chế của mình.
        `,
    },
    {
        heading: 'NĂM SỐ 9 TRONG BIỂU ĐỒ (99999) hoặc nhiều hơn',
        content: `
Một số ít đứa trẻ được sinh ra trong tháng 9 năm 1999 Có năm số 9 trong ngày sinh của mình. Nếu không có sự trợ giúp của bộ môn Nhân số học, chúng ta gần như không thể hiểu được những người này, và thậm chí khi đã hiểu được thì việc hỗ trợ họ lại là một thử thách lớn hơn nữa. Những đặc điểm của bốn số 9 đều có thể được lặp lại ở đây, với mức độ cao hơn.
Hy vọng cha mẹ của những đứa trẻ này được trang bị đầy đủ kiến thức về Nhân số học để có thể vượt qua thử thách và dạy các con về tính thực tế và lòng trắc ẩn.
        `,
    },
]

const MUITEN = {
    thucte: `
Với cá nhân tôi thì đây là mũi tên thật sự rất ý vị, vì nó mang đến cả lợi ích và trở ngại đến cho cuộc đời tôi. Cho nên tôi thấm từng ý Thầy David mô tả trong cuốn sách của thầy. Theo đó, những người Có Mũi tên 1-4-7 là những người hay nắm phần việc, nghĩa là giỏi giang, tháo vát. Với cả ba số của Trục ngang Thể chất xuất hiện trên Biểu đồ ngày sinh, những người này chỉ cảm thấy vui và vừa ý với cuộc sống khi họ được thả mình vào những khía cạnh thực tế của công việc. Họ thường khá khéo tay, nhưng cần định hướng để sử dụng sự khéo léo này một cách khôn ngoan vì họ thường có kiểu “thích thì làm” chứ không suy nghĩ tới lui cho thấu đáo.
- Tuy vậy, vai trò của những người này cũng khá quan trọng trong cuộc sống, bởi họ thích trải nghiệm. Họ là kiểu người phải trực tiếp trải nghiệm, "có thấy mới tin". Đối với những người có Mũi tên 1-4-7 mà còn có Con Số chủ đạo là một trong những con số 4, 7, hay 10, tính bị thu hút bởi vật chất sẽ được lộ rõ. Nếu Con số chủ đạo của họ nằm ở Trục ngang Tinh thần, tức là số 2 , 5 , 8 hoặc 1 (và trong vài trường hợp, có luôn cả số 22/4 nữa), họ sẽ vươn xa khỏi những trói buộc của vật chất và có dễ dàng khả năng trở thành những nghệ sĩ hay nhạc công tài năng.
- Mặc dù nhìn chung họ thường có động lực là sự tử tế và mong muốn giúp đỡ người khác, nhưng việc có mũi tên nằm ở Trục ngang Thể chất khiến khả năng đánh giá Con người của họ không mấy chính xác. Động lực thúc đẩy những người có Mũi tên 1-4-7 thường đến từ những khát khao và hoài bão mang tính vật chất, trừ khi họ tích cực và chủ động tham gia các hoạt động sáng tạo, nghệ thuật.
- Vì vậy, những người này cần lưu ý tránh lệ thuộc quá mức vào chủ nghĩa vật chất, thay vào đó, họ nên thể hiện sức mạnh một cách tích cực và hiệu quả, chẳng hạn như trở thành một nhà kinh doanh giỏi giang hoặc một nhà tổ chức có tư duy thực tế. Nếu lún quá sâu vào phương diện vật chất, họ có thể trở nên hà khắc và không bao giờ tin tưởng giao cho ai làm việc gì, bởi họ nghĩ chỉ có họ mới làm việc đó tốt nhất. Người Có Mũi tên 1-4-7 rất cần được rèn luyện để có cái nhìn cân bằng về mọi việc từ rất sớm. Khi nhận thức được sự nhạy cảm của bản thân, cũng như hiểu được nhu cầu của người khác, họ sẽ có cơ hội sống vui vẻ, hạnh phúc và trọn vẹn hơn. Trẻ em có Mũi tên 1-4-7 thường thể hiện nhu cầu vật chất ngay từ nhỏ.
- Tuy nhiên, trẻ sẽ vui vẻ hơn nhiều nếu được đắm mình trong thiên nhiên và được học cách trân trọng biết ơn những giá trị cao hơn trong cuộc sống. Chúng cũng Có khuynh hướng coi mọi thứ là đương nhiên. Vì thế, ngay từ khi trẻ bắt đầu biết nói, cha mẹ và thầy cô cần dạy chúng biết giá trị của lòng biết ơn và sự chia sẻ .
- Những đứa trẻ này biết bày tỏ chính kiến từ bé, chuyện gì “thích” hay “không thích” đều tuyên bố rõ ràng, vì vậy Cha mẹ không nên ép con làm những việc mà chúng cực lực phản đối. Tình yêu thương và sự tử tế luôn khiến những đứa trẻ này ngoan ngoãn, nhưng đừng bao giờ mong “thu phục được chúng bằng tiền hay những món quà".
- Đây cũng là những đứa trẻ rất thích các hoạt động thể chất, vì thế chúng ít khi từ chối các nhiệm vụ có liên quan đến phương diện thể chất, miễn là chúng được khen ngợi khi làm các việc này. Nếu ép trẻ làm những việc mà chúng cực lực phản đối, chúng sẽ tức giận và trở nên ương bướng. Điều này sẽ dẫn đến những trận phá phách, nổi loạn mà nếu không được nhìn nhận và điều chỉnh thì sẽ ngày càng leo thang, gây ra nhiều mệt mỏi cho mọi người xung quanh lúc chúng trưởng thành. Để tránh điều này, tốt nhất là không cho trẻ có Mũi tên 1-4-7 tiếp xúc gần hay chơi với những đối tượng có tính phá phách, nghịch ngợm. Cha mẹ nên tìm cho con những người bạn trầm tĩnh, nhạy cảm hơn, để giúp trẻ cân bằng hơn. Trẻ em thuộc nhóm Mũi tên 1-4-7 cũng rất thích chia sẻ, vì vậy sẽ có ích nếu phụ huynh cho chúng những món mà chúng có thể chia sẻ với bạn cùng lớp hay hàng xóm Xung quanh. Điều này rất hữu ích cho trẻ trong việc phát triển tính nhạy cảm, biết lắng nghe, quan tâm tới nhu cầu của người khác. Hãy cùng xem xét hại biểu đồ của hai người Có Mũi tên Thực tế. Cả hai đều là người quen của tôi.
    `,
    kehoach: `
Mũi tên của trục dọc 1-2-3 là một trong những mũi tên thường gặp nhất đối với thế hệ 19xx và 2xXx. Thế hệ này rất dễ có cả ba con số trên hội tụ trong Biểu đồ ngày sinh, nên không khó đoán rằng giai đoạn này có nhiều người giỏi hoạch định. Và bạn có thấy cách chúng được xếp cùng nhau không? Số 1 - đại diện cho sự biểu đạt cái tôi cá nhân - được liên kết với trực giác của số 2, tiếp tới là trí nhớ và các khả năng phân tích dữ liệu của số 3. Cả ba yếu tố này hội tụ sẽ cho ra rất nhiều kế hoạch tuyệt vời .
- Người có Mũi tên Kế hoạch rất thích trật tự đâu ra đó, có phương pháp thực hiện, có thấu hiểu vấn đề. Nhưng họ thường đặt mình vào vị trí “ người tổ chức ” hơn là “ người thực hiện ” các chi tiết, trừ khi họ có thêm Mũi tên Thực tế ( 1-4-7 ), hoặc có Con số chủ đạo thuộc nhóm Thể chất ( 4 , 7 , 10 hay 22/4 ). Với khả năng hoạch định xuất sắc như vậy, người có mũi tên này cần lưu ý tránh “ nổi máu lười ”. Nghe có vẻ phi lý nhưng thực tế là vậy, đặc biệt là khi họ liên tục giao kế hoạch cho người khác thực hiện mà không chú ý theo dõi, giám sát tiến độ thực hiện.
- Trẻ con có Mũi tên Kế hoạch sẽ vui nhất khi được tự tay thiết kế, tổ chức những kế hoạch nho nhỏ cho bạn bè hay gia đình. Nhưng nếu các kế hoạch này gặp trở ngại hoặc xung đột với kế hoạch khác từ cha mẹ, trẻ có thể rất thất vọng. Chỉ khi nào cha mẹ thật kiên nhẫn và bày tỏ tình yêu thương thật nhẹ nhàng thì chúng mới “ bỏ qua ” nỗi thất vọng này.
- Những đứa trẻ thuộc nhóm này thường tỏ ra khá tách biệt, coi nhiều điều đang diễn ra là lẽ đương nhiên và thường chìm đắm trong những suy nghĩ hoặc kế hoạch riêng của chúng. Sự tách biệt này thể hiện ra ngoài thành vẻ xa cách, từ từ có thể trở thành thói quen phớt lờ, không lưu tâm đến nhu cầu của người khác. Các bậc phụ huynh và thầy cô cần áp dụng kỷ luật yêu thương nhưng nghiêm khắc, cứng rắn để yêu cầu trẻ phải hợp tác. Những đứa trẻ này cũng cần tránh bị bắt nạt hoặc hù dọa, mà thay vào đó, chúng cần được dạy dỗ nhẹ nhàng để biết tôn trọng các ý kiến, thói quen hay các đồ vật thuộc sở hữu của người khác. Trẻ có Mũi tên 1-2-3 thường nhẹ nhàng, đáng tin cậy và chậm nhận ra sự bất công. Sự ngây thơ này có thể rất dễ thương, mặc dù đôi khi chính sự cả tin này khiến trẻ bị tổn thương khi chứng nhận ra những người xung quanh không dễ tin và dễ bị lừa như mình.
Trong những năm đầu đời, trẻ có Mũi tên 1-2-3 thỉnh thoảng gặp phải cảm giác bồn chồn, lo lắng, vì dành quả nhiều thời gian trong tâm trí mà không biết cách thể hiện năng lượng trí não này ra thực tế. Lúc này, cha mẹ hoặc người lớn xung quanh có thể giúp trẻ bằng cách khuyến khích trẻ năng động hơn, thường xuyên vận động ngoài trời, hòa mình vào thiên nhiên. Cho trẻ đọc sách du ký có tranh minh họa cũng rất hữu ích cho đến khi chúng đủ lớn để có điều kiện tự trải nghiệm du lịch, giúp chúng thỏa mãn sự ham học hỏi và khám phá những điều chưa biết.
    `,
    thieutrattu: `
Khi ngày tháng năm sinh của bạn hoàn toàn không có các số 1, 4 và 7, bạn đã nằm trong nhóm những người có mũi tên trống khá đặc biệt, đó là Mũi tên Thiếu trật tự. Thật ra, chỉ cần nhìn và mũi tên trong này, bạn sẽ thấy tất cả những người sinh từ năm 1999 trở về trước đều không thể vướng vào mũi tên này. Chỉ có các bạn trẻ sinh ra từ năm 2000 trở đi mới có thể có mũi tên này trong Biểu đồ ngày sinh .
- Tuy nhiên, bạn cũng đừng lo lắng cho các con và cháu của mình. Vì khi tôi tìm trong mấy trăm trường hợp, mà mình đã nghiên cứu qua để đưa vào làm ví dụ, rất khó tìm được người có mũi tên trống này. Vì trên nguyên tắc, chỉ cần bạn có một trong ba số này 1, 4 hoặc 7 trong ngày sinh thì bạn hoàn toàn không cần ngại mũi tên này nữa rồi. Theo Thầy David, mục đích của linh hồn khi quay trở lại kiếp người trên Trái đất này là để có cơ hội phát triển, hướng về sự hoàn thiện.
- Vì thế, khi được sinh ra mà lại không có Con số nào trong Trục ngang Thể chất, người này sẽ phải chấp nhận một khuyết điểm đáng kể, thứ cần được vượt qua và hoàn thiện ngay trong đời này, nếu họ muốn đạt được hạnh phúc trong cuộc sống. Khi một người chỉ có thế mạnh nằm trên Trục ngang Tình thần ( trục 2-5-8 ), hoặc chỉ có Trục ngang Tinh thần và Trục ngang Trí não ( gồm 3-6-9 ), họ dễ có khuynh hướng Sa vào một cuộc đời nặng về lý thuyết.
- Khi đó, mọi suy nghĩ, ý tưởng cảm xúc ... chỉ có thể là lý thuyết, cho đến khi nó được đưa vào đời sống thực tế thông qua Trục ngang chất. Nếu không có những hoạt động thực tế, cuộc sống trở nên rối loạn và không đáng thỏa mãn, tước mất của con người niềm vui khi được nhìn thấy những ý tưởng của mình trở thành hiện thực. Những người có Mũi tên trống 1-4-7 cần có trải nghiệm thực tế và tính kiên nhẫn thì mới phát triển được sự cân bằng ở cả ba trục Thể chất - Trí não - Tinh thần, nếu không, họ sẽ sống trong sự hỗn loạn, thiếu trật tự ở nhiều mặt.
- Khi vận dụng được sự nhạy cảm của mình trong thực tế, họ sẽ cảm nhận được niềm vui khi nhìn thấy thành quả lao động của mình như được "cởi trói” để có cơ hội phát triển. Nếu không làm được điều này, họ có khả năng trở thành người trì trệ, không thiết tha làm việc để nuôi sống bản thân. Nhiều trường hợp không được can thiệp để uốn nắn từ nhỏ thì đến lớn sẽ khó mà sửa được và có thể phải sống nhờ vào sự giúp đỡ của người khác.
- Trẻ Con Có Mũi tên trống 1-4-7 cần được dạy để trở nên thực tế và ngăn nắp càng sớm càng tốt, ngay từ khi trẻ vừa biết đi chập chững. Trẻ nên được khuyến khích tập trung làm cho xong mỗi lần một việc rồi mới tiếp tục làm qua việc khác, không thì sẽ chẳng có việc nào được hoàn thành cả. Trẻ sẽ cần sự chú ý đáng kể từ cha mẹ hay người lớn xung quanh, những người phải chịu khó bày ra các trò chơi mang tính thực tiễn với chúng ( những trò có liên quan đến cầm, nắm, đếm, tính toán hay trải nghiệm thực tế, có dọn dẹp sau khi chơi xong ). Trẻ cũng cần được giao cho các công việc nho nhỏ trong nhà, như dọn dẹp góc phòng, sân nhà, ... mỗi khi có thể. Mỗi lần trẻ hoàn thành những nhiệm vụ này, ngoài lời động viên và khen ngợi, cha mẹ nên chuẩn bị những phần thưởng be bé cho trẻ.
- Đối với nhóm trẻ này, bên cạnh giá trị động viên thông thường, những phần quà còn được xem là “ bằng chứng thực tế ” giúp trẻ hiểu sự cân bằng giữa giá trị vật chất và giá trị tinh thần. Ngay khi đủ tuổi đến trường, trẻ cũng nên được khuyến khích tham gia các hoạt động thể thao không mang tính thi đua, tranh đấu hoặc đối kháng. Nhìn chung, tôi hiếm khi gặp mũi tên trống này, trừ trường hợp quen thuộc của người Có ngày sinh 22/2/2002 mà tôi đã đề cập nhiều lần. Nhưng trường hợp của em này lại đặc biệt vì em không vướng những đặc điểm của mũi tên trống. Từ đó chúng ta suy ra hai khả năng:
    `,
    canbangcamxuc: `
Mũi tên này chỉ sự cân bằng về mặt cảm xúc. Tuy nhiên, khi tìm hiểu sâu những nội dung mà Thầy David mô tả thông qua các ca nghiên cứu của Thầy, tôi cho rằng những người có mũi tên này cũng phải để ý, vì lợi cũng có phần lợi, nhất là ở phần thiên hướng nghề nghiệp, nhưng cảm xúc chưa chắc thật sự cân bằng mọi lúc mọi nơi. Theo quyển The Complete Book of Numerology, Mũi tên Cân bằng cảm xúc được tạo thành từ sự có mặt của cả ba con số 2, 5 và 8 trên Trục ngang Tinh thần ở giữa Biểu đồ ngày sinh. Trong ba Trục ngang quan trọng của con người, Trục ngang Tinh thần cho chúng ta thấy nhiều cách biểu đạt bản thân đa dạng phong phú nhất ở con người. Và nó cũng là trục chỉ cảm xúc, nên người Có Mũi tên 2-5-8 này sẽ có nhiều phong thái khác nhau cho từng hoàn cảnh khác nhau.
- Nói về mặt bẩm sinh, những người có Mũi tên 2-5-8 sở hữu khả năng cân bằng tự nhiên trong đời sống cảm xúc và một nhận thức khá sâu sắc về các giá trị tinh thần, thậm chí là tâm linh. Điều này đặc biệt giúp ích cho họ khi thế giới bắt đầu đi vào Kỷ nguyên mới của Nhận thức, từ thiên niên kỷ 2000 trở đi. Đối với những người này, cuộc sống là sự hòa hợp giữa đời sống vật chất và tâm linh, mà trong đó, phần vật chất là tạm thời, còn tâm linh mới là vĩnh cửu. Nhận thức này tác động khá rõ lên thái độ của họ với cuộc sống, cũng như xu hướng nghiêm túc mọi lúc mọi nơi của họ. Họ nên tìm kiếm những người bạn đồng hành vui vẻ, lạc quan, và thỉnh thoảng tìm đến những phương tiện giải trí nhẹ nhàng để tránh trở nên quá mức nghiêm túc và sống quá nội tâm.
- Họ hiểu được thế nào là cân bằng ở khía cạnh cảm xúc và tinh thần, nhưng lại hay bỏ qua ý nghĩa sâu rộng hơn của nó ở những khía cạnh khác trong cuộc sống, như mặt thể chất và trí não chẳng hạn. Nhiều người trong số này thường tìm đến các lĩnh vực nghệ thuật hay giải trí để giải tỏa nhu cầu diễn đạt cảm xúc bản thân một cách cân bằng, nhưng hãy nhớ rằng nghệ thuật và giải trí chỉ là nghệ thuật giải trí, đừng để bản thân đắm chìm vào những hình ảnh hay hình tượng được thể hiện trong đó, để duy trì được sự cân bằng cảm xúc dài lâu, họ cần ý thức mình chính là người chịu trách nhiệm về những cảm xúc của mình, và không để cho cảm xúc khống chế bản thân, nếu không, họ sẽ bị lạc lối và mất phương hướng, với khả năng kiểm soát cảm xúc mạnh mẽ như vậy, những người có Mũi tên 2-5-8 có thể trở thành những diễn viên xuất sắc. Sự nhạy cảm bẩm sinh cho phép họ nhập tâm hoàn toàn vào những vai diễn mà không phải hy sinh các đặc điểm tính cách riêng. Nhưng cho dù có làm diễn viên hay không thì những người này sẽ đóng nhiều vai trò cảm xúc khác nhau trong các hoạt động thường ngày, tại chỗ làm, trong các mối quan hệ xã hội và ở nhà. Sự nhạy cảm được cân bằng của những người có mũi tên này giúp họ ý thức được nhu cầu và thái độ của người khác một cách rõ ràng, tự nhiên.
- Khả năng này có thể được phát huy và giúp họ tỏa sáng trong lĩnh vực tư vấn hay chăm sóc sức khỏe, bởi họ đã có sẵn thiện khiếu ở những lĩnh vực này. Tuy nhiên, để đạt được thành công, họ nên được đào tạo một cách bài bản về kỹ năng chăm sóc sức khỏe, để tránh rơi vào chủ nghĩa giáo điều vì trong lĩnh vực này, không có phương pháp của ai là phương pháp đúng duy nhất. Không chỉ riêng những người có mũi tên này, mà tất cả những ai bước vào lĩnh vực y học và chăm sóc sức khỏe đều nên chủ động cởi mở và tiếp thu những phương pháp điều trị khác nhau.
- Và trên hết, người có Mũi tên 2-5-8 cần nhận thức được rằng họ có bản chất nhạy cảm, giàu cảm xúc và một trực giác rất phát triển. Trẻ em Có Mũi tên 2-5-8 trong Biểu đồ ngày sinh thường vô cùng nhạy cảm, có thể có năng lực tâm linh mạnh mẽ, nên trẻ có thể bị chìm đắm trong thế giới của mình và được xem như những kẻ "mơ mộng”. Chúng dễ bị cuốn vào những mâu thuẫn cảm xúc, nhưng có khuynh hướng thu mình lại chứ không chủ động tham gia. Mong muốn tránh né những mối bất hòa có thể khiến trẻ bị tụt lại phía sau trong các hoạt động ở trường và làm tổn hại sức khỏe của trẻ, nếu chúng để cho sự nhạy cảm thường xuyên đẩy mình vào thế bị động, từ đó có những phản ứng tiêu cực trong nhiều tình huống.
- Các bậc phụ huynh nên ý thức dạy Con cách giữ cân bằng về cảm xúc, điều mà chính cha mẹ cũng cần học để dạy con hiệu quả. Những đứa trẻ thuộc nhóm này cũng cần tránh những chương trình truyền hình hay phim ảnh quá ồn ào hoặc có nhiều yếu tố kích thích cảm xúc. Theo Thầy David, trẻ con nên được ưu tiên ăn thực phẩm nguyên hạt và tự nhiên, hơn là thức ăn đóng gói và chế biến sẵn có nhiều hóa chất.
    `,
    nhaycam: `
Vì nằm ở Trục ngang Tinh thần nên mũi tên trống này cũng cho thấy một sự thiếu hụt mang tính chất tinh thần. Theo nghiên cứu của Thầy David, việc thiếu hụt những con số trong trục này không có nghĩa là người này không có đời sống nội tâm, mà thực chất, nó diễn tả sự bảo vệ phần tâm hồn của người này không đủ mạnh. Do đó, sự nhạy cảm của họ lộ ra, tiếp xúc với thế giới bên ngoài - vốn hiền có dữ có và có xu hướng lợi dụng sự yếu ớt của những tâm hồn quá nhạy cảm.
- Vì vậy, Mũi tên trống 2-5-8 thể hiện sự nhạy cảm, dễ tổn thương, đặc biệt là trong giai đoạn đầu đời, khi người ta bộc lộ toàn bộ sự nhạy cảm này mà chưa biết dựng lên lớp tường rào bảo vệ cảm xúc của mình. Họ dễ cảm thấy bị xúc phạm, dễ xuống tinh thần, do đó thường rụt vào bên trong và trở nên bẽn lẽn, nhút nhát.
- Nhiều người thuộc nhóm này rất dễ rơi vào cảm giác tự ti từ rất sớm, khiến họ gặp một số khó khăn khi giao tiếp xã hội và dễ mất lòng tin nơi người khác. Khi đến tuổi trưởng thành, một vài người trong số họ vượt qua được những cảm xúc phức tạp này bằng cách kiểm soát tốt cảm xúc. Những người này thậm chí còn thành danh trong một số lĩnh vực mà họ dốc sức vào, hoặc nắm thế chủ động trong các tình huống hay các cuộc trao đổi để bảo vệ bản chất nhạy cảm tự nhiên của mình.
- Một số người khác học được cách chủ động tấn công người khác và coi đây như một cách tự vệ. Đặc điểm này dễ xảy ra ở những người thiếu chuỗi số 2-5-8 nhưng lại có Mũi tên Trí tuệ ( 3-6-9 ), hoặc có Con số chủ đạo nằm ở Trục ngang Trí não ( số 3,6 hoặc 9 ). Sự nhạy cảm tự nhiên đã cho họ bản tính giàu tình yêu thương và dịu dàng, nhưng họ thường có phản ứng thụ động vì những tổn thương về cảm xúc, khiến họ tự xây dựng cho mình một vẻ ngoài cứng rắn, thứ mâu thuẫn với biểu cảm nhẹ nhàng, tự nhiên ở họ. Họ học cách bày tỏ cảm xúc tùy vào đối tượng mà mình tương tác - một kiểu phân biệt đối xử .
- Điều này khiến nhiều người sở hữu mũi tên trống này gặp trắc trở trong đời sống tình cảm, vì họ vô tình thể hiện không đúng bản chất con người mình, từ đó khiến người thương hiểu lầm. Đôi khi những người Có Mũi tên trống 2-5-8 có vẻ rất bướng bỉnh, thậm chí là “ nghênh ngang ”, nhưng đây chỉ là những lớp vỏ họ dựng lên để che đậy sự bẽn lẽn nhút nhát cố hữu của mình mà thôi. Họ luôn dễ bị tổn thương về mặt cảm xúc, một điều mà rất hiếm người có mũi tên này hoàn toàn hiểu được hay vượt qua được.
- Một trong những bài học quan trọng nhất mà những người này cần lĩnh hội chính là học cách kiểm soát cảm xúc, càng sớm càng tốt. Như ở trên đã đề cập, đối với một tác nhân kích động chúng ta có hai khuynh hướng phản ứng: phản ứng thụ động và phản ứng chủ động. Những người có Mũi tên Nhạy cảm cần phân biệt được hai cách phản ứng này để không còn xem mình là nạn nhân của hoàn cảnh hoặc thụ động phản ứng với ý kiến của người khác. Họ cần học cách làm những người tiên phong, người truyền cảm hứng và thực hiện những mục tiêu đáng giá. Thông qua các nỗ lực đó, họ sẽ nhận ra sức mạnh của riêng mình, xóa đi sự mặc cảm tự ti, và chính sức mạnh này sẽ giúp họ cân bằng lại các đặc điểm của mình, đạt được một số thành quả trong cuộc sống.
- Điều này rất quan trọng, vì từ nền tảng đó, họ sẽ từ từ đi lên, đạt được thêm nhiều thành tựu mới, nhiều quả ngọt mới. Kết quả, sự hiểu biết của họ cũng sẽ gia tăng, lòng tin vào cuộc sống, vào con người của họ cũng được phục hồi. Trẻ em Có Mũi tên trống 2-5-8 thường đặc biệt nhút nhát, nhạy cảm. Một số em khi đi ra ngoài đường, giữa đám đông, thường cúi gằm đầu xuống để che giấu sự tự ti của mình.
- Tuy nhiên, bằng sự kiên nhẫn, tình yêu thương và sự tử tế, cha mẹ, thầy cô và những người lớn xung quanh có thể dễ dàng giúp trẻ vượt qua điểm hạn chế này. Các bậc phụ huynh nên dành nhiều thời gian trò chuyện, lắng nghe và chia sẻ với con, vì những nỗi sợ hãi, lo lắng, bồn chồn thường rất thật trong đầu óc còn non nớt của trẻ. Cha mẹ cũng cần khuyến khích con diễn đạt thành lời những vấn để Con đang cảm thấy, vì điều này sẽ giúp trẻ cân bằng cảm xúc và cả cảm giác an toàn khi dám biểu lộ sự nhạy cảm của bản thân.
- Trẻ có Mũi tên trống 2-5-8 khao khát tình yêu thương nhiều hơn những đứa trẻ bình thường khác. Chúng tìm kiếm mọi cơ hội để được gần gũi những người mà chúng yêu thương và cũng yêu thương chúng. Vì thế, cha mẹ nên tạo điều kiện cho con tham gia các hoạt động thú vị, bổ ích. Đồng thời, đừng quên khen ngợi hay cổ vũ con khi con làm tốt, vì đó chính là thứ mà chúng rất cần.
- Ngược lại, nếu trẻ lỡ có làm việc gì đó không đạt hay tỏ ra có phần nghịch ngợm, đừng rầy la hay chỉ trích con trước mặt người khác, đặc biệt là trước mặt các bạn đồng trang lứa. Vì hành động đó chẳng khác nào “đóng mộc” sự mặc cảm tự ti cho con, đồng thời cũng làm mất đi lòng tin hay kính trọng của con.
- Thay vào đó, cha mẹ và Thầy Cô nên trao đổi riêng với trẻ, giúp trẻ tìm ra cách thức tốt đẹp nhất để giải quyết vấn đề.
    `,
    tritue: `
- Đây là một mũi tên đặc sắc , cá nhân tôi rất ngưỡng mộ những ai có mũi tên “vàng” này. Tương tự như những mũi tên chỉ thế mạnh khác, số lượng người Có Mũi tên Trí tuệ rất hiếm. Nếu bạn có đủ ba con số 3, 6, 9 này trong ngày sinh, xin chúc mừng bạn ! Bạn thuộc nhóm số ít những người có Mũi tên Trí tuệ - mũi tên cho thấy người sở hữu nó có nhiều lợi thế về các hoạt động tư duy, mà một trong số đó chính là trí nhớ vượt trội. Trí nhớ vượt trội lại mang đến rất nhiều ưu điểm khác, chẳng hạn như học lực khá giỏi  khả năng ghi nhớ dài hạn và chi tiết.
*** Hai người Có Mũi tên Trí tuệ mà tôi biết là cậu bạn thân từ thời phổ thông và chị kế toán Công ty. Cậu bạn của tôi nổi tiếng vì trí nhớ siêu đẳng, có thể kể vanh vách tên từng thấy cô bộ môn qua từng năm, bạn từng lớp, ai từng làm gì, chuyện gì từng xảy ra ... Chị kế toán công ty tôi thì luôn điềm tĩnh xử lý những số liệu chuyên ngành, bất kể chúng có rối ren đến thế nào đi nữa. Trên thực tế, sự có mặt của cả ba con số 3 , 6 , 9 trên Trục ngang Trí não đã chỉ ra tầm quan trọng của trí thông minh và cách người có mũi tên này chọn thể hiện bản thân mình.
- Nó cho thấy một bộ não cực kỳ năng động , thứ tạo điều kiện thuận lợi cho sự vượt trội của trí nhớ. Tuy nhiên, Thầy David lưu ý rằng một số người sở hữu mũi tên này nhưng vẫn có trí nhớ kém dưới mức trung bình. Điều này cho thấy họ đang lãng phí tài năng và trở nên lười tư duy. Nếu điều này không được phát hiện và điều chỉnh kịp thời, ưu thế bẩm sinh của họ sẽ bị mai một vì không được sử dụng thường xuyên, và cuối cùng, người này sẽ chịu cảnh cô độc bởi khó ai chịu nổi tỉnh gắt gỏng của họ - mặt trái của một trí tuệ không được mài giũa .
- Nhìn chung, người có mũi tên này thường sáng dạ, sống khá tích cực và nhanh nhạy, thích những gì mang tính học thuật hơn tính thẩm mỹ. Họ thường chìm đắm trong suy nghĩ hơn là lặn ngụp giữa các cảm giác, mặc dù đôi khi họ cũng khá đa sầu đa cảm mà không nhận ra. Những người có mũi tên vàng này cần có ý thức tránh thái độ trịch thượng, chỉ tìm những ai mà họ cho rằng có trí tuệ ngang họ trở lên để chơi. Hãy phát triển lòng bao dung và tình yêu thương để hạn chế xu hướng tỏ thái độ khó chịu với những người kém may mắn hơn mình về mặt trí tuệ. Chúng ta có thể khắc phục mọi điểm yếu của mình, miễn là chúng ta biết phát huy năng lực bẩm sinh.
- Những người này thường phải gánh vác không ít trách nhiệm, họ cũng gặp không ít nghịch cảnh hay chướng ngại, nhưng họ thường giải quyết hoặc vượt qua các vấn đề này một cách tốt đẹp. Họ cũng là những người quảng giao, có thể dễ dàng tìm ra các lời lý giải hợp tình hợp lý cho hầu hết mọi tình huống nhưng hãy cẩn thận, bộ não tốt cỡ nào cũng cần được nghỉ ngơi. Nếu bộ não của họ không được nghỉ ngơi đủ, những người này thường cáu bẳn mà không có lý do rõ ràng. Triệu chứng này chính là lời cảnh báo họ phải nghiêm túc học cách cân bằng đời sống của mình giữa các khía cạnh tư duy, thể chất và nghệ thuật để đạt được thành công cao nhất. Những người có Mũi tên Trí tuệ thường không có trực giác tốt nếu trong ngày tháng năm sinh của họ không có số 2 - Con số chỉ trực giác, nằm ở Trục ngang Tinh thần. Lý do rất đơn giản, trực giác thuộc Tinh thần, không phải Trí não. Do đó, đôi khi những người rất thông minh, sáng trí này cũng bị ... tắc nghẽn, không nắm bắt được một khái niệm đơn giản nào đó, chỉ vì họ không biết sử dụng trực giác của mình .
- Hãy nhớ “ bật Công tắc ” trực giác lên, cho dù bạn có Mũi tên Trí tuệ. Sau đây là vài trường hợp có Mũi tên Trí tuệ.
    `,
    trinhonganhan: `
Thông qua tìm hiểu về Nhân số học, chúng ta biết rằng những con số hoàn toàn có thể “nói” lên nhiều điều quan trọng và ý nghĩa về cuộc đời mỗi người, miễn là chúng ta biết cách lắng nghe chúng. Những thông tin này đủ để chúng ta không phải mù mờ về việc mình nên đi đâu, làm gì, giúp chúng ta hoạch định con đường mình đi sao cho tốt đẹp nhất, dù cho xuất phát điểm có thế nào.
- Tôi rào trước đón sau kỹ như vậy là vì Mũi tên trống 3-6-9 này không được “sáng” lắm, nhưng lại được gặp khả thường xuyên, nhất là ở các bạn trẻ được sinh trong khoảng các năm 2000 trở lại đây. Hãy cùng xem xét các ví dụ dưới đây để hiểu thêm về mũi tên này. Như bạn nhìn thấy trên Biểu đồ ngày sinh 12/10/2005, sự thiếu vắng hoàn toàn ba con số 3 , 6 , 9 trong ngày tháng năm sinh tạo thành một Trục ngang Trí não toàn ô trống. Sự vắng mặt các con số ở trục ngang này cho thấy một trí nhớ kém, nhưng điều này không có nghĩa là người này mất trí hay không thể suy nghĩ. Chính xác hơn, người có Mũi tên Trí nhớ ngắn hạn này là những người phải cố gắng nhiều để bảo đảm trí nhớ của họ luôn trong trạng thái năng động và nhanh nhạy, và họ cần ý thức giữ nỗ lực này suốt đời. Chỉ cần họ ỷ lại hay trở nên lười suy nghĩ dù chỉ trong một quãng thời gian ngắn, trí nhớ của họ, cùng với sức sáng tạo và các lý tưởng sống, sẽ nhanh chóng bị mai một.
- Điều đáng lo là trong nửa quãng thời gian đầu tiên của cuộc đời, những người này vẫn rất bình thường, thậm chí học rất giỏi ; tuy nhiên, từ nửa quãng đời sau, chứng suy giảm trí nhớ bắt đầu có nhiều ảnh hưởng tương đối nặng nề đến cuộc sống của họ. Điều này diễn ra từ từ, phát triển thành các triệu chứng của “ tính khí con nít ”, tức là những biểu hiện y như con nít ở người già; sau đó, triệu chứng nhanh chóng trở nên trầm trọng hơn, thành chứng mất trí nhớ Alzheimer ở người lớn tuổi. Tất cả những ai sinh ra trong những năm 19xx của thế kỷ 20 đều không có mũi tên trống này. Nhưng theo Thầy David, ở các thế kỷ trước đó, vẫn có những người dù không có số 9 trong ngày sinh, họ vẫn nỗ lực khắc phục điểm yếu và học hỏi được những điều cần thiết cho cuộc sống. Để làm được điều đó, họ phải cực kỳ bền chỉ trong cuộc chiến đấu chống lại sự chậm hiểu của chính mình và luôn nỗ lực giữ cho trí não nhanh nhạy, tỉnh táo để duy trì bản thân ở trạng thái tốt nhất.
- Những người này thường tươi sáng và khôn ngoan  bản thân cuộc đời họ cũng là tấm gương sáng cho nhiều người noi theo. Ở Việt Nam, trong số hơn 500 trường hợp tôi từng nghiên cứu qua, có một số lượng khá lớn các bạn trẻ sinh ra vào những năm 2000 bị vướng mũi tên trống này. Các bạn vẫn còn quá trẻ nên chưa thể kết luận nửa đời sau các bạn sẽ thế nào. Tuy nhiên, khi nhìn vào hiện tượng bên ngoài, điều thú vị là không ít các bạn hoàn toàn trống trục 3-6-9 mà vẫn học khá, giỏi trong lớp. Một số khác, theo tôi quan sát , thì học không đến nỗi nào, chỉ là không quá hứng thú với việc học. Dù sao đi nữa , các bậc cha mẹ vẫn cần phải để ý để phòng tránh chứng suy giảm trí nhớ ở các con vào nửa quãng đời sau.
- Trẻ em Có Mũi tên trống 3-6-9 cần nhận được sự đào tạo tương đối đặc biệt và cần nhiều sự kiên nhẫn trong những năm tháng đầu đời. Các em sẽ có vẻ hơi chậm về mặt suy nghĩ, cần được dạy cách tăng cường khả năng tập trung, thứ quan trọng để phát triển trí nhớ. Tiếp theo, các em có thể được khuyến khích khả năng sáng tạo và tăng cường ý thức về thế giới tự nhiên xung quanh các em - những điều này mang ý nghĩa của số 6 và sẽ giúp các em rất nhiều. Trẻ em thuộc nhóm này được Thầy David khuyên không nên đi học quá sớm - ít nhất từ năm tuổi hãy học trường mẫu giáo, hoặc bảy tuổi hãy bắt đầu đến trường cũng được. Và khi các em đi học, phụ huynh và thầy cô đừng đặt nặng chuyện kiến thức hay thành tích, mà hãy tập trung phát triển cho trẻ ý thức kỷ luật, kế đó là các hình thức sáng tạo hay nghệ thuật đa dạng.
- Đến bảy tuổi, trẻ có thể bắt đầu học kiến thức phổ thông. Nếu bị đưa vào hệ thống giáo dục như bình thường, rất có thể trẻ sẽ bị các chứng nhức đầu, trường hợp nặng có thể dẫn đến chứng đau nửa đầu. Những đứa trẻ có mũi tên trống này thường thích thiên nhiên hơn khoa học, nên cha mẹ và thầy cô cần nhẹ nhàng dạy các con một cách cẩn trọng và kiên nhẫn, từ từ trẻ sẽ có thể tiến bộ lên rất nhiều.
    `,
    hoatdong: `
Mũi tên này nằm ở trục dọc ngoài cùng bên phải, kết nối số 7 - Con số của trải nghiệm, với số 8 - Con số của trí tuệ và khả năng cảm thụ, và số 9 - Con số của hoài bão và trách nhiệm. Sức mạnh của sự kết hợp này đôi khi bị quá đà, trở thành “ quá mức năng động ”, do con người là những sinh vật giàu biểu cảm nhất, vượt xa bất kỳ giống loài nào khác. Những biểu cảm này còn đặc biệt đa dạng và dễ nhìn thấy ở những người có Mũi tên 7-8-9.
- Tuy nhiên, xã hội hiện đại với rất nhiều quy tắc đã ít nhiều cản trở sự tự do biểu đạt của họ, đến mức khiến họ dễ kích động bởi năng lượng bức bối ngày càng leo thang. Qua các nghiên cứu của mình, Thầy David nhận thấy hậu quả của điều này là họ dễ bị chứng hồi hộp thái quá, dẫn đến nhiều bệnh lý như hen suyễn, chứng ăn khó tiêu, nhức đầu hay đau nửa đầu, hoặc các vấn đề về tim mạch hay hệ thống tuần hoàn máu. Người có Mũi tên Hoạt động rất cần sự bình an và hòa hợp với môi trường xung quanh. Các cuộc cãi vã, những chương trình truyền hình hoặc phát thanh quá ồn ào sẽ khiến họ cực kỳ căng thẳng, thậm chí gây ra các chứng bệnh có liên quan đến áp lực căng thẳng.
- Họ cần dành càng nhiều thời gian với thiên nhiên càng tốt, vì họ không phải là người phù hợp với không khí của các thành phố lớn. Những hoạt động lý tưởng đối với họ là đi dạo trong Công viên, làm vườn, trồng trọt hoặc tham gia các hoạt động thể thao ngoài trời. Nếu không được tận hưởng những không gian tự do như vậy, họ sẽ dễ gặp vấn đề về hệ tiêu hóa. Thêm nữa, chế độ ăn uống lành mạnh, cuộc sống hòa mình với thiên nhiên, cùng với cái nhìn tích cực về cuộc sống và những người bạn vui vẻ sẽ có hiệu quả trong việc giúp những người Có Mũi tên 7-8-9 khỏe mạnh hơn bất kỳ loại thuốc nào.
- Tôi có rất nhiều bạn bè, người thân, người quen ... Có Mũi tên 7-8-9 này - họ chiếm rất nhiều trong hơn 500 người mà tôi từng nghiên cứu. Điều này cũng dễ hiểu vì chỉ cần là người được sinh ra trong những năm 19xx của thế kỷ 20 và có thêm ngày sinh, tháng sinh nào đó có liên quan đến số 7 ( như thập niên 70, 197x ) đều có mũi tên này - đặc biệt là toàn bộ những người sinh năm 1978, 1987. Những người được sinh ra vào thập niên 1970, hoặc các năm 1978 và 1987, nếu lại có yếu tố làm gia tăng số 9 , 8 hay 7 trong biểu đồ thì sẽ khá mệt mỏi, vì bất kỳ sự lặp lại nào của con số 7 , 8 , 9 đều có thể dẫn đến sự quá mức - như tôi có đề cập trong phần ý nghĩa của số lượng các con số trong Biểu đồ ngày sinh.
    `,
    thudong: `
Khi bước vào kỷ nguyên mới 2000, các chuyên gia đã dự báo là có rất nhiều thay đổi to lớn diễn ra ở mọi khía cạnh của cuộc sống, mọi mặt của xã hội. Và giờ đây, chúng ta bắt đầu nhìn thấy hệ quả của điều này, khi thế hệ những người sinh ra từ năm 2000 trở đi bắt đầu trưởng thành, chính thức tham gia đời sống xã hội. Những người được sinh ra trong những năm 19xx của thế kỷ 20 không có mũi tên này, và cả hai thế kỷ trước đó nữa cũng không. Cho nên, đó là ba trăm năm của sự năng động, một bước tiến dài về phía trước.
- Thành quả của giai đoạn đó cũng nhiều, chẳng hạn như những cuộc cách mạng về khoa học kỹ thuật, công nghệ và trí thông minh nhân tạo ; nhưng bên cạnh đó, lợi bất cập hại cũng nhiều khi loài người đặc biệt là trong thế kỷ 20, trở nên quá tham vọng trong việc làm chủ vũ trụ, chạy theo cái lợi và lý tưởng về cuộc sống vật chất mà bỏ qua sự cân bằng về môi trường, hệ sinh thái, bỏ qua rất nhiều quy luật hiển nhiên về sự cân bằng ( trong đó có luật phát triển của biểu đồ hình sin : vật cực tất phản ). Để rồi những ngày này của năm 2020, chúng ta đang cảm nhận đầy đủ hậu quả của sự tham vọng quá độ đó.
- Như một lẽ cân bằng của tự nhiên, qua thiên niên kỷ 2000 và còn sẽ kéo dài trong hàng trăm năm nữa, nhiều thế hệ sinh ra sẽ mang mũi tên trống đặc thù này - Mũi tên Thụ động. Thoạt nhìn, chúng ta sẽ thấy người sở hữu mũi tên này không có sự trải nghiệm để trưởng thành của số 7, không có trí tuệ và khả năng cảm thụ của số 8, và cũng không có hoài bão và trách nhiệm của số 9 - hẳn là người này sẽ rất thụ động, không tự tạo động lực để tiến lên phía trước được.
- Nhưng hãy nhớ rằng tất cả những người này đều được trang bị một sức mạnh bẩm sinh mà không phải ai trong thiên niên kỷ trước cũng có, đó chính là số 2, Con số của trực giác, của sự kết nối với vũ trụ bao la. Và khi họ có rất nhiều số 0 trong Biểu đồ ngày sinh, đặc biệt là khi trống cả dãy 7-8-9, họ sẽ có cơ hội để trở thành Vô cùng. Vì vậy, theo dự đoán của Thầy David ( ông chỉ có thể dự đoán, vì thời điểm quyển sách của ông được xuất bản là năm 1992 ), những người có Mũi tên trống 7-8-9 sẽ có nhiều khả năng trở thành những người tư duy, lên kế hoạch và dẫn dắt sau - hậu trường cho cả kỷ nguyên mới, khi rất nhiều người có mũi tên trống này lại có Mũi tên Kế hoạch ( 1-2-3 ). Tuy vậy, những người này sẽ không thể chạm đích thành công nếu không được rèn luyện về sự kiên trì và tinh thần kỷ luật thông qua những "chương trình đào tạo” ở cả trường học lẫn trường đời.
- Với những đặc điểm như vậy, không khó nhận thấy trong thời gian sắp tới, khi những người sinh năm 2xxx này bắt đầu trưởng thành và tham gia vào guồng máy xã hội, thế giới sẽ bớt chiến tranh và các thảm họa về con người. Chúng ta thật sự đang “dọn dẹp những tàn dư” do thế hệ những con người quá tham vọng của thế kỷ 20 bày ra. Hãy tin rằng thế hệ 2XXX sẽ thông qua các cuộc “dọn dẹp” này để tôi luyện tính can trường, tư duy chủ động và chính thức “thức tỉnh". Sự thụ động này không đối nghịch với sự năng động theo kiểu mô tả phổ biến, mà đúng hơn, nó là khát vọng sâu xa và tự nhiên về một cuộc sống cân bằng, an hòa, nơi mọi người, mọi loài “ sống chan hòa bên nhau - không ganh ghét oán thù - không chiến tranh giết chóc ”.
- Đây chính là bức tranh đẹp đẽ mà nhân loại ở thế kỷ 21 nên vươn đến. Một viễn cảnh quá đẹp đẽ, đặc biệt khi chúng ta đang phải trải qua và buộc phải bước qua một thời kỳ “ thanh lọc ” quá sức khắc nghiệt. Nhưng đó chỉ là “ bức tranh viễn cảnh ”, thứ chỉ có thể trở thành hiện thực khi thế hệ có Mũi tên trống 7-8-9 này chịu phá vỡ lớp vỏ “ Thụ động ” bên ngoài và thật sự thức tỉnh, lan tỏa sự bình an của họ ra ngoài, làm thành một tầng năng lượng an hòa rộng khắp và to lớn, bao trùm cả hành tinh này !
- Tuy nhiên, điểm hạn chế lớn nhất của những người có mũi tên này là họ thường không tự thức dậy được, mà cần sự tác động từ bên ngoài - chẳng hạn như một bài học, một Con người, một trường năng lượng nào đó đánh thức Trực giác và Tiềm thức đang say ngủ của họ. Và quan trọng nhất, họ luôn cần có sự quan tâm, khuyến khích, thúc đẩy sự thức tỉnh này, vì họ thường có vẻ lừ đừ, lười vận động. Họ sẽ không tự nhận ra mục đích của họ khi đến với cuộc sống này, và do đó luôn cần được hướng dẫn, bảo ban và rèn luyện để trở nên năng động hơn trong cuộc sống thường ngày. Nếu được nhắc nhở về sự thức tỉnh và lan tỏa này ngay từ thuở nhỏ, họ sẽ có nhiều khả năng đạt được thành tựu.
    `,
    ychi: `
Nếu Mũi tên Quyết tâm 1-5-9 có thể bắt gặp ở Biểu đồ ngày sinh của rất nhiều người được sinh ra trong thế kỷ 20, thì Mũi tên Ý chí - mũi tên kết nối cả ba Con số 4-5-6 của trục dọc ở giữa là mũi tên rất ít người có. Khi số 6 - đại diện cho sự sáng tạo - được gắn liền với sự tự do thể hiện của số 5, rồi kết nối với số 4 của óc tổ chức thực tiễn, chúng ta có sự cân bằng đầy sức mạnh của cả ba Con số trung tâm của cả ba trục : Thể chất - Trí não - Tình thần. Đây chính là Mũi tên Ý chí. Nó đại diện cho cột sống của con người và nguồn lực sự sống tuôn chảy trong đó.
- Trong giai đoạn từ 1889 đến 1999, bất kỳ ai có Mũi tên Ý chí đều được “ tặng ” thêm Mũi tên Quyết tâm, làm cho họ trở thành những người hết sức năng động. Tuy nhiên, theo Thầy David, không có nhiều người nổi tiếng có “ tổ hợp vàng ” này, có lẽ là do họ có xu hướng áp chế cảm xúc và mong muốn của người khác để khẳng định và thể hiện sức mạnh của bản thân. Động lực của họ mạnh mẽ đến mức họ thường bỏ qua lời khuyên của người khác và hiếm khi lắng nghe trực giác của mình.
- Sức mạnh đặc biệt của Mũi tên Ý chí nằm ở sự kết hợp và cân bằng của ba ưu điểm ở mỗi Trục ( Thể chất - Trí não - Tình thần ). Khi người ta nhận ra sức mạnh của sự cân bằng đó và biết áp dụng vào công việc hằng ngày, cuộc sống của họ sẽ thay đổi, và họ sẽ đạt được thành công cao nhất. Họ đủ kiên cường và can đảm để phá bỏ mọi trở ngại khi hành động với sự khôn ngoan và thông thái. Hai nhân vật đại diện cho những người thành công đặc biệt với mũi tên này là đại văn hào người Anh William Shakespeare, và họa sĩ tài danh Leonardo da Vinci.
    `,
    uatgian: `
Nếu như Mũi tên Ý chí 4-5-6 khá hiếm, thì ngược lại, số người có Mũi tên trong 4-5-6 trong Biểu đồ ngày sinh lại khá nhiều, tạo thành một xã hội mà trong đó người hài lòng thì ít, kẻ uất giận lại nhiều. Với sự vắng mặt của cả ba con số 4 , 5 và 6, mũi tên này tạo thành một Biểu đồ ngày sinh bị chia cắt thành hai nửa và một ý chí khá yếu ớt cho những ai sở hữu nó. Thầy David ghi nhận một chi tiết rất đáng suy ngẫm : suốt những thập niên 1940, 1950, 1960, mũi tên này không hề xuất hiện lần nào. Điều này góp phần tạo ra những thế hệ can trường, có ý chí mạnh mẽ.
- Tuy nhiên, khi bước qua thập niên 70, chúng ta bắt đầu thấy nhiều người Có Mũi tên uất giận. Vì là nhà nghiên cứu và chữa trị cho nhiều khách hàng khác nhau, Thầy David từng gặp nhiều trường hợp có mũi tên này, và họ thường phải gánh chịu khá nhiều vấn đề lớn trong cuộc sống, chẳng hạn như gia đình tan vỡ, các mối quan hệ tình cảm không vui vẻ, hay bị trầm cảm. Sự “uất giận” này đến từ những kỳ vọng không được thỏa mãn. Cũng theo Thầy David, người có mũi tên này thường kỳ vọng ở người khác nhiều hơn những gì bản thân họ sẵn sàng cho đi. Nhưng nếu họ có thể học cách chấp nhận và trân trọng người khác vì sự độc đáo của riêng mỗi người, thì họ sẽ không cần đặt kỳ vọng sai chỗ nữa. Và cũng từ đó, thói quen “ kỳ vọng, mong cầu ” sẽ phai nhạt bớt, họ sẽ sống an nhiên và hạnh phúc hơn. Như vậy, bài học dành cho những người Có Mũi tên trống 4-5-6 là hiểu “ kỳ vọng ” theo hướng “ Có thì tốt , không có cũng không sao ”,  nghĩa là “ Tận nhân lực, tri thiên mệnh ”. Khi đó họ vẫn nỗ lực nhưng sẽ không đến nỗi héo hon trong sự thất vọng vì kết quả không như mong đợi. Những người có mũi tên này cần biết rằng không ai là hoàn hảo, bởi nếu đã hoàn hảo thì chúng ta đâu cần trở lại kiếp sống này để có cơ hội học hỏi và hoàn thiện mình, mỗi người đều đang ở những giai đoạn tiến hóa riêng - Có người là những “ linh hồn già ” hơn thì mức độ hiểu biết, chín chắn và lòng trắc ẩn của họ sẽ dày và sâu hơn những “ linh hồn non trẻ ", nên hãy để cho mỗi linh hồn được phát triển tùy duyên, không nên gượng ép. Đối với con người, lòng biết ơn chính là " chất kích thích tăng trưởng ” hữu hiệu nhất, nhưng lòng biết ơn phải chân thành thì mới có thể phát huy tác dụng này lâu dài. Và bạn thấy đó, trong cuộc sống, có biết bao nhiêu cách thức khác nhau để con người lĩnh hội các bài học của cuộc đời.
- Những người có Mũi tên trống 4-5-6 nên ý thức rằng những thất vọng, tổn thất, chia rẽ và cả sự Vỡ mộng trong cuộc đời chính là những bước đi cần thiết và rất ý nghĩa trong hành trình dài hướng về sự hoàn thiện của linh hồn chúng ta. Nếu họ nhận ra điều này, những buồn thương sẽ dần biến mất. Ngược lại, họ sẽ chìm trong nỗi buồn, sự cô độc hay cảm giác bị từ chối, bị lạc lõng. Tập cảm thông với người khác, xây dựng lòng trắc ẩn sẽ giúp các vấn đề của họ giảm đi. Trẻ Con có mũi tên trống này rất cần sự quan tâm và yêu thương đặc biệt. Chúng có thể bị đẩy vào các hoàn cảnh mà trong đó, chúng trở thành nạn nhân của những trò bất công hay ác ý của bạn bè, và thậm chí là của những người quen biết đã khiến chúng thất vọng. Quá trình này lặp đi lặp lại sẽ khiến trẻ có tâm trạng thất thường, từ đó càng thêm bối rối và buồn vui bất chợt.
- Cha mẹ của những đứa trẻ thuộc nhóm này cần dạy trẻ tôn trọng người khác, để mỗi người được thể hiện đúng bản tính của mình và biết rằng không phải lúc nào người khác cũng làm theo ý của trẻ. Bằng cách này, chúng sẽ học được khái niệm “ Con thích ” thay cho “ Con muốn ”, để tâm trạng của chúng không bị cột chặt vào một kết quả nhất định nào nữa. Một điều đặc biệt quan trọng nữa là cha mẹ cần tạo ra một mối quan hệ thân thiết với con. Đây không đơn giản chỉ là chuyện tôn trọng hay ngoan ngoãn nghe lời, đó còn là sự tin yêu đối với cha mẹ. Một “ tình bạn ” đặc biệt như vậy sẽ làm dịu tâm trạng thất thường ở trẻ, nhất là khi trẻ có thể chia sẻ mọi điều với cha mẹ mà không bị đánh giá hay phải giải thích cho hành động của mình.
    `,
    tamlinh: `
Nếu trong ngày sinh dương lịch của bạn có đủ ba con số 3, 5, 7, chúng sẽ tạo thành một mũi tên khá tốt đẹp, đó là Mũi tên chỉ sự nhạy bén về mặt tâm linh, gọi ngắn gọn là Mũi tên Tâm linh. Ngược lại, nếu trong ngày sinh của bạn thiếu cả ba con số này, nó tạo ra một mũi tên trống chỉ sự hoài nghi về cuộc sống. Nói về mức độ phổ biến, Mũi tên Tâm linh khá ít xuất hiện so với mũi tên trống tương ứng ( Mũi tên Hoài nghi ). Trong hơn nửa năm qua , khi xem xét hơn 500 trường hợp ngẫu nhiên, tôi thấy được hơn 100 trường hợp có Mũi tên trống 3-5-7, trong khi số người Có Mũi tên 3-5-7 chỉ khoảng vài chục. Và theo tôi, quả thật những người có mũi tên này khá “ nhạy ” về các vấn đề tâm linh, trội hơn hẳn một người bình thường.
- Tuy nhiên, mức độ hiệu quả của mũi tên này khi áp dụng vào cuộc sống cá nhân còn phụ thuộc vào những con số khác hoặc những mũi tên khác cùng có mặt trong biểu đồ, và cả Con số chủ đạo của họ nữa. Mũi tên Tâm linh được tạo thành từ số 3 ở góc trên cùng bên trái, kéo xuống số 7 nằm ở góc dưới cùng bên phải . Điểm dễ thấy của những người có mũi tên này là họ sẽ không có mũi tên trống nào, vì ba con số 3 , 5 , 7 rải đều lên cả ba trục ngang và ba trục dọc. Thêm nữa, tất cả những người Có Mũi tên 3-5-7 được sinh ra trong những năm 19xx của thế kỷ 20 đều mặc định có Mũi tên Quyết tâm ( 1-5-9 ) , vì họ luôn có sẵn số 1 và 9 trong năm sinh . Hãy xem qua các trường hợp được đề cập. Vậy xét ra, những người thuộc nhóm mặc định có Mũi tên Tâm linh có được “ số vốn ” khá mạnh, mặc dù so với nhóm khi có đến hai số 7 trong ngày sinh có thể chịu nhiều thử thách hơn  - vốn là các “ tín hiệu ” của những bài học lớn được học qua sự mất mát và hy sinh.
- Xét về mặt ý nghĩa, Mũi tên 3-5-7 còn lợi hại ở chỗ nó kết nối ba con số mạnh nhất của từng trục : Số 3 của Trục ngang Trí não, số 5 của Trục ngang Tinh thần và số 7 của Trục ngang Thể chất. Đây còn là những con số chủ đạo trong nhiều trường phái tâm linh, thần học hay triết học khác nhau từ Đông sang Tây. Do đó, không có gì ngạc nhiên khi liên kết với nhau, chúng tạo ra tiềm năng phi thường để phát triển nhận thức tâm linh sâu sắc.
- Khả năng nhận thức tâm linh này thường được rút tỉa từ trải nghiệm cá nhân, nên những người mang mũi tên này ít khi chịu nghe lời khuyên của người khác. Trong nhiều tình huống, họ thích dấn thân, tự trải nghiệm, cảm nhận và tự rút ra bài học cho mình.
- Hệ quả của khuynh hướng này là họ phải vượt quá nhiều bài học buồn đau trong chặng đầu của cuộc đời. Nhưng chính những bài học ấy lại là động lực giúp họ rèn ý chỉ kiên cường để lĩnh hội các triết lý sâu sắc của cuộc đời, từ đó trưởng thành. Một khi vượt qua được những trải nghiệm cam go đó, có ý thức sống tích cực và nhận ra sức mạnh của tình yêu thương, những người này sẽ hình thành một nguồn sức mạnh nội tại khó ai bì được. Để rồi từ đó, họ đạt được sự tĩnh lặng và bình thản, thứ lan tỏa từ tâm hồn của họ ra đến bên ngoài, bộc lộ vẻ đẹp tinh thần của họ .
- Trong số những người ít ỏi có Mũi tên 3-5-7 mà tôi được gặp, có hai trường hợp tôi có thể nghiên cứu kỹ do được tiếp xúc khá gần. Trường hợp thứ nhất là một nữ cư sĩ. Tuy đang thực hành tu tại gia , nhưng sự ảnh hưởng của Cô cũng có thể được xem là khá mạnh cho một đạo tràng từng đi cùng chuyến Tự Động Tâm tới Đất Phật với nhà MayQ Go ngày trước. Khi xem Biểu đồ ngày sinh của cô, chúng ta thấy ngoài Mũi tên Tâm linh , cô còn có thêm đến ba mũi tên chỉ sức mạnh nữa, bao gồm Mũi tên Quyết tâm 1-5-9, Mũi tên Trí tuệ 3-6-9, và Mũi tên Kế hoạch 1-2-3. Đi kèm với lợi thế của bốn mũi tên này, tất cả con số trong Biểu đồ ngày sinh của cô đều không bị lặp lại nhiều lần dẫn đến sự thái quá, nên mọi thứ rất vừa phải. Thế nên đường tu của cô có vẻ rất thuận lợi và đạt được nhiều thành quả.
- Một trường hợp khác là một người bạn nhỏ tuổi hơn tô. Em từng gắn bó một khoảng thời gian với tôi trong một số công tác, và cũng thỉnh thoảng phát biểu theo kiểu “ Em bắt sóng được như vậy ”. Sau này, khi nhìn vào Biểu đồ ngày sinh của em, thật không ngạc nhiên khi thấy em cũng có chuỗi ba số 3-5-7. Bên cạnh đó, em còn có thêm Mũi tên Quyết tâm 1-5-9, cùng với Mũi tên Kế hoạch 1-2-3 giống như vị cư sĩ nói trên. Tuy nhiên, tôi quan sát thấy rằng cho tới hiện giờ con đường em đi có vẻ vẫn còn khá nhiều chông gai cùng không ít điều bất ý. Có thể lý giải từ hai lý do. Một là em có đến hai con số 9 lặp lại , tức là cả ba yếu tố đặc thù của số 9 ( trách nhiệm , hoài bão , lý tưởng ) ở em đều bị nhấn mạnh gấp đôi, khiến em mệt mỏi vì đòi hỏi trách nhiệm quả cao nơi bản thân và cả nơi người khác, em có ước vọng và lý tưởng quá cao so với thực tế, và vì cao nên khó với tới, từ đó khiến em buồn. Lý do thứ hai có thể là em vẫn đang trong giai đoạn " chịu nhiều bài học buồn đau ” để luyện ý chí kiên cường và lĩnh hội được nhiều năng lực tâm linh mạnh mẽ mà một cuộc đời suôn sẻ không thể nào có được.
- Biểu đồ ngày sinh có Mũi tên 3-5-7 thường rất tin người - đôi khi có phần bản năng - và cũng có thiên hướng coi sự công bằng là đương nhiên. Vì thế, trẻ nên được chăm sóc và quan tâm một cách đặc biệt, và đừng bao giờ nói dối trẻ cho qua chuyện, dù vì bất cứ lý do gì. Một khi những đứa trẻ này nghi ngờ cha mẹ hay người lớn, niềm tin của chúng sẽ bị tan vỡ, và chúng sẽ có những phản ứng đặc biệt mạnh mẽ với những sự lừa dối đó, cuộc sống của chúng cũng vì thế mà bị xáo động.
- Những đứa trẻ này rất cần được dìu dắt để tiếp cận các vấn đề tinh thần hoặc tâm linh ở mức độ sâu hơn. Phụ huynh hoặc thầy cô cũng nên khuyến khích trẻ tìm hiểu về nhiều tôn giáo và các triết lý khác nhau, để xem chúng phù hợp với tôn giáo hay hệ thống nào, và cũng để qua đó, trẻ có cơ hội tiếp cận và tiếp nhận những giá trị tâm linh hoặc giá trị đạo đức giúp cuộc sống con người tốt đẹp hơn.
Trẻ có khả năng nhận thức các giá trị tâm linh rất cao, nhưng thường thì sự non nớt trong giai đoạn đầu đời cũng ít nhiều cản trở khả năng đánh giá, nhìn nhận vấn đề, cũng như khả năng diễn đạt những cảm nhận sâu sắc trong nội tâm của trẻ . Điều này có thể khiến trẻ cảm thấy ấm ức và tức giận. Phụ huynh và thầy cô nên khuyến khích trẻ đọc những quyển sách được chọn lọc kỹ lưỡng, thay vì cho trẻ xem các chương trình truyền hình phổ thông, thứ vốn có nhiều nguy cơ ẩn chứa bạo lực hoặc cảm xúc tiêu cực. Điều này đặc biệt cần thiết và bổ ích trong giai đoạn trẻ đang phát triển khả năng nhận thức tâm linh của mình. Cha mẹ của những đứa trẻ thuộc nhóm này cũng nên cùng trẻ tìm hiểu những lĩnh vực mà trẻ có thể có tiềm năng nhưng chưa phát huy, chẳng hạn như trực giác hoặc khả năng ngoại cảm. Những điều này có thể sẽ giúp ích cho trẻ rất nhiều sau này, để chúng không hoang mang khi thấy bản thân mình hơi khác người.
    `,
    hoainghi: `
Mũi tên trống 3-5-7 này xuất hiện khi ngày sinh của bạn không có bất kỳ con số 3, 5, 7 nào. Trong Biểu đồ ngày sinh, mũi tên trong này được tạo thành bởi đường thẳng kéo dài từ ô trống ở góc trên cùng bên trái xuống ô trống ở góc dưới cùng bên phải. Vì thiếu cả ba số 3,5 và 7 nên tính chất của cả ba con số này đều vắng mặt, hệ quả là những người này sẽ dễ hoài nghi cuộc sống, như cái tên của mũi tên miêu tả.
- Mũi tên trống 3-5-7 có thể xuất hiện trong rất nhiều Biểu đồ ngày sinh hiện nay do không có những con số “ đảm bảo có mặt ” như số 1 và 9 ở Mũi tên Quyết tâm 1-5-9. Tất cả những người không có các số 3, 5 và 7 trong ngày tháng năm sinh của mình đều có khả năng có mũi tên trống này. Và vì thiếu hẳn ít nhất là ba số trong tổng cộng chín số tự nhiên, nên tỷ lệ các con số khác bị lặp lại trong Biểu đồ ngày sinh này là khá cao, dẫn đến tình trạng bị thừa những số mà chỉ có một số một ô là lý tưởng nhất, tức là các con số từ 3 đến 9. Cụ thể, vì thiếu 3 , 5 và 7 nên xác suất lặp lại các số 4, 6, 8, 9 khá cao. Bên cạnh đó, nhiều hơn hai số 1 và hai số 2 cũng không tốt. Hãy xem trường hợp được đề cập. Người sinh ngày 28/9/1984 có Mũi tên Hoài nghi và có đến hai số 8 , hai số 9. Trong khi đó, người sinh ngày 28/2/1964 thì có biểu đồ tốt hơn, vì tuy trong 3-5-7, nhưng các số còn lại trải đều các ô. Con số duy nhất lặp lại là cặp số 22 thì lại rất tốt. ( Nhắc lại : trong chín số tự nhiên, chỉ Có cặp 11 và 22 là tốt nhất, còn lại, các số từ 3 tới 9 thì chỉ cần một con số là đẹp nhất, nhiều hơn sẽ dư và ảnh hưởng không tốt đến các đặc điểm tính cách, cuộc sống, trải nghiệm, mất mát ... )
- Những người có Mũi tên trống 3-5-7 thường có vẻ khá đa nghi, hay đặt câu hỏi “ Tại sao ? ” cho hầu như mọi vấn đề trong cuộc sống, đặc biệt là những vấn đề họ mới gặp lần đầu. Điều này làm cho cuộc sống của họ đôi khi mệt, thậm chí có vẻ hơi tiêu cực. Tuy nhiên, sau khi họ đã cất công tìm hiểu kỹ càng đến tận căn nguyên vấn đề, nếu điều đó thuyết phục được họ thì họ sẽ thể hiện sự chấp nhận một cách rõ ràng. Ngược lại, nếu đã không đồng tình điểm nào thì họ sẽ dứt khoát gạt luôn quan điểm đó sang một bên, với bản chất của những người thuộc nhóm này là có máu tìm hiểu, tìm tòi, nên có rất nhiều nhà nghiên cứu khoa học có mũi tên đặc thù này. Nhìn chung, những người này sẽ bắt đầu nghiền ngẫm dựa trên nền tảng các kiến thức cơ bản, thứ được xem là chuẩn mực trong bất kỳ lĩnh vực nào họ đang theo đuổi, và thường bỏ qua cơ hội đào sâu những khía cạnh triết lý sâu sắc hơn của đời sống con người, hoặc nếu có nhìn ra thì họ cũng đặt chúng vào vị trí thứ yếu .
- Vì có quá nhiều điều làm họ cảm thấy hồ nghi về cuộc sống , họ trở nên khá nóng nảy và dễ rơi vào thế bị động. Nếu không có ý thức tự điều chỉnh bản thân, họ sẽ trở thành nạn nhân của chứng rối loạn lo âu ( hay lo lắng thái quá ), kèm theo các triệu chứng như nhức đầu và một số vấn đề tâm lý khác.
- Trạng thái lo lắng , bồn chồn có thể dẫn đến nhiều phản ứng tiêu cực, gây ra những tai nạn bất ngờ và thường ảnh hưởng đến vùng đầu. Do đó, đối với những người Có Mũi tên trống 3-5-7, điều đặc biệt cần thiết là họ cần phát triển một cái nhìn sâu sắc hơn về các triết lý sống đời để nhận ra rằng có những điều không chỉ được cảm nhận bởi năm giác quan thông thường. Nếu vì một lý do gì đó mà những người này cảm thấy thất vọng với một tôn giáo, tín ngưỡng hay nền khoa học vốn được xem là chính thống, họ có xu hướng phản ứng với thái độ bất cần, thiếu tin tưởng với các đức tin hay triết lý trong cuộc sống .
- Điều này lại khiến họ thêm chán nản với cuộc đời. Cách tốt nhất để những người có Mũi tên trống 3-5-7 khắc phục xu hướng này là hãy tự phát triển cho mình một mục đích sống cụ thể, nuôi dưỡng lòng thương yêu con người, thương yêu muôn loài một cách mạnh mẽ hơn, và học cách thể hiện bản thân một cách sâu sắc hơn thông qua các hình thức nghệ thuật như viết lách, vẽ, âm nhạc, vv ...
- Trẻ con có Mũi tên trống 3-5-7 thường thể hiện tính hoài nghi qua trạng thái ủ rũ, tâm trạng lên xuống thất thường. Nhưng nếu các bậc cha mẹ hiểu được nguyên nhân gây ra tình trạng đó thì họ sẽ có thể giúp trẻ điều chỉnh để có thái độ tích cực hơn, cũng như giúp trẻ tìm được sự bình yên trong tâm hồn bằng cách tránh xa các chương trình truyền hình hỗn loạn, các trò chơi lộn xộn trên điện thoại hay máy tính bảng hoặc những người bạn quá ồn ào.
- Khi có điều gì làm trẻ con có mũi tên trống này phật lòng, chúng có xu hướng trốn vào bên trong nội tâm mình. Sự cách biệt này là một cách để chúng tự cân bằng cảm xúc và tinh thần. Các bậc phụ huynh có thể giúp trẻ bằng phương pháp hai bước như sau: Đầu tiên, hãy khuyến khích trẻ đọc nhiều sách về tự nhiên, khoa học, địa lý và tìm hiểu lý do đằng sau những hiện tượng đang diễn ra, cũng như phát triển tính tò mò tích cực, sau đó, hãy khuyến khích trẻ chủ động theo đuổi một bộ môn nghệ thuật nào đó, như học chơi một loại nhạc cụ, học vẽ  làm đồ gốm, nặn tượng.
Lưu ý : Trẻ con có Mũi tên trống 3-5-7 cần rất nhiều tình thương và cần được đối xử tử tế, nhưng phụ huynh không được quá nuông chiều trẻ. Hãy kiên nhẫn nhưng vẫn phải kiên quyết và cứng rắn, nếu không, trẻ sẽ lợi dụng sự cưng chiều này và sinh hư.
- Mặt khác, cha mẹ cũng không bao giờ nên quay lưng lại với trẻ chỉ vì chúng không hành xử đúng. Hãy nhớ là trẻ luôn phản ứng lại những hành động của cha mẹ, vì vậy việc cha mẹ mặc kệ hoặc tỏ ra “ không thương nữa ” càng thổi bùng các phản ứng tiêu cực ở trẻ, và chúng sẽ thể hiện điều này theo cách duy nhất mà chúng biết: tỏ ra giận dỗi hoặc cô lập bản thân nhiều hơn. Điều này chỉ làm cho tình hình của trẻ trở nên tệ hơn mà thôi. Tình yêu thương sẽ chiến thắng tất cả, nên các bậc phụ huynh có con thuộc nhóm này hãy cố gắng thể hiện tình yêu thương đúng mức và sự nghiêm khắc vừa phải. Nghe có vẻ khó, nhưng hoàn toàn khả thi.
    `,
    quyettam: `
- Mũi tên Quyết tâm được tạo thành bởi sự có mặt của ba con số 1-5-9 theo đường chéo từ góc trái lên góc phải của Biểu đồ ngày sinh . Biểu đồ ngày sinh của những năm 19xx đều Có Mũi tên Quyết tâm trong Biểu đồ ngày sinh của mình . Đặc biệt , tất cả những người được sinh ra trong những năm 1950 đều có mũi tên này.
- Vì tất cả những người chào đời vào những năm 19xx đều có sẵn “ vốn liếng ” là số 1 và số 9 , chỉ cần có thêm số 5 là đủ để tạo thành mũi tên. Do đó , Mũi tên Quyết tâm trở thành mũi tên thường gặp nhất trong thế kỷ 20. Có lẽ vì vậy nên không có gì đáng ngạc nhiên khi thế kỷ 20 có rất nhiều người có quyết tâm sắt đá và đạt được thành tựu nổi bật. Sang chặng đầu của thế kỷ 21 này , khi những người của thế kỷ 20 đang trong lứa tuổi trưởng thành , họ vẫn tiếp tục có những đóng góp quan trọng cho xã hội .
- Nếu quan sát kỹ hơn, bạn sẽ thấy quả thật rất nhiều người được sinh ra trong khoảng thời gian 1950 - 1959 rất thành công cho đến tận bây giờ. Những người có Mũi tên Quyết tâm trong Biểu đồ ngày sinh thường rất kiên trì thực hiện bất kỳ điều gì họ muốn làm, vượt qua mọi trở ngại, theo đuổi cho đến khi nào được thì thôi. Thật mừng cho những ai có được mũi tên này , bởi nếu thiếu quyết tâm , chúng ta sẽ dễ bị những khó khăn trên đường đời làm cho nhụt chí.
Tuy nhiên, những người này cũng nên cẩn trọng vì đôi khi sự quyết tâm quá độ sẽ trở thành sự cố chấp khiến họ cứ đâm đầu vào một vấn đề nào đó, dù biết nó không lối thoát hoặc không cần thiết, từ đó lãng phí nhiều thời gian và năng lượng, hoặc họ sẽ kiên quyết ... ngồi chờ cho đến khi nào chướng ngại tan biến , sau đó ... lao vào giải quyết tiếp.
- Một trong những bài học lớn nhất mà người có Mũi tên Quyết tâm nên thấu hiểu: Không phải vấn đề nào cũng cần phải giải quyết. Cái gì cũng lao vào giải quyết thì sẽ rất mệt mỏi.Thay vào đó , những người có mũi tên này nên chọn con đường trung dung, nghĩa là không nên quá cố chấp mà hãy tập phát huy tối đa trực giác, trí tuệ và lòng trắc ẩn của mình, biết lúc nào nên tiếp tục dấn bước, lúc nào nên dừng và lúc nào nên buông.Như vậy họ sẽ giảm thiểu được nhiều thời gian, tiết kiệm được nhiều năng lượng, cũng như có cơ hội học hỏi thêm nhiều điều.
- Sự quyết đoán của những người mang Mũi tên 1-5-9 là một phẩm chất tuyệt vời, đồng thời cũng là một ưu điểm mạnh mẽ. Nhưng những người có mũi tên này cần học cách sử dụng nó một cách khôn ngoan. Nếu bên cạnh mũi tên này, họ còn có tổ hợp nhiều số 1 trên Biểu đồ ngày sinh ( từ hai số 1 trở lên, ví dụ : 11, 111, 1111 ... ) thì họ càng phải lưu ý điều này hơn nữa, vì số 1 càng nhiều thì “ cái tôi ” càng được nhấn mạnh và họ càng dễ trở nên cố chấp đến mức ngang ngạnh.
- Trong trường hợp chỉ có số 9 được nhân đôi ( 1-5-99 ), sự quyết tâm sẽ hướng đến tham vọng hay lý tưởng của người đó, tùy thuộc vào con số chủ đạo của họ hoặc những tổ hợp số khác có mặt trong biểu đồ. Nếu các tổ hợp số chủ yếu tập trung ở Trục ngang Thể chất ( 1-4-7 ), trọng tâm sẽ là tham vọng, hoài bão, còn nếu các tổ hợp số tập trung Trục ngang Tinh thần ( 2-5-8 ) hoặc Trục ngang Trí não ( 3-6-9 ), động lực cho sự quyết tâm sẽ tập trung vào lý tưởng sống. Nhìn chung, trẻ con có Mũi tên Quyết tâm thường khá thông minh, chịu nghe lẽ phải, nhưng cũng sẵn sàng tranh luận với người lớn nếu chúng nhìn ra lỗ hổng trong các lời giải thích đó.
Tóm lại, đối với những đứa trẻ có Mũi tên 1-5-9, các bậc phụ huynh và thầy cô nên tạo điều kiện cho trẻ có đủ không gian và cơ hội để thể hiện đặc điểm tính cách của chúng, nhưng cũng cần kiểm soát ở mức vừa phải để trẻ không được nước lấn tới, gây ra tình bướng bỉnh, lì lợm, dẫn đến các phản ứng tiêu cực trước nhiều tình huống và gây hại đến đời sống hạnh phúc của trẻ lúc trưởng thành. Người lớn cần lưu ý bồi dưỡng để thúc đẩy sự quyết tâm của trẻ theo hướng tích cực, vì đây là “ nhân tố vàng ” góp phần tạo nên thành công cho cuộc đời của trẻ sau này.
    `,
    trihoan: `
- Ngược với Mũi tên Quyết tâm 1-5-9, những người có ngày sinh thiếu cả ba con số 1, 5, 9 sẽ có Mũi tên trống 1-5-9 trong Biểu đồ ngày sinh, với đặc điểm chung là ... tính thiếu quyết tâm, hay lần lựa, trì hoãn thực hiện những điều cần làm. Vì vậy mũi tên này được gọi là Mũi tên Trì hoãn. Tất cả những ai sinh ra vào những năm 19xx của thế kỷ 20 đều không vướng mũi tên trông này. Chỉ có những người chào đời từ năm 2000 trở đi mới có khả năng gặp phải Mũi tên Trì hoãn, và nhiều người trong số đó còn trống thêm rất nhiều cột khác, do trong ngày sinh quá nhiều số 0 hoặc có nhiều số lặp lại.
- Tuy nhiên, cũng có một tin tốt lành là so với các mũi tên trống khác, Mũi tên Trì hoãn ít xuất hiện hơn rất nhiều, vì trong một tháng có nhiều ngày đều có ít nhất một số 1 ( ví dụ các ngày 1 , 11 , 21 , 31 ). Bên cạnh đó, những người có sinh nhật vào tháng 5, tháng 9 mỗi năm, và những người sinh năm 2005, 2009 , 2015 , 2019 ... cũng yên tâm không vướng mũi tên trống này. Nhìn trên Biểu đồ ngày sinh, Mũi tên trống 1-5-9 xẻ biểu đồ ra làm hai nửa rõ ràng, chia cắt những con số mang tính trực giác ( bao gồm 2 , 3 , 6 ) và những con số mang tính vật chất thực tế ( bao gồm 4 , 7 , 8 ). Vì vậy , những tên này sẽ dễ lần lựa, trì hoãn mọi việc, thậm chí ... không làm gì cả. Đặc điểm đó có thể được điều chỉnh nếu được phát hiện sớm.
- Do đó các bậc phụ huynh và thầy cô cần lưu ý để nhận ra đặc điểm này ở trẻ để có thể uốn nắn kịp thời. Nếu cứ kéo dài thì tính trì hoãn dễ ăn sâu vào gốc rễ và gây hại cho cuộc sống của những người mang mũi tên này, ảnh hưởng rất tiêu cực đến sự phát triển hay thành công của họ, cũng như liên tục khiến bản thân họ lẫn mọi người xung quanh cảm thấy vô cùng khó chịu.
    `,
}

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
    const [show, setShow] = useState<boolean>(false)
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
    useEffect(() => {
        const verify = localStorage.getItem('verify')
        if (verify) {
            setIsVerify(true)
        }
    }, [])
    useEffect(() => {
        if (!info.number1) navigate('/')
    }, [])
    const tuoidinh1 = useMemo(() => 36 - (info.number1 as number), [info])
    const tuoidinh2 = useMemo(() => 9 + tuoidinh1, [tuoidinh1])
    const tuoidinh3 = useMemo(() => 9 + tuoidinh2, [tuoidinh2])
    const tuoidinh4 = useMemo(() => 9 + tuoidinh3, [tuoidinh3])
    const bieudoso = useMemo(() => {
        return [
            ...getArrNum(info.day as string),
            ...getArrNum(info.month as string),
            ...getArrNum(info.year as string),
        ]
    }, [info])
    const bieudoso2 = useMemo(
        () => getArrNumFromString(info.fullname as string),
        [info],
    )
    const bieudoso3 = useMemo(
        () => [...bieudoso2, ...bieudoso],
        [bieudoso2, bieudoso],
    )
    const hasArrows = arrows(bieudoso)
    const hasArrows2 = arrows(bieudoso2)
    const hasArrows3 = arrows(bieudoso3)
    const num1 = solanlap(bieudoso, 1).length
    const num2 = solanlap(bieudoso, 2).length
    const num3 = solanlap(bieudoso, 3).length
    const num4 = solanlap(bieudoso, 4).length
    const num5 = solanlap(bieudoso, 5).length
    const num6 = solanlap(bieudoso, 6).length
    const num7 = solanlap(bieudoso, 7).length
    const num8 = solanlap(bieudoso, 8).length
    const num9 = solanlap(bieudoso, 9).length

    return (
        <Layout>
            {show && <Popup setShow={setShow} />}
            <div className="mt-10 flex flex-col items-center md:text-3xl text-2xl font-bold select-none cursor-default text-white">
                <p className="text-center">BÁO CÁO THẦN SỐ HỌC</p>
                <h2 className="mt-3">
                    Họ và tên:{' '}
                    <span className="text-primary">{info.fullname}</span>
                </h2>
                <h2 className="mt-3">
                    Ngày sinh:{' '}
                    <span className="text-primary">{`${info.day}/${info.month}/${info.year}`}</span>
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
                <h2 className="text-xl text-primary text-center font-bold ">
                    Con số chủ đạo của bạn là:{' '}
                    <span className="text-shadow-pink">{info.number1}</span>
                </h2>
                <p className="rp-text">
                    {parse(TEXT[info.number1 as number].content)}
                </p>
                {!isVerify && (
                    <div>
                        <h1 className="mt-5 text-2xl font-bold text-primary text-center">
                            Để đọc tiếp vui lòng làm theo hướng dẫn
                        </h1>
                        <div className="flex flex-col items-center">
                            <div>
                                <div className="flex max-w-[280px] w-full items-center mt-4">
                                    <input
                                        className="flex-1 h-8 rounded-md bg-white text-[#333] text-[15px] border-none outline-none px-2"
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
                                                localStorage.setItem(
                                                    'verify',
                                                    'true',
                                                )
                                            } else {
                                                setErr('Mã không đúng!')
                                            }
                                        }}
                                        className="h-8 min-w-[60px] flex-shrink-0 ml-2 px-1 whitespace-nowrap rounded-md primary-btn text-xs block"
                                    >
                                        Xác nhận
                                    </button>
                                </div>
                                {err && (
                                    <p className="text-sm mt-2 text-red-400">
                                        {err}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex">
                            <div
                                onClick={setShow.bind(this, true)}
                                className="mt-5 cursor-pointer py-2 px-4 rounded-lg uppercase inline-block mx-auto font-bold primary-btn"
                            >
                                Lấy mã xác nhận ngay
                            </div>
                        </div>
                    </div>
                )}
                {isVerify && (
                    <div>
                        <h2 className="text-xl text-primary text-center font-bold mt-10">
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
                        <h2 className="text-xl text-primary text-center font-bold mt-10">
                            Số linh hồn của bạn là:{' '}
                            <span className="text-shadow-pink">
                                {info.solinhhon}
                            </span>
                        </h2>
                        <p className="rp-text mt-4">
                            {SLH[info.solinhhon as number]}
                        </p>
                        <h2 className="text-xl text-primary text-center font-bold mt-10">
                            Số biểu đạt của bạn là:{' '}
                            <span className="text-shadow-pink">
                                {info.sobieudat}
                            </span>
                        </h2>
                        <p className="rp-text mt-4">
                            {SBD[info.sobieudat as number] ||
                                'Nội dung chưa cập nhật'}
                        </p>
                        <h2 className="text-xl text-primary text-center font-bold mt-10">
                            Ý nghĩa ngày sinh với số:{' '}
                            <span className="text-shadow-pink">
                                {info.songaysinh}
                            </span>
                        </h2>
                        <p className="rp-text">
                            {parse(NGAYSINH?.[info.songaysinh as number])}
                        </p>
                        <h2 className="text-xl text-primary text-center font-bold mt-10">
                            Biểu đồ ngày sinh
                        </h2>
                        <div className="mt-4 relative max-w-[300px] mx-auto mb-5">
                            <table className="mx-auto">
                                <tbody>
                                    <tr>
                                        <td className="border-t-transparent border-l-transparent">
                                            {solanlap(bieudoso, 3)}
                                        </td>
                                        <td className="border-t-transparent">
                                            {solanlap(bieudoso, 6)}
                                        </td>
                                        <td className="border-t-transparent border-r-transparent">
                                            {solanlap(bieudoso, 9)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-l-transparent">
                                            {solanlap(bieudoso, 2)}
                                        </td>
                                        <td>{solanlap(bieudoso, 5)}</td>
                                        <td className="border-r-transparent">
                                            {solanlap(bieudoso, 8)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b-transparent border-l-transparent">
                                            {solanlap(bieudoso, 1)}
                                        </td>
                                        <td className="border-b-transparent">
                                            {solanlap(bieudoso, 4)}
                                        </td>
                                        <td className="border-b-transparent border-r-transparent">
                                            {solanlap(bieudoso, 7)}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {(hasArrows.quyettam.show ||
                                hasArrows.trihoan.show) && (
                                <img
                                    className="absolute left-[70px] top-[51px]"
                                    src={arr1}
                                    alt="arrow"
                                />
                            )}
                            {(hasArrows.thucte.show ||
                                hasArrows.thieutrattu.show) && (
                                <img
                                    className="absolute left-[50px] bottom-[10px]"
                                    src={arr2}
                                    alt="arrow"
                                />
                            )}
                            {(hasArrows.canbangcamxuc.show ||
                                hasArrows.nhaycam.show) && (
                                <img
                                    className="absolute left-[50px] bottom-[90px]"
                                    src={arr2}
                                    alt="arrow"
                                />
                            )}
                            {(hasArrows.tritue.show ||
                                hasArrows.trinhonganhan.show) && (
                                <img
                                    className="absolute left-[50px] top-[60px]"
                                    src={arr2}
                                    alt="arrow"
                                />
                            )}
                            {hasArrows.kehoach.show && (
                                <img
                                    className="absolute left-[40px] bottom-0"
                                    src={arr3}
                                    alt="arrow"
                                />
                            )}
                            {(hasArrows.ychi.show || hasArrows.uathan.show) && (
                                <img
                                    className="absolute left-[120px] bottom-0"
                                    src={arr3}
                                    alt="arrow"
                                />
                            )}
                            {(hasArrows.hoatdong.show ||
                                hasArrows.thudong.show) && (
                                <img
                                    className="absolute right-9 bottom-0"
                                    src={arr3}
                                    alt="arrow"
                                />
                            )}
                            {(hasArrows.tamlinh.show ||
                                hasArrows.hoainghi.show) && (
                                <img
                                    className="absolute left-[70px] bottom-[52px]"
                                    src={arr4}
                                    alt="arrow"
                                />
                            )}
                        </div>
                        <div className="mt-10">
                            {num1 > 0 && (
                                <div>
                                    <h3 className="font-bold mb-4 leading-none inline-block text-2xl text-primary">
                                        Bạn sở hữu {num1} con số 1
                                    </h3>
                                    <p className="rp-text">
                                        {parse(
                                            num1 >= 5
                                                ? SO1[5].content
                                                : SO1[num1].content,
                                        )}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {num2 > 0 && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu {num2} con số 2
                                    </h3>
                                    <p className="rp-text">
                                        {parse(
                                            num2 >= 5
                                                ? SO2[5].content
                                                : SO2[num2].content,
                                        )}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {num3 > 0 && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu {num3} con số 3
                                    </h3>
                                    <p className="rp-text">
                                        {parse(
                                            num3 >= 4
                                                ? SO3[4].content
                                                : SO3[num3].content,
                                        )}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {num4 > 0 && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu {num4} con số 4
                                    </h3>
                                    <p className="rp-text">
                                        {parse(
                                            num4 >= 3
                                                ? SO4[3].content
                                                : SO4[num4].content,
                                        )}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {num5 > 0 && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu {num5} con số 5
                                    </h3>
                                    <p className="rp-text">
                                        {parse(
                                            num5 >= 4
                                                ? SO5[4].content
                                                : SO5[num5].content,
                                        )}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {num6 > 0 && num6 < 5 && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu {num6} con số 6
                                    </h3>
                                    <p className="rp-text">
                                        {parse(SO6[num6].content)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {num7 > 0 && num7 < 5 && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu {num7} con số 7
                                    </h3>
                                    <p className="rp-text">
                                        {parse(SO7[num7].content)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {num8 > 0 && num8 < 5 && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu {num8} con số 8
                                    </h3>
                                    <p className="rp-text">
                                        {parse(SO8[num8].content)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {num9 > 0 && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu {num9} con số 9
                                    </h3>
                                    <p className="rp-text">
                                        {parse(
                                            num9 >= 5
                                                ? SO9[5].content
                                                : SO9[num9].content,
                                        )}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.thucte.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên thực tế (đủ 1-4-7)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.thucte)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.thieutrattu.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên thiểu trật tự (trống
                                        1-4-7)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.thieutrattu)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.canbangcamxuc.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên cân bằng cảm xúc (đủ
                                        2-5-8)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.canbangcamxuc)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.nhaycam.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên nhạy cảm (trống
                                        2-5-8)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.nhaycam)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.tritue.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên trí tuệ (đủ 3-6-9)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.tritue)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.trinhonganhan.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên trí nhớ ngắn hạn
                                        (trống 3-6-9)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.trinhonganhan)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.hoatdong.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên hoạt động (đủ 7-8-9)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.hoatdong)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.thudong.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên thụ động (trống
                                        7-8-9)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.thudong)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.ychi.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên ý chí (đủ 4-5-6)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.ychi)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.uathan.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên uất giận (trống
                                        4-5-6)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.uatgian)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.kehoach.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên kế hoạch (đủ 1-2-3)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.kehoach)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.quyettam.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên quyết tâm (đủ 1-5-9)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.quyettam)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.trihoan.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên trì hoãn (trống
                                        1-5-9)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.trihoan)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.tamlinh.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên tâm linh (đủ 3-5-7)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.tamlinh)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            {hasArrows.hoainghi.show && (
                                <div>
                                    <h3 className="font-bold mb-4 mt-4 leading-[1.6] inline-block text-2xl text-primary">
                                        Bạn sở hữu mũi tên hoài nghi (trống
                                        3-5-7)
                                    </h3>
                                    <p className="rp-text">
                                        {parse(MUITEN.hoainghi)}
                                    </p>
                                </div>
                            )}
                        </div>
                        <h2 className="text-xl text-primary text-center font-bold mt-10">
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
                            <h3 className="mt-4 text-primary font-bold text-base text-center">
                                {NAM[info.namcanhan as number]?.heading ||
                                    'Nội dung chưa cập nhật'}
                            </h3>
                            <p className="rp-text">
                                {NAM[info.namcanhan as number]?.content ||
                                    'Nội dung chưa cập nhật'}
                            </p>
                        </div>
                        <h2 className="text-xl text-primary text-center font-bold mt-10 uppercase">
                            Bốn đỉnh của cuộc đời
                        </h2>
                        <div className="mt-7 flex justify-center">
                            <div className="w-[300px] relative text-base text-primary font-bold">
                                <img className="w-full" src={dinh} alt="dinh" />
                                <span className="bottom-[-6px] left-12 absolute">
                                    {info.monthNum}
                                </span>
                                <span className="bottom-[-6px] left-[146px] absolute">
                                    {info.dayNum}
                                </span>
                                <span className="bottom-[-6px] right-[46px] absolute">
                                    {info.yearNum}
                                </span>
                                <span className="bottom-[44px] left-[96px] absolute">
                                    {info.dinh?.dinh1}
                                </span>
                                <span className="bottom-[44px] right-[96px] absolute">
                                    {info.dinh?.dinh2}
                                </span>
                                <span className="top-[44px] left-[146px] absolute">
                                    {info.dinh?.dinh3}
                                </span>
                                <span className="top-[10px] left-[146px] absolute">
                                    {info.dinh?.dinh4}
                                </span>
                            </div>
                        </div>
                        <h1 className="font-bold mt-8 inline-block text-2xl text-primary">
                            Đỉnh 1 với số {info.dinh?.dinh1} (Năm{' '}
                            {Number(info.year) + tuoidinh1} - {tuoidinh1} tuổi)
                        </h1>
                        <p className="rp-text">
                            {DINH1[info.dinh?.dinh1 as number]
                                ? parse(DINH1[info.dinh?.dinh1 as number])
                                : 'Nội dung chưa cập nhật'}
                        </p>
                        <h1 className="font-bold mt-5 text-2xl text-primary">
                            Đỉnh 2 với số {info.dinh?.dinh2} (Năm{' '}
                            {Number(info.year) + tuoidinh2} - {tuoidinh2} tuổi)
                        </h1>
                        <p className="rp-text">
                            {DINH2[info.dinh?.dinh2 as number]
                                ? parse(DINH2[info.dinh?.dinh2 as number])
                                : 'Nội dung chưa cập nhật'}
                        </p>
                        <h1 className="font-bold mt-5 text-2xl text-primary">
                            Đỉnh 3 với số {info.dinh?.dinh3} (Năm{' '}
                            {Number(info.year) + tuoidinh3} - {tuoidinh3} tuổi)
                        </h1>
                        <p className="rp-text">
                            {DINH3[info.dinh?.dinh3 as number]
                                ? parse(DINH3[info.dinh?.dinh3 as number])
                                : 'Nội dung chưa cập nhật'}
                        </p>
                        <h1 className="font-bold mt-5 text-2xl text-primary">
                            Đỉnh 4 với số {info.dinh?.dinh4} (Năm{' '}
                            {Number(info.year) + tuoidinh4} - {tuoidinh4} tuổi)
                        </h1>
                        <p className="rp-text">
                            {DINH4[info.dinh?.dinh4 as number]
                                ? parse(DINH4[info.dinh?.dinh4 as number])
                                : 'Nội dung chưa cập nhật'}
                        </p>

                        <div className="mt-5">
                            <div className="flex items-center md:flex-row flex-col flex-wrap">
                                <div className="md:w-1/2 w-full">
                                    <h2 className="text-xl text-primary text-center font-bold mt-10">
                                        Biểu đồ ngày sinh
                                    </h2>
                                    <div className="mt-4 relative max-w-[300px] mx-auto mb-5">
                                        <table className="mx-auto">
                                            <tbody>
                                                <tr>
                                                    <td className="border-t-transparent border-l-transparent">
                                                        {solanlap(bieudoso, 3)}
                                                    </td>
                                                    <td className="border-t-transparent">
                                                        {solanlap(bieudoso, 6)}
                                                    </td>
                                                    <td className="border-t-transparent border-r-transparent">
                                                        {solanlap(bieudoso, 9)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-l-transparent">
                                                        {solanlap(bieudoso, 2)}
                                                    </td>
                                                    <td>
                                                        {solanlap(bieudoso, 5)}
                                                    </td>
                                                    <td className="border-r-transparent">
                                                        {solanlap(bieudoso, 8)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-b-transparent border-l-transparent">
                                                        {solanlap(bieudoso, 1)}
                                                    </td>
                                                    <td className="border-b-transparent">
                                                        {solanlap(bieudoso, 4)}
                                                    </td>
                                                    <td className="border-b-transparent border-r-transparent">
                                                        {solanlap(bieudoso, 7)}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {(hasArrows.quyettam.show ||
                                            hasArrows.trihoan.show) && (
                                            <img
                                                className="absolute left-[70px] top-[51px]"
                                                src={arr1}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows.thucte.show ||
                                            hasArrows.thieutrattu.show) && (
                                            <img
                                                className="absolute left-[50px] bottom-[10px]"
                                                src={arr2}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows.canbangcamxuc.show ||
                                            hasArrows.nhaycam.show) && (
                                            <img
                                                className="absolute left-[50px] bottom-[90px]"
                                                src={arr2}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows.tritue.show ||
                                            hasArrows.trinhonganhan.show) && (
                                            <img
                                                className="absolute left-[50px] top-[60px]"
                                                src={arr2}
                                                alt="arrow"
                                            />
                                        )}
                                        {hasArrows.kehoach.show && (
                                            <img
                                                className="absolute left-[40px] bottom-0"
                                                src={arr3}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows.ychi.show ||
                                            hasArrows.uathan.show) && (
                                            <img
                                                className="absolute left-[120px] bottom-0"
                                                src={arr3}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows.hoatdong.show ||
                                            hasArrows.thudong.show) && (
                                            <img
                                                className="absolute right-9 bottom-0"
                                                src={arr3}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows.tamlinh.show ||
                                            hasArrows.hoainghi.show) && (
                                            <img
                                                className="absolute left-[70px] bottom-[52px]"
                                                src={arr4}
                                                alt="arrow"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <h2 className="text-xl text-primary text-center font-bold mt-10">
                                        Biểu đồ tên
                                    </h2>
                                    <div className="mt-4 relative max-w-[300px] mx-auto mb-5">
                                        <table className="mx-auto">
                                            <tbody>
                                                <tr>
                                                    <td className="border-t-transparent border-l-transparent">
                                                        {solanlap(bieudoso2, 3)}
                                                    </td>
                                                    <td className="border-t-transparent">
                                                        {solanlap(bieudoso2, 6)}
                                                    </td>
                                                    <td className="border-t-transparent border-r-transparent">
                                                        {solanlap(bieudoso2, 9)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-l-transparent">
                                                        {solanlap(bieudoso2, 2)}
                                                    </td>
                                                    <td>
                                                        {solanlap(bieudoso2, 5)}
                                                    </td>
                                                    <td className="border-r-transparent">
                                                        {solanlap(bieudoso2, 8)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-b-transparent border-l-transparent">
                                                        {solanlap(bieudoso2, 1)}
                                                    </td>
                                                    <td className="border-b-transparent">
                                                        {solanlap(bieudoso2, 4)}
                                                    </td>
                                                    <td className="border-b-transparent border-r-transparent">
                                                        {solanlap(bieudoso2, 7)}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {(hasArrows2.quyettam.show ||
                                            hasArrows2.trihoan.show) && (
                                            <img
                                                className="absolute left-[70px] top-[51px]"
                                                src={arr1}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows2.thucte.show ||
                                            hasArrows2.thieutrattu.show) && (
                                            <img
                                                className="absolute left-[50px] bottom-[10px]"
                                                src={arr2}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows2.canbangcamxuc.show ||
                                            hasArrows2.nhaycam.show) && (
                                            <img
                                                className="absolute left-[50px] bottom-[90px]"
                                                src={arr2}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows2.tritue.show ||
                                            hasArrows2.trinhonganhan.show) && (
                                            <img
                                                className="absolute left-[50px] top-[60px]"
                                                src={arr2}
                                                alt="arrow"
                                            />
                                        )}
                                        {hasArrows2.kehoach.show && (
                                            <img
                                                className="absolute left-[40px] bottom-0"
                                                src={arr3}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows2.ychi.show ||
                                            hasArrows2.uathan.show) && (
                                            <img
                                                className="absolute left-[120px] bottom-0"
                                                src={arr3}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows2.hoatdong.show ||
                                            hasArrows2.thudong.show) && (
                                            <img
                                                className="absolute right-9 bottom-0"
                                                src={arr3}
                                                alt="arrow"
                                            />
                                        )}
                                        {(hasArrows2.tamlinh.show ||
                                            hasArrows2.hoainghi.show) && (
                                            <img
                                                className="absolute left-[70px] bottom-[52px]"
                                                src={arr4}
                                                alt="arrow"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col items-center justify-center">
                                <h2 className="text-xl text-primary text-center font-bold mt-10">
                                    Biểu đồ kết hợp ngày sinh và họ tên
                                </h2>
                                <div className="mt-4 relative w-full max-w-[300px] mx-auto mb-5">
                                    <table className="mx-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border-t-transparent border-l-transparent">
                                                    {solanlap(bieudoso3, 3)}
                                                </td>
                                                <td className="border-t-transparent">
                                                    {solanlap(bieudoso3, 6)}
                                                </td>
                                                <td className="border-t-transparent border-r-transparent">
                                                    {solanlap(bieudoso3, 9)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-l-transparent">
                                                    {solanlap(bieudoso3, 2)}
                                                </td>
                                                <td>
                                                    {solanlap(bieudoso3, 5)}
                                                </td>
                                                <td className="border-r-transparent">
                                                    {solanlap(bieudoso3, 8)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-b-transparent border-l-transparent">
                                                    {solanlap(bieudoso3, 1)}
                                                </td>
                                                <td className="border-b-transparent">
                                                    {solanlap(bieudoso3, 4)}
                                                </td>
                                                <td className="border-b-transparent border-r-transparent">
                                                    {solanlap(bieudoso3, 7)}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {(hasArrows3.quyettam.show ||
                                        hasArrows3.trihoan.show) && (
                                        <img
                                            className="absolute left-[70px] top-[51px]"
                                            src={arr1}
                                            alt="arrow"
                                        />
                                    )}
                                    {(hasArrows3.thucte.show ||
                                        hasArrows3.thieutrattu.show) && (
                                        <img
                                            className="absolute left-[50px] bottom-[10px]"
                                            src={arr2}
                                            alt="arrow"
                                        />
                                    )}
                                    {(hasArrows3.canbangcamxuc.show ||
                                        hasArrows3.nhaycam.show) && (
                                        <img
                                            className="absolute left-[50px] bottom-[90px]"
                                            src={arr2}
                                            alt="arrow"
                                        />
                                    )}
                                    {(hasArrows3.tritue.show ||
                                        hasArrows3.trinhonganhan.show) && (
                                        <img
                                            className="absolute left-[50px] top-[60px]"
                                            src={arr2}
                                            alt="arrow"
                                        />
                                    )}
                                    {hasArrows3.kehoach.show && (
                                        <img
                                            className="absolute left-[40px] bottom-0"
                                            src={arr3}
                                            alt="arrow"
                                        />
                                    )}
                                    {(hasArrows3.ychi.show ||
                                        hasArrows3.uathan.show) && (
                                        <img
                                            className="absolute left-[120px] bottom-0"
                                            src={arr3}
                                            alt="arrow"
                                        />
                                    )}
                                    {(hasArrows3.hoatdong.show ||
                                        hasArrows3.thudong.show) && (
                                        <img
                                            className="absolute right-9 bottom-0"
                                            src={arr3}
                                            alt="arrow"
                                        />
                                    )}
                                    {(hasArrows3.tamlinh.show ||
                                        hasArrows3.hoainghi.show) && (
                                        <img
                                            className="absolute left-[70px] bottom-[52px]"
                                            src={arr4}
                                            alt="arrow"
                                        />
                                    )}
                                </div>
                            </div>
                            <h1 className="font-bold mt-5 text-2xl text-primary">
                                Kết quả sau khi kết hợp 2 biểu đồ
                            </h1>
                            <p className="rp-text mt-4">
                                Sau khi kết hợp biểu đồ ngày sinh và tên riêng
                                của mình vào, các bạn đã vô tình điền thêm nhiều
                                con số để lấp đầy các chỗ bị thiếu của mình, bạn
                                đã được điền thêm các mũi tên:{' '}
                                {Object.keys(hasArrows3).map((key) => {
                                    if ((hasArrows3 as any)[key].show) {
                                        return (
                                            <strong>
                                                {(hasArrows3 as any)[key].name},{' '}
                                            </strong>
                                        )
                                    }
                                    return null
                                })}{' '}
                                vào biểu đồ của mình.
                            </p>
                            <p className="rp-text">
                                Tuy nhiên đối với chỗ nào quá nhiều số được điền
                                vào bạn nên tìm hiểu kỹ ý nghĩa các mũi tên đó
                                và tập cân bằng, chỗ nào dư nên nhổ bớt và thiếu
                                nên điền vào bằng nhiều cách khác nhau. Bạn có
                                thể tham khảo các bài viết chỉ cách điền hoặc
                                nhổ bớt các con số{' '}
                                <a
                                    className="text-primary hover:underline"
                                    href="https://nhansohocvn.com/news/"
                                >
                                    tại đây.
                                </a>
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
                    <h3 className="rp-heading text-primary">
                        CHỈ SỐ ĐƯỜNG ĐỜI (SỐ CHỦ ĐẠO) CỦA BẠN LÀ:{' '}
                        <span className="text-primary">
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
                        {parse(chiSoDuongDoi.content) ||
                            'Nội dung chưa cập nhật'}
                    </p>
                    <p className="font-bold mb-2">Mối quan hệ tương thích</p>
                    <p className="rp-text">
                        {parse(chiSoDuongDoi.relationship as string) ||
                            'Nội dung chưa cập nhật'}
                    </p>
                </div>
            )}
        </Layout>
    )
}

export default Detail
