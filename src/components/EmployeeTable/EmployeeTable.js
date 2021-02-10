import React, { useState, useEffect } from "react";
import API from "../../utils/Api.js";
import { Table } from "react-bootstrap";

function EmployeeTable() {
  //create state
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    API.getEmployeeData()
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.map((employee) => (
        <p>
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <td> {employee.name.first}</td>
                <td> {employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
              </tr>
            </tbody>
          </Table>
        </p>
      ))}
    </div>
  );
}

export default EmployeeTable;
// export default Example
