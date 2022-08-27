import Avatar from '../assets/avatar.svg'
import { Header } from '../components/Header'

export function Home () {
  return(
    <>
    <Header />
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
        <a href="#">
          <p className="w-64 py-4 flex justify-center text-gray-800 font-bold text-xl bg-yellow-800 rounded-full mt-10 hover:opacity-90 transition-colors"
          >
            Subscribe now
          </p>
        </a>
      </div>
      <div>
        <img className="w-72 mr-24" src={Avatar} alt="" />
      </div>
    </main>
    </>
  )
}