//displaying the blog from local storage.
document.addEventListener('blogContent', function () {
    function renderPosts() {
        const postsPage = document.getElementById('postsPage');
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        postsPage.innerHTML = '';
    }
});


//toggle theme.
const lightDarkButton = document.getElementById;
lightDarkButton.addEventListener('click', function () {
    document.body.classList.toggle(dark-theme);
})