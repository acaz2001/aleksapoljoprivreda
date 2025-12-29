import React from 'react'
import { promises as fs } from 'fs';
import ProducClient from '../../components/product/ProductClient'
import FormaProizvod from '../../components/forms/FormaProizvod'

async function Proizvod() {
    const file = await fs.readFile(process.cwd() + '/app/proizvodi.json');
    const data = JSON.parse(file);

    console.log("data je",data.proizvodVarijante[0]?.ime);

  return (
    <div className='max-w-[1650px] mx-auto px-10'>
      <h1>{data.proizvodVarijante[0].ime}</h1>
      <ProducClient product={data}/>

    </div>
  )
}

export default Proizvod
