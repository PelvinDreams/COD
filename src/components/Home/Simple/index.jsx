const Simple = () => {
    return (
      <section className="bg-simple-bg relative before:absolute before:w-full before:h-full before:bg-arrow-bg before:bg-no-repeat before:top-0">
        <div className="">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10">
            <h3 className="text-center text-white text-3xl lg:text-5xl font-semibold mb-6">
              Unlock Your Ultimate Gaming Experience
            </h3>
            <p className="text-center text-white/60 text-lg font-normal mb-8">
              Buy, sell, or upgrade to premium accounts effortlessly on a secure platform built for gamers, and more.
            </p>
            <div className="flex justify-center">
              {/* <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                Explore Now
              </button> */}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Simple;
  