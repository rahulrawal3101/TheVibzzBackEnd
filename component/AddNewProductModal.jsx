// 'use client'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { useState } from 'react';
// import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputBase, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
// import Image from 'next/image';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';









// const AddNewProductModal = ({ open, setOpen }) => {
//     const [personName, setPersonName] = useState([]);

//     const handleClose = () => {
//         setOpen(false)
//     }

//     const handleChange = (event) => {
//         const {
//             target: { value },
//         } = event;
//         setPersonName(
//             // On autofill we get a stringified value.
//             typeof value === 'string' ? value.split(',') : value,
//         );
//     };


//     return (
//         <div>

//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//                 sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//             >
//                 <Grid container sx={{ height: '600px', width: '650px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)', overflow: 'scroll' }}>
//                     <Grid item xs={12} sx={{ height: 'fit-content', borderRadius: '10px', bgcolor: 'white', }}>
//                         <Grid container sx={{}}>
//                             <Grid item xs={12} sx={{ p: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Typography sx={{ fontSize: '20px', fontWeight: '800', }}>ADD NEW PRODUCT</Typography>
//                             </Grid>

//                             <Grid item xs={12} sx={{ height: '40px', p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Box sx={{ width: '30%' }}>
//                                     <Typography sx={{ fontSize: '16px' }}>Product Name :</Typography>
//                                 </Box>
//                                 <Box sx={{ width: '70%', color: 'red' }}>
//                                     <TextField placeholder='Product name...' sx={{ fontSize: '14px', color: 'red', }} size='small' fullWidth />
//                                 </Box>

//                             </Grid>
//                             <Grid item xs={12} sx={{ mt: '5px', p: '10px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Box sx={{ width: '30%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                     <Typography sx={{ fontSize: '16px' }}>MRP</Typography>
//                                     <Typography sx={{ fontSize: '16px', mr: '15px' }}>:</Typography>
//                                 </Box>
//                                 <Box sx={{ width: '70%', color: 'red' }}>
//                                     <TextField placeholder='Product name...' type='number' sx={{ fontSize: '14px', color: 'red', }} size='small' fullWidth />
//                                 </Box>

//                             </Grid>

//                             <Grid item xs={12} sx={{ mt: '5px', p: '10px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Box sx={{ width: '30%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                     <Typography sx={{ fontSize: '16px' }}>SRP</Typography>
//                                     <Typography sx={{ fontSize: '16px', mr: '15px' }}>:</Typography>
//                                 </Box>
//                                 <Box sx={{ width: '70%', color: 'red' }}>
//                                     <TextField placeholder='Product name...' type='number' sx={{ fontSize: '14px', color: 'red', }} size='small' fullWidth />
//                                 </Box>

//                             </Grid>

//                             <Grid item xs={12} sx={{ mt: '5px', p: '10px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Box sx={{ width: '30%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                     <Typography sx={{ fontSize: '16px' }}>Size_Guide</Typography>
//                                     <Typography sx={{ fontSize: '16px', mr: '15px' }}>:</Typography>
//                                 </Box>
//                                 <Box sx={{ width: '70%', }}>
//                                     <TextField placeholder='Product name...' type='file' sx={{ fontSize: '14px', color: 'red', }} size='small' fullWidth />
//                                 </Box>

//                             </Grid>
//                             <Grid item xs={12} sx={{ mt: '5px', height: '40px', p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Box sx={{ width: '30%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                     <Typography sx={{ fontSize: '16px' }}>sizes</Typography>
//                                     <Typography sx={{ fontSize: '16px', mr: '15px' }}>:</Typography>
//                                 </Box>
//                                 <Box sx={{ width: '70%',display:'flex', justifyContent:'center', alignItems:'center' }}>
//                                     <FormGroup >
//                                         <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="S" />
                                        
//                                     </FormGroup>
//                                     <FormGroup >
//                                         <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="M" />
                                        
