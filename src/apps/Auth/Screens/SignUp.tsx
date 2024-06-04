import { Button, Card, Checkbox, Flex, Form, Input, Row, Space, Typography } from 'antd'
import { PrimaryButton } from '../../../Components/Buttons/Buttons'
import { AppleFilled, FacebookFilled, GoogleCircleFilled, GoogleOutlined, KeyOutlined, LockOutlined, MailOutlined, UnlockOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import Password from 'antd/es/input/Password'
import FormItem from 'antd/es/form/FormItem'
import { useState } from 'react'
import AuthPost from '../API/api'
import LocalStorage from '../../../Helpers/storage'

const { Title, Text} = Typography

const SignUp = () => {
  const navigate=useNavigate()

  const [loading, setLoading]= useState<boolean>(false)
  const [match, setMatch]= useState<boolean>(false)
  const [agree, setAgree]= useState<boolean>(false)
  const [formData, setFormData]= useState<any>({
    username: null,
    password: null,
    email: null,
    retry_password: null
  })

  const isDisabled=()=>{
    if((formData.username===null || formData.password===null || formData.email===null || formData.retry_password===null)) {return true} else{return false}
  }


  const SignedIN= async()=>{
    setLoading(true)
    const response= await AuthPost.signup(formData.username, formData.password, formData.email)
    if(response.id){
      LocalStorage.storeApp("users")
      LocalStorage.storeAccessToken(response.authorization)
      LocalStorage.storeCurrentUser({id: response.id, username: response.username, email: response.email})
      document.dispatchEvent(new Event("changeapp"))
      location.assign("/")
    }    
  }

  return (
    <Space direction="vertical" align="center" style={{width:"100dvw", gap:20}}>
        <Title style={{fontSize:40}}>KinoVerse</Title>
        <Card style={{backgroundColor:"var(--color-neutral-800)", border:"none", width:"80dvw"}}>
          <div style={{display:"flex", flexDirection:"column",alignItems:"center",width:"28rem", gap:5}}>
            <img src='./svg/logo.svg' style={{height:"17rem"}}/>
            <Text style={{fontSize:14}} strong>It's Just Entertainment</Text>
            <Form
              onFinish={SignedIN}
              onFinishFailed={()=>{}}
              name='login'
              style={{marginTop:"3rem"}}
            >
              <FormItem
                name={"username"}
              >
                <div style={{marginTop:10, display:"flex", justifyContent:"space-between", alignSelf:"stretch", padding:"2px 1px", alignItems:"center"}}>
                  <UserOutlined style={{color:"var(--color-primary-800)"}}/>
                  <Input 
                    style={{width: "90%", borderRadius:"25rem"}} 
                    placeholder='Enter UserName'
                    onChange={(e)=>setFormData({...formData, username:e.target.value})}
                  />
                </div>
              </FormItem>
              <FormItem
                name={"email"}
              >
                <div style={{display:"flex", justifyContent:"space-between", alignSelf:"stretch", padding:"2px 1px", alignItems:"center"}}>
                  <MailOutlined style={{color:"var(--color-primary-800)"}}/>
                  <Input 
                    style={{width: "90%", borderRadius:"25rem"}} 
                    placeholder='Enter Email'
                    onChange={(e)=>setFormData({...formData, email:e.target.value})}
                  />
                </div>
              </FormItem>
              <FormItem
                name={"password"}
              >
                <div style={{display:"flex", justifyContent:"space-between", alignSelf:"stretch", padding:"2px 1px", alignItems:"center"}}>
                  <UnlockOutlined style={{color:"var(--color-primary-800)"}}/>
                  <Input.Password 
                    style={{width: "90%", borderRadius:"25rem"}} 
                    placeholder='Enter Password'
                    onChange={(e)=>{
                      setFormData({...formData, password:e.target.value})
                    
                    }}
                  />
                </div>
              </FormItem>
              <FormItem
                name={"retry_password"}
                style={{marginBottom:0}}
              >
                <div style={{display:"flex", justifyContent:"space-between", alignSelf:"stretch", padding:"2px 1px", alignItems:"center"}}>
                  <LockOutlined style={{color:"var(--color-primary-800)"}}/>
                  <Input.Password
                    style={{width: "90%", borderRadius:"25rem"}} 
                    placeholder='Enter Password Again'
                    onChange={(e)=>{
                      setMatch((_)=>{
                        if(e.target.value===formData.password){
                            return false
                          }else{
                            return true
                          }
                      })
                      setFormData({ ...formData, retry_password: e.target.value})
                    }}
                  />
                </div>
                <Checkbox name='checked' onChange={(e)=>setMatch(e.target.value)} defaultChecked><Text style={{fontSize:12}} >Read <span style={{color:"var(--color-5-500)"}}>Terms</span> of service</Text></Checkbox>
              </FormItem>
              <Form.Item
                style={{marginTop:"2rem"}}
              >
                  <PrimaryButton>
                    <Button type='primary' disabled={isDisabled()||match||agree} size='large' loading={loading} htmlType='submit' style={{width: "24rem", marginBottom:"2rem", fontWeight:"bold"}}>
                        SIGNUP
                    </Button>
                </PrimaryButton>
              </Form.Item>
            </Form>
            <div style={{marginTop:"2rem", position:'relative', left:"-5rem"}}>
                <Text style={{fontSize:12}}>Already have an account?... <span style={{color:"var(--color-5-500)", cursor:"pointer"}} onClick={()=>navigate(`/sign-in`)}>Signin</span></Text>
            </div>
          </div>
        </Card>
    </Space>
  )
}

export default SignUp
