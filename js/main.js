const arrayFlowers = [
    {
        name: "Анемон",
        image: "data/assets/anemons.jpg",
        price: 200
    },
    {
        name: "Амариллис",
        image: "data/assets/ammaralis.jpg",
        price: 170
    },
    {
        name: "Амарант",
        image: "data/assets/amarant.jpg",
        price: 210
    },
    {
        name: "Астра",
        image: "data/assets/astra.jpg",
        price: 300
    },
    {
        name: "Азалия",
        image: "data/assets/azaliya.jpg",
        price: 120
    },
    {
        name: "Бегония",
        image: "data/assets/begonya.jpg",
        price: 500
    },
    {
        name: "Колокольчики",
        image: "data/assets/bluebell.jpg",
        price: 140
    },
    {
        name: "Лютик",
        image: "data/assets/buttercup.jpg",
        price: 180
    },
    {
        name: "Камелия",
        image: "data/assets/kamellia.jpg",
        price: 170
    },
    {
        name: "Гвоздика",
        image: "data/assets/Carnation.jpg",
        price: 110
    },
    {
        name: "Хризантемы",
        image: "data/assets/Chrysanths.jpg",
        price: 220
    },
    {
        name: "Клевер",
        image: "data/assets/Clover.jpg",
        price: 80
    },
    {
        name: "Крокус",
        image: "data/assets/Crocus.jpg",
        price: 90
    },
    {
        name: "Георгины",
        image: "data/assets/Dahlia.jpg",
        price: 170
    },
    {
        name: "Нарцисс",
        image: "data/assets/Daffodil.jpg",
        price: 200
    }
]


const cards = document.getElementById('cards')
const basketContent = document.querySelector('.flower-items-basket')
const allPrice = document.querySelector('#allPrice')
const countItems = document.querySelector('#countItems')
let priceCount = parseInt(allPrice.innerHTML)
let countItemsBasket = parseInt(countItems.innerHTML)

const getData = () => {
    return arrayFlowers?.map((flower, index) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'flower-item')
        div.innerHTML = `
            <div class="flower-item-img">
                <img src="${flower?.image}" alt="#">            
            </div>
            <h3>${flower?.name}</h3>
            <div class="flower-item-content">
                <p>Цена: ${flower?.price} сом</p>
                <button class="btn${index}">В корзину</button>
            </div>
        `

        cards.append(div)

        const addBasketContent = (index) => {
            const div = document.createElement('div')
            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = 'удалить'
            deleteButton.setAttribute('class', 'deleteButton')
            div.setAttribute('class', 'flower-item-in-basket')
            div.innerHTML = `
                <div class="flower-item-image">
                    <img src="${arrayFlowers[index]?.image}" alt="">
                </div>
                <h3>${arrayFlowers[index]?.name}</h3>
                <h5>Цена: ${Number(arrayFlowers[index]?.price)} сом</h5>
            `
            priceCount += arrayFlowers[index]?.price
            countItemsBasket += 1
            countItems.innerHTML = countItemsBasket
            allPrice.innerHTML = priceCount
            div.append(deleteButton)
            basketContent.append(div)
            deleteButton.onclick = () => {
                priceCount -= arrayFlowers[index]?.price
                allPrice.innerHTML = priceCount
                countItemsBasket -= 1
                countItems.innerHTML = countItemsBasket
                div.remove()
            }
        }

        const btns = document.querySelector(`.btn${index}`)
        btns.onclick = () => addBasketContent(index)

    })
}

const modalBlock = document.querySelector('.modal_block')
const closeModalBlock = document.querySelector('.close_modal_block')

const openBasket = () => {
    modalBlock.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeBasket = () => {
    modalBlock.style.display = 'none'
    document.body.style.overflow = ''
}

modalBlock.onclick = (event) => event.target === modalBlock && closeBasket()
closeModalBlock.onclick = () => closeBasket()

window.onload = () => getData()
