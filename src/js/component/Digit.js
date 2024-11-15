import React from 'react'

const styleBox = {
    marginTop: 10,
    marginBottom: 10,
   
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "light",
    fontSize: "12vw"
}
const styleContent = {
    color: "white",
    
}

function Digit(props) {
  return (
    <>
    <div className='' style={styleBox}>
        {props.content}
    </div>
   
    </>
  )
}

export default Digit