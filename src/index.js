let form = document.querySelector("form");
let input = form.querySelector("input[type=number]");

async function senData(value) {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(value),
  });
  let result = await res.json();
  return result;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  senData({ req: value }).then((res) => {
    alert("answer is: " + res.req);
  });
  input.value = "";
});
