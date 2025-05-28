"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import Logo from "@/assets/logo";

const formSchema = z.object({
  email: z.string().trim().email({ message: "Debe ser un email válido" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .max(32, { message: "La contraseña no debe exceder los 32 caracteres" }),
});

function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <section className="flex flex-col items-center justify-center h-[80dvh]">
      <article className="flex flex-col gap-8 min-w-[370px]">
        <Logo />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Iniciar sesión
          </h1>
          <p className="text-muted-foreground">
            Rellena los campos con tus datos para iniciar sesión
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input
                      className="select-none"
                      placeholder="miguel2000@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Introduce tu correo electrónico para iniciar sesión
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      className="select-text"
                      placeholder="miguel2000"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    <Link href="/recovery">
                      <Button className="px-0" type="button" variant="link">
                        Olvidaste tu contraseña?
                      </Button>
                    </Link>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-5">
              <Button type="submit">Enviar</Button>
              <Link href="/signup">
                <Button variant={"link"} type="button">
                  Regístrate
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </article>
    </section>
  );
}

export default Login;
