# heart for coding
---
I felt I had to say how much I like coding JavaScript. So I created this project. I challenged myself to produce a JavaScript with less then 1024 byte currently I am
at 731 byte. I try to get to 603 anyway 
```
String.fromCharCode(60) + 3
``` 
returns 
```
<3
```
---
## First Idea was
The idea is to have a heart which grows.

This should be drawn on a canvas. But instead to just grow in size it should

The values are saved in binary. but only the first half is saved since the second half will always be 1

that is the start



```
10 = 10
11

1100 = 11001100
1100
1111
1111

11110000 = 11110000
11110000   11110000
11110000   11110000
11110000   11110000
11111111
11111111
11111111
11111111

1111111100000000 = 1111111100000000
1111111100000000   1111111100000000
1111111100000000   1111111100000000
1111111100000000   1111111100000000
1111111100000000   1111111100000000
1111111100000000   1111111100000000
1111111100000000   1111111100000000
1111111100000000   1111111100000000
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
```

the heart is then turned 45° to the left
