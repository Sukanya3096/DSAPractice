function maxValue(events, k) {
    events.sort((a, b) => a[0] - b[0]);
    let n = events.length, obj = {}
    const max = (i, k, prev) => {
        /*
        Inside the max function, it checks for the base cases where either all events have been considered or the remaining number
        of events is zero. In these cases, it returns zero as there are no more events to attend or the limit of events to attend has been reached.
         */
        if(i === n || k === 0)return 0;

        /*
        For each recursive call, it generates a unique key str based on the current index, remaining events, and previous end day.
        This key is used to check if the result for the current combination of parameters has already been
        computed and stored in the obj memoization object. If so, it returns the cached result to avoid recomputation.
        */
        let str = `${i}-${k}-${prev}`
        if( obj[str] )return obj[str];

        /*
        Next, it checks if the current event overlaps with the previously attended event.
        If the end day of the previous event is greater than or equal to the start day of the current event, it skips the current event and recursively calls max for the next event (i + 1) while keeping the same remaining events and previous end day.
        */
        if(prev >= events[i][0])return obj[str] = max(i + 1, k, prev);
        /*
        If the current event doesn't overlap with the previous event, it considers two options:

        Attend the current event:
        It adds the value of the current event (events[i][2]) to the result of recursively calling max for the next event
        with one less remaining event (k - 1) and the end day of the current event as the new previous end day (events[i][1]).

        Skip the current event: 
        It recursively calls max for the next event while keeping the same remaining events and previous end day.
        The maximum of these two options is stored in the obj memoization object for the current combination of parameters and returned as the result.
        */

        /*
        max function is called with the initial parameters (0, k, 0) to start the recursive computation, and the final result is returned.
        */
        return obj[str] = Math.max(events[i][2] + max(i + 1, k - 1, events[i][1]), max(i + 1, k, prev))
    }
    /* 
    The max function is a recursive helper function that takes three parameters: i, k, and prev. It represents the current index,
    the remaining number of events that can be attended (k), and the end day of the previously attended event (prev).
    */
    return max(0 , k , 0)
};
