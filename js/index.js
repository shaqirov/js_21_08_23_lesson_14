/* 1) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику 
    на картинку алертом выводился ее описание. */
//======================================================================
const imageOne = document.getElementById("imageOne")
imageOne.addEventListener('click', function () {
    alert("Описание картинки imageOne: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, assumenda.")
})

const imageTwo = document.getElementById("imageTwo")
imageTwo.addEventListener('click', function () {
    alert("Описание картинки imageTwo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, assumenda.")
})
//======================================================================


/*2) Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку выведите 
    куда данная ссылка ссылается. */
//======================================================================
const links = document.querySelectorAll('a')
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        const url = link.getAttribute('href')
        console.log(url);
    })
})
//======================================================================


/* 3) Напишите функцию, которая объединяет несколько строк и возвращает их.
   Используйте глобальный массив arguments. */
//======================================================================


//======================================================================


/* 4) Напишите функцию, которая разворачивает массив в обратном порядке и затем ее возвращает.
   Функция наша принимает массив любых элементов. 
   Например: 
   const data = [1, 2, 3]; 
   myFunc(data); // [3, 2, 1]
   Без метода reverse. */
//======================================================================
function reversed (array) {
    const newArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray
}
console.log(reversed([1, 2, 3, 4, 5, 'a', 'b', 'c']));
//======================================================================