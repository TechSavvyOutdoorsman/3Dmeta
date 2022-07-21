import {
    Box
} from '@chakra-ui/react'
import Image from 'next/image'

const Decor = ({ src, alt, width, height }) => {
    return (
        <Box
            display='block'
            position='relative'
            overflow='hidden'
            
        >
            <Image width={width} height={height} layout='responsive' src={src} alt={alt} />
        </Box>
    )
}

export default Decor 