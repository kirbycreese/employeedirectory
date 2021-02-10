import React, { useState, useEffect } from "react";
import API from "../../utils/Api.js";

function EmployeeTable() {
  //create state
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getEmployeeData()
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.map((employee) => (
        <p>{employee.name.first}</p>
      ))}
    </div>
  );
}

export default EmployeeTable;
// export default Example
