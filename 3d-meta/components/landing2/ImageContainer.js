import Image from 'next/image'
import {
    Flex
} from '@chakra-ui/react'

const ImageContainer = ({ src, alt }) => {
    return (
        <Flex borderRadius='lg' overflow='hidden'>
            <Image width='706' height='438'  src={src} alt={alt} />
        </Flex>
    )
}

export default ImageContainer 