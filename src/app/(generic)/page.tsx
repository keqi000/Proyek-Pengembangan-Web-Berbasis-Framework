"use client"

import AnnouncementCard, { 
  AnnouncementCardPropType 
} from "../_component/AnnouncementCard"

const announcementData: AnnouncementCardPropType[] = [{
  courseName: 'PENGEMBANGAN APLIKASI WEB',
  uploadDate: 10000,
  uploaderName: "XAVERIUS B.N. NAJOAN ST, MT",
  uploaderPosition: "DOSEN MATAKULIAH"
}, {
  courseName: 'KEAMANAN WEB',
  uploadDate: 10000,
  uploaderName: "XAVERIUS B.N. NAJOAN ST, MT",
  uploaderPosition: "DOSEN MATAKULIAH"
}]

export default function HomePage(){
  return (
    <main className="p-6 bg-gray-100 flex flex-col gap-4 mt-16">
      <h1 className="text-2xl font-bold text-black">Beranda</h1>

      {/* TODO: use ShadCN Component */}
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold text-black">Halo, FEBRIAN!</h2>
        <p className="text-black">
          Selamat datang di <strong>PORTAL INSPIRE</strong> Universitas Sam
          Ratulangi.
        </p>
        <div className="mt-4 flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Website Unsrat
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Dashboard Unsrat
          </button>
        </div>
      </div>

      {/* TODO: use ShadCN Component */}
      {/* Info Akademik */}
      <div className="rounded shadow-md overflow-hidden">
        <div className="bg-red-600 text-white py-3 px-4 text-center">
          <h3 className="font-bold">PERHATIAN!</h3>
        </div>
        <div className="bg-white p-4 grid grid-cols-2 gap-4 text-black">
          <p>
            Saat ini Anda sedang menempuh semester <strong>6</strong>{" "}
            (Genap).
          </p>
          <p>
            <strong>Masa Studi:</strong> 6 Semester
          </p>
          <p>
            <strong>Sisa Maksimum:</strong> 8 Semester
          </p>
          <p>
            <strong>Status PDDIKTI:</strong> AKTIF
          </p>
          <p>
            <strong>IPK:</strong> 3.97
          </p>
          <p>
            <strong>SKS Lulus:</strong> 98
          </p>
        </div>
      </div>

      {/* TODO: use ShadCN Component */}
      {/* Pengumuman */}
      <div className="rounded shadow-md overflow-hidden">
        <div className="bg-red-600 text-white py-3 px-4 text-center">
          <h3 className="font-bold">PENGUMUMAN</h3>
        </div>
        <div className="bg-white p-4 text-black">
          {announcementData.map((item: AnnouncementCardPropType, index: number) => (
            <AnnouncementCard 
              key={index}
              courseName={item.courseName} 
              uploaderName={item.uploaderName} 
              uploaderPosition={item.uploaderPosition} 
              uploadDate={100000} 
            />))}
        </div>
      </div>
      
      {/* TODO: use ShadCN Component */}
      {/* Kegiatan Hari Ini */}
      <div className="rounded shadow-md overflow-hidden mt-4">
        <div className="bg-red-600 text-white py-3 px-4 text-center">
          <h3 className="font-bold">KEGIATAN HARI INI</h3>
        </div>
        <div className="bg-white p-4 text-black">
          <p className="bg-yellow-400 text-black p-2 rounded">
            Tidak ada kegiatan hari ini yang terjadwal.
          </p>
        </div>
      </div>
      
      {/* TODO: use ShadCN Component */}
      {/* Kalender */}
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="font-bold text-red-600">Kalender</h3>
        <div className="mt-2 text-black">
          <p className="text-black">March 2025</p>
          <div className="grid grid-cols-7 gap-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day) => (
                <span key={day} className="font-bold text-black">
                  {day}
                </span>
              )
            )}
            {[...Array(31)].map((_, i) => (
              <span key={i} className="border p-2 rounded text-black">
                {i + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )    
}