//Basic Variable Operations
const myName = "Wala Eddine";
let age = 18;
let isStudent = true;
let a = 1;
let b = 2;

console.log("My Name is: ", myName);
console.log("My Age is: ", age);
console.log("Am I a Student: ", isStudent);
console.log("a + b: ", a + b);

age++;
console.log("My New Age is: ", age);



//Functions
let myStr = "JavaScript Day 1"
console.log("This was " + myStr);

function wordBlanks(myNoun, myAdverb, myAdjective, myVerb)
{
    return ("The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".");
}

console.log(wordBlanks("dog", "quickly", "big", "run"));
console.log(wordBlanks("bike", "slowly", "slow", "flew"));



//Arrays
let phoneBook = [["John", "+1 202-555-0123"], ["David", "+1 202-555-0123"]];
console.log(phoneBook[0][0], "'s Number is", phoneBook[0][1]);
phoneBook.push(["Max", "+1 202-555-0123"]);
phoneBook.unshift(["Kelly", "+1 202-555-0123"]);
phoneBook.pop();



//If Statments
function golfScore(par, strokes)
{
    if(strokes === 1)
        return "Hole-in-one!";
    else if(strokes <= par - 2)
        return "Eagle";
    else if(strokes === par - 1)
        return "Birdie";
    else if(strokes === par)
        return "Par";
    else if(strokes === par + 1)
        return "Bogey";
    else if(strokes === par + 2)
        return "Double Bogey";
    else
        return "Go Home!";
}

console.log("Your Golf score is:", golfScore(5, 4));



//Loops
function golfScore2(par, strokes)
{
    let scores = [[1,"Hole-in-one!"],[par - 2,"Eagle"],[par - 1,"Birdie"],[par,"Par"],[par + 1,"Bogey"],
    [par + 2,"Double Bogey"],[par + 3,"Go Home!"]];
    for (let i = 0; i < (scores.length - 1); i++)
    {
        if(strokes >= scores[i][0])
            return scores[i][1];
    }
    return "Go Home!";
}

console.log("Your Golf score is:", golfScore2(5, 4));



//Switch Statements
function caseInSwitch(val)
{
    let answer = "";
    switch(val)
    {
        case "a":
            answer = "alpha";
            break;
        case "b":
            answer = "beta";
            break;
        case "c":
            answer = "gamma";
            break;
        case "d":
            answer = "delta";
            break;
        default:
            answer = "not found";
            break;
    }
    return answer;
}

console.log("The Word is", caseInSwitch("a"));
console.log("The Word was", caseInSwitch("g"));

function notes(val)
{
    let answer = "";
    switch(val)
    {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        case 10:
            answer = "Perfect";
            break;
        default:
            answer = "error";
            break;
    }
    return answer;
}

let note = 8;
console.log("Your note is",note ,"which is", notes(note));



//Objects
let user = {
    "firstName": "Wala",
    "current age": 18,
    "country": "Algeria",
};

console.log(user.firstName,"is from",user.country,"and he is",user["current age"]);

user["current age"] = 19;
console.log(user.firstName,"is from",user.country,"and now he is",user["current age"]);

let phoneBook2 = {
    "John": "+1 202-555-0123",
    "David": "+1 202-555-0123",
    "Max": "+1 202-555-0123",
};
function look_up(val)
{
    if(phoneBook2.hasOwnProperty(val))
        return phoneBook2[val];
    else
        return "Not Found";
}

console.log("The Number is", look_up("Mark"));

let myPlaylist = {
    "song1": {
        "Artist": "RadioHead",
        "Song": "Let Down",
        "Album": "OK Computer"
    },
    "song2": {
        "Artist": "Low",
        "Song": "Lullaby",
        "Album": "Low I Could Live in Hope"
    }
};

console.log("My favorite song is ", myPlaylist.song1.Song, "by", myPlaylist.song1.Artist);
