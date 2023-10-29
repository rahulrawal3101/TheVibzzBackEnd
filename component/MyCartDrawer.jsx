'use client'
import {  Button, Drawer, Grid, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const MyCartDrawer = ({ open, setOpen }) => {
    const closeHandler = () => {
        setOpen(false)
      }
  
    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={() => { setOpen(false) }}
            PaperProps={{
                sx: { width: { lg: '28%', md: '0%', sm: '0%', xs: '0%' }, margin: 'auto', bgcolor: 'white' }
            }}
        >
            <Grid container sx={{ color: 'white' }} >
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', p: '4px' }} >
                    <CancelIcon sx={{ color: 'black', fontSize: '35px', cursor: 'pointer' }} onClick={closeHandler} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <ShoppingBagOutlinedIcon sx={{ fontSize: '25px', color: 'black' }} />
                    <Typography sx={{ fontSize: '15px', color: 'black', mt: '14px',fontWeight:'600' }}>SHOPPING CART</Typography>


                </Grid>
                <Grid item xs={12} sx={{display:'flex',  justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <Typography sx={{color:'black', fontSize:'15px', textAlign:'center', mt:'20px', fontWeight:'600'}}>No products in the cart.</Typography>

                    <Button sx={{fontSize:'11px', color:'black', bgcolor:'#eeeeee',mt:'10px', fontWeight:'600' }}>Return to shop</Button>

                </Grid>




            </Grid>


        </Drawer>
    )
}

export default MyCartDrawer