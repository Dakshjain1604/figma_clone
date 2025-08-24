import React, { useCallback } from 'react'
import LiveCursor from './cursor/LiveCursor';
import { useMyPresence, useOthers } from '@liveblocks/react';
const Live = () => {
    const others=useOthers();
    const [{cursor},updateMyPresence]=useMyPresence() as any;

    const handlePointerMove=useCallback((event:React.PointerEvent)=>{
            event.preventDefault();
            //we are subtracting the x position of the cursor relative to the window
            const x=event.clientX-event.currentTarget.getBoundingClientRect().x;
            const y=event.clientY-event.currentTarget.getBoundingClientRect().y;
            updateMyPresence({cursor:{x,y}});
    },[])


    const handlePointerLeave=useCallback((event:React.PointerEvent)=>{
        event.preventDefault();
        updateMyPresence({cursor:null,message:null});
    },[])

    const handlePointerDown=useCallback((event:React.PointerEvent)=>{
        //we are subtracting the x position of the cursor relative to the window
        const x=event.clientX-event.currentTarget.getBoundingClientRect().x;
        const y=event.clientY-event.currentTarget.getBoundingClientRect().y;
        updateMyPresence({cursor:{x,y}});
},[])




  return (
    <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave} onPointerDown={handlePointerDown}
    className=' h-[100vh] w-full flex justify-center items-center text-center'>
        <h1 className='text-white'> figma clone</h1>
        <LiveCursor others={others}/>
    </div>
  )
}

export default Live;