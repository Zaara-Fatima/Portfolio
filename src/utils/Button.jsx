import React from 'react'

export const Button = ({text, onClick, icon, className, iconClassName }) => {
  return (
    <div className={className}>
    <button type="button" className='p-4' onClick={onClick}>{text}
    {icon && <span className='material-symbols-outlined'>{icon}</span>}
    </button>
    </div>
  )
}
