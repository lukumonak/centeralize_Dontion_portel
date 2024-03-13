import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navbr from '../Components/Navbr.js'

function SpecialAccess() {

  const baseUrl = 'http://localhost:4000/api/oldThs/';


  const [pst, setPst] = useState(null);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPst(response.data)
    });
  }, [])

  if (!pst) return null;

  console.log(pst);

  const pduct = pst.map(({ name, type }) => {
    return name, type;
  })
  console.log(pst);

  return (
    <div>
      <Navbr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Product Type</th>
            <th>Waight (kg)</th>
            <th>Pincode</th>
            <th>Landmark</th>
            <th>PickUp Request</th>
          </tr>
        </thead>
        <tbody>
          {
            pst.map((item, index) => (

              <>
                <tr>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.weight}</td>
                  <td>{item.pincode}</td>
                  <td>{item.landmark}</td>
                  <td><Button  className="py-0" variant="danger"  size='sm'>Request</Button></td>
                </tr>
              </>


            ))
          }
        </tbody>
      </Table>
    </div>
  );
}
export default SpecialAccess;