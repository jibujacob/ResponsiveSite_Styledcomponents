import React from 'react'
import styled from 'styled-components'
import { PriceCard } from './PriceCard'

const Container = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Price = () => {
    return (
        <Container>
            <PriceCard price="700" type="Basic"/>
            <PriceCard price="1400" type="Premium"/>
            <PriceCard price="2100" type="Advanced"/>
        </Container>
    )
}
