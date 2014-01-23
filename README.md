Image Directory Scrape Bookmarklet
===================================

A bookmarket for scraping images from a webpage that share the same directory.

Useful for image-rich sites that store similar images in the same directory, 
allowing you to scrape only the images you want and not the junk.

** This bookmarklet has been developed for and tested with Chrome, I have yet to try it out in 
** other browsers

Demo
----
http://javascript:(function()%7Bjavascript:void((function()%7Bvar%20imgDirectory%3Dprompt(%27What%20directory%20do%20you%20want%20to%20scrape%3F%27)%3Bvar%20imgArray%3D%5B%5D%3Bvar%20target%3Ddocument.getElementsByTagName(%27img%27)%3Bvar%20regex_string%3DimgDirectory%2B%27.*%27%3Bvar%20regex_dir%3DRegExp(regex_string)%3Bfor(var%20i%3D0%3Bi%3Ctarget.length%3Bi%2B%2B)%7Bvar%20src%3Dtarget%5Bi%5D.getAttribute(%27src%27)%3Bif(src%3D%3Dsrc.match(regex_dir))%7BimgArray.push(target%5Bi%5D.getAttribute(%27src%27))%3B%7D%7DsetTimeout(runDownloads,1000)%3Bfunction%20runDownloads()%7Bconsole.log(imgArray)%3Bvar%20link%3Bvar%20fileName%3Bvar%20e%3Bfor(var%20i%3D0%3Bi%3CimgArray.length%3Bi%2B%2B)%7Blink%3Ddocument.createElement(%27a%27)%3Blink.href%3DimgArray%5Bi%5D%3BfileName%3DimgArray%5Bi%5D.substring(imgArray%5Bi%5D.lastIndexOf(%27/%27)%2B1,imgArray%5Bi%5D.length)%3Blink.download%3DfileName%3Be%3Ddocument.createEvent(%27MouseEvents%27)%3Be.initEvent(%27click%27,true,true)%3Blink.dispatchEvent(e)%3Bwindow.open(imgArray%5Bi%5D%2B%27%3Fdownload%27)%3B%7D%7D%7D)())%3B%7D)()%3B

Installation
------------
Simply downlaod the index.html file, open it in your browser, and drag the bookmarklet
into your bookmark bar.

Use
---
1. Go to your favourite site and inspect the source to find out the target directory of your images, 
making sure to copy it exactly, minus the image name
2. Click the bookmarket, paste the image path into the alert box, and hit enter
3. The first image may popup in a new window, however it will also download into your downloads folder.
Additional files may be blocked from downloading initially until you authorize the downloads. Chrom will
popup a yellow bar in the top of the browser window for you to enable authorization