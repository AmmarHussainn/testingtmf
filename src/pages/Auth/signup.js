import React, { useEffect, useState } from 'react';
import { TextInput } from '../../components/TextInput';
import SvgIcons from '../../components/svg';
import { SimpleButton } from '../../components/SimpleButton';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

export const SignUp = () => {
  const navigate = useNavigate();
  const [loader , setLoader] = useState(false)
  const onload = () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(user?.userId && user?.token) navigate("/" + user?.userId + "/dashboard/home")
  }

useEffect(()=>{
  onload()

},[])
  const [state, setState] = useState(null);
  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
  });

 


  // const handleSignUp = async () => {
  //   try {
  //     const response = await fetch('https://tmf-backend.onrender.com/users/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ name, email, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       navigate('/login');
  //       console.log(data);
  //     } else {
  //       setError(data.message || 'Something went wrong. Please try again.');
  //     }
  //   } catch (error) {
  //     setError('Failed to sign up. Please check your network and try again.');
  //   }
  // };

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      error: '',
      SyntaxError: '',
    },
    validate: (values) => {
      const errors = {};    
      if (!values.name) {
        errors.name = 'Name is required';
      } else if (values.name.length < 2) {
        errors.name = 'Name must be at least 2 characters';
      }
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }
      return errors;
    }
    

  });
  useEffect(() => {
    setError({ name: '', email: '', password: '' });
  }, [formik.values]);
  useEffect(() => {
    if (formik.values.error) formik.setValues({ ...formik.values, error: '' });
    if (formik.values.SyntaxError)
      formik.setValues({ ...formik.values, SyntaxError: '' });
  }
  , [formik.values.name, formik.values.email, formik.values.password]);

  const handleSignUp = async () => {

    if (formik.errors.name) {
      setError({ ...error, name: formik.errors.name });
      return;
    }else if (formik.errors.email) {
      setError({ ...error, email: formik.errors.email });
      return;
    }else if (formik.errors.password) {
      setError({ ...error, password: formik.errors.password });
      return;
    }else{
  if (formik.values.error) formik.setValues({ ...formik.values, error: '' });
    if (formik.values.SyntaxError)
      formik.setValues({ ...formik.values, SyntaxError: '' });

    if (!formik.values.name || !formik.values.email || !formik.values.password) {
      formik.setValues({
        ...formik.values,
        error: 'All fields are required',
      });
      return;
    }
    setLoader(true)
    try {
      const response = await fetch('https://tmf-backend.onrender.com/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: formik.values.name, email: formik.values.email, password: formik.values.password }),
      });

      const data = await response.json();
      setLoader(false)
      if (data?.message == 'User registered successfully') {
        setLoader(false)
        navigate('/login');
        console.log('data');
      } else {
        formik.setValues({
          ...formik.values,
          error: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setLoader(false)
      formik.setValues({
        ...formik.values,
        error: error,
      });
    }
    setLoader(false)
    }

  
  };



  



  
  return (
    <>
    <div className='w-full py-4 px-4'>
    <a className='font-bold text-5xl px-4' href='/'>TMF</a>
    </div>
    <div className='w-full flex justify-center '>
      <div className='w-[90%] md:w-[480px] border-[1px] border-black flex flex-col items-center my-20 mt-10'>
        <h2 className='text-[30px] md:text-[38px] font-bold font-poppins py-3'>
          TMF
        </h2>
        <h1 className='text-[40px] md:text-[48px] font-bold font-roboto '>
          Sign Up
        </h1>
        <p className='text-[14px] md:text-[18px]  font-roboto py-3'>
          Signup to Tallmanfilms
        </p>

        <div className='w-[90%] md:w-[80%]'>
          <TextInput
            // label='Name*'
            // type='text'
            // onChange={(e) => {
            //   console.log(e.target.value);
            // }}
            // error=''

            // label='Name*'
            // type='text'
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            // error={error}


            label='Name*'
            type='text'
            value={formik.values.name}
            onChange={(e) => {setState('N') ; formik.setFieldValue('name', e.target.value)}}
            // error={state == 'N' && formik.errors.name}
            error={error.name}


          />
        </div>
    
        <div className='w-[90%] md:w-[80%]'>
          <TextInput
            label='Email*'
            type='text'
            value={formik.values.email}
            onChange={(e) =>{
              setState('E') ;
              formik.setValues({ ...formik.values, email: e.target.value })}
            }
            // error={state == 'E' &&formik.errors.email}
            error={error.email}

          />
        </div>
       


        <div className='w-[90%] md:w-[80%] pb-5'>
          <TextInput
            label='Password*'
            type='password'
            value={formik.values.password}
            onChange={(e) =>{
              setState('P') ;
              formik.setValues({ ...formik.values, password: e.target.value })
            }}
            // error={state == 'P' && formik.errors.password}
            error={error.password}
            icon={<SvgIcons.Eye />}

          />
        </div>
        {formik.values.error && (
          <div className='text-red-500'>{formik.values.error}</div>
        )}

        <div className='w-[90%] md:w-[80%]'>
          <SimpleButton
            
            text={loader ? <div class="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div> :'Sign Up'}
            style='dark'
            onClick={handleSignUp}
            disabled={
              !formik.values.name || !formik.values.email || !formik.values.password
            }

          />
        </div>
        <div className='w-[90%] md:w-[80%]'>
          <SimpleButton
            text={
              <div className='flex gap-5'>
                <SvgIcons.GoogleBlack /> Sign up with Google
              </div>
            }
            style='light'
            onClick={() => {
              console.log('clicked');
            }}
            disabled={true}
          />
        </div>

        <p className='text-[14px] md:text-[16px] flex  font-roboto py-3 pb-5 gap-2'>
          Already have an account?
          <span className='cursor-pointer underline' onClick={()=>{navigate('/login')}}>{` Login`}</span>
        </p>
      </div>
    </div>
    </>
  );
};
