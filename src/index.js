import "./styles.css";
const onClickAdd = () => {
  const input_txt = document.querySelector("#add-txt").value;
  document.querySelector("#add-txt").value = "";

  const div = document.createElement("div");
  console.log(div);
};

document.querySelector("#add-btn").addEventListener("click", () => {
  onClickAdd();
});
