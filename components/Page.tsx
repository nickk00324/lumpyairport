import Header from "./Header";
import Meta from "./Meta";
import "./Page.scss";

const Page = (props: any) => {
  return (
    <div>
      <Meta />
      <Header />
      {props.children}
    </div>
  );
};

export default Page;
