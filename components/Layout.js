import Header from "./Header/Header";
import SubHeaders from "./SubHeader/subHeader";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <SubHeaders />
      {children}
    </>
  );
}
