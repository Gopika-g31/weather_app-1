import { Container, Typography, Box, Stack } from '@mui/material';
import React from 'react';
import { Search } from './Search';

export const Home = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          textAlign: 'center',
          minHeight: '100vh',
          width: '100%',
          background: 'linear-gradient(135deg, #00B3EA 0%, #4FC3F7 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Stack direction="column" alignItems="center">
            <Stack direction="row" alignItems={'center'}>
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '24px',
                  fontWeight: 700,
                  fontFamily: "Newsreader",
                  ml: 1,
                  textShadow: '0 2px 8px #2196f3',
                }}
              >
                City Weather
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: '#fff',
                fontSize: '16px',
                fontFamily: "Poppins",
                textShadow: '0 1px 4px #2196f3',
              }}
            >
              Instantly view weather updates and forecasts for your city.
            </Typography>
          </Stack>
          <Search />
        </Box>
      </Container>
    </React.Fragment>
  );
}