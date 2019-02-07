
const getOwners = function() {
   const url = "http://localhost:9966/petclinic/api/owners";
    //console.log(data);
   getRequest(url,showMyData);
    function showMyData(owners) { 
        owners = JSON.parse(owners);
        for(const owner of owners) {
        //  const ownerName = owners.slice(2,4);
            for(const key in owner) {
            //console.log(key);
         const ownerName = owners.slice(2,4);
                if(key =="pets") {
                    console.log("array hjere");
                }
                else {
                    // console.log(owner[key]);
                    const name= (owner["firstName"] + " " + owner["lastName"]);
                    let btn = document.getElementById("ownername");
                    btn.innerHTML = name;
                    const city =(owner["city"]);
                    //console.log(city);
                    let myp1=document.getElementById('pid');
                    myp1.innerHTML = city;
                }
            }
            console.log("-------------------------")
            }
    }
}();