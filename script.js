const suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

// get elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".auto-box");
const buttonSearch = searchWrapper.querySelector("i");


// if press any key

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            //    filter array value 
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>'
        });
        searchWrapper.classList.add('active'); //show auto box
        showSuggestion(emptyArray);

        suggBox.querySelectorAll("li").forEach((item) => {
            item.addEventListener("click", select)
        })

    } else {
        searchWrapper.classList.remove("active"); // remove auto box
    }
}

function select(element) {
    let selectData = element.target.textContent;
    inputBox.value = selectData;
    // test search google
    buttonSearch.onclick = () => {
        let LinkWeb = `https://www.google.com/search?q=${selectData}`;
        window.location = LinkWeb;
    }
}

function showSuggestion(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>'
    }
    else {
        listData = list.join('');

    }
    suggBox.innerHTML = listData;
}
