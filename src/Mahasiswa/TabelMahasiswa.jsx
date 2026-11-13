import React from 'react'
import './mahasiswa.css'

export default function TabelMahasiswa({ mahasiswa }) {
  return (
    <div className="table-container">
      <table className="student-table">
        <thead >
          <tr className="table-header">
            <th>ID</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Email</th>
            <th>No. HP</th>
            <th>Alamat</th>
            <th>Program Studi</th>
            <th>Tahun Masuk</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((mhs) => (
            <tr key={mhs.id} className="table-row">
              <td>{mhs.id}</td>
              <td>{mhs.nama}</td>
              <td>{mhs.nim}</td>
              <td>{mhs.email}</td>
              <td>{mhs.no_hp}</td>
              <td>{mhs.alamat}</td>
              <td>{mhs.prodi}</td>
              <td>{mhs.tahun_masuk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
