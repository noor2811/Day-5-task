let myResume=[{
    "basics": {
      "name": "Noorulameen",
      "email": "noorulworld@gamil.com",
      "phone": 6382327447,
      "degree": "B.Sc Physics & Computer Science",
      "Address":"Chidambaram"
        
        },


    "Qualification":
          {
            "college" :{
              "Programme":"B.Sc physics & Computer Science",
              "institution": "Sastra University kumbakonam",
              "cgpa":5.6
            } ,
            "school":{
              
              "Programme":"12th",
              "institution": "The cresent higher secondary school",
              "percentage " : 71.1


                          }
        
        
        
      },
    
    "skills": 
      {
        "name": "FullStack Devloper",
        "level": "beginer",
        
      },
    
    "languages": 
      {
        "language": "Tamil,English",
      },
    
    
  }];
  
console.log(myResume);
//json loop iteration
let jsonArr=[
  {
      "name":"Noorul",
      "id":28
  }
]

for(let i=0;i<jsonArr.length;i++)
{
  let ob=jsonArr[i];
  console.log(`\njson object for loop ${ob.id}`);
}
for(let key in jsonArr)
{
  console.log(jsonArr[key]);
}
for(let key of jsonArr)
{
  console.log(key);
}

