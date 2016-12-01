window.onload = loadCookieList;
var myList = [];
var dog = "";

function addItem()
{
  var input = document.getElementById("newItem").value;
  displayItem(input);

}

function displayItem(input)
{
  var Find = myList.indexOf(input);
  if(Find == -1)
  {
     myList.push(input);
     console.log(myList);


  var list = document.getElementById("listDisplay");

  var btnClose = document.createElement("button");
     btnClose.classList.add("btn");
     btnClose.classList.add("btn-danger");
     btnClose.classList.add("btn-xs");
     btnClose.addEventListener("click",removeParentListItem);

  var iconClose = document.createElement("span");
    btnClose.appendChild(iconClose);
    iconClose.classList.add("glyphicon");
    iconClose.classList.add("glyphicon-remove");

 var item = document.createElement("li");
 var itemName = document.createTextNode(input);
  item.appendChild(itemName);
  item.appendChild(btnClose);
  list.appendChild(item);
  document.getElementById("newItem").innerHTML = "";
  console.log(input);
 }
}


function removeParentListItem()
{
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
  var itemRemove = mom.firstChild.textContent;
  var itemIndex = myList.indexOf(itemRemove);
  myList.splice(itemIndex,1);
  console.log(myList);
}

function saveList()
{
 dog = myList.join();
 setCookie("doglist",dog,1);
}

function removeList()
{
  document.getElementById("listDisplay").innerHTML = "";
  myList = [];
}


function loadCookieList()
{
var cooks = getCookie("doglist");
var arrayCookie = cooks.split("");

for(var i=0; i < arrayCookie.length; i++)
  {
   displayItem(arrayCookie[i]);
  }

}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
