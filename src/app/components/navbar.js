import React from "react"
import { Link } from "react-router-dom"

/**
 * Navbar component
 */
class Navbar extends React.Component{

    render = (props) => {

        return(
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">about</Link>
                            </li>
                        </ul>
                    </div>
              </nav>
        );
    }
}

export default Navbar