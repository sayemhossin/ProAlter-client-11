import PropTypes from 'prop-types';
const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover md:h-[80vh] h-[40vh] lg:h-[90vh]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full  h-full bg-gray-900/70'>
        <div className='text-center md:px-20 '>
          <i className='text-xs md:text-2xl text-blue-400  font-semibold  lg:text-4xl'>
            {text}
          </i>
          <br />
         
        </div>
      </div>
    </div>
  )
}



Slide.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};




export default Slide
