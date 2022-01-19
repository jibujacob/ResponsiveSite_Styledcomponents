import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:50px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Left = styled.div`
    width:60%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const Logo = styled.h1`
    font-weight:bold;
    text-decoration:underline crimson;

`

const Menu = styled.ul`
    display:flex;
    list-style:none;

    @media only screen and (max-width:480px){
        display:none;
    }
`

const MenuItem = styled.li`
    margin-right:30px;
    font-size:20px;
    font-weight:bold;
    color:gray;
    cursor:pointer;
`

const Button = styled.button`
    border:2px solid white;
    padding:10px 15px;
    background-color:crimson;
    color:white;
    font-weight:bold; 
    border-radius:10px;
    cursor:pointer;
`
const Link = styled.a`
    text-decoration:none;
    color:inherit;
`
export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Agency</Logo>
                    <Menu>
                        <Link href="#home"><MenuItem>Home</MenuItem></Link> 
                        <Link href="#features"><MenuItem>Features</MenuItem></Link> 
                        <Link href="#services"><MenuItem>Services</MenuItem></Link>    
                        <Link href="#pricing"><MenuItem>Pricing</MenuItem></Link>    
                        <Link href="#contact"><MenuItem>Contact</MenuItem></Link>       
                    </Menu>
                </Left> 
                <Button>JOIN NOW</Button>
            </Wrapper>   
        </Container>
    )
}
