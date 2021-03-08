
var pleaseWork = function () {
    for(var m=1 ; m<=5 ; m++)
    {
         document.write("welcome" + "<br>");
    };
    
var option = prompt ("what do you want to read? novel or history ?");

if(option != "novel" && option != "history"){
    option = prompt ("how many books do you want?");
}

// while (option != "novel" && option != "history") 
// {
//    option = prompt ("what do you want to read?");
// }
var theOption = " ";

if (option=="novel")
{
    theOption= "<img src='images/novel.jpg'/>";
}
else 
{
    theOption='<img src="images/history.jpg"/>';
}
var numBook = prompt('how many books do you want?')

var result = " ";

for(var i=0; i < numBook; i++) 
{
    result = result + theOption
}
document.write (result);

}

pleaseWork();