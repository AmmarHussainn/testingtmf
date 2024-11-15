import React from 'react';
import SvgIcons from './svg';

const FAQs = () => {
  const [faqs, setFaqs] = React.useState([
    {
      title: 'How does the video creation process work?',
      answer:
        "Simply upload your images or input your text, customize your video using our intuitive editing tools, and click 'Generate'. Our software will compile everything into a professional-quality video in seconds.",
      show: false,
    },
    {
      title: 'Do I need any technical skills to use the software?',
      answer:
        'No technical skills are required. Our platform is designed to be user-friendly and intuitive, making it easy for anyone to create stunning videos quickly and effortlessly.',
      show: false,
    },
    {
      title: 'Can I add my own music or voiceover to the videos?',
      answer:
        'Yes, you can easily add your own music or voiceovers to your videos. Our software provides simple tools to upload and sync audio with your visual content.',
      show: false,
    },
    {
      title: 'What formats are the final videos available in?',
      answer:
        'The final videos are available in various popular formats, ensuring compatibility with different platforms and devices. You can choose the format that best suits your needs.',
      show: false,
    },
    {
      title: 'Is there a limit to the number of videos I can create??',
      answer:
        'There are no limits to the number of videos you can create. You can produce as many videos as you need to meet your content goals.',
      show: false,
    },
  ]);
  const hanldeHide = (idx) => {
    let temp = [...faqs];
    temp[idx].show = !temp[idx].show;
    setFaqs(temp);
  };
  return (
    // <section className="faqs">
    //   <h2>Frequently Asked Questions</h2>
    //   <div className="faq">
    //     <h3>Q1: What services does Unitech Agency provide?</h3>
    //     <p>A1: We offer a range of services including custom software development, web development, mobile app development, IT consulting, and cloud solutions. Our goal is to provide tailored technology solutions to meet your business needs.</p>
    //   </div>
    //   <div className="faq">
    //     <h3>Q2: How can I get a quote for my project?</h3>
    //     <p>A2: You can get a quote by contacting us through our Contact Form or by emailing us at contact@unitechagency.com. Provide details about your project and our team will get back to you with a tailored proposal.</p>
    //   </div>
    //   <div className="faq">
    //     <h3>Q3: What industries do you specialize in?</h3>
    //     <p>A3: We have experience working with a variety of industries including finance, healthcare, e-commerce, education, and more. Our versatile team is equipped to handle projects across different sectors.</p>
    //   </div>
    //   <div className="faq">
    //     <h3>Q4: Do you offer support and maintenance services?</h3>
    //     <p>A4: Yes, we offer comprehensive support and maintenance services to ensure your technology solutions remain up-to-date and perform optimally. This includes regular updates, troubleshooting, and enhancements.</p>
    //   </div>
    //   <div className="faq">
    //     <h3>Q5: How long does it take to complete a project?</h3>
    //     <p>A5: The timeline for project completion varies depending on the scope and complexity of the project. Once we understand your requirements, we can provide a detailed timeline and keep you updated throughout the development process.</p>
    //   </div>
    // </section>
    <section id='FAQs' class='bg-white pb-[20px] pt-20'>
      <div className='w-full flex justify-center flex-col items-center'>
        <h1 className=' text-[38px] md:text-[48px] font-bold font-poppins text-center md:w-[700px] w-[90%]'>
          {' '}
          Frequently Asked Questions
        </h1>
        <p className=' text-[16px] md:text-[18px] font-poppins text-center w-[90%] md:w-[700px] pt-5'>
          We understand that you may have questions about how our video
          production software works, its features, and how it can benefit you.
          To help you get the most out of our platform, we've compiled a list of
          frequently asked questions. If you need further assistance, please
          don't hesitate to contact our support team. We're here to help you
          create stunning, professional-quality videos with ease.
        </p>
      </div>
      <div className='w-full flex flex-col items-center mt-10 gap-y-5 '>
        {faqs?.map((ele, idx) => {
          return (
            <div
              className='border border-t-1 border-l-0 border-r-0 border-b-0 border-[#000000] md:w-[700px] w-[90%] pt-5 pb-5  cp'
              onClick={() => {
                hanldeHide(idx);
              }}
            >
              <div className='flex justify-between pl-5 pr-5 gap-10 '>
                <h2
                  className={`text-left font-opensans text-[18px] font-poppins font-bold text-lg ${
                    ele.show &&
                    'text-[#5C57C3] transition duration-200 ease-in-out'
                  }`}
                >
                  {ele.title}
                </h2>
                <div>
                  {ele.show ? <SvgIcons.ArrowUp /> : <SvgIcons.ArrowDown />}
                </div>
              </div>
              {ele.show && (
                <p className='text-left font-montserrat pl-5 pr-5 pt-9 '>
                  {ele.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
