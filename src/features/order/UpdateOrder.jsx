import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
    const fetcher = useFetcher();
    const isUpdating = fetcher.state === "submitting";

    return (
        <fetcher.Form method="PATCH" className="text-right">
            <Button disabled={isUpdating} type="small">
                {isUpdating ? "prioritizing..." : "Make Priority"}
            </Button>
        </fetcher.Form>
    );
}

export default UpdateOrder;

export async function updateOrderAction({ params }) {
    const data = { priority: true };
    await updateOrder(params.orderId, data);
    return null;
}
