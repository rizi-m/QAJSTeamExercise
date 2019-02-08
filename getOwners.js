


const processFirstOwner = function(owner) {
    const button = document.getElementById("ownerName");
    const panel = document.getElementById("ownerInfomation");
    button.innerHTML = owner.firstName + " " + owner.lastName;
    let petInfo = "";
    if (owner.pets.length) {
        petInfo = owner.pets.map(pet => pet.name).reduce((pet1, pet2) => pet1 + " - " + pet2, "");
    }
    let info = `${owner.address}, ${owner.city}, ${owner.telephone}${petInfo} -`;
    // console.log(owner.pets['name']);
    panel.innerHTML = info;
}

const processOwner = function(owner) {
    const accordians = document.getElementById("accordian1");
    const button = document.getElementById("ownerName");
    const panel = document.getElementById("ownerInfomation");
    const newButton = button.cloneNode(false);
    const newPanel = panel.cloneNode(false);
    newButton.addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });

    let petInfo = "";
    if (owner.pets.length) {
        petInfo = owner.pets.map(pet => pet.name).reduce((pet1, pet2) => pet1 + " - " + pet2, "");
    }
    let info = "";
    // console.log(owner.pets);
    newButton.innerHTML = owner.firstName + " " + owner.lastName;
    newPanel.innerHTML = `${owner.address}, ${owner.city}, ${owner.telephone} Pet(s): ${petInfo} -`;
    newPanel.id = owner.firstName;

    accordians.appendChild(newButton);
    accordians.appendChild(newPanel);
}

const getOwners = function() {
   const url = "http://localhost:9966/petclinic/api/owners";
    //console.log(data);
   getRequest(url,showMyData);
    function showMyData(owners) { 

        owners = JSON.parse(owners);
        let firstOwner = owners[0];
        processFirstOwner(firstOwner);
        owners = owners.splice(1);
        for(const owner of owners) {
            processOwner(owner);

        // //  const ownerName = owners.slice(2,4);
        //     for(const key in owner) {
        //     //console.log(key);
        //         if(key =="pets") {
        //             console.log("array hjere");
        //         }
        //         else {
        //             // console.log(owner[key]);
        //             const name= (owner["firstName"] + " " + owner["lastName"]);
        //             let btn = document.getElementById("ownername");
        //             btn.innerHTML = name;
        //             const city =(owner["city"]);
        //             //console.log(city);
        //             let myp1=document.getElementById('pid');
        //             myp1.innerHTML = city;
        //         }
        //     }
        //     console.log("-------------------------")
        }
    }
}();