import React from 'react'
import {Container, Grid, Image} from "semantic-ui-react";
import './style.css'
import Fade from 'react-reveal/Fade';

const Coverage = () => (
    <div className="gold-bg pad-20" id="coverage">
        <Container>
            <Grid verticalAlign="middle" columns={1} centered>
                <Grid.Row>
                    <Image src="../assets/cali-flag.svg" size='medium' centered />
                </Grid.Row>
                <Grid.Row>
                    <h1 className="comforta-font big-font">We move and clean in the whole state of California!</h1>
                </Grid.Row>
            </Grid>
        </Container>
    </div>
)

export default Coverage