// задаем время таймера в секундах
let timerSeconds = 1500; // 25 минут = 1500 секунд

// функция, которая будет вызываться каждую секунду
function timer() {
  // получаем элемент с таймером на странице
  let timerElement = document.getElementById("time");

  // вычисляем минуты и секунды
  let minutes = Math.floor(timerSeconds / 60);
  let seconds = timerSeconds - minutes * 60;

  // форматируем строку таймера
  let timerString = `${seconds.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  // выводим строку таймера на страницу
  timerElement.innerHTML = timerString;

  // уменьшаем время таймера на 1 секунду
  timerSeconds--;

  // если время вышло, останавливаем таймер и выводим сообщение
  if (timerSeconds < 0) {
    clearInterval(timerInterval);
    timerElement.innerHTML = "00:00";
  }
}

// запускаем таймер каждую секунду
let timerInterval = setInterval(timer, 1000);
timer()
// $('a').click(function () {
//     event.preventDefault();
//     $(this).attr('href', '#form');
//     var id = $(this).attr('href'),
//       top = $(id).offset().top;
//     $('body,html').animate({
//       scrollTop: top
//     }, 1500);
//   });
  const months=['يَنَايِرُ','فِبْرَايِرُ','مَارِسُ','أَبْرِيلُ','مَايُو','يُونْيُو','يُولْيُو','أَغُسْطُسُ','سِبْتَمْبَرُ','أُكْتُوبَرُ','نُوفَمْبَرُ','دِيسَمْبَرُ'],monthMin = ['','','','','','','','','','','',''],days = ['‫الأحد','‫الاثنين','‫الثلاثاء','‫الأربعاء','الخميس','الجمعة‬','السبت‬'],daysMin = ['','','','','','',''],seasons = ['شِتَاء','رَبِيع','صَيْف','خَرِيف'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

  const commentPush = document.getElementById('commentPush');
  const commentForm = document.getElementById('commentForm');
  const inputCommentName = document.getElementById('inputCommentName');
  const inputCommentText = document.getElementById('inputCommentText');
  const inputAvatar = document.getElementById('formImage'); // Изменено на "formImage"
  const textPs = document.querySelector('.text-ps');
  const previewImage = document.getElementById('previewImage');
  const defaultText = document.getElementById('defaultText');
  
  commentPush.addEventListener('click', function() {
    if (inputCommentName.value.trim().length >= 5 && inputCommentText.value.trim().length >= 5) {
      commentForm.classList.add('none');
      textPs.classList.remove('none');
      setTimeout(function() {
        textPs.classList.add('none');
        // commentForm.classList.remove('none');
      }, 5000);
    } else {
      if (inputCommentName.value.trim().length < 3) {
        inputCommentName.style.border = '1px solid red';
      } else {
        inputCommentName.style.border = '';
      }
      if (inputCommentText.value.trim().length < 3) {
        inputCommentText.style.border = '1px solid red';
      } else {
        inputCommentText.style.border = '';
      }
    }
  });
  
  inputCommentName.addEventListener('blur', function() {
    if (inputCommentName.value.trim().length >= 3) {
      inputCommentName.style.border = '';
    } else {
      inputCommentName.style.border = '1px solid red';
    }
  });
  
  inputCommentText.addEventListener('blur', function() {
    if (inputCommentText.value.trim().length >= 3) {
      inputCommentText.style.border = '';
    } else {
      inputCommentText.style.border = '1px solid red';
    }
  });
  
  inputAvatar.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      previewImage.src = e.target.result;
      previewImage.classList.remove('none');
      defaultText.textContent = ''; // Очистите текст внутри элемента defaultText
      formAvatar.classList.add('loaded');
    };
  
    reader.onerror = function(e) {
      console.error('Error reading the file.'); // Обработка ошибки чтения файла
      defaultText.textContent = 'قم بتحميل صورتك'; // Восстановите изначальный текст
      previewImage.src = ''; // Сбросьте источник изображения
      previewImage.classList.add('none');
      formAvatar.classList.remove('loaded');
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  });
  
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      console.log(element);
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
 
  
 
  
  // $(document).on('click', 'a:not(.footer-note__link).tofooter', function (event) {
  //   event.preventDefault();
  //   var target = $(this).attr('href');
    
  //   // Здесь замените 'form' на соответствующий идентификатор элемента формы
  //   var formElement = '#form';
    
  //   if (target === '#form') {
  //     target = formElement;
  //   }
    
  //   $("html, body").animate({
  //     scrollTop: $(target).offset().top - 10
  //   }, 800);
  // });
  $(document).on('click', 'a', function (event) {
    var target = $(this).attr('href');
    
    // Проверяем, является ли ссылка внешней
    if (target.startsWith('http://') || target.startsWith('https://')) {
      // Отправляем пользователя на внешний сайт
      return;
    }
    
    event.preventDefault();
    
    // Здесь замените 'form' на соответствующий идентификатор элемента формы
    var formElement = '#form';
    
    if (target === '#form') {
      target = formElement;
    }
    
    $("html, body").animate({
      scrollTop: $(target).offset().top - 10
    }, 800);
  });
  

  // Получаем все блоки комментариев на странице
const comments = document.querySelectorAll('.post');

// Для каждого блока комментария добавляем обработчики событий для кнопок "Лайк" и "Дизлайк"
comments.forEach((comment) => {
  const likeButton = comment.querySelector('.like-img');
  const dislikeButton = comment.querySelector('.dislike-img');
  const likeCount = comment.querySelector('.counter');
  const dislikeCount = comment.querySelector('.counter-dislike');
  let likeClicked = false; // Флаг, указывающий, был ли нажат лайк
  let dislikeClicked = false; // Флаг, указывающий, был ли нажат дизлайк

  // Обработчик события для кнопки "Лайк"
  likeButton.addEventListener('click', () => {
    if (!likeClicked && !dislikeClicked) {
      // Лайк не был нажат и дизлайк не был нажат
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
      likeClicked = true;
    } else if (likeClicked) {
      // Лайк уже был нажат
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
      likeClicked = false;
    } else if (dislikeClicked) {
      // Дизлайк был нажат, переключаемся на лайк
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
      dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
      likeClicked = true;
      dislikeClicked = false;
    }
  });

  // Обработчик события для кнопки "Дизлайк"
  dislikeButton.addEventListener('click', () => {
    if (!dislikeClicked && !likeClicked) {
      // Дизлайк не был нажат и лайк не был нажат
      dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
      dislikeClicked = true;
    } else if (dislikeClicked) {
      // Дизлайк уже был нажат
      dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
      dislikeClicked = false;
    } else if (likeClicked) {
      // Лайк был нажат, переключаемся на дизлайк
      dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
      dislikeClicked = true;
      likeClicked = false;
    }
  });
});