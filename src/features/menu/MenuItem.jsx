import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getItemQuantityById } from "../cart/_cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    const quantityInCart = useSelector(getItemQuantityById(id));
    const itemInCart = quantityInCart > 0;

    const dispatch = useDispatch();

    function handleAddtoCart() {
        const newItem = {
            pizzaId: id,
            name: name,
            quantity: 1,
            unitPrice: unitPrice,
            totalPrice: unitPrice * 1,
        };

        dispatch(addItem(newItem));
    }

    return (
        <li className="flex gap-4 py-2">
            <img
                className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
                src={imageUrl}
                alt={name}
            />
            <div className="flex flex-grow flex-col pt-0.5">
                <p>{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {ingredients.join(", ")}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="text-sm">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}

                    {itemInCart && (
                        <div className="flex items-center gap-3">
                            <UpdateItemQuantity
                                pizzaId={id}
                                quantity={quantityInCart}
                            />
                            <DeleteItem pizzaId={id} />
                        </div>
                    )}

                    {soldOut && (
                        <Button disabled={true} type="secondary">
                            sold out
                        </Button>
                    )}

                    {!soldOut && !itemInCart && (
                        <Button type="small" onClick={handleAddtoCart}>
                            Add to Cart
                        </Button>
                    )}
                </div>
            </div>
        </li>
    );
}

export default MenuItem;
