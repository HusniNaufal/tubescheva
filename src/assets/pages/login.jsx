import React from 'react';
import Navbar from '../components/navbar';

const LoginPage = () => {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-login.png')" }}>

      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 flex flex-col">
          <h1 className="w-[20%] text-[3rem] font-bold text-[#F49600] mt-24">
            Temukan, Sewa, Pakai !
          </h1>
          <p className="text-xl text-gray-200 mt-2 font-bold">
            Rental Market Place Pertama di Indonesia
          </p>
          
          {/* Mengubah div untuk logo sejajar ke kanan */}
          <div className="flex flex-row gap-4 justify-start">
            <img src='/google-play.png' alt="Google Play" className="h-20 mt-8" />
            <img src='/app-store.png' alt="App Store" className="h-18 mt-9" />
          </div>
        </div>
      </div>
      {/* Footer dengan teks versi */}
        <footer className="absolute bottom-4 mx-auto px-12 text-white text-xl opacity-70">
          Versi 1.0
        </footer>
    </div>
  );
};

export default LoginPage;