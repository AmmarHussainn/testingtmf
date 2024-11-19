// import React from 'react';
// import SvgIcons from '../../components/svg';
// import { TextInput } from '../../components/TextInput';

// export const Setting = () => {
//   return (
//     <div className='p-3 h-full overflow-scroll'>
//       {/* HEADER */}
//       <div className='w-[100%] flex justify-end items-center py-3 gap-5'>
//         <button className='text-[12px] text-white font-poppins  flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[143px] rounded-md cursor-pointer'>
//           Order a Service
//         </button>
//         <div className='h-[22px] w-[22px] rounded-full'>
//           <img
//             className='w-full rounded-full h-full object-cover'
//             src={process.env.PUBLIC_URL + '/images/sm.jpg'}
//           />
//         </div>
//         <div>
//           <SvgIcons.SSupport />
//         </div>
//       </div>

//       {/* BODY */}

//       <div className='pt-5 pb-2 text-[26px] font-poppins'>Setting</div>

//       <div className='p-4 border border-black rounded-md'>
//         <div className='flex items-center gap-5'>
//           <div className='h-[125px] w-[125px]'>
//             <img
//               src={process.env.PUBLIC_URL + '/images/sm.jpg'}
//               className='w-full h-full rounded-full object-cover'
//             />
//           </div>
//           <div>
//             <h1 className='text-[26px] font-poppins'>Ahmad Raza</h1>
//             <p className='text-[16px] font-poppins'>Ahmad.Raza123@gmail.com</p>
//           </div>
//         </div>

//         <p className='text-[20px] font-poppins py-5'>Personal Details</p>

//         <div className='flex gap-5 pb-3'>
//           <div className='w-[30%]'>
//             <TextInput label='First Name' value='' />
//           </div>
//           <div className='w-[30%]'>
//             <TextInput label='Last Name' value='' />
//           </div>
//         </div>
//         <div className='flex gap-5 pb-3'>
//           <div className='w-[20%]'>
//             <TextInput label='Contact' value='' />
//           </div>
//           <div className='w-[40%]'>
//             <TextInput label='Email' value='' />
//           </div>
//         </div>
//         <p className='text-[20px] font-poppins py-3'>Change Password</p>

//         <div className='flex gap-5 pb-3 items-center'>
//           <div className='w-[24%]'>
//             <TextInput
//               type='password'
//               label='Old Password'
//               value='0300-8372835'
//               icon={<SvgIcons.Eye />}
//             />
//           </div>
//           <div className='w-[24%]'>
//             <TextInput
//               type='password'
//               label='New Password'
//               icon={<SvgIcons.Eye />}
//             />
//           </div>
//           <button className='mb-[-24px] text-[12px] h-[40px] text-white font-poppins  flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[10%] rounded-md cursor-pointer'>
//             Save
//           </button>
//         </div>

//         {/* <p className='text-[20px] font-poppins py-3'>Subscription Details</p>
//         <div className='flex gap-5 pb-3 items-center'>
//           <div className='w-[19.3%]'>
//             <TextInput type='text' label='Subscription Type' value='Basic' />
//           </div>
//           <div className='w-[19.3%]'>
//             <TextInput type='text' label='From' value='20-11-2023' />
//           </div>
//           <div className='w-[19.3%]'>
//             <TextInput type='text' label='To' value='20-11-2024' />
//           </div>
//         </div>

//         <div className='flex gap-5 pb-3'>
//           <button className='text-[12px] text-white font-poppins  flex items-center justify-center bg-[black] p-3 px-5 w-[30%] rounded-md cursor-pointer'>
//             Cancel Subscription
//           </button>
//           <button className='text-[12px] text-white font-poppins  flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[30%] rounded-md cursor-pointer'>
//             Upgrade Subscription
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';
import SvgIcons from '../../components/svg';
import { TextInput } from '../../components/TextInput';
import { useNavigate } from 'react-router-dom';

