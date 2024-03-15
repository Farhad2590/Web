import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleBlogs = (blogs) =>{
    // console.log(blogs);
    const newBookmarks = [...bookmarks,blogs]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (id,time) =>{
    const newReadingtime = readingTime + time;
    setReadingTime(newReadingtime)
    // console.log('remove bookmark', id);
    const remainingBookMarks =bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks);
  }
    return (
    <div className=' mx-auto w-[80%]'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleBlogs={handleBlogs} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
