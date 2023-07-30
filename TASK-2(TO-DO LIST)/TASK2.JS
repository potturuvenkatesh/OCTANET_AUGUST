document.querySelector('#add').onclick = function()
{
    if(document.querySelector('.task input').value=="")
    {
        alert("Please Enter your task")
    }
    else
    {
        document.querySelector('.tasks').innerHTML += `
            <div class="task">
                <span id="tn">
                    ${document.querySelector('.task input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var t=document.querySelectorAll(".delete");
        for(var i=0; i<t.length; i++)
        {
            t[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++)
        {
            tasks[i].onclick = function(){
                this.classList.toggle('END');
            }
        }
        document.querySelector(".task input").value = "";
    }
}