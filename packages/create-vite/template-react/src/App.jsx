import { useState } from 'react'

import SmpLogo from './assets/marketplace-64.png'
function App() {


  return (
    <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={SmpLogo} className="logo" alt="SMP logo" />
      </a>
    </div>
    <h1>SMP</h1>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    <p className="read-the-docs">
      Click on the SMP logo  to visit the marketplace
    </p>
  </>
  )
}

export default App
