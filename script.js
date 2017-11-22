  document.title="Welcome, Anirudh";    
  function myclock() {
         var today= new Date();
         var h=today.getHours();
         var m=today.getMinutes();
         var s=today.getSeconds();
         h=checkthetimehour(h);    
         m=checkthetime(m);
         s=checkthetime(s);      
         document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        
         var months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
         var days =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];   
         var cday=today.getDate();
         var cm=months[today.getMonth()];
         var cy=today.getFullYear();
         document.getElementById('date').innerHTML= cm+" "+ cday+"  " +cy;
         var t=setTimeout(myclock,500);
        } /*myclock()*/
    function checkthetime(i) {
            if(i<10)
            {
                i="0"+i;
            }/*if*/   

            return i;
        }/*checkthetime*/
    function checkthetimehour(x) {
            if(x==0)
            {
                x="0"+x;
            }/*if*/   

            return x;
        }/*checkthetime*/
    function reddit() {
        window.open('http://www.reddit.com','_blank');
    }
    function fb() {
        window.open('http://www.facebook.com','_blank');
    }
    function yt() {
        window.open('http://www.youtube.com','_blank');
    }
    function bb() {
        window.open('https://msoe.blackboard.com/webapps/login/','_blank');
    }
    function mmsoe() {
        window.open('http://www.my.msoe.edu','_blank');
    }
    
    