
// JSON data containing wedding information, events, families, and children
const kankotriData = {
    "brideGroom": {
        "groom": "Narendra (Software Engineer (GIS))",
        "bride": "Parul H.C. Assistant (Government)"
    },
    "weddingDate": "Sunday, 30th October 2025",
    "events": [
        {
            "name": "Buddha Ceremony",
            "date": "Wednessday, 29th October 2025",
            "time": "08:00 AM",
            "icon": "fas fa-hands-praying"
        },
        {
            "name": "Sujata Dinner",
            "date": "Wednessday, 29th October 2025",
            "time": "08:00 PM",
            "icon": "fas fa-utensils"
        },
        {
            "name": "Jan Prasthan",
            "date": "Thursaday, 30th October 2025",
            "time": "9:00 AM",
            "icon": "fas fa-sun"
        },
        {
            "name": "Trisan Ceremony",
            "date": "Thursaday, 30th October 2025",
            "time": "11:00 AM",
            "icon": "fas fa-hand-holding-heart"
        },
    ],
    "families": [
        {
            "title": "Snehadhin Family",
            "members": [
                { "husband": "Shri Late Nathabhai Jethabhai Makadiya", "wife": "Smt. Devuben Nathabhai Makadiya" },
                { "husband": "Shri Late Punabhai Jethabhai Makadiya", "wife": "Smt. Kaluben Punabhai Makadiya" },
                { "husband": "Shri Late Alabhai Jethabhai Makadiya", "wife": "Smt. Kamiben Alabhai Makadiya" },
                { "husband": "Shri Late Babubhai Jethabhai Makadiya", "wife": "Smt. Dhaniben Babubhai Makadiya" },
                { "husband": "Shri Khakhabhai Jethabhai Makadiya", "wife": "Smt. Manjuben Khakhabhai Makadiya" },
                { "husband": "Shri Late Govindbhai Jethabhai Makadiya", "wife": "Smt. Manuben Govindbhai Makadiya" },
                { "husband": "Mr. Somabhai Nathabhai Makadiya", "wife": "Mrs. Jayaben Somabhai Makadiya" },
                { "husband": "Mr. Parsotambhai Nathabhai Makadiya", "wife": "Mrs. Rashilaben Parsotam Makadiya" },
                { "husband": "Mr. Lakhamanbhai Nathabhai Makadiya", "wife": "Mrs. Manishaben Lakhaman Makadiya" },
                { "husband": "Mr. Ravjibhai Somabhai Makadiya", "wife": "Mrs. Tulshiben Ravjibhai Makadiya" }
            ]
        },
        {
            "title": "Darshanabhilashi (Makadiya Family)",
            "members": [
                { "name": "Mr. Prakashkumar Parsotambhai" },
                { "name": "Mr. Kevinkumar Lakhamanbhai" },
                { "name": "Mr. Jaykumar Ravjibhai" },
                { "name": "Miss Nirupa Lakhamanbhai" },
                { "name": "Miss Muskanben Ravjibhai" },
                { "name": "Miss Krishna Ravjibhai" }
            ]
        },
        {
            "title": "Mosal Paksh",
            "members": [
                { "husband": "Shri Late Arjanbhai", "wife": "Smt. Gauriben Arjanbhai Vanvi" },
                { "husband": "Mr. Bhimshinhbhai", "wife": "Mrs. Rajuben Bhimshinhbhai Vanvi" },
                { "husband": "Mr. Mukeshbhai", "wife": "Mrs. Dudhiben Mukeshbhai Vanvi" }
            ]
        },
        {
            "title": "Fai-Fuva Paksh",
            "members": [
                { "husband": "Mr. Parsotambhai", "wife": "Mrs. Shantiben Parsotambhai Renuka" },
                { "husband": "Mr. Rameshbhai", "wife": "Mrs. Prabhaben Rameshbhai Chavda" }
            ]
        },
        {
            "title": "Jamai Paksh",
            "members": [
                { "husband": "Mr. Vallabhbhai", "wife": "Mrs. Ramaben Vallabhbhai Kathad" },
                { "husband": "Mr. Nareshbhai", "wife": "Mrs. Mayaben Nareshbhai Rathod" },
                { "husband": "Mr. Dharmeshbhai", "wife": "Mrs. Anjaliben Dharmeshbhai Makwana" }
            ]
        },
        {
            "title": "Masi-Masa Paksh",
            "members": [
                {
                    "husband": "Late. Dayabhai",
                    "wife": "Mrs. Hansha Dayabhai Chavda"
                },
                {
                    "husband": "Mr. Muljibhai",
                    "wife": "Mrs. Parbhaben Muljibhai Solanki"
                }
            ]
        }

    ],
    "children": ["Shriya", "Shakti", "Aditi", "Mahek", "Twisha", "Harshit", "Khushi"]
};

