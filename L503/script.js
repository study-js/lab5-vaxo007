var table = document.body.children[0];
var rows = table.rows;

for(var i = 0; i < rows.length; ++i) {
    var curentCells = rows[i].cells;
    for (var j = 0; j < curentCells.length; ++j){
        if (i == j){
            curentCells[j].style.backgroundColor="red";
        }
       console.log(i +"," +j);
        
    }
}