import React from 'react';
import { TextInput } from '../../components/TextInput';
import SvgIcons from '../../components/svg';
import { SimpleButton } from '../../components/SimpleButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect } from 'react';

export const ResetPassword_Two = () => {
  const navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      error: '',
      success: '',
      syntaxError: '',
      newPassword: '',
      confirmPassword: '',
    },
  });
  useEffect(() => {
    if (formik.values.syntaxError)
      formik.setValues({ ...formik.values, syntaxError: '' });
  }, [formik.values.newPassword, formik.values.confirmPassword]);


  const handleConfirmClick = async () => {
    console.log('error');
    if (formik.values.newPassword != formik.values.confirmPassword) {
      formik.setValues({
        ...formik.values,
        syntaxError: 'Both Passwords do not match',
      });
      return;
    }
    try {
      const resetPasswordData = sessionStorage.getItem('reset-password');
      let sessionDataObject ;
      if (resetPasswordData) {
           sessionDataObject = JSON.parse(resetPasswordData);
      }

      console.log({
        ...sessionDataObject,
        newPassword: formik.values.newPassword,
      })
      const response = await axios.post(
        'https://tmf-backend.onrender.com/users/reset-password',
        {
          ...sessionDataObject,
          newPassword: formik.values.newPassword,
        }
      );

      console.log('response', response);
      

      if (response.status === 200) {
        console.log(response , "respmnce");
        
        sessionStorage.clear();
        navigate('/congratulations');
      } else {
        formik.setValues({
          ...formik.values,
          error: 'Something went wrong. Please try again.',
        });
      }
    } catch (err) {
      formik.setValues({
        ...formik.values,
        error:
          err.response?.data?.message ||
          'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[90%] md:w-[480px] border-[1px] border-black flex flex-col items-center mt-20'>
        <h2 className='text-[30px] md:text-[38px] font-bold font-poppins py-3'>
          TMF
        </h2>
        <h1 className='text-[40px] md:text-[48px] font-bold font-roboto '>
          Reset Password
        </h1>
        <p className='text-[14px] md:text-[18px]  font-roboto py-3'>
          Reset Your Password
        </p>

        <div className='w-[90%] md:w-[80%] '>
          <TextInput
            label='New Password*'
            type='password'
            onChange={(e) => {
              formik.setValues({
                ...formik.values,
                newPassword: e.target.value,
              });
            }}
            error=''
            icon={<SvgIcons.Eye />}
          />
        </div>
        <div className='w-[90%] md:w-[80%] pb-5'>
          <TextInput
            label='Confirm Password*'
            type='password'
            onChange={(e) => {
              formik.setValues({
                ...formik.values,
                confirmPassword: e.target.value,
              });
            }}
            error={formik.values.syntaxError}
            icon={<SvgIcons.Eye />}
          />
        </div>
        {formik.values.error && (
          <div className='text-red-500'>{formik.values.error}</div>
        )}

        <div className='w-[90%] md:w-[80%] pb-8'>
          <SimpleButton
            text='Change Password'
            style='dark'
            onClick={() => {handleConfirmClick()}}
            disabled={
              formik.values.newPassword == '' ||
              formik.values.confirmPassword == '' ||
              formik.values.newPassword != formik.values.confirmPassword
            }
          />
        </div>

       
      </div>
    </div>
  );
};
