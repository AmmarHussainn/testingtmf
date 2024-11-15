import { useState } from 'react';
import SvgIcons from './svg';

const TestiTeam = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([
    {
      img: `${process.env.PUBLIC_URL}/images/samantha.jpeg`,
      position: 'Creative Director, BistroWave',
      description : 'Our restaurant needed a visually stunning video menu to enhance the customer experience, and this AI service delivered beyond our expectations. It was fast, easy to use, and the results were professional-grade. Highly recommended!',
      name : "Samantha T"
    },
    {
      img: `${process.env.PUBLIC_URL}/images/james.jpeg`,
      position: 'Marketing Manager, Foodie Delights',
      description : 'Implementing a video menu seemed daunting at first, but this AI solution made it a breeze. The quality was top-notch, and it cut down the production time significantly. I was worried about it not capturing our unique style, but the AI handled everything effortlessly',
     name : "James L"
    },
    {
      img: `${process.env.PUBLIC_URL}/images/linda.jpeg`,
      position: 'Owner, GreenLeaf Café',
      description : "Our customers love the new video menus! I was hesitant about using AI, thinking it would lack the personal touch, but this service created exactly what I envisioned. The AI understood our needs and produced a visually engaging, on-brand menu that enhanced customer",
      name : "Linda M"
    },
  ]);

  return (
    // <div className='w-full h-[400px] relative flex items-center justify-center'>
    //   <div onClick={() => number - 1  < 0 ? setNumber(data.length -1): setNumber(number-1)} className='rounded-full p-2 hover:bg-[#0040FF] mr-1 cursor-pointer'>
    //     <SvgIcons.ArrowLeft  />
    //   </div>
    //   {
    //     data[number] && (
    //       <div className='w-[280px] transition duration-300 ease-in-out'>
    //         <img src={data[number].img} alt='team-member' className='transition duration-300 ease-in-out' />
    //         <p className='text-white pt-3 text-left font-montserrat transition duration-300 ease-in-out'>{data[number].position}</p>
    //       </div>
    //     )
    //   }
    //   {
    //     console .log(data[number].img)
    //   }
    //   <div onClick={() => number + 1  >= data.length ? setNumber(0): setNumber(number+1)} className='rounded-full p-2 hover:bg-[#0040FF] ml-1 cursor-pointer'>
    //     <SvgIcons.ArrowRight  />
    //   </div>
    // </div>
    <div className='w-full h-[400px]  relative flex items-center justify-center'>
      <div
        onClick={() =>
          number - 1 < 0 ? setNumber(data.length - 1) : setNumber(number - 1)
        }
        className='rounded-full p-1  mr-1 cursor-pointer transition-colors duration-300 ease-in-out bg-[#5C57C3]'
      >
        <SvgIcons.ArrowLeft />
      </div>
      {data[number] && (
        <div className='w-[80%] md:w-[280px] transition-transform duration-300 ease-in-out'>
          <div className='w-[100%] h-[280px] bg-white rounded-xl p-3 md:p-6 flex flex-col justify-between'>
            <p className='text-[#7F7F7F] text-left text-[13px] font-poppins'>
              {data[number].description}
            </p>
            <div className='flex gap-1 items-center'>
              <img
                className=' w-[46px] h-[46px] rounded-full'
                src={data[number].img}
              />
              <div className=''>
                <h5 className='text-[14px] font-semibold font-roboto'>
                  {data[number].name}
                </h5>
                <h5 className='text-[14px]  font-poppins'>
                  {data[number].position}
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() =>
          number + 1 >= data.length ? setNumber(0) : setNumber(number + 1)
        }
        className='rounded-full p-1 bg-[#5C57C3] h ml-1 cursor-pointer transition-colors duration-300 ease-in-out'
      >
        <SvgIcons.ArrowRight />
      </div>
    </div>
  );
};

export default TestiTeam;
