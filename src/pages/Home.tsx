import { FaGithub } from 'react-icons/fa';
import Logo from '../assets/logo.svg'
import Avatar from '../assets/avatar.svg'

export function Home () {
  return(
    <>
    <header className="w-full h-[80px] flex mx-auto border-b border-gray-500">
      <div className="w-[1108px] mx-auto flex items-center">
        <a href="#"><img className="w-28 h-8" src={Logo} alt="" /></a>
        <nav className="flex-1 pl-20 text-gray-100">
            <a href="#" className="hover:font-bold">Home</a>
            <a href="#" className="ml-6">Posts</a>
        </nav>
        <div className="flex w-56 px-6 py-3 bg-gray-600 rounded-full text-gray-100 font-bold justify-between">
          <FaGithub className="w-[24px] h-[24px]" color="#eba417" />
          <span>Sign in with Github</span>
        </div>
      </div>
    </header>
    <main className="w-[1108px] mx-auto flex flex-row justify-between items-center py-16">
      <div className="text-white">
        <p className="font-bold text-2xl">
          👏 Hey, welcome
        </p>
        <p className=" font-black text-7xl mt-10">
          News about <br /> the <span className="text-blue-500">React</span> world
        </p>
        <p className="w-[345px] font-normal text-2xl mt-5">
          Get acess to all the publications <span className="text-blue-500">for $9,90 month</span>
        </p>
        <p className="w-64 py-4 flex justify-center text-gray-800 font-bold text-xl bg-yellow-800 rounded-full mt-10">
          Subscribe now
        </p>
      </div>
      <div>
        <img className="w-72 mr-24" src={Avatar} alt="" />
      </div>
    </main>
    </>
  )
}