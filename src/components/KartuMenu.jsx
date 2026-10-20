import LabelHarga from './LabelHarga';

function KartuMenu({ nama, harga, kategori='Makanan' }) {
  return (
    <div>
      <h3>{nama}</h3>
      <LabelHarga harga={harga} />
      <p>Kategori: {kategori}</p>
    </div>
  )
}

export default KartuMenu;