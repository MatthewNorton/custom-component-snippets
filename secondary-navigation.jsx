/* ================================= 
Secondary Navigation
- Adjust flow id for each link
================================= */
const customNav = function newNav(props) {

    return React.createElement("nav", {
        class: "navbar navbar-default onboard"
    }, React.createElement("div", {
        class: " container"
    }, React.createElement("div", {
        class: "navbar-header"
    }, React.createElement("button", {
        class: "navbar-toggle collapsed",
        "data-toggle": "collapse",
        "data-target": ".navbar-collapse"
    }, React.createElement("span", {
        class: "sr-only"
    }, "Toggle Navigation"), React.createElement("span", {
        class: "icon-bar"
    }), React.createElement("span", {
        class: "icon-bar"
    }), React.createElement("span", {
        class: "icon-bar"
    })), React.createElement("a", {
        class: "navbar-brand",
        href: "#"
    }, "Taskr")), React.createElement("div", {
        class: "collapse navbar-collapse"
    }, React.createElement("ul", {
        class: "nav navbar-nav"
    }, React.createElement("li", {
        class: "top-nav-element"
    }, React.createElement("a", {
        target: '_self',
        href: "" + window.location.origin + window.location.pathname + "?flow-id=a6dcfc12-69f7-4a59-91cf-5fae3008e4b2"
    }, "Home")), React.createElement("li", {
        class: "top-nav-element"
    }, React.createElement("a", {
        href: "" + window.location.origin + window.location.pathname + "?flow-id=e033e69f-156a-4067-8337-30abc994ced6"
    }, "Create Task")), React.createElement("li", {
        class: "top-nav-element"
    }, React.createElement("a", {
        href: "" + window.location.origin + window.location.pathname + "?flow-id=05ea3cbd-a4b1-4d9f-ad90-a231b56f6a09"
    }, "Activity Stream")), React.createElement("li", {
        class: "top-nav-element"
    }, React.createElement("a", {
        href: "" + window.location.origin + window.location.pathname + "?flow-id=45aa7df2-7cbb-466e-9f40-d3f35462d3a7"
    }, "Themes")), React.createElement("li", {
        class: "top-nav-element"
    }, React.createElement("a", {
        href: "" + window.location.origin + window.location.pathname + "?flow-id=55b8f192-9011-47c6-bcfb-5287acb5db77"
    }, "Universal Search"))))));

}

manywho.component.register('custom-nav', customNav);