import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@material-ui/core/styles';
import { Button, Typography, Container, Box } from '@material-ui/core';
// components
import Page from '../components/page';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    // minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    // padding: theme.spacing(12, 0),
    // backgroundColor: "white"
}));

// ----------------------------------------------------------------------

export default function Page404() {
    return (
        <Page title="404 Page Not Found">
            <Container>
                <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>

                    <Typography variant="h3" paragraph>
                        Sorry, page not found!
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>
                        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
                        sure to check your spelling.
                    </Typography>

                    <Box
                        component="img"
                        src="https://media0.giphy.com/media/JQMlfqZfEIaQDopMBQ/giphy.gif?cid=790b7611aa1dcc0ff67fce5dffabd4b94f503336583398ab&rid=giphy.gif&ct=s"
                        sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
                    />

                    <Button to="/" size="large" component={RouterLink}>
                        Go to Home
                    </Button>
                </ContentStyle>
            </Container>
        </Page>
    );
}
