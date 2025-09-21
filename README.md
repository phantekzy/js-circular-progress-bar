# JS Circular Progress Bar

This project is a simple circular progress bar built with HTML, CSS, and JavaScript. The progress bar animates from 0% to a defined percentage, visually filling the circle while updating the numeric value in the center.

Features:
- Smooth animation of progress from 0 to target value.
- Circular SVG progress design with gradient stroke.
- Neumorphic card-style design using CSS shadows.
- Lightweight and made with pure HTML, CSS, and JavaScript (no libraries).

How It Works:
The circle uses an SVG with a fixed circumference. CSS stroke-dasharray and stroke-dashoffset control how much of the circle is filled. JavaScript increments the percentage with setInterval and updates both the number and the circle’s stroke offset in sync.

Technologies Used:
- HTML5 for structure
- CSS3 for styling and animation
- JavaScript (ES6) for logic and dynamic updates

Demo:
When opened in the browser, the progress bar animates until it reaches 65%.

Usage:
1. Clone the repo:
   git clone https://github.com/phantekzy/js-circular-progress-bar.git
2. Open index.html in your browser.
3. The progress bar will animate automatically.

