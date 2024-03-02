import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let user = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        
        setUsers(user.data);
      } catch (error) {
        console.log(error.data)
      }
    }
    fetchData();
  }, []);
  console.log(users)

  function formatPhoneNumber(phoneNumber) {
    const numericOnly = phoneNumber.replace(/\D/g, '');
    if (numericOnly.length >= 10) {
      const formattedNumber = numericOnly.slice(0, 10).replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      return formattedNumber;
    } else {
      return phoneNumber;
    }
  }

  return (
    <div className="mt-12 text-slate-900">
        <div className=" p-8 shadow-md rounded-md ">
    <table className="min-w-full border bg-gray-150 rounded-lg shadow-lg">
      <thead>
        <tr className="border-b">
        <th className="py-2 px-4">No</th>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Username</th>
          <th className="py-2 px-4">Email</th>
          <th className="py-2 px-4">Phone</th>
          <th className="py-2 px-4">Website</th>
        </tr>
      </thead>
      <tbody>
        {users.length>0&&users.map((data,index)=>(
        <tr key={index} className="border-b hover:bg-gray-50 text-sm font-semibold">
            <td className="py-2 px-4 text-center">{index+1}</td>
          <td className="py-2 px-4 text-center">{data.name}</td>
          <td className="py-2 px-4 text-center">{data.username}</td>
          <td className="py-2 px-4 text-center">{data.email}</td>
          <td className="py-2 px-4 text-center">{formatPhoneNumber(data.phone)}</td>
          <td className="py-2 px-4 text-center">{data.website}</td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
    </div>
  )
}

export default Users;
