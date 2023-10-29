'use client'
import AddNewItemModal from '@/component/AddItemModal';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { context } from '@/Global/Global_Context';
import EditCatModal from '@/component/EditCatModal';



const AdminProductCategoriesPage = () => {
    const { mainData, dispatch } = useContext(context)
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [catLength, setCatLength] = useState([]);
    const [finaldelete, setFinalDelete] = useState();
    const [edit, setEdit] = useState(false);
    const [sendCat, setSendCat] = useState(
        {
            cat_Id: '',
            catName: '',
            isCatAvailable: false,
        }
    )



    const addNewItemHandler = () => {
        setOpen(true)
    }

    const categoriesHandler = (ele) => {
        

        router.push(`adminproductpage/${ele}`);
        // console.log('helooo')
    }
    // console.log(mainData)



    const getAllData = () => {
        const getAllCatData = mainData.map((ele) => { return ele.catName });
        const getSingleCat = [...new Set(getAllCatData)];
        const getItem = getSingleCat.map((ele) => {
            const getItemLength = mainData.filter((item) => { return item.catName == ele }).length;
            const getItemCat = mainData.filter((item) => { return item.catName == ele })
            const sinCat = getItemCat.map((items) => { return items.isCatAvailable })
            const getCatId = mainData.map((ele) => { return ele.cat_Id })[0]
            // console.log(getCatId) 

            return ({ getItem: getItemLength, catName: ele, isCatAvailable: sinCat, cat_Id: getItemCat[0].cat_Id })

        })

        return getItem


    }
    useEffect(() => {

        setCatLength(getAllData());


    }, [mainData]);

    const DeleteHandler = (catName) => {
        const deleteCat = mainData.filter((item) => { return item.catName !== catName });
        console.log(deleteCat)
        //   setFinalDelete(deleteCat )
        dispatch({
            type: 'DELETECATEGORIES',
            payload: (deleteCat)
        })



    }

    const EditHandler = (elee) => {
        // console.log(ele.cat_Id)
        const value = mainData.filter((item) => { return item.cat_Id == elee });
        const isCatAvailableCheck = value.map((ele) => { return ele.isCatAvailable })
        setEdit(true);
        setSendCat(
            {
                cat_Id: elee,
                catName: value[0].catName,
                isCatAvailable: isCatAvailableCheck.every(val => val == true) ? true : false

            }
        );

    }

    // console.log(mainData)

    return (
        <>
            <Grid container>
                <Grid item xs={5} sx={{ bgcolor: 'black', p: '10px' }}>
                    <Typography sx={{ fontSize: '25px', color: 'white', fontWeight: '800' }}>Admin Dashboard</Typography>

                </Grid>
                <Grid item xs={7} sx={{ bgcolor: 'black', p: '10px' }}>
                    <Typography sx={{ fontSize: '25px', color: 'white', fontWeight: '800' }}>Product Categories</Typography>

                </Grid>

                <Grid item xs={12} sx={{ bgcolor: '#8d6e63', p: '10px' }}>
                    <Typography sx={{ fontSize: '25px', fontWeight: '800', textAlign: 'center' }}>All Categories</Typography>

                </Grid>
                <Grid item xs={12} sx={{ p: '10px', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                    <Button variant='contained' sx={{ fontSize: '14px' }} onClick={addNewItemHandler}>Add new categories</Button>

                </Grid>

                <Grid container>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>S.No</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Categories Name</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Is stock available</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>No of items</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        catLength.map((ele, index) => {
                                            // console.log(ele)
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell align="center" sx={{ fontSize: '14px' }}>{index + 1}</TableCell>
                                                    <TableCell align="center" sx={{ fontSize: '14px', cursor: 'pointer', }} onClick={() => { categoriesHandler(ele.cat_Id) }}>{ele.catName}</TableCell>
                                                    <TableCell align="center" sx={{ fontSize: '14px' }}>
                                                        {/* {ele.isCatAvailable ? "true" : 'false'} */}
                                                        {ele.isCatAvailable.every(cat => cat == true) ? 'true' : 'false'}
                                                    </TableCell>
                                                    <TableCell align="center" sx={{ fontSize: '14px' }}>{ele.getItem}</TableCell>
                                                    <TableCell align="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Button variant='contained' color='success' sx={{ fontSize: '10px', mr: '20px', }} onClick={() => { EditHandler(ele.cat_Id) }}>Edit</Button>
                                                        <Button variant='contained' color='error' sx={{ fontSize: '10px' }} onClick={() => { DeleteHandler(ele.catName) }}>Delete</Button>
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
            <AddNewItemModal open={open} setOpen={setOpen} />
            <EditCatModal open={edit} setOpen={setEdit} sendCat={sendCat} setSendCat={setSendCat} />

        </>
    )
}

export default AdminProductCategoriesPage