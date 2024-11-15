import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SvgIcons from '../components/svg';

import { useNavigate } from 'react-router-dom';
export const IndividualBlog = () => {
  const navigate = useNavigate();
  const [data , setData] = useState(null)
   let Blogdata = [
    {
      _id: '123456',
      image: 'PlaceholderImage.png',
      title: 'How to Create Professional Videos in Minutes with Our Software',
      description:
        'Discover how our intuitive video production software enables you to transform your images and text into high-quality videos in just a few clicks. Perfect for marketers, content creators, and anyone looking to enhance their visual content effortlessly.',
    },
    {
      _id: '7891011',
      image: 'PlaceholderImage1.png',
      title: ' 5 Tips for Making Your Videos Stand Out',
      description:
        'Learn the top five tips for creating engaging and impactful videos using our software. From choosing the right visuals to adding the perfect audio, these tips will help you captivate your audience and elevate your content strategy.',
    },
    {
      _id: '12131415',
      image: 'PlaceholderImage2.png',
      title:
        'The Future of Content Creation: How AI is Revolutionizing Video Production',
      description:
        'Explore how artificial intelligence is changing the landscape of video production. Our software leverages cutting-edge AI technology to simplify the video creation process, making it accessible to everyone, regardless of technical expertise.',
    },
  ];

  useEffect(() => {
    console.log('updated');
    localStorage.getItem('blog') && setData(JSON.parse(localStorage.getItem('blog')))
  }, []);
  return (
    <div>
      <Header />

      {/* 1st IMAGE */}

      {/* <div className='h-[calc(100vh-84px)] md:h-[calc(100vh-60px)] w-100 '>
        <img
          className='w-[100%] md:h-[100%] object-cover'
          src={process.env.PUBLIC_URL + `/images/${data?.image}`}
        />
      </div> */}

<div
      
        className='h-[calc(100vh-84px)] bg-black text-white md:h-[calc(100vh-60px)] w-full flex items-center flex-col md:flex-row justify-center'
      >
        <div className='w-[90%] md:w-[50%] flex flex-col px-0  md:px-10 gap-4 md:gap-8'>
         
        <div className='w-[90%] py-10'>
          <div className='flex pt-4 '>
            <div className='bg-white text-black py-1 px-2 text-[14px] font-semibold  font-roboto'>
              Category
            </div>
          </div>
          <div className='flex pt-4 flex-col'>
            <h3 className='text-[22px] md:text-[40px] lg:text-[48px] font-bold font-roboto text-white '>
              {data?.title}
            </h3>
           
          </div>
         
        </div>

        </div>
        <div className='w-[90%] md:w-[40%] '>
          <img  src={process.env.PUBLIC_URL + `/images/${data?.image}`}  />
        </div>
      </div>

      {/* 2ND SECTION */}

      <div className='bg-black flex justify-center'>
        <div className='w-[90%] pb-10'>
          {/* <div className='flex pt-4 '>
            <div className='bg-white py-1 px-2 text-[14px] font-semibold  font-roboto'>
              Category
            </div>
          </div> */}
          <div className='flex  container w-full flex-col'>
            {/* <h3 className='text-[22px] md:text-[48px] font-bold font-roboto text-white '>
              {data?.title}
            </h3> */}
            <p className='text-[16px] md:pl-10 md:text-[30px]  text-white  font-roboto '>
              {data?.description}
            </p>
          </div>
          {/* <div className='border text-white border-white w-fit py-2 px-4 ml-auto mr-auto cursor-pointer hover:bg-white hover:text-black mt-20'>
            Read Next
          </div> */}
        </div>
      </div>


        {/* 3RD SECTION */}
        <div className='bg-black flex justify-center'>
        <div className='w-[90%]  flex flex-col items-center py-10'>
          
          <h3 className='text-[40px] md:text-[48px] pt-3 font-bold font-poppins text-white text-center '>
          More Blogs That you might find interesting
          </h3>
          <p className=' text-[16px] md:text-[18px] pt-3 text-white  font-poppins  text-center'>
            Stay Updated with Our Expert Blog Posts on Video Production and
            Content Creation
          </p>

          <div className='w-full flex gap-5 justify-center flex-wrap pt-20 pb-20'>
          {Blogdata.map((item) => {
              return (
                <div
                  onClick={() => {
                    localStorage.setItem('blog', JSON.stringify(item));
                    setData({...item})
                    window.scrollTo(0, 0);
                    navigate(`/individualblog/${item._id}`);
                  }}
                  className='w-[100%] md:w-[416px] cursor-pointer'
                  id={item._id}
                >
                  <div>
                    <img
                      className='w-[100%]'
                      src={process.env.PUBLIC_URL + '/images/' + item.image}
                    />
                  </div>
                  <div className='flex pt-4 '>
                    <div className='bg-white py-1 px-2 text-[14px] font-semibold  font-roboto'>
                      Category
                    </div>
                    <div className='text-white py-1 px-2 text-[14px] font-semibold  font-roboto'>
                      5 min read
                    </div>
                  </div>
                  <div className='flex pt-4 flex-col'>
                    <h3 className='text-[22px] md:text-[24px] font-bold font-roboto text-white '>
                      {item.title}
                    </h3>
                    <p className='text-[16px] pt-3 text-white  font-roboto '>
                      {item.description}
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      localStorage.setItem('blog', JSON.stringify(item));
                      navigate(`/individualblog/${item._id}`);
                    }}
                    className='text-[16px] pt-5 text-white  font-roboto flex items-center gap-3 cursor-pointer'
                  >
                    Read More <SvgIcons.ArrowRightSM />
                  </div>
                </div>
              );
            })}
          </div>

          <div className='border text-white border-white w-fit py-2 px-4 ml-auto mr-auto cursor-pointer hover:bg-white hover:text-black'>
            View All
          </div>
        </div>
      </div>
      {/* 4TH SECTION */}

      <div className='bg-black'>
        <Footer />
      </div>
    </div>
  );
};
