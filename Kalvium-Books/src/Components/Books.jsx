import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { IoIosStar } from "react-icons/io";

const Books = (props) => {

    const [book,Setbook]=useState([])

    useEffect(()=>{
    axios.post(
      'https://reactnd-books-api.udacity.com/search',
      { query: props.search ? props.search : 'h', maxResults: 10 },
      { headers: { Authorization: 'whatever-you-want' } }
    )
    .then((res) => {Setbook(res.data.books),console.log(res.data.books)})
    .catch((err) => console.log(err)
    )},[props.search])
  
    return (
      <div id='books-container' className='flex'>
        {book.filter((book)=>{
            if(props.search==''){
                return book
            }else if(book.title.toLocaleLowerCase().includes(props.search.toLocaleLowerCase())){
                return book
            }
        })

        .map(book=>(
            <div key={book.id} id='card' className='flex-column'>
              
              <img src={book.imageLinks.thumbnail}/>
              <div id='rating' className='flex'>
                <p>{book.averageRating ? book.averageRating : book.pageCount % 2==0 ? 4.3 : 3.7}</p>
                <IoIosStar fill={'yellow'} />
              </div>
              <div>{book.title}</div>
            
            </div>
          ))
        
        }
      </div>
    )


}

export default Books
