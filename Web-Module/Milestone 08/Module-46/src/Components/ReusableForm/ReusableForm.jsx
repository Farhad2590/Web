import { Children } from "react";


const ReusableForm = ({formTitle,handleSubmit, submitBtnTxt = 'Submit',children}) => {
    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name : e.target.name.value,
            email : e.target.name.value,
            password : e.target.name.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            <form onSubmit={handleLocalSubmit}>
               {children}
                <input type="text" name="name" />
                <br /> <br />
                <input type="email" name="email" id="" />
                <br /> <br />
                <input type="password" name="pass" />
                <br /> <br />
                <input type="submit" value={submitBtnTxt} />
               
            </form>
        </div>
    );
};

export default ReusableForm;