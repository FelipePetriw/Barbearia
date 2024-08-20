import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogContent, DialogTrigger } from "./ui/dialog"


const SidebarSheet = () => {
    return (

        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            {/* Dados do Login */}
            <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
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

                        <Button variant="outline" className="gap-1 font-bold">
                            <Image src="/google.svg" width={18} height={18} alt="Google" />
                            Google
                        </Button>
                    </DialogContent>
                </Dialog>
                {/* <Avatar>
                        <AvatarImage src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww" />
                    </Avatar>

                    <div>
                        <p className="font-bold">Felipe Petriw</p>
                        <p className="text-xs">felipe@desenvolvimentos.com</p>
                    </div> */}
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
                    <Button key={option.title} className="justify-start gap-2" variant="ghost">
                        <Image src={option.imageUrl} height={18} width={18} alt={option.title} />
                        {option.title}
                    </Button>
                ))}
            </div>

            {/* Botão de Sair do Menu */}
            <div className="flex flex-col gap-2 py-5 border-b border-solid">
                <Button variant="ghost" className="justify-start gap-2">
                    <LogOutIcon size={18} />
                    Sair da conta
                </Button>
            </div>
        </SheetContent>
    );
}

export default SidebarSheet;