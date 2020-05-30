SPECDT = [
    {
        group: 'General',
        items: [
            {name: 'Model', value: 'DC11'},
            {name: 'Delivery time', value: '2-3 weeks'},
        ],
    },
    {
        group: 'Engine',
        items: [
            {name: 'bhp', value: '404'},
        ],
    },
    {
        group: 'specials',
        text: 'convertible, leather seats',
    },
];

class ProjectInput {

    constructor() {

        this.tabTitles = document.querySelectorAll('.container_tab');
        this.contentNames = document.querySelectorAll('#name');
        this.contentValues = document.querySelectorAll('#value');
        this.contentText = document.querySelectorAll('#text');

        this.writeInput();

    }

    writeInput() {

        for( let i = 0; i < this.tabTitles.length; i++ ) {

            this.tabTitles[i].innerHTML = SPECDT[i].group;
        
            if( i < this.tabTitles.length - 1 ) {
        
               for( let j = 0; j < SPECDT[i].items.length; j++ ) {
        
                    this.contentNames[i+1].innerHTML = SPECDT[i].items[j].name;
                    this.contentValues[i+1].innerHTML = SPECDT[i].items[j].value;
        
                    if( SPECDT[i].items.length > 1 && j > 0 ) {
        
                        this.contentNames[i].innerHTML = SPECDT[i].items[j-1].name;
                        this.contentValues[i].innerHTML = SPECDT[i].items[j-1].value;
                    }
        
                }
        
            }else {
        
                this.contentText.innerHTML = SPECDT[i].text;
        
            }
        
        }
    }
}


class ClickHandler {

    constructor() {

       this.tabTitles = document.querySelectorAll('.container_tab');
       
       if (sessionStorage.getItem("last tab")) {
        
            this.initialActive = sessionStorage.getItem("last tab");

       }else {

            this.initialActive = ".first";

       }
      
       document.querySelectorAll(this.initialActive).forEach(item => {
            item.classList.add("active");
       })

       this.classAssignment();

    }

    classAssignment() {

        this.tabTitles.forEach(item => {

            item.addEventListener('click', () => {
    
                switch(item.classList[1]) {
                    case "first":
                        document.querySelectorAll(".active").forEach(item => {
                            item.classList.remove("active");
                         })
                        document.querySelectorAll(".first").forEach(item => {
                           item.classList.add("active");
                        })
                        sessionStorage.setItem("last tab", this.selected = ".first");
                      break;
                    case "second":
                        document.querySelectorAll(".active").forEach(item => {
                            item.classList.remove("active");
                         })
                        document.querySelectorAll(".second").forEach(item => {
                            item.classList.add("active");
                        })
                        sessionStorage.setItem("last tab", this.selected = ".second");
                      break;
                    case "third":
                        document.querySelectorAll(".active").forEach(item => {
                            item.classList.remove("active");
                         })
                        document.querySelectorAll(".third").forEach(item => {
                            item.classList.add("active");
                        })
                        sessionStorage.setItem("last tab", this.selected = ".third");
                      break;
                    default:
                        document.querySelectorAll(".first").forEach(item => {
                            item.classList.add("active");
                        })
                  }
            })
        })
    }
}

class PriceHandler {

    constructor() {
        
        this.amountTarget = document.querySelector('#amount');
        this.amountNumber = parseInt(this.amountTarget.value);
        this.saveTarget = document.querySelector('#save');
        this.payTarget = document.querySelector('#pay');
        this.price = 19.95;

        this.PriceCalculator();
        this.priceAssignment();

        this.amountTarget.addEventListener('change', () => {
            this.amountNumber = parseInt(this.amountTarget.value);
            this.PriceCalculator();
            this.priceAssignment();
            
        })

    }

    PriceCalculator() {

        if( this.amountNumber < 3) {

            this.save = (this.amountNumber * this.price * 0.1).toFixed(2) + "€";
            this.pay = (this.amountNumber * this.price * 0.9).toFixed(2) + "€";

        }else if ( this.amountNumber === 3 ) {

            this.save = (this.amountNumber * this.price * 0.2).toFixed(2) + "€";
            this.pay = (this.amountNumber * this.price * 0.8).toFixed(2) + "€";

        }else {

            this.save = (this.amountNumber * this.price * 0.3).toFixed(2) + "€";
            this.pay = (this.amountNumber * this.price * 0.7).toFixed(2) + "€";

        }

    }

    priceAssignment() {

        this.saveTarget.innerHTML = this.save;
        this.payTarget.innerHTML = this.pay;
    }
}



    

const pjr = new ProjectInput(SPECDT);
const click = new ClickHandler();
const price = new PriceHandler();