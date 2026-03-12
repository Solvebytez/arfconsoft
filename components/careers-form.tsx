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
import { Send, Upload, FileText, Loader2 } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

const positions = [
  "Full Stack Developer",
  "React Native Developer",
  "UI/UX Designer",
  "DevOps Engineer",
  "Digital Marketing Specialist",
  "Salesforce Developer",
  "Project Manager",
  "Business Development Executive",
  "Other",
]

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience"),
  location: z.string().optional(),
  notice: z.string().optional(),
  linkedin: z.string().optional().refine(
    (val) => !val || val === "" || z.string().url().safeParse(val).success,
    { message: "Please enter a valid URL" }
  ),
  portfolio: z.string().optional().refine(
    (val) => !val || val === "" || z.string().url().safeParse(val).success,
    { message: "Please enter a valid URL" }
  ),
  coverLetter: z.string().optional(),
  resume: z.instanceof(FileList)
    .refine((files) => files.length > 0, "Resume is required")
    .refine(
      (files) => files[0]?.size <= 5 * 1024 * 1024,
      "File size must be less than 5MB"
    )
    .refine(
      (files) => [".pdf", ".doc", ".docx"].some((ext) =>
        files[0]?.name.toLowerCase().endsWith(ext)
      ),
      "Only PDF, DOC, and DOCX files are allowed"
    ),
})

type FormValues = z.infer<typeof formSchema>

export function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resumeFileName, setResumeFileName] = useState<string>("")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      location: "",
      notice: "",
      linkedin: "",
      portfolio: "",
      coverLetter: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    
    try {
      const formData = new FormData()
      formData.append("firstName", data.firstName)
      formData.append("lastName", data.lastName)
      formData.append("email", data.email)
      formData.append("phone", data.phone)
      formData.append("position", data.position)
      formData.append("experience", data.experience)
      if (data.location) formData.append("location", data.location)
      if (data.notice) formData.append("notice", data.notice)
      if (data.linkedin) formData.append("linkedin", data.linkedin)
      if (data.portfolio) formData.append("portfolio", data.portfolio)
      if (data.coverLetter) formData.append("coverLetter", data.coverLetter)
      if (data.resume && data.resume.length > 0) {
        formData.append("resume", data.resume[0])
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application")
      }

      toast.success("Application submitted successfully! We'll get back to you soon.")
      form.reset()
      setResumeFileName("")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit application. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                  First Name *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John"
                    className="h-10 md:h-12 rounded-lg md:rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4] text-sm md:text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                  Last Name *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    className="h-10 md:h-12 rounded-lg md:rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4] text-sm md:text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Contact Fields */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                  Email Address *
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="h-10 md:h-12 rounded-lg md:rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4] text-sm md:text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                  Phone Number *
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="h-10 md:h-12 rounded-lg md:rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4] text-sm md:text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Position and Experience */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                  Position Applying For *
                </FormLabel>
                <FormControl>
                  <select
                    className="w-full h-10 md:h-12 rounded-lg md:rounded-xl border border-gray-200 px-3 md:px-4 text-gray-700 focus:border-[#25ABC4] focus:ring-[#25ABC4] focus:outline-none bg-white text-sm md:text-base"
                    {...field}
                  >
                    <option value="">Select a position</option>
                    {positions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                  Years of Experience *
                </FormLabel>
                <FormControl>
                  <select
                    className="w-full h-10 md:h-12 rounded-lg md:rounded-xl border border-gray-200 px-3 md:px-4 text-gray-700 focus:border-[#25ABC4] focus:ring-[#25ABC4] focus:outline-none bg-white text-sm md:text-base"
                    {...field}
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-7">5-7 years</option>
                    <option value="7+">7+ years</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Location Preference */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                  Preferred Location
                </FormLabel>
                <FormControl>
                  <select
                    className="w-full h-10 md:h-12 rounded-lg md:rounded-xl border border-gray-200 px-3 md:px-4 text-gray-700 focus:border-[#25ABC4] focus:ring-[#25ABC4] focus:outline-none bg-white text-sm md:text-base"
                    {...field}
                  >
                    <option value="">Select location</option>
                    <option value="jaipur">Jaipur, India</option>
                    <option value="houston">Houston, USA</option>
                    <option value="remote">Remote</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notice"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                  Notice Period
                </FormLabel>
                <FormControl>
                  <select
                    className="w-full h-10 md:h-12 rounded-lg md:rounded-xl border border-gray-200 px-3 md:px-4 text-gray-700 focus:border-[#25ABC4] focus:ring-[#25ABC4] focus:outline-none bg-white text-sm md:text-base"
                    {...field}
                  >
                    <option value="">Select notice period</option>
                    <option value="immediate">Immediate</option>
                    <option value="15days">15 Days</option>
                    <option value="30days">30 Days</option>
                    <option value="60days">60 Days</option>
                    <option value="90days">90 Days</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Portfolio/LinkedIn */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                  LinkedIn Profile
                </FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="h-10 md:h-12 rounded-lg md:rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4] text-sm md:text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portfolio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                  Portfolio / GitHub
                </FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="https://yourportfolio.com"
                    className="h-10 md:h-12 rounded-lg md:rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4] text-sm md:text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Resume Upload */}
        <FormField
          control={form.control}
          name="resume"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem>
              <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                Upload Resume *
              </FormLabel>
              <FormControl>
                <div className="relative border-2 border-dashed border-gray-200 rounded-lg md:rounded-xl p-5 md:p-8 text-center hover:border-[#25ABC4]/50 transition-colors duration-300 cursor-pointer group">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    {...field}
                    onChange={(e) => {
                      const files = e.target.files
                      if (files) {
                        onChange(files)
                        setResumeFileName(files[0]?.name || "")
                      }
                    }}
                  />
                  <div className="flex flex-col items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#25ABC4]/10 flex items-center justify-center group-hover:bg-[#25ABC4]/20 transition-colors duration-300">
                      {resumeFileName ? (
                        <FileText className="w-4 h-4 md:w-6 md:h-6 text-[#25ABC4]" />
                      ) : (
                        <Upload className="w-4 h-4 md:w-6 md:h-6 text-[#25ABC4]" />
                      )}
                    </div>
                    <div>
                      {resumeFileName ? (
                        <p className="text-gray-700 font-medium text-sm md:text-base">
                          {resumeFileName}
                        </p>
                      ) : (
                        <>
                          <p className="text-gray-700 font-medium text-sm md:text-base">
                            Drop your resume here or <span className="text-[#25ABC4]">browse</span>
                          </p>
                          <p className="text-gray-500 text-xs md:text-sm mt-1">
                            PDF, DOC, DOCX (Max 5MB)
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Cover Letter */}
        <FormField
          control={form.control}
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                Cover Letter / Additional Information
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us why you'd be a great fit for this role..."
                  rows={5}
                  className="rounded-lg md:rounded-xl border-gray-200 focus:border-[#25ABC4] focus:ring-[#25ABC4] resize-none text-sm md:text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 md:h-14 rounded-lg md:rounded-xl bg-[#25ABC4] hover:bg-[#1e8a9e] text-white font-semibold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </>
          )}
        </Button>

        <p className="text-center text-gray-500 text-xs md:text-sm">
          By submitting this form, you agree to our{" "}
          <Link href="/privacy-policy" className="text-[#25ABC4] hover:underline">
            Privacy Policy
          </Link>
        </p>
      </form>
    </Form>
  )
}

