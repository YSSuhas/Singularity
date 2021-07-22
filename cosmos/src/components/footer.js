import React from 'react'
import './footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/yssuhas/">
                <LinkedInIcon fontSize="small" />
            </a>
            <p>By YSS</p>
            <a href="https://github.com/YSSuhas">
                <GitHubIcon fontSize="small" />
            </a>
        </div>
    )
}

export default Footer