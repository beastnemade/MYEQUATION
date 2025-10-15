import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  Award,
  Users,
  BookOpen,
  Zap,
  Target,
  Lightbulb,
  Star,
  Quote,
} from "lucide-react";
import ANSYS from "../../Ansys.png"
import SW from "../../SolidWorks.png"
import FAQ from "../../FQA1.png"
import Certificate from "../../Certificate.png";
import CRBG from "../../CERTI.png";
import Project1 from "../../Project1.png"
import Project2 from "../../Project2.png"
import Project3 from "../../Project3.png"
import imag from "../../nvidia.jpg"
import enr from "../../Enroll.jpg"
import { useState, useEffect, useRef } from "react";

const ProgramOverview = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'Outstanding course content with practical applications. The instructors were responsive and the learning materials were top-notch.',
      extendedContent: "Outstanding course content with practical applications. The instructors were responsive and the learning materials were top-notch. As a product manager, I needed to understand AI/ML concepts to better collaborate with technical teams. This course provided exactly what I needed - a perfect balance of theory and practical knowledge. The assignments were challenging yet achievable, and the feedback was constructive and timely.",
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Data Scientist',
      content: 'Transformative learning experience with industry-relevant projects. Highly recommend for anyone serious about AI/ML career advancement.',
      extendedContent: 'Transformative learning experience with industry-relevant projects. Highly recommend for anyone serious about AI/ML career advancement. The course methodology was innovative, combining lectures, workshops, and peer collaboration. The capstone project allowed me to showcase everything I learned and build a portfolio piece. The career support and networking opportunities were additional benefits that made this investment worthwhile.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Research Scientist',
      content: 'Best investment I ever made in my career. The community support and expert guidance helped me transition from a different field into tech.',
      extendedContent: 'Best investment I ever made in my career. The community support and expert guidance helped me transition from a different field into tech. Coming from a non-technical background, I was initially intimidated, but the program\'s supportive environment made all the difference. The mentors understood the challenges of career changers and provided personalized guidance throughout the journey. The curriculum was designed to build confidence gradually - starting with fundamentals and progressing to advanced topics at a comfortable pace.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Frontend Engineer at Meta',
      content: 'The project-based learning approach is what sets this program apart. I built a portfolio that impressed every interviewer I spoke with.',
      extendedContent: 'The project-based learning approach is what sets this program apart. I built a portfolio that impressed every interviewer I spoke with. Instead of just completing exercises, we worked on real-world projects that solved actual business problems. Each project introduced new technologies and concepts while reinforcing previous learning. My favorite project was building a social media analytics dashboard using React, D3.js, and machine learning APIs.',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'DevOps Engineer at Netflix',
      content: 'The depth of knowledge I gained here is incredible. The mentors really care about your success and go above and beyond to help you.',
      extendedContent: 'The depth of knowledge I gained here is incredible. The mentors really care about your success and go above and beyond to help you. The program covered not just coding, but the entire software development lifecycle. We learned about containerization with Docker, orchestration with Kubernetes, and cloud deployment on AWS and Azure. The DevOps modules were particularly comprehensive, covering CI/CD pipelines, monitoring, and infrastructure as code.',
      rating: 5,
    },
    {
      name: 'Alex Martinez',
      role: 'Software Engineer at Google',
      content: 'Excellent depth of content and hands-on experience. The course exceeded my expectations in every aspect.',
      extendedContent: 'Excellent depth of content and hands-on experience. The course exceeded my expectations in every aspect. The curriculum was cutting-edge, covering the latest developments in AI and machine learning. The lab sessions were particularly impressive, allowing us to work with real datasets and industry-standard tools. The instructors brought years of industry experience, making the learning both theoretical and practical.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'Outstanding course content with practical applications. The instructors were responsive and the learning materials were top-notch.',
      extendedContent: "Outstanding course content with practical applications. The instructors were responsive and the learning materials were top-notch. As a product manager, I needed to understand AI/ML concepts to better collaborate with technical teams. This course provided exactly what I needed - a perfect balance of theory and practical knowledge. The assignments were challenging yet achievable, and the feedback was constructive and timely.",
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Data Scientist',
      content: 'Transformative learning experience with industry-relevant projects. Highly recommend for anyone serious about AI/ML career advancement.',
      extendedContent: 'Transformative learning experience with industry-relevant projects. Highly recommend for anyone serious about AI/ML career advancement. The course methodology was innovative, combining lectures, workshops, and peer collaboration. The capstone project allowed me to showcase everything I learned and build a portfolio piece. The career support and networking opportunities were additional benefits that made this investment worthwhile.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Research Scientist',
      content: 'Best investment I ever made in my career. The community support and expert guidance helped me transition from a different field into tech.',
      extendedContent: 'Best investment I ever made in my career. The community support and expert guidance helped me transition from a different field into tech. Coming from a non-technical background, I was initially intimidated, but the program\'s supportive environment made all the difference. The mentors understood the challenges of career changers and provided personalized guidance throughout the journey. The curriculum was designed to build confidence gradually - starting with fundamentals and progressing to advanced topics at a comfortable pace.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Frontend Engineer at Meta',
      content: 'The project-based learning approach is what sets this program apart. I built a portfolio that impressed every interviewer I spoke with.',
      extendedContent: 'The project-based learning approach is what sets this program apart. I built a portfolio that impressed every interviewer I spoke with. Instead of just completing exercises, we worked on real-world projects that solved actual business problems. Each project introduced new technologies and concepts while reinforcing previous learning. My favorite project was building a social media analytics dashboard using React, D3.js, and machine learning APIs.',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'DevOps Engineer at Netflix',
      content: 'The depth of knowledge I gained here is incredible. The mentors really care about your success and go above and beyond to help you.',
      extendedContent: 'The depth of knowledge I gained here is incredible. The mentors really care about your success and go above and beyond to help you. The program covered not just coding, but the entire software development lifecycle. We learned about containerization with Docker, orchestration with Kubernetes, and cloud deployment on AWS and Azure. The DevOps modules were particularly comprehensive, covering CI/CD pipelines, monitoring, and infrastructure as code.',
      rating: 5,
    },
    {
      name: 'Alex Martinez',
      role: 'Software Engineer at Google',
      content: 'Excellent depth of content and hands-on experience. The course exceeded my expectations in every aspect.',
      extendedContent: 'Excellent depth of content and hands-on experience. The course exceeded my expectations in every aspect. The curriculum was cutting-edge, covering the latest developments in AI and machine learning. The lab sessions were particularly impressive, allowing us to work with real datasets and industry-standard tools. The instructors brought years of industry experience, making the learning both theoretical and practical.',
      rating: 5,
    },
  ];

  // Carousel functionality
  const totalSlides = testimonials.length;
  const slidesToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const getCurrentSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return slidesToShow.mobile;
      if (window.innerWidth < 1024) return slidesToShow.tablet;
      return slidesToShow.desktop;
    }
    return slidesToShow.desktop;
  };

  const [slidesToShowCurrent, setSlidesToShowCurrent] = useState(getCurrentSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShowCurrent(getCurrentSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTimeout(() => setIsPaused(false), 1000);
  };

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skills = [
    "3D CAD modeling and design workflow",
    "Simulation-driven design and engineering validation",
    "Manufacturing documentation and project reporting",
    "Industry-aligned best practices for product development",
  ];

  const projects = [
    {
      title: "Aerodynamic Bicycle Frame Optimization",
      description:
        "Design and model a lightweight racing bicycle frame in SolidWorks, then use ANSYS to analyze its structural integrity and aerodynamic efficiency.",
      image: Project1
    },
    {
      title: "Automotive Suspension System Analysis",
      description:
        "Create a detailed 3D model of a double-wishbone suspension system in SolidWorks and simulate its performance under various dynamic loads in ANSYS.",
      image: Project2
    },
    {
      title: "Heat Sink Thermal Performance Study",
      description:
        "Model various heat sink fin designs in SolidWorks and use ANSYS to conduct a thermal analysis to determine the most effective design for cooling electronic components.",
      image: Project3
    },
  ];



  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "100% Self-Paced",
      description: "Lifetime access to resources and updates",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Community support and direct instructor access",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Resources",
      description: "Downloadable guides, project files, and career resources",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Weekly Q&A Sessions",
      description: "Direct instructor access and live support",
    },
  ];

  return (
    <section id="program-overview" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Program Overview
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 italic">
              60 Hours of Training in Industry Designing
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlock a transformative learning journey with comprehensive
              training in SolidWorks & ANSYS. This expert-led program takes
              students from foundational concepts to advanced industry-ready
              expertise in both 3D modeling and engineering simulation.
            </p>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -50,
                    y: 30
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CardTitle className="text-3xl font-bold text-gray-900 italic">
                    Skills & Techniques Learned
                  </CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Master SolidWorks fundamentals including sketching, part
                  modeling, assembly, and visualization. Advanced topics cover
                  parametric modeling, complex assemblies, and design
                  optimization for manufacturability.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    ANSYS Expertise
                  </h4>
                  <p className="text-blue-800">
                    Build from FEA basics to advanced multiphysics
                    simulation—including stress, thermal, and fluid analysis.
                    Tackle real engineering problems, optimizing designs for
                    performance and safety used in leading technology firms.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Projects Section */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4 italic">
                  Practical Projects & Real-World Applications
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Every module includes fully guided, industry-inspired projects
                  that mirror live industry scenarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 50,
                          scale: 0.9
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: 0.7,
                            delay: index * 0.2,
                            ease: "easeOut"
                          }
                        }
                      }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group"
                    >
                      <Card className="h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl text-blue-600 group-hover:text-blue-700">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600">
                            {project.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tools Section */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4 italic">
                  The Tech Stack You'll Learn
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Gain hands-on experience with the latest tools and technologies that are driving innovation in the industry
                </CardDescription>
              </CardHeader>
              <br />
              <CardContent className="text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                  >
                    <img
                      src={SW}
                      alt="SolidWorks"
                      className="h-20 w-auto object-contain"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                  >
                    <img
                      src={ANSYS}
                      alt="ANSYS"
                      className="h-20 w-auto object-contain"
                    />
                  </motion.div>
                </div>
                <br />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSmoothScroll("enrollment-form")}
                  className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg cursor-pointer"
                >
                  Enroll Now
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mentors Section */}
          <motion.div variants={itemVariants} id="mentors">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12 text-center">
                {/* Meet your Mentors */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 italic">
                    Gain Insights from Experienced Professionals
                  </h2>
                  <p className="text-lg text-gray-600">
                    Learn directly from top industry leaders who bridge the gap between
                  </p>
                  <p className="text-lg text-gray-600">
                    theory and practice, bringing their essential, on-the-ground insights
                  </p>
                  <p className="text-lg text-gray-600">
                    and proven strategies into the classroom.
                  </p>
                  <br />
                  <br />
                  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Mentor 1 - Arko */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                          <img
                            src={imag}
                            alt="Arko"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h3 className="font-bold text-lg text-gray-900">Arko</h3>
                          <p className="text-sm text-gray-600">Technical lead (SME)</p>
                          <p className="text-xs text-gray-500">Volvo Motors, Mechanical Design Expert</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Mentor 2 - Mohit */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                          <img
                            src={imag}
                            alt="Mohit"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h3 className="font-bold text-lg text-gray-900">Mohit</h3>
                          <p className="text-sm text-gray-600">CTO @ J.M Marketplace - TATA</p>
                          <p className="text-xs text-gray-500">Power Hardware developer</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Mentor 3 - Deepesh */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                          <img
                            src={imag}
                            alt="Deepesh"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h3 className="font-bold text-lg text-gray-900">Deepesh</h3>
                          <p className="text-sm text-gray-600">AI & Deep Learning Engineer</p>
                          <p className="text-xs text-gray-500">Cynaptic Technologies</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certification Section */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm relative overflow-hidden">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-1 bg-no-repeat sm:bg-cover"
                style={{
                  backgroundImage: `url(${CRBG})`,
                  backgroundSize: 'auto',
                  backgroundPosition: 'center 70%',
                }}
              />

              <CardContent className="relative z-10 p-8 md:p-12 text-center space-y-8">
                {/* Text Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 italic">
                      Get your hard work certified
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Upon successful completion of your program, you will earn a valuable industry-recognized certificate that effectively showcases your newly acquired expertise and professional skills, while simultaneously opening doors to exciting new career opportunities and advancement possibilities in your chosen profession.
                    </p>
                  </div>
                </div>

                {/* Certificate Image - Below Text */}
                <div className="flex justify-center">
                  <div className="relative max-w-md w-full">
                    <img
                      src={Certificate}
                      alt="Industry Certificate"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Reviews/Testimonials Section */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">Success Stories</h2>
                  <p className="text-blue-200 text-lg max-w-3xl mx-auto">
                    Hear what our students have to say about their experience
                  </p>
                </div>

                <div className="relative">
                  {/* Carousel Container */}
                  <div
                    className="overflow-hidden testimonial-carousel"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div
                      ref={carouselRef}
                      className="flex transition-transform duration-300 ease-in-out testimonial-slide"
                      style={{
                        transform: `translateX(-${(currentIndex * (100 / slidesToShowCurrent))}%)`,
                      }}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      {testimonials.map((testimonial, index) => (
                        <motion.div
                          key={index}
                          className={`flex-shrink-0 px-2 sm:px-3 ${slidesToShowCurrent === 1 ? 'w-full' :
                            slidesToShowCurrent === 2 ? 'w-1/2' : 'w-1/3'
                            }`}
                          whileHover={{ y: -5, scale: 1.02 }}
                        >
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:bg-white/15 border border-white/20 h-full">
                            <Quote className="w-10 h-10 text-blue-400 mb-4 opacity-70" />

                            <div className="flex gap-1 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                />
                              ))}
                            </div>

                            <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base lg:text-lg min-h-[100px] sm:min-h-[120px]">
                              "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/30 ring-2 ring-blue-400/50 flex items-center justify-center">
                                <span className="text-white font-bold text-lg sm:text-xl">
                                  {testimonial.name.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <h4 className="text-white font-bold text-sm sm:text-base">{testimonial.name}</h4>
                                <p className="text-gray-300 text-xs sm:text-sm">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: Math.ceil(totalSlides / slidesToShowCurrent) }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index * slidesToShowCurrent)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / slidesToShowCurrent) === index
                          ? 'bg-blue-400 scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows - Hidden on mobile */}
                  <button
                    onClick={prevSlide}
                    className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                  {/* Left Column - Question Icon and Text */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20">
                        <img
                          src={FAQ}
                          alt="FAQ Support"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 italic">
                        Have questions?
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        We're here to help. Check out the listed answers to some of the most frequently asked questions.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - FAQ Accordion */}
                  <div>
                    <Accordion type="single" collapsible className="space-y-3">
                      <AccordionItem value="item-1" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="text-left font-semibold hover:text-blue-600 px-6 py-4">
                          How long is this program?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 px-6 pb-4">
                          The program consists of 60 hours of comprehensive training, designed to be completed at your own pace with lifetime access to all materials.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="text-left font-semibold hover:text-blue-600 px-6 py-4">
                          What prerequisites do I need?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 px-6 pb-4">
                          No prior experience required. The course starts from fundamentals and builds to advanced topics, accessible for beginners and experienced learners alike.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="text-left font-semibold hover:text-blue-600 px-6 py-4">
                          Do I get a certificate upon completion?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 px-6 pb-4">
                          Yes, students earn a verified industry-endorsed certificate to display on professional profiles upon successful completion.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="text-left font-semibold hover:text-blue-600 px-6 py-4">
                          Is there lifetime access to the course?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 px-6 pb-4">
                          Yes, you get lifetime access to all course materials, resources, and updates once enrolled.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="text-left font-semibold hover:text-blue-600 px-6 py-4">
                          What kind of support do I get?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 px-6 pb-4">
                          Learners get direct instructor support, community forums, weekly Q&A sessions, and comprehensive career guidance.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enrollment Form Section */}
          <motion.div variants={itemVariants} id="enrollment-form">
            <Card className="border-0 shadow-xl bg-gray-900 text-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Left Column - Image */}
                  <div className="order-1 md:order-1">
                    <div className="relative rounded-2xl overflow-hidden">
                      <img
                        src={enr}
                        alt="Students Learning Together"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Column - Form */}
                  <div className="order-2 md:order-2 space-y-6">
                    <div className="text-center md:text-left">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Enroll Today and become a{" "}
                        <span className="text-yellow-400">Profesional</span>
                      </h2>
                      <p className="text-gray-300 text-lg mb-8">
                        Join learners from multiple domains and learn from top industry mentors to kick-start your journey
                        in the field of Artificial Intelligence & Machine Learning
                      </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number*"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
                      >
                        Submit
                      </motion.button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramOverview;
