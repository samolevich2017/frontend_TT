$(document).ready(function () {

    // событие при наведении курсора на пункт меню
    // добавляет к элементу класс hover, что приводит к замене иконки,
    // а также изменению цвета текста
    $(".sidebar-menu-item").on('mouseover', function (e) {
        this.classList.add("hover");
    });

    // событие при отведении курсора на пункт меню
    // добавляет к элементу класс hover
    $(".sidebar-menu-item").on('mouseout', function (e) {
        this.classList.remove("hover");
    });

    // событие при клике по пункту меню
    // добавляет класс active, по которому можно определить
    // какой пункт на данный момент активен
    $(".sidebar-menu-item").on('click', function (e) {

        // собираем все пункты меню, проходим циклом по коллекции пунктов и проверяем:
        // 1) не тот ли это пункт, по которому производится клик
        // 2) а имеет ли он в своем списке классов класс "active"
        // Если все условия истинны, удаляем класс "active" у элемента
        document.querySelectorAll(".sidebar-menu-item").forEach((item)=>{
            if(item !== e.target && item.classList.contains("active")){
                item.classList.remove("active");
            }
        });

        // добавляем класс active пункту, по которому производится клик
        this.classList.add("active");
    });
});