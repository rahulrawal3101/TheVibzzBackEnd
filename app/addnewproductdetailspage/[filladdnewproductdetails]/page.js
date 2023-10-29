'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControlLabel, FormGroup, Grid, TextField, IconButton, OutlinedInput } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CancelIcon from '@mui/icons-material/Cancel';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useParams, useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react';
import { context } from '@/Global/Global_Context';


const AddNewProductDetailsPage = () => {
    const router = useRouter();
    const param = useParams()
    const { mainData, dispatch } = useContext(context)
    const [addImage, setAddImage] = useState({ img: { src: '' } });
    // console.log(param)
    const [details, setDetails] = useState(
        {
            cat_Id: '',
            catName: '',
            isCatAvailabel: true,
            _id: new Date().getTime(),
            productName: '',
            discPrice: '',
            orgPrice: '',
            isAvailable: false,
            magnifyImg: [],
            titDesc: [{ title: "", description: "", id: new Date().getTime() }],
            sizeChart: { small: false, medium: false, large: false, extraLarge: false, XXL: false },
            sizeImage: ""
        }
    )

    //   getting catName and catID
    useEffect(() => {
        const filteredData = mainData.filter((ele) => { return ele.cat_Id == param.filladdnewproductdetails })
        // console.log(filteredData)
        setDetails({ ...details, catName: filteredData[0].catName, cat_Id: filteredData[0].cat_Id })
    }, [])

    // fill proName,mrp and srp 
    const fillProductDetails = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value })
    }
//  select size guide 
    const sizeGuideHandler = (e) => {
        setDetails({ ...details, sizeImage: URL.createObjectURL(e.target.files[0]) })
    }
//  for select all size product s,m,l,.. 
    const selectSizeHandler = (e) => {
        const { name, checked } = e.target;
        setDetails({ ...details, sizeChart: { ...details.sizeChart, [name]: checked } })
    }

    // for select product iamge 
    const productImageHandler = (e) => {
        setAddImage({ ...addImage, img: { src: URL.createObjectURL(e.target.files[0]) } })
        // console.log(addImage)
    }
  
    // apply on add button to add productimage 
    const addImagesHandler = () => {
        if (addImage.img !== "") {
            setDetails({ ...details, magnifyImg: [...details.magnifyImg, { img: addImage.img }] });
        } else {
            alert('please Select Image')
        }
    }
   
