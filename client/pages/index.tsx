import Head from 'next/head'
import React, { useState } from 'react'
import { Header } from '../components/Header';
import { Rules } from '../components/Rules';

export default function Home() {
  const [advancedMode, setAdvancedMode] = useState(false);
  const [open, setOpen] = useState(false);
  function changeMode(event: React.MouseEvent){
    event.preventDefault();
    setAdvancedMode(!advancedMode)
  }
  return (
    <div>
      <Head>
        <title>Jaken Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header advanced={advancedMode} score={0} />
      <footer> 
        <div onClick={changeMode} className="modes">
            {advancedMode ? "Advanced" : "Normal"} Mode
        </div>
        <div className="rules" onClick={() => setOpen(!open)}>Rules</div>
      </footer>

      {/* <Play advanced={advancedMode} /> */}
      <Rules
        open={open}
        advanced={advancedMode}
        setopen={() => setOpen(!open)}
        />
    </div>
  )
}
