import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutfrom from "./Checkoutfrom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please Pay First To get food"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <Checkoutfrom></Checkoutfrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;