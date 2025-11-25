import { motion } from "framer-motion";
import { 
    Code2, 
    Terminal, 
    Cpu, 
    Atom, 
    Box, 
    GitBranch, 
    Globe, 
    Zap,
    LayoutTemplate
} from "lucide-react";
import { experience } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DecryptedText from "@/components/DecryptedText";

const STREAMS = [
    { left: "12%", top: "16%", delay: "0s", text: "unity xr prototyping" },
    { left: "22%", top: "68%", delay: "0.4s", text: "swiftui • visionOS" },
    { left: "10%", top: "46%", delay: "1s", text: "cv + ml -> realtime" },
    { left: "78%", top: "24%", delay: "0.6s", text: "c# ecs patterns" },
    { left: "86%", top: "62%", delay: "1.2s", text: "design <> dev" },
    { left: "70%", top: "78%", delay: "1.6s", text: "git flow / ci" },
];

const getIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("react") || n.includes("next")) return Atom;
    if (n.includes("unity") || n.includes("three") || n.includes("3d")) return Box;
    if (n.includes("c#") || n.includes("c++") || n.includes("java")) return Code2;
    if (n.includes("git")) return GitBranch;
    if (n.includes("shader") || n.includes("hlsl")) return Zap;
    if (n.includes("script") || n.includes("python")) return Terminal;
    if (n.includes("web") || n.includes("html") || n.includes("css")) return Globe;
    if (n.includes("design") || n.includes("ui")) return LayoutTemplate;
    return Cpu;
};

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative py-24 overflow-hidden bg-background/90 scroll-mt-8"
        >
            <div
                className="absolute inset-0 -z-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 18% 20%, hsl(var(--primary) / 0.12), transparent 35%), radial-gradient(circle at 82% 30%, hsl(var(--accent) / 0.12), transparent 32%), radial-gradient(circle at 50% 80%, hsl(var(--primary) / 0.08), transparent 28%)",
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
            <div className="absolute inset-0 pointer-events-none select-none -z-10">
                {STREAMS.map((stream, idx) => (
                    <div
                        key={`${stream.left}-${idx}`}
                        className="absolute text-[10px] md:text-xs font-mono tracking-[0.28em] text-primary/70 drop-shadow-[0_6px_12px_rgba(0,0,0,0.22)] mix-blend-screen animate-pulse"
                        style={{
                            left: stream.left,
                            top: stream.top,
                            animationDelay: stream.delay,
                        }}
                    >
                        <DecryptedText
                            text={stream.text}
                            speed={70}
                            maxIterations={18}
                            sequential
                            revealDirection="center"
                            characters="01XYZ<>/\\|#[]{}"
                            className="text-primary/80"
                            encryptedClassName="text-primary/50"
                            parentClassName="inline-block"
                            animateOn="both"
                        />
                    </div>
                ))}
            </div>

            <div className="container px-4 md:px-6 max-w-6xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center gap-3 mb-14"
                >
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                        <DecryptedText
                            text={`${experience.subtitle} ${experience.title}`}
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                        Building reliable XR stacks from code to craft
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
                        A practical toolbox across languages and interactive frameworks, tuned for
                        mixed reality, computer vision, and playful prototyping.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card className="relative h-full overflow-hidden border-none bg-background/80 backdrop-blur-xl shadow-[0_30px_80px_-50px_rgba(0,0,0,0.45)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/30 to-accent/10" />
                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                            <CardHeader className="relative flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                        Languages
                                    </span>
                                    <p className="text-xs text-muted-foreground">
                                        Core syntax for systems, gameplay, and tooling.
                                    </p>
                                </div>
                                <CardTitle className="text-2xl">Code foundations</CardTitle>
                            </CardHeader>
                            <CardContent className="relative grid sm:grid-cols-2 gap-3">
                                {experience.languages.map((lang, index) => {
                                    const Icon = getIcon(lang.name);
                                    return (
                                        <div
                                            key={index}
                                            className="group relative overflow-hidden rounded-xl bg-foreground/[0.05] transition-all duration-300 shadow-sm hover:shadow-primary/10 hover:bg-foreground/[0.08]"
                                        >
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/15 via-primary/10 to-transparent transition-opacity" />
                                            <div className="relative flex items-center gap-4 p-4">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-md border border-primary/20 shadow-[0_0_15px_-3px_rgba(var(--primary),0.3)] text-primary group-hover:scale-110 transition-transform duration-300">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-semibold text-foreground truncate">
                                                        {lang.name}
                                                    </p>
                                                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                                                        {lang.level}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="relative h-full overflow-hidden border-none bg-background/80 backdrop-blur-xl shadow-[0_30px_80px_-50px_rgba(0,0,0,0.45)]">
                            <div className="absolute inset-0 bg-gradient-to-bl from-accent/12 via-background/25 to-primary/10" />
                            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
                            <CardHeader className="relative flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                                        Skills
                                    </span>
                                    <p className="text-xs text-muted-foreground">
                                        Engines, frameworks, and delivery practices.
                                    </p>
                                </div>
                                <CardTitle className="text-2xl">Interaction toolkit</CardTitle>
                            </CardHeader>
                            <CardContent className="relative grid sm:grid-cols-2 gap-3">
                                {experience.skills.map((skill, index) => {
                                    const Icon = getIcon(skill.name);
                                    return (
                                        <div
                                            key={index}
                                            className="group relative overflow-hidden rounded-xl bg-foreground/[0.05] transition-all duration-300 shadow-sm hover:shadow-accent/10 hover:bg-foreground/[0.08]"
                                        >
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-accent/15 via-accent/10 to-transparent transition-opacity" />
                                            <div className="relative flex items-center gap-4 p-4">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 backdrop-blur-md border border-accent/20 shadow-[0_0_15px_-3px_rgba(var(--accent),0.3)] text-foreground group-hover:scale-110 transition-transform duration-300">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-semibold text-foreground truncate">
                                                        {skill.name}
                                                    </p>
                                                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                                                        {skill.level}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-3"
                >
                    {[...experience.languages, ...experience.skills].slice(0, 8).map((item, idx) => (
                        <span
                            key={`${item.name}-${idx}`}
                            className="rounded-full bg-foreground/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:bg-primary/15 hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
