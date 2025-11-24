import { motion } from "framer-motion";
import { about } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import DecryptedText from "@/components/DecryptedText";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-24 overflow-hidden bg-background/90 scroll-mt-8"
        >
            <div
                className="absolute inset-0 -z-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 18% 18%, hsl(var(--primary) / 0.12), transparent 35%), radial-gradient(circle at 78% 18%, hsl(var(--accent) / 0.12), transparent 32%), radial-gradient(circle at 50% 82%, hsl(var(--primary) / 0.08), transparent 30%)",
                }}
            />
            <div
                className="absolute inset-0 -z-10 opacity-50"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground) / 0.08) 1px, transparent 1px)",
                    backgroundSize: "120px 120px",
                }}
            />

            <div className="container px-4 md:px-6 max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-14 gap-3"
                >
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                        <DecryptedText
                            text={`${about.subtitle} ${about.title}`}
                            speed={80}
                            maxIterations={18}
                            sequential
                            revealDirection="center"
                            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\|~"
                            className="text-foreground"
                            encryptedClassName="text-muted-foreground"
                            parentClassName="inline-block"
                            animateOn="both"
                        />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                        Bridging XR craft with product instincts
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
                        Curious technologist blending Unity prototyping, Web frontends, and playful
                        UX to make immersive ideas ship faster.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square relative rounded-2xl overflow-hidden shadow-[0_25px_80px_-50px_rgba(0,0,0,0.55)] max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/60 z-10" />
                            <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-primary/15 blur-3xl z-0" />
                            <div className="absolute -right-16 bottom-6 h-40 w-40 rounded-full bg-accent/10 blur-3xl z-0" />
                            <img
                                src={about.image}
                                alt="About Me"
                                className="object-cover w-full h-full"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/600x600?text=About+Me";
                                }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {about.stats.map((stat, index) => (
                                <Card
                                    key={index}
                                    className="relative border-none bg-foreground/[0.05] backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_-60px_rgba(0,0,0,0.5)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-70" />
                                    <CardContent className="relative p-6 flex flex-col items-center text-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/10">
                                            <img
                                                src={stat.icon}
                                                alt={stat.title}
                                                className="w-7 h-7"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = "none";
                                                }}
                                            />
                                        </div>
                                        <h3 className="font-bold text-lg text-foreground">
                                            {stat.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                                            {stat.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="prose prose-lg dark:prose-invert text-muted-foreground bg-foreground/[0.04] rounded-2xl p-6 shadow-[0_20px_60px_-50px_rgba(0,0,0,0.4)]">
                            <p className="whitespace-pre-line">{about.description}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
