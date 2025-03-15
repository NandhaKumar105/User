import gfc from '../assets/gfc.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Home() {

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
                <div className='top text-center'>
                    <img src={gfc} width={80}></img>
                    <h5 className='mt-4 '>Login</h5>
                    <h6>Welcome Back !</h6>
                </div>

                <div className='mt-4 email'>
                    <h6 className='email'>Email</h6>
                    <input type="text" className='border border-1- border border-secondary' ></input>
                    <button className='button rounded-1 border border-none d-inline'> <h6 className='sendotp mt-2'> Send OTP</h6>  </button>
                </div>

                <div>
                    <h6 className="otp ms-1">OTP</h6>
                    <div className="otpbox d-flex">
                        <input type="text" className="mt-2 ms-3" maxLength={1}  ></input> <br />
                        <input type="text" className="mt-2 ms-4" maxLength={1}></input>  <br />
                        <input type="text" className="mt-2 ms-4" maxLength={1}></input>   <br />
                        <input type="text" className="mt-2 ms-4" maxLength={1}></input>   <br />
                    </div>
                </div>
                <div className="captcha-box-home mt-4 d-flex text-center flex-column mt-3">
                    <h6 className="entercap-home  ">Captcha</h6>
                    <span className="captcha bg-white mb-2 text-center ">{captcha}</span>
                    <input type="text" placeholder="Enter Captcha" value={userCaptcha}
                        onChange={(e) => setUserCaptcha(e.target.value)}
                        className="captcha-input mt-3 border border-1 border-secondary" />
                </div>

                <Link to='/dash'>   <button onClick={handleVerify} className="submit-btn  text-white  mt-4">
                    Submit
                </button> </Link>
                <p className='size'>Don't you have an account?
                    <Link to="/signup" className='text-decoration-none'><b>Sign Up</b> </Link></p>
                {/* {captchaValid === true && <p className="text-success"> Captcha Verified!</p>}
                        {captchaValid === false && <p className="text-danger"> Incorrect Captcha!</p>} */}

            </div>

        </>
    )
}
export default Home;