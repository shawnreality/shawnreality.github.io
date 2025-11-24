export interface Project {
    title: string;
    subtitle?: string;
    image: string;
    github?: string;
    demo?: string;
    youtubeId?: string;
    readMoreLink?: string;
    description?: string;
    contributions?: string;
    video?: string;
    gallery?: string[];
}

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const profile = {
    name: "Shawn Gao",
    role: "Software Development Engineer",
    description: "Hello, I'm Shawn Gao",
    socials: {
        linkedin: "https://www.linkedin.com/in/shawngao2000",
        github: "https://github.com/Bmeng233",
        email: "shawngaodev@outlook.com",
    },
    cvPath: "/assets/Shawn_Gao_CV.pdf", // Ensure this path is correct relative to public or imported
};

export const about = {
    title: "About Me",
    subtitle: "Get To Know More",
    image: "/assets/about-pic.png",
    description: `👋 Hi, I'm Shawn Gao — a creative technologist passionate about interactive experiences.

With hands-on experience in VR/AR 🕶️, robotics 🤖, web 🌐, and AI/ML 🧠, I specialize in translating complex systems into intuitive user interactions. Proficient in C++, C#, Python, and Java, I enjoy bridging code and design—whether it's through real-time simulation, MR prototyping, or human-robot interfaces.

I'm currently pursuing my master's at the Centre for Digital Media, actively exploring how digital media and emerging technologies can empower human connection and creativity.`,
    stats: [
        {
            title: "Experience",
            description: "2+ years Unity/XR/Game Development",
            icon: "/assets/experience.png",
        },
        {
            title: "Education",
            description: "B.Eng. Computer Science\nMaster of Digital Media\nUBC | SFU | ECUAD | BCIT",
            icon: "/assets/education.png",
        },
    ],
};

