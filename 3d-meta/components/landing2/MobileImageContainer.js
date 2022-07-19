import Image from 'next/image'
import {
    Flex,
    Box,
} from '@chakra-ui/react'

const MobileImageContainer = ({ src, alt }) => {
    return (
        <Flex borderRadius='lg' overflow='hidden' justify='center' align='center'>
                <Image width='230' height='453'  src={src} alt={alt} />
        </Flex>
    )
}

export default MobileImageContainer 