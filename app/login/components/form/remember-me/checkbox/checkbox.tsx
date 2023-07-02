import { RememberMeCheckbox } from "@/app/login/styles/styles";


interface CheckboxProps {
  checkboxIcon: string;
  onClick: () => void;
}

export default function Checkbox({ checkboxIcon, onClick }: CheckboxProps) {
  return (
    <RememberMeCheckbox
      checkboxIcon={checkboxIcon}
      onClick={onClick}
    />
  )
}