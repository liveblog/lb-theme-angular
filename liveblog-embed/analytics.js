(function() {
    var apiHost = window.hasOwnProperty('LB') ? window.LB.api_host : '';
    var contextUrl = document.referrer;
    var blogId = window.hasOwnProperty('LB') ? window.LB.blog._id : '';

    apiHost += 'api/analytics/hit';

    var hit = function() {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open("POST", apiHost);
        xmlhttp.setRequestHeader("Content-Type", "application/json");

        xmlhttp.onload = function() {
          if (xmlhttp.status === 200) {
              alert('Something went wrong.  Name is now ' + xmlhttp.responseText);
          }
          else if (xmlhttp.status !== 200) {
              alert('Request failed.  Returned status of ' + xmlhttp.status);
          }
        };

        xmlhttp.send(JSON.stringify({
            context_url: contextUrl,
            blog_id: blogId
        }));
    };

    hit();
})();
