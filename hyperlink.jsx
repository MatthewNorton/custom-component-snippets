/* =============================
Convert HREF string to a 
hyperlink within a column
================================*/
const ColumnHref = function columnHref(props) {
  let hrefString = props.contentValue;
  if (hrefString.length > 0) {
    return React.createElement(
      'a',
      {
        target: '_blank',
        class: 'column-href',
        href: hrefString
      },
      'Click to open'
    );
  }
  return null;
};
manywho.component.register('hyperlink', ColumnHref);
