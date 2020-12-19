## HTML PART APPLICATION
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      
**linking the CSS part With HTML Part**      
    <link rel="stylesheet" href="FIRST.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    
**Adding Fonts from google**    
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap" rel="stylesheet">

   <title>project</title>
  </head>
  <body>
    
**Working with the body** 
    <h1>HASHCODE</h1>
    <h2>discover best courses for the best learning!!</h2>
  
**added main focus of the project** 
    <p>This project is build to make coding knowledge available to every place through an app and a website. This is an online platform to learn different languages from the best hand-picked courses
    </p>
    
**Adding An extra Line for clear info**    
    <p>This course provides you with the following Courses:</p>
    
**Making the picture more responsive by clicking on them we are directed to the respective page**
    <table class="courses">
      <tr>
          
**For HTML IMAGE**          
        <td>
          <a href="https://html.com/">
            <img id="a" src="https://repository-images.githubusercontent.com/134285701/635de980-586d-11ea-9220-1a3211239c30" alt="Html">
          </a>
        </td>
**For CSS IMAGE**        
        <td>
          <a href="https://www.w3.org/Style/CSS/Overview.en.html">
            <img id="b"src="https://www.motocms.com/blog/wp-content/uploads/2018/07/css-main-image.jpg" alt="CSS">
          </a>
        </td>
**For JAVASCRIPT IMAGE**        
        <td>
          <a href="https://www.javascript.com/">
            <img id="c" src="https://content.techgig.com/photo/76507012/5-javascript-project-ideas-for-beginner-programmers.jpg?59551" alt="JavaScript">
          </a>
        </td>
      </tr>

    </table>


  </body>
</html>



## APPLICATION OF THE **CSS** PART TO BE USED IN **HTML** FOR BETTER STYLING AND BACKGROUND TO BE USED IN THE ABOVE CODE
body{
  font-family: 'Open Sans', sans-serif;
 **Added background for the whole page** 
  background-color: #011627;
  color: #FDFFFC;
  align: center;
  text-align: center;
  
  **Added borders**
  border: 20px solid #2EC486;
  
  padding-bottom: 350px;

}

h1{
  font-size: 4.0em;
}


.courses{
  margin: auto;
}

**adding detail in the pictures used from the internet for a redirecting page**
 #a{
   height: 150px;
   width:  300px;
   padding: 10px;

 }
 #b{
   height: 150px;
   width:  300px;
   padding: 10px;

 }
 #c{
   height: 150px;
   width:  300px;
   padding: 10px;

 }



## Chat with us
[![Gitter](https://img.shields.io/badge/gitter-red?&logo=gitter&style=for-the-badge)](https://gitter.im/inaxia-group/hashcode-web?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


## Description
We got the inspiration of this idea with the help of our fellow friends who wanted to have good knowledge as well as relevant skills in different **Programming languages** and **frameworks**. They wanted a single platform to access the **best resources** available in the internet, so we came up with an idea to build this platform.

**HashCode** is a web and app based platform where the we provide the **best-handpicked courses** from the internet at one place of different branches. Students who will use the platform can view **various courses** and test their knowledge.

[![GitHub stars](https://img.shields.io/github/stars/inaxia/hashcode_web?style=for-the-badge)](https://github.com/inaxia/hashcode_web/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/inaxia/hashcode_web?style=for-the-badge)](https://github.com/inaxia/hashcode_web/network)
[![GitHub issues](https://img.shields.io/github/issues/inaxia/hashcode_web?style=for-the-badge)](https://github.com/inaxia/hashcode_web/issues)

## Installation
**You need to do changes only in `develop` branch**<br>
(Make sure you have **Node/Nodemon** & **Express** installed)
1. Fork this repo
2. Clone the forked repo
3. Open the main/parent `hashcode_web` folder
4. Run the following command inside `hashcode_web`'s terminal:
    - `node app.js` -> if you have **Node**
    - `nodemon app.js` -> if you have **Nodemon**
    - You'll get a port_number
5. Open any browser, in new tab enter a url `https://localhost:<port_number>/` like `http://localhost:3000/`


## Visual
<img src="assets/readme_data/ss1.jpg" widht=100%><br>
<img src="assets/readme_data/ss2.jpg" width=100%><br>
<img src="assets/readme_data/ss3.jpg" width=100%><br>


## Community
**[Code of Conduct](https://github.com/inaxia/attendance_using_face_recognition/blob/master/CODE_OF_CONDUCT.md)**<br>
**[Contributing to Inaxia](https://github.com/inaxia/attendance_using_face_recognition/blob/master/CONTRIBUTING.md)**


## License
```
MIT License

Copyright (c) 2020 inaxia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


## Support
![built with love](https://forthebadge.com/images/badges/built-with-love.svg)<br>
**If you like our project, don't forget to give it a ⭐**
