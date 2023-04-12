import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51Mu3KzC0cUuTlBdXjR9VYVRXJTVS6puyqhBMc6vfvukD6PuQUujvH4Xj0ekFt0sY5MUXTDWKLHcMit0cmN8Yqo8w00R775N3BB"
);

const host = "http://10.0.2.2:5001/eat-bfbed/us-central1/pay";

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  })
    .then((res) => {
      if (res.status > 200) {
        return Promise.reject("something went wrong processing your payment");
      }
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
};
