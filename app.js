// let age=22;
// // console.log(age);

// // age=23;
// // console.log(age);

// // const name=2;
// // console.log(typeof name);

// let item=[1.1,'Butter','Milk','Sugar'];
// console.log(item);

// item.push('Colddrink');
// console.log(item);

// item.pop();
// console.log(item);


 
// item[0]= 'Beer';
// console.log(item);

// // item.splice(0,2);
// // console.log(item);

// // item.splice(0,2,'Apple','cookies');
// // console.log(item);

// item.splice(1,0,'Apple','cookies');
// console.log(item);

// let user={
//     name:'Priyam',
//     Phone:'9687517522',
//     Address:'Gandhidham',
//     Hobbies: ['Book reading', 'Advenure','  Exploring']

// }

// // console.log(user);
// // console.log(user.name);
// user.salary=90000;
// console.log(user.salary);

// // delete user.name;
// console.log(user);
// console.log(user.Hobbies);
// console.log(user.Hobbies[0]);

// let users=[
//     {name:'priyam', email:'pkj@gmail.com'},
//     {name:'rahul', email:'rahul@gmail.com'},
//     {name:'amit', email:'amit@gmail.com'},
//     {name:'piyush', email:'piyush@gmail.com'}
// ]

// console.log(users[0].name);
// console.log(users.length);

// let name='PRIYAM';
// if(name== 'PRIYAM'){
//     console.log('HELLO PRIYAM');
// }
// else{
//     console.log('HELLO LEARNER');
// }
 


// //FUNCTION
//     function grinder (item1,item2){
//         console.log('Grinding' , item1, item2);
//     }

//     grinder('tomatoes','onions');


    
//     //Adding two number Way1

//     function sum(num1,num2){
//         console.log(num1+num2);
//     }
//     sum(2,2);



//     // way2


//     function Adding(N1,N2){

//         let sum= N1+N2;
//         // console.log('Addition is :' , sum);
//         return sum;
//         }
//         let result = Adding(2,3);
//         console.log('Addition is :', result);

//         console.log(Adding(10,20));

function joined(){
   let title=document.getElementById('title');
  title.innerHTML= 'Thanks for joining THE BOOTCAMP!';
  title.style.color= 'orange';
  let button=document.getElementById('button');
  button.style.display='none';
}

function welcome(){
    let name=document.getElementById('name');
   document.getElementById('nameinput').innerText= name.value;
   name.value='';
   let btn=document.getElementById('btn');
   btn.style.display='none';
   name.style.display='none';

}