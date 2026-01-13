
function customRender(reactElement, container) {
    /*

    const domELement = document.createElement(reactElement.type)
    domELement.innerHTML = reactElement.children
    domELement.setAttribute('href', reactElement.props.href)
    domELement.setAttribute('target', reactElement.props.target)
    domELement.setAttribute('title', reactElement.props.title)

    container.appendChild(domELement)

    */
    // better and modular approach
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}



const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        title: 'Visit Google website for more info'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')


customRender(reactElement, mainContainer)