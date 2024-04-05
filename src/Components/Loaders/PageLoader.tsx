import React from 'react'
import loading from '../../../public/svg/loading.svg'

const PageLoader = () => {
  return (
    <div
        style={{position: "absolute", width:"100%",height:"90dvh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", overflow:"hidden", zIndex: 9999}}
    >
      <img src={loading} style={{width: "30vw", height:"30vh"}} />
    </div>
  )
}

export default PageLoader
