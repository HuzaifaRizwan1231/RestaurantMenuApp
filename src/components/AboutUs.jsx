import React, { useEffect } from 'react'

export default function AboutUs(props) {


  useEffect(() => {
      props.setProgress(30)
      setTimeout(() => {
        props.setProgress(100)
      }, 300);
  }, [])
  
 
  return (
   <>
        <div className="container">
            <h1 className="text-center display-6 my-3"><b>ABOUT US</b></h1>
            <div className="container AboutUs mb-4  "></div>
            <div className="container AboutUs mb-5"></div>
        </div>
    
   </>
  )
}
