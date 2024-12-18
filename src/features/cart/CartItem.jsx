import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getItemQuantityById } from "./_cartSlice";
import { useSelector } from "react-redux";

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item;
    const quantityInCart = useSelector(getItemQuantityById(pizzaId));

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <div className="flex items-center gap-3 sm:gap-5">
                    <UpdateItemQuantity
                        pizzaId={pizzaId}
                        quantity={quantityInCart}
                    />
                    <DeleteItem pizzaId={pizzaId} />
                </div>
            </div>
        </li>
    );
}

export default CartItem;
