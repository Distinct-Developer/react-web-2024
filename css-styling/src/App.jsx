/*
* Style React components with CSS.
* No external frameworks or preprocessors.
*
* 1 - External CSS, great for global styles or small projects.
* 2- Modules CSS, preferred for individual components that have their own unique styles, CSS file name has .module.css extension (Example: ModuleCssButton.module.css)
* 3 - Inline CSS, good for small components with minimal styling.
* */

import ModuleCssButton from "./ModuleCssButton/ModuleCssButton.jsx";
import InlineCssButton from "./InlineCssButton.jsx";

function App() {
  return (
      <>
        <ModuleCssButton />
        <InlineCssButton />
      </>
  );
}

export default App
