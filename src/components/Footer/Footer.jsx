import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import './style.css'
import Fade from 'react-reveal/Fade'

const Footer = ()=> {

    return(
        <Container>
            <div className="wrap">
                <Fade left delay={400}>
                    <Typography className="title" variant="h6">
                        NindyOkstore
                    </Typography>
                    <Typography className="info" variant="h6">
                        Social Media
                    </Typography>
                </Fade>
            </div>
        </Container>
    )

}

export default Footer