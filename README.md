# This the chai aur react tutorial.

# How rendering works now /' ?

## Fiber Nodes :

- First react create Fiber tree  where each node or fiber represents component and its state. 
- It is the fiber tree that enables react to break down rendering work into smaller units of work so that it can be paused, resumed and aborted as per the situation.

## Reconciliation Process :

- In this process the react compares the previously created fiber tree with the updated fiber tree and determines where the changes are needed. This is more efficient than virtual dom because of the efficent optimization in the fiber tree architecture.

## Concurrent Updates :

- React handles multiple updates . This is particularly useful for animation, user interation and other tasks that require quick responsiveness

## React's Scheduler:

- React’s internal scheduler prioritizes updates based on their urgency and importance, ensuring that the most critical updates are handled first while less important updates can be deferred.