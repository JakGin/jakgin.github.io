const header = {
  // // all the properties are optional - can be left empty or deleted
  // homepage: 'https://jakgin.github.io',
  // title: home',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jakub Glinka',
  role: 'Software Developer',
  description:
    'I am a third-year computer science student at Lodz University of Technology, specializing in software engineering. I am generally interested in programming, but I am particularly focused on web development. I have skills in both frontend and backend development, which I have honed through numerous projects at university as well as my own initiatives. Developing programming skills is very important to me and brings me great joy.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jakub-glinka-257568246',
    github: 'https://github.com/JakGin',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Quizzical',
    description:
      'Web application that allows user to create and solve quizzes. It is built using React and styled-components.',
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/JakGin/WEB-DEV/tree/main/react/7_Quizzical',
    livePreview: 'https://jakgin-react7.netlify.app/',
  },
  {
    name: 'Movie Watchlist',
    description:
      "Web application that allows user to search for a movies or series and add preferred ones to their watchlist when they create an account. It's built using html, css and vanilla javascript on frontend. Backend consists of 3 express servers that handle authentication, movie API and watchlist. MongoDB is used to store user data.",
    stack: ['JavaScript', 'Node.js', 'Express.js', 'Docker'],
    sourceCode: 'https://github.com/JakGin/movie-watchlist',
  },
  {
    name: 'Images Encryption/Decryption',
    description:
      'This program allows you to easily encrypt and decrypt images in a folder. Running the program in a folder will encrypt all images in that folder and create a special file needed for decryption. If the program is run again and the decryption file exists in the folder, it will decrypt the images.',
    stack: ['Python', 'TDD'],
    sourceCode: 'https://github.com/JakGin/Image-Xor-Encryption',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Shadcn',
  'Git',
  'Github',
  'Docker',
  'Python',
  'Django',
  'OPP',
  'TDD',
  'Clean Code',
  'SOLID',
  'Design Patterns',
  'SQL',
  'Next.js',
  'Node.js',
  'Express.js',
  'Java',
  'C',
  'Figma',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jakub.glinka079@gmail.com',
}

export { header, about, projects, skills, contact }
