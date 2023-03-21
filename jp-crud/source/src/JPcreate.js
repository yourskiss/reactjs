import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function JPcreate() {
  const [txtval, setTxtval] = useState({title:'', body:''});
  const [error, setError] = useState({ title:'', body:'' });
   const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const HandalChange = (e) => {
    setTxtval({...txtval, [e.target.name] : e.target.value});
  }
  const HandalSubmit = (e) => {
         e.preventDefault();
        if(status && HandalValidation())
        {
          axios({
              method: 'POST',
              url: 'https://jsonplaceholder.typicode.com/posts',
              data: JSON.stringify(txtval),
              headers: {'Content-Type': 'application/json'},
              json: true
          })
          .then((response) => {
              console.log(txtval);
              console.log(response);
              navigate("/");
          })
          .catch((error) => {
              console.log(error)
          })
        }
  }

  const HandalValidation = () => { 
      if(txtval.title === '')
      {
        setError({...error, [error.title]:"title ee"})
      }
      else if(txtval.body === '')
      {
        setError({...error, [error.body]:"body ee"})
      }
      else 
      {
        setStatus(true);
      }
  }


 
  return (
    <>
    <form onSubmit={HandalSubmit}>
        <h2>Create post</h2>
        <div><input name="title" id="title" value={txtval.title} onChange={HandalChange} placeholder="title" /></div>
        <p>{error.title}</p>
        <div><input name="body" id="body" value={txtval.body} onChange={HandalChange} placeholder="body" /></div>
        <p>{error.body}</p>
        <div><button type="submit">Submit</button></div>
      </form>
    </>
  )

}
