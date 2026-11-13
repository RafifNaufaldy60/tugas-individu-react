import React from 'react'
import {useState, useEffect} from 'react'
import TabelMahasiswa from './TabelMahasiswa'

export default function Mahasiswa() {
    const DataMahasiswa = [{
        id: 1,
        nama: "Rizky",
        nim: "123456789",
        email: "rizky@example.com",
        no_hp: "08123456789",
        alamat: "Jl. Contoh Alamat No. 1",
        prodi: "Teknik Informatika",
        tahun_masuk: 2024
    },
    {
        id: 2,
        nama: "Dewi",
        nim: "987654321",
        email: "dewi@example.com",
        no_hp: "08987654321",
        alamat: "Jl. Contoh Alamat No. 2",
        prodi: "Manajemen Informatika",
        tahun_masuk: 2025
    },
    {
        id: 3,
        nama: "Budi",
        nim: "456789123",
        email: "budi@example.com",
        no_hp: "08456789123",
        alamat: "Jl. Contoh Alamat No. 3",
        prodi: "Sistem Informasi",
        tahun_masuk: 2023
    },
    {
        id: 4,
        nama: "Siti",
        nim: "321654987",
        email: "siti@example.com",
        no_hp: "08321654987",
        alamat: "Jl. Contoh Alamat No. 4",
        prodi: "Teknik Komputer",
        tahun_masuk: 2023
    },
    {
        id: 5,
        nama: "Andi",
        nim: "654987321",
        email: "andi@example.com",
        no_hp: "08654987321",
        alamat: "Jl. Contoh Alamat No. 5",
        prodi: "Manajemen Informatika",
        tahun_masuk: 2024
    }]
    const [mahasiswa, setMahasiswa] = useState(DataMahasiswa)

  return (
    <div>
      <TabelMahasiswa mahasiswa={mahasiswa} />
    </div>
  )
}
