var list = document.getElementById("list");

function todoAdd()
{
    var item = document.getElementById("Todo-item");
    var li = document.createElement('li');
    var litext = document.createTextNode(item.value);
    var ITEM = {
        Todo: item.value,
    }
    firebase.database().ref("TODO").push(ITEM);
    li.appendChild(litext);
    list.appendChild(li);
    item.value = "";

    var delbtn = document.createElement("button");
    delbtn.setAttribute("class", "btn-dark");
    delbtn.setAttribute("onclick", "delitem(this)");
    var delbtnt = document.createTextNode("Delete");
    delbtn.appendChild(delbtnt);

    li.appendChild(delbtn);

    var editbtn = document.createElement("button");
    editbtn.setAttribute("class", "btn-dark");
    editbtn.setAttribute("onclick", "edititem(this)");
    var editbtnt = document.createTextNode("Edit");
    editbtn.appendChild(editbtnt);

    li.appendChild(editbtn);

}


function removeFirebaseData(){
    firebase.database().ref('TODO').remove()
}
function delitem(b)
{
    b.parentNode.remove();
}

function delall()
{
    removeFirebaseData();
    list.innerHTML = "";
}


function edititem(b) {
    var a = prompt("Enter Updated Value", b.parentNode.firstChild.nodeValue)
    b.parentNode.firstChild.nodeValue = a;
}