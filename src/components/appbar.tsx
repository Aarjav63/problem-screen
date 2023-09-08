import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

function AppbarComponent(){
    return (
        <div style={{
            backgroundColor: "#000100e4",
            height: "4rem",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 2rem"
        }}>
            <div >
                <h3>Appbar</h3>
            </div>
            <div style={{display: "flex"}}>
                <span onClick={()=>{}} style={{cursor: 'pointer'}}>Register</span>
                <span style={{padding: "0px 10px"}}>or</span>
                <span onClick={()=>{}} style={{cursor: 'pointer'}}>Sign in</span>
                
            </div>
        </div>
    )
}

const Appbar = ({ children } : PropsWithChildren) => {
    return (
        <RecoilRoot>
            <AppbarComponent/>
            {children}
        </RecoilRoot>
    );
}

export default Appbar;