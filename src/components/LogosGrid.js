import React from 'react'
import {Grid, Image, Divider, Container} from "semantic-ui-react";

const style = {
    padding: '20px'
}
const LogosGrid = () => (
    <div style={style} id="how-works">
        <Container>
            <Grid verticalAlign="middle" columns={1} centered>
                <Grid.Row>
                    <Grid.Column>
                        <Image src="../assets/call-us-logo/call-us-logo.png" size='medium' centered />
                    </Grid.Column>
                </Grid.Row>
                <Divider/>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src="../assets/moving-logo/moving-logo.png" size='medium' centered />
                    </Grid.Column>
                    <Divider vertical>Or</Divider>
                    <Grid.Column width={8}>
                        <Image src="../assets/garbage-remove-logo/garbage-remove-logo.png" size='medium' centered />
                    </Grid.Column>
                </Grid.Row>
                <Divider/>
                <Grid.Row>
                    <Grid.Column>
                        <Image src="../assets/happy-logo/happy-logo.png" size='medium' centered />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </div>
)

export default LogosGrid