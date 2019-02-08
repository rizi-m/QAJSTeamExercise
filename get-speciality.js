
function getSpeciality()
{
    const url = "http://localhost:9966/petclinic/api/vets";
    getRequest(url,(memberList) => 
    {
        memberList = JSON.parse(memberList);
        let names = {};
        let nameContentToFill = document.getElementsByClassName("vetnames");
        let specLength = nameContentToFill.length;

        for(let count =0 ; count<specLength;count++)
        {
            let member = memberList[count];
            nameContentToFill[count].innerHTML = member["firstName"]+ " " + member["lastName"];
            let specObject = member["specialties"];
            specList(specObject,count);
        }
    })
}

function specList(specList,count)
{
    let stringSpecContent = "";
    let specContentToFill = document.getElementsByClassName("vetspec");
    if(specList.length)
    {
        specContentToFill[count].innerHTML =specList["name"];

        for(let specItem of specList)
        {
          stringSpecContent += specItem["name"] + ", ";
        }
    }
    else
    {
        stringSpecContent = "vet  " 
    }
    stringSpecContent=stringSpecContent.substr(0,stringSpecContent.length-2);
    specContentToFill[count].innerHTML = stringSpecContent;
}
getSpeciality();
