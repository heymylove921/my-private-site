body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
    padding: 20px;
}

.tree {
    text-align: left;
    margin-top: 20px;
    display: inline-block;
}

.folder {
    margin-left: 20px;
    cursor: pointer;
    font-weight: bold;
}

.folder::before {
    content: "📁 ";
}

.folder-content {
    margin-left: 20px;
    display: none;
}

button {
    margin: 10px;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
}
