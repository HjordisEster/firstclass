
var stringArray = ["banana", "pear", "apple", "kiwi"]
//stringArray.forEach(function(typpi, ostur)
//{
//    console.log(typpi + " and " + ostur);
//})

 // library uti heimi sem framleidir fallid myForEach
 
   var adder = function(a,b,c,d) {
   console.log(a + b + c + d);
 }
 
 var d = 4;
 var e = 5;
 var f = 6;
 
 adder (1,2,3,"fawaefa");
 


var myForEach = function(array, callback) {
  for (var i = 0 ; i < array.length ; i++) {
    callback(array[i], i, "herna eeru auka upplysingarþ");
  }
}

 // notandi uti bae viljum nota fallid 
myForEach(stringArray, function(h, i, u) {
    console.log(h);
    console.log(i);
    console.log(u);
})

myForEach(stringArray, function(elem, index) {
    //console.log(h);
    console.log(index);
})

// Class Animal æfing
class Animal{
  constructor(nroflegs){
    this.nroflegs= nroflegs;
    }
    saySound(){
    const jubb = "ég segi:"
      console.log(jubb);
  }
}

  const snubbi = new Animal();
  snubbi.saySound();
  
  
  
  class Hundur extends Animal{
    constructor(){
      super(4);
    }
    saySound(){
      super.saySound();
      console.log("voff");
    }
  }
  
  
  const skreppur  = new Hundur();
  skreppur.saySound(); 