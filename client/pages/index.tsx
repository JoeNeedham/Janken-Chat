import Head from 'next/head'
import React, { useState } from 'react'

export default function Home() {
  const [advancedMode, setAdvancedMode] = useState(false);
  function changeMode(event: React.MouseEvent){
    event.preventDefault();
    setAdvancedMode(!advancedMode)
  }
  return (
    <div>
      <footer> 
        <div onClick={changeMode} className="modes">
            {advancedMode ? "Advanced" : "Normal"} Mode
        </div>
        <div className="rules">Rules</div>
      </footer>
    </div>
  )
}
