import PhoneItem from "@/app/_components/phone-item";
import ServiceItem from "@/app/_components/service-item";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarbershopPageProps {
    params: {
        id: string
    }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {

    //Chamar o banco de dados
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        },
    })

    if (!barbershop) {
        return notFound()
    }

    return (
        <div>
            {/* Imagem de Capa Barbearia */}
            <div className="relative h-[250px] w-full">
                <Image alt={barbershop.name} src={barbershop?.imageUrl} fill className="object-cover" />

                {/* Seta de Voltar */}
                <Button size="icon" variant="secondary" className="absolute top-4 left-4" asChild>
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                {/* Menu Lateral */}
                <Button size="icon" variant="secondary" className="absolute top-4 right-4">
                    <MenuIcon />
                </Button>
            </div>

            {/* Titulo */}
            <div className="border-b border-solid p-5">
                <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>

                {/* Localização */}
                <div className="mb-2 flex items-center gap-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{barbershop?.address}</p>
                </div>

                {/* Avaliações */}
                <div className="mb-2 flex items-center gap-2">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-sm">5,0 (499 avaliações)</p>
                </div>
            </div>

            {/* Descrição */}
            <div className="p-5 border-b border-solid space-y-3">
                <h2 className="text-xs font-bold uppercase text-gray-400">Sobre Nós</h2>
                <p className="text-sm text-justify">{barbershop?.description}</p>
            </div>

            {/* Serviços */}
            <div className="p-5 border-b border-solid space-y-3">
                <h2 className="text-xs font-bold uppercase text-gray-400 mb-3">Serviços</h2>
                <div className="space-y-3">
                    {barbershop.services.map((service) => (
                        <ServiceItem key={service.id} service={service} />
                    ))}
                </div>
            </div>

            {/* Contato */}
            <div className="p-5 space-y-3">
                {barbershop.phones.map(phone => (
                    <PhoneItem key={phone} phone={phone}/>
                ))}
            </div>
        </div>
    );
}

export default BarbershopPage;