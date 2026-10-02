import React from 'react'
import axios from 'axios'
const CreatePost = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)

     await axios.post("http://localhost:3000/create-post" , formData).then((res)=>{
               console.log(res)
    }).catch((err) => {
            console.log(err)
    })
  }

  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>
      <form className='create-post-form' onSubmit={handleSubmit}>
        <input className='create-post-file' type='file' name='image' accept='image/*' />
        <input className='create-post-input' type='text' name='caption' required placeholder='Enter Caption' />
        <button className='create-post-button' type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default CreatePost
