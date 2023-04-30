const countValue  = document.querySelector('#counter'); 
const increment = () => {
    //get the value form ui
  let value = parseInt(countValue.innerText);
  //update the value
  value = value + 1;
  //set the value onto UI
  countValue.innerText = value;
};

const decrement = () =>{
    //get the value form ui
  let value = parseInt(countValue.innerText);
  //update the value
  value = value - 1;
  //set the value onto UI
  countValue.innerText = value;
};

// const reset = () => {
//     let value = parseInt(countValue.innerText);
//   //update the value
//   value = 0 ;
//   //set the value onto UI
//   countValue.innerText = value;
// };


//another way to write
function reset() {
    let value = parseInt(countValue.innerText);
  //update the value
  value = 0 ;
  //set the value onto UI
  countValue.innerText = value;
};

