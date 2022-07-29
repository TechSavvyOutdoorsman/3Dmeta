import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'



const LogoBox = styled.span`
    display: block;
    width: 130px;
    margin-left: .5rem;


@media (min-width: 768px) { 
    padding-top: 3px;
    width: 210px;
} 
`

const Logo = () => {

    const navImg = '/images/side.svg'

    return (
        <Link href='/'>
            <a>
                <LogoBox>
                    <Image src={navImg} layout='responsive' width={212} height={60} alt='logo' loading='eager' priority />
                </LogoBox>
            </a>
        </Link>
    ) 
}

export default Logo