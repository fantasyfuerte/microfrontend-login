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
import { useRouter } from "next/navigation";
import Logo from "@/assets/logo";

const formSchema = z.object({
  email: z.string().trim().email({ message: "Debe ser un email válido" }),
});

function Recovery() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const router = useRouter();
  function onSubmit(values: z.infer<typeof formSchema>) {
     fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recovery`, {
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
            Recuperar contraseña
          </h1>
          <p className="text-muted-foreground">Recuperar tu contraseña</p>
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
                    Introduce tu correo electrónico
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-5">
              <Button type="submit">Enviar</Button>
              <Button
                onClick={() => {
                  router.push("/");
                }}
                variant={"link"}
                type="button"
              >
                Volver
              </Button>
            </div>
          </form>
        </Form>
      </article>
    </section>
  );
}

export default Recovery;
