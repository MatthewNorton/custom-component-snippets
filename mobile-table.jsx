/* ================================= 
Convert Table to Mobile that is housing a custom component
================================= */

class mobileTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Hello World",
    };
  }

  foo = () => {
    // document.getDocumentById(${param});
    // var classSelector = document.querySelectorAll('.table');
    // return param
  };
  componentDidMount() {
    console.log($(".table"));
    $(".table")
      .not(".customTable")
      .each(function () {
        var table = $(this);
        var row = table.find("tr");
        var thText;

        table.find("td").each(function () {
          var tdIndex = $(this).index();
          if ($(row).find("th").eq(tdIndex).attr("data-label")) {
            thText = $(row).find("th").eq(tdIndex).data("label");
          } else {
            thText = $(row).find("th").eq(tdIndex).text();
          }
          $(this).attr("data-label", thText + ":");
        });
      });
  }
  render() {
    return null;
  }
}
manywho.component.register("js-pattern", mobileTable);



(function (manywho) {
  class MobileTable extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

      $(".table")
      .not(".customTable")
      .each(function () {
        var table = $(this);
        var row = table.find("tr");
        var thText;

        table.find("td").each(function () {
          var tdIndex = $(this).index();
          if ($(row).find("th").eq(tdIndex).attr("data-label")) {
            thText = $(row).find("th").eq(tdIndex).data("label");
          } else {
            thText = $(row).find("th").eq(tdIndex).text();
          }
          $(this).attr("data-label", thText + ":");
        });
      });

    }
    render() {
        return null;
    }

}
}(manywho));