export type SectionSize = {
	spacing: string;
	title: string;
	icon: string;
};

export const SectionSizes = {
	xs: {
		spacing: "gap-1",
		title: "text-sm",
		icon: "w-3 h-3",
	},
	sm: {
		spacing: "gap-2",
		title: "text-lg",
		icon: "w-4 h-4",
	},
	md: {
		spacing: "gap-4",
		title: "text-xl",
		icon: "w-6 h-6",
	},
} as const;

export type SectionSizeKey = keyof typeof SectionSizes;
