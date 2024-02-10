import React from 'react';
import { useDispatch } from 'react-redux';
import { IoSearchCircle } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { Showbycategory } from '../redux/Search/actions';
import { useNavigate } from 'react-router-dom';


const Banner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(Showbycategory(data));
    // onInput(data.country); // Uncomment and implement this function if needed
    console.log(data);
    navigate(`/searchTobook/${data.country}`);
    reset();
  };

  return (
    <div className='px-4 lg:px-24  flex items-center w-full'>
      <div className='flex w-full md:flex-row justify-between items-center gap-12 py-20 before:absolute'>
        <div className='z-[-3]'>
          <img className='rounded-[25px]  h-[600px] w-[1200px]' 
          src='/phoenix-island-resort-sanya-china-skyscrapers-luxury-hotel-4716x3144-6540.jpg' 
          />
        </div>

        <div className='absolute z-[0] top-40 mx-8'>
          <h1 className='text-4xl font-bold text-white w-[60%] top-0 left-0 mx-8'>The right destination for you and your family</h1>
          <p className='text-white w-[50%] mx-8 top-0 mt-12'>creative taglines have capability of the capturing the attention of potential customer</p>
          <div style={{ boxShadow: '0 10px 25px rgb(113, 113, 113)' }} className='absolute px-4 lg:px-4 shadow-md bg-white flex items-center w-full lg:w-[90%] top-60 rounded-[25px]  '>
            <form
              style={{ before: 'backdrop-filter: blur(5px)' }}
              className='w-full flex flex-col md:flex-row items-center bg-white py-5 rounded-md justify-between  '
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='mb-4 md:mb-0 md:mr-4 flex-1 px-5  '>
                <label htmlFor='country'>Location</label>
                <select
                  {...register('country', { required: true })}
                  id='country'
                  
                  className=' border-transparent '

                >
                  <option value=''> Country</option>
                  <option value='India'>India</option>
                  <option value='Singapore'>Singapore</option>
                  <option value='UAE'>UAE</option>
                  <option value='Indonesia'>Indonesia</option>
                  <option value='United Kingdom'>United Kingdom</option>


                </select>
                {errors.country && <span className='error'>Please enter a valid Country</span>}
              </div>

              <div className='mb-4 md:mb-0 px-3 '>
                <label htmlFor='checkin'>Check-In</label>
                <input {...register('checkin', { required: true })} id='checkin' type='date'
                   className=' border-transparent '
 

                 />
              </div>

              <div className='mb-4 md:mb-0   '>
                <label htmlFor='checkout'>Check-Out</label>
                <input
                  id='checkout'
                  {...register('checkout', { required: true })}
                  type='date'
                  className=' border-transparent '
                />
              </div>
              <div className='flex lg:flex-col mb-4 md:mb-0 '>
                <label htmlFor='count'>Guests</label>
                <input
                  {...register('count', { required: true })}
                  id='count'
                  type='number'
                  placeholder='Count'
                  className='border-transparent w-[60px]' 
                  

                />
              </div>
              <div>
                <button type='submit' className='text-5xl px-3'>
                  <IoSearchCircle />
                </button>
              </div>
            </form>
          </div>

        </div>
    
      </div>
    </div>
  );
};

export default Banner;
