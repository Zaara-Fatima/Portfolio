import React from 'react'
import { Introduction } from '../components/introduction'
import { Featured } from '../components/Featured'
import { Skills } from '../components/Skills'
import {Contact} from '../components/Contact'
import Header from '../components/Header'

export const MainPage = () => {
  return (
    <div className="min-h-screen bg-ink text-fg">
          <Header />
          <main>
            <Introduction/>
            <Featured/>
            <Skills />
            <Contact />
          </main>
        </div>
  )
}
