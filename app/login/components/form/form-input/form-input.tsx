import { FormInputBox, FormInputContainer, FormInputLeftIcon, FormInputField, FormInputRightIcon } from "@/app/login/styles/styles";
import { useState } from "react";

interface FormInputProps {
  placeholder: string;
  leftIcon: string;
  type: string;
  rightIcon?: string;
  iconTop?: string;
  margin?: string;
  hasRightIcon?: boolean;
}

export default function FormInput({ placeholder, leftIcon, rightIcon, iconTop = "1rem", margin = "0px", hasRightIcon = false, type }: FormInputProps) {
  const [inputType, setInputType] = useState(type)

  const handlePasswordVisibility = () => {
    inputType === "password" ? setInputType("text") : setInputType("password")
  }

  return (
    <FormInputContainer>
      <FormInputBox>
        <FormInputLeftIcon imagePath={leftIcon} iconTop={iconTop} />
        <FormInputField placeholder={placeholder} margin={margin} type={inputType} />
        {hasRightIcon && (
          <FormInputRightIcon
            imagePath={rightIcon!}
            iconTop={iconTop}
            onClick={() => handlePasswordVisibility()}
          />
        )}
      </FormInputBox>
    </FormInputContainer>
  )
}