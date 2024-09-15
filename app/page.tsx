import { Button } from "./_components/ui/button"
import Header from "./_components/header"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { ptBR } from "date-fns/locale"
import { format } from "date-fns"

const Home = async () => {
  // Chamar meu Banco de Dados
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    }
  })
  const confirmedBookings = session?.user ? await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        gte: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    }
  }) : []

  return (
    <div>
      {/*Header*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, {session?.user ? session.user.name : "bem vindo"}!</h2>
        <span className="capitalize">{format(new Date(), "EEEE, dd ", { locale: ptBR })}</span>
        <span>de</span>
        <span className="capitalize">{format(new Date(), " MMMM", { locale: ptBR })}</span>

        {/* Barra e Botão de Pesquisa */}
        <div className="mt-6">
          <Search />
        </div>

        {/* Busca Rápida */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map(option =>
            <Button className="gap-2" variant="secondary" key={option.title} asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image src={option.imageUrl} width={16} height={16} alt={option.title} />
                {option.title}
              </Link>
            </Button>
          )}
        </div>

        {/* Banner */}
        <div className="relative w-full h-[150px] mt-6">
          <Image alt="Banner" src="/banner-01.png" fill className="object-cover rounded-xl" />
        </div>

        {/* Agendamentos */}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
              Agendamentos
            </h2>
            <div className="flex overflow-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (<BookingItem key={booking.id} booking={booking} />))}
            </div>
          </>
        )}

        {/* Recomendados */}
        <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (<BarbershopItem key={barbershop.id} barbershop={barbershop} />))}
        </div>

        {/* Populares */}
        <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (<BarbershopItem key={barbershop.id} barbershop={barbershop} />))}
        </div>
      </div>
    </div>
  )
}

export default Home