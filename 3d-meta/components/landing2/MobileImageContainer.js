import Image from 'next/image'
import {
    Flex,
} from '@chakra-ui/react'

const MobileImageContainer = ({ src, alt }) => {
    return (
        <Flex
            display='block'
            borderRadius='lg'
            overflow='hidden'
            width={{ base: '111px', md: '215px' }}
            height={{ base: '220px', md: '438px' }}
            justify='center'
            align='center'
        >
            <Image
                layout='responsive'
                width='230'
                height='453'
                src={src}
                alt={alt}
            />
        </Flex>
    )
}

export default MobileImageContainer 