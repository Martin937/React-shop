1. Устанавливаем GIT
2.
3. npm init Создание .JSON-файлf в каталог проекта
4. git init Запускаем git
5. git config --local user.name "Martin937" Объявляем свое имя
6. git config --local user.email "Martin937@yandex.ru" Объявляем свой имейл
7. git config --local core.autocrlf true Параметры установки окончаний строк
8. git config --local core.safecrlf warn Параметры установки окончаний строк
9. git config --local core.quotepath off Установка отображения unicode
10. git status Посмотреть состояние
11. git add -A Добавить все файлы
12. git commit -a -m”first-message” Создание контрольной точки
13. git add -A + git commit -a -m”message” Вводить после внесения всех изменений
14. git log Посмотреть изменения
15.
16.
17. Создаём репозиторий на GITHUB и связываем его с проектом
18.
19. git remote add origin https://github.com/Martin937/React-shop.git Прописываем путь к github
20. git remote set-url origin https://github.com/Martin937/React-shop.git Если нужно изменить уже существующий
21. git push -u origin master Заливка на github
22. git pull Обновление всех связей и изменений
23. git push Заливка на github
24. npm i gh-pages -D для github
25. Устанавливаем и запускаем react
26. npx create-react-app name-folder
27. npx create-react-app . для создания в текущей папке
28. cd name-folder - Переход в папку пректа
29. npm install node-sass --save + переименовать файлы css в scss (https://materializecss.com/getting-started.html)
30. npm install react-icons --save подключаем иконки (https://react-icons.github.io/react-icons)
31. npm install --save react-router-dom - Добавление маршрутизатора
32.
33. npm start - Запускает сервер разработки.
34. npm run build - Объединяет приложение в статические файлы для производства.
35. npm test - Запускает тестовый раннер.
36. npm run eject - Удаляет этот инструмент и копирует зависимости сборки, файлы конфигурации и скрипты в каталог приложения. Если вы сделаете это, вы не сможете вернуться!
37.
