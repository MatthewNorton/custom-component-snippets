// Profile Image for activity stream (Circle) -------------------------------------------------------------------------------
const profileImage = function currentStatus(props) {

    let imgString =  props.contentValue;
              console.log(imgString);
    if (imgString.length > 0 ) {
      return React.createElement("img", {
        class: "profile-img",
        src: imgString
      });
        
    }
    return null;
};
manywho.component.register('profile-img', profileImage);      