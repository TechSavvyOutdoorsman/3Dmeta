import { 
    Flex,
} from '@chakra-ui/react'
import TextBlock from './TextBlock'
import LandingTextBlock from './LandingTextBlock'
import Title from './ProductsTitle'
import Container from './Container'
import Scene from './Scene'
import { PerspectiveCamera, PresentationControls, Stage } from '@react-three/drei'
import { Box as FlexBox } from '@react-three/flex'
import Website from './models/Website'
import RedShapes from './models/RedShapes'


const LandingTwo = () => {
    return (
        <Flex
            flexDir='column'
            align='center'
            py={{ base: '4rem', md: '8rem' }}
            px={{ base: '1rem', md: '0' }}
            bg='bg.500'
            gap={{ base: '10rem', md: '18rem'}}
        >
            <Flex
                maxW='container.lg'
                flexDir='column'
                gap='8rem'
                align='left'
            >
                <LandingTextBlock>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</LandingTextBlock>
                <Title>Our Products</Title>
            </Flex>

            <Flex
                maxW='container.lg'
                flexDir='column'
                w='100%'
                h='100%'
            >

            <Container>
                    <Scene>
                            <PerspectiveCamera makeDefault fov={45} near={1} far={6500} >
                            <spotLight color='#999999' position={[0, 0, 50]} angle={90} penumbra={1} intensity={3} />
                            <PresentationControls
                                global
                                config={{ mass: 10, tension: 50 }}
                                snap={{ mass: 10, tension: 50 }}
                                polar={[-Math.PI / 36, Math.PI / 36]}
                                azimuth={[-Math.PI / 30, Math.PI / 30]}
                            >

                                    <RedShapes position={[0, -800, -4200]} />
                                    <Website rotation={[0, -Math.PI / 2, 0]}  position={[-50, -350, -2500 ]} />
                            </PresentationControls>
                            </PerspectiveCamera>
                    </Scene>
                <TextBlock heading='Websites' body='All our websites are incredibly fast, visually stunning, and memorable.' />
            </Container>

            <Container>
                <Scene>

                </Scene>
                <TextBlock heading='Web Applications' body='Our applications are not only aesthetically pleasing, but purpose-built tools to help you make more money.' />
            </Container>
            </Flex>
        </Flex>
    )
}


export default LandingTwo
