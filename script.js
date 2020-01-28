var fromages = 0;
var up = 0;

function fromagesClick(number){
    fromages = fromages + number + up;
    document.getElementById('fromages').innerHTML = fromages;
    
};

var fromagers = 0;

function buyFromagers(){
    var fromagersCost = Math.floor(10 * Math.pow(1.5,fromagers));     
    if(fromages >= fromagersCost){                                  
        fromagers = fromagers + 1;                                   
    	fromages = fromages - fromagersCost;                         
        document.getElementById('fromagers').innerHTML = fromagers; 
        document.getElementById('fromages').innerHTML = fromages;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.5,fromagers));      
    document.getElementById('fromagersCost').innerHTML = nextCost;  
    
};
var lvlFromagers = 0;
function upgradeFromagers(){
    var fromagersUpgrade = Math.floor(250 * Math.pow(2.5, lvlFromagers));
    if(fromages >= fromagersUpgrade){
        lvlFromagers = lvlFromagers + 1;
        fromages = fromages - fromagersUpgrade;
        fromagers = fromagers * 2;
        document.getElementById('lvlFromagers').innerHTML = lvlFromagers;
        document.getElementById('fromages').innerHTML = fromages;
    };
    var nextCostLvlF = Math.floor(250 * Math.pow(2.5, lvlFromagers));
    document.getElementById('fromagersUpgrade').innerHTML = nextCostLvlF;
};


var laiteries = 0;
var laiterie = 0;
function buyLaiterie(){
    var laiteriesCost = Math.floor(10 * Math.pow(1.8   ,laiteries));
    if(fromages >= laiteriesCost){
        laiteries = laiteries + 1;
        laiterie = laiterie + 5;
    	fromages = fromages - laiteriesCost;
        document.getElementById('laiterie').innerHTML = laiteries;  
        document.getElementById('fromages').innerHTML = fromages;  
    };
    var nextCostL = Math.floor(10 * Math.pow(1.8,laiteries));    
    document.getElementById('laiterieCost').innerHTML = nextCostL; 
};

var lvlLaiteries = 0;
function upgradeLaiterie(){
    var laiterieUpgrade = Math.floor(500 * Math.pow(2.5, lvlLaiteries));
    if(fromages >= laiterieUpgrade){
        lvlLaiteries = lvlLaiteries + 1;
        fromages = fromages - laiterieUpgrade;
        laiterie = laiterie * 1.5;
        document.getElementById('lvlLaiterie').innerHTML = lvlLaiteries;
        document.getElementById('fromages').innerHTML = fromages;
    };
    var nextCostLvl = Math.floor(500 * Math.pow(2.5, lvlLaiteries));
    document.getElementById('laiterieUpgrade').innerHTML = nextCostLvl;
};

var fromageries = 0;
var fromagerie = 0;
function buyFromagerie(){
    var fromageriesCost = Math.floor(100 * Math.pow(1.8   ,fromageries));
    if(fromages >= fromageriesCost){
        fromageries = fromageries + 1;
        fromagerie = fromagerie + 20;
    	fromages = fromages - fromageriesCost;                          
        document.getElementById('fromagerie').innerHTML = fromageries;
        document.getElementById('fromages').innerHTML = fromages;
    };
    var nextCostF = Math.floor(100 * Math.pow(1.8,fromageries));
    document.getElementById('fromagerieCost').innerHTML = nextCostF;
};

window.setInterval(function(){
	
    fromagesClick(fromagers);
    fromagesClick(laiterie);
    fromagesClick(fromagerie);
	
}, 1000);