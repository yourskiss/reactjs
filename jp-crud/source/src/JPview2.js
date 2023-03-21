import { useEffect, useState } from "react";
 import axios from 'axios';
 import { Link } from "react-router-dom";

function JPview2() {
    const [data, setData] = useState([]);

    useEffect(() =>{
         let flag = true;
            const getData = async () => {
                    await axios.get(`https://jsonplaceholder.typicode.com/posts`)
                    .then(result => {
                        if(flag === true)
                        {
                          setData(result.data);
                          console.log(result.data);
                        } 
                     })
                     .catch((error) => {
                        console.log(error);
                     })
            };
            getData();
            return () => {
              flag = false;
            }
      },[]);

      return (
        <>
          <h2>View Data - axios with flag</h2>
          <table border="1">
            <thead>
              <tr>
                <th>#</th>
                <th>title</th>
                <th>body</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
              data.map((d, i)=>{
                return(
                <tr key={i}>
                  <td>{d.id} </td>
                  <td>{d.title}</td>
                  <td>{d.body}</td>
                  <td>
                    <Link to={`/jp-detail/${d.id}`}>Detail</Link> &nbsp; |  &nbsp; 
                    <Link to={`/jp-edit/${d.id}`}>Edit</Link> &nbsp; |  &nbsp; 
                    <Link to={`/jp-delete/${d.id}`}>Delete</Link>
                    </td>
                </tr>
                )
              })
            } 
            </tbody>
          </table>
        </>
      )
}

 

export default JPview2

