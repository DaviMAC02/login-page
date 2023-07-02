import {ForgotPasswordText, Form } from "../../styles/styles";
import envelope from "../../assets/envelope.svg"
import password from "../../assets/password.svg"
import eye from "../../assets/eye.svg"
import FormInput from "./form-input/form-input";
import { FormActionsContainer } from "../../styles/styles";
import RememberMe from "./remember-me/remember-me";


export default function LoginForm() {
  return (
    <Form>
      <FormInput
        placeholder="Email"
        leftIcon={envelope.src}
        type="email"
      />
      <FormInput
        placeholder="Password"
        leftIcon={password.src}
        rightIcon={eye.src}
        hasRightIcon={true}
        margin="0.62rem 0px 0px 0px"
        iconTop="1.62rem"
        type="password"
      />
      <FormActionsContainer>
        <RememberMe />
        <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
      </FormActionsContainer>
    </Form>
  )
}