
import feedback from '../assets/image/feedback.webp'



const ExtraSection = () => {
    return (
       <div>
         <section className="p-6 mt-10 mb-7 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto">
            <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-blue-600"></span>
            <h2 className="text-2xl md:text-5xl font-bold text-center dark:text-gray-900">Compare Your Product In this Website</h2>
            <div className="grid gap-6 my-16 lg:grid-cols-3">
                <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-blue-600 dark:text-gray-50">1</div>
                    <p className="text-xl font-semibold">
                    Navigate through our platform to compare your product with alternatives, making informed decisions effortlessly. Upgrade your selections and discover better options tailored to your needs today!
                    </p>
                </div>
                <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-blue-600 dark:text-gray-50">2</div>
                    <p className="text-xl font-semibold">
                    Easily compare your product with alternatives on our platform. Find the best fit for your needs, making informed decisions that elevate your shopping experience. Explore and upgrade now!
                    </p>
                </div>
                <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-blue-600 dark:text-gray-50">3</div>
                    <p className="text-xl font-semibold">
                    Seamlessly compare your product with alternatives, ensuring you make the best choice. Elevate your shopping experience by discovering superior options tailored to your preferences. Start exploring today
                    </p>
                </div>
            </div>
        </div>
    </section>


<div className='grid lg:grid-cols-2 '>

<div className='w-full'>
    <img src={feedback} className='w-full' alt="" />
</div>




<div className="">


<div className=" w-full h-full flex-col p-8 lg:p-12 dark:bg-gray-200 dark:text-gray-800">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>
			<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
		</div>
		<div className="flex flex-col w-full">
			<textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>
			<div className='flex justify-center'>
            <button type="button" className="btn my-8 font-semibold rounded-md dark:text-gray-50 hover:bg-blue-800 dark:bg-blue-600">Leave feedback</button>
            </div>
		</div>
	</div>
	<div className="flex items-center justify-center">
		<a rel="noopener noreferrer" href="#" className="text-sm  text-blue-700">Maybe later</a>
	</div>
</div>

</div>






</div>








       </div>
    );
};

export default ExtraSection;