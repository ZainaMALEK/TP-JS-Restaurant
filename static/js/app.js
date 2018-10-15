const entrees = document.getElementById('entrees');
const plats = document.getElementById('plats');
const desserts = document.getElementById('desserts');
const boissons = document.getElementById('boissons');
const titles = ['entrees', 'plats', 'desserts', 'boissons'];
const menu = [

    	[
    		{id:1,name:'Samboussiks', price:4},
    		{id:2,name:'Falafels', price:5},
    		{id:3,name:'Houmous', price:4}
      ],
    	[
        {id:1,name:'Chich taouk', price:6},
    		{id:2,name:'Brochettes d agneau', price:5},
    		{id:3,name:'Makloubeh', price:7}
      ],
      [
        {id:1,name:'Baklawas', price:6},
    		{id:2,name:'Mouhallabiyeh', price:5},
    		{id:3,name:'Kanafeh', price:7}
      ],
      [
        {id:1,name:'Café', price:6},
    		{id:2,name:'Thé à la menthe', price:5},
    		{id:3,name:'Jus d orange', price:7}
      ]
    ]



starters = menu[0];

starters.forEach(starter => {

    let html = '<li>'+ starter.name + '   '+ starter.price + ' euros ' + '</li><select id="starterQuantity"><option value="valeur1">1</option><option value="valeur2" selected>2</option><option value="valeur3">3</option></select>'
    entrees.innerHTML += html;


 });

 mains = menu[1];

 mains.forEach(main => {

     let html = '<li>'+ main.name + '   '+ main.price + ' euros ' + '</li><select id="mainQuantity"><option value="valeur1">1</option><option value="valeur2" selected>2</option><option value="valeur3">3</option></select>'
     plats.innerHTML += html;


  });

  Desserts = menu[2];

  Desserts.forEach(dessert => {

      let html = '<li>'+ dessert.name + '   '+ dessert.price + ' euros ' + '</li><select id=dessertQuantity"><option value="valeur1">1</option><option value="valeur2" selected>2</option><option value="valeur3">3</option></select>'
      desserts.innerHTML += html;


   });

   drinks = menu[3];

   drinks.forEach(drink => {

       let html = '<li>'+ drink.name + '   '+ drink.price + ' euros ' + '</li><select id="mainQuantity"><option value="valeur1">1</option><option value="valeur2" selected>2</option><option value="valeur3">3</option></select>'
       boissons.innerHTML += html;


    });
