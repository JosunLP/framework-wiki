function deprecation() {

    var depr = document.createElement("div");

    depr.className = "DEPRECATION";

    depr.id = "DEPRECATION";

    var content = document.createElement("p");

    var body = document.getElementsByTagName("body");

    content.innerHTML = "The development of the WAPS framework has stopped, due to lack of time the software cannot be further developed."

    depr.appendChild(content);

    body[0].prepend(depr);
}

deprecation();