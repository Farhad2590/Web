import PropTypes from 'prop-types'; 
const Link = ({route}) => {
    return (
        <li className="ml-10 hover:bg-green-500">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes ={
    route : PropTypes.object

}
export default Link;