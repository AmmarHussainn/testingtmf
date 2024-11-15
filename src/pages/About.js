import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SvgIcons from '../components/svg';

export const About = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/aboutBG.png`;
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
  const imageUrlThree = `${process.env.PUBLIC_URL}/images/bganoAbou.jpg`;
  const bgImageStyleThree = {
    backgroundImage: `url(${imageUrlThree})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div>
      <Header />

      {/* 1ST SECTION */}

      <div style={bgImageStyle} className='w-full flex justify-center'>
        <div className='w-[90%] md:w-[55%] py-20 '>
          <h1 className='text-[30px] md:text-[40px] font-poppins font-bold text-white text-center'>
            Enabling restaurants and food brands to produce captivating video
            content that delights and inspires.
          </h1>
          <p className='text-[16px] md:text-[18px] py-3 font-roboto  text-white text-center'>
            Our software enables restaurants and food brands to create
            compelling video content, enhancing engagement and showcasing
            culinary excellence.
          </p>
          <p className='text-[14px] md:text-[16px] py-4 font-poppins cursor-pointer  text-white text-center'>
            Explore Now
          </p>
        </div>
      </div>

      {/* 2ND SECTION */}

      <div className='bg-[#E9EFFD] flex justify-center'>
        <div className='w-[90%] flex justify-between py-20 flex-col md:flex-row gap-10 md:gap-0'>
          <div className='w-[100%] md:w-[45%] flex flex-col gap-5'>
            <p className='text-[14px] md:text-[18px] font-semibold font-roboto'>
              Our Story
            </p>
            <h2 className='text-[20px] md:text-[30px] font-bold font-roboto'>
              Transforming Culinary Creativity: TallmanFilms Unveils
              Revolutionary Software for Food Video Creation
            </h2>
          </div>
          <div className='w-[100%] md:w-[45%] flex flex-col gap-5'>
            <p className='text-[16px] md:text-[18px]  font-roboto'>
              TallmanFilms has developed an innovative software that empowers
              food businesses to effortlessly transform static images and
              written text into engaging videos. This versatile tool enhances
              storytelling and helps businesses connect with their audience more
              effectively.
            </p>
            <p className='text-[16px] md:text-[18px]  font-roboto'>
              Our cutting-edge software leverages advanced algorithms to blend
              visual elements with textual content seamlessly. Whether for menu
              displays, social media content, or marketing campaigns,
              TallmanFilms' software offers unparalleled flexibility and
              creativity. With its intuitive features and robust capabilities,
              it's set to revolutionize content creation in the food industry,
              making professional-quality videos accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* 3RD SECTION */}

      <div style={bgImageStyleThree} className='flex justify-center'>
        <div className='w-[90%] md:w-[80%] flex flex-col items-center pt-20'>
          <div className='flex gap-3'>
            <h1 className='font-poppins text-[38px] md:text-[48px] '>
              MEET OUR
            </h1>
            <h1 className='font-poppins text-[38px] md:text-[48px]  font-bold'>
              TEAM
            </h1>
          </div>

          <p className='font-roboto text-[16px] md:text-[20px]  text-center p-[10px] md:p-[40px] pb-[20px]'>
            Cras eu dignissim mauris. Duis imperdiet erat sapien, molestie
            aliquet arcu tincidunt id. Mauris sit amet quam mi. Duis porttitor
            lectus quis turpis malesuada, eu luctus elit dignissim.
          </p>
          <div className='w-[161px] h-[2px] bg-black'></div>

          <div className='flex md:flex-row flex-col justify-evenly w-[100%] py-20 md:py-40 gap-5 md:gap-0'>
            <div className='bg-white w-[100%] md:w-[344px]  lg:h-[429px]  md:h-[350px] h-[300px] p-5'>
              <div className='h-[80%] bg-[#CCE0FF] xl:relative xl:block flex justify-center md:items-end'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/Sultan.png`}
                  alt='ceo'
                  className='xl:absolute [w-100%] xl:top-[-39px]'
                />
              </div>
              <div className='h-[20%] flex flex-col items-center justify-end'>
                <a
                  href='https://www.linkedin.com/in/sultan-ghani-afzal-82643b55/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <h4 className='font-poppins font-bold text-[18px] text-center lg:text-[22px] '>
                    Sultan Ghani Afzal
                  </h4>
                </a>
                <p className='font-poppins text-[14px] text-center lg:text-[20px] '>
                  CEO-Executive Producer
                </p>
              </div>
            </div>
            <div className='bg-white w-[100%] md:w-[344px]  lg:h-[429px]  md:h-[350px] h-[300px] p-5'>
              <div className='h-[80%] bg-[#CCE0FF] xl:relative xl:block flex justify-center md:items-end'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/Tooba.png`}
                  alt='ceo'
                  className='xl:absolute [w-100%] xl:top-[-87px]'
                />
              </div>
              <div className='h-[20%] flex flex-col items-center justify-end'>
              <a
                  href='https://www.linkedin.com/in/sultan-ghani-afzal-82643b55/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                <h4 className='font-poppins font-bold text-[18px] text-center lg:text-[22px] '>
                  Tooba Shahid
                </h4>
              </a>
                <p className='font-poppins text-[14px] text-center lg:text-[20px] '>
                  Chief Operations Officer
                </p>
              </div>
            </div>
            <div className='bg-white w-[100%] md:w-[344px]  lg:h-[429px]  md:h-[350px] h-[300px] p-5'>
              <div className='h-[80%] bg-[#CCE0FF] xl:relative xl:block flex justify-center md:items-end'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/Sajjad.png`}
                  alt='ceo'
                  className='xl:absolute [w-100%] xl:top-[-71px]'
                />
              </div>
              <div className='h-[20%] flex flex-col items-center justify-end'>
              <a
                  href='https://www.linkedin.com/in/sultan-ghani-afzal-82643b55/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                <h4 className='font-poppins font-bold text-[18px] text-center lg:text-[22px] '>
                  Hurmayn Sajjad
                </h4>
                </a>
                <p className='font-poppins text-[14px] text-center lg:text-[20px] '>
                  Chief Marketing Officer
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>


      {/* 4TH SECTION */}

      <div className='bg-[#E9EFFD] flex justify-center'>
        <div className='w-[90%] flex flex-col md:flex-row pt-20'>
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


      {/* 5TH SECTION */}

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


      {/* 6TH SECTION */}
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
            <div className='w-[100%] md:w-[416px]'>
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

            <div className='w-[100%] md:w-[416px]'>
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
            </div>
          </div>

          <div className='border text-white border-white w-fit py-2 px-4 ml-auto mr-auto cursor-pointer hover:bg-white hover:text-black'>
            View All
          </div>
        </div>
      </div>
      {/* 7TH SECTION */}

      <div className='bg-black'>
        <Footer />
      </div>


    </div>
  );
};
