let elInput = document.querySelector(".number__input");
let elButton = document.querySelector(".button");
let elResult = document.querySelector(".result");

elButton.addEventListener("click", (evt) => {
    evt.preventDefault();

    let inputValue = elInput.value;

    switch (inputValue) {
        case "1":
            elResult.textContent = "Monday";
            elResult.classList = "text-decoration-none, text-info";
            break;
        case "2":
            elResult.textContent = "Seshanba";
            elResult.classList = "text-decoration-none, text-info";
            break;
        case "3":
            elResult.textContent = "Chorshanba";
            elResult.classList = "text-decoration-none, text-info";
            break;
        case "4":
            elResult.textContent = "Payshnaba";
            elResult.classList = "text-decoration-none, text-info";
            break;
        case "5":
            elResult.textContent = "Juma";
            elResult.classList = "text-decoration-none, text-info";
            break;
        case "6":
            elResult.textContent = "Shanba";
            elResult.classList = "text-decoration-none, text-info";
            break;
        case "7":
            elResult.textContent = "Yakshanba";
            elResult.classList = "text-decoration-none, text-info";
            break;

        default:
            elResult.textContent = "Bunday kun mavjud emas!";
            elResult.classList = "text-decoration-line-through";
    }
});