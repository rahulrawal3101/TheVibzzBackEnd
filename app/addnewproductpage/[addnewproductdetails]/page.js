'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from '@mui/material';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useParams, useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react';
import { context } from '@/Global/Global_Context';


const AddNewProductPage = () => {
    const { mainData, dispatch } = useContext(context);
    const router = useRouter();
    const param = useParams();
    console.log(param);
    const [addImage, setAddImage] = useState({ img: { src: '' } });
    const [adminAddNewProduct, setAdminAddNewProduct] = useState({
        _id: "",
        productName: "",
        orgPrice: "",
        discPrice: "",
        isAvailable: "",
        magnifyImg: [],
        titDesc: [{ title: "", description: "" }],
        sizeChart: { small: "", medium: "", large: "", extraLarge: "", XXL: "" },
        sizeImage: ""
    });

    useEffect(() => {
        const filteredData = mainData.filter((ele) => {
            return ele._id == param.addnewproductdetails
        })
        // console.log(...filteredData)
    })

    // console.log(param)

    // function collecting name,mrp,srp 
    const fillProductDetails = (e) => {
        const { name, value } = e.target;
        setAdminAddNewProduct({ ...adminAddNewProduct, [name]: value })
    }
    // select size guide  image 
    const sizeGuideHandler = (e) => {
        setAdminAddNewProduct({ ...adminAddNewProduct, sizeImage: URL.createObjectURL(e.target.files[0]) })
    }

    const selectSizeHandler = (e) => {
        const { name, value } = e.target;
        setAdminAddNewProduct({ ...adminAddNewProduct, sizeChart: { ...adminAddNewProduct.sizeChart, [name]: value } })
    }

    const productImageHandler = (e) => {
        setAdminAddNewProduct({ ...addImage,img:{src:URL.createObjectURL(e.target.files[0])} })
    }
    console.log(adminAddNewProduct)
    return (



        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)', overflow: 'hidden' }}>
            <Grid item xs={12} sx={{ bgcolor: 'black', p: '10px' }}>
                <Typography sx={{ fontSize: '25px', color: 'white', fontWeight: '800' }}>Admin Dashboard</Typography>

            </Grid>
            <Grid item xs={12} sx={{ height: 'fit-content', borderRadius: '10px', bgcolor: 'white', }}>
                <Grid container >
                    <Grid item xs={12} sx={{ p: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: { lg: '20px', md: '18px', sm: '17px', xs: '17px' }, fontWeight: '800', }} >ADD NEW PRODUCT</Typography>
                    </Grid>

                    <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Product Name :</Typography>
                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                            <TextField placeholder='Product name...' sx={{ fontSize: '14px', color: 'red', }} size='small' fullWidth name='productName' value={adminAddNewProduct.productName} onChange={(e) => { fillProductDetails(e) }} />
                        </Grid>

                    </Grid>


                    <Grid container sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>MRP :</Typography>

                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                            <TextField placeholder='MRP...' type='number' sx={{ fontSize: '14px', color: 'red', }} size='small' fullWidth name='orgPrice' value={adminAddNewProduct.orgPrice} onChange={(e) => { fillProductDetails(e) }} />
                        </Grid>

                    </Grid>
                    <Grid container sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>SRP :</Typography>

                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                            <TextField placeholder='SRP...' type='number' sx={{ fontSize: '14px', color: 'red', }} size='small' fullWidth name='discPrice' value={adminAddNewProduct.discPrice} onChange={(e) => { fillProductDetails(e) }} />
                        </Grid>

                    </Grid>



                    <Grid container sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Size_Guide :</Typography>

                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} >
                            <Box sx={{ height: "30px", width: "100%", border: '1px solid black', }}>
                                <Typography sx={{ position: "relative", top: "0px", mt: "4px", textAlign: 'center' }}>
                                    <input type='file' style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }} onChange={(e) => { sizeGuideHandler(e) }} />
                                    Choose Image
                                </Typography>
                            </Box>
                        </Grid>

                    </Grid>
                    <Grid container sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>sizes :</Typography>

                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} sx={{ width: '70%', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel  control={<Checkbox defaultChecked size='small' name='small' value={adminAddNewProduct.sizeChart.small == true ? true : false} onChange={(e) => { selectSizeHandler(e) }} />} label="S" sx={{ fontSize: '10px' }} />
                                <FormControlLabel  control={<Checkbox defaultChecked size='small' name='medium'value={adminAddNewProduct.sizeChart.medium == true ? true : false} onChange={(e) => { selectSizeHandler(e) }} />} label="M" />
                                <FormControlLabel  control={<Checkbox defaultChecked size='small' name='large' value={adminAddNewProduct.sizeChart.large == true ? true : false} onChange={(e) => { selectSizeHandler(e) }} />} label="L" />
                                <FormControlLabel  control={<Checkbox defaultChecked size='small' name='extralarge' value={adminAddNewProduct.sizeChart.extraLarge == true ? true : false} onChange={(e) => { selectSizeHandler(e) }} />} label="XL" />
                                <FormControlLabel  control={<Checkbox defaultChecked size='small' name='XXL' value={adminAddNewProduct.sizeChart.XXL == true ? true : false} onChange={(e) => { selectSizeHandler(e) }}/>} label="XXL"  />
                            </FormGroup>
                        </Grid>

                    </Grid>
                    <Grid container sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <Grid item lg={3} md={3} sm={12} xs={12} sx={{ pr: "7px", ml: '8px', display: "flex", alignItems: "center", justifyContent: { lg: 'right', md: 'right', sm: 'left', xs: 'left' } }}>
                            <Typography sx={{ fontSize: "17px", textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, }}> isAvailable:</Typography>
                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} sx={{ ml: '3px' }}>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left' }}>
                                <FormControlLabel


                                    control={<Checkbox size="small" sx={{ ml: '3px', }} checked={adminAddNewProduct.isAvailable == true ? true : false} onChange={(e) => setAdminAddNewProduct({ ...adminAddNewProduct, isAvailable: e.target.checked })} />}
                                    label={<Typography sx={{ mt: '4px', fontSize: '16px', fontWeight: '700' }}>Yes</Typography>}
                                    labelPlacement="end"
                                />
                                <FormControlLabel

                                    control={<Checkbox size="small" sx={{ ml: '3px', }} checked={adminAddNewProduct.isAvailable == true ? false : true} onChange={(e) => setAdminAddNewProduct({ ...adminAddNewProduct, isAvailable: !e.target.checked })} />}
                                    label={<Typography sx={{ mt: '4px', fontSize: '16px', fontWeight: '700' }}>No</Typography>}
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px', }}>Choose Prod img :</Typography>

                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} sx={{ mt: { xs: '10px' }, display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ height: "30px", width: "90%" }}>
                                <Typography align='center' sx={{ position: "relative", top: "0px", mt: "4px", border: "1px solid gray" }}>
                                    <input type='file' style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "100%", width: "100%" }} onChange={(e) => { productImageHandler(e) }} />
                                    Choose Image
                                </Typography>
                            </Box>
                            <Button variant='contained' color='error' sx={{ '&:hover': { bgcolor: 'green' }, height: "25px", ml: "5px", p: "0px", mt: "3px", fontSize: "13px" }} disabled={adminAddNewProduct.magnifyImg.length > 4 ? true : false} >Add</Button>

                        </Grid>

                    </Grid>
                    <Grid item xs={12} sx={{ mt: { lg: '15px', md: '15px', sm: '13px', xs: '13px' } }}>
                        <Box sx={{ width: '100%', mt: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', p: '8px', flexWrap: 'wrap' }}>
                            <Box sx={{ width: { lg: '14%', md: '14%', sm: '20%', xs: '25%' }, height: '100px', border: '1px solid black', mr: '10px', }}>

                            </Box>
                            <Box sx={{ width: { lg: '14%', md: '14%', sm: '20%', xs: '25%' }, height: '100px', border: '1px solid black', mr: '10px' }}>

                            </Box>
                            <Box sx={{ width: { lg: '14%', md: '14%', sm: '20%', xs: '25%' }, height: '100px', border: '1px solid black', mr: '10px' }}>

                            </Box>
                            <Box sx={{ width: { lg: '14%', md: '14%', sm: '20%', xs: '25%' }, height: '100px', border: '1px solid black', mr: '10px', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>

                            </Box>
                            <Box sx={{ width: { lg: '14%', md: '14%', sm: '20%', xs: '25%' }, height: '100px', border: '1px solid black', mr: '10px', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>

                            </Box>
                            <Box sx={{ width: { lg: '14%', md: '14%', sm: '20%', xs: '25%' }, height: '100px', border: '1px solid black', mr: '10px', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid item xs={12} sx={{ p: '8px', mt: '7px', }}>
                        <Typography sx={{ fontSize: { lg: '17px', md: '16px', sm: '16px', xs: '15px' } }}>Describe Information :</Typography>

                    </Grid>

                    <Grid item xs={12} sx={{ p: '8px' }}>
                        <Box sx={{ width: '90%' }}>
                            <TextField size='small' placeholder='Title..' fullWidth sx={{ fontSize: '15px' }} />

                        </Box>
                        <Box sx={{ width: '100%', display: 'flex' }}>
                            <Box sx={{ width: '90%' }}>
                                <TextField size='small' placeholder='Description...' sx={{ mt: '10px', fontSize: '15px' }} fullWidth />

                            </Box>
                            <Box sx={{ width: '10%', display: 'flex', justifyContent: { lg: 'center', md: 'center', sm: 'center', xs: 'right' }, alignItems: 'center' }}>
                                <AddCircleOutlineIcon sx={{ fontSize: { lg: '30px', md: '25px', sm: '20px', xs: '20px', }, color: 'green' }} />
                            </Box>

                        </Box>

                    </Grid>
                    <Grid item xs={12} sx={{ p: '8px' }}>
                        <Box sx={{ width: '90%' }}>
                            <TextField size='small' placeholder='Title..' fullWidth sx={{ fontSize: '15px' }} />

                        </Box>
                        <Box sx={{ width: '100%', display: 'flex' }}>
                            <Box sx={{ width: '90%' }}>
                                <TextField size='small' placeholder='Description...' sx={{ mt: '10px', fontSize: '15px' }} fullWidth />

                            </Box>
                            <Box sx={{ width: '10%', display: 'flex', justifyContent: { lg: 'center', md: 'center', sm: 'center', xs: 'right' }, alignItems: 'center' }}>
                                <AddCircleOutlineIcon sx={{ fontSize: { lg: '30px', md: '25px', sm: '20px', xs: '20px', }, color: 'green' }} />
                            </Box>

                        </Box>

                    </Grid>




                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '20px' }}>
                        <Button variant='contained'>Submit</Button>

                    </Grid>
                </Grid>

            </Grid>
        </Grid>


    );
}
export default AddNewProductPage