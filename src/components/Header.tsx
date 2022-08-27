import { FaGithub } from 'react-icons/fa';
import Logo from '../assets/logo.svg'

export function Header(){
  return(
    <header className="w-full h-[80px] flex mx-auto border-b border-gray-600">
      <div className="w-[1108px] mx-auto flex items-center">
        <a href="#"><img className="w-28 h-8" src={Logo} alt="" /></a>
        <nav className="flex-1 pl-20 text-gray-100">
            <a href="#" className="hover:font-bold">Home</a>
            <a href="#" className="ml-6">Posts</a>
        </nav>
          <a href="#" className="flex w-56 px-6 py-3 bg-gray-600 rounded-full text-gray-100 font-bold justify-between hover:opacity-90 transition-colors">
            <FaGithub className="w-[24px] h-[24px]" color="#eba417" />
            <span>Sign in with Github</span>
          </a>
      </div>
    </header>
  )
}