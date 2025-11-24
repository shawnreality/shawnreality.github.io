import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import { contact } from "@/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-background scroll-mt-8">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {contact.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">{contact.title}</h2>
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
                            <p className="text-muted-foreground">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a
                                href={`mailto:${contact.email}`}
                                className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                            >
                                <div className="p-2 rounded-full bg-primary/10">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium">Email</p>
                                    <p className="text-sm text-muted-foreground">{contact.email}</p>
                                </div>
                            </a>

                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                            >
                                <div className="p-2 rounded-full bg-primary/10">
                                    <Linkedin className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium">LinkedIn</p>
                                    <p className="text-sm text-muted-foreground">Connect with me</p>
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
                        <Card>
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
                                        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" name="subject" placeholder="Project Inquiry" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required />
                                    </div>
                                    <Button type="submit" className="w-full">
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
