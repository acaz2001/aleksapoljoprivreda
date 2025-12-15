import React from 'react'

export default function ProductCard({data}) {
  return (
    <main className='max-w-[800px] min-w-[300px] mx-10 bg-blue-700 h-auto'>
      <div>
        <h1>Ime je: <span className='text-white'>{data.proizvodIme}</span></h1>
        <h1>Cena je: <span>{data.prozvodCena}</span></h1>
      </div>

      <div>
        <h1>Cena za 2 komada: {data.proizvodPonuda[0].cena}</h1>
      </div>

      <div>
        <h1>Cena za 3 komada: {data.proizvodPonuda[1].cena}</h1>
      </div>
    </main>
  )
}

