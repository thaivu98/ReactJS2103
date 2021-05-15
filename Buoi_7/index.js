// Switch-case:
// let key=3;
// switch(key){
//     case 1:
//         console.log('key= 1');
//     break;
//     case 2:
//         console.log('key= 2');
//     break;
//     case 3:
//         console.log('key= 3');
//     break;
//     case 4:
//         console.log('key= 4');
//     break;
//     case 5:
//         console.log('key= 5');
//     break;
//     case 6:
//         console.log('key= 6');
//     break;
// }
// vong lap.(for,while,do-while)

// for(let index = 0; index < 5; index++)
//     console.log('index= ', index);

//nhap 1 so tu nhien va in ra cac so le tu 0-a;

// let a = 100;
// for(index=0;index<=100;index++)
//     if(index%2==0)
//         console.log(index);



//Viet ct kiem tra so nguyen to.
//Bai_0
// let a = 5;
// let dem = 0;
// for(let i = 2; i <=  a / 2; i++) 
//     {if(a % i == 0)
//         dem++ ;
//     }

// if(dem == 0)
// {
//     console.log(a, "la so nguyen to");
// }
// else
//     {
//         console.log(a, "khong la so nguyen to.");
//     } 


//Bai_1: Viết chương trình in ra các số từ 1 đến n?
// VD: n = 10, output: 1 2 3 4 5 6 7 8 9 10

// let n = prompt('Nhap n= ','');
// for(let i = 1; i <= n; i++)
//     console.log('i= ',i);


//Bai_2:Viết chương trình in ra các số lẻ từ 1 đến n?
// VD: n = 10, output: 1 3 5 7 9

// let n = prompt('Nhap n= ','');
// for(let i = 1; i <= n; i++)
// {
//     if(i % 2 != 0)
//         console.log('i= ',i);
// }

//Bai_3:
// Viết chương trình in ra các số chẳn từ 1 đến n?
// VD: n = 10, output: 2 4 6 8 10

// let n = prompt('Nhap n= ','');
// for(let i = 1; i <= n; i++)
// {
//     if(i % 2 == 0)
//         console.log('i= ',i);
// }

//Bai_4:Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// VD: n = 10, output: 2 3 5 7

// let a=prompt('Nhap a= ', '');
// let dem=0;
// for(let i = 1; i <= a; i++)
//     for(let j = 2; j <= i/2 ; j++)
//     {
//         if(i % j == 0 )
//         {
//             dem++;
//             break;
//         }
//     }
// if(dem == 0)
// {
//     console.log(i);
//}


// function hello(ten) {
//     console.log(`xin chao ${ten}`);
// }

// hello("thai");

function songuyento(snt){
let snt=prompt('nhap a= ','');
let dem = 0;
for(let i = 2; i <=  snt / 2; i++) 
    {if(snt % i == 0)
        dem++ ;
    }

if(dem == 0)
{
    console.log(snt, "la so nguyen to");
}
else
    {
        console.log(snt, "khong la so nguyen to.");
    }
    return(true);
}

songuyento(3);