const input = document.getElementById("task");
const list = document.getElementById("list");
const successToast = document.querySelector(".toast.success");
const errorToast = document.querySelector(".toast.error");

function showToast(toastElement) {
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}

function addCloseButton(li) {
  const closeBtn = document.createElement("span");
  closeBtn.className = "close";
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", () => li.remove());
  li.appendChild(closeBtn);
}

function newElement() {
  const task = input.value.trim();
  if (task === "") {
    showToast(errorToast);
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;
  addCloseButton(li);
  list.appendChild(li);
  input.value = "";

  showToast(successToast);
}

document.querySelectorAll("#list li").forEach((li) => {
  addCloseButton(li);
});

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});
