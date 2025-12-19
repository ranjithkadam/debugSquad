function getStudent(id){
   return new Promise((resolve, reject)=>{
     setTimeout(()=>{
        console.log("Hello am function1");
        resolve({
            name:"abc",
            id:id
        });
    },2000);
   });
}

function getSubjects(id){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    console.log("get Subjects function id is: "+id);
    resolve( ["maths", "science", "telugu", "english"]);
}, 2000);
});
   
}

 

function getMarks(subject){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("getMarks function and subject is: "+ subject);
        resolve(7);
    }, 2000)
    });
}



// getStudent(2,()=>{
//     getSubjects(3,()=>{
//         getMarks(4,()=>{
//             console.log("tasks completed.")
//         });
//     });
// });


const fun1=getStudent(2);

fun1

.then((student)=>{
    return getSubjects(student.id);

})

.then((subject)=>{
   return getMarks(subject[0]);
})

.then((marks)=>{
    console.log(marks)
})