import {
    Flex,
    Heading
} from '@chakra-ui/react'

const MedHeading = ({ subHead, subHeadColor, heading, headingColor }) => {

    return (
        <Flex flexDir='column' align='center' textAlign='center'>
            <Heading as='h3' fontSize='md' color={subHeadColor}>{subHead}</Heading>
            <Heading lineHeight='7' as='h2' fontSize='x-large' color={headingColor}>{heading}</Heading>
        </Flex>
    )
}

export default MedHeading 