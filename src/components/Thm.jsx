import React from 'react'

function Thm() {
    const iFrame = '<div><script src="https://tryhackme.com/badge/19051"></script></div>';
    return (
        <div>
        <p><iframe title={"badge"} srcDoc={iFrame} style={{ borderWidth: 0}} /></p>
      </div>
    )
}

export default Thm