// Function to create floating decorative elements (like petals or stars)
function createFloatingElements() {
    const container = document.getElementById('floating-elements');
    const symbols = ['❀', '✿', '🌸', '💮', '🏵️', '🔸', '✦', '✧']; // symbols for floating elements

    for (let i = 0; i < 15; i++) { // create 15 floating elements
        const element = document.createElement('div');
        element.classList.add('floating-element');
        element.textContent = symbols[Math.floor(Math.random() * symbols.length)]; // random symbol
        element.style.left = `${Math.random() * 100}%`; // random horizontal position
        element.style.animationDuration = `${15 + Math.random() * 20}s`; // random float duration
        element.style.animationDelay = `${Math.random() * 5}s`; // random start delay
        element.style.fontSize = `${1 + Math.random() * 2}rem`; // random font size
        container.appendChild(element);
    }
}

// Function to handle fade-in animations on scroll
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // how far from bottom of viewport the element becomes visible

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible'); // add class to trigger CSS animation
        }
    });
}

// Function to render wedding content dynamically
function renderKankotri(data) {
    // Update the wedding date
    const weddingDateEl = document.getElementById('wedding-date');
    weddingDateEl.textContent = data.weddingDate;

    // Render events
    const eventsListEl = document.getElementById('events-list');
    data.events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card', 'fade-in');

        // Event icon
        const eventIcon = document.createElement('div');
        eventIcon.classList.add('event-icon');
        eventIcon.innerHTML = `<i class="${event.icon}"></i>`;

        // Event name
        const eventName = document.createElement('div');
        eventName.classList.add('event-name');
        eventName.textContent = event.name;

        // Event date
        const eventDate = document.createElement('div');
        eventDate.classList.add('event-date');
        eventDate.textContent = event.date;

        // Event time
        const eventTime = document.createElement('div');
        eventTime.classList.add('event-time');
        eventTime.textContent = `Time: ${event.time}`;

        // Append all parts to event card
        eventCard.appendChild(eventIcon);
        eventCard.appendChild(eventName);
        eventCard.appendChild(eventDate);
        eventCard.appendChild(eventTime);

        eventsListEl.appendChild(eventCard);
    });

    // Render families
    const familiesSection = document.getElementById('families-section');
    data.families.forEach(family => {
        const familyDiv = document.createElement('div');
        familyDiv.classList.add('family-section', 'fade-in');

        // Family title
        const familyTitle = document.createElement('h3');
        familyTitle.classList.add('family-title');
        familyTitle.textContent = family.title;
        familyDiv.appendChild(familyTitle);

        // Family table
        const table = document.createElement('table');
        table.classList.add('family-table');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        // Determine if table has Husband/Wife columns or just Name
        if (family.members[0].husband) {
            ['Husband', 'Wife'].forEach(h => {
                const th = document.createElement('th');
                th.textContent = h;
                headerRow.appendChild(th);
            });
        } else {
            const th = document.createElement('th');
            th.textContent = 'Name';
            headerRow.appendChild(th);
        }

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Table body with family members
        const tbody = document.createElement('tbody');
        family.members.forEach(member => {
            const tr = document.createElement('tr');
            if (member.husband) {
                const tdH = document.createElement('td');
                tdH.textContent = member.husband;
                const tdW = document.createElement('td');
                tdW.textContent = member.wife;
                tr.appendChild(tdH);
                tr.appendChild(tdW);
            } else {
                const td = document.createElement('td');
                td.textContent = member.name;
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        familyDiv.appendChild(table);
        familiesSection.appendChild(familyDiv);
    });

    // Render children / younger members
    const childrenList = document.getElementById('children-list');
    data.children.forEach(child => {
        const childItem = document.createElement('div');
        childItem.classList.add('child-item', 'fade-in');
        childItem.textContent = child;
        childrenList.appendChild(childItem);
    });
}

// Initialize page once DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    createFloatingElements();        // Add floating decorations
    renderKankotri(kankotriData);    // Render events, families, and children
    window.addEventListener('scroll', handleScrollAnimation); // Scroll-triggered animations
    handleScrollAnimation(); // Initial check in case elements are already in view
});

// Countdown Timer
const weddingDate = new Date("October 30, 2025 09:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();