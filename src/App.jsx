import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = 'Genta Halilintar'
  const n = 67
  const jam = 9
  if (jam == 9) {
    alert('Selamat Pagi')
  } else {
    alert('Selamat Siang')
  }

  return (
    <>
    <body>
      <h1 className='judul' >Kantin, {name}!</h1>

      <p>Saldo awal kartu kantin: Rp {n * 1000}</p>
      <p>Selamat {jam == 9 ? 'Pagi' : 'Siang'}</p>

      <button disabled>
        Bayar
      </button>
    </body>
    </>
  )
}

export default App
