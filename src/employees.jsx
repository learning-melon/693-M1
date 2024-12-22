//5: Variables
let zak = 'Zak Ruvalkaba'
let sally = 'Sally Smith'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let aaron = 'Aaron D. Tyres'
let bob = 'Bob Smith'

const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{zak}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{robin}</li>
        <li>{aaron}</li>
        <li>{bob}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))

/*//4: Enter JSX
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>Zak Ruvalcaba</li>
        <li>Sally Smith</li>
        <li>Holly Unlikely</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))
*/
/*
//3: Gets more unsustainable
const element = React.createElement(
    'ul',
    {style: {'color': 'blue','fontSize': '24px'}},
    React.createElement('li',null,'Zak Ruvalcaba'),
    React.createElement('li',null,'Sally Smith'),
    React.createElement('li',null,'Holly Unlikely'),
)
ReactDOM.render(element, document.getElementById('content'))
*/
/*
//2: Make into a variable
const element = React.createElement(
    'div',
    {title: 'Outer div'},
    React.createElement(
        'h1', 
        null, 
        'Hello World'
    )
)
ReactDOM.render(element,document.getElementById('content'))
*/
/*
//1: Virtual DOM (JS engine's memory)- not yet in actual DOM (browser's memory)
ReactDOM.render(
    React.createElement(
    'div',
    {title: 'Outer div'},
    'Hello World!'
    ),document.getElementById('content')
)*/