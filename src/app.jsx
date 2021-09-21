import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import AuthForm from "./components/AuthForm";

function App() {
  const onSocialClick = async (event) => {};

  return (
    <Container>
      <AuthContainer>
        <AuthForm />
        <ButtonWrapper>
          <KakaoButton>
            <FontAwesomeIcon
              onClick={onSocialClick}
              icon={faComment}
              size="lg"
              style={{ marginRight: 12 }}
              color={"#000000"}
            />
            Kaokao Talk
          </KakaoButton>
          <Button>
            <FontAwesomeIcon
              onClick={onSocialClick}
              icon={faGoogle}
              size="lg"
              style={{ marginRight: 13 }}
              color={"#4285F4"}
            />
            Google
          </Button>
        </ButtonWrapper>
      </AuthContainer>
    </Container>
  );
}

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 0 20px 10px;
  border-radius: 3px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /*background: rgba(0, 0, 0, 0.6);*/
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 20px 0;
`;

const Button = styled.button`
  height: 50px;
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  border-radius: 28px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(218, 218, 218);
  cursor: pointer;
`;

const KakaoButton = styled(Button)`
  box-sizing: border-box;
  background: rgb(254, 229, 0);
`;

export default App;
