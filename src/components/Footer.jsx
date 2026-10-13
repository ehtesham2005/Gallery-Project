import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Footer = ({ index, setIndex }) => {
  const [pageCount, setPageCount] = useState(10);
  return (
    <ReactPaginate
      pageCount={pageCount}
      previousLabel="Prev"
      nextLabel="Next"
      containerClassName="flex justify-center items-center gap-1 sm:gap-2 lg:gap-3 mb-12"
      pageClassName="cursor-pointer"
      pageLinkClassName="block px-2 lg:px-3 py-1 lg:py-2 rounded-lg text-white light:text-black hover:bg-amber-300 hover:text-black transition-colors"
      previousClassName="cursor-pointer"
      previousLinkClassName="block px-3 lg:px-4 py-1 lg:py-2 rounded-lg bg-amber-300 text-black"
      nextClassName="cursor-pointer"
      nextLinkClassName="block px-3 lg:px-4 py-1 lg:py-2 rounded-lg bg-amber-300 text-black"
      activeClassName="bg-amber-300 rounded-lg"
      activeLinkClassName="!text-black"
      disabledClassName="opacity-40 light:opacity-60"
      disabledLinkClassName="!cursor-not-allowed"
      breakClassName="cursor-pointer"
      breakLinkClassName="!text-white light:!text-black"
      onPageChange={(event) => {
        const selectedPage = event.selected + 1;
        setIndex(selectedPage);
        if (selectedPage === pageCount) setPageCount((prev) => prev + 3);
      }}
    />
  );
};

export default Footer;

/* <div className="flex justify-center gap-8 mt-8">
        <button
          className="bg-amber-300 text-black font-semibold text-xl px-8 py-2 cursor-pointer active:scale-95 rounded"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
              setDataAvail(false);
            }
            console.log(index);
          }}
        >
          Prev
        </button>
        <p className="text-white text-2xl py-2">Page {index}</p>
        <button
          className="bg-amber-300 text-black font-semibold text-xl px-8 py-2 cursor-pointer active:scale-95 rounded"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
            setDataAvail(false);
            console.log(index);
          }}
        >
          Next
        </button>
      </div> */
