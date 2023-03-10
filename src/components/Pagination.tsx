import React from "react";

interface Props {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const Pagination: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center pb-10">
      {pages.map((page, index) => {
        return (
          <button
            className={
              (page == currentPage ? "bg-green-400" : "bg-green-200") +
              " text-lg font-bold w-10 shadow hover:bg-green-500 transition " +
              (page == pages.length
                ? "rounded-r-lg"
                : page == 1
                ? "rounded-l-lg"
                : "")
            }
            key={index}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
