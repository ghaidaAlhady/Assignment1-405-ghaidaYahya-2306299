// Lab 6: store the vote, counters, and comment in browser cookies.
const likeButton = document.getElementById("like-button");
const dislikeButton = document.getElementById("dislike-button");
const likeCount = document.getElementById("like-count");
const dislikeCount = document.getElementById("dislike-count");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const resetButton = document.getElementById("reset-button");
const commentsList = document.getElementById("comments-list");
const message = document.getElementById("message");

// Cookie helpers. The cookies last for 7 days unless Clear deletes them.
function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; max-age=604800; SameSite=Lax; path=" + cookiePath();
}

function getCookie(name) {
    const cookieParts = document.cookie.split("; ");
    for (let i = 0; i < cookieParts.length; i++) {
        const separator = cookieParts[i].indexOf("=");
        const cookieName = cookieParts[i].slice(0, separator);
        if (cookieName === name) {
            return decodeURIComponent(cookieParts[i].slice(separator + 1));
        }
    }
    return null;
}

function cookiePath() {
    // Keep these cookies scoped to the Lab 6 folder.
    return window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/") + 1);
}

function deleteCookie(name) {
    document.cookie = name + "=; max-age=0; SameSite=Lax; path=" + cookiePath();
}

// The example picture starts with 100 likes and 20 dislikes.
// After clicking Clear, both counters reset to zero.
let likes = Number(getCookie("lab6_likes") ?? "100");
let dislikes = Number(getCookie("lab6_dislikes") ?? "20");
let vote = getCookie("lab6_vote");
let comments = [];

try {
    const savedComments = JSON.parse(getCookie("lab6_comments") || "[]");
    if (Array.isArray(savedComments)) comments = savedComments;
} catch (error) {
    comments = [];
}

function updatePage() {
    likeCount.textContent = likes;
    dislikeCount.textContent = dislikes;

    // Once a choice is saved in cookies, it cannot be voted again until Clear.
    likeButton.disabled = vote !== null;
    dislikeButton.disabled = vote !== null;
    likeButton.classList.toggle("selected", vote === "like");
    dislikeButton.classList.toggle("selected", vote === "dislike");

    commentsList.innerHTML = "";
    comments.forEach(function (comment) {
        const paragraph = document.createElement("p");
        paragraph.className = "comment";
        paragraph.textContent = comment;
        commentsList.appendChild(paragraph);
    });
}

function addVote(choice) {
    if (vote !== null) return;

    vote = choice;
    if (choice === "like") {
        likes++;
    } else {
        dislikes++;
    }

    setCookie("lab6_vote", vote);
    setCookie("lab6_likes", String(likes));
    setCookie("lab6_dislikes", String(dislikes));
    message.textContent = "Your vote has been saved.";
    updatePage();
}

likeButton.addEventListener("click", function () { addVote("like"); });
dislikeButton.addEventListener("click", function () { addVote("dislike"); });

commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const comment = commentInput.value.trim();

    if (comment === "") {
        message.textContent = "Please write a comment first.";
        return;
    }
    if (comments.length > 0) {
        message.textContent = "You already submitted a comment. Click Clear to comment again.";
        return;
    }

    comments.push(comment);
    setCookie("lab6_comments", JSON.stringify(comments));
    commentInput.value = "";
    message.textContent = "Your comment has been submitted.";
    updatePage();
});

resetButton.addEventListener("click", function () {
    deleteCookie("lab6_vote");
    deleteCookie("lab6_likes");
    deleteCookie("lab6_dislikes");
    deleteCookie("lab6_comments");

    vote = null;
    likes = 0;
    dislikes = 0;
    comments = [];
    commentInput.value = "";

    // Preserve the reset counters across page reloads.
    setCookie("lab6_likes", "0");
    setCookie("lab6_dislikes", "0");
    message.textContent = "Your vote and comments have been cleared. You can vote again.";
    updatePage();
});

updatePage();
