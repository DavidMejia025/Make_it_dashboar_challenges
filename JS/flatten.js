var flatten = function(arr_array){
  // arr_out = [];
  // k = 0;
  // console.log(arr_array);
  // m = arr_array.length;
  // for (var j=0; j<=m-1; j++){
  // arr_test = arr_array[j];
  //   for( var i = 0;i<= arr_test.length-1;i++){
  //     arr_out[k] = arr_test[i];
  //     k = k+1;
  //   }
  // }
  // console.log(arr_out);
  // return arr_out;

  arr_out =[];
  k = 0;
  arr_out = arr_array.map(function(element){
    return element
  });
  return arr_out
}



console.log(flatten ([[1,2,3],[2],[4]]))