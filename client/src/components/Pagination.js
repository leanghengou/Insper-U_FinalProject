import React from "react";

const Pagination = ({ totalMessages, messageGroupNum, movePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMessages / messageGroupNum); i++) {
    pageNumbers.push(i);
  }

  console.log("page number", pageNumbers, totalMessages, messageGroupNum);
  return (
    <div>
      <ul>
        {pageNumbers &&
          pageNumbers.map((item) => {
            return (
              <li>
                <a
                  onClick={() => {
                    movePage(item);
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Pagination;