export const Setting = () => {
  const userData = JSON.parse(localStorage.getItem('user')) || {};
  const { name, email, phone, profilePicture, token, userId } = userData;
  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    name: name || '',
    email: email || '',
    phone: phone || '',
    profilePicture: profilePicture || '',
    newPassword: '',
    oldPassword: '',
  });

  useEffect(() => {
  
    if (!name || !email) {
      fetchUserProfile();
    }
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('http://localhost:3000/users/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.user) {
        setUserDetails({
          name: data.user.name,
          email: data.user.email,
          phone: data.user.phone || '',
          profilePicture: data.user.profilePicture || '',
          oldPassword: '',
          newPassword: '',
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://tmf-backend.onrender.com/users/profile', {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({
          name: userDetails.name,
          userId: userId,
          phone: userDetails.phone,
          profilePicture: userDetails.profilePicture,
          newPassword: userDetails.newPassword,
        }),
      });
  
     
      const data = await response.json();
      console.log('data',data);
      
  
      if (data.message === 'Profile updated successfully') {
        alert('Profile updated successfully');
        localStorage.setItem('user', JSON.stringify({ ...userData, name: userDetails.name, phone: userDetails.phone, profilePicture: userDetails.profilePicture }));
      } else {
        alert('Error updating profile');
      }
    } catch (error) {
      console.log('Error updating profile:', error);
      alert('There was an error updating your profile. Please check the console for more details.');
    }
  };
  
  return (
    <div className='p-3 h-full overflow-scroll'>
      {/* HEADER */}
      <div className='w-[100%] flex justify-end items-center py-3 gap-5'>
        {/* <button className='text-[12px] text-white font-poppins flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[143px] rounded-md cursor-pointer'>
          Order a Service
        </button> */}
       
        {/* <div>
          <SvgIcons.SSupport />
        </div> */}
         <button
         onClick={()=>{
          localStorage.removeItem("user");
          navigate('/login')
         }}
         className='text-[12px] text-white font-poppins flex items-center justify-center bg-[#c62631] p-3 px-5 w-[143px] rounded-md cursor-pointer'>
          Logout
        </button>
        <div className='h-[22px] w-[22px] rounded-full'>
          {/* <img
            className='w-full rounded-full h-full object-cover'
            src={userDetails.profilePicture || process.env.PUBLIC_URL + '/images/sm.jpg'}
          /> */}
        </div>
      </div>

      {/* BODY */}
      <div className='pt-5 pb-2 text-[26px] font-poppins'>Setting</div>

      <div className='p-4 border border-black rounded-md'>
        <div className='flex items-center gap-5'>
          <div className='h-[125px] w-[125px]'>
            <img
              // src={userDetails.profilePicture || process.env.PUBLIC_URL + '/images/sm.jpg'}
              src={userDetails?.profilePicture }
              className='w-full h-full rounded-full object-cover'
            />
          </div>
          <div>
            <h1 className='text-[26px] font-poppins'>{userDetails.name}</h1>
            <p className='text-[16px] font-poppins'>{userDetails.email}</p>
          </div>
        </div>

        <p className='text-[20px] font-poppins py-5'>Personal Details</p>

        <div className='flex gap-5 pb-3'>
          <div className='w-[30%]'>
            <TextInput
              label='Full Name'
              value={userDetails.name}
              onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
            />
          </div>
         
        </div>

        <div className='flex gap-5 pb-3'>
          <div className='w-[20%]'>
            <TextInput
              label='Contact'
              value={userDetails.phone}
              onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
            />
          </div>
          <div className='w-[40%]'>
            <TextInput
              label='Email'
              value={userDetails.email}
              disabled
            />
          </div>
        </div>

        <p className='text-[20px] font-poppins py-3'>Change Password</p>

        <div className='flex gap-5 pb-3 items-center'>
          <div className='w-[24%]'>
            <TextInput
              type='password'
              label='Old Password'
              value={userDetails.oldPassword}
              onChange={(e) => setUserDetails({ ...userDetails, oldPassword: e.target.value })}
              icon={<SvgIcons.Eye />}
            />
          </div>
          <div className='w-[24%]'>
            <TextInput
              type='password'
              label='New Password'
              value={userDetails.newPassword}
              onChange={(e) => setUserDetails({ ...userDetails, newPassword: e.target.value })}
              icon={<SvgIcons.Eye />}
            />
          </div>
          <button
            className='mb-[-24px] text-[12px] h-[40px] text-white font-poppins flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[10%] rounded-md cursor-pointer'
            onClick={handleProfileUpdate}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
