import Container from "./styled/Container"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ProfileDiv from "./styled/ProfileDiv";
import Login from "./Login";
import Button from "./styled/Button";

const Home = () => {
    const [profile, setProfile] = useState(null)
    const [codeCheck, setCodeCheck] = useState(false)
    const search = useLocation().search;
    const code = new URLSearchParams(search).get('code');
    const getProfile = async () => {
        const res = await axios.get(`/api/get/getProfile/${code}`)
        if(res){
            console.log(res.data.profileData)
            setProfile(res.data.profileData)
        }
    }
    useEffect(() => {
        if(code){
            getProfile();
        }
    }, [code])
    
    if(code){
        return(
            <Container>
                <div className="box">
                {profile && 
                    (<ProfileDiv>
                        <div>
                            <img src={profile.raw_attributes.picture} alt="profile picture"></img>
                        </div>
                        <div className="nameDiv">
                            <h1>{profile.first_name} {profile.last_name}</h1>
                        </div>
                    </ProfileDiv>)
                }
                <div className="return">
                    <Link to="/">
                        <Button>
                            Return home
                        </Button>
                    </Link>
                </div>
                </div>
            </Container>
        )
    }
    return (
        <Login />
    )
}

export default Home