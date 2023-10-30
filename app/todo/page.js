'use client'
import { Box, Container, Grid, TextField, TextareaAutosize, Typography, Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TodoPage = () => {
    const [collectTitDes, setCollectTitDes] = useState([])
    const [data, setData] = useState({
        title: '',
        des: ''
    })
    const titDesHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const fetchDetailsApi = async () => {
        try {
            const getTitDes = await axios.get('/api/todo');
            setCollectTitDes(getTitDes.data.resp)
            // console.log(getTitDes)
        } catch (err) {
            console.log(err);
            alert('Error while fetching : ', err.message);
        }

    }

    const submitHandler = async () => {
        if (data.title && data.des) {
            try {
                const res =await axios.post('/api/todo', {
                    title: data.title,
                    description: data.des
                });
                console.log(res);
                if (res.status == 201) {
                    fetchDetailsApi();
                }
            } catch (err) {
                console.log(err);
                alert(err.message);
            }
        } else {
            alert('pls fill the required feilds')
        }
    }
    useEffect(() => {
        fetchDetailsApi();
    }, [])
console.log(collectTitDes)
    // console.log(data)
    return (
        <Container>
            <Grid container sx={{  justifyContent: 'center', alignItems: 'center', flexDirection: 'color' }}>
                <Grid item xs={7} >
                    <Typography sx={{fontSize:'24px', fontWeight:'900', textAlign:'center'}}>Todo App</Typography>
                </Grid>
                <Grid item xs={7}>
                    <Typography>Title</Typography>
                    <TextField placeholder='enter title...' fullWidth size='small' onChange={titDesHandler} name='title' value={data.title} />
                    <Typography>Description</Typography>
                    <TextareaAutosize placeholder='enter des..' style={{ width: '99%' }} minRows={5} onChange={titDesHandler} name='des' value={data.des} />

                    <Button variant='contained' fullWidth onClick={submitHandler}>submit</Button>

                </Grid>
                <Grid item xs={7} sx={{ mt: '20px' }}>


                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <table border='1px solid red'>
                            <thead>
                                <tr>
                                    <th>S.N</th>
                                    <th style={{ width: '200px' }}>Title</th>
                                    <th style={{ width: '600px' }}>Description</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    collectTitDes.map((ele,index)=>{
                                        return(
                                            <tr key={index}>
                                            <td style={{fontWeight:'bold'}}>{index + 1}</td>
                                            <td style={{fontWeight:'bold', color:'red', textAlign:'center'}}>{ele.title}</td>
                                            <td style={{ color:'green', fontSize:'19px'}}>{ele.description}</td>
        
                                        </tr>
                                        )
                                    })
                                }

                               

                            </tbody>
                        </table>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default TodoPage