const formUpload = document.querySelector("#form-upload");
const inputFile = document.querySelector("#form-upload input");
const previewImg = document.querySelector("#form-upload img");

const onUpload = (e)=> {
    console.dir(inputFile);
    // get the file info
    let fileInfo = inputFile.files[0];
    console.log(fileInfo)
    // convert to address
    let url = URL.createObjectURL(fileInfo)
    console.log(url)

    //put the address into the image.src attribute
    previewImg.src = url;

    //show the image element
    previewImg.style.display = 'inline-block';
}

inputFile.addEventListener("change", onUpload);