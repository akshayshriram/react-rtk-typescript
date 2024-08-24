import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";

import { ordered, restocked } from "./icecreamSlice";

const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCream = useAppSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of Ice Creams : {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <input
        type="number"
        name=""
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        id=""
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restore Ice Creams
      </button>
    </div>
  );
};

export default IceCreamView;
