import { cn } from '../lib/util';

const MaxWidthWrapper = ({
	className,
	children,
}: {
	className?: String;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
				className
			)}
		>
			{children}
		</div>
	);
};

export default MaxWidthWrapper;
