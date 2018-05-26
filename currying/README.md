# What is currying
    Technique to translate the evaluation of a function that takes
    multiple arguments into evaluating a sequence of functions,
    each with a single argument. Currying is related to,
    but not the same as, partial application. <sup>[1]</sup>

    Simply put curry translates a function with arity (n) parameters to
    single parameter evaluating functions <br/>
    ```
    f(a,b,c) --> f(a)(b)(c)
    ```

```
    function abc(a) {
        return function(x) {
            return function(y) {
                return function(z) {
                    return a(x, y, z);
                }
            }
        }
    }
```

<sup>[1]</sup> [Wikipedia - Currying](http://2ality.com/2017/11/currying-in-js.html)

## Further reading
 * [Medium post](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
 * [More in depth understanding of currying](http://2ality.com/2017/11/currying-in-js.html)
