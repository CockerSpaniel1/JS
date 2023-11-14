document.write("<table>")
        for(i=1; i<=9; i++){
            
            document.write("<tr>");
            
            for(j=1; j<=9; j++){
                
                var k = i * j
                document.write("<td  onmouseover='setTrBg(this)' onmouseout='clearTrBg(this)' onclick='msg(this)'>")
                document.write(i + " X " + j + " = " + k + "</td>")
             
                }
            
            document.write("</tr>")
            
        }
        document.write("</table>")

        

        function msg(obj){
            window.alert(obj.innerHTML)
        }
        
        function setTrBg(obj){

            obj.style.backgroundColor="lightpink";
            obj.style.color="red";
            obj.style.cursor= "pointer";
        }

        function clearTrBg(obj){
            obj.style.backgroundColor="transparent";
            obj.style.color="black";
        }

    