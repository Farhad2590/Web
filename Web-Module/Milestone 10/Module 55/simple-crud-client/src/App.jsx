
import './App.css'

function App() {
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = { email, name }
    console.log(user);
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert('Data Inserted')
      }
      form.reset();
    })
  }

  return (
    <>

      <h1>Simple Crud Client</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br /><br />
        <input type="email" name="email" id="" />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>

    </>
  )
}

export default App
