import { Container, Divider, Text } from '@chakra-ui/react';
import React from 'react';
import PageWrapperNoneBackground from 'src/components/PageWrapperNoneBackground';
import TeaStoryHeroContentSection1 from './components/TeaStoryHeroContentSection1';
import TeaStoryHeroContentSection2 from './components/TeaStoryHeroContentSection2';

const TeaStory = () => {
  return (
    <PageWrapperNoneBackground className="TeaShop-tea-story">
      <Container maxWidth="container.lg">
        <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']} textAlign="center">
          CHUYỆN TRÀ
        </Text>
        <Divider
          height="2px"
          width="40px"
          margin={{ base: '24px auto 16px auto' }}
          backgroundColor="#000"
          border="unset"
        />
        <Text maxWidth={{ base: 700 }} margin={{ base: '24px auto' }} textAlign="center">
          Trên hành trình khám phá trà shan tuyết cổ thụ hà giang, Hagintea sẽ cố gắng trở
          thành nguồn tài nguyên và cảm hứng để bạn có thể tìm hiểu về nguồn gốc, lịch sử
          của những cây trà.
        </Text>
      </Container>
      <TeaStoryHeroContentSection1
        title="TRÀ VÀ NHỮNG CÂU CHUYỆN"
        content={
          <React.Fragment>
            <Text marginBottom={{ base: '20px' }}>
              Trà có một lịch sử rất lâu đời, câu chuyện của trà kéo dài qua các nền văn
              hóa, qua các lục địa và qua nhiều thế kỷ. Từ sự bắt đầu tại những ngôi làng
              xa xôi, cho đến ngày nay trà có mặt khắp mọi nơi, trở thành một phần không
              thể thiếu đối với cuộc sống tinh thần của mỗi gia đình.
            </Text>
            <Text marginBottom={{ base: '20px' }}>
              Uống trà đơn giản, nhưng cũng phúc tạp, pha trà cầu kỳ, nhưng cũng thật giản
              đơn, trà có thể xem trà là một thú vui tao nhã, hay có thể là một nghệ
              thuật, tất cả quyết định bởi người uống trà. Trà không chỉ là một thức uống,
              mà còn là sự khởi đầu của những câu chuyện, là sự kết nối, mang mọi người
              lại với nhau. Bên cạnh chén trà, ta có thể kể cho nhau nghe về nhiều câu
              chuyện về cuộc sống, hay dơn giản chỉ về trà.
            </Text>
          </React.Fragment>
        }
        image="https://hagintea.com/wp-content/uploads/2022/01/chuyen-tra-1.jpg"
      />

      <TeaStoryHeroContentSection2
        title="TRUYỀN THỐNG, VĂN HÓA VÀ LỊCH SỬ"
        isLeft={true}
        isShowDivider={true}
        image="https://hagintea.com/wp-content/uploads/2022/01/chuyen-tra-2.jpg"
        content={
          <React.Fragment>
            <Text margin={{ base: '24px 0' }}>
              Câu chuyện của trà là văn hóa của nhiều vùng miền, của những giá trị tinh
              thần mang lại. Con người từ Bắc tới Nam, từ Đông sang Tây, ở mỗi vùng miền,
              mỗi quốc gia đều có những cách thưởng thức trà khác nhau.
            </Text>
            <Text margin={{ base: '24px 0' }}>
              Trà truyền thống chủ yếu được làm bằng tay, trong mọi công đoạn từ hái – vò
              – xao. Ở những bản làng, trà chỉ làm để phục vụ cho việc gia đình sử dụng,
              và mời khách. Những vụ trà được làm xong thường được treo ở gác bếp để bảo
              quản, chứ không uống ngay. Nên trà truyền thống ngày xưa sẽ có ám mùi khói,
              một phần vì cách thức xao bằng chảo rang, củi lửa, một phần vì trong quá
              trình bảo quản ở trên gác bếp. Ngày nay, trà được hiện đại hoá, công nghiệp
              hoá nhiều, nhưng mà có những bí quyết truyền thống làm trà vẫn được gìn giữ,
              áp dụng và duy trì từ đời này qua đời khác, như một nền văn hoá cần thiết,
              truyền thống giữ cho văn hoá trà của trà trường tồn với những bản sắc riêng
              của từng khu vực, từng vùng miền. Uống một chén trà, không chỉ cảm nhận được
              hương vị, mà còn để hiểu thêm về một thức uống từ ngàn xưa.
            </Text>
          </React.Fragment>
        }
      />

      <TeaStoryHeroContentSection2
        title="CÂU CHUYỆN CỦA HAGINTEA"
        isLeft={false}
        isShowDivider={true}
        image="https://hagintea.com/wp-content/uploads/2022/01/chuyen-tra-3.jpg"
        content={
          <React.Fragment>
            <Text margin={{ base: '24px 0' }}>
              Sinh ra trong thời kỳ hiện đại, lớn lên trong sự phát triển không ngừng của
              xã hội. Nhưng những người trẻ chúng tôi lại nhìn về quá khứ để cảm nhận, để
              học hỏi, và mong muốn kết hợp để gìn giữ, phát triển một nét văn hóa lâu đời
              một cách đặc biệt nhất, nguyên bản nhất và trọn vẹn nhất. Và trà là một
              trong những cầu nối mà chúng tôi lựa chọn.
            </Text>
            <Text margin={{ base: '24px 0' }}>
              Chúng tôi quan niệm rằng, dù là cách làm trà hiện đại, hay là truyền thống,
              tất cả điều đó mục đích vẫn là tạo ra một tách trà ngon. Quá trình để yêu,
              để hiểu trà có thể trải qua nhiều bước, đầu tiên là uống trà cảm thấy ngon,
              thấy thích, rồi đi sâu tìm hiểu các loại trà, lịch sử văn hóa, nguồn gốc ra
              đời, rồi theo thời gian, trà tạo thành một thức uống nhiều ý nghĩa. Chúng
              tôi có sự tôn trọng những giá trị truyền thống, được kế thừa kinh nghiệm quý
              báu của những thế hệ tiền bối đi trước, cùng với với công nghệ hiện đại
              trong thế hệ mới. Với tinh thần ấy, chúng tôi mong muốn mang lại những trải
              nghiệm đặc biệt và độc đáo qua những sản phẩm chất lượng.
            </Text>
          </React.Fragment>
        }
      />

      <TeaStoryHeroContentSection2
        title="ĐIỀU CHÚNG TÔI MUỐN GỬI GẮM"
        isLeft={true}
        isShowDivider={true}
        image="https://hagintea.com/wp-content/uploads/2022/01/chuyen-tra-4.jpg"
        content={
          <React.Fragment>
            <Text margin={{ base: '24px 0' }}>
              Người uống trà, không chỉ dừng lại ở việc thích hương vị, cảm giác mà trà
              mang lại. Mà còn thích tìm hiểu về nguồn gốc của trà, lịch sử hình thành,
              quá trình phát triển của văn hóa trà, làm sao để tạo ra được những mẻ trà
              ngon, hay bí quyết để pha ra một ly trà với hương vị tuyệt nhất. Trà không
              chỉ có mỗi trà, mà còn những dụng cụ để pha, những nét văn hóa thưởng thức
              khắp nơi trên thế giới. Chính vì vậy, Hagintea mong muốn mục Chuyện Trà sẽ
              là nơi tổng hợp những kiến thức, nội dung, và những đánh giá khách quan mà
              chúng tôi tìm kiếm, sưu tầm được từ kho kiến thức trà trên khắp Việt Nam nói
              riêng, và thế giới nói chung. Để người uống trà, người thích trà có thể tiếp
              cận nguồn thông tin một cách chính xác, chân thực và đầy đủ nhất. Cũng là sự
              trả ơn những gì chúng tôi nhận được từ các thế hệ đi trước để lại.
            </Text>
          </React.Fragment>
        }
      />
    </PageWrapperNoneBackground>
  );
};

export default TeaStory;