//  add new same tit and des box 
    const addNewTitleDesBox = () => {
        // console.log('fun is working')
        setDetails({ ...details, titDesc: [...details.titDesc, { title: '', description: '', id: new Date().getTime() }] })
    }
 
    // control title and des 
    const handleTitDes = (e, id) => {
        const { name, value } = e.target;
        setDetails(prevState => ({ ...prevState, titDesc: prevState.titDesc.map(ele => ele.id == id ? { ...ele, [name]: value } : ele) }))

    }
  
    // delete tit and des 
    const cancelHandler = (id) => {
        if (details.titDesc.length > 1) {
            const newArr = details.titDesc.filter((ele) => {
                return ele.id !== id
            });
            setDetails({ ...details, titDesc: newArr })
        }
        else {
            alert('You have to add atlest one title,description')
        }

    }


    //  submit all data to main page 
    const addnewProductHandler = () => {
        if (details.cat_Id == '' || details.catName == '' || details.isCatAvailabel == '' || details.isAvailable == '' || details.productName == '' || details.discPrice == '' || details.orgPrice == '' || details.isAvailable == '' || details.magnifyImg == 0 || details.titDesc[0].title == '' || details.titDesc[0].description == '' || details.sizeImage == '') {
            alert('please fill the required details')
        } else {
            dispatch({
                type: 'ADDNEWPRODUCT',
                payload: (details)
            });
            router.push(`/adminproductpage/${param.filladdnewproductdetails}`)

        }

    }
    console.log(details)
    return (


        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)', overflow: 'scroll' }}>
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
                            <TextField placeholder='Product name...' sx={{ fontSize: '14px', color: 'red', }} size='small' fullWidth onChange={(e) => { fillProductDetails(e) }} name='productName' value={details.productName} />
                        </Grid>

                    </Grid>


                    <Grid container sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>MRP :</Typography>

                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                            <TextField placeholder='MRP' type='number' sx={{ fontSize: '14px', color: 'red', }} size='small' fullWidth onChange={(e) => { fillProductDetails(e) }} name='orgPrice' value={details.orgPrice} />
                        </Grid>

                    </Grid>
                    <Grid container sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>SRP :</Typography>

                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                            <TextField placeholder='Srp...' type='number' sx={{ fontSize: '14px', color: 'red', }} size='small' fullWidth onChange={(e) => { fillProductDetails(e) }} name='discPrice' value={details.discPrice} />
                        </Grid>

                    </Grid>



                    <Grid container sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Size_Guide :</Typography>

                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} >
                            <Box sx={{ height: "30px", width: "100%", border: '1px solid black', }}>
                                <Typography sx={{ position: "relative", top: "0px", mt: "4px", textAlign: 'center' }}>
                                    <input type='file' style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }} fullWidth onChange={(e) => { sizeGuideHandler(e) }} />
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
                                <FormControlLabel checked={details.sizeChart.small} control={<Checkbox name='small' size='small' onChange={(e) => { selectSizeHandler(e) }} />} label="S" sx={{ fontSize: '10px' }} />
                                <FormControlLabel checked={details.sizeChart.medium} control={<Checkbox name='medium' size='small' onChange={(e) => { selectSizeHandler(e) }} />} label="M" />
                                <FormControlLabel checked={details.sizeChart.large} control={<Checkbox name='large' size='small' onChange={(e) => { selectSizeHandler(e) }} />} label="L" />
                                <FormControlLabel checked={details.sizeChart.extraLarge} control={<Checkbox name='extraLarge' size='small' onChange={(e) => { selectSizeHandler(e) }} />} label="XL" />
                                <FormControlLabel checked={details.sizeChart.XXL} control={<Checkbox name='XXL' size='small' onChange={(e) => { selectSizeHandler(e) }} />} label="XXL" />
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


                                    control={<Checkbox size="small" sx={{ ml: '3px', }} checked={details.isAvailable == true ? true : false} onChange={(e) => setDetails({ ...details, isAvailable: e.target.checked })} />}
                                    label={<Typography sx={{ mt: '4px', fontSize: '16px', fontWeight: '700' }}>Yes</Typography>}
                                    labelPlacement="end"
                                />
                                <FormControlLabel

                                    control={<Checkbox size="small" sx={{ ml: '3px', }} checked={details.isAvailable == true ? false : true} onChange={(e) => setDetails({ ...details, isAvailable: !e.target.checked })} />}
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
                            <Button variant='contained' color='error' sx={{ '&:hover': { bgcolor: 'green' }, height: "25px", ml: "5px", p: "0px", mt: "3px", fontSize: "13px" }} disabled={details.magnifyImg.length > 4 ? true : false} onClick={addImagesHandler}>Add</Button>

                        </Grid>

                    </Grid>
                    <Grid container sx={{ justifyContent: "center", mt: "15px", }}>
                        {
                            details.magnifyImg.map((ele, index) => {
                                return (
                                    <Grid item lg={1} md={1} sm={2} xs={2.5} key={index} sx={{ mr: "5px", }}>
                                        <Box
                                            sx={{
                                                height: "110px",
                                                border: "1px solid gray",
                                                backgroundImage: `url(${ele.img.src})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                        </Box>
                                    </Grid>
                                )
                            })
                        }




                    </Grid>

                    <Grid item xs={12} sx={{ p: '8px', mt: '25px', }}>
                        <Typography sx={{ fontSize: { lg: '17px', md: '16px', sm: '16px', xs: '15px' } }}>Describe Information :</Typography>

                    </Grid>

                    <Grid container sx={{ p: '8px' }}>
                        {
                            details.titDesc.map((ele, index) => {
                                return (
                                    <Grid container key={index} sx={{ height: "70px", mt: "20px" }}>
                                        <Grid item xs={1} sx={{ display: "flex", alignItems: "center", justifyContent: "Center" }}>
                                            <IconButton onClick={addNewTitleDesBox}>
                                                <AddCircleOutlineOutlinedIcon sx={{ fontSize: "25px" }} />
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={10} sx={{}}>
                                            <OutlinedInput
                                                placeholder="title"
                                                name="title"
                                                value={ele.title}
                                                sx={{ height: '30px', width: '100%' }}
                                                onChange={(e) => { handleTitDes(e, ele.id) }}

                                            />
                                            <OutlinedInput
                                                placeholder="description"
                                                name="description"
                                                value={ele.description}
                                                sx={{ height: '30px', width: '100%', mt: '10px' }}
                                                onChange={(e) => { handleTitDes(e, ele.id) }}

                                            />
                                        </Grid>
                                        <Grid item xs={1} sx={{ display: "flex", alignItems: "center", justifyContent: "Center" }}>
                                            <IconButton onClick={() => { cancelHandler(ele.id) }}>
                                                <CancelIcon sx={{ fontSize: "25px", color: "red" }} />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }



                    </Grid>





                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '20px' }}>
                        <Button variant='contained' onClick={addnewProductHandler}>Submit</Button>

                    </Grid>
                </Grid>

            </Grid>
        </Grid>


    );
}
export default AddNewProductDetailsPage