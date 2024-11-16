import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import SvgIcons from '../../../components/svg';
import BoldText from '../../../components/BoldText';

export const FoodExportAssistant = () => {
  const [user, setUser] = useState(null);
  const [question, setQuestion] = useState('');
  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [currentConversation, setCurrentConversation] = useState({
    conversation: [],
    conversationId: '',
  });
  const [allConversations, setAllConversation] = useState([]);

  const fetchConversations = (Ids, userId) => {
    setLoader1(true);
    const apiUrl = 'https://tmf-backend.onrender.com/conversation/messages';
    const requestData = Ids.map((id) => ({
      userId: userId,
      conversationId: id,
    }));

    console.log('requestData', requestData);

    const fetchPromises = requestData.map((data) => {
      return axios
        .post(apiUrl, { ...data })
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(
            `Request failed: ${error.response?.status} ${error.message}`
          );
        });
    });

    Promise.all(fetchPromises)
      .then((responses) => {
        console.log('All responses:', responses);
        let allConversationsLocal = [];
        if (responses) {
          for (const element of responses) {
            let oneConversation = [];
            for (let i = 0; i < element?.messages?.length - 1; i += 2) {
              console.log('element', element);

              oneConversation.push({
                conversationId: element.conversationId,
                conversation: {
                  question: element?.messages[i].content,
                  answer: element?.messages[i + 1].content,
                  citations: element?.messages[i + 1].citations,
                },
              });
            }
            allConversationsLocal.push(oneConversation);
          }

          setAllConversation([...allConversationsLocal].reverse());
          setLoader1(false);
        }
      })
      .catch((error) => {
        console.log('Error:', error.message);
        setLoader1(false);
      });
    // setLoader1(false);
  };

  const onload = () => {
    let userComing = JSON.parse(localStorage.getItem('user'));
    console.log('userComing', userComing);
    setUser(userComing);

    if (userComing?.conversationIds.length > 0 && allConversations?.length == 0)
      fetchConversations(userComing?.conversationIds, userComing.userId);
  };

  useEffect(() => {
    onload();
  }, []);

  const submitQuestion = async () => {
    setLoader(true);

    let newConversation1 = [
      ...currentConversation?.conversation,
      {
        skeleton: true,
        conversation: {
          question: question,
          response: {},
        },
      },
    ];
    console.log('TEST : ', {
      conversationId: currentConversation?.conversationId,
      conversation: newConversation1,
    });
    setCurrentConversation({
      conversationId: currentConversation?.conversationId,
      conversation: newConversation1,
    });
    console.log('DONE');

    let payload = {
      query: question,
      userId: user.userId,
    };

    setQuestion('');

    let path = 'https://tmf-backend.onrender.com/chat/start';
    let firstTime = true;
    if (currentConversation?.conversation?.length > 0) {
      delete payload.userId;
      payload.conversationId = currentConversation.conversationId;
      firstTime = false;
      path = 'https://tmf-backend.onrender.com/chat/continue';
    }
    console.log('payload', payload);
    try {
      const response = await axios.post(path, payload);
      console.log('response Of API', response);
      setQuestion('');
      setLoader(false);
      if (response.status == 200 && response.data) {
        if (firstTime) {
          let newDataOfUser = {
            userId: user.userId,
            conversationIds: [
              ...user.conversationIds,
              response?.data?.conversationId,
            ],
            token: user.token,
          };
          localStorage.setItem('user', JSON.stringify(newDataOfUser));
          setUser(newDataOfUser);
        }
        let holder = [...currentConversation.conversation];
        // holder.pop();

        let newConversation = [
          ...holder,
          {
            conversationId: response?.data?.conversationId,
            conversation: {
              question: response?.data?.question,
              response: response?.data?.response,
            },
          },
        ];
        setCurrentConversation({
          conversationId: response?.data?.conversationId,
          conversation: newConversation,
        });

        if (allConversations.length > 0) {
          let idFounded = false;
          for (let i = 0; i < allConversations.length; i++) {
            if (
              allConversations[i][0]?.conversationId ==
              (response?.data?.conversationId ||
                currentConversation?.conversationId)
            ) {
              idFounded = true;
              let newConv = [...allConversations];
              newConv[i].push({
                conversationId: response?.data?.conversationId,
                conversation: {
                  question: response?.data?.question,
                  response: response?.data?.response,
                },
              });
              setAllConversation([...newConv]);
            }
          }
          if (!idFounded) {
            let newConv = [...allConversations];
            newConv.push([
              {
                conversationId: response?.data?.conversationId,
                conversation: {
                  question: response?.data?.question,
                  response: response?.data?.response,
                },
              },
            ]);
            setAllConversation([...newConv]);
          }
        } else {
          let newConv = [[]];
          newConv[0][0] = {
            conversationId: response?.data?.conversationId,
            conversation: {
              question: response?.data?.question,
              response: response?.data?.response,
            },
          };
          setAllConversation([...newConv]);
        }
      }
    } catch (error) {
      setLoader(false);
      console.log('ERROR OF API', error);
    }
    setLoader(false);
  };

  console.log('allConversations', allConversations);

  function handleKeyDown(event) {
    if (event.key === 'Enter' && question.trim()) {
      submitQuestion();
    }
  }
  function getDomainInfo(url) {
    try {
      const { hostname } = new URL(url);
      const iconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;

      return {
        domain: hostname.replace('www.', ''),
        icon: iconUrl,
      };
    } catch (error) {
      console.error('Invalid URL', error);
      return null;
    }
  }
  function scrollToBottomSmooth() {
    const myDiv = document.getElementById('ScrollableDiv');
    myDiv.scrollTo({
      top: myDiv.scrollHeight,
      behavior: 'smooth',
    });
  }

  const deleteConversation = async (conversationId) => {
    let path = 'https://tmf-backend.onrender.com/conversation/delete';
    console.log({
      userId: user.userId,
      conversationId: conversationId,
    });
    try {
      const response = await axios.post(path, {
        userId: user.userId,
        conversationId: conversationId,
      });

      if (
        response?.status == 200 &&
        response?.data?.message == 'Conversation deleted successfully'
      ) {
        let updateAllConversations = allConversations;

        setAllConversation(
          updateAllConversations.filter(
            (item) => item[0].conversationId !== conversationId
          )
        );

        let newDataOfUser = {
          userId: user.userId,
          conversationIds: [...user.conversationIds],
          token: user.token,
        };
        newDataOfUser.conversationIds = newDataOfUser.conversationIds.filter(
          (item) => item !== conversationId
        );
        localStorage.setItem('user', JSON.stringify(newDataOfUser));
        setUser(newDataOfUser);

        if (currentConversation.conversationId == conversationId)
          setCurrentConversation({
            conversation: [],
            conversationId: '',
          });
      }

      console.log('DELETE responce', response);
    } catch (err) {
      console.log('ERROR : ', err);
    }
  };

  useEffect(() => {
    scrollToBottomSmooth();
  }, [currentConversation]);

  const questions = [
    { questoin: `What's` },
    { questoin: `What's in` },
    { questoin: `What's in your` },
    { questoin: `What's in your mind?` },
    { questoin: `What's in your mind?...` },
  ];

  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <div className='w-[20%] shadow-[4px_-2px_46px_0px_rgba(0,_0,_0,_0.1)] h-[95%] rounded-xl flex flex-col justify-between'>
        <div>
          <div className='p-3'>
            <NavLink to='home' className='block w-full font-bold'>
              <h1 className='font-poppins font-bold text-[38px]'>TMF</h1>
            </NavLink>
          </div>
          <div className='w-[100%] bg-[#E9EDF7] h-[1px] mt-5'></div>
          <div className='overflow-y-scroll overflow-x-hidden h-calc-100-minus-450'>
            <div className='flex w-[100%] justify-center items-center gap-3 pt-8'>
              <div className='w-[24px] h-[24px]'>
                <img
                  src={process.env.PUBLIC_URL + '/images/AIlogo.png'}
                  alt='AI Logo'
                />
              </div>
              <h2 className='font-bold font-Poppins text-[16px]'>
                Food Export Assistant
              </h2>
              <div
                onClick={() => {
                  setCurrentConversation({
                    conversation: [],
                    conversationId: '',
                  });
                }}
                className='w-[34px] h-[34px] flex rounded-full justify-center items-center cursor-pointer hover:bg-slate-50'
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/addChat.png'}
                  alt='AI Logo'
                  className='w-[16px] h-[16px]'
                />
              </div>
            </div>
            {loader1
              ? questions?.map((item, idx) => {
                  return (
                    <div className='flex w-[85%] ml-auto mr-auto justify-start items-center gap-3 mt-3 mb-3 p-3 pl-4 pr-4 rounded-xl animate-pulse bg-slate-100'>
                      <div className='w-[18px] h-[16px] bg-slate-300 rounded'></div>
                      <div className='font-Poppins text-[14px] w-[80%] h-[16px] bg-slate-300 rounded truncate'></div>
                    </div>
                  );
                })
              : allConversations.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex w-[85%] ml-auto mr-auto justify-between items-center gap-2  mt-3 mb-3 p-3 pl-4 pr-4 rounded-xl cursor-pointer hover:bg-slate-50 ${
                      currentConversation?.conversationId ==
                        item[0].conversationId && 'bg-[#EAE9F7]'
                    }`}
                  >
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentConversation({
                          conversationId: item[0].conversationId,
                          conversation: item,
                        });
                      }}
                      className='flex gap-3 justify-between items-center'
                    >
                      <div className='w-[18px] h-[16px] '>
                        <img
                          src={process.env.PUBLIC_URL + '/images/chatIcon.png'}
                          alt='Chat Icon'
                          className='w-[18px] h-[16px]'
                        />
                      </div>
                      <div className='font-Poppins text-[14px] w-[75%] truncate text-[#00000066] shadow-inset-right-white'>
                        {item[0].conversation.question}
                      </div>
                    </div>
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        deleteConversation(item[0].conversationId);
                      }}
                      className='w-[20px] h-[20px]  '
                    >
                      <SvgIcons.Delete />
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div>
          <div className='w-[85%] p-5 ml-auto mr-auto rounded-2xl text-center gap-3 flex flex-col bg-custom-gradient'>
            <h3 className='font-bold font-Poppins text-[18px] text-white'>
              Go unlimited with TMF
            </h3>
            <p className='font-medium font-Poppins text-[14px] text-white'>
              Get your exports to another level and start doing more with TMF AI
              Tools!
            </p>
            <button className='text-white p-3 bg-[#ffffff24] rounded-full'>
              Get started with TMF
            </button>
          </div>
          <div className='w-[85%] p-5 ml-auto mr-auto rounded-full text-center flex shadow-[4px_-2px_46px_0px_rgba(0,_0,_0,_0.1)] mt-4 mb-4 justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-[34px] h-[34px]'>
                <img
                  src={process.env.PUBLIC_URL + '/images/mohsin.png'}
                  alt='User Avatar'
                />
              </div>
              <h3 className='font-bold font-Poppins text-[14px]'>Mohsin</h3>
            </div>
            <div className='w-[34px] h-[34px] cursor-pointer'>
              <img
                src={process.env.PUBLIC_URL + '/images/Logout.png'}
                alt='Logout Icon'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='w-[77%] h-[95%] p-5 flex flex-col justify-between'>
        <div className='flex'>
          <h1 className='font-bold font-Poppins text-[34px]'>
            Food Export Assistant
          </h1>
        </div>
        {console.log(
          'currentConversation?.conversation',
          currentConversation?.conversation
        )}

        <div
          className={`h-[85%] w-[77%] ml-auto mr-auto flex flex-col ${
            // user?.conversationIds?.length > 0 &&
            currentConversation?.conversation?.length > 0
              ? 'justify-between'
              : 'justify-center'
          }`}
        >
          <div
            id='ScrollableDiv'
            className='overflow-y-scroll overflow-x-hidden h-calc-100-minus-100'
          >
            {
              // user?.conversationIds.length > 0 &&
              currentConversation?.conversation?.length > 0 && (
                <>
                  {currentConversation?.conversation?.map((item, index) => {
                    return (
                      <>
                        <div className='w-[100%] flex justify-start gap-4 items-center mt-5'>
                          <div className='w-[40px] h-[40px] border border-[#E2E8F0] rounded-full flex justify-center items-center'>
                            <img
                              className='w-[24px]'
                              src={
                                process.env.PUBLIC_URL +
                                '/images/personAvatar.png'
                              }
                              alt='User Avatar'
                            />
                          </div>
                          <div className='p-3 border border-[#E2E8F0] flex justify-between rounded-xl w-calc-100-minus-100'>
                            <p className='text-[16px] font-semibold'>
                              {item?.question || item?.conversation?.question}
                            </p>
                            <div
                              onClick={() => {
                                setQuestion(
                                  item?.question || item?.conversation?.question
                                );
                                document.getElementById('inputField').focus();
                                scrollToBottomSmooth();
                              }}
                              className='cursor-pointer'
                            >
                              <img
                                className='w-[24px]'
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/editAlone.png'
                                }
                                alt='Edit Icon'
                              />
                            </div>
                          </div>
                        </div>
                        {item?.skeleton ? (
                          <>
                            <div class='w-[100%] flex justify-start gap-4 mt-4 mb-9 items-start animate-pulse'>
                              <div class='w-[40px] h-[40px] bg-slate-300 rounded-full border border-[#E2E8F0]'></div>
                              <div class='p-3 shadow-[4px_-2px_46px_0px_rgba(0,_0,_0,_0.1)] rounded-xl w-calc-100-minus-100'>
                                <div class='h-[14px] w-[90%] bg-slate-300 rounded mb-2'></div>
                                <div class='h-[14px] w-[85%] bg-slate-300 rounded mb-2'></div>
                                <div class='h-[14px] w-[70%] bg-slate-300 rounded'></div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className='w-[100%] flex justify-start gap-4 items-start mt-4 mb-9'>
                            <div className='w-[40px] h-[40px] border border-[#E2E8F0] rounded-full flex justify-center items-center'>
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/AIAvatar.png'
                                }
                                alt='AI Avatar'
                              />
                            </div>

                            <div className='p-3 shadow-[4px_-2px_46px_0px_rgba(0,_0,_0,_0.1)] flex  flex-col justify-between rounded-xl w-calc-100-minus-100'>
                              {(item?.conversation?.response?.citations
                                ?.length > 0 ||
                                item?.conversation?.citations?.length > 0) && (
                                <div className=' w-[100%] flex justify-start gap-4  mb-6 flex-wrap '>
                                  {(
                                    item?.conversation?.response?.citations ||
                                    item?.conversation?.citations
                                  ).map((items, idx) => {
                                    return (
                                      <>
                                        <div
                                          index={idx}
                                          onClick={() => {
                                            window.open(items, '_blank');
                                          }}
                                          className='transition-transform transform hover:scale-105 hover:shadow-lg w-[23%] h-[100px] font-bold border cursor-pointer overflow-hidden rounded-xl'
                                        >
                                          <div className='w-full flex justify-center p-2'>
                                            <img
                                              className='w-[28px] h-[28px]'
                                              src={getDomainInfo(items).icon}
                                            />
                                          </div>
                                          <h3 className='font-bold text-[14px] w-full text-center p-2 break-words pt-0'>
                                            {getDomainInfo(items).domain}
                                          </h3>
                                        </div>

                                        {/* <a
                                          href={items}
                                          target='_blank'
                                          class='group w-64 h-32 bg-gray-100 border border-gray-300 rounded-lg shadow-md flex items-center p-4 transition-transform transform hover:scale-105 hover:shadow-lg'
                                        >
                                          <img
                                            src={getDomainInfo(items).icon}
                                            alt='Logo'
                                            class='w-12 h-12 mr-4'
                                          />
                                          <div>
                                            <p class='text-gray-700 font-bold text-lg'>
                                            {getDomainInfo(items).domain}
                                            </p>
                                            <p class='text-sm text-gray-500 group-hover:text-gray-700'>
                                              Visit this website
                                            </p>
                                          </div>
                                        </a> */}
                                      </>
                                    );
                                  })}
                                </div>
                              )}
                              <p className='text-[14px] font-medium whitespace-pre-wrap overflow-auto'>
                                {
                                  <BoldText
                                    text={
                                      (item?.conversation?.response?.choices &&
                                        item?.conversation?.response?.choices[0]
                                          ?.message?.content) ||
                                      item?.conversation?.answer
                                    }
                                  />
                                }
                              </p>
                            </div>
                          </div>
                        )}
                        {/* <div className='flex justify-center items-center gap-3 border border-[#E2E8F0] w-fit ml-auto mr-auto mt-4 cursor-pointer p-3 rounded-full'>
                  <img
                    className='w-[14px] h-[14px]'
                    src={process.env.PUBLIC_URL + '/images/Vector1.png'}
                    alt='Regenerate Icon'
                  />
                  <p className='text-[14px] font-semibold'>
                    Regenerate response
                  </p>
                </div> */}
                      </>
                    );
                  })}
                </>
              )
            }
          </div>

          <div className='h-[100px]'>
            <div className='flex justify-between w-calc-100-minus-100 ml-[50px] mt-5'>
              <input
                placeholder='Enter your query here...'
                value={question}
                id='inputField'
                onInput={(e) => {
                  setQuestion(e.target.value);
                }}
                onKeyDown={handleKeyDown}
                className='w-[80%] border border-[#E9EDF7] pl-6 pt-4 pb-4 pr-6 text-[14px] rounded-full outline-none'
              />
              <div
                onClick={() => {
                  submitQuestion();
                }}
                className={`w-[18%] bg-custom-gradient text-white flex justify-center items-center h-[54px] rounded-full text-[14px] cursor-pointer ${
                  (question == '' || loader) && 'pointer-events-none'
                }`}
              >
                {loader ? (
                  <div class='flex space-x-2'>
                    <div class='w-2 h-2 bg-white rounded-full animate-wave delay-0'></div>
                    <div class='w-2 h-2 bg-white rounded-full animate-wave delay-150'></div>
                    <div class='w-2 h-2 bg-white rounded-full animate-wave delay-300'></div>
                  </div>
                ) : (
                  'Submit'
                )}
              </div>
            </div>
            <div className='text-[#718096] text-[12px] ml-auto mr-auto w-fit mt-3'>
              Free Research Preview. AI may produce inaccurate information about
              people, places, or facts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
