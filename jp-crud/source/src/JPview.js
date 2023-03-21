import { useEffect, useState } from "react";
 import axios from 'axios';
 import { Link } from "react-router-dom";

function JPview() {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const ct = axios.CancelToken.source();
            const getData = async () => {
                    await axios.get(`https://jsonplaceholder.typicode.com/posts`, { ct:ct.token,})
                    .then(result => {
                          setData(result.data);
                          console.log(result.data);
                     })
                     .catch((error) => {
                          if(axios.isCancel(error))
                          {
                            console.log("cancellled");
                          }
                          else 
                          {
                          console.log("test");
                          }
                     })
            };
            getData();
            return () => {
              ct.cancel();
            }
      },[]);

      return (
        <>
          <h2>View Data - axios source/CancelToken/isCancel</h2>
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

 

export default JPview

