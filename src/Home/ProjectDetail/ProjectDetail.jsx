import { useParams, Link } from "react-router";

const projects = [
    {
        id: 'food-expiry-management',
        name: 'Food Expiry Management System',
        image: 'https://i.ibb.co.com/JjpRdQF9/fets-screenshot.png',
        repo: 'https://github.com/sajeeb5523/food-expiry-management-system-client',
        live: 'https://food-expiry-tracker-syst-c4f1c.web.app',
        tech: ['React', 'Tailwind CSS', 'Firebase', 'Node.js', 'Express', 'MongoDB'],
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
        tech: ['React', 'Tailwind CSS', 'Firebase', 'Node.js', 'Express', 'MongoDB'],
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

export default function ProjectDetail() {
    const { id } = useParams();
    const proj = projects.find(p => p.id === id);
    if (!proj) return <div className="p-8">Project not found.</div>;

    return (
        <section className="py-16 container mx-auto px-4">
            <Link to="/#projects" className="btn btn-ghost mb-4">← Back to Projects</Link>
            <h2 className="text-3xl font-bold mb-4">{proj.name}</h2>
            <img src={proj.image} alt={proj.name} className="w-full rounded-lg mb-6" />
            <div className="mb-6">
                <h3 className="text-xl font-semibold">Tech Stack</h3>
                <ul className="list-disc list-inside">
                    {proj.tech.map(t => <li key={t}>{t}</li>)}
                </ul>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold">Description</h3>
                <p>{proj.description}</p>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold">Challenges</h3>
                <p>{proj.challenges}</p>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold">Potential Improvements</h3>
                <p>{proj.improvements}</p>
            </div>
            <div className="flex gap-4">
                {proj.live && <a href={proj.live} target="_blank" rel="noopener" className="btn btn-success">Live Demo</a>}
                <a href={proj.repo} target="_blank" rel="noopener" className="btn btn-secondary">GitHub Repo</a>
            </div>
        </section>
    );
}
