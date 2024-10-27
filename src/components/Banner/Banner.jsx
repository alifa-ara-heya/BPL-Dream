import PropTypes from 'prop-types';
import backgroundImageGradient from '../../assets/bg-shadow.png';
import bgLogo from '../../assets/banner-main.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Banner = ({ handleClaimCreditBtn }) => {
    return (
        <header className="w-11/12 mx-auto rounded-2xl bg-black text-white text-center flex items-center max-w-7xl">
            <div className="bg-cover bg-center  rounded-2xl space-y-5 p-4 flex flex-col justify-center items-center w-full" style={{ backgroundImage: `url(${backgroundImageGradient})` }}>
                <div className=''><img src={bgLogo} alt="background logo" /></div>
                <h1 className='font-bold  text-3xl md:text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-gray-400'>Beyond Boundaries Beyond Limits</p>
                <div className='border px-3 py-3 rounded-lg inline-block'>
                    <button onClick={() => {
                        handleClaimCreditBtn()
                        toast.success('Free Credit is being claimed!')
                    }} className='btn bg-yellow-300'>CLaim Free Credit</button>
                    <ToastContainer />
                </div>
            </div>
        </header>
    );
};

Banner.propTypes = {
    handleClaimCreditBtn: PropTypes.func.isRequired
};

export default Banner;