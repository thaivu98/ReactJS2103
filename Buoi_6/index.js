// console.log(" hello"); in ra man hinh
// khai bao bien
// var, let, const.
// var a=10.23;
// var b='Xinchao';
// var c="hehehe";
// var d=`hahaha`;
// muon hien ki tu dac biet thi dung "\" truoc ki tu do.
//long bien dung "${}".
// var e= "day \"la\" cho"
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(e)
// var testBoolF=false
// var testBoolT=true
// var testObject={
//     color:'red' ,
//     price:'1000',
//     isBuy:true
// }
// console.log( testObject.price); 


//giải phuong trinh bac 2: ax^2+bx+c=0
var a,b,c,x1,x2,x,delta, nghiemkep; //Khai bao bien.

a=prompt('Nhap a=','');
b=prompt('Nhap b=','');
c=prompt('Nhap c=','');
x=-c/b;
delta= b*b -4*a*c;
nghiemkep= -b/(2*a);
x1=(-b+Math.sqrt(delta))/(2*a);
x2=(-b-Math.sqrt(delta))/(2*a);
//a=0||a!=0
if(a==0)    //bx+c=0
    if(b==0)
        if(c==0)
            console.log('Treu nhau ak (@-@)');
        else
            console.log('Phuong trinh vo nghiem');
    else
        console.log('x=',x);
else
    if(delta = 0)
        console.log('x= ',nghiemkep);
    else
        if(delta < 0)
            console.log('Phuong trinh vo nghiem.')
        else
            console.log('x1= ',x1);
            console.log('x2= ',x2);