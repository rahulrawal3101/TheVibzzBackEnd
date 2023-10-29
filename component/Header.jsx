'use client'
import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
// import '../pages/Homepage.css';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import logo from '../assets/logo.webp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SideDrawer from './SideDrawer';
import RightSideDrawer from './RightSideDrawer';
import WishlistDrawer from './WishlistDrawer';
import MyCartDrawer from './MyCartDrawer';


export default function Header() {


    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openWishlist, setOpenWishlist] = useState(false);
    const [openCart, setOpenCart] = useState(false)
   




    const openDrawer = () => {
        setOpen(true)
    }

    const rightDrawerOpen = () => {
        setOpenLogin(true)

    }

    const wishlistDrawerOpen = () => {
        setOpenWishlist(true);
        console.log('hello')
    }

    const myCartHandler = () => {
        setOpenCart(true)
    }
    // const { state } = useBottomBa()
    // const navigate = useNavigate()
    const images = [{
        icon: <ReceiptIcon sx={{ fontSize: '16px' }} />,
        caption: " Upto 50% off for your first order Read more"
    },
    {

        icon: <ReceiptIcon sx={{ fontSize: '16px' }} />,
        caption: " Upto 50% off for your first order Read more"
    },
    {
        icon: <ReceiptIcon sx={{ fontSize: '16px' }} />,
        caption: " Upto 50% off for your first order Read more"
    },
    {

        icon: <ReceiptIcon sx={{ fontSize: '16px' }} />,
        caption: " Upto 50% off for your first order Read more"
    },

    ]



    const proprietes = {
        duration: 3000,
        transitionDuration: 200,
        infinite: false,
        arrows: false,
        
        


    }

    return (



        <Grid item xs={12}>
            <AppBar sx={{ bgcolor: 'black' }}>
                <Toolbar disableGutters sx={{ borderBottom: "1px solid #757575", display: "flex", flexDirection: "column", }}>

                    <Grid container sx={{ bgcolor: "#212121", padding: '5px 0px' }}>

                        <Grid item lg={3} sx={{ display: { lg: "flex", md: 'none', sm: 'none', xs: 'none' }, justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "11px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <AddIcCallIcon sx={{ fontSize: "15px", mr: "5px" }} /> CALL TO US! +91-972723423
                            </Typography>
                        </Grid>

                        <Grid item lg={6} md={12} sm={12} xs={12} sx={{ display: "flex", justifyContent: "center",  }}>
                          
                            <Grid container>
                                <Grid item xs={1} >
                                    <KeyboardArrowLeftIcon sx={{ fontWeight: "300", fontSize: '28px' }} />
                                </Grid>
                                <Grid item xs={10} sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                                    <Box sx={{ width: '300px' }}>
                                        <Slide {...proprietes} easing='linear' >
                                            {
                                                images.map((ele, index) => (
                                                    <Box key={index} sx={{ pt: '3px', display:'flex', justifyContent: 'center', alignItems: 'center', height: '30px', width: '100%',  }}>
                                                        <Typography sx={{ fontSize: '14px', textAlign: 'center' }}>{ele.icon}{ele.caption}</Typography>
                                                    </Box>
                                                ))
                                            }

                                        </Slide>

                                    </Box>


                                </Grid>
                                <Grid item xs={1} >
                                    <KeyboardArrowRightIcon sx={{ fontWeight: "300", fontSize: '28px' }} />
                                </Grid>
                            </Grid>


                        </Grid>


                        <Grid item lg={3} sx={{ display: { lg: "flex", md: 'none', sm: 'none', xs: 'none' }, justifyContent: 'left', alignItems: 'center', }}>
                            <Box sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '150px', }} onClick={rightDrawerOpen}>
                                <PersonOutlineOutlinedIcon sx={{ fontSize: '20px' }} />
                                <Typography sx={{ fontWeight: '600', fontSize: '13px' }}>LOGIN/SIGNUP</Typography>
                            </Box>

                            <Box sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '150px', ml: '1px' }} onClick={wishlistDrawerOpen}>
                                <FavoriteBorderOutlinedIcon sx={{ fontSize: '20px' }} />
                                <Typography sx={{ fontWeight: '600', fontSize: '13px' }}>WHISHLIST</Typography>
                            </Box>

                        </Grid>
                    </Grid>
                    <Grid container sx={{ padding: '5px 0px', display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' } }}>
                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>

                            <Box sx={{ width: '90px', height: '60px', mr: '65px', position: 'relative' }}>
                                <Image src={logo} alt='logo' fill objectFit='cover' />
                            </Box>
                            <Box sx={{ width: '170px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FacebookIcon sx={{ fontSize: '23px', }} />
                                <InstagramIcon sx={{ fontSize: '23px', ml: '4px' }} />
                                <TwitterIcon sx={{ fontSize: '23px', ml: '5px', border: '1px solid white', color: 'black', bgcolor: 'white', borderRadius: '50%' }} />

                            </Box>
                        </Grid>
                        <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', }}>
                            <Box sx={{ width: '95%', border: '1.5px solid grey', height: '35px', display: 'flex' }}>
                                <Box sx={{ width: '30%', height: '100%', borderRight: '1px solid grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <select style={{ width: '100%', height: '100%', background: 'none', border: 'none', outline: 'none', textAlign: 'center', color:'white' }}>
                                        <option value="saab" style={{ color: 'black' }}>All Categories</option>
                                        <option value="opel" style={{ color: 'black' }}>Couple Shirt</option>
                                        <option value="audi" style={{ color: 'black' }}>Formal Shirt</option>
                                        <option value="volvo" style={{ color: 'black' }} >Man’s Full Sleeve</option>
                                        <option value="saab" style={{ color: 'black' }}>Man’s Half Sleeve</option>
                                        <option value="opel" style={{ color: 'black' }}>Men T-shirt</option>
                                        <option value="audi" style={{ color: 'black' }}>Men’s/Women’s</option>
                                        <option value="audi" style={{ color: 'black' }}>Uncategorized</option>
                                        <option value="audi" style={{ color: 'black' }}>Women’s Full Sleeve</option>
                                        <option value="audi" style={{ color: 'black' }}>Women’s Half Sleeve</option>
                                    </select>

                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '68%' }}>
                                    <input type='text' placeholder='Type here...' style={{ width: '100%', height: '100%', background: 'none', marginLeft: '10px', fontSize: '14px', border: 'none', outline: 'none',color:'white' }} />
                                    <SearchIcon sx={{ fontSize: '22px' }} />

                                </Box>


                            </Box>

                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                            <Button sx={{ cursor: 'pointer', bgcolor: 'white', color: 'black', '&:hover': { bgcolor: 'white', color: 'black' }, ml: '30px', fontWeight: '900', fontSize: '13px' }} onClick={myCartHandler}>
                                <ShoppingBagOutlinedIcon sx={{ fontSize: '21px', mb: '3px' }} />MY CART ₹0.00


                            </Button>

                        </Grid>

                    </Grid>

                    <Grid container sx={{ display: { lg: 'none', md: 'flex', sm: 'flex', xs: 'flex' }, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Grid item lg={8} md={8} sm={10} xs={11} >
                            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Grid item xs={3} >
                                    <MenuOutlinedIcon sx={{ fontSize: '30px', cursor: 'pointer' }} onClick={openDrawer} />

                                </Grid>
                                <Grid item xs={6} sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                                    <Box sx={{ width:{ lg:'90px', md:'90px',sm:'70px', xs:'50px' }, height: {lg:'60px', md:'60px', sm:'40px', xs:'35px'}, position: 'relative', }}>
                                        <Image src={logo} alt='logo' fill objectFit='cover' />


                                    </Box>

                                </Grid>
                                <Grid item xs={3} sx={{ display:'flex', justifyContent:'right', alignItems:'center'}}>
                                    <PersonOutlineOutlinedIcon sx={{ fontSize: '30px' }} />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '98%', border: '2px solid grey', padding: '5px', mb: '10px' }}>
                                        <input type='text' placeholder='Type here...' style={{ width: '100%', height: '100%', background: 'none', marginLeft: '10px', fontSize: '14px', border: 'none', outline: 'none' }} />
                                        <SearchIcon sx={{ fontSize: '22px' }} />

                                    </Box>

                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>




                </Toolbar>
            </AppBar>
            {/* categories  */}
            <SideDrawer open={open} setOpen={setOpen} />
            <RightSideDrawer open={openLogin} setOpen={setOpenLogin} />
            <WishlistDrawer open={openWishlist} setOpen={setOpenWishlist} />
            <MyCartDrawer open={openCart} setOpen={setOpenCart} />





        </Grid >

    );
}