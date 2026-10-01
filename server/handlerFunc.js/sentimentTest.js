// Local sentiment check (replaces the expired Twinword RapidAPI subscription).
// Keeps the same response shape ({ data: { type } }) so postComment.js is unchanged.
const Sentiment = require("sentiment");
const sentiment = new Sentiment();

const sentimentTest = async (text) => {
  const { score } = sentiment.analyze(text || "");
  const type = score < 0 ? "negative" : score > 0 ? "positive" : "neutral";
  return { data: { type, score } };
};

module.exports = { sentimentTest };
