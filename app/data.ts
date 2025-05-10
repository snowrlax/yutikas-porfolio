type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type TechStack = {
  label: string
}

export const PROJECTS: Project[] = [
  {
    name: 'LLM-Based Profile Generation For Talent Agency',
    description:
      'Led development of an LLM-based celebrity profile generation system using generative and reflective agents in LangGraph and GPT-4o model.',
    link: 'https://github.com/yutikarege',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Defect Classification and Document Chatbot',
    description: 'Fine-tuned Vision Transformer model to classify industry-grade defects with 0.94 accuracy and implemented RAG-based document chat with GPT-4o.',
    link: 'https://github.com/yutikarege',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Pyrack Technologies Pvt. Ltd.',
    title: 'Machine Learning Engineer',
    start: 'May 2022',
    end: 'Present',
    link: 'https://www.linkedin.com/in/yutikarege',
    id: 'work1',
  },
  {
    company: 'Caltech CTME',
    title: 'Post Graduate Program in AI and Machine Learning',
    start: '2025',
    end: 'Pursuing',
    link: 'https://www.linkedin.com/in/yutikarege',
    id: 'work2',
  },
  {
    company: 'Symbiosis Skills and Professional University',
    title: 'B.Sc. Data Science',
    start: '2019',
    end: '2022',
    link: 'https://www.linkedin.com/in/yutikarege',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Automated Data Merging and Chat-based Business Intelligence',
    description: 'Developing intelligent chatbots with Langgraph for business intelligence applications',
    link: '/blog/automated-data-merging',
    uid: 'blog-1',
  },
  {
    title: 'Regulatory Intelligence and Data Validation Engine',
    description:
      'Leveraging NLP models to analyze regulatory notifications and extract key insights',
    link: '/blog/regulatory-intelligence',
    uid: 'blog-2',
  },
  {
    title: 'AI-Powered HR Recruitment Platform',
    description:
      'Creating an innovative AI assistant for candidate assessment and recruitment',
    link: '/blog/ai-powered-hr-recruitment',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/yutikarege',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yutikarege',
  },
  {
    label: 'Email',
    link: 'mailto:yutikarege2309@gmail.com',
  },
  {
    label: 'Phone',
    link: 'tel:9689743344',
  },
]

export const TECH_STACK: TechStack[] = [
  {
    label: 'Python',
  },
  {
    label: 'Django',
  },
  {
    label: 'Terraform',
  },
  {
    label: 'Langgraph',
  },
  {
    label: 'Langchain',
  },
  {
    label: 'Llama-Index',
  },
  {
    label: 'OpenAI',
  },
  {
    label: 'PandasAI',
  },
  {
    label: 'Streamlit',
  },
  {
    label: 'FastAPI',
  },
  {
    label: 'Flask',
  },
  {
    label: 'SpaCy',
  },
  {
    label: 'AWS',
  },
  {
    label: 'GCP',
  },
  {
    label: 'Docker',
  },
  {
    label: 'Git',
  },
  {
    label: 'MySQL',
  },
  {
    label: 'PostgreSQL',
  },
]

export const EMAIL = 'yutikarege2309@gmail.com'