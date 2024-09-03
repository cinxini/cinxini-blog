import { ref, toValue, watchEffect } from "vue";
export function useResponsiveContainer(name) {
    const width = ref("60%");
    const coverImgWidth = ref(90);
    const descriptionCharMax = ref(250);

    function getContainerWidth(size) {
        switch (size) {
            case "xs":
                return "98%";
            case "sm":
                return "80%";
            case "md":
                return "60%";
            case "lg":
                return "60%";
            case "xl":
                return "60%";
            case "xxl":
                return "60%";
        }
    }

    function getConverImgWidth(size) {
        switch (size) {
            case "xs":
                return 90;
            case "sm":
                return 100;
            case "md":
                return 120;
            case "lg":
                return 120;
            case "xl":
                return 120;
            case "xxl":
                return 120;
        }
    }

    function getDescriptionCharMax(size) {
        switch (size) {
            case "xs":
                return 0;
            case "sm":
                return 100;
            case "md":
                return 150;
            case "lg":
                return 250;
            case "xl":
                return 250;
            case "xxl":
                return 350;
        }
    }

    watchEffect(() => {
        width.value = getContainerWidth(toValue(name));
        coverImgWidth.value = getConverImgWidth(toValue(name));
        descriptionCharMax.value = getDescriptionCharMax(toValue(name));
    });

    return { width, coverImgWidth, descriptionCharMax };
}
