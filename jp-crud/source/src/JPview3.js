import { useEffect, useState } from "react";
 import { Link } from "react-router-dom";

function JPview3() {
    const [data, setData] = useState([]);

    useEffect(() =>{
            const controller = new  AbortController();
            const signal = controller.signal;
            const getData = async () => {
                    await fetch(`https://jsonplaceholder.typicode.com/posts`, { signal })
                    .then((res) => res.json())
                    .then((data) => {
                        setData(data);
                        console.log(data);
                    })
                     .catch((error) => {
                        if(error.name === "AbortError")
                        {
                            console.log("cancel");
                        }
                        else 
                        {
                            console.log("ok");
                        }
                     })
            };
            getData();
            return () => {
                controller.abort();

            }
      },[]);

      return (
        <>
          <h2>View Data - fetch api (AbortController/signal/abort/AbortError)</h2>
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

 

export default JPview3

