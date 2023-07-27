  //algo
        //create array to store todos
        //when we click add
        //get text from input and add it to array
        //console.log() the array

        const todoList = [{
            name:'make dinner',
            date: '04/12/2023'
        },{
            name:'make noodles',
            date:'09/12/2023'
        }];
        renderTodo();
        function renderTodo(){ 
        let result = '';
        for(let i = 0; i< todoList.length; i++){
            const todoObj = todoList[i];
            // const name = todoObj.name;
            // const date = todoObj.date;
            //short cut "destructuring" 
            const {name, date} = todoObj;

            
            const html = `
            <div>${name}</div>
            <div>${date}</div> 

            <button onclick="
                todoList.splice(${i},1);
                renderTodo();
            
            
            ">Delete</btton> 
            `; //generating html through js
            result = result + html;
        }
        // console.log(result);
        document.querySelector('.div').innerHTML = result;
    }

        function addTodo(){
            const x = document.querySelector('.input');
            const name = x.value;
            const y = document.querySelector('.date');
            const date = y.value;
           
            todoList.push({
                name: name,
                date:date
                //shortcut if name same we can write only (name)
            });
            

            x.value='';
            y.value='';
            renderTodo();

            

        }
        
