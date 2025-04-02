"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import successAnimation from "./success-animation.json";

const Lottie = dynamic(() => import("lottie-react"), {
	ssr: false,
	loading: () => <div className='w-[150px] h-[150px]' />,
});

export default function DiscordContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");

		try {
			const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

			const embed = {
				title: "New Contact Form Submission",
				color: 0x5865f2,
				fields: [
					{ name: "Name", value: formData.name || "Not provided" },
					{ name: "Email", value: formData.email || "Not provided" },
					{ name: "Subject", value: formData.subject || "Not provided" },
					{ name: "Message", value: formData.message || "Not provided" },
					{ name: "Timestamp", value: new Date().toISOString() },
				],
			};

			const response = await fetch(webhookUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					embeds: [embed],
					username: "Website Contact Form",
					avatar_url: "https://cdn.discordapp.com/embed/avatars/0.png",
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to send message to Discord");
			}

			setIsSuccess(true);
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});

			setTimeout(() => setIsSuccess(false), 10000);
		} catch (err) {
			setError(
				err instanceof Error ? err.message : "An unknown error occurred"
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSuccess) {
		return (
			<Card className='hover:shadow-lg transition-shadow'>
				<CardContent className='p-8 flex flex-col items-center justify-center h-64'>
					<Lottie
						animationData={successAnimation}
						loop={false}
						style={{ width: 150, height: 150 }}
					/>
					<h3 className='text-xl font-semibold mt-4'>
						Message Sent Successfully!
					</h3>
					<p className='text-muted-foreground'>We'll get back to you soon.</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className='hover:shadow-lg transition-shadow'>
			<CardContent className='p-8'>
				<h3 className='text-xl font-semibold mb-6'>Send a Message</h3>
				<form className='space-y-6' onSubmit={handleSubmit}>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						<div className='space-y-2'>
							<label htmlFor='name' className='text-sm font-medium'>
								Name
							</label>
							<input
								id='name'
								value={formData.name}
								onChange={handleChange}
								className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
								placeholder='Your name'
							/>
						</div>
						<div className='space-y-2'>
							<label htmlFor='email' className='text-sm font-medium'>
								Email
							</label>
							<input
								id='email'
								type='email'
								value={formData.email}
								onChange={handleChange}
								className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
								placeholder='Your email'
								required
							/>
						</div>
					</div>
					<div className='space-y-2'>
						<label htmlFor='subject' className='text-sm font-medium'>
							Subject
						</label>
						<input
							id='subject'
							value={formData.subject}
							onChange={handleChange}
							className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
							placeholder='Subject of your message'
							required
						/>
					</div>
					<div className='space-y-2'>
						<label htmlFor='message' className='text-sm font-medium'>
							Message
						</label>
						<textarea
							id='message'
							value={formData.message}
							onChange={handleChange}
							className='flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
							placeholder='Your message'
							required
						/>
					</div>
					{error && <div className='text-red-500 text-sm'>{error}</div>}
					<Button className='w-full' type='submit' disabled={isSubmitting}>
						{isSubmitting ? "Sending..." : "Send Message"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
