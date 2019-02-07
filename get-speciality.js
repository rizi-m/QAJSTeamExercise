
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
    let basePanel = document.getElementById("basePanel");
    for(key in member)
    {

    }
}

function createMember(member)
{
    let baseButton = document.getElementById("baseButton");
    let basePanel = document.getElementById("basePanel");
    let cloneButton = baseButton.cloneNode(true);
    let clonePanel = basePanel.cloneNode(true);

    cloneButton.innerHTML = member["firstName"] + " " + member["lastName"];

    cloneButton.id = member["firstName"]+member["lastName"]+member["id"];
    clonePanel.id = "Panel"+member["firstName"]+member["lastName"]+member["id"];

    cloneButton.addEventListener("click",function() 
    {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight)
        {
            panel.style.maxHeight = null;
        } 
        else 
        {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });

    document.getElementById("buttonPlacement").appendChild(cloneButton);
    document.getElementById("buttonPlacement").appendChild(clonePanel);
    for(key in member)
    {
        if(key=="specialties")
        {
            //console.log("speciality array function call to make it")
        }
        else
        {
           // console.log(member[key]);
            if(key == "firstName" || key == "lastName")
            {
                
                let element = createElement('p',member[key],key);
                document.getElementById(clonePanel.id).appendChild(element);
                //baseButton.innerHTML = member["firstName"] + " " + member["lastName"];
            }
        }
    }
   var acc = document.getElementsByClassName("accordion");
    var i;


}

getSpeciality();
