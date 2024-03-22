import { useState } from "react";

const StateFullFrom = () => {
    const [email, setEmail] = useState(null)
    const [name, setName] = useState('Farhad')
    const [pass, setPass] = useState(null)
    const [error, setError] = useState(null)
    const handleSubmit = e => {
        e.preventDefault();

        if (pass.length < 6) {
            setError('Password must be 6 character or greater than 6')
        }
        else {
            setError('')
            console.log(email, name, pass);
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handlePassChange = e => {
        setPass(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br /> <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br /> <br />
                <input onChange={handlePassChange} type="password" name="pass" required />
                <br /> <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }

                {/* <button></button> */}
            </form>

        </div>
    );
};

export default StateFullFrom;