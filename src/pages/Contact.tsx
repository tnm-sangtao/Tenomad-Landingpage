import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message is too short"),
});

export default function Contact() {
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    console.log(values);
    setIsSuccess(true);
  }

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-16" ref={headerRef as React.RefObject<HTMLDivElement>}>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
          Tell us what you're building<span className="text-accent">.</span>
        </h1>
        <p className="text-[20px] text-muted-foreground max-w-2xl leading-relaxed">
          Whether you have a fully documented spec or just a sketch on a napkin, let's start a conversation.
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Form */}
          <div className="lg:col-span-3" ref={formRef as React.RefObject<HTMLDivElement>}>
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-card p-10 rounded-none border border-border text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 bg-foreground rounded-none flex items-center justify-center mx-auto mb-6 text-background"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-semibold mb-4">Message received.</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Thank you for reaching out. We typically review new project inquiries within 24 hours and will be in touch shortly.
                  </p>
                  <Button variant="outline" className="rounded-none uppercase tracking-widest text-xs" onClick={() => setIsSuccess(false)}>Send another message</Button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80">Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" className="h-12 rounded-none bg-background border-border focus-visible:border-foreground" {...field} />
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
                              <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80">Email</FormLabel>
                              <FormControl>
                                <Input placeholder="jane@example.com" className="h-12 rounded-none bg-background border-border focus-visible:border-foreground" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80">Company (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Inc." className="h-12 rounded-none bg-background border-border focus-visible:border-foreground" {...field} />
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
                              <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80">Service of Interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12 rounded-none bg-background border-border focus:ring-1 focus:ring-foreground focus:border-foreground">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="web">Web Development</SelectItem>
                                  <SelectItem value="mobile">Mobile Development</SelectItem>
                                  <SelectItem value="uiux">UI/UX Design</SelectItem>
                                  <SelectItem value="ai">AI & NLP Consulting</SelectItem>
                                  <SelectItem value="qa">Quality Assurance</SelectItem>
                                  <SelectItem value="team">Dedicated Offshore Team</SelectItem>
                                  <SelectItem value="startup">Startups</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80">Project Details</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about the problem you're trying to solve..."
                                className="min-h-[160px] rounded-none bg-background border-border focus-visible:border-foreground resize-y"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="h-14 px-8 text-xs font-bold uppercase tracking-[0.3em] rounded-none transition-colors">
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 lg:pl-12 pt-12 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border">
            <h3 className="text-2xl font-bold tracking-tighter uppercase text-foreground leading-tight mb-6">Tenomad Studio</h3>

            <div className="space-y-6 text-sm text-foreground/80 font-light mb-12 leading-relaxed">
              <p className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Address</span>
                <span>26, Ly Thuong Kiet St, Vinh Ninh Ward, Thuan Hoa District, Hue City</span>
              </p>
              <p className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</span>
                <span>(+84) 0234-6271-757</span>
              </p>
              <p className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</span>
                <a href="mailto:contact@tenomad.com" className="hover:text-foreground transition-colors font-medium">contact@tenomad.com</a>
              </p>
            </div>

            <hr className="border-foreground/20 mb-12 w-16" />

            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/tenomadcompany" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-background hover:bg-foreground transition-colors bg-background border border-border p-4 rounded-none" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/tenomad/" className="text-foreground hover:text-background hover:bg-foreground transition-colors bg-background border border-border p-4 rounded-none">
                <Linkedin size={20} />
              </a>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
