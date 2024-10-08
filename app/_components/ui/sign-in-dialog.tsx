import { signIn } from "next-auth/react";
import { Button } from "./button";
import { DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import Image from "next/image";

const SignInDialog = () => {
    const handlerLoginWithGoogleClick = () => signIn("google")

    return (
        <>
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
        </>
    );
}

export default SignInDialog;