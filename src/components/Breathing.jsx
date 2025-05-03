import React from 'react'

const Breathing = () => {
  return (
    <>
         <div class="flex items-center justify-center w-full mt-24 h-1/2 p-4 sm:p-8">
  <div class="w-full h-96 max-h-[40vh] sm:max-h-[90vh] rounded-lg shadow-xl sm:shadow-2xl">
    <iframe
    className='w-full h-96 max-h-[40vh] sm:max-h-[90vh]' 
      src="https://www.youtube.com/embed/LiUnFJ8P4gM?si=tO3lHSmxpR0kMpIA"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    
  </div>
</div>
    </>
  )
}

export default Breathing
