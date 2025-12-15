import React from 'react'

export default function Kontent({children,className}) {
  return (
    <main className={`flex flex-col items-start gap-4 py-10 ${className}`}>
      {children}
    </main>
  )
}

export function Naslov ({children,className}) {
    return (
        <h1 className={`md:text-5xl text-4xl font-medium ${className}`}>{children}</h1>
    )
}

export function PodNaslov ({children,className}) {
    return (
        <h1 className={`md:text-4xl text-3xl font-normal ${className}`}>{children}</h1>
    )
}

export function PodebljanPodNaslov ({children,className}) {
    return (
        <h1 className={`md:text-4xl text-3xl font-medium ${className}`}>{children}</h1>
    )
}

export function Tekst ({children,className}) {
    return (
        <h1 className={`md:text-2xl text-[22px] leading-[40px] ${className}`}>{children}</h1>
    )
}

export function PodebljaniTekst ({children,className}) {
    return (
        <h1 className={`md:text-2xl text-[22px] font-medium leading-[40px] ${className}`}>{children}</h1>
    )
}

export function KosiTekst ({children}) {
    return (
        <h1 className={`md:text-2xl text-[22px] italic leading-[40px] `}>{children}</h1>
    )
}

export function CrveniTekst ({children}) {
    return (
        <h1 className={`md:text-2xl text-[22px] leading-[40px] text-red-500`}>{children}</h1>
    )
}

export function Span ({children,className}) {
    return (
        <span className={`md:text-2xl text-[22px] font-bold underline mx-1.5 ${className}`}>
            {children}
        </span>
    )
}

export function CrveniSpan ({children,className}) {
    return (
        <span className={`md:text-2xl text-[22px] text-red-500 font-bold mx-1.5 ${className}`}>
            {children}
        </span>
    )
}
 

export function LinijaOdvajanja ({className}) {
    return (
        <div className={`w-full h-[1px] bg-black ${className}`}>
        </div>
    )
}

export function NaslovListe ({className,children}) {
    return (
        <h1 className={`md:text-2xl text-xl flex flex-col items-start gap-3 ${className}`}>
            {children}
        </h1>
    )
}

export function Lista ({className,children}) {
    return (
        <ul className='flex flex-col gap-2 items-start ml-10'>
            {children.map((child,idx) => (
                <li key={idx} className={`list-disc ${className}`}>
                    {child}
                </li>
            ))}
        </ul>
    )
}

export function ListaBrojevi ({className,children}) {
    return (
        <ul className='flex flex-col gap-2 items-start ml-10'>
            {children.map((child,idx) => (
                <li key={idx} className={`list-decimal text-2xl ${className}`}>
                    {child}
                </li>
            ))}
        </ul>
    )
}

