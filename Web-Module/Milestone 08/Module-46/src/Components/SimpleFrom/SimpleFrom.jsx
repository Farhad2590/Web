const SimpleFrom = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('HandleClicked');
        console.log(e.target.name.value);
    }

    return (
        <div>         
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br /> <br />
                <input type="submit" value="Submit" />
                {/* <button></button> */}
            </form>
            
        </div>
    );
};

export default SimpleFrom;