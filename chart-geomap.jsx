
/*========================================================================================      
// Global Map
========================================================================================*/
class geoMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          width: "900px",
          height: "500px"
        };
      }

    componentDidMount() {
            var data = google.visualization.arrayToDataTable([
                ['State', 'Popularity'],
                ['Germany', 200],
                ['United States', 300],
                ['Brazil', 400],
                ['Canada', 500],
                ['France', 600],
                ['RU', 700]
            ]);

        var options = {
            // region: 'US', // United States
            // colors:  ['#FF7C66', '#22C5BE', '#0087CC', '#454545']
            // region: 'US-PA'; // State level
        };

        var chart = new google.visualization.GeoChart(
            document.getElementById("geomap")
        );

        chart.draw(data, options);
    }
  
    render() {
        const style = {
            'width': this.state.width,
            'height': this.state.height
        }
        return React.createElement("div", {
            id: "geo_map",
        });
    }
  }
manywho.component.register("custom-geomap", geoMap);


custom component : GeoMap
Add  to Head
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
    google.charts.load('current', {
        'packages':['geomap'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
</script> 
Custom Component. 