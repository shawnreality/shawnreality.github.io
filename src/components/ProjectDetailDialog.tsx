import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectDetailDialogProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        subtitle?: string;
        description?: string;
        contributions?: string;
        video?: string;
        youtubeId?: string;
        gallery?: string[];
    } | null;
}

export default function ProjectDetailDialog({ isOpen, onClose, project }: ProjectDetailDialogProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                    />

                    {/* Dialog */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-card border rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
                        >
                            {/* Header - sticky at top with close button and project title */}
                            <div className="sticky top-0 z-10 bg-card border-b">
                                <div className="flex items-start justify-between p-6 md:p-8">
                                    <div className="flex-1 pr-8">
                                        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Project</p>
                                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                                        {project.subtitle && (
                                            <h3 className="text-lg text-muted-foreground">{project.subtitle}</h3>
                                        )}
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={onClose}
                                        className="flex-shrink-0"
                                    >
                                        <X className="h-5 w-5" />
                                        <span className="sr-only">Close</span>
                                    </Button>
                                </div>
                            </div>

                            {/* Content - scrollable with hidden scrollbar */}
                            <div className="overflow-y-auto flex-1 scrollbar-hide">
                                <div className="p-6 md:p-8">
                                    {project.description && (
                                        <div className="mb-6">
                                            <h3 className="text-xl font-bold mb-3">Project Description:</h3>
                                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                                {project.description}
                                            </p>
                                        </div>
                                    )}

                                    {project.contributions && (
                                        <div className="mb-6">
                                            <h3 className="text-xl font-bold mb-3">My Contributions:</h3>
                                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                                {project.contributions}
                                            </p>
                                        </div>
                                    )}

                                    {/* Video */}
                                    {project.video && (
                                        <div className="mb-6">
                                            <video
                                                className="w-full rounded-lg"
                                                autoPlay
                                                muted
                                                loop
                                                controls
                                                playsInline
                                            >
                                                <source src={project.video} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    )}

                                    {project.gallery && project.gallery.length > 0 && (
                                        <div className="mb-6">
                                            <h3 className="text-xl font-bold mb-3">Gallery:</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {project.gallery.map((image, index) => (
                                                    <div key={image} className="overflow-hidden rounded-lg border bg-muted/30">
                                                        <img
                                                            src={image}
                                                            alt={`${project.title} gallery ${index + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* YouTube embed */}
                                    {project.youtubeId && (
                                        <div className="mb-6">
                                            <div className="relative aspect-video rounded-lg overflow-hidden">
                                                <iframe
                                                    className="absolute inset-0 w-full h-full"
                                                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
