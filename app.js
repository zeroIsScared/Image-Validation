const formUpload = document.querySelector("#form-upload");
const inputFile = document.querySelector("#form-upload input");
const previewImg = document.querySelector("#form-upload img");

let model = null;

cocoSsd.load().then(loadedModel => {
    model = loadedModel;
    console.log(model);
})

const onUpload = (e) => {
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

    //detect object in our Image
    setTimeout(() => {
        previewImg.width = previewImg.offsetWidth;
        previewImg.height = previewImg.offsetHeight;
        model.detect(previewImg).then(predictions => {
            console.log("Predictions:", predictions);
            for (let i = 0; i < predictions.length; i++) {
                if (predictions[i].class === 'cat' && predictions[i].score >= 0.5) {
                    alert("This image upload was canceled it contains a cat not a person!")
                }
            }

        })
    }, 500)

}

inputFile.addEventListener("change", onUpload);