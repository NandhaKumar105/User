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




function Wallet() {
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
          <div className="bg-white p-2 icons">
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
                      width: '230px',
                      height: '90vh',
                      marginLeft: "71px",
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
                    <MenuItem sx={{ justifyContent: "center", fontWeight: 'bold' }}>Wallets</MenuItem> </Link>

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

          <div className="mt-1 ms-2 chats ps-3">
            <p> Wallet</p>
          </div>

          <div className="bg-white p-2 ms-3 icons ">
            <Link to="/chats">    <BiSolidMessageRoundedDetail className="h5 iconcolor "></BiSolidMessageRoundedDetail> </Link>
          </div>
        </div>


        <div className="wallet mt-2">

          <div className="d-flex mt-3 ">
            <h6 className="ms-3 text-white referral">Transaction Date</h6>
            <h6 className=" text-white wallets">My Wallet</h6>
          </div>

          <div className="d-flex justify-content-around walvalue mt-1">
            <p>All Day</p>
            <p className="ms-5">$NaN</p>
          </div>

          <div className="d-flex justify-content-around text-white walletoption">
            <h6 className="ms-2">All</h6>
            <h6 className="ms-4">Crypto</h6>
            <h6 className="ms-2">Internal</h6>
          </div>

        </div>

        <div className="mt-4 wallet-button ">
          <button className="text-white border border-none">Top Up</button>
          <button className="ms-2 text-white border border-none">Transfer</button>
          <button className="ms-2 text-white border border-none">Withdraw</button>
        </div>

      </div>

    </>
  )
}
export default Wallet;