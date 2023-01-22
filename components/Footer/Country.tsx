import CustomSelect from "components/Select/Select";
import React, { useState } from "react";
import { country as countries } from "constant/home/footer";

function Country({ theme }: { theme: "dark" | "light" }) {
  const [country, setCountry] = useState<string>("");

  return (
    <CustomSelect
      options={countries}
      selectedValue={country}
      setSelectedValue={setCountry}
      theme={theme}
    />
  );
}

export default Country;
