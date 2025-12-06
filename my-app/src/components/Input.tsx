import React from 'react'

interface InputProps {
    type: string
    placeholeder: string
    className?: string
}

const Input = ({placeholeder, type, className = ''}:InputProps) => {
  return (
    <>
        <input type={type} placeholder={placeholeder} className={className}/>
    </>
  )
}

export default Input