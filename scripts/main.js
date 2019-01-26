var app = new Vue({
    el: '#app',
    data: {
        store: [],
        clothing: {},
        music: {},
        misc: {},
        contact: [],
        storebutton: "",
        itemname: []
    },

    created: function () {
        
        this.calljson();
  
    },

    methods: {

        calljson: function () {
            {
                fetch("https://api.myjson.com/bins/cwl1g", {
                    method: "GET",

                }).then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }

                }).then(function (json) {
                app.store = json;
                app.clothing = json.clothing[0];
                app.music = json.music[0];
                app.misc = json.miscelaneous[0];
                app.contact = json.contact;

                console.log(app.store);
                console.log(app.clothing);


                }).catch(function (error) {
                    console.log("Request failed: + error.message");
                });
            }
        },

        callinput: function () {
            var flag = false;
            this.storebutton = document.getElementById("storesearch").value;
            this.itemname = Array.from(document.getElementsByTagName("h3"));
            this.storefilter = Array.from(document.getElementsByClassName("merchsquare"));
            var contador= 0;

            for (var b = 0; b < this.storefilter.length; b++) {
                if (this.storefilter[b].innerHTML.toUpperCase().includes(this.storebutton.toUpperCase())) {
                    this.storefilter[b].style.display = "block";
                    flag = true;
                    
                } else {
                    this.storefilter[b].style.display = "none";
                    contador = contador +1;
    
                    
                } if (contador === this.storefilter.length) {
                    // alert("no items found by search criteria");
                    document.getElementById("meme").style.display= "flex";
                }
            }


        }

    

        

       

    }
})
