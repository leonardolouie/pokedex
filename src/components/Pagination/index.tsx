import React from 'react'


const Pagination = ({ dataPerPage, totalData, paginate, currentPage, pageLimit }) => {
    const pageNumbers = []
    const totalPage = Math.ceil(totalData / dataPerPage)

    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i)
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill(null).map((_, idx) => start + idx + 1);
    };


    return (
        <>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm" aria-label="Pagination">
                {getPaginationGroup()?.map(number => {
                    const isCurrentPage = number == currentPage
                    if (totalPage >= number)
                        return (
                            <a href="#"
                                onClick={() => paginate(number)}
                                className={`${isCurrentPage ? 'bg-white text-paleGray' : 'bg-paleGray text-white'} rounded-md  relative inline-flex items-center px-4 py-2  shadow-sm text-sm font-medium  mr-2 ml-2`}>
                                {number}
                            </a>
                        )
                })}
            </nav>
            <div className="flex flex-row w-1/3">
                <button
                    disabled={currentPage === 1}
                    className=" rounded-md bg-paleGray text-white w-full p-1 mr-2 font-medium hover:bg-white hover:text-paleGray" onClick={() => paginate(currentPage - 1)}>
                    Prev
                </button>
                <button
                    disabled={currentPage === totalPage}
                    className="rounded-md bg-paleGray text-white w-full p-1 mr-2 font-medium hover:bg-white hover:text-paleGray" onClick={() => paginate(currentPage + 1)}>
                    Next
                </button>
            </div>
        </>
    )
}

export default Pagination