import { RememberMeContainer, RememberMeText } from "@/app/login/styles/styles";
import { useState } from "react";
import Checkbox from "./checkbox/checkbox";
import unchecked from "@/app/login/assets/unchecked.svg";
import checked from "@/app/login/assets/checked.svg";

export default function RememberMe() {

  const [checkedCheckbox, setCheckedCheckbox] = useState(false);

  return (
    <RememberMeContainer>
      <Checkbox
        checkboxIcon={checkedCheckbox ? checked.src : unchecked.src}
        onClick={() => setCheckedCheckbox(!checkedCheckbox)}
      />
      <RememberMeText>Remember me</RememberMeText>
    </RememberMeContainer>
  )
}