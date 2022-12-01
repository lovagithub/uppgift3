import React from 'react'

const ExternaLinkIcon= ({link,icon}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <i className={icon}></i>
            </a>
           
    )
  
}

export default ExternaLinkIcon