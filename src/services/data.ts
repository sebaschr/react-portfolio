import { Skill, Job, Education, Social } from "./models/models";

export const work_experiences: Job[] = [
    {
        company: "Konrad",
        position: "Software Developer",
        description: null,
        jobDescription: "In Konrad, I was a full stack software engineer performing different tasks throughout different projects in the banking and transportation industry. The main tech stack that I used in these projects was Adobe Experience Manager with Java in the backend and React in the frontend.  I was in charge of different tasks depending on the project, such as maintenance and changes required by the client, as well as deployments for different websites, migrations from older versions of AEM to AEM cloud, and from JavaScript to Typescript in other projects. ",
        from: new Date("2021-09-14"),
        to: new Date("2023-05-15"),
        skills: [1, 2, 3, 4, 8, 9, 11, 12],
        assets: []
    },
    {
        company: "Solasystem (Contract) ",
        position: "Frontend Developer",
        description: "Solasytem.io was a hub where different users could check out the projects made in the Solana network, as well as submit their own projects and information so others can visit their website and share interests in Solana. Unfortunately the site is no longer online.",
        jobDescription: "In SolaSystem I was in charge of developing the frontend of the website. The website and project was built rather quickly and efficiently, and it connected with the SQL databases built by us during the duration of the project. As well as showing graphs and information of the current Solana prices real-time.",
        from: new Date("2021-06-01"),
        to: new Date("2023-06-30"),
        skills: [2, 3, 5, 11],
        assets: []
    },
    {
        company: "5Dimes",
        position: "Customer Service Associate",
        description: null,
        jobDescription: "In 5Dimes, I worked as a customer service agent handling questions that customers had about their accounts, payments, deposits , wagers, technical issues and general questions. I was a high performer, with a high satisfaction rate, and had customers frequently asking for me to provide support specifically from them, as well as providing non-mandatory follow-ups to go the extra mile on each interaction.",
        from: new Date("2018-10-01"),
        to: new Date("2020-09-30"),
        skills: [],
        assets: []
    },
    {
        company: "Concentrix",
        position: "Tech Support Associate",
        description: null,
        jobDescription: "In Concentrix, I was a customer service and tech support agent that helped customers in one of the most popular and powerful mobile operating systems in the industry. I was in charge of guiding customers through known and , sometimes, unique problems with their mobile phones. I was a high performer throughout the years that I was there with a high customer satisfaction rate, as well as helping agents as a floor support.",
        from: new Date("2018-10-01"),
        to: new Date("2020-09-30"),
        skills: [],
        assets: []
    },
];

export const education: Education[] = [
    {
        institution: "Cenfotec University",
        degree: "Web Design and Web Development Technical Degree",
        from: new Date("2018-01-01"),
        to: new Date("2020-12-30"),
        skills: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11]
    },
    {
        institution: "Brain Station",
        degree: "Web Development Immersive Program",
        from: new Date("2021-06-01"),
        to: new Date("2020-12-30"),
        skills: [2, 3, 4, 8, 11]
    }
]

export const skills: Skill[] = [
    { id: "1", name: "Typescript" },
    { id: "2", name: "React" },
    { id: "3", name: "JavaScript" },
    { id: "4", name: "AEM" },
    { id: "5", name: "NodeJS" },
    { id: "6", name: "Photoshop" },
    { id: "7", name: "MongoDB" },
    { id: "8", name: "Java" },
    { id: "9", name: "Figma" },
    { id: "10", name: "Angular" },
    { id: "11", name: " CSS" },
    { id: "12", name: " JIRA" }

]

export function getSkillById(skillId: number): string {
    var result: any = skills.filter(skill => {
        return skill.id === skillId.toString()
    })

    return result[0].name;
}

export const socials: Social[] = [
    { id: "1", name: "Github", url: "https://github.com/" },
    { id: "2", name: "LinkedIn", url: "https://www.linkedin.com" },
]
