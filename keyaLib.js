function isTouching(p1,p2){
  
    if(p1.x-p2.x<=(p1.width+p2.width)/2 && p2.x-p1.x<=(p1.width+p2.width)/2 && 
    p1.y-p2.y<=(p1.height+p2.height)/2 && p2.y-p1.y<=(p1.height+p2.height)/2)
    {
      return true;
    }
    else{
     return false;
    }
  }

  function bounceOff(p1,p2) {
       
 if(p1.x-p2.x<=(p1.width+p2.width)/2 && p2.x-p1.x<=(p1.width+p1.width)/2){
p1.velocityX *= -1;
p2.velocityX *= -1;
 }if (p2.y-p1.y<=(p1.height+p2.height)/2 && p1.y-p2.y<=(p1.height+p2.height)/2){
  p1.velocityY *= -10;
  p2.velocityY *= -10;
 }

  }