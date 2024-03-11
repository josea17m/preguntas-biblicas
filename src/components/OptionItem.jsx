/* eslint-disable react/prop-types */
const OptionItem = ({ r, handle, option, letter }) => {
  return (
    <div className="flex items-center bg-[#8ccbff] hover:bg-blue-400 duration-150 border-2 border-[#2549ac]">
      <p className="w-1/12">{letter}</p>
      <p
        onClick={() => handle(r)}
        ref={r}
        className="w-11/12 py-4 h-full cursor-pointer "
      >
        {option}
      </p>
    </div>
  );
};

export default OptionItem;
