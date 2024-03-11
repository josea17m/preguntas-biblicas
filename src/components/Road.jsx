/* eslint-disable react/prop-types */

const Road = ({ road }) => {
  return (
    <div className="flex items-center justify-center h-1/4">
      <div>Vas por la pregunta: <span className="text-[#2549ac] font-bold">{road}</span> </div>
    </div>
  );
};

export default Road;
