import { styled, css } from "styled-components"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
  height: 4rem;
`


interface FormInputIconProps {
  imagePath: string;
}

export const FormInputIcon = styled.div<FormInputIconProps>`
    display: flex;
    position: absolute;
    width: 1.87rem;
    height: 1.87rem;
    top: 1rem;
    left: 1.25rem;
    background-image: url(${props => props.imagePath});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`

interface FormInputProps {
  placeholder?: string;
  marginTop?: string;
}

export const FormInput = styled.input`
${({
  placeholder = 'email',
  marginTop = '0px'
}: FormInputProps) => css`
    display: flex;
    width: 28.3125rem;
    height: 4rem;
    padding: 0.625rem;
    padding-left: 3.7rem;
    margin-top: ${marginTop};
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