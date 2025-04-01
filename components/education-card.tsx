import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

interface EducationCardProps {
	institution: string;
	degree: string;
	duration: string;
	location: string;
	gpa?: string;
}

export default function EducationCard({
	institution,
	degree,
	duration,
	location,
	gpa,
}: EducationCardProps) {
	return (
		<Card className='hover:shadow-lg transition-shadow'>
			<CardContent className='p-6'>
				<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2'>
					<div>
						<h3 className='text-xl font-bold'>{institution}</h3>
						<p className='text-muted-foreground mt-1'>{degree}</p>
						{gpa && (
							<p className='text-sm font-medium text-primary mt-1'>{gpa}</p>
						)}
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
			</CardContent>
		</Card>
	);
}
