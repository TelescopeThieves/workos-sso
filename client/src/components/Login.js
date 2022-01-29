import axios from "axios"
import {useState, useEffect} from 'react'
import Container from "./styled/Container"

const Login = () => {
    const [authUrl , setAuthUrl] = useState(null)
    const loginFunc = async () => {
        const res = await axios.get(`http://localhost:5000/api/auth/sso/authorize`)
        
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
            <div>
                <button onClick={loginFunc}>Login with Google</button>
            </div>
        </Container>
    )
}

export default Login