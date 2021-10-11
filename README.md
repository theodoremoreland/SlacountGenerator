# Slacount Generator

## MVP
# Parses text of specific format and converts to text for slacount notifications.

### Input
<pre>
    6:30PM 	1 	Instructor Do: Stoke Curiosity 	0:10
    6:40PM 	2 	Instructor Demo: Constructors 	0:05
    6:45PM 	3 	Student Do: Constructors 	0:15
    7:00PM 	4 	Instructor Review: Constructors 	0:10
    7:10PM 	5 	Instructor Demo: Prototypes 	0:05
    7:15PM 	6 	Student Do: Prototypes 	0:15
    7:30PM 	7 	Instructor Review: Prototypes 	0:10
    7:40PM 	8 	Instructor Demo: Polymorphism 	0:05
    7:45PM 	9 	Student Do: Polymorphism 	0:15
    8:00PM 	10 	BREAK 	0:15
    8:15PM 	11 	Instructor Review: Polymorphism 	0:10
    8:25PM 	12 	Instructor Demo: Promises 	0:05
    8:30PM 	13 	Student Do: Promises 	0:15
    8:45PM 	14 	Instructor Review: Promises 	0:10
    8:55PM 	15 	Instructor Demo: Promise.all() 	0:05
    9:00PM 	16 	Student Do: Promise.all() 	0:15
    9:15PM 	17 	Instructor Review: Promise.all() 	0:15
    9:30PM 	18 	END 	0:00
 </pre>

### Output 
    /slacount_create "Instructor Do: Stoke Curiosity" 10 minutes "Time for Instructor Demo: Constructors!"
    /slacount_create "Instructor Demo: Constructors" 5 minutes "Time for Student Do: Constructors!"
    /slacount_create "Student Do: Constructors" 15 minutes "Time for Instructor Review: Constructors!"
    /slacount_create "Instructor Review: Constructors" 10 minutes "Time for Instructor Demo: Prototypes!"
    /slacount_create "Instructor Demo: Prototypes" 5 minutes "Time for Student Do: Prototypes!"
    /slacount_create "Student Do: Prototypes" 15 minutes "Time for Instructor Review: Prototypes!"
    /slacount_create "Instructor Review: Prototypes" 10 minutes "Time for Instructor Demo: Polymorphism!"
    /slacount_create "Instructor Demo: Polymorphism" 5 minutes "Time for Student Do: Polymorphism!"
    /slacount_create "Student Do: Polymorphism" 15 minutes "Time for BREAK!"
    /slacount_create "BREAK" 15 minutes "Time for Instructor Review: Polymorphism!"
    /slacount_create "Instructor Review: Polymorphism" 10 minutes "Time for Instructor Demo: Promises!"
    /slacount_create "Instructor Demo: Promises" 5 minutes "Time for Student Do: Promises!"
    /slacount_create "Student Do: Promises" 15 minutes "Time for Instructor Review: Promises!"
    /slacount_create "Instructor Review: Promises" 10 minutes "Time for Instructor Demo: Promise.all()!"
    /slacount_create "Instructor Demo: Promise.all()" 5 minutes "Time for Student Do: Promise.all()!"
    /slacount_create "Student Do: Promise.all()" 15 minutes "Time for Instructor Review: Promise.all()!"
    /slacount_create "Instructor Review: Promise.all()" 15 minutes "Time for Office Hours!"

