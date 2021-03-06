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


function SignIn() {
    const classes = useStyles();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState();
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMe = () => {
        setRememberMe(!rememberMe)
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
                                <Title1>Welcome Back,</Title1>
                                <Title4>Sign in to continue!</Title4>
                            </Container>
                            
                            {/* Login Form */}
                            <Container margin="1-0-0-0">
                                <form>
                                   <InputField
                                        className = {classes.root}
                                        fullWidth
                                        id = "email"
                                        label = "Email"
                                        value = {email}
                                        onChange = {e => setEmail(e.target.value)}
                                    />
                                    <FormControl className={`${clsx(classes.root, classes.textField)} mt-3`}>
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            fullWidth
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange = {(e) => setPassword(e.target.value)}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(true)}
                                                    onMouseDown={() => setShowPassword(false)}
                                                    >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl> 
                                </form>
                                
                            </Container>

                            <Container>
                                <Rows>
                                    <Column md={6}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={rememberMe}
                                                        onChange={handleRememberMe}
                                                        name="rememberMe"
                                                        color="primary"
                                                    />
                                                }
                                                label="Remember Me"
                                                className="mt-3"
                                            />
                                    </Column>
                                    <Column md={5} display="flex" justifyContent="end">
                                            <Placeholder>Forgot Password?</Placeholder>
                                    </Column>
                                </Rows>
                            </Container>

                            {/* sign In Btn */}
                            <Container display="flex">
                                <Buttons>Sign In</Buttons>
                            </Container>

                            {/* Create Account Link */}
                            <Container display="flex" margin="1-0-0-0">
                                <Placeholder>Don't have an account? Create One</Placeholder>
                            </Container>
                        </Container>
                    </Container>
                </Card>
                
            </Container>
        </Section>
    )
}

export default SignIn
