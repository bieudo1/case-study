import { Box, Stack } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

 function MainLayout() {
   console.log("ba")
  return (
    <div>
      <Stack sx={{minHeight: "100vh"}}>
        {/* <MainHeader/>
        <Outlet/>
        <Box sx={{flexGorw: 1}}/>
        <MainFooter/> */}
        <h1>d</h1>
      </Stack>
    </div>
  )
}

export default MainLayout;