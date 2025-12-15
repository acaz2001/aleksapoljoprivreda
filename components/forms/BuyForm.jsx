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


