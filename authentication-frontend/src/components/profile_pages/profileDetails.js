import React, { useState } from 'react'
import { Buttons, Card, Column, Container, Image, InputField, Placeholder, Rows, Section, Title1, Title4 } from '../styled_components/styledComponents'


function profileDetails() {

    return (
        <Section
            display="flex"
            alignItems={true}
            background="#f4f5f7"
        >
            <Container
            >
                <Card
                    width="375"
                    height="812"
                    background="linier"
                >
                    <Container
                        position="absolute"
                        background="innerCurve"
                        display="flex"
                    >
                        <Image
                            src="https://res.cloudinary.com/emacon-production/image/upload/v1626694192/Victor%20Githui%20Portfolio/victor_githui_white_background_wjx2oa.png"
                            alt="Victor Githui"
                            width="110"
                            height="150"
                            margin="2-0-2-0"
                        />
                    </Container>
                    
                    <Container
                        background="#f4f5f7"
                        height="100"
                        borderRadius="25-0-25-0"
                        padding="1-0-0-0"
                    >
                        <Container display="flex">
                            <Title4>Hello Victor Githui!</Title4>
                        </Container>
                        <Container>

                            {/* Profile Picture */}
                            <Container display="flex">
                                <Image
                                    src="https://res.cloudinary.com/emacon-production/image/upload/v1627045050/Victor%20Githui%20Portfolio/DSC_4223_oypfrm.jpg"
                                    alt="Profile Image"
                                    width="80"
                                    height="80"
                                    borderRadius={true}
                                    margin="1-0-0-0"
                                />
                            </Container>

                            {/* Profile Details */}
                            <Container>
                                <Container display="flex" justifyContent="start" margin="1-0-0-0">
                                    <Placeholder>Name :</Placeholder>  
                                    <Placeholder className="ml-5">Victor Githui Maina</Placeholder>  
                                </Container>
                                <Container display="flex" justifyContent="start" margin="1-0-0-0">
                                    <Placeholder>Email :</Placeholder>  
                                    <Placeholder className="ml-5">victorgithuim@gmail.com</Placeholder>  
                                </Container>
                                <Container display="flex" justifyContent="start" margin="1-0-0-0">
                                    <Placeholder>Phone Number :</Placeholder>  
                                    <Placeholder className="ml-5">+254 701 230892</Placeholder>  
                                </Container>
                                <Container display="flex" justifyContent="start" margin="1-0-0-0">
                                    <Placeholder>Gender :</Placeholder>  
                                    <Placeholder className="ml-5">Male</Placeholder>  
                                </Container>
                                <Container display="flex" justifyContent="start" margin="1-0-0-0">
                                    <Placeholder>Occupation :</Placeholder>  
                                    <Placeholder className="ml-5">Self Employed</Placeholder>  
                                </Container>
                                <Container display="flex" justifyContent="start" margin="1-0-0-0">
                                    <Placeholder>Address :</Placeholder>  
                                    <Placeholder className="ml-5">Nairobi, Kenya</Placeholder>  
                                </Container>
                            </Container>

                            {/* Update Btn */}
                            <Container>
                                <Buttons margin="1-0-0-0">Update Profile</Buttons>
                            </Container>
                        </Container>
                    </Container>
                </Card>
                
            </Container>
        </Section>
    )
}

export default profileDetails
