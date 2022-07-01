import './login.css';
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function Login() {
  return (
    <AppContainer className='login-body'>
      <AccountBox />
    </AppContainer>
  );
}

export default Login;