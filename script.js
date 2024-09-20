const stars = [];
const count = 500;
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for(let i = 0; i < count; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const star = {
        x: x,
        y: y,
        r: Math.random() * 2 + 1
    };
    stars.push(star);
}

// Vẽ sao
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    for(let i = 0; i < count; i++) {
        const star = stars[i];
        context.beginPath();
        context.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        context.fill();
    }
}

// Cập nhật vị trí sao
function update() {
    for(let i = 0; i < count; i++) {
        const star = stars[i];
        star.x += Math.random() * 2 - 1;
        star.y += Math.random() * 2 - 1;
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
        if (star.y > canvas.height) star.y = 0;
        if (star.y < 0) star.y = canvas.height;
    }
}

// Lặp lại chuyển động sao và vẽ trái tim
setInterval(function() {
    update();
    draw();
}, 100 / 6);
const questions = [
    {
        question: "Câu hỏi 1: Tao tên thật là gì ???",
        options: ["Thảo Vi", "Ngọc Thảo ", "nnvt"],
        answer: "nnvt" 
    },
    {
        question: "Câu hỏi 2: Tao thích nuôi j  ?",
        options: ["mèo", "chó ", "ko biết"],
        answer: "ko biết " 
    },
    {
        question: "Câu hỏi 3: Tao có ghét nicu ko?",
        options: ["có", "rất có ", "ghét điên"],
        answer: "ghét điên" 
    },
    {
        question: "Câu hỏi 4: Tao thích chơi game j?",
        options: ["genshin", "lq", "pu"],
        answer: "genshin" 
    },
    {
        question: "Câu hỏi 5:Tao có tuyệt vời không",
        options: ["có", "rất có", "chắc chắn là có"],
        answer: "chắc chắn là có" 
    },
    {
        question: "Câu hỏi 6: Tao thích ….?",
        options: ["ngủ", "đi chơi", "nằm"],
        answer: "nằm" 
    },
    {
        question: "Câu hỏi 7: Tao hướng gì",
        options: ["ngoại", "lội", "linh tinh"],
        answer: "lội" 
    },
    {
        question: "Câu hỏi 8: Gu tao là… ?",
        options: ["m8 6 múi ", "cute", "má lúm"],
        answer: "má lúm" 
    },
    {
        question: "Câu hỏi 9: tao ấn tượng vs ai bởi cái j",
        options: ["răng ", "mùi", "mắt"],
        answer: "mùi" 
    },
    {
        question: "Câu hỏi 10: m là ai ?",
        options: ["đoán xem ", "bạn", "mẹ m "],
        answer: "đoán xem" 
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });
}

function selectOption(option) {
    const question = questions[currentQuestionIndex];
    if (option === question.answer) {
        score += 10; // Tăng điểm cho mỗi câu đúng (50 điểm cho mỗi câu)
        alert("giỏi đếy!");
    } else {
        alert("Quá kém!");
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Tính điểm số theo thang 100
        const totalScore = Math.min(score, 100); // Đảm bảo không vượt quá 100
        alert(`Vậy là m đạt được: ${totalScore}/100`);
    }
}

// Khởi động quiz
loadQuestion();
