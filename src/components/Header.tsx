import Logo from '../assets/logo.svg'
import { SignInButtom } from './SignInButtom'

export function Header(){
  return(
    <header className="w-full h-[80px] flex mx-auto border-b border-gray-600">
      <div className="w-[1108px] mx-auto flex items-center">
        <a href="#"><img className="w-28 h-8" src={Logo} alt="" /></a>
        <nav className="flex-1 pl-20 text-gray-100">
            <a href="#" className="hover:font-bold">Home</a>
            <a href="#" className="ml-6">Posts</a>
        </nav>
        <SignInButtom />
      </div>
    </header>
  )
}