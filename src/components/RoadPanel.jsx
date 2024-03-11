/* eslint-disable react/prop-types */
import { useRef } from "react";

const RoadPanel = ({ roadPanel }) => {
  const roadPanelRef = useRef(null);

  return (
    <div
      ref={roadPanelRef}
      className={`${
        roadPanel ? "h-3/4 p-5" : "h-0"
      } road-panel flex flex-col items-center justify-between overflow-hidden w-full absolute bg-slate-900 z-20 duration-500`}
    >
      <div>
        <p>15</p>
      </div>
      <div>
        <p>14</p>
      </div>
      <div>
        <p>13</p>
      </div>
      <div>
        <p>12</p>
      </div>
      <div>
        <p>11</p>
      </div>
      <div>
        <p>10</p>
      </div>
      <div>
        <p>9</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>1</p>
      </div>
    </div>
  );
};

export default RoadPanel;
