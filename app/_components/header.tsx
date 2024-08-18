import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"

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
                    <SidebarSheet />
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;