var lastValue=0;
var currentVal="0";
var lastUpdated;
var maxValue="0";
var timer=0;
var lastTimer=0;
function setup()
{
createCanvas(500, 800);
frameRate(100);

}




function draw()
{
background(255);
fill(0);
if(millis()-lastTimer>2500||lastTimer==0)
  {
  updateData();
  lastTimer=millis();
  }
//text("Just Posted: "+lastValue,width/2,height*1/4);
textSize(width/50);
text("Current Home Temperature\n ",width/2,height*3/8);
textSize(width/5); fill(color(255,0,0));
text(currentVal,width/2,height*4/8);
textSize(width/30);
text("Last Updated: "+lastUpdated,width/6,height*5/8);
}


function updateData()
{
var address="http://data.theodoretech.com/OfficeTemps.json/?key=8385";//"https://api.thingspeak.com/channels/"+channelId+"/feeds/last.json"
loadJSON(address,datapass,"json");
println(address);
}

function datapass(newData)
{
var newVal=newData.OfficeTemp;
if(!isNaN(newVal))
  {
  curretnVal=newVal;
  lastUpdated=newData.created_at;
  var dateUpdated=lastUpdated.substring(0,10);
  lastUpdated=lastUpdated.substring(lastUpdated.length-9,lastUpdated.length-1);
  println(lastUpdated);
  var hourUpdated=lastUpdated.substring(lastUpdated.length-8,lastUpdated.length-6);
  var minUpdated=lastUpdated.substring(lastUpdated.length-5,lastUpdated.length-3);
  var secUpdated=lastUpdated.substring(lastUpdated.length-2,lastUpdated.length);
  if(int(hourUpdated)>(8-12)){hourUpdated=int(hourUpdated)-12;}
  lastUpdated=dateUpdated+" at " +(int(hourUpdated)+8-12)+":"+minUpdated+":"+secUpdated +" EST";
  //maxValue=newData.getColumn(1)[3];
  }
}




