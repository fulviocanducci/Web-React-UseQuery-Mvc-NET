import ReactPaginate from "react-paginate";

function Paginated({ count, onPageChange }) {
  return (
    <ReactPaginate
      pageCount={count}
      pageClassName="page-item"
      containerClassName="pagination justify-content-center"
      pageLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      previousClassName="page-item"
      breakLinkClassName="page-link"
      breakClassName="page-item"
      nextLabel={<span aria-hidden="true">&raquo;</span>}
      previousLabel={<span aria-hidden="true">&laquo;</span>}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      onPageChange={onPageChange}
    />
  );
}

export default Paginated;
