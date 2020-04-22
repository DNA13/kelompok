var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');
var body = ctx.createLinearGradient(40,50,60,80);
var pangkal = ctx.createLinearGradient(50,80,60,80);
var head = ctx.createLinearGradient(40,80,60,80);


function tutuprapat(){
    //body
    body.addColorStop(0,"black");
    body.addColorStop(1,"#8FBC8F");
        
    ctx.fillStyle = body;
    ctx.fillRect(35, 40, 30, 50);

    //headshot
    head.addColorStop(0,"#DEDE25");
    head.addColorStop(1,"#DEDE25");
    
    
    ctx.fillStyle = head;
    ctx.translate(0,1);
    ctx.fillRect(35, 34, 30, 10);


    //pangkal
    pangkal.addColorStop(0,"black");
    pangkal.addColorStop(1,"#8FBC8F");
    
    
    ctx.fillStyle = pangkal;
    ctx.translate(2,1);
    ctx.fillRect(45, 28, 5, 5);

};
tutuprapat();


function fbiopenned(){
    //body
        body.addColorStop(0,"black");
        body.addColorStop(1,"#8FBC8F");
            
        ctx.fillStyle = body;
        ctx.translate(70,-2);
        ctx.fillRect(35, 43, 30, 50);
    
        //headshot
        head.addColorStop(0,"#DEDE25");
        head.addColorStop(1,"#DEDE25");
        
        
        ctx.fillStyle = head;
        ctx.translate(57,-31);
        ctx.rotate(60 * Math.PI / 195);
        ctx.fillRect(30, 34, 35, 10);
    
        //pangkal
        pangkal.addColorStop(0,"black");
        pangkal.addColorStop(1,"#007a99");
        
        
        ctx.fillStyle = pangkal;
        ctx.translate(2,1);
        ctx.fillRect(45, 28, 5, 5);
    
    };
fbiopenned();


function nganga(){
    //body
        body.addColorStop(0,"black");
        body.addColorStop(1,"#8FBC8F");
            
        ctx.fillStyle = body;
        ctx.translate(40,-6);
        ctx.rotate(-130 * Math.PI /425);
        ctx.fillRect(35, 40, 30, 50);
    
        //headshot
        head.addColorStop(0,"#DEDE25");
        head.addColorStop(1,"#DEDE25");
        
        
        ctx.fillStyle = head;
        ctx.translate(98,-20);
        ctx.rotate(97 * Math.PI / 195);
        ctx.fillRect(35, 34, 25, 10);
    
    // //pangkal
        pangkal.addColorStop(0,"black");
        pangkal.addColorStop(1,"#007a99");
        
        
        ctx.fillStyle = pangkal;
        ctx.translate(2,1);
        ctx.fillRect(45, 28, 5, 5);
    
    };
nganga();


function ndamplang(){
    //body
        body.addColorStop(0,"black");
        body.addColorStop(1,"#8FBC8F");
            
        ctx.fillStyle = body;
        ctx.translate(18,35);
        ctx.rotate(-200 * Math.PI /400);
        ctx.fillRect(35, 40, 30, 50);
    
        //headshot
        head.addColorStop(0,"#DEDE25");
        head.addColorStop(1,"#DEDE25");
        
        
        ctx.fillStyle = head;
        ctx.translate(120,80);
        ctx.rotate(90 * Math.PI / 90);
        ctx.fillRect(35, 34, 25, 7);
    
    // //pangkal
        pangkal.addColorStop(0,"black");
        pangkal.addColorStop(1,"#007a99");
        
        
        ctx.fillStyle = pangkal;
        ctx.translate(2,1);
        ctx.fillRect(45, 28, 5, 5);
    
    };
ndamplang();

