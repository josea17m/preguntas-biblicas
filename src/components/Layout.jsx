/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div
      id="main"
      className="w-full bg-[#9fd4ff] h-screen flex text-center items-end"
    >
      {/* <div className="burbujas">
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
      </div> */}
      {children}
    </div>
  );
};

export default Layout;
