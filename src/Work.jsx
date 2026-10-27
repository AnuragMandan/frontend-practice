  import { useState } from 'react'
  // import heroImg from './assets/hero.png'
  // import viteLogo from './assets/vite.svg'


  // import Hero from './components/Hero'
  // import Work from './components/Work'
  // import Footer from './components/common/Footer'




 const Work=()=> {
    const [count,Setcount]=useState(0)
    const [show,Setshow]=useState(false);
    const [like,Setlike]=useState(false);
    const [likecount,Setlikecount]=useState(0);

    const [val,Setval]=useState("");
    const [task,Settask]=useState([]);
    const AddTask=()=>{
      console.log(val);
      
      Settask([...task,val]);
      
    }
    const DelTask=(index)=>{
      Settask(task.filter((val,i)=>{
          return i!=index;
      }));
    }

  const handleLike=()=>{
        if(like){
          Setlikecount(likecount-1);
        }
        else{
          Setlikecount(likecount+1);
          console.log(likecount);
          

        }
        // console.log(likecount);
        Setlike(!like);
        console.log(like);
        
  }

    return (
      <>
      {/* <Hero/>
      <Work/>
      <Footer/> */}
      <div className='flex mt-20 ml-20 gap-15 items-center'>
        <h3 className='text-[30px]'>this is the value after click:  {count}</h3>
        <button onClick={()=>{Setcount(count+1)}} className='bg-amber-300 border-1 rounded-[30px] p-4'>click me!</button>
        <button onClick={()=>{Setcount(0)}} className='bg-amber-300 border-1 rounded-[30px] p-4'>reset</button>
      
      </div>
      <div className='flex mt-20 ml-20 gap-15 items-center'>
        <h2 className='text-[30px]'>Password : {show?"12345678":"********"}</h2>
        <button onClick={()=>{Setshow(!show)}} className='bg-amber-300 border-1 rounded-[30px] p-4'>show Password</button>

      </div>
          <div className='flex mt-20 ml-20 gap-15 items-center'>
          <button className=' border-1 rounded-[30px] p-4' onClick={handleLike} style={{backgroundColor:like?"red":""}} >Like {likecount}</button>
          
          </div>
          <div className='flex  flex-col mt-20 ml-20 gap-15 '>
                <div className='flex p-4 gap-5'>
                  <input className='border-b border-1 text-[20px] ' type="text" value={val} onChange={(e)=>{Setval(e.target.value)}} placeholder='type task' />
                  <button className='bg-amber-300 border-1 rounded-[30px] p-4' onClick={AddTask}>Add Task</button>
                </div>
                <div>
                  <ul className='ml-20'>
                    { task.map((value,index)=> (
                      <span className='flex gap-4 mt-4' key={index}>
                      <li className='text-[25px]'>{value}</li>
                      <button className='bg-amber-300 border-1 rounded-[30px] p-2' onClick={()=>{DelTask(index)}}>Delete Task</button>
                      </span>
                    )) }
                  </ul>
                </div>
          </div>
          
      </>
    )
  }

  export default Work
  

  