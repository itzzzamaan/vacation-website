import React from 'react'
import styled from "styled-components"
import Section from "./Section"


function Home() {
    return (
        <Container>
          <Section
                title="Beach Party"
                description="We Live Only Once - Pack Your Bags - Enjoy Every Moment"
                backgroundImg="beach-party.jpg"
                leftBtnText="Book Slot"
                rightBtnText="Learn More"
            />
            <Section
                title="Holiday Fun"
                description="Don't Waste Your Holidays At Home Make A Plan For Something Adventerus"
                backgroundImg="map.jpg"
                leftBtnText="Book Slot"
                rightBtnText="Learn More"
            />
            <Section 
                title="Safe Travel"
                description="Book Your Slots And Travel With Best Tourist Guide's"
                backgroundImg="travell.png"
                leftBtnText="Book Slot"
                rightBtnText="Learn More"
            />
            <Section
                title="Adventures"
                description="The Adventures We Do Are Surfing, UnderWater Diving And Many More"
                backgroundImg="games.jpg"
                leftBtnText="Book Slot"
                rightBtnText="Learn More"
            />
            <Section
                title="BonFire"
                description="Special Events And Games In Night"
                backgroundImg="buss.jpg"
                leftBtnText="Book Slot"
                rightBtnText="Learn more"
            />
            <Section
                title="Memories"
                description="Create Moments And Make Memories With Us"
                backgroundImg="memories.jpg"
                leftBtnText="Book Slot"
                rightBtnText="Learn More"
            />
            <Section
                title="Beverage"
                description="Delicious Foods And Drinks"
                backgroundImg="collagee.jpg"
                leftBtnText="Book Slot"
                rightBtnText="Learn More"
            />
            <Section
                title="Celebrations"
                description="Plan a Destination Wedding For Your Love"
                backgroundImg="destination-party.jpg"
                leftBtnText="Book Slot"
                rightBtnText="Learn More"
            />
            <Section
                title="For Medicinal Emergency"
                description="We Care About Your Health Too"
                backgroundImg="health.jpg"
                leftBtnText="Book Slot"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`
