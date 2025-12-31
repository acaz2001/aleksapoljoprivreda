import React from 'react'
import cslx from 'clsx';
import { MdCheck } from "react-icons/md";

export default function BrziPregled({children,classname}) {
  return (
    <div className={`flex flex-col gap-2 items-start ${classname}`}>
      {children}
    </div>
  )
}


    
    export function BrziPregledKartica ({text,classname}) {
        return (
            <div className={`flex flex-row items-center gap-2 ${classname}`}>
                <MdCheck className='bg-[#c9a24d] p-[3px] rounded-2xl 
                text-white text-[18px] '/>
                <p className='text-[#1B4A36] font-[500] text-[16px]'>{text}</p>
            </div>
        )
            
        
    }

