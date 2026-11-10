const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');

let search = (input) => {
    if (input.value === "") return;
    
    let link = "";

    if (input.value.toLowerCase().includes("porn")) {
        link = "https://google.com/search?q=" + encodeURIComponent("fuck off");
    } else {
        link = "https://google.com/search?q=" + encodeURIComponent(input.value);
    }
    
    window.open(link);
}

let bar = document.getElementById('search-bar')
bar.addEventListener('keydown' , (event) => {
    if(event.key === 'Enter')
    {
        //let topic = document.getElementById('search-bar');
        search(bar);
    }
});

button1.addEventListener('click', (event) => {
    search(bar);
});


button2.addEventListener('click', (event) => {
    window.open("https://www.instagram.com/zix9ted/");
});