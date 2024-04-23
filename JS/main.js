let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Front-end Developer', 'Responsive Web Developer', 'Software Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

function showPopup(title) {
    var modal = document.getElementById("myModal");
    var modalTitle = modal.querySelector(".modal-title");
    var modalContent = modal.querySelector("#modal-content");

    modalTitle.textContent = title;
    switch (title) {
        case "ABOUT ME":
            modalContent.innerHTML = `
            <br>
                <p>Hey there again! I'm your friendly colleague, known for my knack for both work and play. When I'm not diving into projects, you'll likely find me playing with my flute or tickling the ivories on the piano. And let's not forget about my "killer moves" on the basketball court – a game with friends is always on the cards!</p>
                <br><p>But wait, there's more! When I'm kicking back at home, you can catch me binge-watching Netflix, cheering on my favorite sports teams, and diving into the latest technical methodologies. Oh, and I'm always brushing up on my JavaScript skills – because you can never have too much coding knowledge!</p>
                <br><p>And hey, who doesn't love a good online gaming session? Whether it's dominating in Dota or strategizing in Mobile Legends, I'm always up for a challenge.</p>
                <br><p>But when it's crunch time, you can count on me to buckle down and get the job done – I'm all about meeting deadlines and delivering top-notch work. So there you have it – a glimpse into the diverse world of me! Hope you enjoyed the ride! 😄</p>`;
            break;
        case "SOLUTIONS DEVELOPER":
            modalContent.innerHTML = `
            <p>LENOVO PCCW SOLUTIONS, INC.</p>
            <br>
                <p>At Lenovo PCCW Solutions, Inc., I was a Front-end Developer with Team AD-eMPF. I focused on maintaining and improving websites, collaborating closely with back-end developers to enhance user experience. I also handled drafting functional requirement documents and guides.</p>
                <br><p>Moreover, I implemented Jest testing to ensure code quality and prevent regressions. My commitment to staying updated with emerging technologies ensured our projects remained cutting-edge. Additionally, I integrated APIs, improving functionality and streamlining processes.</p>
                <br><p>Overall, my time at Lenovo PCCW Solutions was characterized by teamwork, innovation, and a dedication to delivering top-notch results.</p>`;
                break;
        case "JR. TECHNICAL SUPPORT ENGINEER":
            modalContent.innerHTML = `
            <p>CURO TEKNIKA INC.</p>
            <br>
            <p>At Jollibee Food Corp., my role revolved around configuring Point-of-sale (POS) Machines and POS printers in numerous stores nationwide. I conducted technical fieldwork, troubleshooting computer hardware and peripherals, and installing PC software.</p>
                <br><p>I played a pivotal role in ensuring seamless operations across Jollibee's network of stores, troubleshooting issues swiftly to minimize downtime. This hands-on experience enhanced my problem-solving skills and deepened my understanding of hardware and software integration.</p>
                <br><p>My time at Jollibee Food Corp. was marked by dynamic challenges and rewarding experiences, contributing to my growth as a technical professional.</p>`;
            break;
        case "TECHNICAL SUPPORT":
            modalContent.innerHTML = `
            <p>STARTEK PHILIPPINES, INC.</p>
            <br>
            <p>At ASUS, my primary role was to deliver top-notch technical support to clients across the U.S. and Canada, specializing in ASUS products like routers and motherboards.</p>
                <br><p>I thrived in diagnosing and resolving both hardware and software issues, ensuring smooth operations for our customers. Whether it was troubleshooting connectivity problems or optimizing system configurations, I was dedicated to delivering effective solutions.</p>
                <br><p>My two-month tenure at ASUS was a crash course in refining my communication skills and technical expertise. In that short span, I navigated complex technical issues, honing my ability to bridge the gap between customers and technology. It was a fast-paced learning experience that left a lasting impact on my professional growth.</p>`;
            break;
        case "eMPF":
            modalContent.innerHTML = `
            <div>
            <h4>The Mandatory Provident Fund (Chinese: 強制性公積金), often abbreviated as MPF (強積金), is a compulsory saving scheme (pension fund) for the retirement of residents 
            in Hong Kong. Most employees and their employers are required to contribute monthly to mandatory provident fund schemes provided by approved private organisations, 
            according to their salaries and the period of employment.</h4>
            <br>
            <h4>I am one of the Front-end Developers of this project, responsible for designing and implementing various features to enhance user experience. 
            This involves ensuring that the frontend components are responsive, accessible, and visually appealing, as well as writing Jest tests to maintain code quality 
            and prevent regressions. Additionally, I collaborate closely with the design and backend teams to integrate frontend elements seamlessly with the overall 
            project architecture.</h4>
            </div>`;
            break;
        default:
            modalContent.innerHTML = "<p>No content available.</p>";
    }

    modal.style.display = "block";
    modal.classList.add("show");

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closePopup();
        }
    });
}

function closePopup() {
    var modal = document.getElementById("myModal");
    modal.classList.remove("show"); 
}

function handleFormSubmission(event) {
    var modal = document.getElementById("myModal");
    event.preventDefault();

    var formData = new FormData(event.target);

    var mobileNumber = formData.get('mobilenumber');
    if (mobileNumber.length !== 11) {
        alert("Please enter a 11-digit phone number.");
        return; 
    }

    fetch(event.target.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
        
        var modalContent = document.getElementById("modal-content");
        modalContent.innerHTML = ""; 
        
        if (data.success) {
            modalContent.innerHTML = "<p>Email sent successfully!</p>";
        } else {
            modalContent.innerHTML = "<p>Error! Something went wrong.</p>";
        }
        
        modal.classList.add("show");

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                closePopup();
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

var contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', handleFormSubmission);

function validateForm() {
    var fullname = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var mobilenumber = document.getElementById("mobilenumber").value.trim();
    var emailsub = document.getElementById("emailsub").value.trim();
    var message = document.getElementById("message").value.trim();

    if (fullname === "" || email === "" || mobilenumber === "" || emailsub === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}