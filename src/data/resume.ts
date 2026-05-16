export const NAME = 'Arttu Meriläinen';

export const skills = {
  tech:      'TypeScript, JavaScript, Python, C#, React, Node.js, GraphQL, HTML, CSS, Responsive Design, Android, AWS, Azure',
  databases: 'SQL, PostgreSQL',
  tools:     'Git, Jira, Figma, Postman, Docker, Jest',
} as const;

export interface ExperienceEntry {
  id: string;
  company: string;
  location: string;
  period: string;
  stack?: string;
}

export const experience: ExperienceEntry[] = [
  { id: 'insta',      company: 'Insta Advance Oy', location: 'Tampere', period: '01/2022 - 06/2022' },
  { id: 'esend',      company: 'eSend Finland Oy', location: 'Tampere', period: '06/2020 - 12/2021', stack: 'React + TypeScript, AWS, Figma' },
  { id: 'tuudoDev',   company: 'Tuudo Oy',          location: 'Oulu',    period: '06/2019 - 08/2019', stack: 'React, Express.js, MongoDB' },
  { id: 'tuudoSales', company: 'Tuudo Oy',          location: 'Oulu',    period: '10/2018 - 05/2019' },
];

export interface EducationEntry {
  id: string;
  period: string;
  minor?: true;
}

export const education: EducationEntry[] = [
  { id: 'msc', period: '2019 - 2025' },
  { id: 'bsc', period: '2015 - 2019', minor: true },
  { id: 'hs',  period: '2011 - 2014' },
];

export interface ProjectEntry {
  id: string;
  period: string;
  stack?: string;
}

export const projects: ProjectEntry[] = [
  { id: 'sep', period: '09/2021 - 12/2021', stack: 'Figma, React + TypeScript, React Native, Apollo GraphQL, PostgreSQL' },
];
