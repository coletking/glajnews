import React from "react";

const TruncatedHTML = ({ htmlString, maxLength }) => {
  const truncatedText = (text) => {
    if (text && text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: truncatedText(htmlString) }} />
    </>
  );
};

export default TruncatedHTML;
