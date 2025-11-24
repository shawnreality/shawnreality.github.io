import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { profile } from "@/data";
import { Button } from "@/components/ui/button";
import TextType from "@/components/TextType";
import DecryptedText from "@/components/DecryptedText";

const TYPING_TITLES = [
    "Software Development Engineer",
    "Mixed Reality Programmer",
    "Immersive Tech Enthusiast",
    "Prototyping the Future",
];

const CODE_STREAMS = [
    { left: "8%", top: "12%", delay: "0s", text: "unity xr // quest link" },
    { left: "18%", top: "30%", delay: "0.4s", text: "visionOS | realitykit 2" },
    { left: "28%", top: "18%", delay: "1.2s", text: "swiftui + c# ecs" },
    { left: "12%", top: "72%", delay: "0.7s", text: "cv: yolo-v5 gestures" },
    { left: "26%", top: "58%", delay: "0.9s", text: "mr prototyping <> ux" },
    { left: "68%", top: "18%", delay: "1.6s", text: "vr training sim [vcc]" },
    { left: "80%", top: "28%", delay: "1.1s", text: "passthrough::meta" },
    { left: "88%", top: "16%", delay: "0.2s", text: "haptics [] gloves" },
    { left: "74%", top: "72%", delay: "0.5s", text: "ai + audio gen ∆wave" },
    { left: "86%", top: "64%", delay: "1.4s", text: "ar muralview -> occl" },
    { left: "62%", top: "82%", delay: "1.8s", text: "hand tracking | IK" },
    { left: "14%", top: "84%", delay: "1s", text: "ubc • cdm • sfumdm" },
];

export default function Hero() {
    const decryptedBgProps = {
        speed: 70,
        maxIterations: 18,
        sequential: true,
        revealDirection: "center" as const,
        characters: "01XYZ<>/\\|#[]{}",
        animateOn: "both" as const,
        className: "text-primary/80 dark:text-primary/70",
        encryptedClassName: "text-primary/50 dark:text-primary/40",
        parentClassName: "inline-block",
    };

    const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = document.querySelector("#about");
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16 bg-background text-foreground isolate scroll-mt-36"
        >
            {/* Background Elements */}
            <div
                className="absolute inset-0 -z-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.14), transparent 35%), radial-gradient(circle at 80% 30%, hsl(var(--accent) / 0.18), transparent 30%), radial-gradient(circle at 50% 80%, hsl(var(--primary) / 0.1), transparent 28%)",
                }}
            />
            <div
                className="absolute inset-0 -z-10 opacity-60 dark:opacity-80"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground) / 0.08) 1px, transparent 1px)",
                    backgroundSize: "120px 120px",
                }}
            />
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70 dark:from-background/70 dark:via-background/30 dark:to-background/80" />
            </div>
            <div className="absolute inset-0 pointer-events-none select-none z-0">
                {CODE_STREAMS.map((stream, idx) => (
                    <div
                        key={`${stream.left}-${idx}`}
                        className="absolute text-[11px] md:text-sm font-mono tracking-[0.3em] text-primary/80 dark:text-primary/70 drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)] mix-blend-screen animate-pulse"
                        style={{
                            left: stream.left,
                            top: stream.top,
                            animationDelay: stream.delay,
                        }}
                    >
                        <DecryptedText text={stream.text} {...decryptedBgProps} />
                    </div>
                ))}
            </div>

            <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                        <DecryptedText
                            text="Welcome to my portfolio"
                            speed={80}
                            maxIterations={20}
                            sequential
                            revealDirection="center"
                            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\|~"
                            className="text-foreground"
                            encryptedClassName="text-muted-foreground"
                            parentClassName="inline-block"
                            animateOn="both"
                        />
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground drop-shadow-sm"
                >
                    Hi, I'm{" "}
                    <span className="text-foreground">{profile.name}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground font-medium"
                >
                    <TextType
                        text={TYPING_TITLES}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="|"
                    />
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4 justify-center mt-4"
                >
                    <Button
                        asChild
                        size="lg"
                        className="rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-primary/10"
                    >
                        <a href={profile.cvPath} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" /> Download CV
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-full border-foreground/40 text-foreground hover:bg-foreground/10"
                    >
                        <a href="#contact">Contact Me</a>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex gap-4 mt-4"
                >
                    <a
                        href={profile.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-foreground/5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href={profile.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-foreground/5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href={`mailto:${profile.socials.email}`}
                        className="p-2 rounded-full bg-foreground/5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <a
                    href="#about"
                    onClick={scrollToAbout}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowDown className="h-6 w-6" />
                </a>
            </motion.div>
        </section>
    );
}
