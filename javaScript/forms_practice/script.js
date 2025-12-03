   //styling

        function fromStyle(){
        let username=document.getElementById("username");
        username.addEventListener("focus",function(){
            username.style.outlineColor="green";
        })
 
        username.addEventListener("blur",function(){
            username.style.outlineColor="";
        })

        let password=document.getElementById("password");
        password.addEventListener("focus",function(){
            password.style.outlineColor="green";
        })

        password.addEventListener("blur",function(){
            password.style.outlineColor="";
        })
}
fromStyle();
        // regex
         
        

        function submit(){
        let username=document.getElementById("username").value;
        let password=document.getElementById("password").value;
        let form = document.getElementById("form");
        
            if(!username || !password){
                document.getElementById("para3").innerText="fill all the fields.";
                return;   
            }        
         }     
            
       
        // form.addEventListener("submit", function(event){
        //     event.preventDefault;
        //     if(!username || !password) {
        //         document.getElementById("para3").innerText=`fill all the fields`;
        //         return;
        //     }

           
        // });