import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import Application from "./pages/application"
import 'bootstrap'

const app = document.getElementById('app')

render((
    <BrowserRouter>
        <Application />
    </BrowserRouter>
), app);