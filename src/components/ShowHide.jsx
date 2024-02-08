import React, {useState} from 'react'



const ShowHide = () => {
    const [show, setShow] = useState(false);
    
    const handleClik = (event) => {
        setShow(!show);
    }

    
  return (
    <div>
   
         <button onClick={handleClik}> {show ? "HIDE" : "SHOW"}</button>
       
    </div>
  )
}

export default ShowHide
