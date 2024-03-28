//displaying the blog from local storage.
document.addEventListener('blogContent', function () {
    const postsPage = document.getElementById('postsPage');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
});

    document.getElementById('toggleTheme').addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
    });
    document.getElementById('backButton').addEventListener('click', function () {
        window.location.href = 'index.html';
});
