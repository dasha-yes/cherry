const quiz = document.getElementById("catQuiz");

if (quiz) {
    quiz.addEventListener("submit", function(event) {
        event.preventDefault();

        const answers = new FormData(quiz);

        const problems = [];

        if (answers.get("allergy") === "yes") {
            problems.push("Есть риск аллергии. Перед появлением кошки важно проконсультироваться с аллергологом.");
        }

        if (answers.get("money") === "no") {
            problems.push("Пока нет финансовой возможности обеспечить регулярный уход и ветеринарную помощь.");
        }

        if (answers.get("family") === "no") {
            problems.push("Необходимо согласие всех членов семьи.");
        }

        if (answers.get("safety") === "no") {
            problems.push("Сначала нужно подготовить безопасное пространство для кошки.");
        }

        if (answers.get("home") === "other") {
            problems.push("Нужно проверить правила проживания и разрешено ли содержание животных.");
        }

        const result = document.getElementById("result");

        if (problems.length > 0) {
            result.innerHTML = `
                <h2>Нужно немного подготовиться ♡</h2>
                <p>Перед появлением кошки важно решить следующие вопросы:</p>
                <ul>
                    ${problems.map(problem => `<li>${problem}</li>`).join("")}
                </ul>
                <p>Это не значит, что тебе нельзя заводить кошку. Просто некоторые условия требуют внимания.</p>
            `;
        } else {
            result.innerHTML = `
                <h2>Отличное начало! ♡</h2>
                <p>По твоим ответам явных препятствий не обнаружено.</p>
                <p>Теперь можно переходить к выбору кошки, учитывая её характер, потребности и особенности ухода.</p>
            `;
        }

        result.scrollIntoView({ behavior: "smooth" });
    });
}