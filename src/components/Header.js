import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';


function Header() {
     const [burgerStatus, setBurgerStatus] = useState(false);
  
    return(
        <Container>
         <p> 🅵🆄🅻🅻 🅵🆄🅽 🆅🅰🅲🅰🆃🅸🅾🅽</p>
                    <Menu>                  
                    <a href="#">Enquiry</a> 
                    <a href="#">Partie's</a>
                    <a href="#">Event's</a> 
                    <a href="#">Celebration's</a>
                    <a href="#">Holiday's</a>
                </Menu>
                <RightMenu>
                    <a href="#">View Slots</a>
                    <a href="#">Register</a>
                    <CustomMenu onClick={()=> setBurgerStatus(true)}
                    />
                </RightMenu>
                <BurgerNav show={burgerStatus}
                >
                    <CancelWrapper> 
                    <CustomCancel onClick={()=> setBurgerStatus(false)}
                    />
                    </CancelWrapper>

                    <li> <a href="#">Our Services</a> </li>
                    <li> <a href="#">Holiday Package's</a> </li>
                    <li> <a href="#">Discount's</a> </li>
                    <li> <a href="#">Special Offer's</a> </li>
                    <li> <a href="#">Our Tourist Guide's</a> </li>
                    <li> <a href="#">RoadMap</a> </li>
                    <li> <a href="#">About Us</a> </li>
                    <li> <a href="#">Contact info</a> </li>

                </BurgerNav>
           
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: 20px;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    
    

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    cursor: pointer;
    text-decoration: none;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }
    @media (max-width: 768px) {
        display: none;
    }

`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right:  20px;
        
    }

`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: #C0C0C0;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
text-decoration: none;
opacity: 0.85;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a{
        font-weight: 600;


    }
}

`
const CustomCancel = styled(CancelIcon)`
    cursor: pointer;
    

`
const CancelWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`