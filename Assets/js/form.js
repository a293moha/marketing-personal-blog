//username page
//save data of HTML into local storage
document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();
        successMessage.textContent = 'Thank you for your submission!';
        successMessage.style.color = 'green';
        successMessage.style.display = 'block'
        document.body.appendChild(successMessage);

        if (!username || !email || !title || !content) {
        alert('Try Again.');
        return;
        }

        alert('Thank You for your submission!');

        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({username,email,title,content});
        localStorage.setItem('posts', JSON.stringify(posts));
        
        window.location.href = "blog.html";
    })


