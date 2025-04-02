document.getElementById("addRootFolder").addEventListener("click", function() {
    let folderName = prompt("Введите название папки:");
    if (folderName) {
        let root = document.createElement("div");
        root.classList.add("folder");
        root.innerHTML = folderName;
        root.addEventListener("click", function(event) {
            event.stopPropagation();
            addSubFolder(root, 1);
        });
        let container = document.createElement("div");
        container.classList.add("folder-content");
        root.appendChild(container);
        document.getElementById("folderTree").appendChild(root);
    }
});

function addSubFolder(parent, level) {
    if (level >= 12) {
        alert("Максимальная вложенность — 12 уровней!");
        return;
    }

    let folderName = prompt("Введите название вложенной папки:");
    if (folderName) {
        let subFolder = document.createElement("div");
        subFolder.classList.add("folder");
        subFolder.innerHTML = folderName;
        subFolder.addEventListener("click", function(event) {
            event.stopPropagation();
            addSubFolder(subFolder, level + 1);
        });

        let container = document.createElement("div");
        container.classList.add("folder-content");
        subFolder.appendChild(container);

        let parentContent = parent.querySelector(".folder-content");
        parentContent.appendChild(subFolder);
        parentContent.style.display = "block"; // Показываем содержимое папки
    }
}
