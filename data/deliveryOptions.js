export const deliveryOptions = [
{
    id: "1",
    deliveryDays: 7,
    priceCents: 0

},
{
    id: "2",
    deliveryDays: 4,
    priceCents: 499
},
{
    id: "3",
    deliveryDays: 1,
    priceCents: 999
},

]

export function getDeliveryOptions(deliveryOptionId) {

    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId) {
          deliveryOption = option
        }
      })
      return deliveryOption;
}

