import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} =bookmark
    return (
        <div className='m-4 p-4 bg-slate-300 rounded-lg'>
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark : PropTypes.object
}

export default Bookmark;