export const experience = {
    title: "Experience",
    subtitle: "Explore My",
    languages: [
        { name: "C#", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "C++", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "HLSL", level: "Intermediate" },
    ],
    skills: [
        { name: "Unity", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Three.js", level: "Intermediate" },
        { name: "Shader Graph", level: "Intermediate" },
        { name: "Git & CI/CD", level: "Intermediate" },
    ],
};

export const projects: Project[] = [
    {
        title: "VR Automotive Training Simulator",
        subtitle: "Centre for Digital Media | Vancouver Community College",
        image: "/assets/simulator-pic.png",
        youtubeId: "V8UiYhWwvo0",
        description: `The Virtual Reality (VR) simulation developed for Vancouver Community College's Automotive Services represents a cutting-edge training tool tailored to the burgeoning field of electric vehicle (EV) maintenance and repair. This initiative aligns with Canada's legislative push towards zero-emission vehicles by 2035, addressing the critical need for skilled EV technicians. 
    The simulation, crafted using Unity, provides an immersive learning environment where students can safely practice the processes involved in changing and repairing EV batteries. By circumventing the traditional constraints of physical training—which requires substantial instructor oversight due to the risks of injury, fire, and electrocution—our VR tool enables students to master complex skills in a controlled, hazard-free setting.`,
        contributions: `As the Lead Developer, I oversaw the technical aspects of the Virtual Reality (VR) simulation project, which was developed and tested on the Oculus Quest series. This choice utilized the platform's strong performance capabilities and broad accessibility. My primary focus was on ensuring a robust system, emphasizing code stability and smooth development collaboration.
    
    From an architectural standpoint, I ensured the simulation was designed for scalability, anticipating future expansions to include various vehicle types and educational applications. The system architecture utilized the observer pattern and maintained a clear class inheritance structure, which allowed for efficient updates and extensions. Additionally, I facilitated effective communication with the UX Designer and the development team to ensure the project was delivered smoothly and accurately. Regular coordination and alignment of team efforts with project goals were essential, ensuring adherence to user experience principles and successful project execution.`,
    },
    {
        title: "HCI System Based on Hand Gesture Recognition",
        subtitle: "Research | Thesis",
        image: "/assets/HCI-pic.png",
        video: "/assets/hic-vid2k.mp4",
        description: `As part of my graduation thesis, this project focused on the integration of advanced computer vision and haptic feedback technologies into a cohesive virtual reality (VR) experience. The research involved implementing a computer vision recognition algorithm using the Yolo-v5 model to achieve real-time recognition of custom gestures. This was complemented by the development and testing of haptic feedback gloves, which were based on an open-source project.
    
    I successfully adapted the hardware to interface seamlessly with the Oculus Quest and supported its functionality within the VR game, Half-Life: Alyx. This integration allowed for the real-time reconstruction of hand skeleton information, enhancing the immersive experience by providing tactile feedback corresponding to the user's movements and interactions within the game.
    
    The culmination of this project was a comprehensive research paper that detailed the methodologies employed, the development process, and the implications of this technology in enhancing VR interactions. This work not only served as my graduation thesis but also contributed to the field of VR by demonstrating practical applications of machine learning in gesture recognition and tactile feedback technology.`,
    },
    {
        title: "MR Game with Yumebau",
        subtitle: "Centre for Digital Media | Yumebau Inc.",
        image: "/assets/yumebau-pic.png",
        description: `This project is a mixed reality mini golf game created in collaboration with Yumebau Inc. The game overlays miniature golf courses onto real-world scanned environments, transforming users' physical surroundings into immersive gameplay arenas. Using passthrough features and environmental meshing, players can play golf on their furniture, walls, and more.`,
        contributions: `As the Unity developer, I implemented multiple obstacle mechanics with diverse physical behaviors, engineered user interaction logic, and resolved a key bug in the internal spatial mapping system. I also refactored factory pattern-based spawning for agile development.`,
        gallery: ["/assets/yumebau-pic-1.png", "/assets/yumebau-pic-ux.png"],
    },
    {
        title: "MuralView AR",
        subtitle: "Centre for Digital Media | AR App",
        image: "/assets/muralviewar-pic.png",
        youtubeId: "pHgnSxi_m_A",
        description: `The MuralView AR project was designed to elevate the experience of mural tours through the integration of Augmented Reality (AR) technology. As a developer on this project, I contributed to building an Android application using Unity and Vuforia Engine, specifically focused on enhancing users' engagement with murals. Our AR features allow users to view murals without physical view obstructions and provide a digital interaction layer that can reveal deeper insights into the artwork.
    
    A key objective was to digitally preserve the murals and archive the artists' works for future AR showcases. This not only aids in conservation efforts but also makes art accessible to a broader audience, regardless of their physical location. Through the application, users can appreciate and interact with murals in a novel way, combining the real-world art with digital enhancements and information that enrich the viewing experience.`,
    },
    {
        title: "Enchantia (Vision OS)",
        subtitle: "Personal Project | MR App",
        image: "/assets/Enchantia-pic.jpg",
        video: "/assets/enchantia-vid.mp4",
        description: `Enchantia, a sophisticated floral arrangement simulator, was developed for Vision Pro using Vision OS. As the lead front-end developer, I played a crucial role in shaping the user experience and interface of the application, utilizing native Swift and RealityKit to ensure a seamless integration into the home environment. Users of Enchantia can propagate and arrange flowers in various vases, creatively enhancing their living spaces with virtual blooms that react to real-world conditions.`,
        contributions: `My responsibilities included not only the aesthetic and functional aspects of the application's front-end but also the implementation of intuitive gesture interactions. These gestures allow users to interact naturally with the virtual elements, mimicking the tactile experience of handling real flowers. The application's immersive experience is designed to encourage creativity and bring a sense of tranquility and natural beauty into users' homes.`,
    },
    {
        title: "Cubus",
        subtitle: "Personal Project | VR/MR Game Prototype",
        image: "/assets/cubus-pic2.png",
        youtubeId: "3QA-nQHfKX0",
        description: `Cubus is a personal project—a VR puzzle game developed independently for the Oculus Quest, drawing inspiration from the art movement "Cubism." This game challenges players to assemble increasingly complex shapes from colored blocks within a serene and relaxing virtual environment. The design focuses on simplicity and tranquility, complemented by soothing music that enhances the overall Zen-like vibe.`,
        contributions: `As the sole developer, I was responsible for all aspects of the game's design and development. The game capitalizes on the Oculus Quest's hand tracking technology, offering an intuitive and immersive experience that allows players to interact with the game elements in a natural, hands-on manner.`,
    },
    {
        title: "SceneSynth MR",
        subtitle: "Centre for Digital Media | MR App",
        image: "/assets/SceneSynthMR-pic3.jpg",
        youtubeId: "SkPFdLPHZHc",
        description: `SceneSynth MR is a mixed-reality prototype that revolutionizes AI music creation, developed for the Meta Quest using its passthrough feature to merge real and digital worlds. This immersive app allows users to generate music by inputting prompts, which are then visualized with vibrant MR visuals, enhancing the user experience. Unique to SceneSynth MR are collectible mascots, which vary based on the music and settings, adding a layer of personalization and fun. The platform also caters to Gen-Z's connectivity needs, positioning itself not just as an application but as a community for social interaction and engagement.
    
    Developed in just four weeks, this prototype showcases the effective use of the Meta Quest's passthrough feature to create a compelling mixed-reality (MR) environment. This foundational work lays the groundwork for potential full-scale development, with future plans to more comprehensively integrate real-time generative AI music features into the MR framework.`,
        contributions: `As the lead developer, I was responsible for designing the core mechanics of the application and implementing the interactive features that drive the user experience. This included developing the music generation algorithm, integrating the passthrough feature, and creating the visual effects that enhance the MR environment. I also worked on optimizing the application for performance and user engagement, ensuring that it could run smoothly on the Meta Quest and provide an immersive and enjoyable experience for users.`,
    },
    {
        title: "EcoGuardian",
        subtitle: "Centre for Digital Media | Game Prototype",
        image: "/assets/EcoGuardians2.png",
        youtubeId: "NZLirhEJdHY",
        description: `EcoGuardians is an innovative 3D role-playing game designed for children, developed using Unity to teach environmental stewardship in an engaging and interactive manner. Currently available as a prototype, the game introduces players to three distinct scenarios where they make choices that impact the environment. This foundational stage aims to inspire young players to make responsible decisions while highlighting the consequences of their actions.
    
    As a versatile educational tool, EcoGuardians has the potential to evolve across multiple platforms, including websites, mobile games, AR/VR experiences, and even as part of interactive installations in educational centers. This adaptability ensures that the game can reach a broad audience and integrate seamlessly into various learning environments.`,
        contributions: `As the lead developer, I was responsible for designing the game mechanics and implementing the core gameplay features. This included developing the interactive scenarios, character animations, and environmental assets that bring the game world to life. I also worked on integrating educational content into the game, ensuring that players receive valuable information about environmental issues and conservation efforts.`,
    },
    {
        title: "Root OS",
        subtitle: "Personal Project | Game Prototype",
        image: "/assets/rootOS-pic.png",
        demo: "https://chocolate-kami.itch.io/root-user",
        description: `Root OS is a personal project that explores the development of a custom operating system for embedded devices. The project aims to create a lightweight and efficient operating system that can run on low-power devices such as IoT sensors and microcontrollers. Root OS is designed to provide a secure and stable platform for running custom applications and services.`,
        contributions: `As the lead developer on the project, I focused on designing the architecture and core components of the operating system. This involved developing a custom kernel, file system, and device drivers that could support a wide range of hardware configurations. I also worked on optimizing the operating system for performance and security, ensuring that it could run efficiently on resource-constrained devices.`,
    },
    {
        title: "Echoes of The Gulf",
        subtitle: "Personal Project | Historical RPG Prototype",
        image: "/assets/echoes-pic.png",
        youtubeId: "dkmviB5JpeQ",
        description: `Echoes of The Gulf is a narrative-driven historical RPG set in early 20th-century Vancouver's Fisherman's Wharf. The game tells the untold stories of Chinese immigrants seeking opportunity amidst systemic discrimination, cultural dislocation, and hardship. Through branching dialogue and role-playing mechanics, players experience the resilience, cultural identity, and community bonds of early Chinese Canadian settlers.`,
        contributions: `- Designed narrative systems with branching dialogue and player-driven consequences
- Led user testing sessions and implemented feedback to improve emotional impact and pacing
- Collaborated with historians to ensure historical accuracy and authentic representation
- Developed character interaction systems and dialogue trees`,
    },
];

export const contact = {
    title: "Contact Me",
    subtitle: "Get in Touch",
    email: "shawngaodev@outlook.com",
    linkedin: "https://www.linkedin.com/in/shawngaosde",
};
