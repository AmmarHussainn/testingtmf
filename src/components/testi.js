import React from 'react';
import TestiTeam from './testiTeam';

const TestiMonials = () => {
  return (
    <section id='Team' className=''>
      {/* <div className="team-member">
        <h3>Sean T.</h3>
        <p>CEO & Lead Developer</p>
      </div>
      <div className="team-member">
        <h3>Alex M.</h3>
        <p>Senior Software Engineer</p>
      </div>
      <div className="team-member">
        <h3>Lisa R.</h3>
        <p>Project Manager</p>
      </div>
      <div className="team-member">
        <h3>Tom K.</h3>
        <p>UX/UI Designer</p>
      </div> */}
      <div className='md:flex justify-around flex-wrap hidden gap-10 pt-20'>
        <div className='w-[361px] h-[280px] bg-white rounded-xl p-6 flex flex-col justify-between'>
          <p className='text-[#7F7F7F] text-left text-[15px] font-poppins'>
            "Our restaurant needed a visually stunning video menu to enhance the
            customer experience, and this AI service delivered beyond our
            expectations. It was fast, easy to use, and the results were
            professional-grade. Highly recommended!"
          </p>
          <div className='flex gap-2 items-center'>
            <img
              className=' w-[56px] h-[56px] rounded-full'
              src={process.env.PUBLIC_URL + '/images/samantha.jpeg'}
            />
            <div className=''>
              <h5 className='text-[16px] font-semibold font-roboto'>
                Samantha T.
              </h5>
              <h5 className='text-[14px]  font-poppins'>
                 Creative Director, BistroWave
              </h5>
            </div>
          </div>
        </div>{' '}
        <div className='w-[361px] h-[280px] bg-white rounded-xl p-6 flex flex-col justify-between'>
          <p className='text-[#7F7F7F] text-left text-[15px] font-poppins'>
            "Implementing a video menu seemed daunting at first, but this AI
            solution made it a breeze. The quality was top-notch, and it cut
            down the production time significantly. I was worried about it not
            capturing our unique style, but the AI handled everything
            effortlessly"
          </p>
          <div className='flex gap-2 items-center'>
            <img
              className=' w-[56px] h-[56px] rounded-full'
              src={process.env.PUBLIC_URL + '/images/james.jpeg'}
            />
            <div className=''>
              <h5 className='text-[16px] font-semibold font-roboto'>
                James L.
              </h5>
              <h5 className='text-[14px]  font-poppins'>
                 Marketing Manager, Foodie Delights
              </h5>
            </div>
          </div>
        </div>{' '}
        <div className='w-[361px] h-[280px] bg-white rounded-xl p-6 flex flex-col justify-between'>
          <p className='text-[#7F7F7F] text-left text-[15px] font-poppins'>
            "Our customers love the new video menus! I was hesitant about using
            AI, thinking it would lack the personal touch, but this service
            created exactly what I envisioned. The AI understood our needs and
            produced a visually engaging, on-brand menu that enhanced 
            customer"
          </p>
          <div className='flex gap-1 items-center'>
            <img
              className=' w-[56px] h-[56px] rounded-full'
              src={process.env.PUBLIC_URL + '/images/linda.jpeg'}
            />
            <div className=''>
              <h5 className='text-[16px] font-semibold font-roboto'>Linda M</h5>
              <h5 className='text-[14px]  font-poppins'>
                 Owner, GreenLeaf Café
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden block'>
        <TestiTeam />
      </div>
    </section>
  );
};

export default TestiMonials;
