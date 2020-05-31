import firebase from "firebase";

export default UploadPhotoFunc = (uri, filename) => { 
    return new Promise(async (res, rej) => {
        const response = await fetch(uri);
        const file = await response.blob();

        let upload = firebase.storage().ref(filename).put(file);
        upload.on(
            "state_changed",
            snapshot => {},
            err => {
                rej(err)
            },
            async() => {
                const url = await upload.snapshot.ref.getDownloadURL();
                res(url)
            }
        )
    })

}