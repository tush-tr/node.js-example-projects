var React = require('react');
// var DefaultLayout = require('./default');


function HelloMessage(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="../static/style.css" />
      </head>
      <body>
        <div className="Name">{props.name}</div>
        <div className="main">
        <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>
        </div>

        </body>
    </html>
  );
};

module.exports = HelloMessage;