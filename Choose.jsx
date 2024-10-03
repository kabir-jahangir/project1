import React from 'react'

const Choose = () => {
  return (
    <>
         <div className = 'choose mt-[91px]'>
            <div className='container'>
                <div className='choose_row'>
                    <div className='choose_row_text flex flex-col px-[20px] lg:px-[0px] items-center'>
                        <h2 className='w-[318px] text-secondColor text-[48px] font-medium font-ptSerif'>Why <span className='text-brandColor'>Choose</span> us</h2>
                        <p className='w-[300px] lg:w-[526px] text-[18px] text-[#A0A79A] font-medium font-inter mt-[21px] mb-[60px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Inventore nihil harum maiores ipsam, accusantium 
                        ducimus omnis amet impedit.</p>
                    </div>
                    <div className='choose_row_card flex flex-wrap lg:flex px-[10px] lg:px-[0px] justify-between gap-[20px]'>
                        <div className='choose_row_card1 bg-[#CDD5CA] w-[380px] pl-[26px] pr-[41px] pt-[32px] pb-[41px]'>
                            <img src = 'images/star.png' alt ='star'></img>
                            <h2 className = 'text-[22px] text-[#333333] font-bold font-inter mt-[20px] mb-[11px]'>Dermatologist tested</h2>
                            <p className = ' w-[313px] text-[18px] text-[#A0A79A] font-medium font-inter '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita 
                                tempore iste, voluptas excepturi odit aut nam?</p>
                        </div>
                        <div className='choose_row_card1 bg-[#CDD5CA] w-[380px] pl-[26px] pr-[41px] pt-[32px] pb-[41px]'>
                            <img src = 'images/pen.png' alt ='pen'></img>
                            <h2 className = 'text-[22px] text-[#333333] font-bold font-inter mt-[20px] mb-[11px]'>Allergy tested</h2>
                            <p className = ' w-[313px] text-[18px] text-[#A0A79A] font-medium font-inter '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita 
                                tempore iste, voluptas excepturi odit aut nam?</p>
                        </div>
                        <div className='choose_row_card1 bg-[#CDD5CA] w-[380px] pl-[26px] pr-[41px] pt-[32px] pb-[41px]'>
                            <img src = 'images/tick.png' alt ='tick'></img>
                            <h2 className = 'text-[22px] text-[#333333] font-bold font-inter mt-[20px] mb-[11px]'>Non-comedogenic</h2>
                            <p className = ' w-[313px] text-[18px] text-[#A0A79A] font-medium font-inter '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita 
                                tempore iste, voluptas excepturi odit aut nam?</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      
    </>
  )
}

export default Choose
