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
    $("#anchors li a[href^='#']").on('click', function (e) {

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
        customRequest_value = [10, 50, 100, 250, 500, 1000, 'unlimited'], //вносим значения, которые будем сопоставлять
        inputRange_days = document.getElementById("days"), //получаем слайдер
        outputRange_days = document.getElementById("days_value"), //получаем id куда выводить значение
        customDays_value = [30, 90, 182, 365]; //вносим значения, которые будем сопоставлять

    function updateRange_request() {
        outputRange_request.textContent = customRequest_value[parseInt(inputRange_request.value, 10)]; //извлекаем и приводим к числоу значение из слайдера, чтобы по номеру элемента массива вывести неободимое значение в span
    };

    function updateRange_days() {
        outputRange_days.textContent = customDays_value[parseInt(inputRange_days.value, 10)]; //извлекаем и приводим к числоу значение из слайдера, чтобы по номеру элемента массива вывести неободимое значение в span 
    };

    updateRange_request(); //вызываем функцию обновления значения, чтобы при загрузке страницы не было пустых значений
    updateRange_days(); //вызываем функцию обновления значения, чтобы при загрузке страницы не было пустых значений

    window.addEventListener("DOMContentLoaded", updateRange_request);
    inputRange_request.addEventListener("input", updateRange_request);
    window.addEventListener("DOMContentLoaded", updateRange_days);
    inputRange_days.addEventListener("input", updateRange_days);
});
