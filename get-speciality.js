
function getSpeciality()
{
    const url = "http://localhost:9966/petclinic/api/vets";
    getRequest(url,(memberList) => 
    {
        memberList = JSON.parse(memberList);
        console.log(memberList);
        let first = memberList[0];
        processFirst(first);
        memberList = memberList.splice(1);
        for(let member of memberList)
        {
            createMember(member);
            console.log("-------------------------------------------");
        }
        //console.log(JSON.parse(data));
    })
}

function setupUp(key, info)
{
    
}

function processFirst(member) 
{
    let baseButton = document.getElementById("baseButton");
    baseButton.innerHTML = member["firstName"] + " " + member["lastName"];;
     
}

function createMember(member)
{
    let baseButton = document.getElementById("baseButton");
    let clone = baseButton.cloneNode(true);
    //document.getElementById("buttonPlacement").appendChild(clone);

    //let baseButton = document.getElementById("baseButton");
    //let basePanel = document.getElementById("basePanel");
    for(key in member)
    {
        if(key=="specialties")
        {
            console.log("speciality array function call to make it")
        }
        else
        {
            console.log(member[key]);
            if(key == "firstName" || key == "lastName")
            {
                 baseButton.innerHTML = member["firstName"] + " " + member["lastName"];
            }
        }
    }
    document.getElementById("buttonPlacement").appendChild(clone);
}

getSpeciality();
