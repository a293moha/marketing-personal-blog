//username page
//save data of HTML into local storage
document.addEventListener('blogContent', function () {
    const form = document.getElementById('blogForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('username').value.trim();
        const title = document.getElementById('username').value.trim();
        const content = document.getElementById('username').value.trim();


        if (!username || email || title ||content) {
        alert('Try Again.');
        return;
        }

        alert('Thank You for your submission!');
        });
    });



