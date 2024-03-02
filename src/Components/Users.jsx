import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./paginations.css";
import { motion } from "framer-motion";
import UserCard from "./UserCard";
import data from "../Data/UserCardData";

function Users() {
  const rowsPerPage = 5;
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [indexToView, setIndexToView] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let user = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(user.data);
      } catch (error) {
        console.log(error.data);
      }
    }
    fetchData();
  }, []);

  function HandleView(index, event) {
    event.stopPropagation();
    setIndexToView((previndex) => (previndex === index ? null : index));
  }

  function formatPhoneNumber(phoneNumber) {
    const numericOnly = phoneNumber.replace(/\D/g, "");
    if (numericOnly.length >= 10) {
      const formattedNumber = numericOnly
        .slice(0, 10)
        .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      return formattedNumber;
    } else {
      return phoneNumber;
    }
  }

  const pagesVisited = pageNumber * rowsPerPage;
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + rowsPerPage)
    .map((data, index) => (
      <tr
        key={index}
        className="border-b hover:bg-gray-50 text-sm font-semibold"
        onClick={(event) => HandleView(index, event)}
      >
        <td className="py-2 px-4 text-center">{data.id}</td>
        <td className="py-2 px-4 text-center">{data.name}</td>
        <td className="py-2 px-4 text-center hidden md:table-cell">
          {data.username}
        </td>
        <td className="py-2 px-4 text-center hidden md:table-cell">
          {data.email}
        </td>
        <td className="py-2 px-4 text-center hidden md:table-cell">
          {formatPhoneNumber(data.phone)}
        </td>
        <td className="py-2 px-4 text-center hidden md:table-cell">
          {data.website}
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(users.length / rowsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="mt-12 text-slate-900">
      <div className="p-4 overflow-x-auto">
        <table className="min-w-full border bg-gray-150 rounded-lg shadow-lg">
          <thead style={{ backgroundColor: "#8d9db6" }}>
            <tr className="border-b ">
              <th className="py-2 px-4">No</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4 hidden md:table-cell">Username</th>
              <th className="py-2 px-4 hidden md:table-cell">Email</th>
              <th className="py-2 px-4 hidden md:table-cell">Phone</th>
              <th className="py-2 px-4 hidden md:table-cell">Website</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#bccad6" }}>{displayUsers}</tbody>
        </table>
      </div>
      {indexToView != null && (
        <div className="flex justify-center ">
          <motion.div
            className="w-full mx-3 md:w-2/5 h-full text-center py-4 text-sm shadow rounded-lg bg-white"
            whileHover={{
              scale: 1.04,
              backgroundColor: "#508ea1",
              color: "#fff",
            }}
          >
            <ul>
              <li>
                Name:
                <span className="font-bold"> {users[indexToView].name}</span>
              </li>
              <li>
                Username:
                <span className="font-bold">
                  {" "}
                  {users[indexToView].username}
                </span>
              </li>
              <li>
                Email:
                <span className="font-bold"> {users[indexToView].email}</span>
              </li>
              <li>
                phone:
                <span className="font-bold">
                  {" "}
                  {formatPhoneNumber(users[indexToView].phone)}
                </span>
              </li>
              <li>
                Website:
                <span className="font-bold"> {users[indexToView].website}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      )}
      <ReactPaginate
        className="flex mx-6 text-lg font-bold  justify-end mt-6"
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      <div className="flex justify-center">
        <div className="">
          <h1 className="text-center mb-9 text-2xl font-bold text-slate-900">Best Buyers</h1>
          <div className="flex flex-wrap justify-center">{data.length > 0 && data.map((d) => <UserCard data={d} />)}</div>
        </div>
      </div>
    </div>
  );
}

export default Users;
