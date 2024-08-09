import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between items-center flex-row flex">
                {/* Inclusão da Logo Imagem */}
                <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
                <Sheet>
                    <SheetTrigger asChild>
                        {/* Inclusão do Menu Hamburguer */}
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="text-left">Menu</SheetTitle>
                        </SheetHeader>

                        {/* Dados do Login */}
                        <div className="flex items-center gap-3 border-b border-solid py-5">
                            <Avatar>
                                <AvatarImage src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww" />
                            </Avatar>

                            <div>
                                <p className="font-bold">Felipe Petriw</p>
                                <p className="text-xs">felipe@desenvolvimentos.com</p>
                            </div>
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
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;