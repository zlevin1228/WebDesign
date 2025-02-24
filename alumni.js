// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//js for the card carousel 
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Next and previous navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

//js for the changing FAQ section depending on selected major
function updateFAQ(major) {
    let faqData = {
        "Artificial Intelligence": {
            entailment: [
                "Develops algorithms and machine learning models.",
                "Works with intelligent systems and automation.",
                "Analyzes large datasets to improve AI applications."
            ],
            skills: [
                "Programming (Python, TensorFlow, PyTorch).",
                "Data science and deep learning.",
                "Mathematical modeling and problem-solving."
            ],
            salary: [
                "Average salary: $120,000 per year.",
                "Entry-level: $85,000 per year.",
                "Senior-level: $150,000+ per year."
            ]
        },
        "Computer Engineering": {
            entailment: [
                "Designs and develops computer hardware and software.",
                "Works with microprocessors, circuit boards, and embedded systems.",
                "Optimizes computing performance and energy efficiency."
            ],
            skills: [
                "Circuit design and embedded systems.",
                "Software development and hardware testing.",
                "Programming (C, C++, Verilog, Assembly)."
            ],
            salary: [
                "Average salary: $100,000 per year.",
                "Entry-level: $75,000 per year.",
                "Senior-level: $130,000+ per year."
            ]
        },
        "Computer Science": {
            entailment: [
                "Develops software applications and systems.",
                "Solves complex computational problems.",
                "Focuses on algorithms, data structures, and programming languages."
            ],
            skills: [
                "Programming (Java, Python, C++).",
                "Data structures and algorithm design.",
                "Software engineering principles."
            ],
            salary: [
                "Average salary: $105,000 per year.",
                "Entry-level: $80,000 per year.",
                "Senior-level: $140,000+ per year."
            ]
        },
        "Cybersecurity": {
            entailment: [
                "Protects networks and systems from cyber threats.",
                "Conducts penetration testing and vulnerability assessments.",
                "Implements security protocols and encryption techniques."
            ],
            skills: [
                "Network security and risk management.",
                "Ethical hacking and cryptography.",
                "Incident response and forensic analysis."
            ],
            salary: [
                "Average salary: $110,000 per year.",
                "Entry-level: $85,000 per year.",
                "Senior-level: $145,000+ per year."
            ]
        },
        "Electrical Engineering": {
            entailment: [
                "Designs and develops electrical systems and components.",
                "Works with power generation, electronics, and telecommunications.",
                "Conducts circuit analysis and signal processing."
            ],
            skills: [
                "Circuit design and analysis.",
                "Electromagnetics and control systems.",
                "Programming (MATLAB, C, VHDL)."
            ],
            salary: [
                "Average salary: $95,000 per year.",
                "Entry-level: $70,000 per year.",
                "Senior-level: $125,000+ per year."
            ]
        },
        "Graphic Design": {
            entailment: [
                "Creates visual concepts for branding, marketing, and digital media.",
                "Works with typography, color theory, and digital tools.",
                "Designs user-friendly interfaces and multimedia content."
            ],
            skills: [
                "Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
                "UI/UX principles and branding.",
                "Typography and visual storytelling."
            ],
            salary: [
                "Average salary: $60,000 per year.",
                "Entry-level: $45,000 per year.",
                "Senior-level: $90,000+ per year."
            ]
        },
        "Human-Computer Interaction": {
            entailment: [
                "Designs user-centered digital products and interfaces.",
                "Conducts usability research and testing.",
                "Develops intuitive interactions between humans and technology."
            ],
            skills: [
                "UI/UX design and usability testing.",
                "Cognitive psychology and human factors.",
                "Prototyping (Figma, Sketch, Adobe XD)."
            ],
            salary: [
                "Average salary: $100,000 per year.",
                "Entry-level: $75,000 per year.",
                "Senior-level: $130,000+ per year."
            ]
        },
        "Information Technology": {
            entailment: [
                "Manages and maintains IT infrastructure.",
                "Provides technical support and network administration.",
                "Implements cybersecurity measures and cloud solutions."
            ],
            skills: [
                "IT support and troubleshooting.",
                "Networking (Cisco, AWS, Azure).",
                "System administration and database management."
            ],
            salary: [
                "Average salary: $85,000 per year.",
                "Entry-level: $60,000 per year.",
                "Senior-level: $120,000+ per year."
            ]
        },
        "IT Informatics": {
            entailment: [
                "Analyzes and manages information systems.",
                "Develops data-driven solutions for businesses.",
                "Improves user experience and accessibility of information."
            ],
            skills: [
                "Data analysis and database management.",
                "Information architecture and user experience.",
                "Programming (SQL, Python, R)."
            ],
            salary: [
                "Average salary: $88,000 per year.",
                "Entry-level: $65,000 per year.",
                "Senior-level: $125,000+ per year."
            ]
        },
        "Mechanical Engineering": {
            entailment: [
                "Designs, develops, and tests mechanical systems.",
                "Works with robotics, manufacturing, and thermodynamics.",
                "Applies engineering principles to real-world problems."
            ],
            skills: [
                "CAD software (SolidWorks, AutoCAD).",
                "Thermodynamics and fluid mechanics.",
                "Programming (MATLAB, Python, C++)."
            ],
            salary: [
                "Average salary: $95,000 per year.",
                "Entry-level: $70,000 per year.",
                "Senior-level: $125,000+ per year."
            ]
        },
        "Software Engineering": {
            entailment: [
                "Develops, tests, and maintains software applications.",
                "Works with databases, front-end and back-end systems.",
                "Collaborates with teams to build scalable software solutions."
            ],
            skills: [
                "Programming (Java, Python, JavaScript, C#).",
                "Software development lifecycle and Agile methodologies.",
                "Database management (SQL, MongoDB)."
            ],
            salary: [
                "Average salary: $110,000 per year.",
                "Entry-level: $85,000 per year.",
                "Senior-level: $150,000+ per year."
            ]
        }
    };
  
    // **Check if the selected major exists in faqData**
    if (!faqData[major]) {
        console.error("No data found for major:", major);
        return;
    }
  
    // **Update FAQ Title**
    document.getElementById('change-title').innerText = major + " FAQ";
  
    // **Update each accordion section**
    document.getElementById('job-entailment').innerHTML = formatList(faqData[major].entailment);
    document.getElementById('skills-needed').innerHTML = formatList(faqData[major].skills);
    document.getElementById('average-salary').innerHTML = formatList(faqData[major].salary);
    
  }
  
  // **Helper function to format lists**
  function formatList(items) {
    return "<ul>" + items.map(item => "<li>" + item + "</li>").join("") + "</ul>";
  }

const text = "Web design plays a crucial role in user experience, branding, and accessibility, shaping the way people interact with online content.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typedText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 45); // Speed of typing (45ms)
    } else {
        document.getElementById("typedText").style.borderRight = "none"; // Remove cursor after typing
    }
}

window.onload = function() {
    setTimeout(typeWriter, 500); // Delay start
};
const app = Vue.createApp({
  data() {
    return {
      selectedCategory: 'Final Portfolio',
      categories: ['Final Portfolio', 'Notable Sites', 'Senior Projects'],
      websitesData: {}
    };
  },
  methods: {
    async fetchWebsitesData() {
      try {
        const response = await fetch('alumni.json'); // Links the json filename to the js
        this.websitesData = await response.json();
      } catch (error) {
        console.error('Error loading website data:', error);
      }
    },
    selectCategory(category) {
      this.selectedCategory = category;
    }
  },
  created() {
    this.fetchWebsitesData();
  }
});

app.mount('#vue_app');
