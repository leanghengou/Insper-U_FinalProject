const axios = require("axios");
const sentimentTest = (text) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("text", text);

  const options = {
    method: "POST",
    url: "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "fc644e9ef6mshf8d7cd3b47830b5p125ed2jsnb9387b9ac049",
      "X-RapidAPI-Host": "twinword-sentiment-analysis.p.rapidapi.com",
    },
    data: encodedParams,
  };

  return axios.request(options);
};

module.exports = { sentimentTest };
