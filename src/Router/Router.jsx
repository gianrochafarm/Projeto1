import React from "react";
import { Route, Routes } from "react-router-dom";
import { Crm } from "../crm/Crm";
import { DefaultLayout } from "../defaultLayout/index";
import { Home } from "../home/Home";



export function Router() {

    return ( <div>
        <Routes>
            {/* <Route path="/" element={<DefaultLayout/>}> */}
            <Route path="/" element={<Home/>} />
            <Route path="/1" element={<Crm/>} />            
            {/* </Route>  */}
        </Routes>
 
    </div>
        )
}
