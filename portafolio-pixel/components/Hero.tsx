"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hola, este es un Repositorio",
      "Somo el grupo 5",
      "Pertenecemos a Pixel "
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <div>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>
    </div>
  )
}
