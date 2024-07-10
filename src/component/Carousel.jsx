function Carousel() {
  return (
    <>
      <div class="relative w-full h-[320px]" id="home">
        <div class="absolute inset-0 opacity-70">
          <img
            src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Background Image"
            class="object-cover object-center w-full h-full"
          />
        </div>
        <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-4 md:mb-0">
            <h1 class="text-black font-medium text-4xl md:text-5xl leading-tight mb-2">
              Bappa Flour mill
            </h1>
            <p class="font-regular text-black text-xl mb-8 mt-4">
              One stop solution for flour grinding services
            </p>
            {/* <a
              href="#contactUs"
              class="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Contact Us
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
