'use client'
import { Grid, Typography } from '@mui/material';
import React from 'react';
import {useRouter} from 'next/navigation';


const dashbaordalist = [
  {
    list: 'Active Orders',
    route:'activeoderspage',
  },
  {
    list: 'User codes',
    route:'usercodespage',
  },
  {
    list: 'All users',
    route:'alluserspage',
  },
  {
    list: 'Product categories',
    route:'adminproductcategories',
  },
  {
    list: 'Sales product',
    route:'salesproductpage',
  },
  {
    list: '.....',
    route:'activeoderspage',
  },
  {
    list: '...',
    route:'activeoderspage',
  },
  {
    list: '...',
    route:'activeoderspage',
  },

]

const Admindashboardpage = () => {
  const router = useRouter();
  const categoriesHandler=(route)=>{
    console.log('hello',route);
    if(route == 'adminproductcategories'){
     router.push('adminproductcategories')
    }
    else{
      router.push('')
    }
  }
  return (
    <>
      <Grid container sx={{bgcolor:'#eeeeee'}}>
        <Grid item xs={12} sx={{  bgcolor: 'black', p:'10px' }}>
          <Typography sx={{ fontSize: '25px', textAlign: 'center', color: 'white', fontWeight:'800' }}>Admin Dashboard</Typography>

        </Grid>
        <Grid container>
          {
            dashbaordalist.map((ele)=>{
              return(
                <Grid item xs={2.8} sx={{ m:'10px 8px',height: '180px',bgcolor:'black', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor:'pointer',color:'white', '&:hover':{color:'green', border:'3px solid green'} }} onClick={()=>{categoriesHandler(ele.route)}}>
                <Typography sx={{fontSize:'20px', }}>{ele.list}</Typography>
              </Grid>
              )
            })
          }
        
        </Grid>
      </Grid>

      
    </>
  )
}

export default Admindashboardpage