
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A one-line description of project 1.",
      image: "/path/to/image1.jpg", // Replace with actual image path
      technologies: ["Next.js", "Prisma", "React"],
      liveLink: "https://example.com/live1",
      githubLink: "https://github.com/user/project1",
    },
    {
      title: "Project 2",
      description: "A one-line description of project 2.",
      image: "/path/to/image2.jpg", // Replace with actual image path
      technologies: ["Node.js", "Express", "MongoDB"],
      liveLink: "https://example.com/live2",
      githubLink: "https://github.com/user/project2",
    },
    {
      title: "Project 3",
      description: "A one-line description of project 3.",
      image: "/path/to/image3.jpg", // Replace with actual image path
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      liveLink: "https://example.com/live3",
      githubLink: "https://github.com/user/project3",
    },
    // Add more projects as needed
  ];

  return (
    <div className="mx-auto max-w-6xl py-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;