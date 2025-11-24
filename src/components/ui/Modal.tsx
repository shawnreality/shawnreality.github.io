import { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        subtitle: string;
        description?: string;
        contributions?: string;
        video?: string;
        youtubeId?: string;
    } | null;
}

const Modal = ({ isOpen, onClose, project }: ModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
            <div
                className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <span
                    className="absolute top-4 right-6 text-4xl text-gray-400 cursor-pointer hover:text-black"
                    onClick={onClose}
                >
                    &times;
                </span>

                <p className="text-center text-gray-600 font-semibold">Project</p>
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-2 text-black">{project.title}</h1>
                <h3 className="text-center text-lg md:text-xl font-semibold mb-6 text-gray-600">{project.subtitle}</h3>

                <div className="space-y-6 text-gray-700 text-justify">
                    {project.description && (
                        <div>
                            <p className="font-bold mb-2 text-black">Project Description:</p>
                            <p className="whitespace-pre-line">{project.description}</p>
                        </div>
                    )}

                    {project.contributions && (
                        <div>
                            <p className="font-bold mb-2 text-black">My Contributions:</p>
                            <p className="whitespace-pre-line">{project.contributions}</p>
                        </div>
                    )}

                    {project.video && (
                        <div className="mt-6">
                            <video width="100%" height="auto" controls autoPlay muted loop className="rounded-xl">
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}

                    {project.youtubeId && (
                        <div className="mt-6 aspect-video">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="rounded-xl"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
