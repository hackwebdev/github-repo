import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/search";

const Index = (props) => {
  const [searchText, setSearchText] = useState("");
  const [language, setLanguage] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearchTextChange = (text) => {
    setSearchText(text);
  };

  const onLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <div>
      <Search
        searchText={searchText}
        language={language}
        onSearchTextChange={onSearchTextChange}
        onLanguageChange={onLanguageChange}
      />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("https://api.chucknorris.io/jokes/random");
  return {
    props: {
      value: res.data.value,
    },
  };
};

export default Index;
