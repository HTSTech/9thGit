
  import { useEffect } from 'react'
  import axios from 'axios'
  
  export default function Header() {
  
    useEffect(() => {
      //getData();
      eval(var items = document.querySelectorAll('#ir56');
          for (var i = 0, len = items.length; i < len; i++) {
            (function(){
var e,
                      t = 0,
                      n = function () {
                    var e,
                        t = document.createElement("void"),
                        n = {
                      transition: "transitionend",
                      OTransition: "oTransitionEnd",
                      MozTransition: "transitionend",
                      WebkitTransition: "webkitTransitionEnd"
                    };

                    for (e in n) if (void 0 !== t.style[e]) return n[e];
                  }(),
                      r = function (e) {
                    var t = window.getComputedStyle(e),
                        n = t.display,
                        r = (t.position, t.visibility, t.height, parseInt(t["max-height"]));
                    if ("none" !== n && "0" !== r) return e.offsetHeight;
                    e.style.height = "auto", e.style.display = "block", e.style.position = "absolute", e.style.visibility = "hidden";
                    var i = e.offsetHeight;
                    return e.style.height = "", e.style.display = "", e.style.position = "", e.style.visibility = "", i;
                  },
                      i = function (e) {
                    t = 1;
                    var n = r(e),
                        i = e.style;
                    i.display = "block", i.transition = "max-height 0.25s ease-in-out", i.overflowY = "hidden", "" == i["max-height"] && (i["max-height"] = 0), 0 == parseInt(i["max-height"]) ? (i["max-height"] = "0", setTimeout(function () {
                      i["max-height"] = n + "px";
                    }, 10)) : i["max-height"] = "0";
                  },
                      a = function (r) {
                    if (r.preventDefault(), !t) {
                      var a = this.closest("[data-gjs=navbar]"),
                          o = a.querySelector("[data-gjs=navbar-items]");
                      i(o), e || (o.addEventListener(n, function () {
                        t = 0;
                        var e = o.style;
                        0 == parseInt(e["max-height"]) && (e.display = "", e["max-height"] = "");
                      }), e = 1);
                    }
                  };

                  "gjs-collapse" in this || this.addEventListener("click", a), this["gjs-collapse"] = 1;
}.bind(items[i]))();
          })
    }, [])
   
    async function getData() {
      
      axios.get("./api/Header").then(res=>{
        console.log("res=> ",res);
        document.getElementById("HeaderID").innerHTML = res.data;
        
        //* css
        axios.post("./api/Header", {"action": "Get-Css"}).then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("HeaderID").appendChild(createCssElement)
          axios.post("./api/Header", {"action": "Get-js"}).then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='HeaderID'>
        <body id="igsx"><div data-gjs="navbar" class="navbar"><div class="navbar-container"><a href="/" class="navbar-brand"></a><div id="ir56" class="navbar-burger"><div class="navbar-burger-line"></div><div class="navbar-burger-line"></div><div class="navbar-burger-line"></div></div><div data-gjs="navbar-items" class="navbar-items-c"><nav data-gjs="navbar-menu" class="navbar-menu"><a href="Home" class="navbar-menu-link">Home</a><a href="About" class="navbar-menu-link">About</a></nav></div></div></div></body><script>var items = document.querySelectorAll('#ir56');
          for (var i = 0, len = items.length; i < len; i++) {
            (function(){
var e,
                      t = 0,
                      n = function () {
                    var e,
                        t = document.createElement("void"),
                        n = {
                      transition: "transitionend",
                      OTransition: "oTransitionEnd",
                      MozTransition: "transitionend",
                      WebkitTransition: "webkitTransitionEnd"
                    };

                    for (e in n) if (void 0 !== t.style[e]) return n[e];
                  }(),
                      r = function (e) {
                    var t = window.getComputedStyle(e),
                        n = t.display,
                        r = (t.position, t.visibility, t.height, parseInt(t["max-height"]));
                    if ("none" !== n && "0" !== r) return e.offsetHeight;
                    e.style.height = "auto", e.style.display = "block", e.style.position = "absolute", e.style.visibility = "hidden";
                    var i = e.offsetHeight;
                    return e.style.height = "", e.style.display = "", e.style.position = "", e.style.visibility = "", i;
                  },
                      i = function (e) {
                    t = 1;
                    var n = r(e),
                        i = e.style;
                    i.display = "block", i.transition = "max-height 0.25s ease-in-out", i.overflowY = "hidden", "" == i["max-height"] && (i["max-height"] = 0), 0 == parseInt(i["max-height"]) ? (i["max-height"] = "0", setTimeout(function () {
                      i["max-height"] = n + "px";
                    }, 10)) : i["max-height"] = "0";
                  },
                      a = function (r) {
                    if (r.preventDefault(), !t) {
                      var a = this.closest("[data-gjs=navbar]"),
                          o = a.querySelector("[data-gjs=navbar-items]");
                      i(o), e || (o.addEventListener(n, function () {
                        t = 0;
                        var e = o.style;
                        0 == parseInt(e["max-height"]) && (e.display = "", e["max-height"] = "");
                      }), e = 1);
                    }
                  };

                  "gjs-collapse" in this || this.addEventListener("click", a), this["gjs-collapse"] = 1;
}.bind(items[i]))();
          }</script>
        <style>
          {"* { box-sizing: border-box; } body {margin: 0;}.navbar-items-c{display:inline-block;float:right;}.navbar{background-color:rgb(34, 34, 34);color:rgb(221, 221, 221);min-height:50px;width:100%;}.navbar-container{max-width:950px;margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;width:95%;}.navbar-container::after{content:"";clear:both;display:block;}.navbar-brand{vertical-align:top;display:inline-block;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;min-height:50px;min-width:50px;color:inherit;text-decoration-line:none;text-decoration-thickness:initial;text-decoration-style:initial;text-decoration-color:initial;}.navbar-menu{padding-top:10px;padding-right:0px;padding-bottom:10px;padding-left:0px;display:block;float:right;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}.navbar-menu-link{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;color:inherit;text-decoration-line:none;text-decoration-thickness:initial;text-decoration-style:initial;text-decoration-color:initial;display:inline-block;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;}.navbar-burger{margin-top:10px;margin-right:0px;margin-bottom:10px;margin-left:0px;width:45px;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;display:none;float:right;cursor:pointer;}.navbar-burger-line{padding-top:1px;padding-right:1px;padding-bottom:1px;padding-left:1px;background-color:white;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;}@media (max-width: 768px){.navbar-burger{display:block;}.navbar-items-c{display:none;width:100%;}.navbar-menu{width:100%;}.navbar-menu-link{display:block;}}"}
        </style>
      </div>
    )
  }