import { FC } from "react";
import TextBlock from "../molecules/TextBlock";

const NotFoundPage: FC = () => {
  return (
    <div className="max-w-[1024px] m-auto text-center space-y-2">
      <TextBlock
        headingAs="h1"
        headingStyledAs="h2"
        paragraphAs="h2"
        paragraphStyledAs="h4"
        headingText="404"
      >
        Page not found 😢
      </TextBlock>
    </div>
  );
};
export default NotFoundPage;
