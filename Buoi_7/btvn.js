//Bai0
//Viết chương trình kiểm tra n có phải là số nguyên tố hay không?
// let a = prompt('nhap a= ','');
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

// let a=10;
// let dem= 0;
// for(let i = 1; i <= 10; i++)
// {
//     for(let j = 2; j <= i ; j++)
//     {
//         if(i % j == 0 )
//         {
//             dem++;
//             break;
//         }
//     }
// if(dem == 0)
// {
//     console.log('i= ',i);
// }
// }

//Bài5: Viết chương trình tính tổng từ 1 đến n?
//VD: n = 10, output: 55
// let a=prompt('Nhap a= ','');
// let sum=0;
// for(let i = 1; i <= a; i++ )
//     {
//         sum = sum + i;
//     }
//     console.log('Tong =',sum);


//Bài 6: Viết chương trình tính tổng bình phương của các số từ 1 đến n?   VD:  n = 3, output: 14
// let a= prompt('Nhap a= ','');
// let Tongbinhphuong= 0;
// for(let i = 1; i <= a ; i++)
//     {
//         Tongbinhphuong= Tongbinhphuong +(i*i);
//     }
//     console.log('Tongbinhphuong= ', Tongbinhphuong);


//Bài7: Tính tổng các số lẻ trong khoảng 1 đến n? VD: VD: n = 5, output: 9
// let a=prompt('Nhap a= ','');
// let sum=0;
// for(let i = 1; i <= a; i++)
//     {
//         let n= i%2;
//         if(n != 0)
//         sum= sum + i;
//     }
//     console.log('Tong =',sum);

//Bài8: Kiểm tra số n có toàn số lẻ tạo thành hay không?   VD1: n=1234, output: ‘NO’ VD2: n=135, output: ‘YES’
let a=prompt('Nhap a= ','');
