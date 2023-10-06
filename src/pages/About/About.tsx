import React from 'react';

import { Box } from '@chakra-ui/react';

import AboutHeroContentSection from './components/AboutHeroContentSection';

const abouts = [
  {
    isShowDivider: true,
    title: 'VỀ CHÚNG TÔI',
    image: 'https://hagintea.com/wp-content/uploads/2022/01/about-us-1-1.jpg',
    content:
      'Câu chuyện của Hagintea bắt đầu đơn giản với một niềm đam mê và tình yêu với cây trà Shan Việt. Chúng tôi muốn tạo ra những sản phẩm trà thật sự đặc biệt – mang bản sắc văn hóa bản địa, mang thanh hương của núi rừng phía Bắc. Lấy cảm hứng từ những giá trị văn hóa, những câu chuyện về cuộc sống, chúng tôi muốn truyền tải những nét văn hóa bản địa của Hà Giang và các tỉnh miền núi phía Bắc nói riêng và Việt Nam nói chung. Hagintea được tạo thành từ Ha Giang and Tea – thể hiện cho sự khởi đầu của chúng tôi tại mảnh đất Hà Giang, cực Bắc của Tổ quốc. Và mong muốn mang đến cũng như giới thiệu cho cộng đồng trong nước, bạn bè quốc tế biết đến một sản vật đặc biệt mang nhiều ý nghĩa của Việt Nam từ lâu đã ẩn danh trên những cao nguyên đá.',
  },
  {
    isShowDivider: true,
    title: 'HÀNH TRÌNH HAGINTEA',
    image: 'https://hagintea.com/wp-content/uploads/2022/01/about-us-2.jpg',
    content:
      'Hành trình bắt đầu từ những lá trà tươi được hái thủ công bằng tay, sau đó dưới bàn tay nghệ nhân, những búp trà trải qua một quy trình sản xuất khép kín các bước, sao, vò, sấy, phơi, lên men để tạo ra hương vị, màu sắc cho từng loại trà. Những sản phẩm trà đầu tiên của Hagintea đã được những người yêu trà, am hiểu về trà đánh giá cao bởi phẩm chất, chất lượng của những mẻ trà.',
  },
  {
    isShowDivider: false,
    title: 'NHỮNG NGƯỜI BẠN VÙNG CAO',
    image: 'https://hagintea.com/wp-content/uploads/2022/01/about-us-3-1.jpg',
    content:
      'Chúng tôi có những người bạn dân tộc Mông, Dao với những cây trà cổ được truyền từ đời này sang đời khác, đảm bảo được nguyên liệu sạch, an toàn. Đồng thời có những người nghệ nhân bản địa có nhiều năm kinh nghiệm trong việc sản xuất với những kỹ thuật làm trà đỉnh cao. Kế thừa kinh nghiệm quý báu của những thế hệ tiền bối đi trước, cùng với với công nghệ hiện đại trong thế hệ mới. Với tinh thần ấy, chúng tôi mong muốn mang lại những trải nghiệm đặc biệt và độc đáo qua những sản phẩm chất lượng.',
  },
  {
    isShowDivider: false,
    title: 'ĐIỀU CHÚNG TÔI LUÔN TỰ HÀO',
    image: 'https://hagintea.com/wp-content/uploads/2022/01/about-us-4.jpg',
    content:
      'Có một triết lý mà chúng tôi luôn luôn theo đuổi, đó là gìn giữ sản vật quốc gia, phát triển dựa trên nguyên bản, và giới thiệu những nét đặc trưng nhất mang văn hóa trà Việt đến với cộng đồng. Chúng tôi khai thác một cách hài hòa với thiên nhiên, một năm có 3 mùa trà Xuân Hè Thu, chúng tôi chỉ thu hoạch đúng 3 lần trong năm. Cùng với người dân bản địa giữ gìn những cây trà sống trong một môi trường phù hợp nhất để có thể tồn tại và phát triển như cách mà những thế hệ đi trước đã làm suốt hàng trăm năm và truyền cho thế hệ về sau.',
  },
];

const About = () => {
  return (
    <Box>
      {abouts.map((about, index) => (
        <AboutHeroContentSection
          key={`${about.title}-${index}`}
          title={about.title}
          content={about.content}
          image={about.image}
          isShowDivider={about.isShowDivider}
        />
      ))}
    </Box>
  );
};

export default About;
