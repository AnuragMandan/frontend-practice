import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count,setCount]=useState(0);
        const[count1,setCount1]=useState(10);
        // const [reset,setReset]=useState(false);

    const handleClick=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        document.title=`no is: ${count}`
    },[count])

    useEffect(() => {
  const timer = setInterval(() => {
    if(count1>0){
    setCount1( count1- 1);}
  }, 1000);

  return () => clearInterval(timer);
});

  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <button className='bg-green-500 text-black rounded-[20px] p-4' onClick={handleClick}>click me!</button>
      <p>{count1}</p>
    </div>
  )
}

export default UseEffect
