/*let categories = document.querySelectorAll("#categories > .item")
console.log(`Here is ${categories.length} `)

categories.forEach(category => {
    let title = category.querySelector('h2').textContent;
    let itemsCount = category.querySelectorAll('ul > li').length
    console.log(`Name: ${title}. How many: ${itemsCount}`)
})*/





    /*const ingredients = [
        'Картопля',
        'Гриби',
        'Часник',
        'Помідори',
        'Зелень',
        'Приправи'
    ];
    let ingredientsList = document.getElementById("ingredients")

    let items = ingredients.map(ingredient => {
        let li = document.createElement("li")
        li.textContent = ingredient
        return li
    })

    items.forEach(item => ingredientsList.appendChild(item))*/




    /*const images = [
        {
        url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
        },
        {
        url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
        },
        {
        url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
        },
    ];

        let gallery = document.getElementById("gallery")
            let addPhoto = images.map(image => 
                `<li><img src="${image.url}" alt="${image.alt}"></li>`
                ).join('')
            gallery.insertAdjacentHTML('beforeend', addPhoto)*/ 





            let valueSpan = document.getElementById("value");
            let decrementBtn = document.getElementById("decrementBtn");
            let incrementBtn = document.getElementById("incrementBtn");
            
            let counterValue = 0;
            
            function decrement() {
                counterValue--;
                updateValue();
            }
            
            function increment() {
                counterValue++;
                updateValue();
            }
            
            function updateValue() {
                valueSpan.textContent = counterValue;
            }
            
            decrementBtn.addEventListener('click', decrement);
            incrementBtn.addEventListener('click', increment);
            updateValue();
            