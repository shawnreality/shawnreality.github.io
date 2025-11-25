import { motion } from "framer-motion";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { projects } from "@/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectDetailDialog from "@/components/ProjectDetailDialog";
import DecryptedText from "@/components/DecryptedText";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="relative py-24 bg-background/90 scroll-mt-8 overflow-hidden">
            <div
                className="absolute inset-0 -z-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.05), transparent 45%)",
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
                            text="Browse My Recent"
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Projects</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card
                                className="h-full flex flex-col overflow-hidden border border-white/10 bg-background/40 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.2)] hover:border-primary/20 transition-all duration-300 cursor-pointer group"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative aspect-video overflow-hidden bg-muted/50 border-b border-white/5">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/600x400?text=" + encodeURIComponent(project.title);
                                        }}
                                    />
                                </div>
                                <CardHeader className="relative z-20 pt-6 pb-2">
                                    <CardTitle className="text-xl font-bold line-clamp-1 text-foreground">{project.title}</CardTitle>
                                    {project.subtitle && (
                                        <CardDescription className="line-clamp-1 text-xs font-medium uppercase tracking-wider text-primary/90">{project.subtitle}</CardDescription>
                                    )}
                                </CardHeader>
                                <CardContent className="flex-grow pt-4">
                                    {project.description && (
                                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                            {project.description}
                                        </p>
                                    )}
                                </CardContent>
                                <CardFooter className="flex flex-wrap gap-2 pt-0 pb-6">
                                    {(project.description || project.contributions) && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 text-xs font-medium hover:bg-primary/10 hover:text-primary"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedProject(project);
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button asChild variant="ghost" size="sm" className="h-8 text-xs font-medium hover:bg-primary/10 hover:text-primary" onClick={(e) => e.stopPropagation()}>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-3.5 w-3.5" />
                                                GitHub
                                            </a>
                                        </Button>
                                    )}
                                    {project.demo && (
                                        <Button asChild variant="ghost" size="sm" className="h-8 text-xs font-medium hover:bg-primary/10 hover:text-primary" onClick={(e) => e.stopPropagation()}>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                                                Demo
                                            </a>
                                        </Button>
                                    )}
                                    {project.youtubeId && (
                                        <Button asChild variant="ghost" size="sm" className="h-8 text-xs font-medium hover:bg-primary/10 hover:text-primary" onClick={(e) => e.stopPropagation()}>
                                            <a href={`https://www.youtube.com/watch?v=${project.youtubeId}`} target="_blank" rel="noopener noreferrer">
                                                <Youtube className="mr-2 h-3.5 w-3.5" />
                                                Video
                                            </a>
                                        </Button>
                                    )}
                                    {project.readMoreLink && (
                                        <Button asChild variant="ghost" size="sm" className="h-8 text-xs font-medium hover:bg-primary/10 hover:text-primary" onClick={(e) => e.stopPropagation()}>
                                            <a href={project.readMoreLink} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                                                More
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectDetailDialog
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
}
