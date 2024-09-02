import { ref, toValue, watchEffect } from "vue";
export function useResponsiveContainer(name) {
    const width = ref("60%");

    function getContainerWidth(size) {
        switch (size) {
            case "xs":
                return "90%";
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

    watchEffect(() => {
        width.value = getContainerWidth(toValue(name));
    });

    return { width };
}
