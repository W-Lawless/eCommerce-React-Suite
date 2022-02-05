import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    
    const priceConversion = price * 100
    const publicKey  = 'pk_test_h4XTe3KB0gdP9FxMsKmMRYXe00WcZfaMj0'

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout 
            label='Test Payment' 
            name='eCommerceSuite'
            billingAddress
            shippingAddress
            amount={priceConversion}
            image='https://svgshare.com/i/CUz/svg'
            description={`Your total is ${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicKey}
        />
    )
}

export default StripeCheckoutButton