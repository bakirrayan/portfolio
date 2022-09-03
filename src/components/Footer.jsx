import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon sx={[{ color: "#d4dfc7" ,fontSize: 60, '&:hover': {color: '#55a694'} }]} onClick={() => window.open('https://github.com/bakirrayan')} />
        <LinkedInIcon sx={[{ color: "#d4dfc7" ,fontSize: 60, '&:hover': {color: '#55a694'} }]} onClick={() => window.open('https://www.linkedin.com/in/rayan-bakir/')} />
      </div>
      <p> &copy; 2022 Rayan BAKIR</p>
    </div>
  );
}

export default Footer;