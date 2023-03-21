import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';

export default function JPedit() {
    const blankdata = {title:'', body:''}
    const [edit, setEdit] = useState(blankdata);
    const [update, setUpdate] = useState(blankdata);
    const {id} = useParams();
    const navigate = useNavigate();
 
   useEffect(() =>{
    const ct = axios.CancelToken.source();
    const getDetails = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, { ct:ct.token, })
        .then(result => {
            setEdit(result.data);
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

    const HandalEdit = (e) => {
        setUpdate({...edit, ...update, [e.target.name] : e.target.value});
    }
    const HandalUpdate = (e) => {
        axios({
            method: 'PATCH', //put
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            data: JSON.stringify(update),
            headers: {'Content-Type': 'application/json'},
            json: true
        })
        .then((response) => {
            console.log(update);
            console.log(response);
            navigate("/jp-view");
        })
        .catch((error) => {
            console.log(error)
        })
        
    }
    return (<>
            <h1><Link onClick={()=> navigate(-1) || navigate("/jp-view")}>Go Back </Link> - ({ id })</h1> 
 
            <div><textarea rows={5} cols={50} name="title" onChange={HandalEdit} value={update.title ? update.title : edit.title}  /></div>
            <div><textarea rows={10} cols={50} name="body" onChange={HandalEdit} value={update.body ? update.body : edit.body}  /></div>
            <div><span onClick={HandalUpdate}>Submit</span></div>
    </>)
}
