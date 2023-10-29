'use Client'
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import React from 'react';
import pic1 from '../../assets/aminppic1.jpg';
import pic2 from '../../assets/adminpppic2.jpg';
import pic3 from '../../assets/adminppic3.jpg';
import pic4 from '../../assets/adminppic4.jpg';

import Image from 'next/image';


const AddDetailsPage = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sx={{ bgcolor: 'black', p: '10px' }}>
                    <Typography sx={{ fontSize: '25px', color: 'white', fontWeight: '800' }}>Admin Dashboard</Typography>

                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#8d6e63', p: '10px' }}>
                    <Typography sx={{ fontSize: '25px' }}>Product Details</Typography>

                </Grid>
                <Grid item xs={12}>
                    <Grid container sx={{ mt: '10px' }}>
                        <Grid item xs={6} >
                            <Grid container sx={{ p: '0px 10px' }}>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '17px', fontWeight: '800' }}>Product Name : </Typography>
                                    <Typography sx={{ fontSize: '17px', color: '#616161', ml: '10px' }}> 3d Mirror Print Low Shoulder Shirt</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '10px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '17px', fontWeight: '800' }}>MRP : </Typography>
                                    <Typography sx={{ fontSize: '17px', color: '#616161', ml: '10px' }}>Rs 1100.00</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '10px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '17px', fontWeight: '800' }}>SRP : </Typography>
                                    <Typography sx={{ fontSize: '17px', color: '#616161', ml: '10px' }}>800</Typography>
                                </Grid>


                                <Grid item xs={12} sx={{ mt: '10px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '17px', fontWeight: '800' }}>Sizes : </Typography>
                                    <FormGroup sx={{ ml: '10px' }}>
                                        <FormControlLabel control={<Checkbox defaultChecked size='small' />} label="S" sx={{ color: '#616161' }} />

                                    </FormGroup>
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox defaultChecked size='small' />} label="M" sx={{ color: '#616161' }} />

                                    </FormGroup>
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox defaultChecked size='small' />} label="L" sx={{ color: '#616161' }} />

                                    </FormGroup>
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox defaultChecked size='small' />} label="XL" sx={{ color: '#616161' }} />

                                    </FormGroup>
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox defaultChecked size='small' />} label="XXL" sx={{ color: '#616161' }} />

                                    </FormGroup>




                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={12} sx={{ mt: '10px', }}>
                                <Grid container>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '17px', fontWeight: '800' }}>Images :</Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', mt:'10px' }}>
                                        <Box sx={{ width: '100px', height: '110px',  position: 'relative' }}>
                                            <Image src={pic1} alt='pic1' fill  objectFit='contain'/>
                                        </Box>
                                        <Box sx={{ width: '100px', height: '110px',  position:'relative' }}>
                                            <Image src={pic2} alt='pic1' fill  objectFit='contain'/>
                                        </Box>
                                        <Box sx={{ width: '100px', height: '110px',  position:'relative' }}>
                                            <Image src={pic3} alt='pic1' fill objectFit='contain' />
                                        </Box>
                                        <Box sx={{ width: '100px', height: '110px', position:'relative' }}>
                                            <Image src={pic4} alt='pic1' fill objectFit='contain' />
                                        </Box>

                                    </Grid>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid container sx={{ p: '10px' }}>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: '20px', fontWeight: '600', color: 'green' }}>Details</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: '10px' }}>

                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>MATERIAL</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161', mt: '8px' }}>Our manufacturing staff works with cleanliness for your health, safety and quality standard for our products so our garments are safe and healthy. We are using polycotton fabric for our garments. Your safety is our concern.</Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: '10px' }}>

                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>BENEFITS TO ENVIRONMENT</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161', mt: '8px' }}>It reduces the power and water consumption and Recycled polycotton is almost the same as virgin polycotton in terms of quality, but its production requires 59 percent less energy compared to virgin polycotton so it’s really beneficial to the environment.</Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: '10px' }}>

                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>FABRIC DETAILS</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161', mt: '8px' }}>We are using Polycotton material which is recycled from plastic such as plastic bottles. We use PET plastic for our material. The PET plastic is taken to the waste separation then cleaned, shredded and recycled into a new recycled polycotton fiber. It reduces the consumption and gives new life to plastic waste. This polycotton is strong and long lasting.</Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: '10px' }}>

                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>CARE</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161', mt: '8px' }}>To preserve the same quality of this garment, we recommend you to read the instructions:</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161' }}>– Do not Bleach</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161' }}>– Do not tumble dry</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161' }}>– Gentle dry clean</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161' }}>– Do not rub</Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: '10px' }}>

                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>DESIGNS</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161', mt: '8px' }}>Our artist are making unique designs of shirts with latest prints like boho print, animal print, cartoon print, stripes print and many more.</Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: '10px' }}>

                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>PURPOSE OR OCCASION TO WEAR</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161', mt: '8px' }}>-Casual day out</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161' }}>-Weekend look</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161' }}>-Summer trends</Typography>
                            <Typography sx={{ fontSize: '15px', color: '#616161' }}>-Best for holidays</Typography>
                        </Grid>

                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default AddDetailsPage