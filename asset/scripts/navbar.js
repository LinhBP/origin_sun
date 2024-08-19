document.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            const newStyleSheet = document.createElement('link');
            newStyleSheet.rel = 'stylesheet';
            newStyleSheet.href = '../css/navbar.css';
            document.head.appendChild(newStyleSheet);
            
            attachEventListeners();
        });

    function attachEventListeners() {
        const accountBtn = document.getElementById('accountBtn');
        const accountDropdown = document.getElementById('accountDropdown');
        const accountMenu = document.getElementById('accountMenu');
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');

        // Populate account dropdown based on login status
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        accountMenu.innerHTML = ''; // Clear previous menu

        if (loggedInUser) {
            accountMenu.innerHTML += `
                <a href="account.html" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-i18n="globalac"></a>
                <a href="#" id="logoutBtn" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-i18n="globalout"></a>
            `;

            // Attach logout event
            document.getElementById('logoutBtn').addEventListener('click', function() {
                localStorage.removeItem('loggedInUser');
                localStorage.removeItem('userDetails');
                window.location.href = 'login.html';
            });
        } else {
            accountMenu.innerHTML += `
                <a href="login.html" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-i18n="login.submit"></a>
            `;
        }

        // Handle dropdown toggles
        document.addEventListener('click', function(event) {
            if (accountBtn && accountBtn.contains(event.target)) {
                accountDropdown.classList.toggle('hidden');
            } else if (accountDropdown && !accountDropdown.contains(event.target)) {
                accountDropdown.classList.add('hidden');
            }

            if (languageBtn && languageBtn.contains(event.target)) {
                languageDropdown.classList.toggle('hidden');
            } else if (languageDropdown && !languageDropdown.contains(event.target)) {
                languageDropdown.classList.add('hidden');
            }
        });
    }
});
