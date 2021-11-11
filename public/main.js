const request = new XMLHttpRequest();
request.open("get", "style.css");
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    const css = request.response;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }
};
request.send();

const request2 = new XMLHttpRequest();
request2.open("get", "2.js");
request2.onreadystatechange = function () {
  if (request2.readyState === 4 && request2.status === 200) {
    const js = request2.response;
    const script = document.createElement("script");
    script.innerHTML = js;
    document.body.appendChild(script);
  }
};
request2.send();

if (1) {
  const request = new XMLHttpRequest();
  request.open("get", "3.html");
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };
  request.send();
}

if (2) {
  const request = new XMLHttpRequest();
  request.open("get", "4.xml");
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
}

if (3) {
  const request = new XMLHttpRequest();
  request.open("get", "5.json");
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const obj = JSON.parse(request.response);
      console.log(obj);
    }
  };
  request.send();
}
let pageNum = 1;
page.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("get", `page${pageNum + 1}`);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      const pageData = JSON.parse(request.response);
      pageData.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = item.id;
        pageList.appendChild(li);
      });

      pageNum++;
      if (pageNum === 3) {
        let p = document.getElementById("page");
        p.disabled = '1';
        return;
      }
    }
  };
  request.send();
});
