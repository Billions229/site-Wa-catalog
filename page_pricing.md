You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
pricing-card.tsx
import React from 'react';
import { cn } from '@/lib/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'bg-card relative w-full max-w-xs rounded-xl dark:bg-transparent',
				'p-1.5 shadow-xl backdrop-blur-xl',
				'dark:border-border/80 border',
				className,
			)}
			{...props}
		/>
	);
}

function Header({
	className,
	children,
	glassEffect = true,
	...props
}: React.ComponentProps<'div'> & {
	glassEffect?: boolean;
}) {
	return (
		<div
			className={cn(
				'bg-muted/80 dark:bg-muted/50 relative mb-4 rounded-xl border p-4',
				className,
			)}
			{...props}
		>
			{/* Top glass gradient */}
			{glassEffect && (
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 h-48 rounded-[inherit]"
					style={{
						background:
							'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 100%)',
					}}
				/>
			)}
			{children}
		</div>
	);
}

function Plan({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn('mb-8 flex items-center justify-between', className)}
			{...props}
		/>
	);
}

function Description({ className, ...props }: React.ComponentProps<'p'>) {
	return (
		<p className={cn('text-muted-foreground text-xs', className)} {...props} />
	);
}

function PlanName({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				"text-muted-foreground flex items-center gap-2 text-sm font-medium [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function Badge({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				'border-foreground/20 text-foreground/80 rounded-full border px-2 py-0.5 text-xs',
				className,
			)}
			{...props}
		/>
	);
}

function Price({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div className={cn('mb-3 flex items-end gap-1', className)} {...props} />
	);
}

function MainPrice({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn('text-3xl font-extrabold tracking-tight', className)}
			{...props}
		/>
	);
}

function Period({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn('text-foreground/80 pb-1 text-sm', className)}
			{...props}
		/>
	);
}

function OriginalPrice({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				'text-muted-foreground mr-1 ml-auto text-lg line-through',
				className,
			)}
			{...props}
		/>
	);
}

function Body({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={cn('space-y-6 p-3', className)} {...props} />;
}

function List({ className, ...props }: React.ComponentProps<'ul'>) {
	return <ul className={cn('space-y-3', className)} {...props} />;
}

function ListItem({ className, ...props }: React.ComponentProps<'li'>) {
	return (
		<li
			className={cn(
				'text-muted-foreground flex items-start gap-3 text-sm',
				className,
			)}
			{...props}
		/>
	);
}

function Separator({
	children = 'Upgrade to access',
	className,
	...props
}: React.ComponentProps<'div'> & {
	children?: string;
	className?: string;
}) {
	return (
		<div
			className={cn(
				'text-muted-foreground flex items-center gap-3 text-sm',
				className,
			)}
			{...props}
		>
			<span className="bg-muted-foreground/40 h-[1px] flex-1" />
			<span className="text-muted-foreground shrink-0">{children}</span>
			<span className="bg-muted-foreground/40 h-[1px] flex-1" />
		</div>
	);
}

export {
	Card,
	Header,
	Description,
	Plan,
	PlanName,
	Badge,
	Price,
	MainPrice,
	Period,
	OriginalPrice,
	Body,
	List,
	ListItem,
	Separator,
};


demo.tsx
'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import * as PricingCard from '@/components/ui/pricing-card';
import {
	CheckCircle2,
	Users,
	Building,
	Briefcase,
} from 'lucide-react';


function MultiCards() {
	const plans = [
		{
			icon: <Users />,
			description: 'Perfect for individuals',
			name: 'Basic',
			price: 'Free',
			variant: 'outline',
			features: [
				'Automated Meeting Scheduling',
				'Basic Calendar Sync',
				'Daily Schedule Overview',
				'Email Reminders',
				'Task Management',
				'24/7 Customer Support',
				'Single User Access',
				'Basic Reporting',
				'Mobile App Access',
			],
		},
		{
			icon: <Briefcase />,
			description: 'Ideal for small teams',
			name: 'Pro',
			badge: 'Popular',
			price: '$29',
			original: '$39',
			period: '/month',
			variant: 'default',
			features: [
				'All Basic Plan Features',
				'Advanced Calendar Integrations',
				'Customizable Notifications',
				'Priority Support',
				'Analytics and Insights',
				'Group Scheduling',
				'Multiple User Roles',
				'Advanced Reporting',
				'Custom Branding Options',
			],
		},
		{
			icon: <Building />,
			name: 'Enterprise',
			description: 'Perfect for large scale companies',
			price: '$99',
			original: '$129',
			period: '/month',
			variant: 'outline',
			features: [
				'All Pro Plan Features',
				'Dedicated Account Manager',
				'Custom Integrations',
				'Advanced Security Features',
				'Team Collaboration Tools',
				'Onboarding and Training',
				'Unlimited Users',
				'API Access with Higher Limits',
				'Advanced Audit Logs',
			],
		},
	];

	const handleClick = (plan: string) => {
		alert(`Selected ${plan} plan!`);
	};

	return (
		<section className="grid gap-4 p-6 md:grid-cols-3">
			{plans.map((plan) => (
				<PricingCard.Card className="md:min-w-[260px]" key={plan.name}>
					<PricingCard.Header>
						<PricingCard.Plan>
							<PricingCard.PlanName>
								{plan.icon}
								<span className="text-muted-foreground">{plan.name}</span>
							</PricingCard.PlanName>
							{plan.badge && (
								<PricingCard.Badge>{plan.badge}</PricingCard.Badge>
							)}
						</PricingCard.Plan>
						<PricingCard.Price>
							<PricingCard.MainPrice>{plan.price}</PricingCard.MainPrice>
							<PricingCard.Period>{plan.period}</PricingCard.Period>
							{plan.original && (
								<PricingCard.OriginalPrice className="ml-auto">
									{plan.original}
								</PricingCard.OriginalPrice>
							)}
						</PricingCard.Price>
						<Button
							variant={plan.variant as any}
							className={cn('w-full font-semibold')}
							onClick={() => handleClick(plan.name)}
						>
							Get Started
						</Button>
					</PricingCard.Header>

					<PricingCard.Body>
						<PricingCard.Description>
							{plan.description}
						</PricingCard.Description>
						<PricingCard.List>
							{plan.features.map((item) => (
								<PricingCard.ListItem key={item}>
									<CheckCircle2
										className="text-foreground h-4 w-4"
										aria-hidden="true"
									/>
									<span>{item}</span>
								</PricingCard.ListItem>
							))}
						</PricingCard.List>
					</PricingCard.Body>
				</PricingCard.Card>
			))}
		</section>
	);
}


export default function Page() {
	return (
		<main
			className={cn(
				'relative min-h-svh w-full overflow-hidden',
				'flex items-center justify-center p-4',
			)}
		>
    
      {/* Subtle dotted grid */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage:
						'radial-gradient(rgba(255,255,255,0.08) 0.8px, transparent 0.8px)',
					backgroundSize: '14px 14px',
					maskImage:
						'radial-gradient( circle at 50% 10%, rgba(0,0,0,1), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70% )',
				}}
			/>

			{/* Left spotlight */}
						<div
				aria-hidden="true"
				className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
			>
				<div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
				<div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
				<div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
			</div>
			<MultiCards />
		</main>
	);
}


```

Copy-paste these files for dependencies:
```tsx
shadcn/button
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

Install NPM dependencies:
```bash
@radix-ui/react-slot, class-variance-authority
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
