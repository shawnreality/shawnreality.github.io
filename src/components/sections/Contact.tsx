import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import { contact } from "@/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import DecryptedText from "@/components/DecryptedText";

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-background/90 scroll-mt-8 overflow-hidden">
            <div
                className="absolute inset-0 -z-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 50% 100%, hsl(var(--primary) / 0.1), transparent 50%)",
                }}
            />
            <div className="container px-4 md:px-6 max-w-6xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-16 gap-3"
                >
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                        <DecryptedText
                            text={contact.subtitle}
                            speed={80}
                            maxIterations={16}
                            sequential
                            revealDirection="center"
                            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\|~"
                            className="text-foreground"
                            encryptedClassName="text-muted-foreground"
                            parentClassName="inline-block"
                            animateOn="both"
                        />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{contact.title}</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a
                                href={`mailto:${contact.email}`}
                                className="group flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-background/40 backdrop-blur-md hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(var(--primary),0.1)]"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-foreground">Email</p>
                                    <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">{contact.email}</p>
                                </div>
                            </a>

                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-background/40 backdrop-blur-md hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(var(--primary),0.1)]"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Linkedin className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-foreground">LinkedIn</p>
                                    <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">Connect with me</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card className="border border-white/10 bg-background/40 backdrop-blur-md shadow-lg">
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                                <CardDescription>Fill out the form below and I'll get back to you soon.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4" onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const email = formData.get('email');
                                    const subject = formData.get('subject');
                                    const message = formData.get('message');
                                    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(message as string)}%0A%0AFrom: ${encodeURIComponent(email as string)}`;
                                }}>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-background/50 border-white/10 focus:border-primary/50 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" name="subject" placeholder="Project Inquiry" required className="bg-background/50 border-white/10 focus:border-primary/50 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required className="bg-background/50 border-white/10 focus:border-primary/50 transition-colors resize-none" />
                                    </div>
                                    <Button type="submit" className="w-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
