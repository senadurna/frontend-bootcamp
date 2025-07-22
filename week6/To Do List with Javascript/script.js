const input = document.getElementById("task");
const list = document.getElementById("list");
const successToast = document.querySelector(".toast.success");
const errorToast = document.querySelector(".toast.error");

// Görevleri localStorage'a kaydet
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#list li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent.trim(),
      checked: li.classList.contains("checked")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// localStorage'dan görevleri yükle
function loadTasks() {
  const stored = localStorage.getItem("tasks");

  if (!stored) {
    // İlk yükleme: HTML'deki görevleri localStorage'a kaydet
    saveTasks(); 
    return;
  }

  const tasks = JSON.parse(stored);
  list.innerHTML = ""; // varsa eski HTML'dekileri temizle
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.checked) li.classList.add("checked");
    addCloseButton(li);
    list.appendChild(li);
  });
}


function showToast(toastElement) {
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}

function addCloseButton(li) {
  const closeBtn = document.createElement("span");
  closeBtn.className = "close";
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  } );
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
  saveTasks();
}

document.querySelectorAll("#list li").forEach((li) => {
  addCloseButton(li);
});

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveTasks();
  }
});

// Sayfa açıldığında görevleri yükle
loadTasks();

//"Varsayılana Sıfırla" Butonu
function resetToDefault() {
  localStorage.removeItem("tasks");
  location.reload(); // sayfayı yenile
}
