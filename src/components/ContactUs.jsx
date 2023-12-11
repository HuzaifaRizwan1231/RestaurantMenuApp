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
                    <div>

                    <iframe className='mx-auto mt-4 w-100'  height="400" frameborder="0" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Milaad%20St,%20Block%20B%20Faisal%20Town%20Lahore+(FAST%20NUCES%20Lahore)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
                    </div>
                    
            </div>
          
        </div>
    
    </>
  )
}
