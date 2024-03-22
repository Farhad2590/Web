import { useEffect, useRef } from "react";

const RefFrom = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }
    useEffect(() => {
        nameRef.current.focus()
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br /> <br />
                <input ref={emailRef} defaultValue={'FarhadHossen@gmail.com'} type="email" name="" id="" />
                <br /> <br />
                <input ref={passRef} type="password" name="" id="" />
                <br /> <br />
                <input type="submit" value="Submit" />
                {/* <button></button> */}
            </form>
        </div>
    );
};

export default RefFrom;