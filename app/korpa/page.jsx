import React from 'react'
import fsPromises from 'fs/promises';
import path from 'path'
import { promises as fs } from 'fs';
import ProductCard from "../../components/ProductCard"
import BuyForm from "../../components/forms/BuyForm"

export default async function Korpa() {
  const file = await fs.readFile(process.cwd() + '/app/proizvodi.json');
  const data = JSON.parse(file);

  return (
    <main>
      <h1>Korpa</h1>
      <h1 className='text-white'>{data.proizvodIme}</h1>
      <ProductCard data={data}/>

      <div className='mt-40 mx-30'>
        <BuyForm/>
      </div>
    </main>
  )
}

