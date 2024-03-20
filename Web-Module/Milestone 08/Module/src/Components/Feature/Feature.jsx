import PropTypes from 'prop-types'; 
import { BsChevronDoubleRight } from "react-icons/bs";
const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <BsChevronDoubleRight className='text-green-500 mr-2'/>
            <p>{feature}</p>
        </div>
        
    );
};
Feature.propTypes ={
    feature : PropTypes.string

}
export default Feature;