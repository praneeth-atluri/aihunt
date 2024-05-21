"use client";
import Link from "next/link";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Homepage() {
	return (
		<div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
			<header className="px-4 lg:px-6 py-6 flex items-center justify-between">
				<Link className="flex items-center justify-center" href="#">
					<BotIcon className="h-6 w-6" />
					<span className="sr-only">The AI Hunt</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						Featured
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						Podcasts
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						Resources
					</Link>
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Explore the Future of AI
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
									Discover the latest AI products, resources,
									and insights from the community. Stay ahead
									of the curve and unlock the potential of
									artificial intelligence.
								</p>
							</div>
							<div className="space-x-4">
								<Link
									className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
									href="#">
									Explore Products
								</Link>
								<Link
									className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
									href="#">
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
									Featured Products
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Cutting-Edge AI Solutions
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Explore the latest AI products from our
									community, designed to revolutionize the way
									you work and live.
								</p>
							</div>
							<div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
								<Card>
									<CardHeader>
										<CardTitle>AI Chatbot</CardTitle>
										<CardDescription>
											Engage in natural conversations with
											our advanced AI chatbot.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<img
											alt="AI Chatbot"
											className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
											height="310"
											src="/placeholder.svg"
											width="550"
										/>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Image Generation</CardTitle>
										<CardDescription>
											Create stunning visuals with our
											AI-powered image generation tool.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<img
											alt="Image Generation"
											className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
											height="310"
											src="/placeholder.svg"
											width="550"
										/>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>
											AI Writing Assistant
										</CardTitle>
										<CardDescription>
											Enhance your writing with our
											AI-powered writing assistant.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<img
											alt="AI Writing Assistant"
											className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
											height="310"
											src="/placeholder.svg"
											width="550"
										/>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
									AI Insights
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Podcasts from AI Leaders
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Stay up-to-date with the latest AI trends
									and insights from industry experts and
									thought leaders.
								</p>
							</div>
							<div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
								<Card>
									<CardHeader>
										<CardTitle>AI Ethics</CardTitle>
										<CardDescription>
											Exploring the ethical implications
											of AI with Dr. Jane Smith.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<img
											alt="AI Ethics"
											className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
											height="310"
											src="/placeholder.svg"
											width="550"
										/>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>AI in Healthcare</CardTitle>
										<CardDescription>
											Revolutionizing healthcare with AI
											with Dr. Michael Johnson.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<img
											alt="AI in Healthcare"
											className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
											height="310"
											src="/placeholder.svg"
											width="550"
										/>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>AI and Creativity</CardTitle>
										<CardDescription>
											Exploring the intersection of AI and
											creativity with artist Sarah Lee.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<img
											alt="AI and Creativity"
											className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
											height="310"
											src="/placeholder.svg"
											width="550"
										/>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container grid items-center gap-4 px-4 md:px-6">
						<div className="space-y-3">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Unlock the Power of AI
							</h2>
							<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Explore our extensive collection of AI
								resources, tutorials, and guides to stay ahead
								of the curve.
							</p>
						</div>
						<div className="w-full max-w-sm space-y-2">
							<form className="flex space-x-2">
								<Input
									className="max-w-lg flex-1"
									placeholder="Enter your email"
									type="email"
								/>
								<Button type="submit">Subscribe</Button>
							</form>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								Stay updated with the latest AI news and
								resources.
								<Link
									className="underline underline-offset-2"
									href="#">
									Terms & Conditions
								</Link>
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					© 2024 The AI Hunt. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#">
						Privacy Policy
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#">
						Terms of Use
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#">
						Contact
					</Link>
				</nav>
			</footer>
		</div>
	);
}

interface BotIconProps extends React.SVGProps<SVGSVGElement> {}

function BotIcon(props: BotIconProps) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M12 8V4H8" />
			<rect width="16" height="12" x="4" y="8" rx="2" />
			<path d="M2 14h2" />
			<path d="M20 14h2" />
			<path d="M15 13v2" />
			<path d="M9 13v2" />
		</svg>
	);
}
