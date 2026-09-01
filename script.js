// Language Dictionary
const translations = {
    ta: {
        navTitle: "மண்ணும் மனிதமும் காப்போம்",
        orgName: "அன்பின் பாதை எண்ணம்போல் வாழ்க்கை கலை இலக்கிய மன்றம் – திருகோணமலை",
        heroHeading: "வீசாதே... சேமித்துக் கொடு!",
        heroSub: "குப்பையாக வீசினால் மாசு; சேமித்துக் கொடுத்தால் வளம்.",
        heroCta: "புள்ளிகளைக் கணக்கிடுங்கள்",
        aboutTitle: "திட்டத்தின் நோக்கம்",
        aboutDesc: "திருகோணமலை மாவட்டத்தில் பொலித்தீன் மற்றும் பிளாஸ்டிக் கழிவுகளை முறையாகப் பிரித்துச் சேகரித்து, மறுசுழற்சிக்கு அனுப்பக்கூடிய நிலையான சமூகக் கட்டமைப்பை உருவாக்குதல்.",
        targetTitle: "முன்னோடித் திட்ட இலக்கு (3 மாதங்கள்)",
        t1: "100 குடும்பங்கள்",
        t2: "5 வர்த்தக நிலையங்கள்",
        t3: "2 பாடசாலைகள்",
        t4: "3 சேகரிப்பு நிலையங்கள்",
        calcTitle: "பசுமைப் புள்ளிகள் கணிப்பான்",
        calcDesc: "நீங்கள் சேகரித்த பிளாஸ்டிக் எடையை (kg) உள்ளிட்டு புள்ளிகளைக் கண்டறியவும்:",
        calcBtn: "கணக்கிடு",
        placeholder: "எடை (kg)",
        footerText: "© 2026 அன்பின் பாதை எண்ணம்போல் வாழ்க்கை கலை இலக்கிய மன்றம், திருகோணமலை."
    },
    en: {
        navTitle: "Save Soil & Humanity",
        orgName: "Anbin Pathai Ennambol Vaalkkai Art & Literary Forum – Trincomalee",
        heroHeading: "Don't Throw... Save & Give!",
        heroSub: "Littering creates pollution; Collection creates resource.",
        heroCta: "Calculate Points",
        aboutTitle: "Project Objective",
        aboutDesc: "To build a sustainable community structure in Trincomalee district for segregating, collecting, and recycling plastic waste.",
        targetTitle: "Pilot Target (3 Months)",
        t1: "100 Families",
        t2: "5 Commercial Outlets",
        t3: "2 Schools",
        t4: "3 Collection Hubs",
        calcTitle: "Green Points Calculator",
        calcDesc: "Enter collected plastic weight in kilograms to compute your Green Points:",
        calcBtn: "Calculate",
        placeholder: "Weight (kg)",
        footerText: "© 2026 Anbin Pathai Forum, Trincomalee. All rights reserved."
    }
};

let currentLang = 'ta';

// Switch Language
function toggleLanguage(lang) {
    currentLang = lang;
    
    // Toggle Active Class on Buttons
    document.getElementById('btn-ta').classList.toggle('active', lang === 'ta');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Update Text Content
    document.getElementById('nav-title').innerText = translations[lang].navTitle;
    document.getElementById('org-name').innerText = translations[lang].orgName;
    document.getElementById('hero-heading').innerText = translations[lang].heroHeading;
    document.getElementById('hero-sub').innerText = translations[lang].heroSub;
    document.getElementById('hero-cta').innerText = translations[lang].heroCta;
    document.getElementById('about-title').innerText = translations[lang].aboutTitle;
    document.getElementById('about-desc').innerText = translations[lang].aboutDesc;
    document.getElementById('target-title').innerText = translations[lang].targetTitle;
    document.getElementById('t1').innerText = translations[lang].t1;
    document.getElementById('t2').innerText = translations[lang].t2;
    document.getElementById('t3').innerText = translations[lang].t3;
    document.getElementById('t4').innerText = translations[lang].t4;
    document.getElementById('calc-title').innerText = translations[lang].calcTitle;
    document.getElementById('calc-desc').innerText = translations[lang].calcDesc;
    document.getElementById('calc-btn').innerText = translations[lang].calcBtn;
    document.getElementById('weightInput').placeholder = translations[lang].placeholder;
    document.getElementById('footer-text').innerText = translations[lang].footerText;

    // Reset result text
    document.getElementById('result').innerText = "";
}

// Calculate Green Points (1 kg = 10 Points)
function calculatePoints() {
    const weight = parseFloat(document.getElementById('weightInput').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || weight <= 0) {
        resultDiv.innerText = currentLang === 'ta' 
            ? "தயவுசெய்து செல்லுபடியாகும் எடையை உள்ளிடவும்." 
            : "Please enter a valid weight.";
        resultDiv.style.color = "#d32f2f";
        return;
    }

    const points = weight * 10;
    resultDiv.style.color = "#1b5e20";
    
    if (currentLang === 'ta') {
        resultDiv.innerText = `நீங்கள் வழங்கிய ${weight} kg கழிவுகளுக்கு ${points} பசுமைப் புள்ளிகள் பெறப்படுகின்றன!`;
    } else {
        resultDiv.innerText = `For ${weight} kg of waste, you earned ${points} Green Points!`;
    }
}