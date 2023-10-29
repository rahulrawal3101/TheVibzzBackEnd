'use client'
import AddNewItemModal from '@/component/AddItemModal';
import AddNewProductModal from '@/component/AddNewProductModal';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AllCat } from '@/constentmapdata/AllCategoriesData';
import { context } from '@/Global/Global_Context';


const AdminProductPage = () => {
    const param = useParams();
    const { mainData, dispatch } = useContext(context);
    const [singleDataValue, setSingleDataValue] = useState([]);
    const [deleteData, setDeleteData] = useState([])
    const router = useRouter();
    // console.log(param)

    const addNewProductHandler = () => {
    console.log('hello')
        router.push(`/addnewproductdetailspage/${param.adminproduct}`);

    }
    const productHandler = (product) => {
        router.push('/productdetails')
    }

    useEffect(() => {
        showSingleCatProduct();
    }, [mainData])

    const showSingleCatProduct = () => {
        const getSingleData = mainData.filter((ele) => { return ele.cat_Id == param.adminproduct });
        setSingleDataValue(getSingleData)

    }

    const deleteHandler = (ele) => {
        const deleteProduct = mainData.filter((item) => { return item._id !== ele });
        console.log(deleteProduct)

        dispatch({
            type: 'DELETEPRODUCTFROMCAT',
            payload: (deleteProduct)
        })

    }
    const editHandler = (ele) => {
        router.push(`/addnewproductpage/${ele}`)
    }

    console.log(singleDataValue)
    //   console.log('hello',mainData)
    //   console.log(param.adminproduct)
    //   console.log(singleDataValue)


    return (
        <>
            <Grid container>
                <Grid item xs={5} sx={{ bgcolor: 'black', p: '10px' }}>
                    <Typography sx={{ fontSize: '25px', color: 'white', fontWeight: '800', }}>Admin Dashboard</Typography>

                </Grid>
                <Grid item xs={7} sx={{ bgcolor: 'black', p: '10px' }}>
                    <Typography sx={{ fontSize: '25px', color: 'white', fontWeight: '800' }}>MEN'S PRODUCT</Typography>

                </Grid>

                <Grid item xs={12} sx={{ bgcolor: '#8d6e63', p: '10px' }}>
                    <Typography sx={{ fontSize: '25px', fontWeight: '800', textAlign: 'center' }}>Men's Products</Typography>

                </Grid>
                <Grid item xs={12} sx={{ p: '10px', display: 'flex', justifyContent: 'right', alignmrp: 'center' }}>
                    <Button variant='contained' sx={{ fontSize: '14px' }} onClick={addNewProductHandler}>Add new Product</Button>

                </Grid>

                <Grid container>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>S.No</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Product Name</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Is available</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Mrp</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Srp</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        singleDataValue.map((ele, index) => {

                                            return (
                                                <TableRow key={index}>
                                                    <TableCell align="center" sx={{ fontSize: { lg: '14px', md: '13px', sm: '12px', xs: '12px' } }}>{index + 1}</TableCell>
                                                    <TableCell align="center" sx={{ fontSize: { lg: '14px', md: '13px', sm: '12px', xs: '12px' } }} onClick={() => { productHandler(ele.productName) }}>{ele.productName}</TableCell>
                                                    <TableCell align="center" sx={{ fontSize: { lg: '14px', md: '13px', sm: '12px', xs: '12px' } }}>{ele.isAvailable ? 'Yes' : 'No'}</TableCell>
                                                    <TableCell align="center" sx={{ fontSize: { lg: '14px', md: '13px', sm: '12px', xs: '12px', color: 'red' } }}>₹{ele.orgPrice}</TableCell>
                                                    <TableCell align="center" sx={{ fontSize: { lg: '14px', md: '13px', sm: '12px', xs: '12px', color: 'green' } }}>₹{ele.discPrice}</TableCell>
                                                    <TableCell align="center" sx={{ display: 'flex', justifyContent: 'center', alignmrp: 'center' }}>
                                                        <Button variant='contained' color='success' sx={{ fontSize: '10px', mr: '20px',border:'2px solid red' }} onClick={() => { editHandler(ele._id) }}>Edit</Button>
                                                        <Button variant='contained' color='error' sx={{ fontSize: '10px' }} onClick={() => { deleteHandler(ele._id) }} >Delete</Button>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>


            </Grid>
            

        </>
    )
}

export default AdminProductPage