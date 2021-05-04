import React from 'react'
import Image from 'next/image'

const Images = () => {
    return (
      <div className="card" style={{width: '18rem'}}>
          <Image className="card-img-top" src="/logo.png" width={105} height={100} />
      </div>
    )
}

export default Images