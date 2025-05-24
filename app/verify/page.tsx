import Logo from "@/assets/brand-dark.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <section className="flex flex-col items-center justify-center h-[80dvh]">
      <article className="flex flex-col gap-8 min-w-[370px]">
        <Image
          src={Logo}
          className="w-[180px] self-center"
          alt="Logo"
          width={150}
          height={150}
          priority
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Te has registrado
          </h1>
          <p className="text-muted-foreground">
            Tu cuenta se ha creado exitosamente.<br></br>Pulsa iniciar sesión para acceder a la plataforma
          </p>
        </div>
        <div className="flex gap-5">
          <Link href="/login" className="">
            <Button>Iniciar sesión</Button>
          </Link>
          <Link href="/register" className="">
            <Button variant={"link"}>Volver atrás</Button>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Page;
