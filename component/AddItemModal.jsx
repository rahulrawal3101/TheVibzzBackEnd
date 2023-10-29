'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext, useEffect, useState } from 'react';
import { Checkbox, Grid, TextField,FormGroup,FormControlLabel  } from '@mui/material';
import { context } from '@/Global/Global_Context';




const AddNewItemModal = ({ open, setOpen }) => {
  const { mainData, dispatch } = useContext(context)
  const [data, setData] = useState(
    {
      cat_Id: new Date().getTime(),
      catName: '',
      isCatAvailable: false,
    }
  )

  const handleClose = () => {
    setOpen(false)
  }
  const addCategorieHandler = (e) => {
    setData({ ...data, catName: e.target.value })
  }

  const checkHandler = () => {
    setData({ ...data, isCatAvailable: !data.isCatAvailable })
  }

  const createHandler = () => {

    dispatch({
      type: 'CREATE_CATEGORIES',
      payload: (data)
    });
    setOpen(false);
    setData({
      cat_Id: new Date().getTime(),
      catName: "",
      isCatAvailable: false,
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
                  <TextField placeholder='Enter categ...' type='text' sx={{ fontSize: '14px', color: 'red', border: '1px solid white' }} size='small' fullWidth onChange={addCategorieHandler} name='catName' value={data.catName} />
                </Box>


              </Grid>

              <Grid item xs={12} sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '25%' }}>
                  <Typography sx={{ fontSize: '16px' }} >Is available:</Typography>
                </Box>
                <Box sx={{ width: '75%' }}>

                  {/* <Checkbox value={data.isCatAvailable} onChange={(e)=>{checkHandler(e)}} checked={data.isCatAvailable} /> */}
                  <FormGroup>

                    <FormControlLabel control={<Checkbox value={data.isCatAvailable} onChange={(e) => { checkHandler(e) }} />} />
                  </FormGroup>
                 
                  
                </Box>


              </Grid>

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant='contained' onClick={createHandler}>Create</Button>

              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </Modal>
    </div>
  );
}
export default AddNewItemModal