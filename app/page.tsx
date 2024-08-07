import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  // Chamar meu Banco de Dados
  const barbershops = await db.barbershop.findMany({})
  
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

        {/* Banner */}
        <div className="relative w-full h-[150px] mt-6">
          <Image alt="Banner" src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>

        {/* Agendamentos */}
        <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Campo Status do Agendamento */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png"/>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* Data do Agendamento */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        {/* Recomendados */}
        <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (<BarbershopItem key={barbershop.id} barbershop={barbershop} />))}
        </div>
      </div>
    </div>
  )
}

export default Home