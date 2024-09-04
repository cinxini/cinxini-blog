import { ref, toValue, watchEffect } from "vue";
export function useNuxtDisplay(breakpoint) {
    const width = ref("60%");
    const coverImgWidth = ref(90);
    const descriptionCharMax = ref(250);
    const metaDescriptionWidth = ref("80%");

    function getContainerWidth(size) {
        switch (size) {
            case "mobile":
            case "mobileMedium":
            case "mobileWide":
                return "98%";
            case "tablet":
                return "80%";
            case "desktop":
            case "desktopMedium":
            case "desktopWide":
                return "60%";
        }
    }

    function getConverImgWidth(size) {
        switch (size) {
            case "mobile":
            case "mobileMedium":
                return 90;
            case "mobileWide":
            case "tablet":
                return 100;
            case "desktop":
            case "desktopMedium":
            case "desktopWide":
                return 120;
        }
    }

    function getDescriptionWidth(size) {
        switch (size) {
            case "mobile":
            case "mobileMedium":
                return "95%";
            case "mobileWide":
            case "tablet":
                return "90%";
            case "desktop":
            case "desktopMedium":
            case "desktopWide":
                return "80%";
        }
    }

    function getDescriptionCharMax(size) {
        switch (size) {
            case "mobile":
            case "mobileMedium":
                return "0";
            case "mobileWide":
                return "100";
            case "tablet":
            case "desktop":
            case "desktopMedium":
            case "desktopWide":
                return "200";
        }
    }

    watchEffect(() => {
        console.log("nuxtDisplay watcheffect", toValue(toValue(breakpoint)));
        width.value = getContainerWidth(toValue(breakpoint));
        coverImgWidth.value = getConverImgWidth(toValue(breakpoint));
        descriptionCharMax.value = getDescriptionCharMax(toValue(breakpoint));
        metaDescriptionWidth.value = getDescriptionWidth(toValue(breakpoint));
    });

    return { width, coverImgWidth, descriptionCharMax, metaDescriptionWidth };
}
