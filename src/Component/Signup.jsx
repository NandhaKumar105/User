import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Signup() {

    const [captcha, setCaptcha] = useState("");
    const [userCaptcha, setUserCaptcha] = useState("");
    const [captchaValid, setCaptchaValid] = useState(null);

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
        setCaptcha(generateCaptcha());
        
    }, []);

    return (

        <>
            <div className="container">
                <div className="arrow-signup">
                    <Link to='/'><IoIosArrowBack className="h3 iconcolor "></IoIosArrowBack></Link>
                </div>

                <div>
                    <p className="text-center signup">Sign Up</p>
                    <p className="createacc">Create an Account</p>
                </div>


                <div className='mt-1 email'>
                    <h6 className='referral'>Referral ID</h6>
                    <input type="text" className='border border-1- border border-secondary' placeholder="Enter Referral ID" ></input>
                    <button className='button rounded-1 border border-none d-inline'> <h6 className='refer mt-2'> Verify</h6>  </button>

                </div>

                <div className="mt-3 email">
                    <h6 className="">Enter Your Name</h6>
                    <input type="text" className="border border-secondary"></input>
                </div>

                <div className='mt-3 email'>
                    <h6 className='email'>Email</h6>
                    <input type="text" className='border border-1- border border-secondary' ></input>
                    <button className='button rounded-1 border border-none d-inline'> <h6 className='sendotp mt-2'> Send OTP</h6>  </button>

                </div>

                <div>
                    <h6 className="otp ms-1 mt-3">OTP</h6>
                    <div className="otpbox d-flex">
                        <input type="text" className="mt-2 ms-3" maxLength={1}  ></input> <br />
                        <input type="text" className="mt-2 ms-4" maxLength={1}></input>  <br />
                        <input type="text" className="mt-2 ms-4" maxLength={1}></input>   <br />
                        <input type="text" className="mt-2 ms-4" maxLength={1}></input>   <br />
                    </div>
                </div>

                <div className="captcha-box-home mt-3 d-flex text-center flex-column mt-3">
                    <h6 className="entercap-home  ">Captcha</h6>
                    <span className="captcha bg-white mb-2 text-center ">{captcha}</span>
                    <input type="text" placeholder="Enter Captcha" value={userCaptcha}
                        onChange={(e) => setUserCaptcha(e.target.value)}
                        className="captcha-input mt-3 border border-1 border-secondary" />
                </div>

                <button onClick={handleVerify} className="submit-btn  text-white  mt-3">
                    Submit
                </button>
                <p className='size'>Don't you have an account? <a href="#" className='text-decoration-none'><b>Login</b></a></p>

            </div>

        </>
    )
}
export default Signup;