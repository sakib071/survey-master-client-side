import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <div className="card pt-52 w-1/3 mx-auto h-[70vh]">
                        <CheckoutForm></CheckoutForm>
                    </div>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;