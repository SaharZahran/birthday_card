const persons = [{
        name: "Ahmad",
        age: 29,
        dob: '13 Jan 1992'
    }, {
        name: "mohammed",
        age: 50,
        dob: '13 Oug 1971'
    }, {
        name: "sami",
        age: 60,
        dob: '13 Jan 1961'
    }, {
        name: "samer",
        age: 22,
        dob: '14 Oct 2021'
    }, {
        name: "kareem",
        age: 93,
        dob: '14 Oct 2021'
    }, {
        name: "kamel",
        age: 100,
        dob: '6 Oct 1921'
    }, {
        name: "amer",
        age: 33,
        dob: '14 Oct 1989'
    }

];
const container = document.getElementById('persons');
const header = document.querySelector('h1');
let counter = 0;
var date = new Date()
var month = date.toLocaleString('en-US', { month: 'short' });
let theDay = date.getDate();
const today = `${theDay} ${month}`;
// console.log(today);

for (let i = 0; i < persons.length; i++) {
    if (persons[i].dob.includes(today)) {
        const person_info = document.createElement('div');
        container.appendChild(person_info);
        person_info.classList.add('person_info');
        const image = document.createElement('img');
        image.src = `https://randomuser.me/api/portraits/men/${i}.jpg`;
        person_info.appendChild(image);
        const info = document.createElement('div');
        person_info.appendChild(info);
        const name = document.createElement('p');
        name.classList.add("name");
        name.innerHTML = `${persons[i].name}`;
        info.appendChild(name);
        const age = document.createElement('p');
        age.classList.add("age");
        age.innerHTML = `${persons[i].age} years`;
        info.appendChild(age);

        counter++;
    }
}


header.textContent = `${counter} Birthdays Date`;

const clear_button = document.querySelector('.clear_btn');


clear_button.addEventListener('click', () => {
    container.remove();
})


// add themes

const body = document.querySelector('body');
const green_theme = document.querySelector('.green');
green_theme.style.backgroundColor = 'green';

green_theme.addEventListener('click', function() {
    clear_button.style.backgroundColor = 'green';
    body.style.backgroundColor = "green";
});
const purple_theme = document.querySelector('.purple');
purple_theme.style.backgroundColor = 'purple';


purple_theme.addEventListener('click', function() {
    clear_button.style.backgroundColor = 'purple';
    body.style.backgroundColor = "purple";
});
const blue_theme = document.querySelector('.blue');
blue_theme.style.backgroundColor = 'blue';


blue_theme.addEventListener('click', function() {
    clear_button.style.backgroundColor = 'blue';
    body.style.backgroundColor = "blue";
})