import { TextField } from '@material-ui/core';
import styled, { css }  from 'styled-components/macro';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



export const Section = styled.div`
    position: absolute;
    background: ${({background}) => (
        background === "#f4f5f7" ? "#f4f5f7" : "white" &&
        background === "linier" ? "linear-gradient(116.8deg, #F43C58 5.64%, #F4593C 75.69%)" : "white"
    )};
    height: 100%;
    width: 100%;
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "start" ? "flex-start" : "center" &&
        justifyContent === "end" ? "flex-end" : "center"
    )};
    align-Items: ${({alignItems}) => (
        alignItems ? "center" : ""
    )};
`;


export const Container = styled.div`
    background: ${({background}) => (
        background === "#f4f5f7" ? "#f4f5f7" : "transparent" &&
        background === "linier" ? "linear-gradient(116.8deg, #F43C58 5.64%, #F4593C 75.69%)" : "transparent"
    )};
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "start" ? "flex-start" : "center" &&
        justifyContent === "end" ? "flex-end" : "center"
    )};
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem !important"
    )};
    height: ${({height}) => (
        height === "100" ? "500px" : ""
    )};
    border-radius: ${({borderRadius}) => (
        borderRadius === "25-0-25-0" ? "50px 50px 0px 0px" : "none"
    )};
    padding: ${({padding}) => (
        padding === "1-0-0-0" ? "2rem 2rem 0rem 2rem !important" : "0rem 0rem 0rem 0rem"
    )};
`;


export const Card = styled.div`
    background: white;
    width: ${({width}) => (
        width === "375" ? "385px" : "100%"
    )};
    height: ${({height}) => (
        height === "812" ? "712px" : "100%"
    )};
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background: ${({background}) => (
        background === "#f4f5f7" ? "#f4f5f7" : "transparent" &&
        background === "linier" ? "linear-gradient(116.8deg, #F43C58 5.64%, #F4593C 75.69%)" : "transparent"
    )};
`;


export const Title1 = styled.h1``;


export const Title4 = styled.h5``;


export const Placeholder = styled.p`
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem"
    )};
`;


export const Image = styled.img`
    width: ${({width}) => (
        width === "110" ? "110px" : "100%" &&
        width === "80" ? "100px" : "100%"
    )};
    height: ${({height}) => (
        height === "150" ? "150px" : "100%" &&
        height === "80" ? "100px" : "100%"
    )};
    object-fit: cover;
    margin: ${({margin}) => (
        margin === "2-0-2-0" ? "2rem 0rem 2rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem !important" : "0rem 0rem 0rem 0rem"
    )};
    border-radius: ${({borderRadius}) => (
        borderRadius ? "50px" : "none"
    )};
`;


export const InputField = styled(TextField)``;


export const Rows = styled(Row)``;


export const Column = styled(Col)`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "start" ? "flex-start !important" : "center" &&
        justifyContent === "end" ? "flex-end" : "center"
    )};
`;


export const Buttons = styled(Button)`
    width: 100%;
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem"
    )};
`;

// export const Buttons = styled.