          
    var customControl = function renderControl(props) {
        var arrowNumber =  manywho.state.getComponent(props.id, props.flowKey);
// return( React.createElement("div", { class: "redarrow", }) )          
        for (var key in arrowNumber) {
            if (arrowNumber[key] < 0 ) { return( React.createElement("div", { class: "greenarrow",  }) ); }
            else { return( React.createElement("div", { class: "redarrow", }) )}
        }
            return null 
        };
manywho.component.register('arrowcontrol', customControl);