import React from "react";

import "./404Page.css"; 

 function _404Page() {
    return(
        <div class="container">
        <h1>404</h1>
        <p>The page you were looking for doesn't exist or has been moved.</p>
        <p>Go back to <a href="/">homepage</a>.</p>
      </div>
    );
}


export default _404Page;