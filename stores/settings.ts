import { persistOptions } from "~/utils/persistence";
import { TestViews } from "~/types/ui/TestViews";

export const useSettingsStore = defineStore(
	"settings-store",
	() => {
		const primaryColor = ref("violet");
		const grayColor = ref("zinc");

		const testsView = ref(TestViews.LIST);

		const setPrimaryColor = (color: string) => {
			primaryColor.value = color;
		};

		const setGrayColor = (color: string) => {
			grayColor.value = color;
		};

		const setTestsView = (view: number) => {
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
