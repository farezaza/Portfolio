
function PostFunction()
{
    var PostText = document.getElementById("text1").value;
    if(document.getElementById("text1").value == "")
    {
        alert("Please Input comments!!")
    }

    if(document.getElementById("topic1").innerHTML == "")
    {
        document.getElementById("topic1").innerHTML = PostText;
    }
    else if(document.getElementById("comment1").innerHTML == "")
    {
        document.getElementById("comment1").innerHTML = PostText;
    }
    else if(document.getElementById("comment2").innerHTML == "")
    {
        document.getElementById("comment2").innerHTML = PostText;
    }
    document.getElementById("text1").value = "";
}
function ClearFunction()
{
    document.getElementById("topic1").innerHTML = null;
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
}
