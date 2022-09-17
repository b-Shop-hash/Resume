import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import React from "react";

class SocialIcon extends React.Component {
    render () {
        return (
            ReactDOM.render(<SocialIcon url="https://www.linkedin.com/in/armin-shokri-07288b245" />, document.getElementById('SocialMedias'))
        )
    }
}