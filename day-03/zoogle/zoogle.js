const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');

let shakeElement = (item) => {
        if (!item) return;
        const shakeKeyframes = [
            { transform: 'translateX(0)' },
            { transform: 'translateX(-6px)' },
            { transform: 'translateX(6px)' },
            { transform: 'translateX(-6px)' },
            { transform: 'translateX(6px)' },
            { transform: 'translateX(0)' }
        ];
        const shakeTiming = {
            duration: 300,
            iterations: 1,
            easing: 'ease-in-out'
        };
        item.animate(shakeKeyframes, shakeTiming);
};

let search = (input) => {
    if (input.value === "") return;
    
    let link = "";
    document.querySelector('.search-input').placeholder = '';
    if(input.value.toLowerCase() === "matrix")
    {
        document.body.style.backgroundImage = "url('matrix.gif')";
        document.body.style.color = 'white';
        input.style.backgroundColor = 'green';
        button1.style.backgroundColor = 'green';
        button1.style.color = 'white';
        button2.style.backgroundColor = 'green';
        button2.style.color = 'white';
        input.value = "";
        return;
    }
    else if(input.value.toLowerCase() === "dark")
    {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = 'black';
        input.style.backgroundColor = '#303134';
        input.style.color = '#303134';white
        button1.style.backgroundColor = '#303134';
        button2.style.backgroundColor = '#303134';
        document.body.style.color = '#9aa0a6';
        input.value = "";
        return;
    }
    else if(input.value.toLowerCase() === "light")
    {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = 'white';
        input.style.backgroundColor = 'white';
        button1.style.backgroundColor = '#f8f9fa';
        button2.style.backgroundColor = '#f8f9fa';
        document.body.style.color = 'black';
        input.value = "";
        return;
    }
    else if(input.value.toLowerCase() === "bing" || input.value.toLowerCase() === "zing")
    {
        document.querySelector('.logo-img').src = 'zing-logo.png';
        button2.textContent = "I'm Feeling Unlucky";
        button1.textContent = "Zing Search or Whatever";
        document.title = 'Zing';
        input.value = "";
        return;
    } 
    else if(input.value.toLowerCase() === "google")
    {
        input.value = "";
        document.querySelector('.search-input').placeholder = 'did you mean zoogle?';
        document.title = 'Zoogle';
        input.value = "";
        return;
    }
    else if(input.value.toLowerCase() === "zoogle")
    {
        document.querySelector('.logo-img').src = 'zoogle-logo.png';
        document.title = 'Zoogle';
        button2.textContent = "I'm Feeling Lucky";
        button1.textContent = "Zoogle Search";
        input.value = "";
        return;
    }
    else if(input.value.toLowerCase() === "askew")
    {
        document.body.style.transform = 'rotate(7deg)';
        input.value = "";
        return;
    }
    else if(input.value.toLowerCase() === "straight")
    {
        document.body.style.transform = 'rotate(0deg)';
        input.value = "";
        return;
    }
    else if(input.value.toLowerCase() === "shake")
    {

        shakeElement(document.querySelector('.logo-img'));
        input.value = "";
        return;
    }
    else if(input.value.toLowerCase() === "unmirror")
    {    
            document.body.style.transform = 'scaleX(1)';
            input.value = "";
            return;
    }
    else if(input.value.toLowerCase().includes("comic"))
    {    
            document.body.style.fontFamily = 'Comic Sans MS';
            button1.style.fontFamily = 'Comic Sans MS';
            button2.style.fontFamily = 'Comic Sans MS';
            input.value = "";
            return;
    }
    else if(input.value.toLowerCase() === "mirror")
    {
        document.body.style.transform = 'scaleX(-1)';
        input.value = "";
        return;
    }
    else if(input.value.toLowerCase() === "zixted")
    {
        document.querySelector('.search-input').placeholder = 'did you mean the goat?';
        input.value = "";
        return;
    } 
    else if(input.value.toLowerCase().includes("goat"))
    {
        document.querySelector('.search-input').placeholder = 'did you mean the zixted?';
        input.value = "";
        return;
    }
    else if(input.value.toLowerCase().includes("why"))
    {
        document.querySelector('.search-input').placeholder = 'well because';
        input.value = "";
        return;
    } 
    else {
        link = "https://google.com/search?q=" + encodeURIComponent(input.value);
    }

    input.value = "";
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
    const maxX = window.innerWidth - button2.clientWidth;
    const maxY = window.innerHeight - button2.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    button2.style.position = 'absolute'; 
    button2.style.left = randomX + 'px';
    button2.style.top = randomY + 'px';
});