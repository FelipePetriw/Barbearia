"use client"

import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogContent, DialogTrigger } from "./ui/dialog"
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"


const SidebarSheet = () => {
    const { data } = useSession()
    const handlerLoginWithGoogleClick = () => signIn("google")
    const handlerLogoutClick = () => signOut()

    return (

        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            {/* Dados do Login */}
            <div className="flex items-center justify-between gap-3 border-b border-solid py-5">

                {data?.user ? (
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={data?.user?.image ?? ""} />
                        </Avatar>

                        <div>
                            <p className="font-bold">{data.user.name}</p>
                            <p className="text-xs">{data.user.email}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2 className="font-bold">Olá, faça seu login!</h2>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="icon">
                                    <LogInIcon />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="w-[90%]">
                                <DialogHeader>
                                    <DialogTitle>
                                        Faça login na plataforma!
                                    </DialogTitle>
                                    <DialogDescription>
                                        Conecte-se usando sua conta Google.
                                    </DialogDescription>
                                </DialogHeader>

                                <Button variant="outline" className="gap-1 font-bold" onClick={handlerLoginWithGoogleClick}>
                                    <Image src="/google.svg" width={18} height={18} alt="Google" />
                                    Google
                                </Button>
                            </DialogContent>
                        </Dialog>
                    </>
                )}
            </div>

            {/* Menu lateral  */}
            <div className="flex flex-col gap-2 py-5 border-b border-solid">
                <SheetClose asChild>
                    <Button className="justify-start gap-2" variant="ghost" asChild>
                        <Link href="/">
                            <HomeIcon size={18} />
                            Início
                        </Link>
                    </Button>
                </SheetClose>
                <Button className="justify-start gap-2" variant="ghost">
                    <CalendarIcon size={18} />
                    Agendamentos
                </Button>
            </div>

            {/* Menu Lateral Serviço */}
            <div className="flex flex-col gap-2 py-5 border-b border-solid">
                {quickSearchOptions.map((option) => (
                    <SheetClose key={option.title} asChild>
                        <Button className="justify-start gap-2" variant="ghost" asChild>
                            <Link href={`/barbershops?service=${option.title}`}>
                                <Image src={option.imageUrl} height={18} width={18} alt={option.title} />
                                {option.title}
                            </Link>
                        </Button>
                    </SheetClose>
                ))}
            </div>

            {/* Botão de Sair do Menu */}
            <div className="flex flex-col gap-2 py-5 border-b border-solid">
                <Button variant="ghost" className="justify-start gap-2" onClick={handlerLogoutClick}>
                    <LogOutIcon size={18} />
                    Sair da conta
                </Button>
            </div>
        </SheetContent>
    );
}

export default SidebarSheet;