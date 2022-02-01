import styled from 'styled-components'

const Container = styled.div`
    background: rgb(250 250 250);
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    .box {
        background: white;
        padding: 2rem 0;
        border-radius: .5rem;
        border: 1px solid rgb(229 231 235);
        display: flex;
        flex-direction: column;
        align-items: space-between;
    }
    .loginDiv {
        padding: 0 2rem 4rem;
    }
    .loginDiv h1{
        padding-bottom: .5rem;
    }
    .log-in {
        display: flex;
        justify-content: flex-end;
        padding: 0 2rem;
    }
    .return{
        margin-top: 16rem;
        padding-top: 1rem;
        display: flex;
        justify-content: center;
        border-top: 1px solid rgb(229 231 235);
    }
`
export default Container