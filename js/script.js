const submit = document.querySelector("#submit");
const postPlace = document.querySelector("#postPlace");

submit.addEventListener("click", function(event){
    event.preventDefault();

    postPlace.innerHTML = '';

    const postId = document.querySelector("#postId").value;

    if(postId < 1 || postId > 100){
        alert("Invalid ID");
        return;
    };

    fetch('https://jsonplaceholder.typicode.com/posts/' + postId)

    .then(function(response) {

        if (!response.ok) {
                throw new Error(response.status);
        }
        return response.json();

    })

    .then(function(data){
        const postDiv = document.createElement("div");

        postDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p><button id="loadCom">Load Comment</button>`;
        postPlace.appendChild(postDiv);

        const loadComm = document.querySelector("#loadCom");

        loadComm.addEventListener("click", function() {

            this.disabled = true;

            fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')

                .then(function(response){
                    if (!response.ok) {
                        throw new Error(response.status);
                    }
                    return response.json();
                })

                .then(function(comments){

                    comments.forEach(function(comment){
                        const comDiv = document.createElement("div");

                        comDiv.innerHTML = `<h3>${comment.name}</h3><p>${comment.body}</p>`;
                        postPlace.appendChild(comDiv);
                    });

                })

                .catch(function(error){
                    console.error('Error:', error);
                });
        })
    })

    .catch(function(error) {
        console.error('Error:', error);
    });

});




