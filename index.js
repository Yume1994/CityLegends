if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(Error => {
        console.log("Sw Registration Failed");
        console.log(Error);
    })



}
