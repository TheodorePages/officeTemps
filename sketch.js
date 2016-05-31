var lastValue=0;
var currentVal="0";
var lastUpdated;
var maxValue="0";
var timer;
var lastTimer=0;
var apiWriteKey="CNGSFYF646TILD36";
var apiReadKey="J2NQWW1E701TY241";
var fieldKey="field1";
var channelId="70693"
function setup()
{
createCanvas(500, 800);
frameRate(100);

}




function draw()
{
  background(255);
fill(0);
if(millis()-lastTimer>1000||lastTimer==0)
{
updateData();
lastTimer=millis();
}
//text("Just Posted: "+lastValue,width/2,height*1/4);
textSize(width/50);
text("Current Office Temperature\n ",width/2,height*3/8);
textSize(width/5); fill(color(255,0,0));
text(currentVal,width/2,height*4/8);
textSize(width/30);
text("Last Updated: "+lastUpdated,width/6,height*5/8);
//text("Max Post: "+maxValue+"  from google Drive",width/2,height*3/4);
}

/*function mouseClicked()
{var randomNumber=random(500000)/1000;
lastValue=randomNumber;
var address="api.thingspeak.com/update?key="+apiWriteKey+"&"+fieldKey+"="+randomNumber;
println(address);
httpGet(address);
}*/

function updateData()
{
var address="https://api.thingspeak.com/channels/"+channelId+"/feeds/last.json"
loadJSON(address,datapass);
println(address);
}

function datapass(newData)
{
currentVal=newData.field3;
lastUpdated=newData.created_at;
var dateUpdated=lastUpdated.substring(0,10);
lastUpdated=lastUpdated.substring(lastUpdated.length-9,lastUpdated.length-1);
println(lastUpdated);
var hourUpdated=lastUpdated.substring(lastUpdated.length-8,lastUpdated.length-6);
var minUpdated=lastUpdated.substring(lastUpdated.length-5,lastUpdated.length-3);
var secUpdated=lastUpdated.substring(lastUpdated.length-2,lastUpdated.length);
lastUpdated=dateUpdated+" at " +(int(hourUpdated)+8-12)+":"+minUpdated+":"+secUpdated +" EST";
//maxValue=newData.getColumn(1)[3];
}




