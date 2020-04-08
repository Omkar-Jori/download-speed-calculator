function calculateResult()
{
    var size=document.getElementById("size").value;
    var speed=document.getElementById("speed").value;
    
    var sizeMB=size*1000;
    var sec=sizeMB/speed;
    
    var hrs = parseInt(Math.floor(sec / 3600));
    var min = parseInt(Math.floor((sec - (hrs * 3600)) / 60));
    var seconds = parseInt(sec - (hrs * 3600) - (min * 60));
    seconds = parseInt(Math.round(seconds * 100) / 100);
    
    var result = hrs+" hr "+min+" min "+seconds+" sec";
    document.getElementById("result").innerHTML = result;
}