import React from "react";
import Image from "next/image";
import baseImage from "../../components/Rectangle1.png";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-480px h-447px m-16">
        <div className="mb-5">
          <label className="text-2xl font-inter font-semibold text-black">
            Usuário
          </label>
          <input
            type="text"
            className="w-full h-16 border rounded px-4 text-lg font-inter font-light italic text-gray-600"
            placeholder="exemplo.usuario"
          />
        </div>
        <div>
          <label className="text-2xl font-inter font-semibold text-black">
            Senha
          </label>
          <input
            type="password"
            className="w-full h-16 border rounded px-4 text-lg font-inter font-light italic text-gray-600 mt-2"
            placeholder="************"
          />
        </div>

        <button className="bg-green-400 w-235 h-67 ml-40 border rounded border-black text-2xl font-inter font-semibold text-black mt-5 cursor-pointer">
          Entrar
        </button>

        <div className="mt-3 text-center">
          <a href="#" className="text-lg font-inter font-semibold text-black">
            Recuperar senha
          </a>
        </div>
      </div>
      <div className="ml-auto">
        <Image src={baseImage} alt="Next Image" width={720} height={1024} />
      </div>
    </div>
  );
};

export default Login;
