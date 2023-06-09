const questions = [
    {
        question: "В чому допомагає візуальна Ієрархія?" ,
        answer: "Допомагає глядачу сканувати інформацію у потрібній послідовності",
        options: [
            "Визначає загальну ступінь зручності предмета при використанні", 
            "Допомагає вибрати правильний колір",
            "Допомагає в роботі з фоном",
            "Допомагає глядачу сканувати інформацію у потрібній послідовності"
        ]
    },
    {
        question: "Де розміщений Footer?" ,
        answer:" У нижній частині сайту",
        options: [
            " У нижній частині сайту", 
            " Відображається поверх вмісту вікна",
            " У верхній частині сайту",
            " Зліва від поля реєстрації"
        ]
    },
    {
        question: "Елемент інтерфейсу користувача Data Picker:" ,
        answer:" Вибір дати",
        options: [
            " Смуга прокрутки", 
            " Індикатор завантаження сторінки",
            " Дозволяє включити, або виключити запропоновану функцію",
            " Вибір дати"
        ]
    },
    {
        question: "Елемент інтерфейсу користувача Dropdowns:" ,
        answer:" Опція вибору з поданого списку",
        options: [
            " Смуга прокрутки", 
            " Індикатор завантаження сторінки",
            " Переключатель",
            " Опція вибору з поданого списку"
        ]
    },
    {
        question: "Елемент інтерфейсу користувача Preloader:" ,
        answer:" Індикатор завантаження сторінки",
        options: [
            " Смуга прокрутки",
            " Поле для вводу",
            " Індикатор завантаження сторінки",
            " Переключатель"
        ]
    },
    {
        question: "Елемент інтерфейсу користувача Input:" ,
        answer:" Поле для вводу",
        options: [
            " Дозволяє зробити множинний вибір з декількох варіантів",
            " Поле для вводу",
            " Переключатель",
            " Дозволяє вибрати тільки один з елементів"
        ]
    },
    {
        question: "Елемент інтерфейсу користувача Radio buttons (радіокнопка)" ,
        answer:" Дозволяє вибрати тільки одну з позицій",
        options: [
            " Дозволяє зробити множинний вибір з декількох варіантів",
            " Дозволяє вибрати тільки одну з позицій",
            " Переключатель",
            " Дозволяє збільшувати або зменшувати значення у полі"
        ]
    },
    {
        question: "Елемент інтерфейсу користувача Slider:" ,
        answer:" Смуга прокрутки",
        options: [
            " Смуга прокрутки",
            " Поле для вводу",
            " Індикатор завантаження сторінки",
            " Переключатель"
        ]
    },
    {
        question: "Елемент інтерфейсу користувача Switches:" ,
        answer:" Дозволяє включити, або виключити запропоновану функцію",
        options: [
            " Смуга прокрутки",
            " Індикатор завантаження сторінки",
            " Дозволяє включити, або виключити запропоновану функцію",
            " Опція вибору з поданого списку"
        ]
    },
    {
        question: "Елемент інтерфейсу користувача Сheckbox (чекбокс):" ,
        answer: " Дозволяє зробити множинний вибір з декількох варіантів",
        options: [
            " Дозволяє зробити множинний вибір з декількох варіантів",
            " Дозволяє вибрати тільки один з елементів",
            " Переключатель",
            " Дозволяє збільшувати або зменшувати значення у полі"
        ]
    },
    {
        question: "Елемент інтерфейсу користувача Список - це:" ,
        answer: " Частина інтерфейсу,що відображається у вигляді списку елементів, що прокручується",
        options: [
            " Елемент управління, вся взаємодія користувача з яким обмежується однією дією - натисненням",
            " Частина інтерфейсу,що відображається у вигляді списку елементів, що прокручується",
            " Елемент, дає можливість користувачам вибирати значення із списку, не дозволяючи вводити довільне значення",
            " Елемент, за допомогою якого можна вибрати лише один з запропонованих варіантів"
        ]
    },
    {
        question: "З чого починається розробка користувацького інтерфейсу?" ,
        answer: " З розробки ТЗ",
        options: [
            " З розробки ТЗ",
            " З аналізу ринку",
            " З проектування прототипу",
            " З тестування"
        ]
    },
    {
        question: "З яких елементів складається інтерфейс користувача?" ,
        answer: " Елементи управління системою, навігація між блоками системи, набір завдань користувача",
        options: [
            " Елементи управління системою, навігація між блоками системи, набір завдань користувача",
            " Навігація між блоками системи, системна метафора, набір завдань користувача",
            " Системна метафора, елементи управління системою, навігація між блоками системи",
            " Візуальний дизайн екранів програми, набір завдань користувача, системна метафора"
        ]
    },
    {
        question: "Каскадність в меню використовують для:" ,
        answer: " Зміни глибини меню",
        options: [
            " Зміни ширини меню",
            " Зміни глибини меню",
            " Зміни кількості пунктів меню",
            " Зміни змісту пунктів меню"
        ]
    },
    {
        question: "На що спрямований Usability?" ,
        answer: " На створення продукту, зручного для користувача",
        options: [
            " На створення продукту, зручного для користувача",
            " На точність виконання роботи",
            " На правильність виконання технічного завдання",
            " На вивчення і планування взаємодій в системі"
        ]
    },
    {
        question: "На які три види поділяється сучасна Ергономіка?" ,
        answer: " Мікроергономіка, мідіергономіка, макроергономіка",
        options: [
            " Мікроергономіка, мідіергономіка, макроергономіка",
            " Мікроергономіка, ерономіка, мідіергономіка",
            " Виробнича, природнича, технологічна",
            " Планувальна, розробча, комп'ютерна"
        ]
    },
    {
        question: "Основні елементи UI:" ,
        answer: " Кольори, іконки, типографія, навігація, кнопки, стиль, анімація, меню",
        options: [
            " Кольори, іконки, типографія, навігація, кнопки, стиль, анімація, меню",
            " Практичність, простота використання та швидкодія системи",
            " Образ, враження, емоції та користь, отримані від взаємодії з продуктом",
            " Ясність, відповідність, естетика інтерфейсів"
        ]
    },
    {
        question: "Основні об'єкти дослідження UX:" ,
        answer: " Враження, емоції та користь отримані від взаємодії з продуктом",
        options: [
            " Враження, емоції та користь отримані від взаємодії з продуктом",
            " Ергономіка, останні тенденції, інтерфейс користувача",
            " Образ, технологічна форма, естетична цінність",
            " Естетика інтерфейсів"
        ]
    },
    {
        question: "Основні принципи UX:" ,
        answer: " Швидкість розуміння структури та призначення, користь користування, логіка, ясність, довіра, впізнаність__",
        options: [
            " Швидкість розуміння структури та призначення, користь користування, логіка, ясність, довіра, впізнаність__",
            " Ергономіка, останні тенденції, інтерфейс користувача",
            " рактичність, простота використання, швидкодія системи, ясність, відповідність, естетика інтерфейсів",
            " Образ, технологічна форма, естетична цінність"
        ]
    },
    {
        question: "Основною перевагою використання меню є те, що:" ,
        answer: " користувач не задає команду, а обирає необхідну опцію",
        options: [
            " користувач має описаний набір команд, за якими відбувається керування програмою",
            " користувач не задає команду, а обирає необхідну опцію",
            " користувач не потребує клавіатури і миші",
            " користувач задає команди вручну"
        ]
    },
    {
        question: "Стан кнопки Active?" ,
        answer: " При натисканні",
        options: [
            " Початковий стан",
            " При наведенні",
            " При натисканні",
            " Недоступність позиції"
        ]
    },
    {
        question: "Стан кнопки Default?" ,
        answer: " Початковий стан",
        options: [
            " Початковий стан",
            " При наведенні",
            " При натисканні",
            " Недоступність позиції"
        ]
    },
    {
        question: "Стан кнопки Disabled?" ,
        answer: " Недоступність позиції",
        options: [
            " Початковий стан",
            " При наведенні",
            " При натисканні",
            " Недоступність позиції"
        ]
    },
    {
        question: "Стан кнопки Hover?" ,
        answer: " При наведенні",
        options: [
            " Початковий стан",
            " При наведенні",
            " При натисканні",
            " Недоступність позиції"
        ]
    },
    {
        question: "Чим інтерфейс характеризується?" ,
        answer: " Ясність, виразність, відповідність, послідовність, естетика, продуктивність",
        options: [
            " Ясність, виразність, відповідність, послідовність, естетика, продуктивність",
            " Ясність, відповідність, продуктивність",
            " Виразність, послідовність, естетика, яскравість, контрастність, складнсть",
            " Ясність, відповідність, естетика"
        ]
    },
    {
        question: "Що є Прототипом?" ,
        answer: " Макет продукту, створюється з метою перевірки придатності пропонованих для застосування концепцій, архітектурних чи технологічних рішень",
        options: [
            " Макет продукту, створюється з метою перевірки придатності пропонованих для застосування концепцій, архітектурних чи технологічних рішень",
            " Творчий метод, процес і результат художньо-технічного проектування",
            " Розміщення текстового та ілюстративного матеріалу на сторінках чи полосах друкованого або електронного видання",
            " Сукупність засобів, методів і правил взаємодії між елементами системи"
        ]
    },
    {
        question: "Що з переліченого належить до елементів управління інтерфейсу?" ,
        answer: " Кнопки, графічні елементи, вказівки меню",
        options: [
            " Кнопки і кольори",
            " Графічні елементи виключно розміру 1:2",
            " Голосові вказівки",
            " Кнопки, графічні елементи, вказівки меню"
        ]
    },
    {
        question: "Що називається візуальною Ієрархією?" ,
        answer: " Послідовність сприйняття інформації від найважливішого до менш важливого",
        options: [
            " Поняття в мікроергономіці, що визначає загальну ступінь зручності предмета при використанні",
            " Суміш вражень та емоцій від користування продуктом",
            " Мистецтво розміщення текстового матеріалу",
            " Послідовність сприйняття інформації від найважливішого до менш важливого"
        ]
    },
    {
        question: "Що називається величиною, яка визначає кількість пікселів на одиницю площі, або одиницю довжини?" ,
        answer: " Роздільна здатніст",
        options: [
            " Роздільна здатніст",
            " Піксельна сітка",
            " Растрова графіка",
            " Модульна сітка"
        ]
    },
    {
        question: "Що називається Свайпом?" ,
        answer: " Перегляд елементів блоку веб сторінки зліва - направо",
        options: [
            " Перегляд елементів блоку веб сторінки зліва - направо",
            " Підсвічування елемента при наведені на нього мишкою",
            " Процес роботи в графічному редакторі",
            " Робота над створенням зображення"
        ]
    },
    {
        question: "Що називається Скролінгом?" ,
        answer: " Гортання веб сторінки зверху - вниз",
        options: [
            " Гортання веб сторінки зверху - вниз",
            " Підсвічування елемента при наведені на нього мишкою",
            " Процес роботи в графічному редакторі",
            " Робота над створенням зображення"
        ]
    },
    {
        question: "Що не належить до користувацького інтерфейсу?" ,
        answer: " Процесор",
        options: [
            " Мишка",
            " Монітор",
            " Клавіатура",
            " Процесор"
        ]
    },
    {
        question: "Що таке Footer?" ,
        answer: " Нижня частина сайту, яка, як правило, включає в себе контактні дані, правила використання та посилання на соцмережі",
        options: [
            " Окрема сторінка, яка відображається самостійно чи з іншими сторінками у вікні програми",
            " Нижня частина сайту, яка, як правило, включає в себе контактні дані, правила використання та посилання на соцмережі",
            " Графічний модуль, який відображається поверх вмісту вікна",
            " Верхня частина сайту, яка, як правило, включає в себе назву, логотип та панель навігації"
        ]
    },
    {
        question: "Що таке Header?" ,
        answer: " Верхня частина сайту, яка, як правило, включає в себе назву, логотип та панель навігації",
        options: [
            " Окрема сторінка, яка відображається самостійно чи з іншими сторінками у вікні програми",
            " Нижня частина сайту, яка, як правило, включає в себе контактні дані, правила використання та посилання на соцмережі",
            " Графічний модуль, який відображається поверх вмісту вікна",
            " Верхня частина сайту, яка, як правило, включає в себе назву, логотип та панель навігації"
        ]
    },
    {
        question: "Що таке Sandwich menu?" ,
        answer: " Згорнуте в одну іконку меню. При натисканні на цю іконку меню розгортається, це особливо актуально для мобільних версій сайтів",
        options: [
            " Макет, який використовується для демонстрації зовнішнього вигляду продукту чи виробу",
            " Нижня частина сайту, яка, як правило, включає в себе контактні дані, правила використання та посилання на соцмережі",
            " Згорнуте в одну іконку меню. При натисканні на цю іконку меню розгортається, це особливо актуально для мобільних версій сайтів",
            " Сукупність засобів, методів і правил взаємодії між елементами системи"
        ]
    },
    {
        question: "Що таке UI?" ,
        answer: " Оформлення інтерфейсу",
        options: [
            " Оформлення інтерфейсу",
            " Досвід користування",
            " Мова розмітки",
            " Каскадна таблиця стилів"
        ]
    },
    {
        question: "Що таке Usability?" ,
        answer: " Зручність та простота в використанні",
        options: [
            " Зручність та простота в використанні",
            " Нормативний документ",
            " Технологія виконання окремих видів роботи",
            " Вимоги з техніки безпеки"
        ]
    },
    {
        question: "Що таке UX? " ,
        answer: " Вивчення досвіду користувача та поведінки",
        options: [
            " Інтерфейс користувача",
            " Вивчення досвіду користувача та поведінки",
            " Мова розмітки",
            " Каскадна таблиця стилів"
        ]
    },
    {
        question: "Що таке інтерфейс користувача?" ,
        answer: " Засіб зручної взаємодії користувача з інформаційною системою",
        options: [
            " Засіб зручної взаємодії користувача з інформаційною системою",
            " Каскадна таблиця стилів",
            " Зовнішній вигляд додатку",
            " Набір засобів для роботи в Adobe Photoshop"
        ]
    },
    {
        question: "Що таке верстка?" ,
        answer: " Розміщення текстового та ілюстративного матеріалу на сторінках чи полосах друкованого або електронного видання, що відповідає певним технічним і естетичним вимогам та критеріям, за спеціальними правилами та вказівками замовника",
        options: [
            " Макет продукту, створюється з метою перевірки придатності пропонованих для застосування концепцій, архітектурних і / або технологічних рішень",
            " Творчий метод, процес і результат художньо-технічного проектування промислових виробів, їхніх комплексів і систем, орієнтований на досягнення найповнішої відповідності створюваних об'єктів і середовища загалом потребам людини, як утилітарних, так і естетичних",
            " Розміщення текстового та ілюстративного матеріалу на сторінках чи полосах друкованого або електронного видання, що відповідає певним технічним і естетичним вимогам та критеріям, за спеціальними правилами та вказівками замовника",
            " Сукупність засобів, методів і правил взаємодії між елементами системи"
        ]
    },
    {
        question: "Що таке вихідний потік?" ,
        answer: " Потік інформації, який виникає в машині",
        options: [
            " Потік інформації, який виникає в машині",
            " Потік інформації, який починається в області завдань",
            " Система, яка виконує обслуговування вимог, що надходять до неї",
            " Період часу, протягом якого обслуговується вимога"
        ]
    },
    {
        question: "Що таке вхідний потік?" ,
        answer: " Потік інформації, який починається в області завдань, коли користувач має кілька завдань, які вимагають використання комп'ютера",
        options: [
            " Потік інформації, який починається в області завдань, коли користувач має кілька завдань, які вимагають використання комп'ютера",
            " Вплив результату функціонування будь-якої системи на характер її подальшого функціонування",
            " Потік інформації, який виникає в машині під час взаємодії користувача з нею - в момент передачі вхідних\вихідних параметрів",
            " Система, яка виконує обслуговування вимог, що надходять до неї"
        ]
    },
    {
        question: "Що таке Ергономіка?" ,
        answer: " Міждисциплінарна наука, що комплексно вивчає проблеми взаємодії людини й техніки в конкретних умовах трудової діяльності",
        options: [
            " Міждисциплінарна наука, що комплексно вивчає проблеми взаємодії людини й техніки в конкретних умовах трудової діяльності",
            " Область науково прикладних досліджень, що знаходяться на стику технічних наук",
            " аукова дисципліна, що комплексно вивчає людину (групу людей) в конкретних умовах її (їх) діяльності в сучасному виробництві",
            " Вивчення, планування і розробка взаємодії між людьми (користувачами) і комп'ютерами"
        ]
    },
    {
        question: "Що таке зворотній зв'язок?" ,
        answer: " Вузли взаємодії, що проходять через інтерфейс, оцінюються, модеруються та підтверджуються",
        options: [
            " Вузли взаємодії, що проходять через інтерфейс, оцінюються, модеруються та підтверджуються",
            " Потік інформації, який починається в області завдань",
            " Потік інформації, який виникає в машині, оцінюється, модерується та підтверджується",
            " Система, яка виконує обслуговування вимог, що надходять до неї"
        ]
    },
    {
        question: "Що таке Кнопка?" ,
        answer: " Елемент управління, вся взаємодія користувача з яким обмежується однією дією - натисненням",
        options: [
            " Елемент управління, вся взаємодія користувача з яким обмежується однією дією - натисненням",
            " Віджет графічного інтерфейсу користувача, який відображається у вигляді списку елементів, що прокручується",
            " Інструмент, який дає можливість користувачам вибирати значення із списку, не дозволяючи вводити довільне значення",
            " Інструмент, за допомогою якого можна вибрати лише один з запропонованих варіантів"
        ]
    },
    {
        question: "Що таке людино-машинна взаємодія? " ,
        answer: " Методи і засоби, які забезпечують взаєможію між користувачем (оператором) і системою, надають можливість керувати системою і контролювати її роботу",
        options: [
            " Взаємодія користувача з системою (машиною), яка дозволяє полегшити виконання певних завдань",
            " Обслуговування системи (машини) людиноюі",
            " Методи і засоби, які забезпечують взаєможію між користувачем (оператором) і системою, надають можливість керувати системою і контролювати її роботу",
            " Спеціальна область екрана, за допомогою якої користувач оглядає окремі аспекти своєї взаємодії з задачею"
        ]
    },
    {
        question: "Що таке Мікроергономіка?" ,
        answer: " Дослідження і проектування систем людина - машина, наприклад інтерфейси програмних продуктів",
        options: [
            " Дослідження і проектування систем людина - машина, наприклад інтерфейси програмних продуктів",
            " Область науково прикладних досліджень",
            " Наукова дисципліна, що комплексно вивчає людину (групу людей) в конкретних умовах її (їх) діяльності в сучасному виробництві",
            " Вивчення, планування і розробка взаємодії між людьми"
        ]
    },
    {
        question: " Як називається, набір правил, засобів, які забезпечують обмін повідомленнями між користувачем і комп'ютером? " ,
        answer: " Інтерфейс користувача операційної системи",
        options: [
            " Інтерфейс користувача операційної системи",
            " Операційна система",
            " Система керування базами даних",
            " Контекстне меню"
        ]
    },
    {
        question: "Як розшифровується абревіатура UI? " ,
        answer: " User Interface",
        options: [
            " User Interface",
            " User Infrastructure",
            " Update Illustrator",
            " User Illustration"
        ]
    },
    {
        question: "Як розшифровується абревіатура UX? " ,
        answer: " User Experience",
        options: [
            " User Experience",
            " User Infrastructure",
            " General Illustrator",
            " User Illustration"
        ]
    },
    {
        question: "Які є види підтримки користувача? " ,
        answer: " Підказки, довідка, повідомлення про помилки",
        options: [
            " Підказки, довідка, повідомлення про помилки",
            " Коментарі до вихідного коду",
            " Доступ до програмного коду",
            " Відео коментар"
        ]
    },
    {
        question: "Які етапи виділяють в розробці користувацького інтерфейсу? " ,
        answer: " Проектування, реалізація і тестування",
        options: [
            " Проектування, архітектура і тестування",
            " Реалізація і тестування",
            " Проектування, реалізація і тестування",
            " Юзабіліті, WIMP"
        ]
    },
    {
        question: "Які найбільш поширені операційні системи для комп'ютерів та ноутбуків? " ,
        answer: " Windows, Mac OS",
        options: [
            " Unix-подібна",
            " Windows, Mac OS",
            " Mac OS X",
            " MS-Dos"
        ]
    },
    {
        question: "Що таке UX? " ,
        answer: " Вивчення досвіду користувача та поведінки",
        options: [
            " Інтерфейс користувача",
            " Вивчення досвіду користувача та поведінки",
            " Мова розмітки",
            " Каскадна таблиця стилів"
        ]
    },
    {
        question: "Які найбільш поширені операційні системи для мобільних телефонів і планшетів? " ,
        answer: " Android, iOS",
        options: [
            " Windows, Mac OS",
            " Android, iOS",
            " Linux, Mac OS, Android, Windows Mobile",
            " Linux, Mac OS, Windows Mobile"
        ]
    },
    {
        question: "Яка ключова характеристика інтерфейсу? " ,
        answer: " Продуктивність",
        options: [
            " Продуктивність",
            " Привабливсіть",
            " Легкість",
            " Надійність"
        ]
    },
    {
        question: "Яка мета створення інтерфейсу користувача? " ,
        answer: " Спрощення і полегшення керуваня певним об'єктом або машиною",
        options: [
            " Спрощення і полегшення керуваня певним об'єктом або машиною",
            " Обробка даних",
            " Зміна вводу/виводу даних",
            " Покращення функцій машини чи обє'кта, що дозволить урізноманітнити спектр задач"
        ]
    },
    {
        question: "Яка область завдань людино-комп'ютерної взаємодії? " ,
        answer: " Умови і цілі, орієнтовані на користувача",
        options: [
            " Умови і цілі, орієнтовані на користувача",
            " Умови орієнтовані на ПКь",
            " Умови і цілі, орієнтовані на ПК",
            " Цілі, орієнтовані на користувача"
        ]
    },
    {
        question: "Яка опція, дозволяє побачити збільшене зображення фрагмента сторінки або зменшений вид однієї або декількох сторінок відразу? " ,
        answer: " Масштаб",
        options: [
            " Правка",
            " Параметри сторінки",
            " Відкрити",
            " Масштаб"
        ]
    },
    {
        question: "Яке визначення терміну Framework? " ,
        answer: " Каркас, інфраструктура програмних рішень, що полегшує розробку складних систем",
        options: [
            " Каркас, інфраструктура програмних рішень, що полегшує розробку складних систем",
            " Інструмент для підбору кольору",
            " Універсальний інструмент для організації візуального простору",
            " Суміш вражень та емоцій від користування продуктом"
        ]
    },
    {
        question: "Який з фізичних каналів найкраще передає інформацію про об'єкт?" ,
        answer: " Зоровий канал",
        options: [
            " Шкірний канал",
            " Слуховий канал",
            " Зоровий канал",
            " Температурний канал"
        ]
    },
]