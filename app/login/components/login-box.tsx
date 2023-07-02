'use client';

import {
  LoginBoxContainer,
  TitlesBox,
  LoginBoxTitle,
  LoginBoxSubtitle,
  SeparatorText,
  SeparatorBox,
  SeparatorLine,
} from "../styles/styles";
import LoginForm from "./form/login-form";

export default function LoginBox() {
  return (
    <>
      <LoginBoxContainer>
        <TitlesBox>
          <LoginBoxTitle>Login to your Account</LoginBoxTitle>
          <LoginBoxSubtitle>Enter your details below: </LoginBoxSubtitle>
        </TitlesBox>
        <SeparatorBox>
          <SeparatorLine />
          <SeparatorText>continue with your email</SeparatorText>
          <SeparatorLine />
        </SeparatorBox>
      </ LoginBoxContainer>
      <LoginForm />
    </>
  )
}