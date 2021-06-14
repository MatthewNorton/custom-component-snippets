var activityStatus = function activityStatus(props) {
    if ((props.contentValue) === 'green' ) {

        return(

            React.createElement('span', { title: "Status Green", className: 'status-green glyphicon glyphicon-ok-circle' } )

    );
    } else if ((props.contentValue) === 'yellow' ) {
        return(

            React.createElement('span', {  title: "Status Yellow", className: 'status-yellow glyphicon glyphicon-exclamation-sign' } )

    );

    } else if ((props.contentValue) === 'red' ) {
        return(

            React.createElement('span', { title: "Status Red", className: 'status-red glyphicon glyphicon-remove-sign' } )

    );
        
    }
    return null
};
manywho.component.register('activity-status', activityStatus);