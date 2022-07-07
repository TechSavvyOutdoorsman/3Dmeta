import {
    Heading,
    Text,
    Flex    
} from '@chakra-ui/react'
import styled from '@emotion/styled'

const Dash = styled.span`
    width: 25px;
    height: 3px;
    background: #AF0000;
    border-radius: 30px;
    margin-left: 2.5px;
`

const Step = ({ number, heading, text }) => {
    return (
        <Flex flexDir='column' gap={6} maxW='350px'>
            <Flex gap={4} align='center' justify='start'>
                <Flex flexDir='column' justify='start' align='left'>
                    <Heading as='h2' fontSize='xxx-large' color='mBlack.900'>{number}</Heading>
                    <Dash />
                </Flex>
                <Heading pt={3.5} as='h1' fontSize='x-large' color='mBlack.900' textTransform='uppercase'>{heading}</Heading>
            </Flex>
            <Text as='p' fontSize='md' color='mBlack.800'>{text}</Text>
        </Flex>
    )
}

export default Step 