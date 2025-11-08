import React from 'react'
import { IconArrowDown } from '@tabler/icons-react';

export const Intro = () => {
  return (
    <div className='section-container'>
      <div className="intro-container">
        <span>&lt;Desenvolvedora /&gt;</span><br />
        <h1>Brenda Santos</h1>
        <h2>Desenvolvedora - São Paulo/ Brasil</h2><br />
        <button>Ver mais <IconArrowDown stroke={2} /></button>
      </div>
    </div>
  )
}
