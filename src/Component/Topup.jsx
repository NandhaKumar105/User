import { IoGrid } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

import { Link } from "react-router-dom";

import * as React from 'react';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function Topup() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <>

            <div className="container">
                <div className="headericons ">
                    <div className="bg-white p-2 icons ">
                        <IoGrid className="h5 iconcolor" id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick} />

                        <AnimatePresence>
                            {open && (
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{ 'aria-labelledby': 'basic-button', }}

                                    PaperProps={{
                                        component: motion.div,
                                        initial: { x: "0%", opacity: 0 },
                                        animate: { x: 0, opacity: 1 },
                                        exit: { x: "-100%", opacity: 0 },
                                        transition: { duration: 0.1, ease: "easeInOut" },
                                        sx: {
                                            width: '240px',
                                            height: '90vh',
                                            marginLeft: "83px",
                                            marginTop: "-47px",
                                            padding: "80px",
                                            textAlign: "center",
                                            backgroundColor: "rgb(255 255 255) ",
                                            color: "darkblue",
                                            borderRadius: "16px",
                                        }
                                    }}

                                    transformOrigin={{
                                        vertical: "left",
                                        horizontal: "center",
                                    }}>

                                    <div> <MdKeyboardArrowRight onClick={handleClose} className="rightarrow" /></div>

                                    <Link to="/dash" className="text-decoration-none">
                                        <MenuItem sx={{ justifyContent: "center" }}>Dashboard</MenuItem>  </Link>          {/*onClick={handleClose}*/}

                                    <Link to="/wallet" className="text-decoration-none">
                                        <MenuItem sx={{ justifyContent: "center" }}>Wallets</MenuItem> </Link>

                                    <Link to="/fcslots" className="text-decoration-none">
                                        <MenuItem sx={{ justifyContent: "center" }}>FC Slots</MenuItem> </Link>

                                    <Link to="/referrals" className="text-decoration-none">
                                        <MenuItem sx={{ justifyContent: "center" }}>Referrals</MenuItem></Link>

                                    <Link to="/chats" className="text-decoration-none">
                                        <MenuItem sx={{ justifyContent: "center" }}>Chats</MenuItem></Link>

                                    <Link to="/setting" className="text-decoration-none">
                                        <MenuItem sx={{ justifyContent: "center" }}>Settings</MenuItem> </Link>
                                </Menu>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="bg-white p-2 icons ms-4">
                        <Link to="/dash">   <IoIosArrowBack className="h5 iconcolor "></IoIosArrowBack> </Link>
                    </div>

                    <div className="mt-1 ms-4 chats">
                        <p> Top Up</p>
                    </div>

                    <div className="bg-white p-2 ms-4 icons ">
                        <Link to="/chats">    <BiSolidMessageRoundedDetail className="h5 iconcolor "></BiSolidMessageRoundedDetail> </Link>
                    </div>
                </div>

                <div className="fcslot">

                    <div className="d-flex mt-4 justify-content-around wtdsize ">
                        <h6 className="ms-2 text-white "><b>TopUp</b></h6>
                        <Link to="/withdraw" className="text-decoration-none">  <h6 className=" ms-3 text-white ">Withdraw</h6> </Link>
                    </div>

                    <div className="topcolor p-1 mt-3">
                        <p className="mt-2 ms-2 signup">Select Top Up</p>
                        <select class="form-select" aria-label="Default select example" >
                            <option selected disabled hidden>Select </option>
                            <option value="1">100</option>
                            <option value="2">200</option>
                            <option value="3">500</option>
                        </select>
                    </div>

                    <div className="d-flex mt-3 ms-2">
                        <h6 className="ms-2 signup">Pay With</h6>
                        <input type="radio" className="ms-5 radio" /><h6 className="ms-1 ">Crypto</h6>
                    </div>

                    <div>
                        <button className="topupbtn text-white mt-2" >Proceed</button>
                    </div>



                </div>
            </div>


        </>

    )
}
export default Topup;