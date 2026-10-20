import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import KartuMenu from './components/KartuMenu'
import Panel from './components/Panel'
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = 'Genta Halilintar'
  const n = 67
  const jam = 9

  return (
    <>
    <body>
      <h1 className='judul' >Kantin, {name}!</h1>

      <p>Saldo awal kartu kantin: Rp {n * 1000}</p>
      <p>Selamat {jam < 12 ? 'Pagi' : 'Siang'}</p>

      <button disabled>
        Bayar
      </button>

      <div>
        <Panel judul="Menu Hari Ini">
          <KartuMenu nama="Nasi Ayam geprek" harga={13700} />
          <KartuMenu nama="Mie Goreng Telur" harga={12000} />
          <KartuMenu nama="Es Teh Lemon" harga={6000} kategori="Minuman" />
        </Panel>
      </div>
    </body>
    </>
  )
}

export default App
