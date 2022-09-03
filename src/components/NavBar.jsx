import React, {useEffect, useState} from 'react'
import '../styles/NavBar.css'
import { Link, useLocation } from 'react-router-dom';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';

function NavBar() {
  const [menu, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  } , [location]);

  return (
    <div className='navbar' id={menu ? "open":"close"}>
      <div className="toggleButton">
        <button onClick={() => {
          setIsOpen((prev) => !prev);
          }}
        >
          <ReorderRoundedIcon sx={{ color: "#d4dfc7", "& :hover": { color: "#080a31" }}}/>
        </button>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/education'>Education</Link>
        <Link to='/contactme'>Contact-me</Link>
      </div>
    </div>
  )
}

export default NavBar