import React, { useEffect, useState } from 'react';
import { TextInput } from '../../components/TextInput';
import SvgIcons from '../../components/svg';
import { SimpleButton } from '../../components/SimpleButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
export const ResetPassword_One = () => {
  const navigate = useNavigate();
  const [loader , setLoader] = useState(false)
  let formik = useFormik({
    initialValues: {
      email: '',
      error: '',
      success: '',
      syntaxError: '',
    },
  });

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  useEffect(() => {
    if (formik.values.error) formik.setValues({ ...formik.values, error: '' });
    if (formik.values.syntaxError)
      formik.setValues({ ...formik.values, syntaxError: '' });
  }, [formik.values.email]);

  const handleSendOTP = async () => {
   
    if (!isValidEmail(formik.values.email)) {
      formik.setValues({
        ...formik.values,
        syntaxError: 'Invalid email. Please enter a valid email.',
      });
      return;
    } else {
      setLoader(true)
      try {
        const response = await axios.post(
          'https://tmf-backend.onrender.com/users/reset-password-request',
          {
            email: formik.values.email,
          }
        );
        console.log('response', response, {
          email: formik.values.email,
        });
        setLoader(false)
        if (response.status === 200) {
          sessionStorage.setItem(
            'reset-password',
            JSON.stringify({ email: formik.values.email })
          );
          navigate('/otp');
        } else {
          formik.setValues({
            ...formik.values,
            error: 'Failed to send OTP. Please try again.',
          });
        }
      } catch (err) {
        setLoader(false)
        formik.setValues({
          ...formik.values,
          error:
            err.response?.data?.message ||
            'Failed to send OTP. Please try again.',
        });
      }
    }
    setLoader(false)
  };

  return (
    <>
     <div className='w-full py-4 px-4'>
    <a className='font-bold text-5xl px-4' href='/'>TMF</a>
    </div>
    <div className='w-full flex justify-center'>
      <div className='w-[90%] md:w-[480px] border-[1px] border-black flex flex-col items-center mt-20'>
        {/* <h2 className='text-[30px] md:text-[38px] font-bold font-poppins py-3'>
          TMF
        </h2> */}
        <h1 className='text-[40px] md:text-[48px] font-bold font-roboto '>
          Reset Password
        </h1>
        <p className='text-[14px] md:text-[18px]  font-roboto py-3'>
          An OTP will be sent to your email for verification
        </p>

        <div className='w-[90%] md:w-[80%]'>
          <TextInput
            label='Enter Email*'
            type='text'
            value={formik.values.email}
            onChange={(e) =>
              formik.setValues({ ...formik.values, email: e.target.value })
            }
            error={formik.values.syntaxError}
          />
        </div>
        {formik.values.error && (
          <div className='text-red-500'>{formik.values.error}</div>
        )}

        <div className='w-[90%] md:w-[80%] pb-8'>
          <SimpleButton
            text={loader ? <div class="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
 : 'Send OTP'}
            style='dark'
            onClick={handleSendOTP}
            disabled={formik.values.email == '' || formik.values.syntaxError || loader}
          />
        </div>

        {/* <p className='text-[14px] md:text-[16px] flex  font-roboto py-3 pb-5 gap-2'>
            Don't have an account?
          <span className='cursor-pointer underline' onClick={()=>{navigate('/signup')}}>{` Sign Up`}</span>
        </p> */}
      </div>
    </div>
    </>
  );
};
