import React, { useEffect } from 'react'


export default function ContactUs(props) {

  useEffect(() => {
    props.setProgress(30)
    setTimeout(() => {
      props.setProgress(100)
    }, 300)
    props.setNavigateTo("contact")
    props.KeepLoggedIn();
  }, [])
  
  
  return (
    <>
        <div className="container">
            <h1 className="text-center display-6 my-3"><b>CONTACT US</b></h1>
            <div className="container ContactUs text-center py-4" >
                    <h1><i className="fa-solid fa-phone m-2" style={{color:'#9ca3af'}}></i>HEAD OFFICE</h1>
                    <p className="mb-2"><b>0322-5300470</b></p>
                    <h1><i className="fa-solid fa-location-dot m-2" style={{color:'#9ca3af'}}></i>LOCATION</h1>
                    <p ><b>House No. 182, Block No 5, Bahria Town.</b></p>
                    
            </div>
          
        </div>
    
    </>
  )
}
