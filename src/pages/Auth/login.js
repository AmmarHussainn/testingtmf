import React, { useEffect, useState } from 'react';
import { TextInput } from '../../components/TextInput';
import SvgIcons from '../../components/svg';
import { SimpleButton } from '../../components/SimpleButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
export const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const onload = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.userId && user?.token)
      navigate('/' + user?.userId + '/dashboard/home');
  };

  useEffect(() => {
    onload();
  }, []);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
      setLoader(true);
      try {
        const response = await axios.post(
          'https://tmf-backend.onrender.com/users/login',
          {
            email: values.email,
            password: values.password,
          }
        );
        console.log('Response',response)
        if (response.status === 200) {
          setLoader(false);
          localStorage.setItem('user', JSON.stringify(response.data));
          navigate('/' + response.data.userId + '/dashboard/home');
        } else {
          setErrors({ SyntaxError: 'Login failed. Please try again.' });
        }
      } catch (error) {
        console.log('error',error)
        setLoader(false);
        setErrors({
          SyntaxError:
            error.response?.data?.message || error.response?.data?.error || 'Login failed. Please try again.',
        });
      }
      setLoader(false);
    },
  });

  return (
    <>
      <div className='w-full py-4 px-4'>
        <a className='font-bold text-5xl px-4' href='/'>
          TMF
        </a>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[90%] md:w-[480px] border-[1px] border-black flex flex-col items-center my-20'>
          {/* <h2 className='text-[30px] md:text-[38px] font-bold font-poppins py-3'>
            TMF
          </h2> */}
          <h1 className='text-[40px] md:text-[48px] font-bold font-roboto '>
            Welcome!
          </h1>
          <p className='text-[14px] md:text-[18px]  font-roboto py-3'>
            Login to Tallmanfilms
          </p>

          <div className='w-[90%] md:w-[80%]'>
            <TextInput
              label='Email*'
              type='text'
              value={formik.values.email}
              onChange={(e) => formik.setFieldValue('email', e.target.value)}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
          </div>

          <div className='w-[90%] md:w-[80%] '>
            <TextInput
              label='Password*'
              type='password'
              value={formik.values.password}
              onChange={(e) => formik.setFieldValue('password', e.target.value)}
              onBlur={formik.handleBlur} 
              error={formik.touched.password && formik.errors.password} 
              icon={<SvgIcons.Eye />}
            />
          </div>

         {formik?.errors?.SyntaxError && <div className='text-[#ff0000]'>
          {formik?.errors?.SyntaxError}
          </div>}

          <p className='text-[14px] md:text-[16px] flex  font-roboto py-2 pb-5 gap-2'>
            Forgot your password?
            <span
              className='cursor-pointer underline'
              onClick={() => {
                navigate('/resetpassword-one');
              }}
            >{` Reset Here!`}</span>
          </p>

          <div className='w-[90%] md:w-[80%]'>
            <SimpleButton
              // text='Login'
              // style='dark'
              // onClick={handleLogin}
              // disabled={!email || !password}
              type='submit'
              text={
                loader ? (
                  <div class='w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
                ) : (
                  'Login'
                )
              }
              style='dark'
              onClick={formik.handleSubmit}
              disabled={!formik.values.email || !formik.values.password}
            />
          </div>
          {/* <div className='w-[90%] md:w-[80%]'>
            <SimpleButton
              text={
                <div className='flex gap-5'>
                  <SvgIcons.GoogleBlack /> Login with Google
                </div>
              }
              style='light'
              onClick={() => {
                console.log('clicked');
              }}
              disabled={true}
            />
          </div> */}

          <p className='text-[14px] md:text-[16px] flex  font-roboto py-3 pb-5 gap-2'>
            Don't have an account?
            <span
              className='cursor-pointer underline'
              onClick={() => {
                navigate('/signup');
              }}
            >{` Sign Up`}</span>
          </p>
        </div>
      </div>
    </>
  );
};
