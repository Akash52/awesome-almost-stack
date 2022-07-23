import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const Colors = () => {
  const [colorNames] = React.useState([
    "#FEA47F",
    "#25CCF7",
    "#EAB543",
    "#55E6C1",
    "#CAD3C8",
    "#F97F51",
    "#1B9CFC",
    "#FFEB3B",
    "#58B19F",
    "#2C3A47",
    "#B33771",
    "#3B3B98",
    "#FD7272",
    "#9AECDB",
    "#D6A2E8",
    "#6D214F",
    "#182C61",
    "#FC427B",
    "#BDC581",
    "#82589F",
  ]);
  const copyColor = (e) => {
    let color = e.target.innerText;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color);
      navigator.clipboard.readText();
      toast.success(`you have copiied ${color} value succesfully`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="row">
      {colorNames.map((color) => (
        <div
          className="item"
          key={color}
          style={{ background: color }}
          onClick={copyColor}
        >
          <div>{color}</div>
        </div>
      ))}
    </div>
  );
};

export default Colors;
