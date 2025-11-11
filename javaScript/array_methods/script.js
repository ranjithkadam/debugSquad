 // Array: It is a Non primitive datatype used to store the sequence of data(any datatype) in a single variable.
        // methods:


        // .length: used to find the length.
        let arr=[1,2,3,4,5,6,7];
       //  console.log(arr.length);

        //.indexOf(arrayValue): used to find the Value At index
       //  console.log(arr.indexOf(3));

       // .push(value): it adds value at last position.
       // arr.push(8)
       // console.log(arr);

       // .pop(): it used to remove the element from last.
       // arr.pop();
       // console.log(arr);
       
       // .cancat(array2) : it cancate the array to another array.

       let arr2=[9,7,6,8,5];
       arr.concat(arr2);
     //  console.log(arr);

       // .unshift(value_want-to-add): this method used to add the value at first index.
      // arr.unshift(2,3);
      // console.log(arr);

       // .shift(): removes the first element of an array.

//       arr.shift();
//       console.log(arr);    // [3, 1, 2, 3, 4, 5, 6, 7]
  
       // .slice(startIndex, lastIndex): it is used to slice an array i.e. sub arrays.
       console.log("before slice "+arr); 
       console.log("after slice "+ arr.slice(1,5));

  
       // .splice(startingIndex, No.Of values to remove, Values should add(optional))

       let paymentsMethods=["COD", "card","Upi"];
       paymentsMethods.splice(1,1,"NetBanking")
      // console.log(paymentsMethods)

       // .includes(value) : checks wheather the value is present or not reurns "true" or "false".

       console.log(paymentsMethods.includes("NetBanking"))