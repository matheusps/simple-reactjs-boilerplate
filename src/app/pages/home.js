import React from "react";

import Navbar from "../components/navbar"
import Footer from "../components/footer"

class Home extends React.Component{

    render = () =>{
        return(
            <div>
                <Navbar />
                <p>This is the home page</p>
                <Footer />
            </div>
        );
    }
}

export default Home