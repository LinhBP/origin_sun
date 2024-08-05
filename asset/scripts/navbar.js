fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('content').innerHTML = data;
    const newStyleSheet = document.createElement('link');
                newStyleSheet.rel = 'stylesheet';
                newStyleSheet.href = '../css/navbar.css';
                document.head.appendChild(newStyleSheet);
});
