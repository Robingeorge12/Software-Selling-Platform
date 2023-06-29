import React, { useState } from "react";
import i18n from "../Translator/langTrans";

import "./LanguageSel.css";

const LanguageSel = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  };

  return (
    <select
      defaultValue={selectedLanguage}
      onChange={chooseLanguage}
      className="lan-select-container"
    >
      <option value="en">
        <span>
          English{" "}
          <img
            src="https://gifscenter.com/wp-content/uploads/2017/05/UK-Flag.gif"
            className="lan-select-im1"
            alt=""
          />
        </span>
      </option>
      <option value="hd">Indian</option>
      <option value="sp">Spanish</option>
      <option value="de">German</option>
      <option value="it">Italian</option>
    </select>
  );
};

export default LanguageSel;
