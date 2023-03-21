import { useEffect, useState } from "react";
 import axios from 'axios';
 import { Link, useParams, useNavigate  } from "react-router-dom";
 

export default function JPdetail() {
    const [item, setItem] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
   // console.log(id);

    
    useEffect(() =>{
      const ct = axios.CancelToken.source();
        const getDetails = async () => {
            await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, { ct:ct.token, })
            .then(result => {
                setItem(result.data);
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
        getDetails();
        return () => {
          ct.cancel();
        }
      },[id]);

      return (
        <>
            <h1><Link onClick={() => navigate(-1) || navigate('/JPview')}>Go Back</Link> - {item.id}</h1>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
        </>
      )
}
 