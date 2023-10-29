'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext, useEffect, useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from '@mui/material';
import { context } from '@/Global/Global_Context';




const EditCatModal = ({ open, setOpen, sendCat ,setSendCat}) => {
  const { mainData, dispatch } = useContext(context)
  // const [data, setData] = useState({})

  // useEffect(() => {
  //   setData({
  //     cat_Id: sendCat.cat_Id,
  //     catName: sendCat.catName,
  //     isCatAvailable: sendCat.isCatAvailable,
  //   });
   
  // }, [sendCat])

  const handleClose = () => {
    setOpen(false)
  }
  const addCategorieHandler = (e) => {
    setSendCat({ ...sendCat, catName: e.target.value });
  }

  const checkHandler = () => {
    setSendCat({ ...sendCat, isCatAvailable: !sendCat.isCatAvailable })
  }

  const SubmitHandler = () => {
    const editCatFun = mainData.map((ele) => {
      // console.log(ele)
      if (ele.cat_Id == sendCat.cat_Id) {
        return { ...ele, catName: sendCat.catName, isCatAvailable: sendCat.isCatAvailable, cat_Id: sendCat.cat_Id }
      }
      else {
        return ele
      }
    })
    setOpen(false);

    dispatch({
      type: 'SUBMIT_EDITDETAILS',
      payload: (editCatFun)

    })

  }
  // console.log(data)

 


  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Grid container sx={{ height: 'fit-content', width: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={12} sx={{ height: '220px', borderRadius: '10px', bgcolor: 'white' }}>
            <Grid container>
              <Grid item xs={12} sx={{ p: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '20px', fontWeight: '800', }}>ADD NEW CATEGORIES</Typography>
              </Grid>

              <Grid item xs={12} sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '30%' }}>
                  <Typography sx={{ fontSize: '16px' }}>Categorie Name :</Typography>
                </Box>
                <Box sx={{ width: '70%', color: 'red' }}>
                  <TextField placeholder='Enter categ...' type='text' sx={{ fontSize: '14px', color: 'red', border: '1px solid white' }} size='small' fullWidth onChange={addCategorieHandler} name='catName' value={sendCat.catName} />
                </Box>


              </Grid>

              <Grid item xs={12} sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '25%' }}>
                  <Typography sx={{ fontSize: '16px' }} >Is available:</Typography>
                </Box>
                <Box sx={{ width: '75%' }}>

                  {/* <Checkbox  value={data.isCatAvailable} onChange={checkHandler} checked={data.isCatAvailable} /> */}
                  <FormGroup>

                    <FormControlLabel control={<Checkbox value={sendCat.isCatAvailable} checked={sendCat.isCatAvailable ? true : false} onChange={(e) => { checkHandler(e) }} />} />
                  </FormGroup>
                </Box>


              </Grid>

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant='contained' onClick={SubmitHandler}>Submit</Button>

              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </Modal>
    </div>
  );
}
export default EditCatModal