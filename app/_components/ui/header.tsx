import Image from "next/image"
import { Card, CardContent } from "./card"
import { Button } from "./button"
import { MenuIcon } from "lucide-react"

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between items-center flex-row flex">
                {/* Inclusão da Logo Imagem */}
                <Image alt="FSW Barber" src="/logo.png" height={18} width={120}/> 
                {/* Inclusão do Menu Hamburguer */}
                <Button size="icon" variant="outline">
                    <MenuIcon/>
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;