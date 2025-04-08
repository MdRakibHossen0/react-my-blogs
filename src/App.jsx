 
 
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs'
import { useState } from 'react'

function App() {
  const [bookmarked,setBookmarked]=useState([])
  const [readingCount,setReadingCount]=useState(0)

  const handleBookmark =(blog)=>{
   setBookmarked([...bookmarked,blog]);

  }

  const handleMarkAsRead=(time,id)=>{
   setReadingCount(readingCount+time);
   handleRemoveForBookmark(id)
   

  }

  const handleRemoveForBookmark =(id)=>{
    const remainingBookMark = bookmarked.filter((mark)=>mark.id !== id)
     setBookmarked(remainingBookMark)
  }
  // console.log(bookmarked)

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className="right-container w-[30%] ">
          <h1>Reading time: {readingCount}</h1>
          <h1>Bookmark Count: {bookmarked.length}</h1>
          {bookmarked.map((marked) => (
            <p key={mark.id} className='bg-red-600 p-2 shadow mt-1 text-white'>{marked.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
