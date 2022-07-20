import { 
    Flex
} from '@chakra-ui/react'
import TextBlock from './TextBlock'
import LandingTextBlock from '../LandingTextBlock'
import Title from './ProductsTitle'
import Container from './Container'
import ImageContainer from './ImageContainer'
import MobileImageContainer from './MobileImageContainer'


// grab images 
const meta = '/images/meta-screenshot.jpg'
const webApp = '/images/webApp-screenshot.png'
const mobileApp = '/images/mobileApp-screenshot.png'

const LandingTwo = () => {
    return (
        <Flex
            flexDir='column'
            py={{ base: '4rem', md: '8rem' }}
            px={{ base: '1rem', md: '8rem' }}
            bg='bg.500'
            gap={{ base: '5rem', md: '18rem'}}
        >
            <Flex
                flexDir='column'
                gap={{ base: '9rem', md: '18rem' }}
                maxW='container.xl'
                align='left'
            >
                <LandingTextBlock>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</LandingTextBlock>
                <Title>Our Products</Title>
            </Flex>

            <Container>
                <ImageContainer src={meta} alt='Screenshot of Website made by METATECH Digital' />
                <TextBlock heading='Websites' body='All our websites are incredibly fast, visually stunning, and memorable.' />
            </Container>

            <Container>
                <ImageContainer src={webApp} alt='Screenshot of Web Application made by METATECH Digital' />
                <TextBlock heading='Web Applications' body='Our applications are not only aesthetically pleasing, but purpose-built tools to help you make more money.' />
            </Container>
            
            <Container>
                <MobileImageContainer src={mobileApp} alt='Screenshot of Mobile Application made by METATECH Digital' />
                <TextBlock heading='Mobile Applications' body='Mobile applications with design your users will love using.' />
            </Container>
        </Flex>
    )
}

export default LandingTwo