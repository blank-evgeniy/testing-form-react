import PropTypes from 'prop-types';

const Intro = ({onUpdateStatus}) => {
    return <>
        <h2>Welcome</h2>
        <button 
        onClick={() => {onUpdateStatus('testing')}}
        className="bg-slate-100 w-48 rounded-md border-green-400 border-2 text-black
                hover:bg-green-700 hover:text-gray-50
                transition-colors duration-500 ease-in-out">Start
        </button>
    </>
}

Intro.propTypes = {
    onUpdateStatus: PropTypes.func.isRequired
}

export default Intro;