
 import { useEffect } from "react";
 import axios from 'axios';
 import { useParams, useNavigate  } from "react-router-dom";
 
export default function JPdelete() {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);

    useEffect(() =>{
        const deletePost = async () => {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log('Delete successful', response);
                navigate("/jp-view");
             })
             .catch((error) => {
                console.log(error);
             })
        };
        deletePost();
      });

  return (
    <></>
  )
}
