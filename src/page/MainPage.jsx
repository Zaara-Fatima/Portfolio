import React from 'react'
import { Introduction } from '../components/introduction'
import { Featured } from '../components/Featured'
import { Skills } from '../components/Skills'
import {Contact} from '../components/Contact'

export const MainPage = () => {
  return (
    <div>
        <Introduction/>
        <Featured/>
        <Skills/>
        <Contact/>
    </div>
  )
}
