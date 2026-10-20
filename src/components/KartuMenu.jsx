import { useState } from 'react';
import LabelHarga from './LabelHarga';

function KartuMenu({ nama, harga, kategori='Makanan' }) {

  const [jumlah, setJumlah] = useState(0);

  const [catatan, setCatatan] = useState('');

  const tambah = () => setJumlah (jumlah + 1)


  return (
    <div>
      <h3>{nama}</h3>
      <LabelHarga harga={harga}/>
      <p>Kategori: {kategori}</p>

      <div className='kontrol'>
        
        <button type='button' onClick={tambah}>
          +
        </button>

        <button type='button' onClick={() => setJumlah(jumlah - 1)} disabled={jumlah === 0}>
          -
        </button>
      </div>

      <p>Subtotal</p>

      <input type="text" name='Tambahkan catatamn' value={catatan} onChange={(e) => setCatatan(e.target.value)}/>

      <p>Jumlah: {jumlah}</p>

      
    </div>


  )
}

export default KartuMenu;