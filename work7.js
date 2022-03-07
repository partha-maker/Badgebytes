function addLi()
            {
          var partha = document.getElementById("partha").value;
          var listNode = document.getElementById('list');
          var liNode = document.createElement("li");
          var txtNode = document.createTextNode(partha);
          
          liNode.appendChild(txtNode);
          listNode.appendChild(liNode);
          }
            