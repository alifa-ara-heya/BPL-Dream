// import PropTypes from 'prop-types';
import footerLogo from '../../assets/logo-footer.png';
const Footer = () => {
    return (
        <div className='bg-[#06091A]'>
            <div className=' text-white p-10 md:p-20 md:pt-48 max-w-7xl mx-auto py-4'>
                <div className='flex md:justify-center py-4'>
                    <img src={footerLogo} alt="Logo" />
                </div>
                <footer className="footer lg:w-3/4 lg:mx-auto">
                    <nav>
                        <h6 className="footer-title">About Us</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="form-control w-80">
                            <label className="label flex-col items-start space-y-3">
                                <span>Subscribe to our newsletter for the latest updates.</span>
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary bg-amber-600  join-item border-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                    <hr />
            
                </footer>
                <footer className="footer footer-center text-base-content p-8 ">
                        <aside className='pt-6 border-t-2 border-gray-700 w-full'>
                            <p>Copyright © {new Date().getFullYear()} - All rights reserved by players</p>
                        </aside>
                    </footer>
            </div>
        </div>
    );
};

Footer.propTypes = {

};

export default Footer;