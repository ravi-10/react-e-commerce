import React from 'react';
import { connect } from 'react-redux';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, clearCart }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_PCNner1JbVxef3o98nZc7st100ifqPNDhA';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            clearCart();
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please make sure you use the provided credit card.');
        });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='React E-Commerce'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

const mapDispatchToProps = dispatch => ({
    clearCart: item => dispatch(clearCart())
});

export default connect(
    null,
    mapDispatchToProps
)(StripeCheckoutButton);