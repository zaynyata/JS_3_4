var pageWrapper = document.createElement('div');
var testTitle = document.createElement('h1');
var form = document.createElement('form');
var testObj = {
    createWrapper: function () {
        pageWrapper.classList.add('center-block');
        document.body.appendChild(pageWrapper);
    },
    createTitle: function () {
        testTitle.classList.add('text-center');
        testTitle.innerHTML = 'Тест по программированию';
        pageWrapper.appendChild(testTitle);
    },
    createForm: function () {
        form.classList.add('form-group');
        pageWrapper.appendChild(form);
    },
    createCard: function () {
        var question = '';
        var answerLabel = '';
        var answerInput = '';
        var answerText = '';
        for (i = 0; i < 3; i++) {
            var card = document.createElement('div');
            card.classList.add('card');
            form.appendChild('card');

            guestion = document.createElement('h3')
            guestion.innerHTML = ((i + 1) + '. Вопрос №' + (i + 1));
            card.appendChild(question);
            for (j = 0; j < 3; j++) {
                answerLabel = document.createElement('label');
                answerInput = document.createElement('input');
                answerInput.type = 'checkbox';
                answerText = document.createTextNode('Вариант ответа №' + (j + 1));
                card.appendChild(answerLabel);
                answerLabel.appendChild(answerInput);
                answerLabel.appendChild(answerText);
            }
        }
    },
    createButton: function () {
        var button = document.createElement('button');
        button.classList.add('btn', 'btn-primary');
        button.type = 'submit';
        button.innerHTML = 'Проверить мои результаты'ж
        form.appendChild(button);
    },
    createTest: function () {
        this.createWrapper();
        this.createTitle();
        this.createForm();
        this.createCard();
        this.createButton();
    }
}
testObj.createTest();