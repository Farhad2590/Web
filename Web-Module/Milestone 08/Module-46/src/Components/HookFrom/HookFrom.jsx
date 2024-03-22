import useInputState from "../../Hooks/UseInput";

const HookFrom = () => {
    // const [name, handleNameChange] = useInputState('Farhad')
    const emailState = useInputState('Farhadhossen@gmail.com')
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('from data', emailState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br /> <br />
                <input  {...emailState} type="email" name="email" id="" />
                <br /> <br />
                <input  type="password" name="pass" />
                <br /> <br />
                <input type="submit" value="Submit" />
               
            </form>
        </div>
    );
};

export default HookFrom;