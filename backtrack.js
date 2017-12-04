
function dfs(size,options,step,temp,result)
{
	if(size == step)
    {
		var tempClone = temp.slice();// need a clone of original temp array or else it will affect All result
        result.push(new Array(tempClone));
		return;        
    }
    else
    {
		for(var i=0; i < options.length; i++)
        {
			temp.push(options[i]);
			dfs(size,options,step+1,temp,result);
            temp.pop();
        }
		
    }

}

function subsets(options)
{
	var result=[[]];
    var temp= [];
	dfs(options.length,options,0,temp,result);
}


subsets(["a","b","c"]);
