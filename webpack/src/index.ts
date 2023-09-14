const increment_button = document.querySelector(".inc-btn");
const decrement_button = document.querySelector(".dec-btn");
const value = document.querySelector(".value");

const increment = (): void => {
  if (value) {
    value.textContent = JSON.stringify(
      parseInt(value.textContent as string) + 1
    );
  }
};

const decrement = (): void => {
  if (value && parseInt(value.textContent as string) > 0) {
    value.textContent = JSON.stringify(
      parseInt(value.textContent as string) - 1
    );
  }
};

increment_button?.addEventListener("click", (e) => {
  e.preventDefault();

  increment();
});

decrement_button?.addEventListener("click", (e) => {
  e.preventDefault();

  decrement();
});
