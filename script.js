//1, Print the following details name, capital, flag, using forEach function

var request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload=function(){
    var data=request.response;
    var res=JSON.parse(data);
    res.forEach((x)=>console.log(`Name: ${x.name.common } Capital: ${x.capital } Flag: ${x.flags.png }`));}



//2, Get all the countries from Asia continent /region using Filter function

var request1=new XMLHttpRequest;
request1.open("GET","https://restcountries.com/v3.1/all","true");
request1.send();
request1.onload=function(){
    var data1=request1.response;
    var res1=JSON.parse(data1);
    var result=res1.filter((x1)=>x1.region=="Asia");
    console.log(result);
}

//3, Get all the countries with a population of less than 2 lakhs using Filter function

var request2=new XMLHttpRequest;
request2.open("GET","https://restcountries.com/v3.1/all","true");
request2.send();
request2.onload=function(){
    var data2=request2.response;
    var res2=JSON.parse(data2);
    var result1=res2.filter((x2)=>x2.population<200000);
    console.log(result1);
}

//4, Total population using reduce function

var request3=new XMLHttpRequest;
request3.open("GET","https://restcountries.com/v3.1/all","true");
request3.send();
request3.onload=function(){
    var data3=request3.response;
    var res3=JSON.parse(data3);
    var result2=res3.reduce((acc,crr)=>acc+crr.population, 0);
    console.log(`total population :${result2}`);
  
}

//5, Print the country that uses US dollars as currency

var request4=new XMLHttpRequest;
request4.open("GET","https://restcountries.com/v3.1/all","true");
request4.send();
request4.onload=function(){
    var data4=request4.response;
    var res4=JSON.parse(data4);
    var result3=res4.filter((x3)=>x3.currencies && x3.currencies.USD);
    console.log(result3);
    result3.forEach((x3)=>console.log(x3.name.common));
   
}