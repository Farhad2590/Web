import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const Priceoptions = ({ option }) => {
    console.log(option);
    const { name, price, features } = option;
    return (
     
            <div className='bg-blue-600 rounded-xl text-white px-5 py-10 flex flex-col' >
                <h2 className='text-center'>
                    <span className='text-5xl'>{price}</span><br />
                    <span className='text-3xl'>/month</span>
                </h2>
                <h3 className="text-4xl text-center mt-5 mb-5">{name}</h3>
                <div className='pl-6 flex-grow'>
                    {
                        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                    }
                </div>
                <button className='bg-green-500 p-2 rounded-3xl w-full hover:bg-green-900'>Buy Now</button>
            </div>

    );
};

Priceoptions.propTypes = {
    option: PropTypes.object

}

export default Priceoptions;