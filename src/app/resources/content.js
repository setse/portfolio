import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Setsenbileg',
    lastName:  'Enkhbat',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Architecture student',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Frankfurt',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'German','Mongolian']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false, // set to false to hide the newsletter form
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>Newsletter.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/setse',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:setsenbileg.enkhbat@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <> Setsenbileg Enkhbat  </>,
    subline: <> <code>Rohspekt</code> </>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Hey, I'm Sets. <br></br>I have a passion for transforming complex challenges into simple, elegant design solutions. Interested in digital designs, architectural concepts, and creating music.</>
    },
    work: {
        display: false, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Lead Designer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Technical University of Darmstadt',
                description: <>B.Sc Architecture</>,
            },
            {
                name: 'Karsruher Institute of Technology',
                description: <>Studienkolleg</>,
            },
        
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'ArchiCAD',
                description: <>Main CAD programm I've used during my bachelor studies.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        width: 0,
                        height: 0
                    }
                ]
            },
            {
                title: 'Sketchup + Enscape',
                description: <>Mainly used for creating 3D objects for rendering visualisations and creating simple designs more quickly.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 0,
                        height: 0
                    },
                ]
            },
                        {
                title: 'Adobe Photoshop, Illustrator, Indesign',
                description: <></>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 0,
                        height: 0
                    },
                ]
            },
                        {
                title: 'Unreal Engine',
                description: <> Used for creating VR enviroments.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 0,
                        height: 0
                    },
                ]
            },
                        {
                title: '3ds Max',
                description: <>Used for creating various 3D projects.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 0,
                        height: 0
                    },
                ]
            },
        ]
    }
}

const blog = {
    label: 'Designs',
    title: 'Some of my recent designs',
    description: `See what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Music',
    title: 'Music',
    description: `Produced by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };