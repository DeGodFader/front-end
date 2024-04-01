import React from 'react'

const PageLoader = () => {
  return (
    <div
        style={{position: "absolute", width:"100%",height:"90dvh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", overflow:"hidden"}}
    >
      <img src='./svg/loading.svg' style={{width: "30vw", height:"30vh"}} />
    </div>
  )
}

export default PageLoader
