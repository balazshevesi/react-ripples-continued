# react-ripples-continued

This project is meant to be a continued verison of react-ripples, and hopefully improved aswell!

## note

I have chosen not rely much on the v-dom to append the ripples, because i deem it to be unnecessary overhead for this application.

Keep in mind that once a ripple has been appended to the DOM, it will just stay around until it gets unmounted or rerendered. With that being said; i have added an "optimize" prop that removes it after the set duration, but i would advise against using it since it can introduce some wierd behaviour.