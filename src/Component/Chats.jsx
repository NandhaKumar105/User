import { IoGrid } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function Chats() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }


  const [input, setinput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [amount, setAmount] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [captchaValid, setCaptchaValid] = useState(null);

  const [otp, setOtp] = useState(Math.floor(1000 + Math.random() * 9000).toString());

  const items = ["AA0001", "AA0002", "AA0003", "AA0004", "AA0005", "AA0006"];
  const dropdownRef = useRef(null);

  const handleInputClick = () => {
    setShowDropdown(true);
  };



  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  const handleSelect = (item) => {
    setinput(item);
    setSelectedItem(item);
    setShowDropdown(false);
    setCaptcha(generateCaptcha());
  };

  const generateCaptcha = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const handleVerify = () => {
    if (userCaptcha === captcha) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
                      width: '230px',
                      height: '90vh',
                      marginLeft: "75px",
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
                    <MenuItem sx={{ justifyContent: "center", fontWeight: 'bold' }}>Chats</MenuItem></Link>

                  <Link to="/setting" className="text-decoration-none">
                    <MenuItem sx={{ justifyContent: "center" }}>Settings</MenuItem> </Link>
                </Menu>
              )}
            </AnimatePresence>
          </div>

          <div className="bg-white p-2 icons ms-3">
            <Link to="/dash">   <IoIosArrowBack className="h5 iconcolor "></IoIosArrowBack> </Link>
          </div>

          <div className="mt-1 ms-4 chats">
            <h5>Chats</h5>
          </div>

          <div className="bg-white p-2 ms-4 icons ">
            <BiSolidMessageRoundedDetail className="h5 iconcolor "></BiSolidMessageRoundedDetail>
          </div>
        </div>

        <div className="search" ref={dropdownRef}>
          <input type="text" placeholder="Search User by UserId" onChange={(e) => setinput(e.target.value)} value={input}
            onClick={handleInputClick} className="search-input" ></input>

          {showDropdown && (
            <ul className="dropdown">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <li key={index} onClick={() => handleSelect(item)}>
                    {item}
                  </li>
                ))
              ) : (
                <li>No results found</li>
              )}
            </ul>
          )}
        </div>

        {selectedItem && (
          <div className="extra-fields  text-center">
            <div className="mt-4">
              <h6>Fund Transfer: {input}</h6>

            </div>
            <input type="text" placeholder="Enter Amount" value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="amount border border-1 border-secondary" />
            <p className=" d-flex justify-content-start ms-3 para">Minimum internal transaction is 10
              <br /> Internal transaction fee is 2</p>
            {/* <p className=" d-flex justify-content-start ms-2 para2">Internal transaction fee is 2</p> */}

            <div className="captcha-box ">
              <h6 className="Entercap">Enter Captcha</h6>
              <span className="captcha bg-white mb-2">{captcha}</span>
              <input type="text" placeholder="Enter Captcha" value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                className="captcha-input mt-3 border border-1 border-secondary" />

              {captchaValid === true && <p className="text-success"> Captcha Verified!</p>}
              {captchaValid === false && <p className="text-danger"> Incorrect Captcha!</p>}

              <button onClick={handleVerify} className="pay-btn  text-white rounded-3 mt-1 ">Verify</button>

              <div>
                <h6 className="otp ms-3 mt-2"> OTP   {otp} </h6>

                <div className="otpbox d-flex">
                  <input type="text" className="mt-2 ms-3" maxLength={1}  ></input> <br />
                  <input type="text" className="mt-2 ms-4" maxLength={1}></input>  <br />
                  <input type="text" className="mt-2 ms-4" maxLength={1}></input>   <br />
                  <input type="text" className="mt-2 ms-4" maxLength={1}></input>   <br />
                </div>
              </div>

              <button className="pay-btn  text-white rounded-3 mt-4">
                Transfer
              </button>

            </div>
          </div>
        )}

      </div>

    </>
  )
}
export default Chats;