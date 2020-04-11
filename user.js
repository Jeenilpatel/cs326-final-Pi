
function test1() {

    (async () => {
        let counterName = document.getElementById("test").value;
        const newURL = url + "/create?name=" + counterName;  // this code will change
        const resp = await fetch(newURL);
        const j = await resp.json();
        if (j['result'] !== 'error') {
            document.getElementById("output").innerHTML = "101: <b>" + counterName + " created with value " + j['value'] + "</b>";  // this code will change
        } else {
            document.getElementById("output").innerHTML = "100: " + counterName + " not found.</b>";
        }
    })();

}
