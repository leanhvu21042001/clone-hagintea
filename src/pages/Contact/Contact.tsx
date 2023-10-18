import { Box, Button, Flex, FormLabel, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import ContactFacebook from 'src/assets/icon/ContactFacebook';
import ContactInstagram from 'src/assets/icon/ContactInstagram';
import ContactYoutube from 'src/assets/icon/ContactYoutube';
import PageWrapperNoneBackground from 'src/components/PageWrapperNoneBackground';
import ContactIconButton from './components/ContactIconButton';

const Contact = () => {
  return (
    <PageWrapperNoneBackground className="TeaShop-contact">
      <Flex
        flexDirection={{ xl: 'row', lg: 'row', md: 'row', sm: 'column', base: 'column' }}
      >
        <Box flex={1}>
          <figure className="wp-block-media-text__media">
            <img
              src="https://hagintea.com/wp-content/uploads/2022/01/1-1024x1024.jpg"
              alt="Trà shan tuyết cổ thụ Hà Giang Hagintea"
              title="Liên Hệ 1"
              sizes="(max-width: 1024px) 100vw, 1024px"
              srcSet="https://hagintea.com/wp-content/uploads/2022/01/1-1024x1024.jpg 1024w, https://hagintea.com/wp-content/uploads/2022/01/1-300x300.jpg 300w, https://hagintea.com/wp-content/uploads/2022/01/1-150x150.jpg 150w, https://hagintea.com/wp-content/uploads/2022/01/1-768x768.jpg 768w, https://hagintea.com/wp-content/uploads/2022/01/1-800x800.jpg 800w, https://hagintea.com/wp-content/uploads/2022/01/1-560x560.jpg 560w, https://hagintea.com/wp-content/uploads/2022/01/1-250x250.jpg 250w, https://hagintea.com/wp-content/uploads/2022/01/1-120x120.jpg 120w, https://hagintea.com/wp-content/uploads/2022/01/1-600x600.jpg 600w, https://hagintea.com/wp-content/uploads/2022/01/1-100x100.jpg 100w, https://hagintea.com/wp-content/uploads/2022/01/1.jpg 1200w"
            />
            <noscript>
              <img
                src="https://hagintea.com/wp-content/uploads/2022/01/1-1024x1024.jpg"
                alt="Trà shan tuyết cổ thụ Hà Giang Hagintea"
                srcSet="https://hagintea.com/wp-content/uploads/2022/01/1-1024x1024.jpg 1024w, https://hagintea.com/wp-content/uploads/2022/01/1-300x300.jpg 300w, https://hagintea.com/wp-content/uploads/2022/01/1-150x150.jpg 150w, https://hagintea.com/wp-content/uploads/2022/01/1-768x768.jpg 768w, https://hagintea.com/wp-content/uploads/2022/01/1-800x800.jpg 800w, https://hagintea.com/wp-content/uploads/2022/01/1-560x560.jpg 560w, https://hagintea.com/wp-content/uploads/2022/01/1-250x250.jpg 250w, https://hagintea.com/wp-content/uploads/2022/01/1-120x120.jpg 120w, https://hagintea.com/wp-content/uploads/2022/01/1-600x600.jpg 600w, https://hagintea.com/wp-content/uploads/2022/01/1-100x100.jpg 100w, https://hagintea.com/wp-content/uploads/2022/01/1.jpg 1200w"
                sizes="(max-width: 1024px) 100vw, 1024px"
                title="Liên Hệ 1"
              />
            </noscript>
          </figure>
        </Box>

        <Box flex={1}>
          <Box padding={{ xl: '48px', lg: '48px', md: '24px', sm: '12px', base: '6px' }}>
            <Text fontSize={['sm', 'md', 'lg', 'xl', '2xl', '3xl']} marginBottom={8}>
              XIN CHÀO QUÝ KHÁCH
            </Text>
            <Text marginBottom={8}>
              Nếu cần bất kỳ sự giúp đỡ nào, đừng ngần ngại liên hệ chúng tôi.
            </Text>

            <Box marginBottom={8}>
              <Text fontWeight="bold">Công ty TNHH Hagintea</Text>
              <Text>Giấy CNĐKDN: 5100477892 – Ngày cấp: 09/06/2020</Text>
              <Text>
                Trụ sở chính: Tầng 2, Số nhà 15C, Tổ 18, đường Nguyễn Trãi, Phường Nguyễn
                Trãi, Thành Phố Hà Giang, Hà Giang
              </Text>
            </Box>

            <Box>
              <Text fontWeight="bold">Hỗ trợ khách hàng</Text>
              <Text>care@hagintea.com </Text>
              <Text>Hotline: 0917 167 070</Text>
            </Box>

            <Text marginBottom={8}>
              Quý khách có thể liên lạc cho chúng tôi qua hệ thống mạng xã hội dưới đây:
            </Text>
            <Flex gap="24px" flexDirection="row">
              <ContactIconButton bgColor="#1778f2" ariaLabel="facebook">
                <ContactFacebook />
              </ContactIconButton>
              <ContactIconButton bgColor="#f00075" ariaLabel="instagram">
                <ContactInstagram />
              </ContactIconButton>
              <ContactIconButton bgColor="#ff0000" ariaLabel="youtube">
                <ContactYoutube />
              </ContactIconButton>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Flex
        flexDirection="column"
        maxWidth="600px"
        margin="auto"
        marginTop="50px"
        marginBottom="24px"
        padding={{ xl: '48px', lg: '48px', md: '24px', sm: '12px', base: '6px' }}
      >
        <Text textAlign="center" fontSize={['xl', '2xl', '3xl']} marginBottom={8}>
          Để lại lời nhắn
        </Text>
        <form>
          <FormLabel>
            <Text>TÊN CỦA BẠN</Text>
            <Input
              size="lg"
              fontSize={['sm', 'md', 'lg']}
              padding={{ base: '10px 17px' }}
              marginBottom="24px"
            />
          </FormLabel>
          <FormLabel>
            <Text>EMAIL</Text>
            <Input
              size="lg"
              fontSize={['sm', 'md', 'lg']}
              padding={{ base: '10px 17px' }}
              marginBottom="24px"
            />
          </FormLabel>
          <FormLabel>
            <Text>SỐ ĐIỆN THOẠI</Text>
            <Input
              size="lg"
              fontSize={['sm', 'md', 'lg']}
              padding={{ base: '10px 17px' }}
              marginBottom="24px"
            />
          </FormLabel>
          <FormLabel>
            <Text>LỜI NHẮN</Text>
            <Textarea
              size="lg"
              fontSize={['sm', 'md', 'lg']}
              padding={{ base: '10px 17px' }}
              marginBottom="24px"
              rows={10}
            />
          </FormLabel>

          <Button variant="TeaFilledButton">GỬI</Button>
        </form>
      </Flex>

      <Box
        maxWidth="600px"
        margin="auto"
        padding={{ xl: '48px', lg: '48px', md: '24px', sm: '12px', base: '6px' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.9269460298447!2d104.97652001368259!3d22.80517068506361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cc796656002e81%3A0xdbf316faae4864d2!2sHagintea!5e0!3m2!1svi!2s!4v1653656712297!5m2!1svi!2s"
          loading="lazy"
          data-rocket-lazyload="fitvidscompatible"
          data-lazy-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.9269460298447!2d104.97652001368259!3d22.80517068506361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cc796656002e81%3A0xdbf316faae4864d2!2sHagintea!5e0!3m2!1svi!2s!4v1653656712297!5m2!1svi!2s"
          data-ll-status="loaded"
          style={{
            display: 'inline-block',
            width: '100%',
            height: '450px',
          }}
        ></iframe>
      </Box>
    </PageWrapperNoneBackground>
  );
};

export default Contact;
