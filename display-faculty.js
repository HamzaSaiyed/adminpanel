var rootRef = firebase.database().ref().child("facultyNames");
rootRef.on("child_added",snap=>{
    var exp =snap.child("Exp").val();
    var name=snap.child("Name").val();
    var qua=snap.child("Qua").val();
    var img1=snap.child("image").val();
    var info=snap.child("info").val();
    $("#dfid").append("<tr><td>"+exp+"</td><td>"+name+"</td><td>"+qua+"</td><td><img src="+img1+" width='100' height='100'></td><td>"+info+"</td><td><button id='myBtn'>Delete</button></td></tr>");
    document.getElementById("myBtn").onclick = function() {
        // Ready();
        firebase.database().ref('facultyNames/exp').remove();
        alert("Record Deleted");
      }
});
