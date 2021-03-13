function deprecation() {

    var depr = document.createElement("div");

    depr.className = "DEPRECATION";

    depr.id = "DEPRECATION";

    var content = document.createElement("p");

    var link = document.createElement("a");

    var body = document.getElementsByTagName("body");

    link.href = "https://gitlab.com/waps/framework"

    link.target = "_self";

    link.innerHTML = "<br>https://gitlab.com/waps/framework";

    link.style = "color: white;"

    content.innerHTML = "The development of the WAPS framework has stopped, due to lack of time the software cannot be further developed."

    content.appendChild(link);

    depr.appendChild(content);

    body[0].prepend(depr);
}

deprecation();