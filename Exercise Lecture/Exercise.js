<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>React with CDN</title>
 <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
 <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
</head>
<body>
 <div id="root"></div>
 <script>
 const element = React.createElement('h1', null, 'Hello, React with CDN!');
 ReactDOM.render(element, document.getElementById('root'));
 </script>
</body>