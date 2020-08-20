//using selectors inside the element

// const questions = document.querySelectorAll('.question');

// questions.forEach(function(question) {
//     const btn = question.querySelector('.question-btn');

//     btn.addEventListener('click', function() {
//         questions.forEach(function(item) {
//             if (item !== question)
//                 item.classList.remove('show-text');
//         });
//         question.classList.toggle('show-text');
//     });
// });


// traversing the dom

const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        if (question.classList.contains('show-text')) {
            question.classList.remove('show-text');
        } else {
            questions.forEach(function(que) {
                if(que.classList.contains('show-text'))
                    que.classList.remove('show-text');
            });
            question.classList.add('show-text');
        }
    });
});