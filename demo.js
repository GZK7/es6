const scanf=require('scanf');
console.log('欢迎进入幸运数字系统');


//console.log('输入两个数，判断两个数，并输出最大值');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// if(a>b){
//     console.log('最大值是a：'+a);
// }else if(b>a){
//     console.log('最大值是b：'+b);
// }else{
//     console.log('a=b='+a);
// }

// *******数组*******
//let arr=[1,2,3];
  //console.log('数组arr:长度为'+arr.length+'\n分别是:'+arr);

// *******for循环*******
//  let arr=[1,2,3,4,5,6];
 
//  for(let i=0;i<arr.length;i++){
//     let xinlong = arr[i];
//      console.log(xinlong);
//  }
//运行node index.js


// console.log('欢迎进入幸运数字系统');
// while(1){
//     console.log('1---添加一个幸运数字');
//     console.log('2---显示全部幸运数字');
//     console.log('3---删除最后一个数字');
//     console.log('4---退出');
//     let con=scanf('%d');
//     if(con===1){
//         console.log('1---添加一个幸运数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---显示全部幸运数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---删除最后一个数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('退出');
//         break;
//     }
// }

//定义数组
//  let arr=[];
//  while(1){
//      console.log('1---添加一个坐标');
//      console.log('2---显示全部坐标');
//      console.log('3---删除最后一个坐标');
//      console.log('4---退出');
//      let con=scanf('%d');  //输入一个数字
//      if(con===1){
//          console.log('1---添加一个横坐标');
//          let x=scanf('%d');
//             console.log('1---添加一个纵坐标') 
//             let y=scanf('%d');
//             let zuobiao={
//               'x': x,
//               'y': y,
//             }



//        arr.push(zuobiao);  //往数组中添加一个数字
//          console.log('添加成功');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---显示全部幸运数字');
//         for(let i=0;i<arr.length;i++){
//             let syk=arr[i];
//             //console.log(syk);
            
//             console.log(`第${i+1}坐标为（${syk.x},${syk.y}）`);
        
//         }
       
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---删除最后一个数字');
//         arr.pop();  //删除数组中最后一个数字
//         console.log('删除成功');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('退出');
//         break;
//     }
// }

// let xinlong={
//     a:1,
//      b:2,
// };

//   console. log(xinlong);
//   console.log(xinlong.a);
console.log('欢迎进学生成绩系统');
//定义数组
let arr=[];
 while(1){
    console.log('1---添加一个学生学科成绩');
    console.log('2---显示全部学生学科成绩');
    console.log('3---删除最后一个学生学科成绩');
    console.log('4---退出');
     let con=scanf('%d');  //输入一个数字
    if(con===1){
        console.log('1---添加一个学生学科成绩');
        console.log('请输入学生姓名：');
       let xingming=scanf('%s');
        console.log('请输入语文成绩：');
        let yuwen=scanf('%d');
        console.log('请输入数学成绩：');
        let shuxue=scanf('%d');
        let student={
            'xingming':xingming,
            'yuwen':yuwen,
            'shuxue':shuxue
        };
        arr.push(student);  //往数组中添加一个数字
        console.log('添加成绩成功');
        scanf('%d');
    }
    if(con===2){
        console.log('2---显示全部学生学科成绩');
        for(let i=0;i<arr.length;i++){
            let syk=arr[i];
            // console.log(syk);
            console.log(`学生：${syk.xingming}\n语文：${syk.yuwen}\n数学：${syk.shuxue}`);
        }
        console.log('点击回车继续');
        scanf('%d');
    }
    if(con===3){
        console.log('3---删除最后一个学生学科成绩');
        arr.pop();  //删除数组中最后一个数字
        console.log('删除最后一名学生成绩成功');
    }
    if(con===4){
        console.log('退出');
       break;
    }
}