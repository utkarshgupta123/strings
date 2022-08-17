var Game_Winner = (S) => 
{
  let A=0;
  let D=0;
  let len=S.length;
  for(let i=0;i<len;i++){
    if(S[i] === "A"){
      A++;
    }
    else
      D++;
  }
  
  
  if(A>D){
    return "Aditya";
  }
  else if(D>A){
    return "Danish";
  }
  else{
    return "Draw";
  }
};


