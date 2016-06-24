var lastValue=0;
var currentVal="0";
var lastUpdated;
var maxValue="0";
var timer;
var lastTimer=0;
var apiWriteKey="CNGSFYF646TILD36";
var apiReadKey="J2NQWW1E701TY241";
var fieldKey="field1";
var channelId="70693";
//var down=null;

function setup()
{
createCanvas(int(displayWidth), int(displayHeight));
//down=new XMLHttpRequest();
}




function draw()
{
  background(220);
fill(0);
if(millis()-lastTimer>2500||lastTimer==0)
{
updateData();
lastTimer=millis();
}
//text("Just Posted: "+lastValue,width/2,height*1/4);
textSize(width/20);
textAlign(CENTER,CENTER);
fill(color(255,0,0));
text("Current Office Temperature\n ",width/2,height*2/8);
textSize(width/5); fill(color(255,0,0));
text(currentVal,width/2,height*4/8);
textSize(width/20);
text("Last Updated: \n"+lastUpdated,width/2,height*6/8);

}

function updateData()
{
var address="http://data.theodoretech.com/OfficeTemps.json/?key=8385";
loadJSON(address,datapass);
println(address);
}

function datapass(newData)
{var newVal=newData.OfficeTemp;
if(!isNaN(float(newVal)))
{currentVal=newData.OfficeTemp;
currentVal=round(float(currentVal),1);
lastUpdated=newData.created_at;
var dateUpdated=lastUpdated.substring(0,10);
lastUpdated=lastUpdated.substring(lastUpdated.length-9,lastUpdated.length-1);
println(lastUpdated);
var hourUpdated=lastUpdated.substring(lastUpdated.length-8,lastUpdated.length-6);
var minUpdated=lastUpdated.substring(lastUpdated.length-5,lastUpdated.length-3);
var secUpdated=lastUpdated.substring(lastUpdated.length-2,lastUpdated.length);
lastUpdated=dateUpdated+" at " +(int(hourUpdated)+8)+":"+minUpdated+":"+secUpdated +" EST";
//maxValue=newData.getColumn(1)[3];
}
}

