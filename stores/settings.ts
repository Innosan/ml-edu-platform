import { persistOptions } from "~/utils/persistence";

export const useSettingsStore = defineStore(
	"settings-store",
	() => {
		const primaryColor = ref("violet");
		const grayColor = ref("zinc");

		const testsView = ref("list");

		const setPrimaryColor = (color: string) => {
			primaryColor.value = color;
		};

		const setGrayColor = (color: string) => {
			grayColor.value = color;
		};

		const setTestsView = (view: "list" | "calendar") => {
			testsView.value = view;
		};

		return {
			primaryColor,
			grayColor,
			testsView,
			setPrimaryColor,
			setGrayColor,
			setTestsView,
		};
	},
	{
		persist: persistOptions.cookieDefault,
	},
);
