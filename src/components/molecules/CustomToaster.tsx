import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const CustomToaster: FC = () => {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "25px" }}
      toastOptions={{
        success: {
          duration: 2000,
          style: {
            backgroundColor: "#1098ad",
            color: "#f1f3f5",
          },
          icon: (
            <FaCheck className="text-2xl border-2 border-white rounded-full animate-pulse" />
          ),
        },
        error: {
          duration: 2000,
          style: {
            backgroundColor: "#ff7d4d",
            color: "#f1f3f5",
          },
          icon: (
            <RxCross2 className="text-2xl border-2 border-white rounded-full animate-pulse" />
          ),
        },
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "white",
          color: "black",
        },
      }}
    />
  );
};
export default CustomToaster;
