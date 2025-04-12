import React from 'react'

const Card = (props) => {
    const {title,subtitle,description,imageUrl} = props
  return (
    <div className='m-40 w-1/2 shadow-2xl rounded-2xl'>
      <div className='p-6'>
      {imageUrl && <img  className="w-fit object-fill rounded-2xl"src={imageUrl}/>
         }
        <h1 className='p-2 text-2xl'>{title}</h1>
        <h2 className='px-2'>{subtitle}</h2>
        <p className='pt-1 px-2'>{description}</p>
      </div>
    </div>
  )
}

export default Card