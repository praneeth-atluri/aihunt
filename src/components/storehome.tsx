import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Storehome() {
	return (
		<main className="flex flex-col gap-12 py-12 md:py-16 lg:py-24">
			<section className="container px-4 md:px-6">
				<div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Discover the Best AI Apps
							</h1>
							<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
								Explore a curated selection of cutting-edge AI
								applications to enhance your productivity and
								unlock new possibilities.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button
								className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								size="lg">
								Explore Apps
							</Button>
							<Button
								className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
								size="lg"
								variant="outline">
								Submit App
							</Button>
						</div>
					</div>
					<img
						alt="Hero"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
						height="310"
						src="/placeholder.svg"
						width="550"
					/>
				</div>
			</section>
			<section className="container px-4 md:px-6">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<div className="flex flex-wrap items-center gap-2">
						<Button
							className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
							size="sm"
							variant="outline">
							All Categories
						</Button>
						<Button
							className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
							size="sm"
							variant="outline">
							Featured
						</Button>
						<Button
							className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
							size="sm"
							variant="outline">
							Free
						</Button>
						<Button
							className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
							size="sm"
							variant="outline">
							Trending
						</Button>
					</div>
					<div className="flex items-center gap-2">
						<Input
							className="max-w-lg flex-1 bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
							placeholder="Search apps..."
							type="search"
						/>
						<Button
							className="rounded-full border border-gray-200 w-9 h-9 dark:border-gray-800"
							size="icon"
							variant="outline">
							<FilterIcon className="h-5 w-5" />
							<span className="sr-only">Filter</span>
						</Button>
					</div>
				</div>
			</section>
			<section className="container px-4 md:px-6">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					<div className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
						<div className="flex items-center justify-between">
							<img
								alt="Logo"
								className="rounded-lg"
								height="48"
								src="/placeholder.svg"
								style={{
									aspectRatio: "48/48",
									objectFit: "cover",
								}}
								width="48"
							/>
							<Button
								className="opacity-0 group-hover:opacity-100"
								size="icon"
								variant="ghost">
								<HeartIcon className="h-5 w-5" />
								<span className="sr-only">Favorite</span>
							</Button>
						</div>
						<div className="mt-4 space-y-1">
							<h3 className="text-lg font-medium">Acme AI</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Powerful AI-driven productivity tools.
							</p>
						</div>
					</div>
					<div className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
						<div className="flex items-center justify-between">
							<img
								alt="Logo"
								className="rounded-lg"
								height="48"
								src="/placeholder.svg"
								style={{
									aspectRatio: "48/48",
									objectFit: "cover",
								}}
								width="48"
							/>
							<Button
								className="opacity-0 group-hover:opacity-100"
								size="icon"
								variant="ghost">
								<HeartIcon className="h-5 w-5" />
								<span className="sr-only">Favorite</span>
							</Button>
						</div>
						<div className="mt-4 space-y-1">
							<h3 className="text-lg font-medium">Skynet AI</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Intelligent automation for your business.
							</p>
						</div>
					</div>
					<div className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
						<div className="flex items-center justify-between">
							<img
								alt="Logo"
								className="rounded-lg"
								height="48"
								src="/placeholder.svg"
								style={{
									aspectRatio: "48/48",
									objectFit: "cover",
								}}
								width="48"
							/>
							<Button
								className="opacity-0 group-hover:opacity-100"
								size="icon"
								variant="ghost">
								<HeartIcon className="h-5 w-5" />
								<span className="sr-only">Favorite</span>
							</Button>
						</div>
						<div className="mt-4 space-y-1">
							<h3 className="text-lg font-medium">Cognitio</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Cutting-edge AI solutions for enterprises.
							</p>
						</div>
					</div>
					<div className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
						<div className="flex items-center justify-between">
							<img
								alt="Logo"
								className="rounded-lg"
								height="48"
								src="/placeholder.svg"
								style={{
									aspectRatio: "48/48",
									objectFit: "cover",
								}}
								width="48"
							/>
							<Button
								className="opacity-0 group-hover:opacity-100"
								size="icon"
								variant="ghost">
								<HeartIcon className="h-5 w-5" />
								<span className="sr-only">Favorite</span>
							</Button>
						</div>
						<div className="mt-4 space-y-1">
							<h3 className="text-lg font-medium">Neuron AI</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Innovative AI tools for personal and
								professional use.
							</p>
						</div>
					</div>
					<div className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
						<div className="flex items-center justify-between">
							<img
								alt="Logo"
								className="rounded-lg"
								height="48"
								src="/placeholder.svg"
								style={{
									aspectRatio: "48/48",
									objectFit: "cover",
								}}
								width="48"
							/>
							<Button
								className="opacity-0 group-hover:opacity-100"
								size="icon"
								variant="ghost">
								<HeartIcon className="h-5 w-5" />
								<span className="sr-only">Favorite</span>
							</Button>
						</div>
						<div className="mt-4 space-y-1">
							<h3 className="text-lg font-medium">Athena AI</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Intelligent assistant for task automation.
							</p>
						</div>
					</div>
					<div className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
						<div className="flex items-center justify-between">
							<img
								alt="Logo"
								className="rounded-lg"
								height="48"
								src="/placeholder.svg"
								style={{
									aspectRatio: "48/48",
									objectFit: "cover",
								}}
								width="48"
							/>
							<Button
								className="opacity-0 group-hover:opacity-100"
								size="icon"
								variant="ghost">
								<HeartIcon className="h-5 w-5" />
								<span className="sr-only">Favorite</span>
							</Button>
						</div>
						<div className="mt-4 space-y-1">
							<h3 className="text-lg font-medium">Zephyr AI</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Streamline your workflows with AI automation.
							</p>
						</div>
					</div>
					<div className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
						<div className="flex items-center justify-between">
							<img
								alt="Logo"
								className="rounded-lg"
								height="48"
								src="/placeholder.svg"
								style={{
									aspectRatio: "48/48",
									objectFit: "cover",
								}}
								width="48"
							/>
							<Button
								className="opacity-0 group-hover:opacity-100"
								size="icon"
								variant="ghost">
								<HeartIcon className="h-5 w-5" />
								<span className="sr-only">Favorite</span>
							</Button>
						</div>
						<div className="mt-4 space-y-1">
							<h3 className="text-lg font-medium">Orion AI</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Intelligent data analysis and insights.
							</p>
						</div>
					</div>
					<div className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
						<div className="flex items-center justify-between">
							<img
								alt="Logo"
								className="rounded-lg"
								height="48"
								src="/placeholder.svg"
								style={{
									aspectRatio: "48/48",
									objectFit: "cover",
								}}
								width="48"
							/>
							<Button
								className="opacity-0 group-hover:opacity-100"
								size="icon"
								variant="ghost">
								<HeartIcon className="h-5 w-5" />
								<span className="sr-only">Favorite</span>
							</Button>
						</div>
						<div className="mt-4 space-y-1">
							<h3 className="text-lg font-medium">Artemis AI</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								AI-powered personal assistant for your
								tasks.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
		</svg>
	);
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
		</svg>
	);
}
