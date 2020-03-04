/* ================================= 
CUSTOM SCRIPT TO EMBED CHAT
================================= */

class flowChat extends React.Component {
    componentDidMount() {
        const cScript = document.createElement("script");
        cScript.type = 'text/javascript';
        cScript.src = "https://s3.amazonaws.com/bdk-flow-ui/embed.js";
        cScript.async = true;
        document.body.appendChild(cScript);
    }
    render() {
        const chatOpt = {
            id: "flowchat",
            url: 'https://flow.manywho.com/c7b19d85-22ec-45ad-9aa4-13620a3f5578/play/bot/?flow-id=512f3b1d-c387-4a2b-9eb9-fd37ac57f61c&taskid=',
            defer: true, 
        }
        
        const model = manywho.model.getComponent(this.props.id, this.props.flowKey);

        return React.createElement("div", {
            "data-label": "Task Comments",
            "data-connect":"Authenticating and fetching task comments....",
            "data-url": chatOpt.url + model.contentValue,
            id: chatOpt.id
        }, React.createElement("script", {
            src: this.script,
            defer: chatOpt.defer
        }));
    }
};
manywho.component.register('flowchat', flowChat);