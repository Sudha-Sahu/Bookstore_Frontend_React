import React from 'react'
import "./userCss.css";

const BackgroundImage = ({title}) => {
    return (
        <div className="child1">
            <img src="./assets/signinlogo.png" alt="" className="logo_img" />
            <div className="text1">
              {title}
            </div>
        </div>
    )
}

export default BackgroundImage