'use client';
import React, { useState, useEffect, useRef } from 'react';
import { PiCursorFill } from "react-icons/pi";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BrziPregled from './BrziPregled'
import {BrziPregledKartica} from './BrziPregled'
import FormaProizvod from '../../components/forms/FormaProizvod'




function ProductClient({ product}) {
  const [selectedDimension, setSelectedDimension] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  
  const router = useRouter();



  const [selectedVariant, setSelectedVariant] = useState(() => {
    if (product.proizvodVarijante?.length > 0) return product.proizvodVarijante[0];
    return {
      name: product.proizvodVarijante[0]?.ime || 'Default Variant',
      image: selectedVariant.url[0] || '',
      //price: product.price || 0,
     //priceOld: product.salePrice || '',
      //image: product.images?.[0] || null,
      //opis: product.desc || '',
      //dimenzije: []
    };
  });

  const mainImageRef = useRef(null);
  const imageRef = useRef(null);


  useEffect(() => {
    const mainImage = mainImageRef.current;
    const image = imageRef.current;

    if (!mainImage || !image) return;

    const handleMouseMove = (e) => {
      const rect = mainImage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      image.style.transformOrigin = `${x}px ${y}px`;
      image.style.transform = 'scale(2)';
      image.style.transition = 'scale 2s ease'
    };

    const resetZoom = () => {
      image.style.transform = 'scale(1)';
    };

    mainImage.addEventListener('mousemove', handleMouseMove);
    mainImage.addEventListener('mouseleave', resetZoom);

    return () => {
      mainImage.removeEventListener('mousemove', handleMouseMove);
      mainImage.removeEventListener('mouseleave', resetZoom);
    };
  }, [selectedVariant]);

  useEffect(() => {
  if (selectedVariant?.proizvodVarijante?.length > 0) {
    setSelectedDimension(selectedVariant.proizvodVarijante[0]?.ponuda[0]);
  } else {
    setSelectedDimension(null);
  }
}, [selectedVariant]);

{/*
    
    if (!product) return;
    
    const viewedProduct = {
      _id: product._id,
      name: product.name,
      slug: product.slug?.current, // string
      price: product.price,
      image: product.images?.[0]?.asset?.url, // direktan URL
    };
*/}

const slike = [
    {id:1 , url:"/cebe.webp"},
    {id:2 , url:"/cebe2.jpg"},
    {id:3 , url:"/cebe3.jpg"},
    {id:4 , url:"/cebe4.webp"},
]

console.log("Selektovano",selectedVariant)


  return (
    <>
    <main className='w-full flex items-center justify-center '>
      <section className='flex lg:flex-row w-full gap-10 h-fit flex-col'>
        {/* Image and Variants for Product */}
        <div className='lg:w-full flex flex-col lg:flex-col 
        md:flex-col gap-5'>
          {/* Main Image */}
          <div ref={mainImageRef} className='relative bg-[#f9f6fe] w-[100%] 
          lg:w-[100%] md:w-[100%] rounded-3xl overflow-hidden'>
            <div className='absolute top-0 right-0 flex flex-col items-center gap-1 mt-3 z-50'>
              <PiCursorFill className='text-[0.8rem] text-white' />
              <p className='text-[0.8rem] text-center w-[60%] leading-[1.1] text-white cursor-pointer'>Predjite za zoom</p>
            </div>
            <Image
                width={580}
                height={580}
                ref={imageRef}
                src={selectedVariant.url}
                alt="termo-cebe"
                 className='w-full h-full object-cover bg-cover'
            />
          </div>

          {/* Left: thumbnails */}
          <div className='flex flex-row justify-start w-[100%] gap-2 lg:w-[90%] 
          lg:justify-start lg:flex-row lg:gap-2 md:w-[100%] md:justify-start 
          md:flex-row md:gap-2'>
            {slike?.map((variant, index) => (
              <div
                key={index}
                onClick={() => setSelectedVariant(variant)}
                className='bg-[#f9f6fe] rounded-sm cursor-pointer flex flex-row justify-start h-20 lg:h-auto md:h-auto'
              >
                <Image
                width={118}
                height={118}
                  src={variant.url}
                  alt='cebe'
                  className='rounded-sm object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: info */}
        <div className='lg:w-[100%] flex flex-col items-start gap-2'>

          <h1 className='text-[40px] text-[#0F2A1D] font-medium w-full leading-[1.1]'>Električno ćebe za rasad</h1>
          <p className='text-[#1A1A1A] text-[24px] mt-1'>Broj 1 alat za sigurno i brzo nicanje tvog semena zimi</p>
          <BrziPregled className={'mt-10'}>
            <BrziPregledKartica text={'Sprečava propadanje tvojih semena zimi'} classname={'mt-8'}/>
            <BrziPregledKartica text={'Ubrzava nicanje i seme izlazi već nakon 5 dana'}/>
            <BrziPregledKartica text={'Radi dok ti spavaš, radiš ili nisi tu'}/>
            <BrziPregledKartica text={'Postavlja se za 15 minuta + naše besplatno korak-po-korak uputstvo'}/>
          </BrziPregled>

        <FormaProizvod product={product}/>
            

        </div>
      </section>
      

    </main>
</>

  );
}



{/* LOGIKA ZA DUGME KUPI ILI DODAJ U KORPU ZA KABINE I OGLEDALA 
            <div className='flex flex-col w-full gap-4 mt-8'>
            {showBuyButton ? (
            <button
              className={`bg-black text-white text-[1rem] font-medium w-full rounded-2xl pt-3 pb-3 cursor-pointer`}
              onClick={handleBuyNow}
            >
              Kupi
            </button>
            ) : (
              <button
                className={`bg-black text-white text-[1rem] font-medium w-full rounded-2xl pt-3 pb-3 cursor-pointer ${
                  isAdded ? 'bg-green-600' : ''
                }`}
                onClick={handleAddToCartAndShow}
                disabled={isAdded}
              >
                {isAdded ? 'Dodato u korpu' : 'Dodaj u korpu'}
              </button>
            )}
          </div>
  
  */}

export default ProductClient;
