import React from 'react'
import './newsitem.css';
import img_avatar2 from './img_avatar2.png';
const NewsItem =(props)=> {
  
    let {title, description,imageurl,newsurl} = props
    return (
      <>
       <div className="card">
      
        <img src={imageurl?imageurl:img_avatar2} alt="Avatar" style={{width:"100%"}}/>
        <div className="container">
          <h4 style={{margin: "3px"}}><b>{title} title is not avail</b></h4>
          <p style={{marginTop:"5px"}}>
           {description}desc is not avail</p>
        
        <a href={newsurl}target="_parent"><button className='btnDetail'>for Detail</button></a>

        </div>
      </div>
      
      </>
    )
  }


export default NewsItem