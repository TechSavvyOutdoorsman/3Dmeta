import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'



const LogoBox = styled.span`
    display: flex;
    align: center;
    width: 54px;
    height: 45px;
    transform: scale(1);
    margin-left: .5rem;

@media (min-width: 768px) { 
    padding-top: 3px;
} 
`

const Logo = () => {

    const navImg = '/images/orb-1.png'

    return (
        <Link href='/'>
            <a>
                <LogoBox>
                    <Image src={navImg} layout='fill' alt='logo' loading='eager' priority />
                </LogoBox>
            </a>
        </Link>
    ) 
}

export default Logo