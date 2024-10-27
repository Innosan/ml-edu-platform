import { getToast, Toasts } from "~/types/ui/Notification";

export type ResponseInfo = {
	status: number;
	success: boolean;
	notification: Partial<Notification>;
};

export const success = (description?: string): ResponseInfo => ({
	status: 200,
	success: true,
	notification: getToast(Toasts.SUCCESS, description),
});

export const errored = (description?: string): ResponseInfo => ({
	status: 400,
	success: false,
	notification: getToast(Toasts.ERROR, description),
});
