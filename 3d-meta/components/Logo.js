import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { gsap } from 'gsap'



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

    const logoRef = useRef()
    

    useEffect(() => {
        const tl1 = new gsap.timeline()

        tl1.from(logoRef.current, {
            y: -100,
            duration: 0.25,
            delay: 1.5
        })
    }, [])

    return (
        <Link href='/'>
            <a>
                <LogoBox ref={logoRef}>
                    <Image src={navImg} layout='responsive' width={212} height={60} alt='logo' loading='eager' priority />
                </LogoBox>
            </a>
        </Link>
    ) 
}

export default Logo