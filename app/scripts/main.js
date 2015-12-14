(function (){
  "use strict";

  var xhr = new XMLHttpRequest();
  xhr.open('GET', encodeURI('http://www.reddit.com/hot.json'));
  xhr.setRequestHeader('Content-Type', 'text/plain');
  xhr.onload = function () {
    if (xhr.status === 200) {
      var list = JSON.parse(xhr.responseText);
      init(list);
    }
    else {
      alert('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();

  var list = document.getElementById('list');

  function init(redditList) {
    console.log(redditList);
    //var links = document.createDocumentFragment();
    redditList.data.children.forEach(function (item) {
      //list.insertAdjacentHTML('afterbegin', '<div><a href="' + item.data.url + '">'+ item.data.title +'</a></div>');

      //var a = document.createElement('a');
      //var text = document.createTextNode(item.data.title);      // Create a text node
      //a.appendChild(text);
      //a.href = item.data.url;
      //
      //var p = document.createElement('P');
      //p.appendChild(a);
      //
      //links.appendChild(p)
    });


    list.appendChild(createList(redditList.data.children));
  }

  /**
   * Creates list of reddit items
   * @param data
   * @returns {*}
   */
  function createList(data) {
    return data.reduce((fragment, item) => {
      // ol> li
      var text = document.createTextNode(item.data.title);      // Create a text node
      var a = document.createElement('a');
      a.appendChild(text);
      a.href = item.data.url;
      a.title = item.data.title;

      var p = document.createElement('p');
      p.appendChild(a);

      var li = document.createElement('li');
      li.appendChild(p);

      fragment.appendChild(li);
      return fragment;
    }, document.createDocumentFragment());
  }

})();

