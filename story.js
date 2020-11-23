function test()
{

var a = document.getElementById('a1').value;
localStorage.setItem("firstname1",a);
var b = document.getElementById('a2').value;
localStorage.setItem("firstname2",b);
var c = document.getElementById('a3').value;
localStorage.setItem("firstname3",c);
var d = document.getElementById('adj').value;
localStorage.setItem("firstname4",d);
var e = document.getElementById('verb').value;
localStorage.setItem("firstname5",e);
var f = document.getElementById('no').value;
localStorage.setItem("firstname6",f);
var g = document.getElementById('result').value;
localStorage.setItem("firstname7",g);
var h = document.getElementById('speed').value;
localStorage.setItem("firstname8",h);
var i = document.getElementById('quote').value;
localStorage.setItem("firstname9",i);
var j = document.getElementById('msg').value;
localStorage.setItem("firstname10",j);
}

// document.getElementById('A1').innerHTML = localStorage.getItem("firstname1");
// document.getElementsByClassName('A1')[0].innerHTML = localStorage.getItem("firstname1");
for(i=0;i<8;i++)
{
document.getElementsByClassName('A1')[i].innerHTML = localStorage.getItem("firstname1");
}
for(j=0;j<9;j++)
{
document.getElementsByClassName('A2')[j].innerHTML = localStorage.getItem("firstname2");
}
document.getElementById('A3').innerHTML = localStorage.getItem("firstname3");
document.getElementById('Adj').innerHTML = localStorage.getItem("firstname4");
for(k=0;k<3;k++)
{
document.getElementsByClassName('Verb')[k].innerHTML = localStorage.getItem("firstname5");
}



document.getElementById('No').innerHTML = localStorage.getItem("firstname6");
document.getElementById('Ans').innerHTML = localStorage.getItem("abc");
document.getElementById('Speed').innerHTML = localStorage.getItem("firstname8");
document.getElementById('Quote').innerHTML = localStorage.getItem("firstname9");
document.getElementById('Msg').innerHTML = localStorage.getItem("firstname10");


function abc(ans)
{
localStorage.setItem("abc",ans);
	}

	