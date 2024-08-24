import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes : {numOfCakes} </h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restore Cake</button>
    </div>
  );
};

export default CakeView;
