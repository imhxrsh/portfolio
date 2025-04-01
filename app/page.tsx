"use client";

import {
	Github,
	Linkedin,
	Mail,
	Phone,
	Download,
	MapPin,
	GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/project-card";
import ExperienceCard from "@/components/experience-card";
import EducationCard from "@/components/education-card";
import DiscordContactForm from "@/components/DiscordContactForm";

export default function Portfolio() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Header */}
			<header className='sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
				<div className='container mx-auto flex h-16 items-center justify-between px-4 md:px-6'>
					<div className='font-bold text-xl'>Harsh Vishwakarma</div>
					<nav className='hidden md:flex gap-6'>
						<Link
							href='#about'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							About
						</Link>
						<Link
							href='#experience'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							Experience
						</Link>
						<Link
							href='#skills'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							Skills
						</Link>
						<Link
							href='#projects'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							Projects
						</Link>
						<Link
							href='#contact'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							Contact
						</Link>
					</nav>
					<div className='flex gap-2'>
						<Button
							asChild
							variant='outline'
							size='sm'
							className='hidden sm:flex'
						>
							<Link
								href='/Resume-Harsh_Vishwakarma.pdf'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Download className='mr-2 h-4 w-4' />
								Resume
							</Link>
						</Button>
						<Button asChild size='sm'>
							<Link href='#contact'>Hire Me</Link>
						</Button>
					</div>
				</div>
			</header>

			<main className='container mx-auto px-4 md:px-6 py-8 md:py-12'>
				{/* Hero Section */}
				<section className='py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12'>
					<div className='flex-1 space-y-6'>
						<div className='space-y-2'>
							<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
								Harsh Vishwakarma
							</h1>
							<p className='text-2xl md:text-3xl text-primary font-medium'>
								Web & Mobile Developer
							</p>
						</div>
						<p className='text-xl text-muted-foreground'>
							Building exceptional digital experiences with Next.js, React
							Native, and Node.js.
						</p>
						<div className='flex flex-wrap gap-4 pt-4'>
							<Button asChild size='lg'>
								<Link href='#projects'>View My Work</Link>
							</Button>
							<Button variant='outline' asChild size='lg'>
								<Link href='#contact'>Contact Me</Link>
							</Button>
						</div>
						<div className='flex gap-4 pt-2'>
							<Link
								href='https://github.com/imhxrsh'
								target='_blank'
								className='text-muted-foreground hover:text-foreground transition-colors'
							>
								<Github className='h-5 w-5' />
								<span className='sr-only'>GitHub</span>
							</Link>
							<Link
								href='https://linkedin.com/in/itsmehxrsh'
								target='_blank'
								className='text-muted-foreground hover:text-foreground transition-colors'
							>
								<Linkedin className='h-5 w-5' />
								<span className='sr-only'>LinkedIn</span>
							</Link>
							<Link
								href='mailto:itsmehxrsh@gmail.com'
								className='text-muted-foreground hover:text-foreground transition-colors'
							>
								<Mail className='h-5 w-5' />
								<span className='sr-only'>Email</span>
							</Link>
						</div>
					</div>
					<div className='flex-1 flex justify-center'>
						<div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20'>
							<img
								src='/profile.jpg'
								alt='Harsh Vishwakarma'
								className='object-cover'
							/>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section id='about' className='py-12 md:py-20 scroll-mt-20'>
					<div className='space-y-4 max-w-3xl mx-auto text-center mb-12'>
						<h2 className='text-3xl font-bold'>About Me</h2>
						<div className='w-20 h-1 bg-primary mx-auto'></div>
						<p className='text-muted-foreground'>Get to know me better</p>
					</div>
					<div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
						<div className='space-y-6'>
							<p className='text-lg justify'>
								Hello! I'm Harsh Vishwakarma, a passionate developer
								specializing in web and mobile development based in Mumbai,
								India. I'm currently pursuing my Bachelor's in Artificial
								Intelligence and Data Science at Fr. Conceicao Rodrigues College
								of Engineering.
							</p>
							<p className='text-lg'>
								With experience in Next.js, React Native, and Node.js, I create
								seamless digital experiences that work across all platforms.
								I've worked as an SDE Intern at Six Ladders and as a Digital
								Marketing & Web Development Intern at JRS Transport Services.
							</p>
							<p className='text-lg'>
								Beyond my professional work, I serve as the Technical Secretary
								at my college, organizing hackathons and technical workshops,
								and previously worked as a Webmaster developing event websites
								that increased participation by 40%.
							</p>
							<div className='pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
								<div className='flex items-center gap-3'>
									<MapPin className='h-5 w-5 text-primary flex-shrink-0' />
									<span>Mumbai, India</span>
								</div>
								<div className='flex items-center gap-3'>
									<Mail className='h-5 w-5 text-primary flex-shrink-0' />
									<span className='truncate'>itsmehxrsh@gmail.com</span>
								</div>
								<div className='flex items-center gap-3'>
									<Phone className='h-5 w-5 text-primary flex-shrink-0' />
									<span>+91 99305-46775</span>
								</div>
								<div className='flex items-center gap-3'>
									<GraduationCap className='h-5 w-5 text-primary flex-shrink-0' />
									<span>B.E. in AI & Data Science</span>
								</div>
							</div>
						</div>
						<Card>
							<CardContent className='p-6'>
								<h3 className='text-xl font-semibold mb-6'>
									Professional Summary
								</h3>
								<ul className='space-y-5'>
									<li className='flex items-start gap-3'>
										<span className='bg-primary/20 p-1.5 rounded-full mt-0.5 flex-shrink-0'>
											<span className='block w-2 h-2 bg-primary rounded-full'></span>
										</span>
										<span>
											Experienced in Next.js, React Native, and Node.js
											development
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='bg-primary/20 p-1.5 rounded-full mt-0.5 flex-shrink-0'>
											<span className='block w-2 h-2 bg-primary rounded-full'></span>
										</span>
										<span>
											Reduced loading times by 35% through performance
											optimization in React Native
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='bg-primary/20 p-1.5 rounded-full mt-0.5 flex-shrink-0'>
											<span className='block w-2 h-2 bg-primary rounded-full'></span>
										</span>
										<span>
											Improved SEO by 57% for a transport services company
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='bg-primary/20 p-1.5 rounded-full mt-0.5 flex-shrink-0'>
											<span className='block w-2 h-2 bg-primary rounded-full'></span>
										</span>
										<span>
											Generated over 150 leads through a custom real estate
											landing page
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='bg-primary/20 p-1.5 rounded-full mt-0.5 flex-shrink-0'>
											<span className='block w-2 h-2 bg-primary rounded-full'></span>
										</span>
										<span>
											Technical Secretary organizing hackathons and workshops
										</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Education Section */}
				<section id='education' className='py-12 md:py-20 scroll-mt-20'>
					<div className='space-y-4 max-w-3xl mx-auto text-center mb-12'>
						<h2 className='text-3xl font-bold'>Education</h2>
						<div className='w-20 h-1 bg-primary mx-auto'></div>
						<p className='text-muted-foreground'>My academic background</p>
					</div>
					<div className='space-y-8'>
						<EducationCard
							institution='Fr. Conceicao Rodrigues College of Engineering'
							degree='Bachelor of Engineering in Artificial Intelligence and Data Science'
							duration='Nov 2022 - Present'
							location='Mumbai, India'
							gpa='CGPA: 7.46'
						/>
						<EducationCard
							institution="USMS's Vidyanidhi Junior College of Science"
							degree='Higher School Certificate (HSC)'
							duration='Oct 2020 - Jun 2022'
							location='Mumbai, India'
						/>
					</div>
				</section>

				{/* Experience Section */}
				<section id='experience' className='py-12 md:py-20 scroll-mt-20'>
					<div className='space-y-4 max-w-3xl mx-auto text-center mb-12'>
						<h2 className='text-3xl font-bold'>Work Experience</h2>
						<div className='w-20 h-1 bg-primary mx-auto'></div>
						<p className='text-muted-foreground'>My professional journey</p>
					</div>
					<div className='space-y-8'>
						<ExperienceCard
							position='SDE Intern'
							company='Six Ladders'
							duration='Dec 2024 - Mar 2024'
							location='Mumbai, India'
							responsibilities={[
								"Developed a scalable web application using Next.js, optimizing the front-end architecture for enhanced performance and user experience.",
								"Implemented advanced caching mechanisms in React Native applications, reducing loading times by 35% and improving responsiveness.",
								"Designed and developed robust APIs using Node.js and Express.js, streamlining data flow and backend operations.",
								"Contributed to both front-end and back-end systems, ensuring seamless integration and maintaining high code quality in a JavaScript-based ecosystem.",
							]}
						/>
						<ExperienceCard
							position='Digital Marketing & Web Development Intern'
							company='JRS Transport Services'
							duration='Jul 2022 - Oct 2023'
							location='Mumbai, India'
							websiteUrl='https://www.linkedin.com/company/jrs-transport-services'
							responsibilities={[
								"Developed a professional website to enhance the company's online presence by 1,679 visitors monthly.",
								"Improved SEO using meta tags to improve search engine ranks by 57%, propelling it to first place.",
								"Led Google Ads and Meta Ads campaigns, increasing website traffic and visibility, resulting in 16 new customers.",
							]}
						/>
						<ExperienceCard
							position='Freelance Web Developer'
							company='Amin & Wilson Realty'
							duration='Sept 2022'
							location='Manchester, United Kingdom'
							responsibilities={[
								"Developed a custom landing page showcasing real estate listings and services, generating over 150 leads.",
								"Optimized the page for search engines and included marketing components, resulting in a 15% improvement in total ranks.",
								"Configured the contact form to integrate with Google Sheets for efficient lead management.",
							]}
						/>
					</div>
				</section>

				{/* Extra-Curricular Section */}
				<section id='extracurricular' className='py-12 md:py-20 scroll-mt-20'>
					<div className='space-y-4 max-w-3xl mx-auto text-center mb-12'>
						<h2 className='text-3xl font-bold'>Extra-Curricular Activities</h2>
						<div className='w-20 h-1 bg-primary mx-auto'></div>
						<p className='text-muted-foreground'>
							My involvement beyond academics
						</p>
					</div>
					<div className='space-y-8'>
						<ExperienceCard
							position='Technical Secretary'
							company='Fr. Conceicao Rodrigues College of Engineering'
							duration='Apr 2024 - Present'
							location='Mumbai, India'
							responsibilities={[
								"Organizing a prestigious national-level hackathon and conducting multiple technical workshops on emerging technologies.",
								"Initiated and curated a monthly technical newsletter highlighting recent advancements in engineering and technology.",
							]}
						/>
						<ExperienceCard
							position='Webmaster'
							company='Fr. Conceicao Rodrigues College of Engineering'
							duration='Aug 2023 - Apr 2024'
							location='Mumbai, India'
							responsibilities={[
								"Engineered and launched student council event websites, attracting 40% more participants and reducing event registration time by 50% through interactive design and streamlined user experience.",
								"Performed comprehensive risk assessments and devised contingency plans tailored to event logistics.",
							]}
						/>
					</div>
				</section>

				{/* Skills Section */}
				<section id='skills' className='py-12 md:py-20 scroll-mt-20'>
					<div className='space-y-4 max-w-3xl mx-auto text-center mb-12'>
						<h2 className='text-3xl font-bold'>Skills & Technologies</h2>
						<div className='w-20 h-1 bg-primary mx-auto'></div>
						<p className='text-muted-foreground'>What I work with</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<Card className='hover:shadow-lg transition-shadow'>
							<CardContent className='p-6'>
								<h3 className='text-xl font-semibold mb-6 flex items-center'>
									<span className='bg-primary/20 p-2 rounded-full mr-3'>
										<span className='block w-3 h-3 bg-primary rounded-full'></span>
									</span>
									Frontend
								</h3>
								<div className='flex flex-wrap gap-2'>
									<Badge className='px-3 py-1 text-sm'>Next.js</Badge>
									<Badge className='px-3 py-1 text-sm'>React</Badge>
									<Badge className='px-3 py-1 text-sm'>React Native</Badge>
									<Badge className='px-3 py-1 text-sm'>JavaScript</Badge>
									<Badge className='px-3 py-1 text-sm'>TypeScript</Badge>
									<Badge className='px-3 py-1 text-sm'>HTML5</Badge>
									<Badge className='px-3 py-1 text-sm'>CSS3</Badge>
									<Badge className='px-3 py-1 text-sm'>Tailwind CSS</Badge>
								</div>
							</CardContent>
						</Card>
						<Card className='hover:shadow-lg transition-shadow'>
							<CardContent className='p-6'>
								<h3 className='text-xl font-semibold mb-6 flex items-center'>
									<span className='bg-primary/20 p-2 rounded-full mr-3'>
										<span className='block w-3 h-3 bg-primary rounded-full'></span>
									</span>
									Backend
								</h3>
								<div className='flex flex-wrap gap-2'>
									<Badge className='px-3 py-1 text-sm'>Node.js</Badge>
									<Badge className='px-3 py-1 text-sm'>Express.js</Badge>
									<Badge className='px-3 py-1 text-sm'>Python Flask</Badge>
									<Badge className='px-3 py-1 text-sm'>PHP</Badge>
									<Badge className='px-3 py-1 text-sm'>REST API</Badge>
									<Badge className='px-3 py-1 text-sm'>MongoDB</Badge>
									<Badge className='px-3 py-1 text-sm'>SQL</Badge>
								</div>
							</CardContent>
						</Card>
						<Card className='hover:shadow-lg transition-shadow'>
							<CardContent className='p-6'>
								<h3 className='text-xl font-semibold mb-6 flex items-center'>
									<span className='bg-primary/20 p-2 rounded-full mr-3'>
										<span className='block w-3 h-3 bg-primary rounded-full'></span>
									</span>
									Tools & Technologies
								</h3>
								<div className='flex flex-wrap gap-2'>
									<Badge className='px-3 py-1 text-sm'>Git</Badge>
									<Badge className='px-3 py-1 text-sm'>AWS</Badge>
									<Badge className='px-3 py-1 text-sm'>Azure</Badge>
									<Badge className='px-3 py-1 text-sm'>TensorFlow</Badge>
									<Badge className='px-3 py-1 text-sm'>Keras</Badge>
									<Badge className='px-3 py-1 text-sm'>SEO</Badge>
									<Badge className='px-3 py-1 text-sm'>Google Ads</Badge>
									<Badge className='px-3 py-1 text-sm'>Meta Ads</Badge>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Projects Section */}
				<section id='projects' className='py-12 md:py-20 scroll-mt-20'>
					<div className='space-y-4 max-w-3xl mx-auto text-center mb-12'>
						<h2 className='text-3xl font-bold'>Featured Projects</h2>
						<div className='w-20 h-1 bg-primary mx-auto'></div>
						<p className='text-muted-foreground'>Some of my recent work</p>
					</div>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						<ProjectCard
							title='Crescendo Attendance'
							description='A React Native app for managing attendance using QR code systems, including QR generation, scanning, and API integration.'
							tags={["React Native", "QR Code", "API Integration"]}
							imageUrl='/projects/crescendo.png'
							githubUrl='https://github.com/imhxrsh/crescendo-attendance'
						/>
						<ProjectCard
							title='BookStore'
							description='A PHP web application with an admin panel for managing online book sales, inventory, and customer orders.'
							tags={["PHP", "MySQL", "Admin Panel"]}
							imageUrl='/projects/bookstore.png'
							githubUrl='https://github.com/imhxrsh/bookstore-mini-project'
						/>
						<ProjectCard
							title='Myriad'
							description='A PHP-based web application for hourly hotel bookings, including admin, property manager, and user interfaces.'
							tags={["PHP", "MySQL", "Multi-user"]}
							imageUrl='/projects/myriad.png'
							githubUrl='https://github.com/imhxrsh/SE-MiniProject'
						/>
						<ProjectCard
							title='JRS Transport Website'
							description='Professional website for a transport company that enhanced online presence with 1,679 monthly visitors.'
							tags={["Web Development", "SEO", "Digital Marketing"]}
							imageUrl='/projects/jrstransport.jpg'
							liveUrl='/jrstransport/index.html'
						/>
						<ProjectCard
							title='Amin & Wilson Realty'
							description='Custom landing page for a real estate company that generated over 150 leads with Google Sheets integration.'
							tags={["Landing Page", "Lead Generation", "Google Sheets"]}
							imageUrl='/projects/amin-wilson.png'
							liveUrl='/amin-wilson/index.html'
						/>
						<ProjectCard
							title='Waassta'
							description='Custom landing page for a digital marketing agency that generated over 80 leads with Google Sheets integration.'
							tags={["Landing Page", "Lead Generation", "Google Sheets"]}
							imageUrl='/projects/waassta.png'
							liveUrl='/waassta/index.html'
						/>
					</div>
				</section>

				{/* Contact Section */}
				<section id='contact' className='py-12 md:py-20 scroll-mt-20'>
					<div className='space-y-4 max-w-3xl mx-auto text-center mb-12'>
						<h2 className='text-3xl font-bold'>Get In Touch</h2>
						<div className='w-20 h-1 bg-primary mx-auto'></div>
						<p className='text-muted-foreground'>Let's work together</p>
					</div>
					<div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
						<Card className='hover:shadow-lg transition-shadow'>
							<CardContent className='p-8'>
								<h3 className='text-xl font-semibold mb-6'>
									Contact Information
								</h3>
								<div className='space-y-6'>
									<div className='flex items-center gap-4'>
										<div className='bg-primary/10 p-3 rounded-full'>
											<Mail className='h-6 w-6 text-primary' />
										</div>
										<div>
											<p className='text-sm text-muted-foreground'>Email</p>
											<p className='font-medium'>itsmehxrsh@gmail.com</p>
										</div>
									</div>
									<div className='flex items-center gap-4'>
										<div className='bg-primary/10 p-3 rounded-full'>
											<Phone className='h-6 w-6 text-primary' />
										</div>
										<div>
											<p className='text-sm text-muted-foreground'>Phone</p>
											<p className='font-medium'>+91 99305-46775</p>
										</div>
									</div>
									<div className='flex items-center gap-4'>
										<div className='bg-primary/10 p-3 rounded-full'>
											<MapPin className='h-6 w-6 text-primary' />
										</div>
										<div>
											<p className='text-sm text-muted-foreground'>Location</p>
											<p className='font-medium'>Mumbai, India</p>
										</div>
									</div>
								</div>
								<div className='mt-8'>
									<h4 className='font-medium mb-4'>Connect with me</h4>
									<div className='flex gap-4'>
										<Link
											href='https://github.com/imhxrsh'
											target='_blank'
											className='bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors'
										>
											<Github className='h-5 w-5 text-primary' />
											<span className='sr-only'>GitHub</span>
										</Link>
										<Link
											href='https://linkedin.com/in/itsmehxrsh'
											target='_blank'
											className='bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors'
										>
											<Linkedin className='h-5 w-5 text-primary' />
											<span className='sr-only'>LinkedIn</span>
										</Link>
										<Link
											href='mailto:itsmehxrsh@gmail.com'
											className='bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors'
										>
											<Mail className='h-5 w-5 text-primary' />
											<span className='sr-only'>Email</span>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>
						<DiscordContactForm />
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className='border-t py-8 md:py-10'>
				<div className='container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center'>
					<div className='text-center md:text-left mb-6 md:mb-0'>
						<p className='text-sm text-muted-foreground'>
							© {new Date().getFullYear()} Harsh Vishwakarma. All rights
							reserved.
						</p>
					</div>
					<div className='flex flex-wrap justify-center gap-4'>
						<Button variant='ghost' size='sm' asChild>
							<Link href='#about'>About</Link>
						</Button>
						<Button variant='ghost' size='sm' asChild>
							<Link href='#experience'>Experience</Link>
						</Button>
						<Button variant='ghost' size='sm' asChild>
							<Link href='#skills'>Skills</Link>
						</Button>
						<Button variant='ghost' size='sm' asChild>
							<Link href='#projects'>Projects</Link>
						</Button>
						<Button variant='ghost' size='sm' asChild>
							<Link href='#contact'>Contact</Link>
						</Button>
					</div>
				</div>
			</footer>
		</div>
	);
}
