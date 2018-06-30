$(function () {

    // Custom JS
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
    });
    //togglers
    var wrapper = $('.buttons__wrapper');
    button = wrapper.find('.capability-btn');

    button.on("click", function () {
        wrapper.children().removeClass("active");
        $(this).addClass("active");
    });
    //smoothscroll
    $(".navbar-nav li a[href^='#']").on('click', function (e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });
    //custom calculator
    ////slider values
    var inputRange_request = document.getElementById("request"), //получаем слайдер
        outputRange_request = document.getElementById("request_value"), //получаем id куда выводить значение
        customRequest_value = [10, 50, 100, 250, 500, 1000, 2000, 'unlimited'], //вносим значения, которые будем сопоставлять
        inputRange_days = document.getElementById("days"), //получаем слайдер
        outputRange_days = document.getElementById("days_value"), //получаем id куда выводить значение
        customDays_value = [30, 90, 182, 365], //вносим значения, которые будем сопоставлять
        outputTariff = document.getElementById("totalTariff");
    outputTariff.textContent = 300;

    function updateRange_request() {
        outputRange_request.textContent = customRequest_value[parseInt(inputRange_request.value, 10)]; //извлекаем и приводим к числоу значение из слайдера, чтобы по номеру элемента массива вывести неободимое значение в span
    };

    function updateRange_days() {
        outputRange_days.textContent = customDays_value[parseInt(inputRange_days.value, 10)]; //извлекаем и приводим к числоу значение из слайдера, чтобы по номеру элемента массива вывести неободимое значение в span 
    };

    updateRange_request(); //вызываем функцию обновления значения, чтобы при загрузке страницы не было пустых значений
    updateRange_days(); //вызываем функцию обновления значения, чтобы при загрузке страницы не было пустых значений
    inputRange_request.oninput = function update1() {
        outputRange_request.textContent = customRequest_value[parseInt(inputRange_request.value, 10)];
        upadteTariffCost();// вызываем функцию обновления стоимости тарифа
    };

    inputRange_days.oninput = function update2() {
        outputRange_days.textContent = customDays_value[parseInt(inputRange_days.value, 10)];
        upadteTariffCost();// вызываем функцию обновления стоимости тарифа
    };

    function upadteTariffCost() { //обновляем тарифную стоимость по значениям ползунков. ничего лучше не придумал :(

        if (inputRange_request.value == 0 && inputRange_days.value == 0) {
            outputTariff.textContent = 300
        } else if (inputRange_request.value == 0 && inputRange_days.value == 1) {
            outputTariff.textContent = 400
        } else if (inputRange_request.value == 0 && inputRange_days.value == 2) {
            outputTariff.textContent = 500
        } else if (inputRange_request.value == 0 && inputRange_days.value == 3) {
            outputTariff.textContent = 600
        } else if (inputRange_request.value == 1 && inputRange_days.value == 0) {
            outputTariff.textContent = 750
        } else if (inputRange_request.value == 1 && inputRange_days.value == 1) {
            outputTariff.textContent = 1000
        } else if (inputRange_request.value == 1 && inputRange_days.value == 2) {
            outputTariff.textContent = 1250
        } else if (inputRange_request.value == 1 && inputRange_days.value == 3) {
            outputTariff.textContent = 1500
        } else if (inputRange_request.value == 2 && inputRange_days.value == 0) {
            outputTariff.textContent = 1000
        } else if (inputRange_request.value == 2 && inputRange_days.value == 1) {
            outputTariff.textContent = 1500
        } else if (inputRange_request.value == 2 && inputRange_days.value == 2) {
            outputTariff.textContent = 2000
        } else if (inputRange_request.value == 2 && inputRange_days.value == 3) {
            outputTariff.textContent = 2500
        } else if (inputRange_request.value == 3 && inputRange_days.value == 0) {
            outputTariff.textContent = 2000
        } else if (inputRange_request.value == 3 && inputRange_days.value == 1) {
            outputTariff.textContent = 2500
        } else if (inputRange_request.value == 3 && inputRange_days.value == 2) {
            outputTariff.textContent = 3250
        } else if (inputRange_request.value == 3 && inputRange_days.value == 3) {
            outputTariff.textContent = 5000
        } else if (inputRange_request.value == 4 && inputRange_days.value == 0) {
            outputTariff.textContent = 3500
        } else if (inputRange_request.value == 4 && inputRange_days.value == 1) {
            outputTariff.textContent = 4500
        } else if (inputRange_request.value == 4 && inputRange_days.value == 2) {
            outputTariff.textContent = 6000
        } else if (inputRange_request.value == 4 && inputRange_days.value == 3) {
            outputTariff.textContent = 7500
        } else if (inputRange_request.value == 5 && inputRange_days.value == 0) {
            outputTariff.textContent = 6000
        } else if (inputRange_request.value == 5 && inputRange_days.value == 1) {
            outputTariff.textContent = 8000
        } else if (inputRange_request.value == 5 && inputRange_days.value == 2) {
            outputTariff.textContent = 11000
        } else if (inputRange_request.value == 5 && inputRange_days.value == 3) {
            outputTariff.textContent = 13000
        } else if (inputRange_request.value == 6 && inputRange_days.value == 0) {
            outputTariff.textContent = 10000
        } else if (inputRange_request.value == 6 && inputRange_days.value == 1) {
            outputTariff.textContent = 14000
        } else if (inputRange_request.value == 6 && inputRange_days.value == 2) {
            outputTariff.textContent = 20000
        } else if (inputRange_request.value == 6 && inputRange_days.value == 3) {
            outputTariff.textContent = 24000
        } else if (inputRange_request.value == 7 && inputRange_days.value == 0) {
            outputTariff.textContent = 8000
        } else if (inputRange_request.value == 7 && inputRange_days.value == 1) {
            outputTariff.textContent = 12000
        } else if (inputRange_request.value == 7 && inputRange_days.value == 2) {
            outputTariff.textContent = 20000
        } else if (inputRange_request.value == 7 && inputRange_days.value == 3) {
            outputTariff.textContent = 30000
        } else if (inputRange_request.value == 8 && inputRange_days.value == 0) {
            outputTariff.textContent = 8000
        } else if (inputRange_request.value == 8 && inputRange_days.value == 1) {
            outputTariff.textContent = 12000
        } else if (inputRange_request.value == 8 && inputRange_days.value == 2) {
            outputTariff.textContent = 20000
        } else if (inputRange_request.value == 8 && inputRange_days.value == 3) {
            outputTariff.textContent = 30000
        }
        
    }

});
