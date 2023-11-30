import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: '50' })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            });
    }, [axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card
            });

            if (error) {
                console.log('payment error', error);
                setError(error.message);
            } else {
                console.log('payment method', paymentMethod);
                setError('');
            }

            // confirm payment
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            });

            if (confirmError) {
                console.log('confirm error');
            } else {
                console.log('payment intent', paymentIntent);
                if (paymentIntent.status === 'succeeded') {
                    console.log('transaction id', paymentIntent.id);
                    setTransactionId(paymentIntent.id);

                    // now save the payment in the database
                    const payment = {
                        email: user.email,
                        transactionId: paymentIntent.id,
                        date: new Date(), // utc date convert. use moment js to
                        status: 'pending'
                    };

                    const res = await axiosSecure.post('/payments', payment);
                    console.log('payment saved', res.data);

                    if (res.data?.paymentResult?.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Thank you for the taka paisa",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        // Update user to Pro status
                        const updateUserResponse = await axiosSecure.patch(`/users/${user.id}`, {
                            email: user.email,
                            transactionId: paymentIntent.id,
                            role: 'pro'
                        });

                        if (updateUserResponse.data?.modifiedCount > 0) {
                            console.log('User status updated to Pro');
                        }

                        navigate('/dashboard/userHome');
                    }
                }
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="shadow-md p-10 rounded-md border-yellow-300 border-2">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-xs btn-neutral border-0 text-black hover:text-yellow-300 bg-yellow-300 mt-10 mb-4 px-6" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600 text-sm mt-4"> Your transaction is successful</p>}
        </form>
    );
};

export default CheckoutForm;
