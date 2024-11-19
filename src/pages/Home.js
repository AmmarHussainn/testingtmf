import React, { useState } from 'react';
import Header from '../components/Header';
import Trusted from '../components/Trusted';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import Carosal from '../components/Carosal';
import SvgIcons from '../components/svg';
import TestiMonials from '../components/testi';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/popup';

function Home() {
  const [popup , setPopup] = useState(false)
  const navigate = useNavigate();
  const handleAllBlogsClick = () => {
    navigate('/allblogs');
  };
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
  ];
  const imageUrl = `${process.env.PUBLIC_URL}/images/OneBack.png`;
  const bgImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const imageUrlTwo = `${process.env.PUBLIC_URL}/images/TwoBack.png`;
  const bgImageStyleTwo = {
    backgroundImage: `url(${imageUrlTwo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const imageUrlThree = `${process.env.PUBLIC_URL}/images/bg-two.png`;
  const bgImageStyleThree = {
    backgroundImage: `url(${imageUrlThree})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  
  return (
    <div>
      <Header />
      {/* 1ST SECTION */}
      <div
        style={bgImageStyle}
        className='h-[calc(100vh-84px)] md:h-[calc(100vh-60px)] w-full flex items-center flex-col md:flex-row justify-center'
      >
        <div className='w-[90%] md:w-[50%] flex flex-col px-0  md:px-10 gap-4 md:gap-8'>
          <h1 className='text-[30px] md:text-[48px] font-bold font-poppins '>
            Transform Your Ideas into Stunning Food Videos
          </h1>
          <p className='font-poppins text-[16px] md:text-[18px]'>
            From Concept to Creation, We Turn Your Vision into Captivating and
            Professional Videos that Engage and Inspire Your Audience
          </p>
          <div className=' flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[143px] rounded-md cursor-pointer'>
            <a href='#' className='text-[12px] text-white font-poppins '>
              Get Started
            </a>
          </div>
        </div>
        <div className='w-[80%] md:w-[40%] px-10'>
          <img src={process.env.PUBLIC_URL + '/images/oneinsideone.png'} />
        </div>
      </div>
      {/* 2ND SECTION */}

      <Trusted
        className='bg-[#E9F2FF]'
        text='Trusted by leading businesses in marketing and content creation industries.'
        text_classes='font-poppins w-[90%] text-center md:w-fit text-[16px] md:text-[18px] pt-20 pb-10'
      />

      {/* 3RD SECTION */}

      <div
        style={bgImageStyleTwo}
        className='flex justify-center items-center flex-col'
      >
        <h2 className='text-[30px] md:text-[40px] font-bold font-poppins pt-20 pb-10'>
          How it works
        </h2>

        <div className='flex gap-10 justify-center items-center flex-col flex-wrap md:flex-row pb-20'>
          <div className='h-[260px] w-[90%] md:w-[305px] flex flex-col gap-y-4 items-center shadow-custom bg-white p-7 rounded-lg'>
            <div className='bg-[#5C57C3] w-[36px] h-[36px] flex items-center justify-center'>
              <img
                className='w-[27px] h-[27px]'
                src={process.env.PUBLIC_URL + '/images/icon _cloud upload_.png'}
              />
            </div>
            <h4 className='text-[17px] font-bold font-poppins '>
              Input Text or Upload Image
            </h4>
            <p className='text-[14px] font-poppins text-center'>
              Easily input your text or upload an image to start creating your
              video content
            </p>
          </div>

          <div className='h-[260px] w-[90%] md:w-[305px] flex flex-col gap-y-4 items-center shadow-custom bg-white p-7 rounded-lg'>
            <div className='bg-[#5C57C3] w-[36px] h-[36px] flex items-center justify-center'>
              <img
                className='w-[27px] h-[27px]'
                src={
                  process.env.PUBLIC_URL + '/images/icon _cloud upload_2.png'
                }
              />
            </div>
            <h4 className='text-[17px] font-bold font-poppins '>
              Generate and Revise
            </h4>
            <p className='text-[14px] font-poppins text-center'>
              Our platform generates your video, allowing you to make any
              necessary revisions effortlessly.
            </p>
          </div>

          <div className='h-[260px] w-[90%] md:w-[305px] flex flex-col gap-y-4 items-center shadow-custom bg-white p-7 rounded-lg'>
            <div className='bg-[#5C57C3] w-[36px] h-[36px] flex items-center justify-center'>
              <img
                className='w-[27px] h-[27px]'
                src={
                  process.env.PUBLIC_URL + '/images/icon _cloud upload_3.png'
                }
              />
            </div>
            <h4 className='text-[17px] font-bold font-poppins '>Export</h4>
            <p className='text-[14px] font-poppins text-center'>
              Once satisfied, export your high-quality video ready to showcase
              your food business.
            </p>
          </div>
        </div>
      </div>

      {/* 4TH SECTION */}

      <div className='bg-[#E9F2FF] flex justify-center '>
        <div className='w-[90%] md:w-[50%] pt-20 flex flex-col gap-y-5'>
          <h5 className='text-[12px]  font-poppins text-center'>
            Generate Mouth-Watering Videos Instantly
          </h5>
          <h1 className=' text-[30px] md:text-[40px] font-bold font-poppins text-center'>
            Turn Your Culinary Ideas into Captivating Videos in Seconds
          </h1>
          <p className='text-[12px]  font-poppins text-center'>
            Our service effortlessly converts your menu items, recipes, and food
            photos into high-quality, engaging videos with just a few clicks.
            Ideal for showcasing your culinary creations without the need for
            advanced editing skills
          </p>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/Girl.png'} />
          </div>
        </div>
      </div>

      {/* 5TH SECTION */}

      <div style={bgImageStyleThree} className='flex justify-center'>
        <div className='w-[90%] md:w-[80%] flex flex-col items-center pt-20'>
          <h1 className='font-poppins text-[38px] md:text-[48px] text-white font-bold'>
            Value Expanded
          </h1>
          <p className='font-roboto text-[14px] md:text-[18px] text-white text-center p-[10px] md:p-[40px] pb-[20px]'>
            Easily convert your recipes, food images, and menu descriptions into
            stunning videos with just a few clicks. Our software simplifies
            video production, allowing you to create engaging content quickly
            and effortlessly, without any technical skills
          </p>
          <div className='w-[161px] h-[2px] bg-white'></div>
          <div className='w-[100] md:w-[372px] pt-[60px] pb-[20px]'>
            <img
              className='w-[100%]'
              src={process.env.PUBLIC_URL + '/images/modern-design.png'}
            />
          </div>

          <div className='flex pt-[40px] flex-wrap justify-center gap-10 pb-20'>
            <div className='bg-[#5C57C3] w-[80%] md:w-[280px] md:h-[189px] rounded-lg p-7 flex justify-center flex-col items-center gap-3'>
              <div className='w-[43px] h-[42px]'>
                <img
                  className='w-full'
                  src={process.env.PUBLIC_URL + '/images/text-to-image.png'}
                />
              </div>
              <h4 className='font-roboto text-[18px] font-medium text-white text-center'>
                Text to Video
              </h4>
              <p className='font-roboto text-[16px] text-white text-center'>
                Get your videos generated with just few simple text inputs.
              </p>
            </div>

            <div className='bg-[#5C57C3] w-[80%] md:w-[280px] md:h-[189px] rounded-lg p-7 flex justify-center flex-col items-center gap-3'>
              <div className='w-[43px] h-[42px]'>
                <img
                  className='w-full'
                  src={process.env.PUBLIC_URL + '/images/text-to-image.png'}
                />
              </div>
              <h4 className='font-roboto text-[18px] font-medium text-white text-center'>
                Video Menu Generation
              </h4>
              <p className='font-roboto text-[16px] text-white text-center'>
                Get your videos generated with just few simple inputs.
              </p>
            </div>

            <div className='bg-[#5C57C3] w-[80%] md:w-[280px] md:h-[189px] rounded-lg p-7 flex justify-center flex-col items-center gap-3'>
              <div className='w-[43px] h-[42px]'>
                <img
                  className='w-full'
                  src={process.env.PUBLIC_URL + '/images/text-to-image1.png'}
                />
              </div>
              <h4 className='font-roboto text-[18px] font-medium text-white text-center'>
                Image to Video
              </h4>
              <p className='font-roboto text-[16px] text-white text-center'>
                Get your videos generated with just few simple image inputs.
              </p>
            </div>
            <div className='bg-[#5C57C3] w-[80%] md:w-[280px] md:h-[189px] rounded-lg p-7 flex justify-center flex-col items-center gap-3'>
              <div className='w-[43px] h-[42px]'>
                <img
                  className='w-full'
                  src={process.env.PUBLIC_URL + '/images/text-to-image2.png'}
                />
              </div>
              <h4 className='font-roboto text-[18px] font-medium text-white text-center'>
                Conventional Video Production
              </h4>
              <p className='font-roboto text-[16px] text-white text-center'>
                Conventional video production tool for people already familiar.
              </p>
            </div>
            <div className='bg-[#5C57C3] w-[80%] md:w-[280px] md:h-[189px] rounded-lg p-7 flex justify-center flex-col items-center gap-3'>
              <div className='w-[43px] h-[42px]'>
                <img
                  className='w-full'
                  src={process.env.PUBLIC_URL + '/images/text-to-image3.png'}
                />
              </div>
              <h4 className='font-roboto text-[18px] font-medium text-white text-center'>
                Animated Video
              </h4>
              <p className='font-roboto text-[16px] text-white text-center'>
                Create fun and captivating animated videos with our tool.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6TH SECTION */}
      <div className='bg-[#E9EFFD] flex justify-center'>
        <div className='w-[90%] flex flex-col-reverse md:flex-row pt-20'>
          <div className='w-[100%] md:w-[50%] flex items-center justify-center'>
            <img
              className='w-[90%]'
              src={process.env.PUBLIC_URL + '/images/Video files-bro.png'}
            />
          </div>
          <div className='w-[100%] md:w-[50%] p-5 flex flex-col gap-y-5'>
            <div className='flex gap-5'>
              <div>
                <img
                  className='w-[32px] pt-[3px]'
                  src={process.env.PUBLIC_URL + '/images/calender.png'}
                />
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className='text-[20px] md:text-[24px] font-bold font-poppins '>
                  Instant Video Creation
                </h3>
                <p className=' text-[14px] md:text-[16px]  font-poppins '>
                  Convert your text and images into professional food videos in
                  seconds.
                </p>
                <div onClick={()=>setPopup(!popup)} className='cursor-pointer border w-fit py-1 px-2 border-black text-[14px] md:text-[16px] flex gap-3 items-center  font-poppins '>
                  Join the Waitlist <SvgIcons.ArrowRightSMBlack />
                </div>
              </div>
            </div>

            <div className='flex gap-5'>
              <div>
                <img
                  className='w-[32px] pt-[3px]'
                  src={process.env.PUBLIC_URL + '/images/edit.png'}
                />
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className='text-[20px] md:text-[24px] font-bold font-poppins '>
                  Seamless Image and Text Integration
                </h3>
                <p className=' text-[14px] md:text-[16px]  font-poppins '>
                  Effortlessly combine your visuals and text for a cohesive
                  culinary video.
                </p>
                <div onClick={()=>setPopup(!popup)} className='cursor-pointer border w-fit py-1 px-2 border-black text-[14px] md:text-[16px]  font-poppins  flex gap-3 items-center '>
                  Join the Waitlist <SvgIcons.ArrowRightSMBlack />
                </div>
              </div>
            </div>

            <div className='flex gap-5'>
              <div>
                <img
                  className='w-[32px] pt-[3px]'
                  src={process.env.PUBLIC_URL + '/images/setting.png'}
                />
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className='text-[20px] md:text-[24px] font-bold font-poppins '>
                  Simple and Fast Process
                </h3>
                <p className=' text-[14px] md:text-[16px]  font-poppins '>
                  Create stunning food videos quickly with our easy-to-use
                  platform.
                </p>
                <div onClick={()=>setPopup(!popup)} className=' cursor-pointer border w-fit py-1 px-2 border-black text-[14px] md:text-[16px]  font-poppins  flex gap-3 items-center '>
                  Join the Waitlist <SvgIcons.ArrowRightSMBlack />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7TH SECTION */}
      <div className='bg-[#E9EFFD] flex justify-center'>
        <div className='w-[90%] flex flex-col gap-10 md:gap-0 md:flex-row pt-20'>
          <div className='w-[100%] md:w-[50%]  flex flex-col gap-y-5 justify-center'>
            <p className=' text-[14px] md:text-[16px] font-semibold  font-poppins '>
              Projected Success Stories
            </p>
            <h3 className='text-[40px] md:text-[48px] font-bold font-poppins '>
              Achieve Stunning Video Content with Ease
            </h3>
            <p className=' text-[16px] md:text-[18px]  font-poppins '>
              Imagine transforming your culinary ideas into high-quality videos
              effortlessly.
            </p>
            <div className='w-[100%] flex'>
              <div className='w-[50%]'>
                <h3 className='text-[40px] md:text-[48px] font-bold font-poppins '>
                  3x
                </h3>
                <p className=' text-[14px] md:text-[16px]  font-poppins '>
                  Increase in productivity
                </p>
              </div>
              <div className='w-[50%]'>
                <h3 className='text-[40px] md:text-[48px] font-bold font-poppins '>
                  300%
                </h3>
                <p className=' text-[14px] md:text-[16px]  font-poppins '>
                  Return on investment
                </p>
              </div>
            </div>
            <div className='w-[100%] flex'>
              <div className='w-[50%]'>
                <h3 className='text-[40px] md:text-[48px] font-bold font-poppins '>
                  5k+
                </h3>
                <p className=' text-[14px] md:text-[16px]  font-poppins '>
                  Happy customers
                </p>
              </div>
              <div className='w-[50%]'>
                <h3 className='text-[40px] md:text-[48px] font-bold font-poppins '>
                  100+
                </h3>
                <p className=' text-[14px] md:text-[16px]  font-poppins '>
                  5-star reviews
                </p>
              </div>
            </div>
          </div>

          <div className='w-[100%] md:w-[50%] flex items-center justify-center'>
            <img
              className='w-[100%]'
              src={process.env.PUBLIC_URL + '/images/blackBig.png'}
            />
          </div>
        </div>
      </div>

      {/* 8TH SECTION */}

      <div className='bg-[#E9EFFD] flex justify-center '>
        <div className='w-[90%] md:w-[60%] pt-40 pb-40 flex flex-col gap-y-5'>
          <h1 className=' text-[38px] md:text-[48px] font-bold font-roboto text-center'>
            Start Creating with Our User-Friendly Platform
          </h1>
          <p className='text-[16px] md:text-[18px]  font-poppins text-center'>
            Unleash Your Creativity and Craft Professional Food Videos with Ease
          </p>
        </div>
      </div>

      {/* 9TH SECTION */}

      <div className='bg-[#EBF2FF] flex justify-center'>
        <div className='w-[90%] flex flex-col items-center pt-20 pb-20'>
          <h1 className=' text-[38px] md:text-[48px] font-bold font-poppins text-center'>
            Customer Testimonials
          </h1>
          <p className=' text-[16px] md:text-[18px] font-poppins text-center w-[100%] md:w-[70%] pt-5'>
            Join the countless individuals who have found solace, healing, and
            renewed vitality through our compassionate care. Discover firsthand
            the transformative power of acupuncture and integrative medicine at
            Janie Forbes MD's Acupuncture Practice.
          </p>

          <div>
            {/* <Carosal /> */}
            <TestiMonials />
          </div>
        </div>
      </div>

      {/* 10TH SECTION */}

      <div className='bg-white'>
        <FAQs />
      </div>

      {/* 11TH SECTION */}

      <div className='bg-[#ffffff] flex justify-center '>
        <div className='w-[90%] md:w-[60%] pt-40 pb-40 flex flex-col gap-y-5'>
          <h1 className=' text-[38px] md:text-[48px] font-bold font-roboto text-center'>
            Still have a question?
          </h1>
          <p className='text-[16px] md:text-[18px]  font-poppins text-center'>
            Support details to capture customers that might be on the fence.
          </p>

          <div className='border border-black w-fit py-2 px-4 ml-auto mr-auto cursor-pointer hover:bg-black hover:text-white'>
            Contact Us
          </div>
        </div>
      </div>

      {/* 12TH SECTION */}

      <div className='bg-black flex justify-center'>
        <div className='w-[90%] pt-20 flex flex-col items-center pb-20'>
          <p className=' text-[14px] md:text-[16px] font-semibold text-white  font-poppins '>
            Blog
          </p>
          <h3 className='text-[40px] md:text-[48px] pt-3 font-bold font-poppins text-white text-center '>
            Learn With the TMF Community
          </h3>
          <p className=' text-[16px] md:text-[18px] pt-3 text-white  font-poppins  text-center'>
            Stay Updated with Our Expert Blog Posts on Video Production and
            Content Creation
          </p>

          <div className='w-full flex gap-5 justify-center flex-wrap pt-20 pb-20'>
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

            {/* <div className='w-[100%] md:w-[416px]'>
              <div>
                <img
                  className='w-[100%]'
                  src={process.env.PUBLIC_URL + '/images/PlaceholderImage.png'}
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
                  How to Create Professional Videos in Minutes with Our Software
                </h3>
                <p className='text-[16px] pt-3 text-white  font-roboto '>
                  Discover how our intuitive video production software enables
                  you to transform your images and text into high-quality videos
                  in just a few clicks. Perfect for marketers, content creators,
                  and anyone looking to enhance their visual content
                  effortlessly.
                </p>
              </div>
              <div className='text-[16px] pt-5 text-white  font-roboto flex items-center gap-3 '>
                Read More <SvgIcons.ArrowRightSM />
              </div>
            </div>

            <div className='w-[100%] md:w-[416px]'>
              <div>
                <img
                  className='w-[100%]'
                  src={process.env.PUBLIC_URL + '/images/PlaceholderImage1.png'}
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
                  5 Tips for Making Your Videos Stand Out
                </h3>
                <p className='text-[16px] pt-3 text-white  font-roboto '>
                  Learn the top five tips for creating engaging and impactful
                  videos using our software. From choosing the right visuals to
                  adding the perfect audio, these tips will help you captivate
                  your audience and elevate your content strategy.
                </p>
              </div>
              <div className='text-[16px] pt-5 text-white  font-roboto flex items-center gap-3 '>
                Read More <SvgIcons.ArrowRightSM />
              </div>
            </div>

            <div      onClick={() => {
                      localStorage.setItem('blog', JSON.stringify(item));
                      navigate(`/individualblog/${item._id}`);
                    }} className='w-[100%] md:w-[416px]'>
              <div>
                <img
                  className='w-[100%]'
                  src={process.env.PUBLIC_URL + '/images/PlaceholderImage2.png'}
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
                  The Future of Content Creation: How AI is Revolutionizing
                  Video Production
                </h3>
                <p className='text-[16px] pt-3 text-white  font-roboto '>
                  Explore how artificial intelligence is changing the landscape
                  of video production. Our software leverages cutting-edge AI
                  technology to simplify the video creation process, making it
                  accessible to everyone, regardless of technical expertise.
                </p>
              </div>
              <div className='text-[16px] pt-5 text-white  font-roboto flex items-center gap-3 '>
                Read More <SvgIcons.ArrowRightSM />
              </div>
            </div> */}
          </div>

          <button  onClick={handleAllBlogsClick} className='border text-white border-white w-fit py-2 px-4 ml-auto mr-auto cursor-pointer hover:bg-white hover:text-black'>
            View All
          </button>
        </div>
      </div>

      {/* 13TH SECTION */}

      <div className='bg-[#E9EFFD] flex justify-center'>
        <div className='w-[90%] flex justify-center md:justify-between pt-20 pb-20 flex-col md:flex-row'>
          <div>
            <h2 className='text-[20px] md:text-[24px] font-semibold text-center md:text-left   font-poppins  '>
              Join our newsletter
            </h2>
            <p className='text-[16px] md:text-[18px]   font-poppins text-center md:text-left '>
              Transform Your Culinary Creations with Stunning Video Content!
            </p>
          </div>
          <div className='flex gap-2 md:gap-7 items-center mt-5 md:mt-0 flex-col md:flex-row'>
            <input
              placeholder='Enter Your Email'
              className='py-2 px-4 border border-black w-full'
            />
            <div className='border w-[211px] bg-black text-white border-black text-center md:w-fit py-2 px-4 ml-auto mr-auto cursor-pointer hover:bg-white hover:text-black'>
              Subscribe
            </div>
          </div>
        </div>
      </div>

      {/* 14TH SECTION */}

      <div className=' bg-black'>
        <Footer />
      </div>
      {
        popup && <Popup setPopup={setPopup}  />
      }
    </div>
  );
}

export default Home;
