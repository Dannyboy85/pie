const pies = [
    {
        name: "dutch apple pie",
        ingredients: 'Apple,sugar,butter,nutmeg,dutchpeople',
        bakeTemp: 5000,
        drinkteaPairing: 'Earl grey Tea',   
        imageUrl: "https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2013/09/30859_Recipeimage_620x413_dutch_apple_pie.jpg",
        instructor: 'Zoe',
        iceCream: "Vanilla"
    },
    {
        name: "berry pie",
        ingredients: 'berries',
        bakeTemp: 5000,
        drinkteaPairing: 'wine',   
        imageUrl: "https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps145896_TH153342B03_13_5b.jpg",
        instructor: 'Zoe',
        iceCream: "chocolate"
    },
    {
        name: "lemon pie",
        ingredients: 'lemon',
        bakeTemp: 5000,
        drinkteaPairing: 'coffe',   
        imageUrl: " http://www.simplyrecipes.com/wp-content/uploads/2016/05/lemon-meringue-pie-horiz-b-1600.jpg",
        instructor: 'Zoe',
        iceCream: "vanilla"
    },

   
    
];
const printToDom =(divId, textToprint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToprint;

}

const pieBuilder = () => {
    let domString = '';
    pies.forEach((pie) => {
        domString += `<div class = "card">`
        domString += `<h2>${pie.name}</h2>`;
        domString += `<h5>${pie.bakeTemp}</h5>`;
        domString += `<h5>${pie.drinkteaPairing}</h5>`;
        domString += `<h5>${pie.bakeTemp}</h5>`;
        domString += `<img src = ${pie.imageUrl} >`;
        domString += `</div>`
    })
    //console.log(domString);

    printToDom('pies',domString);

};

const buttonClick = () => {
    
    console.log('You clicked a button');
};

const buttonEvents = () => {
    document.getElementById('Zoe').addEventListener('click', buttonClick);
    
    pieBuilder();
};

const init = () =>{
    buttonEvents();
    pieBuilder();
}
init();