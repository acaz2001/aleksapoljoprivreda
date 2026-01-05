"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function BuyForm() {
  const router = useRouter();
  const formRef = useRef(null);

  // Formspree hook (xdakpjoz je tvoj form ID)
  const [state, handleSubmit, reset] = useForm("xdakpjoz");

  useEffect(() => {
    if (state.succeeded) {
      // resetuj inpute u formi (UI reset)
      formRef.current?.reset();

      // resetuj Formspree state (ako je dostupan u tvojoj verziji)
      reset?.();

      router.push("/hvala");
    }
  }, [state.succeeded, reset, router]);

  return (
    <main>
      <h1 className="pt-10 italic">Podaci za kupovinu</h1>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xdakpjoz"
        method="POST"
        className="space-y-8"
      >
        {/* Optional: subject u mejlu */}
        <input type="hidden" name="_subject" value="Nova porudzbina sa sajta" />

        {/* PLAN */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Select your plan</label>

          <RadioGroup
            name="plan"
            required
            className="flex flex-col space-y-1"
            defaultValue="1komad"
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="1komad" id="plan-1" />
              <label htmlFor="plan-1" className="font-normal">
                1xkomada 1500 dinara
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <RadioGroupItem value="2komada" id="plan-2" />
              <label htmlFor="plan-2" className="font-normal">
                2xkomada 2600 dinara
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <RadioGroupItem value="3komada" id="plan-3" />
              <label htmlFor="plan-3" className="font-normal">
                3xkomada 4000 dinara
              </label>
            </div>
          </RadioGroup>

          <p className="text-sm text-muted-foreground">
            Choose the plan that best fits your needs.
          </p>

          <ValidationError prefix="Plan" field="plan" errors={state.errors} />
        </div>

        {/* IME I PREZIME */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Ime i prezime</label>
          <Input
            name="imeIPrezime"
            placeholder="Ime i prezime"
            minLength={2}
            required
          />
          <ValidationError
            prefix="Ime i prezime"
            field="imeIPrezime"
            errors={state.errors}
          />
        </div>

        {/* TELEFON */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Broj telefona</label>
          <Input
            name="telefon"
            placeholder="Broj telefona"
            minLength={5}
            required
          />
          <ValidationError
            prefix="Telefon"
            field="telefon"
            errors={state.errors}
          />
        </div>

        {/* EMAIL (Formspree koristi _replyto za reply-to) */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Email adresa</label>
          <Input type="email" name="_replyto" placeholder="email" required />
          <ValidationError prefix="Email" field="_replyto" errors={state.errors} />
        </div>

        {/* ADRESA */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Adresa</label>
          <Input name="adresa" placeholder="Adresa" minLength={5} required />
          <ValidationError prefix="Adresa" field="adresa" errors={state.errors} />
        </div>

        <Button
          disabled={state.submitting}
          type="submit"
          className="bg-red-500 cursor-pointer"
        >
          {state.submitting ? "Slanje..." : "Pošalji"}
        </Button>

        {/* General error */}
        {state.errors?.length ? (
          <p className="text-sm text-red-500 mt-2">
            Došlo je do greške. Proveri polja i pokušaj ponovo.
          </p>
        ) : null}
      </form>
    </main>
  );
}



{/*
  "use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



const formSchema = z.object({
 plan: z.enum(["1komad", "2komada", "3komada"], {
    required_error: "You need to select a plan.",
  }),
  imeIPrezime: z.string().min(2, {
    message: "Ime i prezime mora imati vise od 2 slova",
  }),
  telefon: z.string().min(5, {
    message: "Pogresan broj telefona",
  }),
  email: z.string().min(5, {
    message: "Pogresan email adresa",
  }),
  adresa: z.string().min(5, {
    message: "Adresa mora imati vise od 5 slova",
  }),
})


export default function BuyForm() {
    const [loading, setLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imeIPrezime: "",
      
    },
  })

  function onSubmit(values) {
    setLoading == true;
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <main>
        <h1 className='pt-10 italic'>Podaci za kupovinu</h1>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Select your plan</FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex flex-col space-y-1"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="1komad" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        1xkomada 1500 dinara
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="2komada" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        2xkomada 2600 dinara
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="3komada" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        3xkomada 4000 dinara
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormDescription>
                  Choose the plan that best fits your needs.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="imeIPrezime"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Ime i prezime</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="telefon"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Broj telefona</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>email adreasa</FormLabel>
                <FormControl>
                    <Input placeholder="email" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="adresa"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Adresa</FormLabel>
                <FormControl>
                    <Input placeholder="adresa" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button onSubmit={form.handleSubmit(onSubmit)} type="submit" className='bg-red-500 cursor-pointer'>
                {loading == true ? 'Loading' : 'Submit'}
            </Button>
        </form>
        </Form>
    </main>
  )
}



  */}