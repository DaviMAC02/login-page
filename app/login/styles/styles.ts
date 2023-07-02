import { styled, css } from "styled-components"
import { Inter } from 'next/font/google'
import { Montserrat } from "next/font/google"
import laptopIcon from '../assets/laptopIcon.png'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const LoginBoxContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 29.8rem;
`

export const LoginLayoutContainer = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
width: 100vw;
`

export const TitlesBox = styled.div`
display: flex;
flex-direction: column;
align-items: start.;
width: 29.8rem;
`

export const LoginBoxTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 0.5rem;  
`

export const LoginBoxSubtitle = styled.h2`
  color: #71717A;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 400;
`

export const SeparatorBox = styled.div`
  display: flex;
  align-items: center;
  width: 28.31rem;
  height: 1.5rem;
  background-color: #FFF;
  margin: 1.5rem 0 1.5rem 0;
`

export const SeparatorLine = styled.div`
  display: flex;
  width: 7.5rem;
  height: 0.0625rem;
  background-color: #71717A;
`

export const SeparatorText = styled.p`
display: flex;
justify-content: center;
align-items: center;
width: 13.3rem;
height: 1.56rem;
color: #71717A;
text-align: center;
font-size: 0.9375rem;
font-weight: 500;
line-height: 1.5rem;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 29.8rem;
`

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
`

export const FormInputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 28.3125rem;
`


interface FormInputIconProps {
  imagePath: string;
  iconTop?: string;
}

export const FormInputLeftIcon = styled.div<FormInputIconProps>`
    display: flex;
    position: absolute;
    width: 1.87rem;
    height: 1.87rem;
    top: ${props => props.iconTop};
    left: 1.25rem;
    background-image: url(${props => props.imagePath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const FormInputRightIcon = styled.div<FormInputIconProps>`
    display: flex;
    position: absolute;
    width: 1.87rem;
    height: 1.87rem;
    top: ${props => props.iconTop};
    right: 1.25rem;
    background-image: url(${props => props.imagePath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
`

interface FormInputProps {
  type?: string;
  placeholder?: string;
  margin?: string;
}

export const FormInputField = styled.input`
${({
  placeholder = 'email',
  margin = '0px',
  type = 'text'
}: FormInputProps) => css`
    display: flex;
    width: 28.3125rem;
    type: ${type};
    height: 4rem;
    padding: 0.625rem;
    padding-left: 3.7rem;
    margin: ${margin};
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.625rem;
    border: 2px solid rgba(128, 152, 249, 0.50);
    background: rgba(128, 152, 249, 0.10);
    placeholder: ${placeholder};
    &::placeholder {
      color: rgba(45, 49, 166, 0.20);
      font-family: ${inter};
      color: rgba(45, 49, 166, 0.20);
      font-size: 1.125rem;
      font-weight: 400;
    }
  `
  }
`


export const LeftSide = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50vw;
height: 100vh;
background-color: #FFF;
`

export const RightSide = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50vw;
height: 100vh;
background-color: #6172F3;
`

export const RightSideImage = styled.div`
  width: 32vw;
  height: 32vw;
  background-image: url(${laptopIcon.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const RightSideTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.125rem;
`

export const RightSideTitle= styled.p`
  font-family: ${montserrat};
  color: #FFF;
  font-weight: 700;
  font-size: 1.25rem;
  `

export const RightSideSubtitle = styled.p`
  font-family: ${montserrat};
  color: rgba(224, 234, 255, 0.75);
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
`

export const FormActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 28.3125rem;
  margin-top: 0.62rem;
`

export const RememberMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.62rem;
`


interface RememberMeCheckboxProps {
  checkboxIcon: string;
}

export const RememberMeCheckbox = styled.div<RememberMeCheckboxProps>`
${({
  checkboxIcon
}: RememberMeCheckboxProps) => css`
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  background-image: url(${checkboxIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  `}
`

export const RememberMeText = styled.p`
  display: flex;
  width: 8.4375rem;
  height: 1.75rem;
  flex-direction: column;
  justify-content: center;
  color: #71717A;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`

export const ForgotPasswordText = styled.p`
  display: flex;
  height: 1.75rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #8098F9;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`

export const LoginButton = styled.button`
  display: flex;
  width: 28.3125rem;
  height: 4rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  margin-top: 1.56rem;
  border-radius: 0.625rem;
  background: #8098F9;
  border: none;
  color: #FFF;
  font-size: 1.25rem;
  font-family: ${inter};
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #6172F3;
    transition: 0.2s;
  }
`


export const LoginFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
`

export const DontHaveAccountText = styled.p`
  color: #71717A;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`

export const CreateAccountText = styled.p` 
  color: #8098F9;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  margin-left: 0.3125rem;
  cursor: pointer;
`
