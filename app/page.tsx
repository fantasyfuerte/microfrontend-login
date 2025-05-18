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
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Logo from "@/assets/brand-dark.png";

const formSchema = z.object({
  email: z.string().trim().email({ message: "Debe ser un email válido" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .max(32, { message: "La contraseña no debe exceder los 32 caracteres" }),
});

function Authentication() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    
  }

  const [formState, setFormState] = useState<"login" | "register">("login");

  return (
    <section className="flex flex-col items-center justify-center h-[80dvh]">
      <article className="flex flex-col gap-8 min-w-[370px]">
        <Image
          src={Logo}
          className="w-[200px] self-center"
          alt="Logo"
          width={150}
          height={150}
        />
        <div className=" ">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {formState === "login" ? "Log in" : "Sign up"}
          </h1>
          <p className="text-muted-foreground">
            Complete the fields with your data to{" "}
            {formState === "login" ? "sign in" : "sign up"}
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-xl"
                      placeholder="mike10@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Insert your email to{" "}
                    {formState === "login" ? "sign in" : "sign up"}
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="miketenexample"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Choose a password to{" "}
                    {formState === "login" ? "sign in" : "sign up"}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-5">
              <Button type="submit">Send</Button>
              {formState === "login" ? (
                <Button
                  onClick={() => setFormState("register")}
                  variant={"link"}
                  type="button"
                >
                  Don't have an account?
                </Button>
              ) : (
                <Button
                  onClick={() => setFormState("login")}
                  variant={"link"}
                  type="button"
                >
                  Already have an account?
                </Button>
              )}
            </div>
          </form>
        </Form>
      </article>
    </section>
  );
}

export default Authentication;