//                                     </FormGroup>
//                                     <FormGroup >
//                                         <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="L" />
                                        
//                                     </FormGroup>
//                                     <FormGroup >
//                                         <FormControlLabel control={<Checkbox defaultChecked size='small' />} label="XL" />
                                        
//                                     </FormGroup>
//                                     <FormGroup >
//                                         <FormControlLabel control={<Checkbox defaultChecked  size='small'/>} label="XXL" />
                                        
//                                     </FormGroup>

                                    


//                                 </Box>

//                             </Grid>

//                             <Grid item xs={12} sx={{ mt: '5px', p: '10px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Box sx={{ width: '30%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                     <Typography sx={{ fontSize: '16px' }}>Choose Prod img</Typography>
//                                     <Typography sx={{ fontSize: '16px', mr: '15px' }}>:</Typography>
//                                 </Box>
//                                 <Box sx={{ width: '70%', border: '1px solid black' }}>
//                                     <Box sx={{ height: "30px", width: "100%" }}>
//                                         <Typography sx={{ position: "relative", top: "0px", mt: "4px", textAlign: 'center' }}>
//                                             <input type='file' style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }} fullWidth />
//                                             Choose Image
//                                         </Typography>
//                                     </Box>

//                                 </Box>

//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Box sx={{ width: '100%', mt: '10px', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
//                                     <Box sx={{ width: '14.5%', height: '60px', border: '1px solid black', mr: '10px', }}>

//                                     </Box>
//                                     <Box sx={{ width: '14.5%', height: '60px', border: '1px solid black', mr: '10px' }}>

//                                     </Box>
//                                     <Box sx={{ width: '14.5%', height: '60px', border: '1px solid black', mr: '10px' }}>

//                                     </Box>
//                                     <Box sx={{ width: '14.5%', height: '60px', border: '1px solid black', mr: '10px' }}>

//                                     </Box>
//                                     <Box sx={{ width: '14.5%', height: '60px', border: '1px solid black', mr: '10px' }}>

//                                     </Box>
//                                     <Box sx={{ width: '14.5%', height: '60px', border: '1px solid black', mr: '10px' }}>

//                                     </Box>

//                                 </Box>

//                             </Grid>

//                             <Grid item xs={12} sx={{ p: '8px', mt: '7px', }}>
//                                 <Typography sx={{ fontSize: '17px' }}>Describe Information :</Typography>

//                             </Grid>

//                             <Grid item xs={12} sx={{ p: '8px' }}>
//                                 <Box sx={{ width: '90%' }}>
//                                     <TextField size='small' placeholder='Title..' fullWidth />

//                                 </Box>
//                                 <Box sx={{ width: '100%', display: 'flex' }}>
//                                     <Box sx={{ width: '90%' }}>
//                                         <TextField size='small' placeholder='Description...' sx={{ mt: '10px' }} fullWidth />

//                                     </Box>
//                                     <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                         <AddCircleOutlineIcon sx={{ fontSize: '30px', color: 'green' }} />
//                                     </Box>

//                                 </Box>

//                             </Grid>
//                             <Grid item xs={12} sx={{ p: '8px' }}>
//                                 <Box sx={{ width: '90%' }}>
//                                     <TextField size='small' placeholder='Title..' fullWidth />

//                                 </Box>
//                                 <Box sx={{ width: '100%', display: 'flex' }}>
//                                     <Box sx={{ width: '90%' }}>
//                                         <TextField size='small' placeholder='Description...' sx={{ mt: '10px' }} fullWidth />

//                                     </Box>
//                                     <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                         <AddCircleOutlineIcon sx={{ fontSize: '30px', color: 'green' }} />
//                                     </Box>

//                                 </Box>

//                             </Grid>




//                             <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '20px' }}>
//                                 <Button variant='contained'>Submit</Button>

//                             </Grid>
//                         </Grid>

//                     </Grid>
//                 </Grid>

//             </Modal>
//         </div>
//     );
// }
// export default AddNewProductModal