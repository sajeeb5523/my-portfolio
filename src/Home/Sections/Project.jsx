import { Link } from 'react-router';

const projects = [
    {
        id: 'food-expiry-management',
        name: 'Food Expiry Management System',
        image: 'https://i.ibb.co.com/JjpRdQF9/fets-screenshot.png',
        repo: 'https://github.com/sajeeb5523/food-expiry-management-system-client',
        live: 'https://food-expiry-tracker-syst-c4f1c.web.app',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        description: 'Full-stack Food Expiry Management System — where users and admins can add, track, and manage food items, monitor expiry dates, and get alerts before items expire.',
        challenges: 'Handling state synchronization between front-end and backend during concurrent updates of food stock and expiry dates.',
        improvements: 'Add user roles, advanced search, better UI/UX, and notifications.'
    },
    {
        id: 'gardening-hub',
        name: 'Gardening Hub',
        image: 'https://i.ibb.co.com/NdQpZXR2/gardening-hub-screenshot.png',
        repo: 'https://github.com/sajeeb5523/gardening-hub-client',
        live: 'https://gardening-hub-883b2.web.app',
        tech: ["React", "Firebase", "Tailwind CSS"],
        description: 'Gardening Hub: A green community where users can share tips, showcase their gardens, and join gardening events.',
        challenges: 'Handling seasonal content updates, managing plant care schedules, and efficiently organizing gardening event data.',
        improvements: 'Add messaging, user profiles, and social media integration.'
    },
    {
        id: 'doc-talk',
        name: 'Doc Talk',
        image: 'https://i.ibb.co.com/j9XzhN1w/doc-talk-screenshot.png',
        repo: 'https://github.com/sajeeb5523/doc-talk',
        live: 'https://guileless-lily-0de566.netlify.app',
        tech: ["React", "JavaScript", "Styled Components"],
        description: 'A modern healthcare frontend website built with React and JavaScript, allowing users to browse doctors, view profiles, and explore online consultation interfaces.',
        challenges: 'Handling dynamic doctor data, managing form states, and ensuring smooth navigation across responsive layouts.',
        improvements: 'Add backend, real live data, search filters, and user authentication.'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="w-10/12 mx-auto py-10 md:py-16 ">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-4xl font-bold text-center text-[#FA5F55] mb-12">My Projects</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-slate-900 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                            {/* Project Screenshot Section */}
                            <div className="relative h- overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={`Screenshot of ${project.name}`}
                                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                            </div>

                            {/* Project Details Section */}
                            <div className="p-6 flex flex-col justify-between min-h-[220px]">
                                <h3 className="text-xl font-semibold text-gray-200">{project.name}</h3>
                                <div className='flex items-center gap-4'>
                                    {
                                        project.tech.map(tch => <p className="mt-2 text-sm font-medium badge text-gray-200">{tch}</p>)
                                    }
                                </div>
                                <p className="mt-4 text-base text-gray-300 min-h-[80px]">{project.description}</p>
                            </div>
                            
                            {/* Buttons Section */}
                            <div className="flex items-center justify-between p-6 pt-0">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 ease-in-out hover:bg-indigo-700">
                                    Live Link
                                </a>
                                <Link
                                    to={`/projects/${project.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-200 ease-in-out hover:text-black hover:bg-gray-100">
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
