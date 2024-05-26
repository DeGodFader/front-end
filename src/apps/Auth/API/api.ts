import { APP_KEY, Node_Server } from "../../../appEnv"

type AuthPostFunctions={
    login: any,
    resetPassword: any,
    signup: any,
}

const AuthPost: AuthPostFunctions={
    login: {},
    resetPassword: {},
    signup: {}
}

const header={
    "Content-Type": "application/json",
    "app_key": APP_KEY
}

AuthPost.login= async(userName: string, password: string)=>{
    const response= await fetch(
        `${Node_Server}/auth/login`,
        {
            method: "POST",
            headers: header,
            body: JSON.stringify({
                username: userName,
                password: password
            })
        }   
    )

    console.log()

    const data= await response.json()
    console.log(data)
    return data
}

AuthPost.signup= async(userName: string, password: string, email: string)=>{
    const response= await fetch(
        `${Node_Server}/auth/signup`,
        {
            method: "POST",
            headers: header,
            body: JSON.stringify({
                user: {
                    username: userName,
                    password: password,
                    email: email
                }
            })
        }   
    )


    const data= await response.json()
    return data
}


export default AuthPost