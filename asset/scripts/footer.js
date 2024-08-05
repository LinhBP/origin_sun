fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
    const newStyleSheet = document.createElement("link");
                newStyleSheet.rel = "stylesheet";
                newStyleSheet.href = "../css/footer.css";
                document.head.appendChild(newStyleSheet);
});