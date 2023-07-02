'use client'

import LoginBox from "./components/login-box";
import { LeftSide, RightSide, RightSideImage, RightSideSubtitle, RightSideTextContainer, RightSideTitle } from "./styles/styles";

export default function LoginPage() {




  return (
    <>
      <LeftSide>
        <LoginBox />
      </LeftSide>
      <RightSide>
        <RightSideImage />
        <RightSideTextContainer>
          <RightSideTitle>Connect with any device.</RightSideTitle>
          <RightSideSubtitle>Everything you need is an internet connection.</RightSideSubtitle>
        </RightSideTextContainer>
      </RightSide>
    </>
  )
}