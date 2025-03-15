import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Dash from "./Dash";
import Chats from "./Chats";
import Signup from "./Signup";
import Referrals from "./Referrals";
import Wallet from "./Wallet";
import FCslots from "./FCslots";
import Topup from "./Topup";
import Withdraw from "./Withdraw";
import Setting from "./Setting";

function Routing()
{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/dash' element={<Dash/>}></Route>
            <Route path='/chats' element={<Chats/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/referrals' element={<Referrals/>}></Route>
            <Route path='/wallet' element={<Wallet/>}></Route>
            <Route path='/fcslots' element={<FCslots/>}></Route>
            <Route path='/topup' element={<Topup/>}></Route>
            <Route path='/withdraw' element={<Withdraw/>}></Route>
            <Route path='/setting' element={<Setting/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Routing;