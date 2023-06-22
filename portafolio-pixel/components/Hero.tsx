"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hola, bienvenido a nuestro portafolio",
      "Somos el Grupo 5 de Pixel",
      "Intentando salvar el ciclo en las ultimas semanas "
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div >
      <div className='h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden' >
        <BackgroundCircles />
        <h1 >
          <span className='text-lg'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>
    </div>
  )
}
