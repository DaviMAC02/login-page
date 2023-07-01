'use client';

import {
  LoginBoxContainer,
  TitlesBox,
  LoginBoxTitle,
  LoginBoxSubtitle,
  Form,
  FormInput,
  FormInputBox,
  FormInputIcon,
  SeparatorBox,
  SeparatorLine,
  SeparatorText,
  FormInputContainer,
} from "../styles/styles";
import envelope from "../assets/envelope.svg"
import password from "../assets/password.svg"

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
      <Form>
        <FormInputContainer>
          <FormInputBox>
            <FormInputIcon imagePath={envelope.src} />
            <FormInput placeholder="Email" />
          </FormInputBox>
          <FormInputBox>
            <FormInputIcon imagePath={password.src} />
            <FormInput placeholder="Password" />
          </FormInputBox>
        </FormInputContainer>

      </Form>
    </>
  )
}