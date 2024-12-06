import { Link } from 'react-router-dom';
import error from '../assets/404.gif'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <Link to={'/'}> Back to home</Link>
            <img className='w-full' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;