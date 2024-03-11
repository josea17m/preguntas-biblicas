/* eslint-disable react/prop-types */


const Modal = ({ modal }) => {
  return (
    <div
    className={`${
      modal ? "h-screen" : "h-0"
    } w-screen overflow-hidden duration-300 bg-black absolute top-0 text-white"`}
  >
    <p className="relative top-1/3">Cargando nueva partida...</p>
  </div>
  )
}

export default Modal
