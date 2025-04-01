import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ExperienceCardProps {
	position: string;
	company: string;
	duration: string;
	location: string;
	responsibilities: string[];
	websiteUrl?: string;
}

export default function ExperienceCard({
	position,
	company,
	duration,
	location,
	responsibilities,
	websiteUrl,
}: ExperienceCardProps) {
	return (
		<Card className='hover:shadow-lg transition-shadow'>
			<CardContent className='p-6'>
				<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2'>
					<div>
						<h3 className='text-xl font-bold'>{position}</h3>
						<div className='flex items-center gap-2 mt-1'>
							<span className='font-medium'>{company}</span>
							{websiteUrl && (
								<Link
									href={websiteUrl}
									target='_blank'
									className='text-primary hover:text-primary/80 transition-colors'
								>
									<ExternalLink className='h-4 w-4' />
									<span className='sr-only'>Website</span>
								</Link>
							)}
						</div>
					</div>
					<div className='flex flex-col sm:items-end gap-1 text-sm text-muted-foreground'>
						<div className='flex items-center gap-1.5'>
							<Calendar className='h-4 w-4' />
							<span>{duration}</span>
						</div>
						<div className='flex items-center gap-1.5'>
							<MapPin className='h-4 w-4' />
							<span>{location}</span>
						</div>
					</div>
				</div>
				<ul className='space-y-3 mt-4'>
					{responsibilities.map((responsibility, index) => (
						<li key={index} className='flex items-start gap-3'>
							<span className='bg-primary/20 p-1 rounded-full mt-1 flex-shrink-0'>
								<span className='block w-1.5 h-1.5 bg-primary rounded-full'></span>
							</span>
							<span className='text-sm'>{responsibility}</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}
