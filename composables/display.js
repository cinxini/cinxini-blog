import { ref, toValue, watchEffect } from "vue";
export function useResponsiveContainer(name) {
    const width = ref("60%");
    const coverImgWidth = ref(90);
    const descriptionCharLimit = ref(80);
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

    watchEffect(() => {
        width.value = getContainerWidth(toValue(name));
        coverImgWidth.value = getConverImgWidth(toValue(name));
    });

    return { width, coverImgWidth };
}
