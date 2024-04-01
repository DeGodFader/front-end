import { Typography } from 'antd'


const { Title } = Typography

const AppLoader = () => {
  return (
    <div
        style={{position: "absolute", width:"100%",height:"100dvh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", overflow:"hidden"}}
    >
      <img src='./svg/loading.svg' style={{width: "30vw", height:"30vh"}} />
      <div style={{textAlign:'center'}}>
        <Title style={{fontFamily: "Chewy", fontSize:60, marginBottom:"-15px"}}>KinoVerse</Title>
        <Title style={{fontFamily: "QuicSand", fontSize:40, marginTop:0}} className='show'>It's Just Entertainment</Title>
      </div>
    </div>
  )
}

export default AppLoader
