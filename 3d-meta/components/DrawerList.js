import { motion, AnimatePresence } from 'framer-motion'
import NextLink  from 'next/link'
import { Text, Flex, } from '@chakra-ui/react'



const DrawerListItem = ({ href, children, id, delay=0, onClose }) => {


    const MotionText = motion(Text)

        return (

            <AnimatePresence initial={false} >

                <NextLink href={href} passHref>
                    <MotionText
                    key={id}
                    initial={{y: 10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: -10}}
                    transition={{ duration: 0.35, delay}}
                    onClick={onClose}
                    style={{ textDecoration: 'none'}}
                    >
                        {children}
                    </MotionText>
                </NextLink>

            </AnimatePresence>

        )
}



const DrawerList = ({ onClose }) => {


    return (

        <Flex
            flexDirection='column'
            zIndex='999'
            fontFamily='heading'
            fontWeight='bold'
            color='mBlack.900'
        >
            <DrawerListItem
                href='/'
                id='home'
                onClose={onClose}
            >
                About
            </DrawerListItem>
            <DrawerListItem
                delay={0.05}
                href='/'
                id='start'
                onClose={onClose}
            >
                Start a Project
            </DrawerListItem>

        </Flex>

    )
}


export default DrawerList



