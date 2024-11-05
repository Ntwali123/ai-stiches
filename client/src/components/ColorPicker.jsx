import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#DA3916",
          "#E72929",
          "#0a0a0a",
          "#353934",
          "#DDDDDD",
          "#EEEEEE",
          "#FBF3D5",
          "#FFAF45",
          "#401F71",
          "#008DDA",
          "#65B741",
          "#B67352"
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker