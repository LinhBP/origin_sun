document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blogList');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    const gridViewBtnBottom = document.getElementById('gridViewBtnBottom');
    const listViewBtnBottom = document.getElementById('listViewBtnBottom');
    
    const posts = [
        {
            id: 1,
            titleKey: "blog_title_1",
            bodyKey: "blog_excerpt_1",
            image: '../asset/image/blog1.png',
            altKey: "blog_image_1_alt",
            commentsKey: "comments_count_1"
        },
        {
            id: 2,
            titleKey: "blog_title_2",
            bodyKey: "blog_excerpt_2",
            image: '../asset/image/blog2.png',
            altKey: "blog_image_2_alt",
            commentsKey: "comments_count_2"
        },
        {
            id: 3,
            titleKey: "blog_title_3",
            bodyKey: "blog_excerpt_3",
            image: '../asset/image/blog3.png',
            altKey: "blog_image_3_alt",
            commentsKey: "comments_count_3"
        },
        {
            id: 4,
            titleKey: "blog_title_4",
            bodyKey: "blog_excerpt_4",
            image: '../asset/image/blog4.png',
            altKey: "blog_image_4_alt",
            commentsKey: "comments_count_4"
        },
        {
            id: 5,
            titleKey: "blog_title_5",
            bodyKey: "blog_excerpt_5",
            image: '../asset/image/blog5.png',
            altKey: "blog_image_5_alt",
            commentsKey: "comments_count_5"
        },
        {
            id: 6,
            titleKey: "blog_title_6",
            bodyKey: "blog_excerpt_6",
            image: '../asset/image/blog6.png',
            altKey: "blog_image_6_alt",
            commentsKey: "comments_count_6"
        },
    ];

    localStorage.setItem('posts', JSON.stringify(posts));

    function displayPosts(posts, viewType = 'grid') {
        blogList.innerHTML = ''; // Clear existing content
        
        blogList.className = viewType === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'grid grid-cols-1 gap-4';

        posts.forEach(post => {
            const postHtml = `
                <div class="bg-white rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-lg cursor-pointer ${
                    viewType === 'list' ? 'flex' : ''
                }">
                    <img src="${post.image}" class="${viewType === 'list' ? 'w-48 h-auto object-cover' : 'w-full'}" data-i18n-alt="${post.altKey}">
                    <div class="p-4 ${viewType === 'list' ? 'flex-grow' : ''}">
                        <a href="blog_detail.html?post_id=${post.id}" class="block hover:underline">
                            <h2 class="font-bold text-xl mb-2" data-i18n="${post.titleKey}">${translations[currentLanguage][post.titleKey]}</h2>
                        </a>
                        <p class="text-gray-700 text-base mb-2" data-i18n="${post.bodyKey}">${translations[currentLanguage][post.bodyKey]}</p>
                        <div class="text-gray-400 hover:text-black">
                            <a href="blog_detail.html?post_id=${post.id}" class="hover:text-black" data-i18n="read_more"></a>
                            <span data-i18n="${post.commentsKey}">${translations[currentLanguage][post.commentsKey]}</span>
                        </div>
                    </div>
                </div>
            `;
            blogList.innerHTML += postHtml;
        });

        translatePage(); 
    }

    displayPosts(posts, 'grid'); // Default to grid view

    gridViewBtn.addEventListener('click', () => displayPosts(posts, 'grid'));
    listViewBtn.addEventListener('click', () => displayPosts(posts, 'list'));
    gridViewBtnBottom.addEventListener('click', () => displayPosts(posts, 'grid'));
    listViewBtnBottom.addEventListener('click', () => displayPosts(posts, 'list'));
});
