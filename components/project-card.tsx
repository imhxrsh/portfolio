import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	imageUrl: string;
	githubUrl?: string;
	liveUrl?: string;
}

export default function ProjectCard({
	title,
	description,
	tags,
	imageUrl,
	githubUrl,
	liveUrl,
}: ProjectCardProps) {
	return (
		<Card className='overflow-hidden group hover:shadow-lg transition-all'>
			<div className='relative overflow-hidden'>
				<img
					src={imageUrl || "/placeholder.svg"}
					alt={title}
					className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
				/>
				<div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
					{githubUrl && (
						<Link
							href={githubUrl}
							target='_blank'
							className='text-white flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-md hover:bg-primary transition-colors'
						>
							<Github className='h-4 w-4' /> Code
						</Link>
					)}
					{liveUrl && (
						<Link
							href={liveUrl}
							target='_blank'
							className='text-white flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-md hover:bg-primary transition-colors'
						>
							<ExternalLink className='h-4 w-4' /> Live
						</Link>
					)}
					{!githubUrl && !liveUrl && (
						<span className='text-white flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-md'>
							Coming Soon
						</span>
					)}
				</div>
			</div>
			<CardContent className='p-5'>
				<h3 className='font-bold text-xl mb-2'>{title}</h3>
				<p className='text-muted-foreground mb-4 text-sm'>{description}</p>
				<div className='flex flex-wrap gap-2'>
					{tags.map((tag, index) => (
						<Badge
							key={index}
							variant='secondary'
							className='px-2 py-0.5 text-xs'
						>
							{tag}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
