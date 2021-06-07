## Dropdown menu not working 

I had added some extra bootstrap links to the bottom of the index.html page.  They were unneccessary as I had already add the bundle.  
This caused some doubling up.

With some help from Kevin in tutor support, I removed the unneccesary links


![bootstrap issues](assets/images/debuggingimages/bootstrapissue.png)

![bootstrap solution](assets/images/debuggingimages/bootstrapsolution.png)


## Gameboard was misaligning

I had a positioning issue with my gameboard.  The cards were aligning too far to the left.
I adjusted my display in css to relative instead of absolute.  
This helped with the positioning.

![positioning issue](assets/images/debuggingimages/positioningissue.png)
![positioning solution](assets/images/debuggingimages/positioningsolution.png)

## Level choices not displaying inline across the width of the screen

## Glyphicon not appearing in button

![404 button error](assets/images/debuggingimages/glyphicon_error.png)

![Glyphicon not showing](assets/images/debuggingimages/glypicon_error_image.png)

After googling and contacting tutor support, I learned that glyphicons are not supported in Bootstrap 5.0.
Therefore I changed to Font Awesome.

![Font Awesome Icon for chevron-left icon](assets/images/debuggingimages/glyphicon_solution_code.png)

![Solution Image](assets/images/debuggingimages/font_awesome_image.png)

## Jellyfish cards were matching but was not been recognised as a match.

Solution - The alt tag descriptions were not equal.

Updated the alt tag on the jellyfish img to match.


## CSS Validator

```<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>```
        

## HTML Valiator


