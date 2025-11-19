export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar_url: string;
  linkedin_url?: string;
  media_type?: 'text' | 'video';
  media_url?: string;
  video_url?: string;
  order_index: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    title: 'Mechanical Design Engineer',
    company: 'Tata Motors',
    content: 'MyEquation\'s SolidWorks & ANSYS program transformed my career! The hands-on projects and expert mentorship helped me master 3D modeling and simulation. Within 3 months of completing the course, I landed my dream job at Tata Motors. The practical approach made complex concepts easy to understand.',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'text',
    order_index: 1
  },
  {
    id: '2',
    name: 'Rahul Verma',
    title: 'Product Design Engineer',
    company: 'Mahindra & Mahindra',
    content: 'The 60-hour training at MyEquation was incredibly comprehensive. Learning SolidWorks from basics to advanced assemblies, combined with ANSYS simulation techniques, gave me the confidence to tackle real-world engineering challenges. The instructors were industry experts who shared practical insights that textbooks never teach.',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'text',
    order_index: 2
  },
  {
    id: '3',
    name: 'Anjali Desai',
    title: 'CAD Design Specialist',
    company: 'Larsen & Toubro',
    content: 'I was a complete beginner in CAD software, but MyEquation\'s structured curriculum made learning SolidWorks so intuitive. The ANSYS modules on FEA and thermal analysis were game-changers. Now I\'m confidently designing and validating complex mechanical systems at L&T. Best investment in my engineering career!',
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'text',
    order_index: 3
  },
  {
    id: '4',
    name: 'Vikram Singh',
    title: 'Simulation Engineer',
    company: 'Ashok Leyland',
    content: 'MyEquation doesn\'t just teach software - they teach you how to think like an engineer. The projects on suspension systems and aerodynamic analysis were incredibly relevant to automotive industry needs. The lifetime access to resources means I can always revisit concepts. Highly recommend for aspiring design engineers!',
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'text',
    order_index: 4
  },
  {
    id: '5',
    name: 'Arjun Patel',
    title: 'Senior Design Engineer',
    company: 'Bosch India',
    content: 'The combination of SolidWorks and ANSYS training at MyEquation gave me a competitive edge in the job market. The instructors\' industry experience really shows in how they structure the course. From parametric modeling to multiphysics simulation, every module was practical and industry-focused.',
    avatar_url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'video',
    media_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    video_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    order_index: 5
  },
  {
    id: '6',
    name: 'Sneha Reddy',
    title: 'Structural Analysis Engineer',
    company: 'Siemens',
    content: 'MyEquation\'s program exceeded all my expectations. The ANSYS training covered everything from stress analysis to fluid dynamics. The weekly Q&A sessions were invaluable for clearing doubts. I now handle complex simulation projects at Siemens with confidence. Thank you MyEquation for this amazing learning journey!',
    avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'text',
    order_index: 6
  },
  {
    id: '7',
    name: 'Karthik Menon',
    title: 'R&D Engineer',
    company: 'Hero MotoCorp',
    content: 'As a mechanical engineering graduate, I needed practical skills to stand out. MyEquation\'s SolidWorks & ANSYS program was perfect. The bicycle frame optimization and heat sink projects taught me design thinking and validation. The certificate from MyEquation added significant value to my resume!',
    avatar_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'video',
    media_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
    video_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    order_index: 7
  },
  {
    id: '8',
    name: 'Meera Krishnan',
    title: 'Design Validation Engineer',
    company: 'TVS Motors',
    content: 'The self-paced learning model at MyEquation was perfect for my schedule. I could learn at my own pace while working full-time. The projects were industry-relevant and the mentors were always available to help. Within 6 months, I transitioned from a junior role to a design validation position. Grateful to MyEquation!',
    avatar_url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'text',
    order_index: 8
  },
  {
    id: '9',
    name: 'Arjun Patel',
    title: 'Senior Design Engineer',
    company: 'Bosch India',
    content: 'The combination of SolidWorks and ANSYS training at MyEquation gave me a competitive edge in the job market. The instructors\' industry experience really shows in how they structure the course. From parametric modeling to multiphysics simulation, every module was practical and industry-focused.',
    avatar_url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'video',
    media_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    video_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    order_index: 5
  },
  {
    id: '10',
    name: 'Arjun Patel',
    title: 'Senior Design Engineer',
    company: 'Bosch India',
    content: 'The combination of SolidWorks and ANSYS training at MyEquation gave me a competitive edge in the job market. The instructors\' industry experience really shows in how they structure the course. From parametric modeling to multiphysics simulation, every module was practical and industry-focused.',
    avatar_url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'video',
    media_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    video_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    order_index: 5
  },
  {
    id: '11',
    name: 'Arjun Patel',
    title: 'Senior Design Engineer',
    company: 'Bosch India',
    content: 'The combination of SolidWorks and ANSYS training at MyEquation gave me a competitive edge in the job market. The instructors\' industry experience really shows in how they structure the course. From parametric modeling to multiphysics simulation, every module was practical and industry-focused.',
    avatar_url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop',
    linkedin_url: 'https://linkedin.com',
    media_type: 'video',
    media_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    video_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    order_index: 5
  },
];
