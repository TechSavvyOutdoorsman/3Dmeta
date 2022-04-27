import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'


const LogoBox = styled.span`
    display: inline-flex;
    align-items: center;
    width: 100%;

@media (min-width: 768px) { 
    transform: scale(2);
    margin-left: 5rem;
    padding-top: 3px;
    height: 50%;
} 
`

const Logo = () => {
    const codeImg = '/orb+sideTXT.svg'

    return (
        <Link href='/'>
            <a>
                <LogoBox>
                    <Image src={codeImg} width='100%' height='30%' alt='logo' />
                </LogoBox>
            </a>
        </Link>
    ) 
}

export default Logo