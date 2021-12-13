import React from 'react'
import styled from 'styled-components'
import { AnimatedShapes } from './AnimatedShapes'

// import Woman from "../img/ "
const Container = styled.div`
    height:calc(100vh - 50px);
    display:flex;
    padding:20px;
`

const Left = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`

const Title = styled.h1`
    width:60%;
    font-size:60px;
`

const Desc = styled.p`
    width:60%;
    font-size:20px; 
    margin-top:20px;
`

const Info = styled.div`
    width:60%;
    display:flex;
    align-items:center;
    justify-content:space-between; 
    margin-top:50px;
`

const Button = styled.button`
    padding: 15px;
    background-color:darkblue;
    color:white;
    font-weight:bold ;
    border-radius:10px;
    cursor:pointer;
    border:none;
    letter-spacing:2px;
`

const Contact = styled.div`
    display:flex;
    flex-direction:column;
`

const Phone = styled.span`
    color:#f0667d;
    font-weight:bold;
`

const ContactText = styled.span`
    color:gray;
    margin-top:5px;
`

const Right = styled.div`
    width:40%;
`

const Image = styled.img`
    width:100%;
    
`

export const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventures in creative Age  </Title>
                <Desc>We believe that designing products and services in close partnership
                    with our clients is the only way to have a real impact on their
                    business.</Desc>
                <Info>
                    <Button>START A PROJECT</Button>
                    <Contact>
                        <Phone>Call Us (91) 12345 67890</Phone>
                        <ContactText> For any question or concerns</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                {/* <Image src ="https://s3.fintastico.com/media/images/e-transfer-payday-loans-canada-247-screenshot_6626.jpg"/>  */}
                <Image src="https://global-uploads.webflow.com/60ad50e031bca6a32e7426f8/60ad50e031bca6de70742938_Web-Isolated-Woman.png" />
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}
