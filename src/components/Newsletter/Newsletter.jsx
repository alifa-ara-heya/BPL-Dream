// import PropTypes from 'prop-types';
import bgShadow from '../../assets/bg-shadow.png'
const Newsletter = () => {

    return (
        <div className="border px-3 py-4 rounded md:absolute md:w-3/4  md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 max-w-7xl">
            <div className='bg-white rounded-lg'>
                <div style={{ backgroundImage: `url(${bgShadow})` }} className='min-h-80 bg-no-repeat bg-cover bg-center rounded-lg flex flex-col justify-center items-center space-y-4 p-4 text-center'>
                    <h3 className='font-bold text-3xl'>Subscribe to our Newsletter</h3>
                    <p className='font-medium text-xl text-gray-500 md:w-1/2'>Get the latest updates and news right in your inbox!</p>
                    <div className="join">
                        <input className="input input-bordered join-item" placeholder="Email" />
                        <button className="btn join-item rounded-r-full bg-amber-400">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Newsletter.propTypes = {

};

export default Newsletter;