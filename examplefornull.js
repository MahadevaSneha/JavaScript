//create a class named as Cube
class Cube{
  constructor(len){
    this.len=len;
  }
   get volume_of_cube(){
    return Math.pow(this.len,3);
  }
  static Cube_of_number(len){ 
    return len>0 ? new Cube(len) : null;
  }
  
}
let var1=Cube.Cube_of_number(5);
console.log(var1.volume_of_cube);//125
let var2=Cube.Cube_of_number();
console.log(var2);//null
