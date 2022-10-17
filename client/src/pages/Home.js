import React from 'react'
import LeftNav from '../components/LeftNav'
import Thread from '../components/Thread'
import { useContext } from "react";
import { UidContext } from "../components/AppContext";
import NewPostForm from "../components/Post/NewPostForm";


function Home() {
  const uid = useContext(UidContext);
  return (
    <div className='home'>
      <LeftNav/>
      <div className='main'>
      {uid ? <NewPostForm/> : null}
        <Thread />
      </div>
    </div>
  )
}

export default Home