function post() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var posts = document.getElementById("posts");
  console.log(title, description);
  if (title.trim() && description.trim()) {
    posts.innerHTML += `<div class="card m-2">
              <div class="card-header">@Post</div>
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">
                 ${description}
                </p>
                </div>
                <div class="ms-auto m-2">
                  <button class="btn btn-success">Edit</button>
                  <button class="btn btn-danger">Delete</button>
                </div>
            </div>`;
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }else{
   Swal.fire({
  icon: "error",
  title: "Empty Post...",
  text: "Enter title & description",

});
  }
}
