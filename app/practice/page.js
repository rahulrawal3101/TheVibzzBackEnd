'use client';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
const newData = [
    {
        name1:'shivam guruji',
    },
    {
        name2:'kappu'
    },
    {
        name3:'naggu'
    },
    {
        name4:'rahu'
    }
]

const PracticePage = () => {
 
    
   



  return (
   
    <Grid container>
        <Grid item xs={12}>
            {
              newData.map((ele,index)=>{
               
                return (
                    <Box key={index}>

                        <Typography>{Object.values(ele)}
                        
                        </Typography>
                        
                    </Box>
                )
              })  
            }

        </Grid>
    </Grid>
  )
}

export default PracticePage