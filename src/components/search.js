import React from "react";
import Select from "./shared/select";
import TextInput from "./shared/text-input";
import LANGUAGES from "../constants/languages.constants";

const Search = (props) => {
  const { language, seachText, onSearchTextChange, onLanguageChange } = props;
  const languages = [{ value: "", label: "All" }, ...LANGUAGES];

  return (
    <div>
      <TextInput
        label="Repo Search"
        value={seachText}
        onChange={(value) => onSearchTextChange(value)}
      />
      <Select
        label="Language"
        value={language}
        options={languages}
        onChange={(value) => onLanguageChange(value)}
      />
    </div>
  );
};

export default Search;
