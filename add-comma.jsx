/* ================================= 
 Adding Commas to output numbers
  ================================= */

    class addComma extends React.Component {
        commaLogic = (selector) => {
          var numbers = document.querySelectorAll('.add-comma');
          for (var i = 0; i < numbers.length; ++i) {
               var oldVal = numbers[i].textContent;
               var output = new Intl.NumberFormat('en-US').format(oldVal); 
               numbers[i].textContent = output;
          }
      }
        componentDidMount(numFormat) {
            this.commaLogic();
        }
            
        render() {
            return null;
        }

    }
   manywho.component.register('addComma', addComma);
