import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51Mu3KzC0cUuTlBdXjR9VYVRXJTVS6puyqhBMc6vfvukD6PuQUujvH4Xj0ekFt0sY5MUXTDWKLHcMit0cmN8Yqo8w00R775N3BB"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
