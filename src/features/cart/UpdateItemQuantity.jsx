import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./_cartSlice";

function UpdateItemQuantity({ pizzaId, quantity }) {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center gap-3">
            <Button
                onClick={() => dispatch(increaseItemQuantity(pizzaId))}
                type="round"
            >
                +
            </Button>
            <span>{quantity}</span>
            <Button
                onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
                type="round"
            >
                -
            </Button>
        </div>
    );
}

export default UpdateItemQuantity;
