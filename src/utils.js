import { toast } from "react-toastify";



export const notify = (msg, type = "info") => {
    const options = {
        position: "top-left",
        autoClose: 2000,
        theme: "colored",
        transition: Bounce,
    };

    switch (type) {
        case "success":
            toast.success(msg, options);
            break;
        case "error":
            toast.error(msg, options);
            break;
        case "warn":
            toast.warn(msg, options);
            break;
        default:
            toast(msg, options);
    }
};
