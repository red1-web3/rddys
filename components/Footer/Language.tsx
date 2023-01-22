import CustomSelect from "components/Select/Select";
import { languages } from "constant/home/footer";
import React, { useState } from "react";

function Language({ theme }: { theme: "dark" | "light" }) {
  const [language, setLanguage] = useState<string>("");

  return (
    <CustomSelect
      options={languages}
      selectedValue={language}
      setSelectedValue={setLanguage}
      theme={theme}
    />
  );
}

export default Language;
