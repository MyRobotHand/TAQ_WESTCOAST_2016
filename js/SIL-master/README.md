Smooth Image Loading
===

A jQuery plugin to load images sequentially, thereby ensuring smoothness of prevalent loading animations.

Since I got fed up with my loading animation overlay being laggy and unsmooth in appearance, I made this little plugin to sequentially load the images on the page and thereby loosen up the immediate render load, allowing the loading animation to play smoothly enough for my tastes. Since AJAX is magical, it stuffs the images into the cache once they've been loaded, so when the actual "src" attribute is assigned to the <img> tags, the page just does a harmless little check on the cache.

To use this plugin, replace the "src" attribute in all the images you want sequentially loaded with "data-src". Then, in your JavaScript, call the $.preloadImages() function. Below is an example of calling it:

    $(window).load(function () {
        //This is where you could start a loading animation.
        
        //Then start loading the images.
        $.preloadImages({
            StepCallback: function (CurrentImage, TotalImages, LoadedElement, LoadTime) {
                console.log("Loaded image " + CurrentImage + "/" + TotalImages + " in " + LoadTime + " ms.");
                
                //This is where you could update some sort of progress indicator.
            },
            
            DoneCallback: function () {
                console.log("Done loading the images.");
                
                //This is where you could stop the loading animation.
            }
        });
    });

Options
===

ElementSelector (default "img[data-src]"): The selector to go by when finding the images to smoothly load.

DataAttribute (default "data-src"): The data attribute in the selected elements, in which the image URL is found.

StepDelay (default 0): A waiting period after loading an image. For instance, maybe you got some fancy effect going on that needs some time to show.

StepCallback(CurrentImage, TotalImages, LoadedElement, LoadTime): A callback that's executed after every successful loading of an image. CurrentImage is the number of the currently loaded image, TotalImages the total number of images to be loaded, LoadedElement the DOM element (in a jQuery object) of the loaded image, and LoadTime the time (including delay) in milliseconds it took to load the current image.

DoneCallback(): The callback that's executed after loading the last image.

License
===

The MIT License (MIT)

Copyright (c) 2014 Fede

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
