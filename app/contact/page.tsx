"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success("Message sent successfully!")
    
    // Clear the form fields after successful submission
    setName("")
    setEmail("")
    setMessage("")
    
    setLoading(false)
  }

  return (
    <div className="container py-10 px-10">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
          Connect With Us For Any Concerns or Feedback
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[150px] resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full hover:bg-red-900"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  )
}
