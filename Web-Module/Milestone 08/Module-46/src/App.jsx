
import './App.css'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookFrom from './Components/HookFrom/HookFrom'
// import RefFrom from './Components/RefFrom/RefFrom'
// import SimpleFrom from './Components/SimpleFrom/SimpleFrom'
// import StateFullFrom from './Components/StateFullFrom/StateFullFrom'

function App() {
  const handleSignupSubmit = data => {
    console.log('Signupdata', data);

  }

  const handleUpdateSubmit = data => {
    console.log('Update', data);
  }

  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFullFrom></StateFullFrom> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignupSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign up first</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateSubmit} submitBtnTxt={'Update'}>
        <div>
          <h2>Update</h2>
          <p>Please Update first</p>
        </div>
      </ReusableForm>

    </>
  )
}

export default App
