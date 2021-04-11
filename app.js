const myFunction = () => {
    const x = document.getElementById("nav-bar");
    if (x.className === "nav-links") {
        x.className += " responsive-nav";
    } else {
        x.className = "nav-links";
    }
    console.log("Toggle Nav Works")

}