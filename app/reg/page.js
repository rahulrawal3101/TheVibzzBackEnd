'use client'
import { Box, Button, Container, Typography } from '@mui/material'
import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

const Page = () => {
    const [users, setusers] = useState([]);
    const [record, setRecords] = useState({
        fName: '',
        lName: '',
        email: '',
        mobile: '',
        pass: '',
        addr: ''
    });

    const handleCollect = (e) => {
        console.log(e.target);
        setRecords({ ...record, [e.target.name]: e.target.value });
    };

    const fetchUserApi=async()=>{
        try {
            const getRes = await axios.get('/api/users');
            setusers(getRes.data.resp);

        } catch (e) {
            console.log(e);
            alert('Error while fetching : ', e.message);
        }
    }

    const handleSubmit = async () => {
        if (record.fName && record.lName && record.email && record.mobile && record.addr && record.pass) {
            // console.log(record);
            try {
                const res = await axios.post('/api/users', {
                    firstName: record.fName,
                    lastName: record.lName,
                    email: record.email,
                    password: record.pass,
                    mobile: record.mobile,
                    address: record.addr
                });
                console.log(res);
                if (res.status == 201) {
                    // alert(res.data.message);
                   fetchUserApi();
                }
            } catch (err) {
                console.log(err);
                alert(err.message);
            }
        }
        else {
            alert('Plz Fill the complete Form!!!')
        }
    }

    const deleteHandler=async(id)=>{
        try{
            const res = await axios.delete(`/api/users/${id}`);
            if(res.data.message=='Deleted Successfully'){
                fetchUserApi();
            }
            console.log(res);
        }catch(e){
            console.log(e);
            alert(e.message);
        }
    }

    useEffect(()=>{fetchUserApi()},[])

    return (
        <>
            <Container >
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='h3' fontWeight={'bold'}>Register User</Typography>
                    <br />
                    <input onChange={handleCollect} name="fName" value={record.fName} placeholder='First Name' /><br /><br />
                    <input onChange={handleCollect} name="lName" value={record.lName} placeholder='Last Name' /><br /><br />
                    <input onChange={handleCollect} name="email" value={record.email} placeholder='Email' /><br /><br />
                    <input onChange={handleCollect} name="mobile" value={record.mobile} placeholder='Mobile' /><br /><br />
                    <input onChange={handleCollect} name="pass" value={record.pass} placeholder='Password' /><br /><br />
                    <input onChange={handleCollect} name="addr" value={record.addr} placeholder='Address' /><br /><br />
                    <Button variant='contained' onClick={handleSubmit}>Register</Button>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                    <table border='1px solid red'>
                        <thead>
                            <tr>
                                <th>S.N</th>
                                <th>Full Name</th>
                                <th>Wallet Amount</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user,ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{ind+1}</td>
                                            <td onClick={()=>{deleteHandler(user._id)}} >{user.firstName} {user.lastName}</td>
                                            <td>{user.wallet}</td>
                                            <td>{user.email}</td>
                                            <td>{user.mobile}</td>
                                            <td>{user.address}</td>
                                            <td>{user.password}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </Box>
            </Container>
        </>
    )
}

export default Page
