import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import Header from "./_components/ui/header"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/*Header*/}
      <Header/>
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Felipe!</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        {/* Barra e Botão de Pesquisa */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Pesquisar"/>
          <Button>
            <SearchIcon/>
          </Button>
        </div>

        <div className="relative w-full h-[400px] mt-6">
          <Image alt="Banner" src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>
      </div>
    </div>
  )
}

export default Home