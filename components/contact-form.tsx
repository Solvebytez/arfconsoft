"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Send, Loader2 } from "lucide-react"
import { toast } from "sonner"

const services = [
  "Web Development",
  "Mobile App Development",
  "Software Development",
  "Digital Marketing",
  "Blockchain Development",
  "Salesforce Development",
  "Game Development",
  "Industry Solutions",
]

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    
    try {
      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("email", data.email)
      if (data.phone) formData.append("phone", data.phone)
      if (data.service) formData.append("service", data.service)
      if (data.subject) formData.append("subject", data.subject)
      formData.append("message", data.message)

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      toast.success("Message sent successfully! We'll get back to you within 24 hours.")
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Full Name *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="h-12 rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Email Address *
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="h-12 rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Service Interested In
                </FormLabel>
                <FormControl>
                  <select
                    className="w-full h-12 rounded-xl border border-gray-200 px-4 text-gray-700 focus:border-[#25ABC4] focus:ring-[#25ABC4] focus:outline-none bg-white"
                    {...field}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Project inquiry"
                  className="h-12 rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Message *
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 rounded-xl bg-[#25ABC4] hover:bg-[#1e8a9e] text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}

