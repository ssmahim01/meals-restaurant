const Footer = () => {
    return (
      <div>
        <footer className="bg-orange-100">
        <div className="sm:w-4/5 w-11/12 mx-auto flex flex-row flex-wrap justify-between items-center py-16 sm:gap-0 gap-6 sm:space-x-0 space-x-6">
                <nav>
                    <h6 className="text-2xl text-gray-700 font-bold">Section</h6>
                    <div className="flex flex-col gap-4 mt-4">
                        <a className="link link-hover text-lg text-gray-600 font-medium">Home</a>
                        <a className="link link-hover text-lg text-gray-600 font-medium">Features</a>
                        <a className="link link-hover text-lg text-gray-600 font-medium">Pricing</a>
                        <a className="link link-hover text-lg text-gray-600 font-medium">FAQs</a>
                        <a className="link link-hover text-lg text-gray-600 font-medium">About</a>
                    </div>
                  </nav>
    
                <nav className="sm:mb-9 mb-7">
                    <h6 className="text-2xl text-gray-700 font-bold">Section</h6>
                    <div className="flex flex-col gap-4 mt-4">
                        <a className="link link-hover text-lg text-gray-600 font-medium">Meals</a>
                        <a className="link link-hover text-lg text-gray-600 font-medium">Delicious Foods</a>
                        <a className="link link-hover text-lg text-gray-600 font-medium">Homemade Foods</a>
                        <a className="link link-hover text-lg text-gray-600 font-medium">Vegetables</a>
                    </div>
                  </nav>
    
                <nav className="sm:mb-9">
                    <h6 className="text-2xl text-gray-700 font-bold">Resource</h6>
                    <div className="flex flex-col gap-4 mt-4">
                        <a className="link link-hover text-lg text-gray-600 font-medium">FAQ</a>
                        <a className="link link-hover text-lg text-gray-600 font-medium">Support</a>
                        <a className="link link-hover text-lg text-gray-600 font-medium">Privacy Policy</a>
                        <a className="link link-hover text-lg text-gray-600 font-medium">Terms Of Service</a>
                    </div>
                  </nav>
                
                  <form className="lg:w-2/5 w-full space-y-4 lg:mb-20 mt-5">
                    <h6 className="text-2xl text-gray-700 font-bold">Subscribe to Our Newsletter</h6>
    
                    <p className="lg:w-full w-11/12 text-gray-600 font-medium">Its a footer part.In here, you can view many kinds of links.These links are provide content of our Services, Resources and last you would like to subscribe through your email address</p>
    
                    <fieldset className="form-control w-80">
                      
                      <div className="flex justify-center items-center">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="input input-bordered sm:w-80 w-full" required/>
                        <button className="btn bg-amber-400 ml-3 sm:px-7 px-5 border-none font-bold" type="submit">Subscribe</button>
                      </div>
                    </fieldset>
                  </form>
            </div>
      </footer>
      </div>
    );
};

export default Footer;