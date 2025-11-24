import { motion } from "framer-motion";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { projects } from "@/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectDetailDialog from "@/components/ProjectDetailDialog";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-20 bg-muted/30 scroll-mt-8">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Browse My Recent
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Projects</h2>
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
                                className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative aspect-video overflow-hidden bg-muted">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/600x400?text=" + encodeURIComponent(project.title);
                                        }}
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                                    {project.subtitle && (
                                        <CardDescription className="line-clamp-1">{project.subtitle}</CardDescription>
                                    )}
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    {project.description && (
                                        <p className="text-sm text-muted-foreground line-clamp-3">
                                            {project.description}
                                        </p>
                                    )}
                                </CardContent>
                                <CardFooter className="flex flex-wrap gap-2">
                                    {(project.description || project.contributions) && (
                                        <Button
                                            variant="default"
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedProject(project);
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" />
                                                GitHub
                                            </a>
                                        </Button>
                                    )}
                                    {project.demo && (
                                        <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Demo
                                            </a>
                                        </Button>
                                    )}
                                    {project.youtubeId && (
                                        <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                                            <a href={`https://www.youtube.com/watch?v=${project.youtubeId}`} target="_blank" rel="noopener noreferrer">
                                                <Youtube className="mr-2 h-4 w-4" />
                                                Video
                                            </a>
                                        </Button>
                                    )}
                                    {project.readMoreLink && (
                                        <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                                            <a href={project.readMoreLink} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" />
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
