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
        question: "Câu hỏi 1: Toàn biết đi xe đạp vào năm bao nhiêu tuổi ?",
        options: ["6 tuổi", "7 tuổi", "Đến giờ vẫn chưa biết đi"],
        answer: "7 tuổi"
    },
    {
        question: "Câu hỏi 2: Tính đến năm 2024 Toàn có bao nhiêu người yêu cũ ?",
        options: ["1", "10", "Không mảnh tình vắt vai :(("],
        answer: "Không mảnh tình vắt vai :(("
    },
    {
        question: "Câu hỏi 3: Nhân vật nào trong phim hoạt hình Doraemon mà Toàn thích nhất ?",
        options: ["Conan", "Kid", "Heji"],
        answer: "Kid"
    },
    {
        question: "Câu hỏi 4: Đâu là trò chơi mà Toàn thích chơi nhất ?",
        options: ["PUBG", "Liên Quân Mobile", "Genshin Impact"],
        answer: "Genshin Impact"
    },
    {
        question: "Câu hỏi 5: Chị N dấu tên (người quen của Toàn) có bao nhiêu nyc ?",
        options: ["5", "10", "Nhiều quá không thống kê nổi"],
        answer: "Nhiều quá không thống kê nổi"
    },
    {
        question: "Câu hỏi 6: Hãy đêm số ngôi sao (màu trắng đang rung rinh) mà Toàn dành tặng bạn ở trang này?",
        options: ["17092006 ngôi sao", "Hàng triệu ngôi sao", "Hàng tỉ ngôi sao"],
        answer: "17092006 ngôi sao"
    },
    {
        question: "Câu hỏi 7: Biệt danh của Toàn là gì ?",
        options: ["Hoi", "Kinz", "Không có biệt danh"],
        answer: "Hoi"
    },
    {
        question: "Câu hỏi 8: Toàn có ghét chị N dấu tên không ( đáng lẽ không cho câu này đâu nhưng tại không xem tin nhắn nên phải thêm zô) ?",
        options: ["Ghét vai chuong", "Siêu siêu ghét", "Ghét ít lắm, bằng số ngôi sao phía sau thôi"],
        answer: "Ghét ít lắm, bằng số ngôi sao phía sau thôi"
    },
    {
        question: "Câu hỏi 9: Toàn có tuyệt vời không?",
        options: ["Quá tuyệt vời là quá tuyệt vời", "Tuyệt chứ", "Còn phải nói"],
        answer: "Còn phải nói"
    },
    {
        question: "Câu hỏi 10: Toàn có đẹp zai không?",
        options: ["Chắc chắn rồi", "Không thể nói không", "Chắc chắn là có"],
        answer: "Không thể nói không"
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
        alert("Đúng nhé!");
    } else {
        alert("Sai rồi!");
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Tính điểm số theo thang 100
        const totalScore = Math.min(score, 100); // Đảm bảo không vượt quá 100
        alert(`Vậy là độ hiểu biết của bạn về Toàn là: ${totalScore}/100`);
    }
}

// Khởi động quiz
loadQuestion();