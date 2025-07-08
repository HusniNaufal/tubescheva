import { Link } from "react-router-dom";
import CloseButton from "../../components/Closebutton";
import NavbarDashboard from "../../components/NavbarDashboard";
// Import komponen CloseButton

export default function Users() {
  return (
    <>
      <div className="min-h-screen relative max-h-[100vh]">
        <div className="relative z-10">
          <NavbarDashboard />
          <div className="container mx-auto px-4">
            <div className="mt-18 flex justify-between items-center w-full">
              <div className="flex flex-row font-bold text-2xl">
                <h1 className="text-[#F49600]">Status Tiket :</h1>
                <h1 className="text-red-700 ms-2">Aktif</h1>
              </div>
              <CloseButton targetPath="/" />
            </div>
            <div className="mt-2 flex flex-row">
              <div className="border-1 border-gray-400 flex-1 p-4 pb-4 rounded-l">
                <div className="flex flex-row">
                  <div className="w-25 h-25 rounded-full overflow-hidden ms-5 text-end">
                    <img src="/user-logo.jpg" className="w-full h-full object-cover" alt="User Logo" />
                  </div>
                  <div className="mx-[10%] text-start mt-2">
                    <h1 className="font-bold text-2xl">Bernard bornwilt</h1>
                    <p>berwilt838</p>
                    <p className="text-green-600">Terverifikasi</p>
                  </div>
                </div>
                <div className="mt-3">
                  <h1 className="font-bold text-xl">Aju Banding Produk</h1>
                  <p>ID Tiket : #Tkt01231239</p>
                </div>
                <div className="flex flex-row mt-3">
                  <div className="flex-1 text-start font-bold">
                    <p>Barang </p>
                    <p>ID Daftar</p>
                    <p>Kategori</p>
                    <p>Harga Sewa</p>
                    <p>Tanggal Penurunan</p>
                    <p>Alasan</p>
                    <br></br>
                    <p>Respon</p>
                  </div>
                  <div className="flex-1 text-start pb-4">
                    <p>: SSD Cooler S50 M.2 2280</p>
                    <p>: #Dftr0002365</p>
                    <p>: Elektronik</p>
                    <p>: Rp 75.000,00 / Hari</p>
                    <p>: 06 Juli 2025</p>
                    <p>: Barang aktual tidak sesuai dengan keterangan.</p>
                    <p>
                      : Barang sudah sesuai dengan keterangan, sepertinya terjadi kesalahpahaman. <br></br>Produk yang saya sewakan memiliki beberapa varian warna karena memang sistem RGB.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-1 border-gray-400 flex-1 p-4 ml-4">
                <div className="w-[90%] p-2 text-start">
                  <h1 className="font-bold text-xl mt-2">Detail Daftar Terkait</h1>
                  <div className="flex flex-row mt-5">
                    <div className="w-40 h-30 rounded-sm overflow-hidden">
                      <img src="/produk-2.png" className="w-full h-full object-cover" alt="User Logo" />
                    </div>
                    <div className="w-40 h-30 rounded-sm mx-auto overflow-hidden">
                      <img src="/produk-1.png" className="w-full h-full object-cover" alt="User Logo" />
                    </div>
                  </div>
                  <h1 className="font-bold text-xl mt-4">SSD Cooler S50 M.2 2280</h1>
                  {/* Review */}
                  <div className="flex items-start space-x-2 text-[0.75rem] mt-1">
                    <div className="flex">
                      <svg className="w-4 h-4 text-yellow-500 mr-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-500 mr-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-500 mr-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="w-4 h-4 text-gray-400 mr-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="w-4 h-4 text-gray-400 mr-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>

                    <span className="text-gray-700 whitespace-nowrap">(100 Reviews)</span>

                    <div className="h-5 border-1 rounded-md border-gray-600"></div>

                    <span className="font-semibold text-red-500 whitespace-nowrap">Ditangguhkan</span>
                  </div>
                  {/* Akhir Review */}
                  <h1 className="text-lg">Rp 75.000,00 / Hari</h1>
                  <p className="text-[0.75rem] mt-2">
                    SSD Cooler S50 M.2 2280 adalah perangkat pendingin khusus yang dirancang untuk menjaga suhu Solid State Drive (SSD) tipe M.2 2280, terutama untuk model NVMe yang memiliki kecepatan tinggi dan rentan terhadap thermal
                    throttling (penurunan performa akibat suhu tinggi).
                  </p>
                  <hr className="mt-3"></hr>
                  {/* Rincian */}
                  <div className="flex flex-row mt-2 text-[0.85rem]">
                    <div className="flex-1/3 space-x-1.5">
                      <p>Kategori</p>
                      <p>Deposit</p>
                      <p>Alamat</p>
                    </div>
                    <div className="flex-2/3 space-x-1.5">
                      <p>: Elektronik</p>
                      <p>: Rp 200.000,00</p>
                      <p>: Jl. Gatot Subroto No.Kav.52, RT.6/RW.1, Kuningan Bar., Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12710</p>
                    </div>
                  </div>
                  {/* Akhir Rincian */}
                </div>
                <div className="relative pb-5">
                  <Link to="/" className="text-sm">
                    <p className="absolute top-0 right-0 flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
                      Menuju laman produk
                      <svg className="w-6 h-6 ml-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 7l6 5-6 5" />
                      </svg>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
