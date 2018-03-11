import React from "react";

import Navbar from "../components/navbar"
import Footer from "../components/footer"

class About extends React.Component{

    render = () =>{
        return(
            <div>
                <Navbar />
                <h1>About Page</h1>
                <p>This is a description of the about page</p>
                <Footer />
            </div>
        );
    }
}

export default About