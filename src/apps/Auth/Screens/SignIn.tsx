import { Button, Card, Flex, Form, Input, Row, Space, Typography } from 'antd'
import { PrimaryButton } from '../../../Components/Buttons/Buttons'
import { AppleFilled, FacebookFilled, GoogleCircleFilled, GoogleOutlined, KeyOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'
import FormItem from 'antd/es/form/FormItem'
import { useState } from 'react'
import LocalStorage from '../../../Helpers/storage'

const { Title, Text} = Typography

const SignIn = () => {
  const navigate=useNavigate()

  const [loading, setLoading]= useState<boolean>(false)
  const [formData, setFormData]= useState<any>({
    username: "",
    password: ""
  })

  const isDisabled=()=>{
    return !(formData.username && formData.password)
  }

  const Login=()=>{
    console.log("Here")
    setLoading(true)
    setTimeout(() => {
      LocalStorage.storeApp("users")
      LocalStorage.storeCurrentUser({username: formData.username, email:"teacher@mail.com"})
      // window.notify({ type: "SUCCESS", message: "Logged In" })
      setTimeout(() => {
        document.dispatchEvent(new Event("changeapp"))
        location.assign("/")
      }, 750)
    }, 2000);
  }
  
  return (
    <Space direction="vertical" align="center" style={{width:"100dvw", gap:20}}>
        <Title style={{fontSize:40}}>KinoVerse</Title>
        <Card style={{backgroundColor:"var(--color-neutral-800)", border:"none", width:"80dvw"}}>
          <div style={{display:"flex", flexDirection:"column",alignItems:"center",width:"28rem", gap:5}}>
            <img src='./svg/logo.svg' style={{height:"17rem"}}/>
            <Text style={{fontSize:14}} strong>It's Just Entertainment</Text>
            <Form
              onFinish={Login}
              onFinishFailed={()=>{}}
              name='login'
              style={{marginTop:"3rem"}}
            >
              <Form.Item
                name={"username"}
              >
                <div style={{marginTop:20, display:"flex", justifyContent:"space-between", alignSelf:"stretch", padding:"2px 1px", alignItems:"center"}}>
                  <UserOutlined style={{color:"var(--color-primary-800)"}}/>
                  <Input 
                    style={{width: "90%", borderRadius:"25rem"}} 
                    placeholder='Enter UserName/Email'
                    onChange={(e)=>setFormData({...formData, username:e.target.value})}
                  />
                </div>
              </Form.Item>
              <Form.Item
                name={"password"}
              >
                <div style={{display:"flex", justifyContent:"space-between", alignSelf:"stretch", padding:"2px 1px", alignItems:"center"}}>
                  <LockOutlined style={{color:"var(--color-primary-800)"}}/>
                  <Input.Password 
                    style={{width: "90%", borderRadius:"25rem"}} 
                    placeholder='Enter Password'
                    onChange={(e)=>setFormData({...formData, password:e.target.value})}
                  />
                </div>
                <Text style={{fontSize:12, color:"var(--color-5-500)", position:"absolute", right:0, cursor:"pointer"}} onClick={()=>navigate(`forgot-password`)}>Forgot Password</Text>
              </Form.Item>
              <Form.Item
                style={{marginTop:"8rem"}}
              >
                  <PrimaryButton>
                    <Button type='primary' htmlType='submit' disabled={isDisabled()} size='large' loading={loading} style={{width: "24rem", marginBottom:"2rem", fontWeight:"bold"}}>
                        LOGIN
                    </Button>
                </PrimaryButton>
              </Form.Item>
            </Form>
            <div style={{marginTop:"9rem", position:'relative', left:"-5rem"}}>
                <Text style={{fontSize:12}}>Do not have an account?... <span style={{color:"var(--color-5-500)", cursor:"pointer"}} onClick={()=>navigate(`/sign-up`)}>Signup</span></Text>
            </div>
          </div>
        </Card>
    </Space>
  )
}

export default SignIn
