# error-page-pacpkgkage


INSTALLATION
------------
 
 * Install as you would normally install a npm package
 * Run this command in your project  npm i page-error-pkg
 * To verify the package check usage folder read me file

SCREENSHOTS
------------

**Desktop View**
![Screen Shots](https://raw.githubusercontent.com/varunsharmaa/error-page-pkg/master/package/Desktop-SS.png)

**Mobile View**
![Screen Shots](https://raw.githubusercontent.com/varunsharmaa/error-page-pkg/master/package/Mobile-SS.png)


USAGE
------------

**If no property passed it will use the defailt values.**

```
import { epPlugin }  from 'page-error-pkg';
epPlugin.register();
```

**properties that are available**

```
epPlugin.register({
    ele:'' element ID where you want to please error page content, if empty it will placed  as the first element of the body
    heading: '', error message heading (default value: Opps! OUR SERVER IS ON BREAK)
    description:'', description of error message (default value: Something went wrong, We are looking to see what happened.)
    linkText:'', button text (default value: Go Back)
    linkURL: '' button URL (default value: /home)
   });
 ```


