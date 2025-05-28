import Logo from "@/assets/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Page() {

  return (
    <section className="flex flex-col items-center justify-center h-[80dvh]">
      <article className="flex flex-col gap-8 min-w-[370px]">
        <Logo />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Te has registrado
          </h1>
          <p className="text-muted-foreground">
            Tu cuenta se ha creado exitosamente.<br></br>Pulsa iniciar sesión
            para acceder a la plataforma
          </p>
        </div>
        <div className="flex gap-5">
          <Link href="/login">
            <Button>Iniciar sesión</Button>
          </Link>
          <Link href="/signup">
            <Button variant={"link"}>Volver atrás</Button>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Page;
