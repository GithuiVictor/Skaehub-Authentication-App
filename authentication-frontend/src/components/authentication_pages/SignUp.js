import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Buttons, Card, Column, Container, Image, InputField, Placeholder, Rows, Section, Title1, Title4 } from '../styled_components/styledComponents'
import { Checkbox, FormControl, FormControlLabel, IconButton, Input, InputLabel, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            color: "black",
            borderColor: "black !important"
        },
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'black',
        },
        '&:hover .MuiInput-underline:before': {
            borderBottomColor: 'black',
        },
        '& .MuiInput-underline:hover': {
            borderBottomColor: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#5e72e4',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#5e72e4',
            },
        },
    },
    textField: {
        width: '100%',
    },
}));


function SignUp() {
    const classes = useStyles();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [acceptPolicy, setConfirmPolicy] = useState();

    const handlePolicy = () => {
        setConfirmPolicy(!acceptPolicy)
    }

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
                        <Container>
                            <Container margin="1-0-0-0">
                                <Title1>Join Us</Title1>
                                <Title4>Create an account to continue!</Title4>
                            </Container>
                            
                            {/* Login Form */}
                            <Container margin="1-0-0-0">
                                <form>
                                    <InputField
                                        className = {classes.root}
                                        fullWidth
                                        id = "name"
                                        label = "Name"
                                        value = {name}
                                        onChange = {e => setName(e.target.value)}
                                    />
                                   <InputField
                                        className = {classes.root}
                                        fullWidth
                                        id = "email"
                                        label = "Email"
                                        value = {email}
                                        onChange = {e => setEmail(e.target.value)}
                                    />
                                    <InputField
                                        className = {classes.root}
                                        fullWidth
                                        id = "password"
                                        label = "Password"
                                        type = "password"
                                        value = {email}
                                        onChange = {e => setEmail(e.target.value)}
                                    />
                                    <InputField
                                        className = {classes.root}
                                        fullWidth
                                        id = "confirmPassword"
                                        label = "Confirm Password"
                                        value = {confirmPassword}
                                        onChange = {e => setConfirmPassword(e.target.value)}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={acceptPolicy}
                                                onChange={handlePolicy}
                                                name="policy"
                                                color="primary"
                                            />
                                        }
                                        label="I agree with the privacy policy"
                                        className="mt-3"
                                    />
                                </form>
                            </Container>

                            {/* sign Un Btn */}
                            <Container display="flex">
                                <Buttons>Sign Up</Buttons>
                            </Container>

                            {/* Create Account Link */}
                            <Container display="flex" margin="1-0-0-0">
                                <Placeholder>Already have an account? Sign In</Placeholder>
                            </Container>
                        </Container>
                    </Container>
                </Card>
                
            </Container>
        </Section>
    )
}

export default SignUp
