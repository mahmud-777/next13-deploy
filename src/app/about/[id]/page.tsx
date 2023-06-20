import React from 'react'

const AboutDetails = ({params }: any) => {
  return (
    <div>
      <h1>This is the About with id. {params.id}</h1>
    </div>
  )
}

export default AboutDetails
