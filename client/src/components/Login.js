import axios from "axios"
import {useState, useEffect} from 'react'
import Button from "./styled/Button"
import Container from "./styled/Container"

const Login = () => {
    const [authUrl , setAuthUrl] = useState(null)
    const loginFunc = async () => {
        const res = await axios.get(`/api/auth/sso/authorize`)
        
        if(res){
            setAuthUrl(res.data.authUrl)
        }
    }
    useEffect(() => {
        if(authUrl){
            window.location.href=authUrl
        }
    },[authUrl])
    return (
        <Container>
            <div className="box">
                <div className="loginDiv">
                    <h1>Hi! Welcome to my code assessment!</h1>
                    <p>{`Enjoy Logging in with your google account :)`}</p>
                </div>
                <div className="log-in">
                    <Button onClick={loginFunc}>Login with Google</Button>
                </div>
            </div>
        </Container>
    )
}

export default Login