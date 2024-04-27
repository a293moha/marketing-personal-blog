// displaying the blog from local storage.
function displayPosts() {
    const postsPage = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    console.log(posts);

    postsPage.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const postElement = document.createElement('div');
        postElement.className = 'post'; 
        postElement.textContent = posts[i]; 

        postsPage.append(postElement);
    }
};

    document.getElementById('toggleTheme').addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
    });
    document.getElementById('backButton').addEventListener('click', function () {
        window.location.href = 'index.html';
});


displayPosts();

function displayPosts() {
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post'; 

        const postHTML = `
            <article>
                <header>
                    <h2>${post.title}</h2>
                </header>
                <section class="post-content">
                    <p>${post.content}</p>
                </section>
                <footer class="post-footer">
                    <p class="author">By: ${post.username}</p>
                </footer>
            </article>
        `;

        
        postElement.innerHTML = postHTML;

        
        postsContainer.append(postElement);
    });
};


