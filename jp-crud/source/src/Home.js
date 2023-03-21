 
export default function Home() {
  const data = [
    {id:1, name:'aaaa', mobile:'111111111', email:'aaaa@gmail.com'},
    {id:2, name:'bbb', mobile:'22222222', email:'bbb@gmail.com'},
    {id:3, name:'ccc', mobile:'3333333', email:'ccc@gmail.com'},
    {id:4, name:'ddd', mobile:'44444444', email:'dddd@gmail.com'},
    {id:5, name:'eee', mobile:'555555555', email:'eee@gmail.com'},
    {id:6, name:'fff', mobile:'6666666666', email:'ffff@gmail.com'},
    {id:7, name:'ggg', mobile:'777777777', email:'gggg@gmail.com'},
    {id:8, name:'hhhh', mobile:'88888888', email:'hhhh@gmail.com'},
    {id:9, name:'iii', mobile:'999999999', email:'iiii@gmail.com'}
  ]




  return (
    <>
      <h2>View Data</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((d, i)=>{
            return(
            <tr key={i}>
              <td>{d.id} </td>
              <td>{d.name}</td>
              <td>{d.mobile}</td>
              <td>{d.email}</td>
            </tr>
            )
          })
        }
        </tbody>
      </table>
    </>
  )
}
