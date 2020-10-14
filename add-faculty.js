function insert_faculty() {
    var url;
    var name=document.getElementById("fname").value;
    var exp=document.getElementById("fexp").value;
    var deg=document.getElementById("fdeg").value;
    var des=document.getElementById("f").value;
        //get your select image
        var image=document.getElementById("fimage").files[0];
        //now get your image name
        var imageName=image.name;
        //firebase  storage reference
        //it is the path where yyour image will store
        var storageRef=firebase.storage().ref('FacultyNames/'+imageName);
        //upload image to selected storage reference
    
        var uploadTask=storageRef.put(image);
    
        uploadTask.on('state_changed',function (snapshot) {
            //observe state change events such as progress , pause ,resume
            //get task progress by including the number of bytes uploaded and total
            //number of bytes
            var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log("upload is " + progress +" done");
        },function (error) {
            //handle error here
            console.log(error.message);
        },function () {
           //handle successful uploads on complete
    
            uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
                //get your upload image url here...
                console.log(downlaodURL);
                url = downlaodURL;
                firebase.database().ref('facultyNames/').set({
                    Exp: exp,
                    Name:name,
                    Qua:deg,
                    image:url,
                    info:des
                });
            });
        });
       
    

    //pre built function to upload data to firebase
    //path where your data will be stored
  
    alert("Sucess");
    // location.reload(true);
    window.location.reload(true);
    // window.location.reload();

}