import React from 'react';
import Header from '../components/Header';
import SvgIcons from '../components/svg';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export const AllBlogs = () => {
  const navigate = useNavigate();
  let data = [
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

  return (
    <div>
      <Header />

      {/* 1ST SECTION */}

      <div className='bg-black flex justify-center'>
        <div className='w-[90%] md:w-[65%] py-40'>
          {/* <h1></h1> */}
          <h1 className='text-[38px] md:text-[48px] font-bold text-white text-center font-poppins'>
            Blogs that you may find interesting Give them a read
          </h1>
        </div>
      </div>

      {/* 2ND SECTION */}

      <div className='flex justify-center bg-black'>
        <div className='w-[90%]'>
          <div className='w-full flex gap-5 justify-center flex-wrap  pb-20'>
            {data.map((item) => {
              return (
                <div
                  onClick={() => {
                    localStorage.setItem('blog', JSON.stringify(item));
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
        </div>
      </div>

      {/* 3RD SECTION */}

      <div className='bg-black'>
        <Footer />
      </div>
    </div>
  );
};
