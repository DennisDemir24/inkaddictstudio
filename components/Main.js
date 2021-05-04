import React from 'react'
import Images from './Images'
import Link from 'next/link'

const Main = () => {
    return (
      <>
        <div className="page-title">
          <h1 className="info-title">Tatuerings studio i världsklass</h1>
        </div>
        <div className="info-content">
          <p>
            Allt startade med en vision och ett genuint intresse utav konsten i
            tatueringar. Idag har vi kunder ifrån hela Sverige som är nöjda med
            konsten som är satt på deras kropp. Våra artister är professionella
            och jobbar alltid för kundens bästa.
          </p>
        </div>
        <Link href="/gallery">
          <a className="gallery-cta-btn">Våra Jobb</a>
        </Link>
      </>
    )
}

export default Main
