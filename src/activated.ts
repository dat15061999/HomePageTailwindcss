export const handleChangeActivated = (e: string) => {
  const buttonCurrent = document.querySelector(e);

  const buttonRent = document.querySelector(".button-rent");
  const buttonBuy = document.querySelector(".button-buy");
  const buttonSell = document.querySelector(".button-sell");
  const activated = 'button-activated';
  const noActivated = 'button-not-activated';
  buttonCurrent?.classList.remove(noActivated);
  buttonCurrent?.classList.add(activated);

  if (buttonCurrent !== buttonRent) {
    buttonRent?.classList.remove(activated);
    buttonRent?.classList.add(noActivated);
  }
  if (buttonCurrent !== buttonBuy) {
    buttonBuy?.classList.remove(activated);
    buttonBuy?.classList.add(noActivated);
  }
  if (buttonCurrent !== buttonSell) {
    buttonSell?.classList.remove(activated);
    buttonSell?.classList.add(noActivated);
  }
}