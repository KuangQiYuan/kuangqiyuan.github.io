;;(function() {
  var _mermaid_init = function() {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'forest',
      // themeCSS: '.node rect { fill: red; }',
      logLevel: 3,
      flowchart: { curve: 'linear' },
      gantt: { axisFormat: '%m/%d/%Y' },
      sequence: { actorMargin: 50 },
      // sequenceDiagram: { actorMargin: 300 } // deprecated
    });
  };

  var hm = document.createElement("script");
  hm.src = "//unpkg.com/mermaid@8.0.0/dist/mermaid.min.js";
  hm.onload = _mermaid_init;
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);

  (function() {
    var codelist = document.querySelectorAll('code.language-mermaid');
    if (codelist && 'length' in codelist && codelist.length > 0) {
      for (var i = 0; i < codelist.length; i++) {
        var div = document.createElement('div');
        div.className = 'mermaid';
        div.innerHTML = codelist[i].innerHTML.replace(/&amp;/g, '&');
        codelist[i].replaceWith(div);
      }
    }
  })();
})();
