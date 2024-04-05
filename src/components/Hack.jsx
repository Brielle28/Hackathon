import React, { useEffect, useState } from "react";
import axios from "axios";

const Hack = () => {
  const [search, setSearch] = useState("")
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  // const [delete, setDelete] = useState("")

  const SearchInput = (e) => {
    setSearch(e.target.value);
  };

  const Getdata = () => {
    axios
      .get("http://49.13.2.10:4000/todos/")
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setUser(response.data.data);
        console.log(setUser);
      })
      .catch(function (error) {
        // handle error
        console.log(error.data.date.message);
        setError(error.data.date.message);
      })
      .finally(function () {
        // always executed
      });
  };
  return (
    <>
      <div>
        <div className="flex flex-row gap-[20px] pt-[100x] items-center justify-center">
        <input className="input text-black " onClick={SearchInput} placeholder="search" />
         <button className="btn" onClick={Getdata}> display data </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              
            </thead>
            <tbody>
              {/* map */}
             { error ? (
              <p>{error}</p>
             )
               :user
                .filter((item)=>{
                  if (search.toLowerCase == "") {
                    return true;
                  }else {
                    return(
                      item.name.toLowerCase().includes(search.toLowerCase())
                    )
                  }
                })
               .map((item)=>{ 
               return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.completed}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className="btn" value={search} onClick={()=>Delete(item.id)}> Delete </button>
                  </td>
                </tr>
              )}
              )
             }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Hack;

